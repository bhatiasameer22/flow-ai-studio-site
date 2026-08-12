export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="url(#logo-grad)" />
      <path
        d="M16 7L18.2 13.8L25 16L18.2 18.2L16 25L13.8 18.2L7 16L13.8 13.8L16 7Z"
        fill="#0A0B0C"
      />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9FE066" />
          <stop offset="1" stopColor="#F0C94A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
