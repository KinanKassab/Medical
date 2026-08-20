export type IconName =
  | 'book'
  | 'headset'
  | 'menu'
  | 'close'
  | 'chevron'
  | 'whatsapp'
  | 'envelope'
  | 'pin'
  | 'phone'
  | 'check'

const PATHS: Record<IconName, string> = {
  book: 'M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4Zm0 0v16',
  headset:
    'M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2h-2v-8h4M4 12v6a2 2 0 0 0 2 2h2v-8H4Z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  chevron: 'M6 9l6 6 6-6',
  whatsapp:
    'M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm4.6 12.2c-.2.6-1.2 1.1-1.7 1.1-.4 0-.9.2-3-.8-2.5-1.2-4.1-3.5-4.2-3.7-.2-.2-1.3-1.7-1.3-3.2 0-1.5.8-2.2 1.1-2.5.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2 0 .4-.1.6l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1 2.2 1.3 2.5 1.5.3.1.5.1.7-.1l.9-1.2c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.4 0 .2 0 1.1-.6 1.7Z',
  envelope:
    'M4 6h16v12H4V6Zm0 0 8 7 8-7',
  pin: 'M12 22s7-5.8 7-12a7 7 0 1 0-14 0c0 6.2 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  phone:
    'M6 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2C9 20 4 11 4 5a2 2 0 0 1 2-2Z',
  check: 'M5 13l4 4L19 7',
}

export function Icon({
  name,
  className,
  decorative = true,
}: {
  name: IconName
  className?: string
  decorative?: boolean
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className ? `icon ${className}` : 'icon'}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
