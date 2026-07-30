/**
 * Catalogue de figures — défis intermatières (missions 6e/5e).
 * Même style que components/figures.tsx (traits encre #2a2440, tints des domaines).
 * Chaque figure pose le décor de la mission ET donne un repère utile.
 */

const INK = "#2a2440";
const BLUE = "#1d5fa8";
const BLUE_TINT = "#dcedff";
const RED = "#b32b44";
const RED_TINT = "#ffe3e2";
const GREEN = "#0f6b52";
const GREEN_TINT = "#d7f4e8";
const VIOLET = "#5a3ec8";
const VIOLET_TINT = "#e9e3ff";
const ORANGE = "#c26a12";
const ORANGE_TINT = "#ffe8c6";
const GREY_TINT = "#e7e4ee";

function Label({
  x,
  y,
  children,
  fill = INK,
  anchor = "start",
  size = 13,
}: {
  x: number;
  y: number;
  children: string;
  fill?: string;
  anchor?: "start" | "middle" | "end";
  size?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight="700"
      fill={fill}
      textAnchor={anchor}
      fontFamily="var(--font-nunito), sans-serif"
    >
      {children}
    </text>
  );
}

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  /* ============================== MISSION 1 — ÉGYPTE ============================== */
  "int-pyramides": {
    title: "La grande pyramide de Khéops, vue en coupe",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {/* soleil */}
        <circle cx="42" cy="36" r="16" fill={ORANGE_TINT} stroke={ORANGE} strokeWidth="2.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line
            key={a}
            x1={42 + 22 * Math.cos((a * Math.PI) / 180)}
            y1={36 + 22 * Math.sin((a * Math.PI) / 180)}
            x2={42 + 29 * Math.cos((a * Math.PI) / 180)}
            y2={36 + 29 * Math.sin((a * Math.PI) / 180)}
            stroke={ORANGE}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
        {/* sable */}
        <rect x="8" y="160" width="344" height="14" rx="7" fill={ORANGE_TINT} stroke={INK} strokeWidth="2" />
        {/* palmiers */}
        <g stroke={INK} strokeWidth="2" fill="none">
          <path d="M56 160 q4 -22 0 -38" />
          <path d="M56 122 q-14 -8 -24 -2 q12 -2 24 6" fill={GREEN_TINT} />
          <path d="M56 122 q14 -8 24 -2 q-12 -2 -24 6" fill={GREEN_TINT} />
          <path d="M56 122 q-2 -14 8 -20 q-6 8 -4 20" fill={GREEN_TINT} />
          <path d="M88 160 q-3 -16 0 -28" />
          <path d="M88 132 q-11 -6 -19 -1 q10 -2 19 5" fill={GREEN_TINT} />
          <path d="M88 132 q11 -6 19 -1 q-10 -2 -19 5" fill={GREEN_TINT} />
        </g>
        {/* pyramide en coupe */}
        <path d="M120 160 L226 44 L332 160 Z" fill={ORANGE_TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        {/* couloir ascendant + chambre du roi */}
        <path d="M150 160 L214 108" stroke={INK} strokeWidth="2" fill="none" />
        <rect x="214" y="98" width="26" height="18" fill="#fff" stroke={INK} strokeWidth="2" />
        <path d="M240 116 L262 160" stroke={INK} strokeWidth="2" strokeDasharray="4 4" fill="none" />
        <Label x={250} y={92} size={11}>chambre</Label>
        {/* cote hauteur */}
        <line x1="226" y1="44" x2="226" y2="160" stroke={RED} strokeWidth="1.6" strokeDasharray="5 4" />
        <line x1="343" y1="50" x2="343" y2="154" stroke={RED} strokeWidth="2" />
        <path d="M343 44 l-4 8 h8 z" fill={RED} />
        <path d="M343 160 l-4 -8 h8 z" fill={RED} />
        <Label x={349} y={96} fill={RED} anchor="middle" size={12}>≈</Label>
        <Label x={340} y={112} fill={RED} anchor="end" size={12}>147 m</Label>
        {/* cote base */}
        <line x1="126" y1="192" x2="326" y2="192" stroke={BLUE} strokeWidth="2" />
        <path d="M120 192 l8 -4 v8 z" fill={BLUE} />
        <path d="M332 192 l-8 -4 v8 z" fill={BLUE} />
        <Label x={226} y={187} fill={BLUE} anchor="middle">base : 230 m</Label>
        {/* repère date */}
        <Label x={12} y={82} size={12}>Khéops,</Label>
        <Label x={12} y={97} size={12}>vers 2560</Label>
        <Label x={12} y={112} size={12}>av. J.-C.</Label>
      </svg>
    ),
  },

  /* ============================== MISSION 2 — OLYMPIE ============================== */
  "int-olympie": {
    title: "Le sanctuaire d'Olympie et sa piste",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* temple : fronton + colonnes */}
        <path d="M40 62 L110 30 L180 62 Z" fill={GREY_TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="44" y="62" width="132" height="8" fill="#fff" stroke={INK} strokeWidth="2" />
        {[56, 88, 120, 152].map((x) => (
          <g key={x}>
            <rect x={x} y="70" width="12" height="52" fill={GREY_TINT} stroke={INK} strokeWidth="2" />
            <line x1={x + 4} y1="74" x2={x + 4} y2="118" stroke={INK} strokeWidth="1" />
            <line x1={x + 8} y1="74" x2={x + 8} y2="118" stroke={INK} strokeWidth="1" />
          </g>
        ))}
        <rect x="40" y="122" width="140" height="8" fill="#fff" stroke={INK} strokeWidth="2" />
        <Label x={110} y={52} anchor="middle" size={11} fill={VIOLET}>Zeus</Label>
        {/* vasque et flamme */}
        <path d="M292 96 q0 14 18 14 q18 0 18 -14 z" fill={GREY_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="310" y1="110" x2="310" y2="128" stroke={INK} strokeWidth="2.5" />
        <line x1="296" y1="128" x2="324" y2="128" stroke={INK} strokeWidth="2.5" />
        <path
          d="M310 92 q-12 -12 -2 -26 q0 8 6 12 q4 -8 2 -14 q12 12 2 26 q-4 4 -8 2 z"
          fill={RED_TINT}
          stroke={RED}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <Label x={310} y={148} anchor="middle" size={11}>flamme</Label>
        {/* piste (stade) */}
        <ellipse cx="180" cy="172" rx="164" ry="24" fill={ORANGE_TINT} stroke={INK} strokeWidth="2.5" />
        <ellipse cx="180" cy="172" rx="118" ry="13" fill="#fff" stroke={INK} strokeWidth="2" />
        <path d="M62 172 a118 13 0 0 1 236 0" stroke={INK} strokeWidth="1.4" strokeDasharray="6 6" fill="none" />
        <Label x={180} y={177} anchor="middle" size={11} fill={ORANGE}>la piste du stade</Label>
        {/* repère date */}
        <rect x="204" y="26" width="132" height="26" rx="8" fill={VIOLET_TINT} stroke={VIOLET} strokeWidth="2" />
        <Label x={270} y={44} anchor="middle" fill={VIOLET}>776 av. J.-C.</Label>
        <Label x={270} y={66} anchor="middle" size={11}>premiers Jeux connus</Label>
      </svg>
    ),
  },

  /* ============================== MISSION 3 — OCÉAN ============================== */
  "int-ocean": {
    title: "La traversée de l'Atlantique, du Havre à New York",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        {/* océan */}
        <rect x="6" y="8" width="348" height="174" rx="12" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        {/* Amérique (à gauche) */}
        <path
          d="M6 30 q34 -4 44 14 q10 18 -4 34 q22 6 16 26 q-6 20 -26 24 q10 16 -2 28 q-8 8 -28 8 z"
          fill={GREEN_TINT}
          stroke={INK}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <Label x={16} y={100} size={12}>Amérique</Label>
        {/* Europe (à droite) */}
        <path
          d="M354 22 q-40 0 -46 20 q-6 18 10 26 q-20 8 -12 26 q8 16 28 14 q-8 18 20 24 z"
          fill={GREEN_TINT}
          stroke={INK}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <Label x={346} y={64} anchor="end" size={12}>Europe</Label>
        {/* ports */}
        <circle cx="62" cy="70" r="4.5" fill={RED} />
        <Label x={70} y={62} size={12} fill={RED}>New York</Label>
        <circle cx="312" cy="60" r="4.5" fill={RED} />
        <Label x={306} y={84} anchor="end" size={12} fill={RED}>Le Havre</Label>
        {/* trajet */}
        <path d="M304 64 Q186 118 72 74" stroke={RED} strokeWidth="2.5" strokeDasharray="7 6" fill="none" />
        <path d="M66 71 l13 -2 -6 12 z" fill={RED} />
        <Label x={186} y={122} anchor="middle" fill={RED}>≈ 5 800 km</Label>
        {/* cargo porte-conteneurs */}
        <g transform="translate(150,138)">
          <path d="M0 14 L10 30 H62 L72 14 Z" fill={INK} />
          <rect x="14" y="2" width="14" height="12" fill={ORANGE_TINT} stroke={INK} strokeWidth="2" />
          <rect x="30" y="2" width="14" height="12" fill={RED_TINT} stroke={INK} strokeWidth="2" />
          <rect x="46" y="-6" width="12" height="20" fill="#fff" stroke={INK} strokeWidth="2" />
          <path d="M-12 24 q8 8 16 0 q8 8 16 0" stroke={BLUE} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M64 30 q8 8 16 0" stroke={BLUE} strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <Label x={186} y={30} anchor="middle" size={11} fill={BLUE}>océan Atlantique</Label>
      </svg>
    ),
  },

  /* ============================== MISSION 4 — CHÂTEAU FORT ============================== */
  "int-chateau": {
    title: "Le château fort et ses défenses",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {/* donjon (derrière le rempart) */}
        <rect x="150" y="34" width="52" height="96" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        {[150, 164, 178, 192].map((x) => (
          <rect key={x} x={x} y="26" width="10" height="8" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        ))}
        <rect x="169" y="52" width="14" height="20" rx="7" fill="#fff" stroke={INK} strokeWidth="2" />
        <Label x={176} y={20} anchor="middle" fill={VIOLET} size={12}>donjon</Label>
        {/* tours d'angle */}
        {[40, 276].map((x) => (
          <g key={x}>
            <rect x={x} y="78" width="44" height="66" fill={GREY_TINT} stroke={INK} strokeWidth="2.5" />
            <path d={`M${x - 6} 78 L${x + 22} 48 L${x + 50} 78 Z`} fill={RED_TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <rect x={x + 18} y="96" width="8" height="18" rx="4" fill="#fff" stroke={INK} strokeWidth="2" />
          </g>
        ))}
        {/* rempart à créneaux */}
        <rect x="84" y="98" width="192" height="46" fill={GREY_TINT} stroke={INK} strokeWidth="2.5" />
        {[92, 116, 140, 208, 232, 256].map((x) => (
          <rect key={x} x={x} y="90" width="12" height="8" fill={GREY_TINT} stroke={INK} strokeWidth="2" />
        ))}
        <Label x={252} y={122} size={11}>rempart</Label>
        {/* porte + pont-levis */}
        <path d="M162 144 v-24 a18 18 0 0 1 36 0 v24" fill={INK} />
        <path d="M162 144 L146 176 H214 L198 144 Z" fill={ORANGE_TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="150" y1="170" x2="210" y2="170" stroke={INK} strokeWidth="1.6" />
        <line x1="158" y1="156" x2="206" y2="156" stroke={INK} strokeWidth="1.6" />
        <line x1="162" y1="120" x2="149" y2="170" stroke={INK} strokeWidth="1.6" strokeDasharray="3 3" />
        <line x1="198" y1="120" x2="211" y2="170" stroke={INK} strokeWidth="1.6" strokeDasharray="3 3" />
        <Label x={222} y={168} size={11} fill={ORANGE}>pont-levis</Label>
        {/* douves */}
        <rect x="24" y="176" width="312" height="22" rx="11" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M52 187 q8 6 16 0 q8 6 16 0 M240 187 q8 6 16 0 q8 6 16 0" stroke={BLUE} strokeWidth="2" fill="none" strokeLinecap="round" />
        <Label x={96} y={193} size={11} fill={BLUE}>douves</Label>
        {/* meurtrière */}
        <rect x="106" y="112" width="6" height="20" rx="3" fill="#fff" stroke={INK} strokeWidth="2" />
        <Label x={92} y={161} size={11} anchor="start">meurtrière</Label>
        <line x1="109" y1="136" x2="112" y2="150" stroke={INK} strokeWidth="1.4" />
      </svg>
    ),
  },

  /* ============================== MISSION 5 — CLIMAT ============================== */
  "int-climat": {
    title: "La Terre se réchauffe : +1,1 °C depuis 1900",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* soleil */}
        <circle cx="36" cy="32" r="13" fill={ORANGE_TINT} stroke={ORANGE} strokeWidth="2.5" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <line
            key={a}
            x1={36 + 18 * Math.cos((a * Math.PI) / 180)}
            y1={32 + 18 * Math.sin((a * Math.PI) / 180)}
            x2={36 + 24 * Math.cos((a * Math.PI) / 180)}
            y2={32 + 24 * Math.sin((a * Math.PI) / 180)}
            stroke={ORANGE}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
        {/* planète */}
        <circle cx="72" cy="124" r="52" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M40 100 q18 -10 30 2 q-4 14 -20 16 q-14 -4 -10 -18 z" fill={GREEN_TINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <path d="M78 138 q16 -6 24 6 q-2 14 -18 14 q-12 -6 -6 -20 z" fill={GREEN_TINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <Label x={72} y={192} anchor="middle" size={11}>la Terre</Label>
        {/* thermomètre */}
        <rect x="146" y="34" width="14" height="112" rx="7" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <rect x="150" y="74" width="6" height="76" rx="3" fill={RED} />
        <circle cx="153" cy="156" r="12" fill={RED} stroke={INK} strokeWidth="2.5" />
        {[48, 68, 88, 108, 128].map((y) => (
          <line key={y} x1="160" y1={y} x2="167" y2={y} stroke={INK} strokeWidth="1.6" />
        ))}
        {/* courbe de température */}
        <line x1="196" y1="140" x2="348" y2="140" stroke={INK} strokeWidth="2" />
        <line x1="196" y1="140" x2="196" y2="36" stroke={INK} strokeWidth="2" />
        <path d="M196 36 l4 8 h-8 z" fill={INK} />
        <path
          d="M200 122 q14 6 26 -2 q12 -8 22 0 q10 8 22 -4 q12 -12 22 -18 q12 -8 24 -26"
          stroke={RED}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="316" cy="72" r="4.5" fill={RED} />
        <Label x={324} y={64} fill={RED}>+1,1 °C</Label>
        <Label x={200} y={156} size={11}>1900</Label>
        <Label x={344} y={156} size={11} anchor="end">2025</Label>
        <Label x={190} y={30} size={11} anchor="start">température moyenne</Label>
        {/* éolienne */}
        <g transform="translate(268,176)">
          <line x1="0" y1="16" x2="0" y2="-14" stroke={INK} strokeWidth="2.5" />
          <circle cx="0" cy="-14" r="3.5" fill={GREEN} />
          <path d="M0 -14 L4 -34 L-4 -30 Z" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2" strokeLinejoin="round" />
          <path d="M0 -14 L18 -6 L12 -14 Z" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2" strokeLinejoin="round" />
          <path d="M0 -14 L-18 -4 L-10 -2 Z" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2" strokeLinejoin="round" />
        </g>
        <Label x={300} y={192} size={11} fill={GREEN}>énergie du vent</Label>
      </svg>
    ),
  },

  /* ============================== MISSION 6 — MAGELLAN ============================== */
  "int-decouvertes": {
    title: "Le tour du monde de Magellan (1519-1522)",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* globe */}
        <circle cx="180" cy="104" r="76" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <ellipse cx="180" cy="104" rx="76" ry="26" stroke={INK} strokeWidth="1.2" fill="none" opacity="0.35" />
        <ellipse cx="180" cy="104" rx="30" ry="76" stroke={INK} strokeWidth="1.2" fill="none" opacity="0.35" />
        {/* Amériques */}
        <path
          d="M136 48 q-18 12 -12 30 q4 12 16 14 q-8 12 0 26 q8 14 4 28 q14 -8 12 -26 q-2 -14 -10 -22 q14 -4 12 -20 q-2 -18 -22 -30 z"
          fill={GREEN_TINT}
          stroke={INK}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Europe-Afrique */}
        <path
          d="M216 40 q22 8 26 28 q4 16 -8 24 q10 12 4 28 q-6 16 -22 18 q6 -16 0 -28 q-6 -12 -4 -24 q-14 -6 -10 -22 q4 -16 14 -24 z"
          fill={GREEN_TINT}
          stroke={INK}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* route : aller vers l'ouest, retour par l'est (pointillé derrière) */}
        <path
          d="M232 78 Q196 96 160 112 Q136 122 124 140"
          stroke={RED}
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M124 140 Q106 166 150 176 Q216 188 258 156 Q286 132 244 92"
          stroke={RED}
          strokeWidth="2.5"
          strokeDasharray="6 5"
          fill="none"
        />
        <path d="M240 86 l12 0 -5 11 z" fill={RED} />
        {/* départ / arrivée : Espagne */}
        <circle cx="232" cy="78" r="4.5" fill={RED} />
        <Label x={244} y={70} size={12} fill={RED}>Espagne</Label>
        <Label x={100} y={158} size={11} fill={RED} anchor="end">cap à</Label>
        <Label x={100} y={172} size={11} fill={RED} anchor="end">l'ouest</Label>
        {/* caravelle */}
        <g transform="translate(56,52)">
          <path d="M-14 10 L-8 20 H16 L22 10 Z" fill={INK} />
          <line x1="4" y1="10" x2="4" y2="-14" stroke={INK} strokeWidth="2.5" />
          <path d="M4 -14 q14 8 0 22 z" fill={RED_TINT} stroke={RED} strokeWidth="2" strokeLinejoin="round" />
        </g>
        {/* cartouche dates */}
        <rect x="236" y="170" width="118" height="24" rx="8" fill={VIOLET_TINT} stroke={VIOLET} strokeWidth="2" />
        <Label x={295} y={187} anchor="middle" fill={VIOLET}>1519 - 1522</Label>
        <Label x={16} y={192} size={11}>5 navires au départ, 1 seul au retour</Label>
      </svg>
    ),
  },
};
