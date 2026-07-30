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

  "fr-trois-groupes": {
    title: "Les trois groupes de verbes",
    svg: (
      <svg viewBox="0 0 360 180" className="w-full">
        {/* trois colonnes */}
        <rect x="10" y="10" width="108" height="160" rx="14" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="126" y="10" width="108" height="160" rx="14" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <rect x="242" y="10" width="108" height="160" rx="14" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={64} y={33} fill={BLUE}>1er groupe</Mid>
        <Mid x={180} y={33} fill={GREEN}>2e groupe</Mid>
        <Mid x={296} y={33} fill={VIOLET}>3e groupe</Mid>
        <Mid x={64} y={54} size={11}>infinitif en -er</Mid>
        <Mid x={180} y={54} size={11}>{"-ir (→ -issons)"}</Mid>
        <Mid x={296} y={54} size={11}>tous les autres</Mid>
        {/* verbes modèles */}
        <text x={64} y={94} textAnchor="middle" fontSize="19" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">
          chant<tspan fill={BLUE}>er</tspan>
        </text>
        <text x={180} y={94} textAnchor="middle" fontSize="19" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">
          fin<tspan fill={GREEN}>ir</tspan>
        </text>
        <text x={296} y={94} textAnchor="middle" fontSize="19" fontWeight="800" fill={VIOLET} fontFamily="var(--font-baloo), sans-serif">
          prendre
        </text>
        <Mid x={64} y={122} size={12} fill={BLUE}>nous chantons</Mid>
        <Mid x={180} y={122} size={12} fill={GREEN}>nous finissons</Mid>
        <Mid x={296} y={122} size={12} fill={VIOLET}>nous prenons</Mid>
        <Mid x={64} y={152} size={11}>jouer, danser…</Mid>
        <Mid x={180} y={152} size={11}>choisir, grandir…</Mid>
        <Mid x={296} y={152} size={11}>venir, pouvoir…</Mid>
      </svg>
    ),
  },

  "fr-passe-compose": {
    title: "Le passé composé : auxiliaire au présent + participe passé",
    svg: (
      <svg viewBox="0 0 360 208" className="w-full">
        {/* la formule */}
        <text x={180} y={22} textAnchor="middle" fontSize="14" fontWeight="800" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          <tspan fill={BLUE}>être / avoir au présent</tspan> + <tspan fill={GREEN}>participe passé</tspan>
        </text>
        {/* exemple 1 : J'ai mangé */}
        <rect x="70" y="44" width="34" height="30" rx="9" fill="#fff" stroke={INK} strokeWidth="2" />
        <Mid x={87} y={64}>{"J'"}</Mid>
        <rect x="110" y="44" width="36" height="30" rx="9" fill={BLUE_TINT} stroke={BLUE} strokeWidth="2.5" />
        <Mid x={128} y={64} fill={BLUE}>ai</Mid>
        <rect x="152" y="44" width="70" height="30" rx="9" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2.5" />
        <Mid x={187} y={64} fill={GREEN}>mangé</Mid>
        <line x1="128" y1="76" x2="95" y2="94" stroke={BLUE} strokeWidth="2" />
        <Mid x={95} y={110} fill={BLUE} size={12}>avoir au présent</Mid>
        <line x1="187" y1="76" x2="252" y2="94" stroke={GREEN} strokeWidth="2" />
        <Mid x={252} y={110} fill={GREEN} size={12}>participe passé</Mid>
        {/* exemple 2 : Elle est partie */}
        <rect x="58" y="132" width="48" height="30" rx="9" fill="#fff" stroke={INK} strokeWidth="2" />
        <Mid x={82} y={152}>Elle</Mid>
        <rect x="112" y="132" width="36" height="30" rx="9" fill={BLUE_TINT} stroke={BLUE} strokeWidth="2.5" />
        <Mid x={130} y={152} fill={BLUE}>est</Mid>
        <rect x="154" y="132" width="66" height="30" rx="9" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2.5" />
        <Mid x={187} y={152} fill={GREEN}>partie</Mid>
        <line x1="130" y1="164" x2="95" y2="182" stroke={BLUE} strokeWidth="2" />
        <Mid x={95} y={198} fill={BLUE} size={12}>être au présent</Mid>
        <line x1="187" y1="164" x2="252" y2="182" stroke={GREEN} strokeWidth="2" />
        <Mid x={252} y={198} fill={GREEN} size={12}>participe passé</Mid>
      </svg>
    ),
  },

  "fr-homophones-cles": {
    title: "a ou à ? est ou et ? Le test de la substitution",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        {/* carte a / à */}
        <rect x="10" y="8" width="166" height="174" rx="14" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={93} y={32} fill={BLUE} size={15}>a ou à ?</Mid>
        <Mid x={93} y={52} size={11}>remplace par « avait »</Mid>
        <text x={97} y={80} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          Il <tspan fill={BLUE}>a</tspan> faim → Il <tspan fill={BLUE}>avait</tspan> faim
        </text>
        <path d="M32 91 l5 5 l9 -11" fill="none" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
        <Mid x={102} y={99} fill={GREEN} size={11}>ça marche : « a »</Mid>
        <text x={97} y={126} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          Il va <tspan fill={RED}>à</tspan> Paris → avait ?
        </text>
        <line x1="32" y1="135" x2="44" y2="147" stroke={RED} strokeWidth="3" strokeLinecap="round" />
        <line x1="44" y1="135" x2="32" y2="147" stroke={RED} strokeWidth="3" strokeLinecap="round" />
        <Mid x={102} y={145} fill={RED} size={11}>impossible : « à »</Mid>
        <Mid x={93} y={170} fill={BLUE} size={11}>a = verbe avoir</Mid>
        {/* carte est / et */}
        <rect x="184" y="8" width="166" height="174" rx="14" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={267} y={32} fill={GREEN} size={15}>est ou et ?</Mid>
        <Mid x={267} y={52} size={11}>remplace par « était »</Mid>
        <text x={271} y={80} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          Il <tspan fill={GREEN}>est</tspan> parti → <tspan fill={GREEN}>était</tspan> parti
        </text>
        <path d="M206 91 l5 5 l9 -11" fill="none" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
        <Mid x={276} y={99} fill={GREEN} size={11}>ça marche : « est »</Mid>
        <text x={271} y={126} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          pain <tspan fill={RED}>et</tspan> jus → était ?
        </text>
        <line x1="206" y1="135" x2="218" y2="147" stroke={RED} strokeWidth="3" strokeLinecap="round" />
        <line x1="218" y1="135" x2="206" y2="147" stroke={RED} strokeWidth="3" strokeLinecap="round" />
        <Mid x={276} y={145} fill={RED} size={11}>impossible : « et »</Mid>
        <Mid x={267} y={170} fill={GREEN} size={11}>est = verbe être</Mid>
      </svg>
    ),
  },

  "fr-famille-mots": {
    title: "La famille du radical « terre »",
    svg: (
      <svg viewBox="0 0 360 214" className="w-full">
        {/* rayons */}
        <line x1="152" y1="88" x2="96" y2="52" stroke={INK} strokeWidth="1.8" />
        <line x1="208" y1="88" x2="266" y2="52" stroke={INK} strokeWidth="1.8" />
        <line x1="152" y1="124" x2="94" y2="160" stroke={INK} strokeWidth="1.8" />
        <line x1="208" y1="124" x2="268" y2="160" stroke={INK} strokeWidth="1.8" />
        {/* le radical au centre */}
        <circle cx="180" cy="106" r="34" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <text x={180} y={106} textAnchor="middle" fontSize="17" fontWeight="800" fill={GREEN} fontFamily="var(--font-baloo), sans-serif">
          terre
        </text>
        <Mid x={180} y={124} size={10}>le radical</Mid>
        {/* la famille */}
        <rect x="43" y="26" width="70" height="28" rx="13" fill="#fff" stroke={INK} strokeWidth="2" />
        <text x={78} y={45} textAnchor="middle" fontSize="13" fontWeight="800" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          <tspan fill={GREEN}>terr</tspan><tspan fill={BLUE}>ain</tspan>
        </text>
        <rect x="246" y="26" width="76" height="28" rx="13" fill="#fff" stroke={INK} strokeWidth="2" />
        <text x={284} y={45} textAnchor="middle" fontSize="13" fontWeight="800" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          <tspan fill={GREEN}>terr</tspan><tspan fill={BLUE}>asse</tspan>
        </text>
        <rect x="38" y="158" width="76" height="28" rx="13" fill="#fff" stroke={INK} strokeWidth="2" />
        <text x={76} y={177} textAnchor="middle" fontSize="13" fontWeight="800" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          <tspan fill={RED}>en</tspan><tspan fill={GREEN}>terr</tspan><tspan fill={BLUE}>er</tspan>
        </text>
        <rect x="242" y="158" width="88" height="28" rx="13" fill="#fff" stroke={INK} strokeWidth="2" />
        <text x={286} y={177} textAnchor="middle" fontSize="13" fontWeight="800" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          <tspan fill={GREEN}>terr</tspan><tspan fill={BLUE}>itoire</tspan>
        </text>
        {/* légende */}
        <text x={180} y={207} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="var(--font-nunito), sans-serif">
          <tspan fill={RED}>préfixe</tspan> · <tspan fill={GREEN}>radical</tspan> · <tspan fill={BLUE}>suffixe</tspan>
        </text>
      </svg>
    ),
  },

  "en-presentation": {
    title: "Hello! Se saluer et se présenter",
    svg: (
      <svg viewBox="0 0 360 218" className="w-full">
        {/* bulle d'Emma */}
        <rect x="16" y="30" width="152" height="38" rx="12" fill="#fff" stroke={INK} strokeWidth="2" />
        <Mid x={92} y={54}>{"Hello! I'm Emma."}</Mid>
        <polygon points="62,68 78,68 68,102" fill="#fff" stroke={INK} strokeWidth="2" />
        {/* Emma */}
        <circle cx="76" cy="122" r="16" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <circle cx="70" cy="119" r="1.6" fill={INK} />
        <circle cx="82" cy="119" r="1.6" fill={INK} />
        <path d="M70 127 q6 5 12 0" fill="none" stroke={INK} strokeWidth="2" />
        <rect x="54" y="140" width="44" height="46" rx="18" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={76} y={205} fill={BLUE} size={12}>Emma</Mid>
        {/* bulle de Tom */}
        <rect x="192" y="52" width="152" height="38" rx="12" fill="#fff" stroke={INK} strokeWidth="2" />
        <Mid x={268} y={76}>Nice to meet you!</Mid>
        <polygon points="280,90 296,90 290,110" fill="#fff" stroke={INK} strokeWidth="2" />
        {/* Tom */}
        <circle cx="288" cy="130" r="16" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <circle cx="282" cy="127" r="1.6" fill={INK} />
        <circle cx="294" cy="127" r="1.6" fill={INK} />
        <path d="M282 135 q6 5 12 0" fill="none" stroke={INK} strokeWidth="2" />
        <rect x="266" y="148" width="44" height="46" rx="18" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={288} y={213} fill={GREEN} size={12}>Tom</Mid>
      </svg>
    ),
  },

  "en-third-s": {
    title: "La machine à -s de la 3e personne",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        {/* rangée 1 : pas de changement */}
        <rect x="20" y="34" width="156" height="28" rx="14" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={98} y={53} fill={BLUE} size={12}>I · you · we · they</Mid>
        <line x1="184" y1="48" x2="216" y2="48" stroke={INK} strokeWidth="2.5" />
        <path d="M225 48 l-9 -5 v10 z" fill={INK} />
        <text x={268} y={54} textAnchor="middle" fontSize="18" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">
          play
        </text>
        <Mid x={268} y={76} size={10}>pas de changement</Mid>
        {/* rangée 2 : la machine à -s */}
        <rect x="20" y="112" width="110" height="28" rx="14" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={75} y={131} fill={RED} size={12}>he · she · it</Mid>
        <line x1="136" y1="126" x2="150" y2="126" stroke={INK} strokeWidth="2.5" />
        <path d="M159 126 l-9 -5 v10 z" fill={INK} />
        <rect x="162" y="98" width="64" height="56" rx="10" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <circle cx="171" cy="107" r="2" fill={INK} />
        <circle cx="217" cy="107" r="2" fill={INK} />
        <circle cx="171" cy="145" r="2" fill={INK} />
        <circle cx="217" cy="145" r="2" fill={INK} />
        <text x={194} y={134} textAnchor="middle" fontSize="21" fontWeight="800" fill={RED} fontFamily="var(--font-baloo), sans-serif">
          + s
        </text>
        <line x1="232" y1="126" x2="246" y2="126" stroke={INK} strokeWidth="2.5" />
        <path d="M255 126 l-9 -5 v10 z" fill={INK} />
        <text x={296} y={132} textAnchor="middle" fontSize="18" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">
          play<tspan fill={RED}>s</tspan>
        </text>
        <Mid x={194} y={180} fill={RED} size={12}>avec he, she, it : le verbe prend un -s</Mid>
      </svg>
    ),
  },

  "en-play-do-go": {
    title: "Play, do ou go ? Les trois familles de loisirs",
    svg: (
      <svg viewBox="0 0 360 180" className="w-full">
        {/* trois colonnes */}
        <rect x="10" y="10" width="108" height="160" rx="14" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="126" y="10" width="108" height="160" rx="14" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <rect x="242" y="10" width="108" height="160" rx="14" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <text x={64} y={42} textAnchor="middle" fontSize="19" fontWeight="800" fill={BLUE} fontFamily="var(--font-baloo), sans-serif">
          play
        </text>
        <text x={180} y={42} textAnchor="middle" fontSize="19" fontWeight="800" fill={RED} fontFamily="var(--font-baloo), sans-serif">
          do
        </text>
        <text x={296} y={42} textAnchor="middle" fontSize="19" fontWeight="800" fill={GREEN} fontFamily="var(--font-baloo), sans-serif">
          go
        </text>
        <Mid x={64} y={62} size={10.5}>balle et jeux</Mid>
        <Mid x={180} y={62} size={10.5}>activités</Mid>
        <Mid x={296} y={62} size={10.5}>+ verbe en -ing</Mid>
        <Mid x={64} y={94} size={11.5} fill={BLUE}>play football</Mid>
        <Mid x={64} y={118} size={11.5} fill={BLUE}>play tennis</Mid>
        <Mid x={64} y={142} size={11.5} fill={BLUE}>play chess</Mid>
        <Mid x={180} y={94} size={11.5} fill={RED}>do judo</Mid>
        <Mid x={180} y={118} size={11.5} fill={RED}>do karate</Mid>
        <Mid x={180} y={142} size={11.5} fill={RED}>do homework</Mid>
        <Mid x={296} y={94} size={11.5} fill={GREEN}>go swimming</Mid>
        <Mid x={296} y={118} size={11.5} fill={GREEN}>go cycling</Mid>
        <Mid x={296} y={142} size={11.5} fill={GREEN}>go fishing</Mid>
      </svg>
    ),
  },

  "en-meals": {
    title: "Breakfast, lunch, dinner : les repas de la journée",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        {/* soleil levant (matin) */}
        <line x1="48" y1="56" x2="92" y2="56" stroke={INK} strokeWidth="2" />
        <path d="M58 56 a12 12 0 0 1 24 0 z" fill={RED_TINT} stroke={RED} strokeWidth="2" />
        <line x1="70" y1="38" x2="70" y2="30" stroke={RED} strokeWidth="2" />
        <line x1="52" y1="46" x2="46" y2="40" stroke={RED} strokeWidth="2" />
        <line x1="88" y1="46" x2="94" y2="40" stroke={RED} strokeWidth="2" />
        {/* soleil haut (midi) */}
        <circle cx="180" cy="42" r="13" fill={RED_TINT} stroke={RED} strokeWidth="2.5" />
        <line x1="180" y1="23" x2="180" y2="16" stroke={RED} strokeWidth="2" />
        <line x1="161" y1="42" x2="154" y2="42" stroke={RED} strokeWidth="2" />
        <line x1="199" y1="42" x2="206" y2="42" stroke={RED} strokeWidth="2" />
        <line x1="167" y1="29" x2="162" y2="24" stroke={RED} strokeWidth="2" />
        <line x1="193" y1="29" x2="198" y2="24" stroke={RED} strokeWidth="2" />
        {/* lune (soir) */}
        <path d="M298 25 A18 18 0 1 0 298 61 A14 14 0 1 1 298 25 Z" fill={VIOLET_TINT} stroke={VIOLET} strokeWidth="2" />
        {/* la frise */}
        <line x1="15" y1="100" x2="336" y2="100" stroke={INK} strokeWidth="2.5" />
        <path d="M345 100 l-9 -5 v10 z" fill={INK} />
        {[70, 180, 290].map((x) => (
          <line key={x} x1={x} y1="94" x2={x} y2="106" stroke={INK} strokeWidth="2.5" />
        ))}
        <Mid x={70} y={126} size={14} fill={BLUE}>breakfast</Mid>
        <Mid x={180} y={126} size={14} fill={GREEN}>lunch</Mid>
        <Mid x={290} y={126} size={14} fill={VIOLET}>dinner</Mid>
        <Mid x={70} y={142} size={10.5}>le matin</Mid>
        <Mid x={180} y={142} size={10.5}>le midi</Mid>
        <Mid x={290} y={142} size={10.5}>le soir</Mid>
      </svg>
    ),
  },

  "en-question-words": {
    title: "La roue des mots interrogatifs",
    svg: (
      <svg viewBox="0 0 360 226" className="w-full">
        {/* rayons */}
        {[
          [180, 32],
          [298, 75],
          [298, 158],
          [180, 200],
          [62, 158],
          [62, 75],
        ].map(([x, y]) => (
          <line key={`${x}-${y}`} x1="180" y1="116" x2={x} y2={y} stroke={INK} strokeWidth="1.8" />
        ))}
        {/* moyeu */}
        <circle cx="180" cy="116" r="26" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <text x={180} y={124} textAnchor="middle" fontSize="22" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">
          ?
        </text>
        {/* les six mots */}
        {[
          { x: 180, y: 32, c: BLUE, tint: BLUE_TINT, w: "what", t: "quoi ?" },
          { x: 298, y: 75, c: GREEN, tint: GREEN_TINT, w: "where", t: "où ?" },
          { x: 298, y: 158, c: VIOLET, tint: VIOLET_TINT, w: "when", t: "quand ?" },
          { x: 180, y: 200, c: RED, tint: RED_TINT, w: "who", t: "qui ?" },
          { x: 62, y: 158, c: GREEN, tint: GREEN_TINT, w: "why", t: "pourquoi ?" },
          { x: 62, y: 75, c: BLUE, tint: BLUE_TINT, w: "how", t: "comment ?" },
        ].map((p) => (
          <g key={p.w}>
            <rect x={p.x - 40} y={p.y - 17} width="80" height="34" rx="12" fill={p.tint} stroke={INK} strokeWidth="2" />
            <Mid x={p.x} y={p.y - 2} fill={p.c}>{p.w}</Mid>
            <Mid x={p.x} y={p.y + 12} size={10}>{p.t}</Mid>
          </g>
        ))}
      </svg>
    ),
  },
};
