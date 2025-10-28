import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
          borderRadius: '40px',
        }}
      >
        <svg
          width="180"
          height="180"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 12L52 24V40L32 52L12 40V24L32 12Z"
            fill="rgba(255,255,255,0.1)"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M32 20L44 27V37L32 44L20 37V27L32 20Z"
            fill="white"
          />
          <circle cx="32" cy="32" r="5" fill="rgba(255,255,255,0.3)" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
