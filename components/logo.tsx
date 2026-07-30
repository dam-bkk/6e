/**
 * Mascotte Zeste : orange 3D (dégradés radiaux + reflets) avec feuille et sourire.
 * Les ids de gradients sont préfixés pour éviter les collisions si le SVG
 * apparaît plusieurs fois dans la page.
 */
export type Accessory =
  | "aucun"
  | "lunettes"
  | "casquette"
  | "noeud"
  | "etoiles"
  | "couronne";

export function ZesteLogo({
  size = 36,
  accessory = "aucun",
}: {
  size?: number;
  accessory?: Accessory;
}) {
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

      {/* Accessoires débloqués à l'XP */}
      {accessory === "lunettes" && (
        <g stroke="#2d2d3f" strokeWidth="2" fill="rgba(255,255,255,0.35)">
          <circle cx="24.5" cy="34.5" r="6.2" />
          <circle cx="39.5" cy="34.5" r="6.2" />
          <line x1="30.7" y1="34.5" x2="33.3" y2="34.5" />
          <line x1="18.3" y1="33" x2="9" y2="30.5" />
          <line x1="45.7" y1="33" x2="55" y2="30.5" />
        </g>
      )}
      {accessory === "casquette" && (
        <g>
          <path d="M14 22 Q17 8 32 8.5 Q47 8 50 22 Q40 17 32 17 Q24 17 14 22 Z" fill="#1d5fa8" stroke="#2d2d3f" strokeWidth="2" />
          <path d="M46 15 Q58 15.5 60 21 Q54 22.5 47 21.5 Z" fill="#2E5DBE" stroke="#2d2d3f" strokeWidth="2" />
          <circle cx="32" cy="9.5" r="2.2" fill="#FFD166" stroke="#2d2d3f" strokeWidth="1.5" />
        </g>
      )}
      {accessory === "noeud" && (
        <g stroke="#2d2d3f" strokeWidth="1.8">
          <path d="M20 13 Q13 8 11 14 Q10 19 17 18 Z" fill="#E85D7A" />
          <path d="M20 13 Q25 7 28 12 Q29 17 21 17 Z" fill="#E85D7A" />
          <circle cx="20" cy="14.5" r="2.6" fill="#D14063" />
        </g>
      )}
      {accessory === "etoiles" && (
        <g fill="#FFD166" stroke="#2d2d3f" strokeWidth="1.2">
          <path d="M10 18 l1.8 3.6 4 .6 -2.9 2.8 .7 4 -3.6 -1.9 -3.6 1.9 .7 -4 -2.9 -2.8 4 -.6 Z" />
          <path d="M52 14 l1.4 2.9 3.2 .5 -2.3 2.2 .5 3.2 -2.8 -1.5 -2.8 1.5 .5 -3.2 -2.3 -2.2 3.2 -.5 Z" />
        </g>
      )}
      {accessory === "couronne" && (
        <g>
          <path d="M17 15 L20 5 L26.5 11 L32 3 L37.5 11 L44 5 L47 15 Q32 10.5 17 15 Z" fill="#FFD166" stroke="#2d2d3f" strokeWidth="2" />
          <circle cx="20.5" cy="6.5" r="1.8" fill="#E85D7A" stroke="#2d2d3f" strokeWidth="1.2" />
          <circle cx="32" cy="4.5" r="1.8" fill="#5A3EC8" stroke="#2d2d3f" strokeWidth="1.2" />
          <circle cx="43.5" cy="6.5" r="1.8" fill="#0F6B52" stroke="#2d2d3f" strokeWidth="1.2" />
        </g>
      )}
    </svg>
  );
}
