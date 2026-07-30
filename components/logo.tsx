/** Mascotte Zeste : un quartier d'agrume qui sourit */
export function ZesteLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      {/* écorce */}
      <circle cx="32" cy="32" r="29" fill="#e8492f" stroke="#2a2440" strokeWidth="3" />
      {/* chair */}
      <circle cx="32" cy="32" r="23" fill="#ffd166" />
      {/* quartiers */}
      <g stroke="#e8492f" strokeWidth="3" strokeLinecap="round">
        <line x1="32" y1="32" x2="32" y2="11" />
        <line x1="32" y1="32" x2="50" y2="21" />
        <line x1="32" y1="32" x2="50" y2="43" />
        <line x1="32" y1="32" x2="32" y2="53" />
        <line x1="32" y1="32" x2="14" y2="43" />
        <line x1="32" y1="32" x2="14" y2="21" />
      </g>
      {/* visage */}
      <circle cx="25" cy="30" r="2.6" fill="#2a2440" />
      <circle cx="39" cy="30" r="2.6" fill="#2a2440" />
      <path d="M25 38 Q32 44 39 38" fill="none" stroke="#2a2440" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
