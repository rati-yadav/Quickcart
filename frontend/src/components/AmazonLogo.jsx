/** QuickCart logo: white wordmark + orange cart icon (dark navbar) */
export function AmazonLogo({ className = '' }) {
  return (
    <svg
      className={`amazon-logo-svg ${className}`.trim()}
      viewBox="0 0 100 28"
      width="100"
      height="28"
      role="img"
      aria-label="QuickCart"
    >
      <text
        x="0"
        y="19"
        fill="#ffffff"
        fontSize="18"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="-0.5"
      >
        QuickCart
      </text>
      {/* Cart icon */}
      <path
        fill="#FF9900"
        d="M85 8h-2l-1.5-3h-5l-1.5 3h-2l-1 12h14l-1-12zm-7 0l1-2h2l1 2h-4z"
      />
    </svg>
  )
}
