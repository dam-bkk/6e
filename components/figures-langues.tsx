/**
 * Catalogue de figures — français 6e et anglais 6e.
 * Même style que components/figures.tsx (traits encre #2a2440, tints des domaines).
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

/** Texte centré (ancre au milieu), même typo que le Label de figures.tsx */
function Mid({
  x,
  y,
  children,
  fill = INK,
  size = 13,
}: {
  x: number;
  y: number;
  children: string;
  fill?: string;
  size?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight="700"
      fill={fill}
      textAnchor="middle"
      fontFamily="var(--font-nunito), sans-serif"
    >
      {children}
    </text>
  );
}

/** Petit chat stylisé (tête + corps), utilisé pour les prépositions anglaises */
function Cat({ x, y, headOnly = false }: { x: number; y: number; headOnly?: boolean }) {
  return (
    <g>
      {!headOnly && (
        <>
          <ellipse cx={x + 14} cy={y + 7} rx={13} ry={8} fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
          <path d={`M${x + 26} ${y + 5} q 8 -4 6 -12`} fill="none" stroke={INK} strokeWidth="2" />
        </>
      )}
      <polygon points={`${x - 8},${y - 5} ${x - 6},${y - 14} ${x - 1},${y - 7}`} fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
      <polygon points={`${x + 8},${y - 5} ${x + 6},${y - 14} ${x + 1},${y - 7}`} fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
      <circle cx={x} cy={y} r="9" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
      <circle cx={x - 3} cy={y - 1} r="1.4" fill={INK} />
      <circle cx={x + 3} cy={y - 1} r="1.4" fill={INK} />
    </g>
  );
}

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  "fr-classes-mots": {
    title: "Les classes de mots : variables à gauche, invariables à droite",
    svg: (
      <svg viewBox="0 0 360 216" className="w-full">
        <Mid x={62} y={16} fill={GREEN}>variables</Mid>
        <Mid x={299} y={16} fill={VIOLET}>invariables</Mid>
        {/* liens */}
        {[41, 79, 117, 155, 193].map((y, i) => (
          <line key={y} x1="110" y1={y} x2="134" y2={105 + i * 6} stroke={INK} strokeWidth="1.8" />
        ))}
        {[60, 117, 174].map((y, i) => (
          <line key={y} x1="250" y1={y} x2="226" y2={110 + i * 7} stroke={INK} strokeWidth="1.8" />
        ))}
        {/* bulle centrale */}
        <rect x="134" y="93" width="92" height="48" rx="14" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={180} y={112}>les classes</Mid>
        <Mid x={180} y={128}>de mots</Mid>
        {/* classes variables */}
        {["nom", "déterminant", "adjectif", "verbe", "pronom"].map((w, i) => (
          <g key={w}>
            <rect x="15" y={28 + i * 38} width="95" height="26" rx="13" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
            <Mid x={62.5} y={45 + i * 38} fill={GREEN}>{w}</Mid>
          </g>
        ))}
        {/* classes invariables */}
        {["adverbe", "préposition", "conjonction"].map((w, i) => (
          <g key={w}>
            <rect x="250" y={47 + i * 57} width="98" height="26" rx="13" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
            <Mid x={299} y={64 + i * 57} fill={VIOLET}>{w}</Mid>
          </g>
        ))}
      </svg>
    ),
  },

  "fr-phrase-fonctions": {
    title: "Les fonctions dans la phrase, groupe par groupe",
    svg: (
      <svg viewBox="0 0 360 130" className="w-full">
        {/* groupes de la phrase */}
        <rect x="23" y="45" width="64" height="30" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={55} y={65}>Le chat</Mid>
        <rect x="93" y="45" width="56" height="30" rx="8" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={121} y={65}>mange</Mid>
        <rect x="155" y="45" width="72" height="30" rx="8" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={191} y={65}>la souris</Mid>
        <rect x="233" y="45" width="104" height="30" rx="8" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={285} y={65}>dans le jardin</Mid>
        <Mid x={345} y={66} size={16}>.</Mid>
        {/* flèches vers les étiquettes */}
        {[
          { cx: 55, c: BLUE, label: "sujet" },
          { cx: 121, c: RED, label: "verbe" },
          { cx: 191, c: GREEN, label: "COD" },
          { cx: 285, c: VIOLET, label: "CC de lieu" },
        ].map((f) => (
          <g key={f.label}>
            <line x1={f.cx} y1="78" x2={f.cx} y2="92" stroke={f.c} strokeWidth="2" />
            <path d={`M${f.cx} 97 l-4 -7 h8 z`} fill={f.c} />
            <Mid x={f.cx} y={114} fill={f.c}>{f.label}</Mid>
          </g>
        ))}
      </svg>
    ),
  },

  "fr-frise-temps": {
    title: "Les temps sur l'axe du temps",
    svg: (
      <svg viewBox="0 0 360 160" className="w-full">
        {/* axe du temps */}
        <line x1="15" y1="42" x2="336" y2="42" stroke={INK} strokeWidth="2.5" />
        <path d="M345 42 l-9 -5 v10 z" fill={INK} />
        <line x1="124" y1="22" x2="124" y2="152" stroke={INK} strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="236" y1="22" x2="236" y2="152" stroke={INK} strokeWidth="1.2" strokeDasharray="4 3" />
        <Mid x={68} y={25} fill={BLUE}>passé</Mid>
        <Mid x={180} y={25} fill={RED}>présent</Mid>
        <Mid x={290} y={25} fill={GREEN}>futur</Mid>
        {/* temps du passé */}
        {["imparfait", "passé simple", "passé composé"].map((t, i) => (
          <g key={t}>
            <rect x="12" y={58 + i * 34} width="104" height="27" rx="13" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
            <Mid x={64} y={76 + i * 34} fill={BLUE}>{t}</Mid>
          </g>
        ))}
        {/* présent */}
        <rect x="132" y="58" width="96" height="27" rx="13" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={180} y={76} fill={RED}>présent</Mid>
        {/* futur */}
        <rect x="244" y="58" width="104" height="27" rx="13" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={296} y={76} fill={GREEN}>futur simple</Mid>
      </svg>
    ),
  },

  "fr-accord-gn": {
    title: "La chaîne d'accord dans le groupe nominal",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        <Mid x={180} y={24} fill={RED}>le pluriel se propage</Mid>
        {/* les mots */}
        <rect x="42" y="55" width="58" height="36" rx="10" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <text x={71} y={80} textAnchor="middle" fontSize="17" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">
          le<tspan fill={RED}>s</tspan>
        </text>
        <rect x="136" y="55" width="88" height="36" rx="10" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <text x={180} y={80} textAnchor="middle" fontSize="17" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">
          petite<tspan fill={RED}>s</tspan>
        </text>
        <rect x="260" y="55" width="76" height="36" rx="10" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <text x={298} y={80} textAnchor="middle" fontSize="17" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">
          fille<tspan fill={RED}>s</tspan>
        </text>
        {/* flèches de propagation */}
        <line x1="100" y1="73" x2="127" y2="73" stroke={RED} strokeWidth="2.5" />
        <path d="M136 73 l-9 -5 v10 z" fill={RED} />
        <line x1="224" y1="73" x2="251" y2="73" stroke={RED} strokeWidth="2.5" />
        <path d="M260 73 l-9 -5 v10 z" fill={RED} />
        {/* natures */}
        <Mid x={71} y={112} fill={BLUE}>déterminant</Mid>
        <Mid x={180} y={112} fill={GREEN}>adjectif</Mid>
        <Mid x={298} y={112} fill={VIOLET}>nom</Mid>
        <Mid x={180} y={140}>« filles » est féminin pluriel : tout le groupe s&apos;accorde</Mid>
      </svg>
    ),
  },

  "en-clock": {
    title: "Telling the time : o'clock, past, to",
    svg: (
      <svg viewBox="0 0 360 205" className="w-full">
        {/* moitié \"past\" (droite) et moitié \"to\" (gauche) */}
        <path d="M180 41 A62 62 0 0 1 180 165 Z" fill={GREEN_TINT} />
        <path d="M180 41 A62 62 0 0 0 180 165 Z" fill={RED_TINT} />
        <circle cx="180" cy="103" r="62" fill="none" stroke={INK} strokeWidth="2.5" />
        {/* repères 12 - 3 - 6 - 9 */}
        <line x1="180" y1="41" x2="180" y2="51" stroke={INK} strokeWidth="2.5" />
        <line x1="242" y1="103" x2="232" y2="103" stroke={INK} strokeWidth="2.5" />
        <line x1="180" y1="165" x2="180" y2="155" stroke={INK} strokeWidth="2.5" />
        <line x1="118" y1="103" x2="128" y2="103" stroke={INK} strokeWidth="2.5" />
        <Mid x={180} y={68}>12</Mid>
        <Mid x={222} y={108}>3</Mid>
        <Mid x={180} y={150}>6</Mid>
        <Mid x={138} y={108}>9</Mid>
        <Mid x={205} y={88} fill={GREEN}>past</Mid>
        <Mid x={152} y={124} fill={RED}>to</Mid>
        <circle cx="180" cy="103" r="4" fill={INK} />
        {/* les quatre positions clés */}
        <Mid x={180} y={22} fill={VIOLET}>o&apos;clock</Mid>
        <Mid x={300} y={108} fill={GREEN}>quarter past</Mid>
        <Mid x={180} y={195} fill={GREEN}>half past</Mid>
        <Mid x={60} y={108} fill={RED}>quarter to</Mid>
      </svg>
    ),
  },

  "en-prepositions": {
    title: "Where is the cat ? Les prépositions de lieu",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* in : le chat est dans la boîte */}
        <rect x="39" y="45" width="46" height="34" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Cat x={62} y={42} headOnly />
        <Mid x={62} y={105} fill={GREEN} size={14}>in</Mid>
        {/* on : le chat est sur la boîte */}
        <rect x="157" y="52" width="46" height="34" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Cat x={166} y={37} />
        <Mid x={180} y={105} fill={GREEN} size={14}>on</Mid>
        {/* under : le chat est sous la boîte */}
        <rect x="275" y="30" width="46" height="34" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Cat x={288} y={80} />
        <Mid x={298} y={105} fill={GREEN} size={14}>under</Mid>
        {/* next to : le chat est à côté de la boîte */}
        <rect x="85" y="130" width="46" height="34" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Cat x={150} y={150} />
        <Mid x={120} y={190} fill={GREEN} size={14}>next to</Mid>
        {/* behind : le chat est derrière la boîte */}
        <Cat x={240} y={124} headOnly />
        <rect x="227" y="130" width="46" height="34" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={250} y={190} fill={GREEN} size={14}>behind</Mid>
      </svg>
    ),
  },

  "en-be-map": {
    title: "Be au présent : am, is ou are ?",
    svg: (
      <svg viewBox="0 0 360 195" className="w-full">
        {/* liens pronoms → formes */}
        <line x1="70" y1="42" x2="70" y2="111" stroke={INK} strokeWidth="1.8" />
        <line x1="152" y1="42" x2="168" y2="111" stroke={INK} strokeWidth="1.8" />
        <line x1="189" y1="42" x2="180" y2="111" stroke={INK} strokeWidth="1.8" />
        <line x1="224" y1="42" x2="192" y2="111" stroke={INK} strokeWidth="1.8" />
        <line x1="258" y1="42" x2="282" y2="111" stroke={INK} strokeWidth="1.8" />
        <line x1="295" y1="42" x2="292" y2="111" stroke={INK} strokeWidth="1.8" />
        <line x1="334" y1="42" x2="302" y2="111" stroke={INK} strokeWidth="1.8" />
        {/* pronoms */}
        {[
          { x: 56, w: 28, label: "I" },
          { x: 137, w: 30, label: "he" },
          { x: 171, w: 36, label: "she" },
          { x: 211, w: 26, label: "it" },
          { x: 240, w: 36, label: "you" },
          { x: 280, w: 30, label: "we" },
          { x: 314, w: 40, label: "they" },
        ].map((p) => (
          <g key={p.label}>
            <rect x={p.x} y="18" width={p.w} height="24" rx="12" fill="#fff" stroke={INK} strokeWidth="2" />
            <Mid x={p.x + p.w / 2} y={35}>{p.label}</Mid>
          </g>
        ))}
        {/* les trois formes */}
        <circle cx="70" cy="138" r="27" fill={RED_TINT} stroke={RED} strokeWidth="2.5" />
        <text x={70} y={145} textAnchor="middle" fontSize="20" fontWeight="800" fill={RED} fontFamily="var(--font-baloo), sans-serif">am</text>
        <circle cx="180" cy="138" r="27" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2.5" />
        <text x={180} y={145} textAnchor="middle" fontSize="20" fontWeight="800" fill={GREEN} fontFamily="var(--font-baloo), sans-serif">is</text>
        <circle cx="292" cy="138" r="27" fill={BLUE_TINT} stroke={BLUE} strokeWidth="2.5" />
        <text x={292} y={145} textAnchor="middle" fontSize="20" fontWeight="800" fill={BLUE} fontFamily="var(--font-baloo), sans-serif">are</text>
        {/* exemples */}
        <Mid x={70} y={187} fill={RED}>I am 11.</Mid>
        <Mid x={180} y={187} fill={GREEN}>She is tall.</Mid>
        <Mid x={292} y={187} fill={BLUE}>We are ready.</Mid>
      </svg>
    ),
  },
};
