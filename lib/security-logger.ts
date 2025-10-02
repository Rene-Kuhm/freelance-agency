// Security event logging system
// Logs to console in development, database in production

import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";

export type SecurityEvent =
  | "login_success"
  | "login_failed"
  | "rate_limit_exceeded"
  | "unauthorized_access"
  | "password_change"
  | "session_created"
  | "session_destroyed"
  | "suspicious_activity";

export interface SecurityLogData {
  event: SecurityEvent;
  email?: string;
  ipAddress?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
}

export async function logSecurityEvent(data: SecurityLogData): Promise<void> {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    ...data,
  };

  // Always log to console
  console.log("[SECURITY]", JSON.stringify(logEntry));

  // In production with database, also log to database
  if (process.env.NODE_ENV === "production" && process.env.DATABASE_URL) {
    try {
      await prisma.securityLog.create({
        data: {
          event: data.event,
          email: data.email,
          ipAddress: data.ipAddress,
          userAgent: data.userAgent,
          metadata: data.metadata as Prisma.InputJsonValue | undefined,
        },
      });
    } catch (error) {
      console.error("[SECURITY] Failed to log to database:", error);
    }
  }
}

export async function getRecentSecurityLogs(limit: number = 100) {
  if (!process.env.DATABASE_URL) {
    return [];
  }

  try {
    return await prisma.securityLog.findMany({
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch {
    return [];
  }
}

export async function getFailedLoginAttempts(
  email: string,
  since: Date = new Date(Date.now() - 24 * 60 * 60 * 1000) // last 24 hours
) {
  if (!process.env.DATABASE_URL) {
    return 0;
  }

  try {
    return await prisma.securityLog.count({
      where: {
        event: "login_failed",
        email,
        createdAt: {
          gte: since,
        },
      },
    });
  } catch {
    return 0;
  }
}

export async function getSuspiciousActivity(
  hours: number = 24
): Promise<Array<{ email: string; count: number }>> {
  if (!process.env.DATABASE_URL) {
    return [];
  }

  try {
    const since = new Date(Date.now() - hours * 60 * 60 * 1000);
    const logs = await prisma.securityLog.groupBy({
      by: ["email"],
      where: {
        event: {
          in: ["login_failed", "rate_limit_exceeded", "unauthorized_access"],
        },
        createdAt: {
          gte: since,
        },
        email: {
          not: null,
        },
      },
      _count: {
        email: true,
      },
      having: {
        email: {
          _count: {
            gt: 5, // More than 5 suspicious events
          },
        },
      },
      orderBy: {
        _count: {
          email: "desc",
        },
      },
    });

    return logs.map((log) => ({
      email: log.email || "unknown",
      count: log._count.email,
    }));
  } catch {
    return [];
  }
}
