const base = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

export const BuildingIcon = () => (
  <svg {...base} aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    <path d="M10 21v-4h4v4" />
  </svg>
)

export const PinIcon = () => (
  <svg {...base} aria-hidden="true">
    <path d="M12 21s7-6.6 7-11.5a7 7 0 1 0-14 0C5 14.4 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
)

export const MailIcon = () => (
  <svg {...base} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const LinkIcon = () => (
  <svg {...base} aria-hidden="true">
    <path d="M9.5 14.5 14.5 9.5" />
    <path d="M11 6.5 12.6 5a3.5 3.5 0 1 1 5 5l-1.6 1.6" />
    <path d="M13 17.5 11.4 19a3.5 3.5 0 1 1-5-5l1.6-1.6" />
  </svg>
)

export const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25H4.7V23H.24V8.25ZM8.4 8.25h4.27v2.01h.06c.6-1.1 2.05-2.26 4.22-2.26 4.51 0 5.34 2.87 5.34 6.6V23h-4.45v-6.62c0-1.58-.03-3.6-2.2-3.6-2.21 0-2.55 1.7-2.55 3.48V23H8.4V8.25Z" />
  </svg>
)
