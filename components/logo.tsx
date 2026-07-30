/**
 * Mascotte Zeste : orange 3D (dégradés radiaux + reflets) avec feuille et sourire.
 * Les ids de gradients sont préfixés pour éviter les collisions si le SVG
 * apparaît plusieurs fois dans la page.
 */
export function ZesteLogo({ size = 36 }: { size?: number }) {
  const uid = "zl";
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        {/* Corps de l'orange : lumière en haut à gauche */}
        <radialGradient id={`${uid}-body`} cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFC66E" />
          <stop offset="45%" stopColor="#FF9F2E" />
          <stop offset="80%" stopColor="#F07514" />
          <stop offset="100%" stopColor="#D95E07" />
        </radialGradient>
        {/* Ombre interne bas-droite pour le volume */}
        <radialGradient id={`${uid}-shade`} cx="70%" cy="78%" r="60%">
          <stop offset="0%" stopColor="#B34A00" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#B34A00" stopOpacity="0" />
        </radialGradient>
        {/* Feuille */}
        <linearGradient id={`${uid}-leaf`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7ED07E" />
          <stop offset="100%" stopColor="#2E9E4F" />
        </linearGradient>
        {/* Reflet spéculaire */}
        <radialGradient id={`${uid}-gloss`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ombre au sol */}
      <ellipse cx="32" cy="58.5" rx="17" ry="3.6" fill="#2d2d3f" opacity="0.16" />

      {/* Tige */}
      <path
        d="M32 9.5 Q31.4 6.5 34 4.6"
        fill="none"
        stroke="#7A4A21"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Feuille */}
      <path
        d="M34.5 7.5 Q40.5 1.5 48 4.5 Q46.5 12 39.5 12.2 Q35.5 12.3 34.5 7.5 Z"
        fill={`url(#${uid}-leaf)`}
      />
      <path
        d="M36.5 8.8 Q41.5 6.2 45.8 5.6"
        fill="none"
        stroke="#1F7A3A"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Corps */}
      <circle cx="32" cy="34" r="24.5" fill={`url(#${uid}-body)`} />
      <circle cx="32" cy="34" r="24.5" fill={`url(#${uid}-shade)`} />

      {/* Reflet principal */}
      <ellipse
        cx="23"
        cy="23.5"
        rx="8.5"
        ry="6"
        fill={`url(#${uid}-gloss)`}
        transform="rotate(-28 23 23.5)"
      />
      {/* Petit reflet secondaire */}
      <circle cx="41.5" cy="19.5" r="2.1" fill="#FFFFFF" opacity="0.55" />

      {/* Visage */}
      <circle cx="24.5" cy="35" r="2.7" fill="#2d2d3f" />
      <circle cx="39.5" cy="35" r="2.7" fill="#2d2d3f" />
      {/* Éclat dans les yeux */}
      <circle cx="25.4" cy="34.1" r="0.9" fill="#FFFFFF" />
      <circle cx="40.4" cy="34.1" r="0.9" fill="#FFFFFF" />
      {/* Sourire */}
      <path
        d="M24.5 42.5 Q32 49 39.5 42.5"
        fill="none"
        stroke="#2d2d3f"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Joues */}
      <ellipse cx="19.5" cy="41.5" rx="3" ry="1.9" fill="#FF6B4A" opacity="0.5" />
      <ellipse cx="44.5" cy="41.5" rx="3" ry="1.9" fill="#FF6B4A" opacity="0.5" />
    </svg>
  );
}
