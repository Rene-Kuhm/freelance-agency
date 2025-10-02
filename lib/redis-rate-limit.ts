// Redis-based rate limiting for production
// Supports both Upstash Redis (serverless) and local Redis

import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

// Initialize Redis client (only if UPSTASH_REDIS_REST_URL is provided)
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

export interface RedisRateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

export interface RedisRateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export async function redisRateLimit(
  identifier: string,
  config: RedisRateLimitConfig = { maxAttempts: 5, windowMs: 15 * 60 * 1000 }
): Promise<RedisRateLimitResult> {
  // If Redis is not configured, fall back to in-memory rate limiting
  if (!redis) {
    const { rateLimit } = await import("./rate-limit");
    return rateLimit(identifier, config);
  }

  const key = `rate_limit:${identifier}`;
  const now = Date.now();
  const windowStart = now - config.windowMs;

  try {
    // Remove old entries outside the window
    await redis.zremrangebyscore(key, 0, windowStart);

    // Count current attempts in window
    const count = await redis.zcard(key);

    // Add current attempt
    await redis.zadd(key, { score: now, member: `${now}:${Math.random()}` });

    // Set expiration on key
    await redis.expire(key, Math.ceil(config.windowMs / 1000));

    const remaining = Math.max(0, config.maxAttempts - (count + 1));
    const success = count < config.maxAttempts;

    return {
      success,
      limit: config.maxAttempts,
      remaining,
      reset: now + config.windowMs,
    };
  } catch (error) {
    console.error("Redis rate limit error:", error);
    // Fall back to in-memory on error
    const { rateLimit } = await import("./rate-limit");
    return rateLimit(identifier, config);
  }
}

export async function resetRedisRateLimit(identifier: string): Promise<void> {
  if (!redis) return;

  const key = `rate_limit:${identifier}`;
  try {
    await redis.del(key);
  } catch (error) {
    console.error("Redis reset error:", error);
  }
}
