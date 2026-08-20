import { ImageResponse } from 'next/og'

export const alt = 'cytotc.com — معلومات عن سايتوتك وميزوبروستول'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b7a3a 0%, #0056b3 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 42, fontWeight: 700, marginBottom: 24 }}>
          cytotc.com
        </div>
        <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.3, maxWidth: 900 }}>
          Cytotec / Misoprostol information
        </div>
        <div style={{ fontSize: 28, marginTop: 28, opacity: 0.92 }}>
          Independent educational pages. Not the manufacturer website.
        </div>
      </div>
    ),
    size,
  )
}
