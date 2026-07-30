/**
 * Catalogue de figures — sciences 6e (fin de programme) et sciences 5e.
 * Même style que components/figures.tsx et figures-sciences.tsx :
 * traits encre (#2a2440), remplissages tint, textes Nunito.
 * Chaque clé est référencée depuis les données par LessonSection.figure.
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
const PANEL = "#fbfbff";

function Label({
  x,
  y,
  children,
  fill = INK,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: string;
  fill?: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize="13"
      fontWeight="700"
      fill={fill}
      textAnchor={anchor}
      fontFamily="var(--font-nunito), sans-serif"
    >
      {children}
    </text>
  );
}

function Tag({
  x,
  y,
  children,
  fill = INK,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: string;
  fill?: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize="11"
      fontWeight="700"
      fill={fill}
      textAnchor={anchor}
      fontFamily="var(--font-nunito), sans-serif"
    >
      {children}
    </text>
  );
}

/** Pointe de flèche : apex en (x,y), orientée par l'angle a (degrés, 0 = vers la droite). */
function Head({ x, y, a = 0, fill = INK }: { x: number; y: number; a?: number; fill?: string }) {
  return <path d="M0 0 l-9 -5 v10 z" fill={fill} transform={`translate(${x},${y}) rotate(${a})`} />;
}

/** Petit rayonnement (étoile de traits) autour d'un centre. */
function Rays({
  cx,
  cy,
  r,
  n = 8,
  len = 8,
  color = ORANGE,
}: {
  cx: number;
  cy: number;
  r: number;
  n?: number;
  len?: number;
  color?: string;
}) {
  return (
    <g stroke={color} strokeWidth="2" strokeLinecap="round">
      {Array.from({ length: n }).map((_, i) => {
        const a = (i * 2 * Math.PI) / n;
        return (
          <line
            key={i}
            x1={cx + Math.cos(a) * (r + 3)}
            y1={cy + Math.sin(a) * (r + 3)}
            x2={cx + Math.cos(a) * (r + 3 + len)}
            y2={cy + Math.sin(a) * (r + 3 + len)}
          />
        );
      })}
    </g>
  );
}

/** Symbole normalisé d'une lampe : cercle barré d'une croix. */
function Lampe({ cx, cy, r = 19, lit = false }: { cx: number; cy: number; r?: number; lit?: boolean }) {
  const d = r * Math.SQRT1_2;
  return (
    <g>
      {lit && <Rays cx={cx} cy={cy} r={r} n={8} len={6} />}
      <circle cx={cx} cy={cy} r={r} fill="#ffffff" stroke={INK} strokeWidth="2.4" />
      <line x1={cx - d} y1={cy - d} x2={cx + d} y2={cy + d} stroke={INK} strokeWidth="2.2" />
      <line x1={cx - d} y1={cy + d} x2={cx + d} y2={cy - d} stroke={INK} strokeWidth="2.2" />
    </g>
  );
}

/** Symbole normalisé d'une pile, posé sur un fil vertical (barres horizontales). */
function PileV({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <line x1={x - 18} y1={y - 6} x2={x + 18} y2={y - 6} stroke={INK} strokeWidth="2.4" />
      <line x1={x - 9} y1={y + 6} x2={x + 9} y2={y + 6} stroke={INK} strokeWidth="4.5" />
    </g>
  );
}

const CHAINE_BLOCS: { x: number; t1: string; t2: string; fill: string }[] = [
  { x: 5, t1: "le vent", t2: "source", fill: BLUE_TINT },
  { x: 95, t1: "les pales", t2: "tournent", fill: GREEN_TINT },
  { x: 185, t1: "générateur", t2: "convertisseur", fill: VIOLET_TINT },
  { x: 275, t1: "électricité", t2: "énergie utile", fill: ORANGE_TINT },
];

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  "sx-familles-aliments": {
    title: "L'assiette équilibrée et les familles d'aliments",
    svg: (
      <svg viewBox="0 0 360 215" className="w-full">
        <Tag x={105} y={18} anchor="middle">{"un repas équilibré : on varie les familles"}</Tag>
        {/* assiette */}
        <circle cx="105" cy="112" r="74" fill="#ffffff" stroke={INK} strokeWidth="2.4" />
        <path d="M105 46 A66 66 0 0 0 105 178 Z" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <path d="M105 112 L105 46 A66 66 0 0 1 171 112 Z" fill={ORANGE_TINT} stroke={INK} strokeWidth="2" />
        <path d="M105 112 L171 112 A66 66 0 0 1 105 178 Z" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        {/* moitié légumes et fruits */}
        <Tag x={62} y={100} anchor="middle" fill={GREEN}>{"légumes"}</Tag>
        <Tag x={62} y={116} anchor="middle" fill={GREEN}>{"et fruits"}</Tag>
        <Tag x={62} y={134} anchor="middle" fill={GREEN}>{"la moitié"}</Tag>
        {/* quart féculents */}
        <Tag x={137} y={76} anchor="middle" fill={ORANGE}>{"féculents"}</Tag>
        <Tag x={137} y={90} anchor="middle" fill={ORANGE}>{"riz, pâtes"}</Tag>
        {/* quart protéines */}
        <Tag x={133} y={130} anchor="middle" fill={RED}>{"viande,"}</Tag>
        <Tag x={133} y={144} anchor="middle" fill={RED}>{"poisson"}</Tag>
        <Tag x={133} y={158} anchor="middle" fill={RED}>{"ou œuf"}</Tag>
        {/* verre d'eau, à part */}
        <path d="M210 66 L246 66 L242 132 L214 132 Z" fill={BLUE_TINT} stroke={INK} strokeWidth="2.2" />
        <line x1="211" y1="82" x2="245" y2="82" stroke={BLUE} strokeWidth="2" />
        <Tag x={228} y={148} anchor="middle" fill={BLUE}>{"eau"}</Tag>
        <Tag x={228} y={164} anchor="middle" fill={BLUE}>{"la seule boisson"}</Tag>
        <Tag x={228} y={178} anchor="middle" fill={BLUE}>{"indispensable"}</Tag>
        {/* produit laitier */}
        <path d="M288 76 L330 76 L325 126 L293 126 Z" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
        <rect x="286" y="70" width="46" height="8" rx="3" fill={GREY_TINT} stroke={INK} strokeWidth="1.8" />
        <Tag x={309} y={148} anchor="middle">{"produit"}</Tag>
        <Tag x={309} y={164} anchor="middle">{"laitier"}</Tag>
        <Tag x={180} y={202} anchor="middle" fill={RED}>
          {"matières grasses et produits sucrés : en petite quantité"}
        </Tag>
      </svg>
    ),
  },

  "sx-circuit-simple": {
    title: "Le circuit électrique simple : pile, interrupteur, lampe",
    svg: (
      <svg viewBox="0 0 360 195" className="w-full">
        <Tag x={180} y={16} anchor="middle" fill={GREEN}>
          {"circuit fermé : la boucle est complète, la lampe brille"}
        </Tag>
        {/* fils : boucle 100..290 / 60..150, avec les coupures des composants */}
        <g stroke={INK} strokeWidth="2.4" fill="none">
          {/* fil du haut, coupé par l'interrupteur */}
          <line x1="100" y1="60" x2="170" y2="60" />
          <line x1="210" y1="60" x2="290" y2="60" />
          {/* fil de droite, coupé par la lampe */}
          <line x1="290" y1="60" x2="290" y2="86" />
          <line x1="290" y1="124" x2="290" y2="150" />
          {/* fil du bas */}
          <line x1="100" y1="150" x2="290" y2="150" />
          {/* fil de gauche, coupé par la pile */}
          <line x1="100" y1="60" x2="100" y2="98" />
          <line x1="100" y1="110" x2="100" y2="150" />
        </g>
        {/* pile (générateur) */}
        <PileV x={100} y={104} />
        <Tag x={74} y={94} anchor="end">{"pile"}</Tag>
        <Tag x={74} y={108} anchor="end">{"(générateur)"}</Tag>
        <Tag x={112} y={94} fill={RED}>{"+"}</Tag>
        <Tag x={112} y={126} fill={RED}>{"–"}</Tag>
        {/* interrupteur fermé */}
        <circle cx="170" cy="60" r="3.4" fill={INK} />
        <circle cx="210" cy="60" r="3.4" fill={INK} />
        <line x1="170" y1="60" x2="210" y2="60" stroke={INK} strokeWidth="3.4" />
        <Tag x={190} y={44} anchor="middle">{"interrupteur fermé"}</Tag>
        {/* lampe (récepteur) */}
        <Lampe cx={290} cy={105} lit />
        <Tag x={330} y={100}>{"lampe"}</Tag>
        {/* sens conventionnel du courant : il sort de la borne + */}
        <g stroke={RED} strokeWidth="2">
          <line x1="100" y1="94" x2="100" y2="80" />
          <line x1="230" y1="60" x2="246" y2="60" />
          <line x1="290" y1="128" x2="290" y2="140" />
          <line x1="176" y1="150" x2="160" y2="150" />
        </g>
        <Head x={100} y={76} a={-90} fill={RED} />
        <Head x={248} y={60} fill={RED} />
        <Head x={290} y={142} a={90} fill={RED} />
        <Head x={158} y={150} a={180} fill={RED} />
        <Tag x={196} y={108} anchor="middle" fill={RED}>{"sens conventionnel du courant"}</Tag>
        <Tag x={180} y={186} anchor="middle">
          {"le générateur fournit l'énergie, le récepteur la consomme"}
        </Tag>
      </svg>
    ),
  },

  "sx-dissolution": {
    title: "La dissolution : soluté + solvant → solution, et la masse se conserve",
    svg: (
      <svg viewBox="0 0 360 235" className="w-full">
        <Tag x={180} y={14} anchor="middle">{"dissoudre, ce n'est pas disparaître"}</Tag>
        {/* soluté : le morceau de sucre */}
        <rect x="24" y="56" width="28" height="24" rx="3" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
        <line x1="28" y1="64" x2="48" y2="64" stroke={INK} strokeWidth="1" />
        <line x1="28" y1="72" x2="48" y2="72" stroke={INK} strokeWidth="1" />
        <Tag x={38} y={48} anchor="middle" fill={VIOLET}>{"soluté"}</Tag>
        <Tag x={38} y={98} anchor="middle">{"sucre 20 g"}</Tag>
        <Label x={64} y={76} fill={INK}>{"+"}</Label>
        {/* solvant : le bécher d'eau */}
        <path
          d="M84 56 L84 98 a6 6 0 0 0 6 6 L138 104 a6 6 0 0 0 6 -6 L144 56 Z"
          fill={BLUE_TINT}
          stroke="none"
        />
        <path
          d="M84 38 L84 98 a6 6 0 0 0 6 6 L138 104 a6 6 0 0 0 6 -6 L144 38"
          fill="none"
          stroke={INK}
          strokeWidth="2.4"
        />
        <line x1="84" y1="56" x2="144" y2="56" stroke={BLUE} strokeWidth="2" />
        <Tag x={114} y={30} anchor="middle" fill={BLUE}>{"solvant"}</Tag>
        <Tag x={114} y={122} anchor="middle">{"eau 200 g"}</Tag>
        {/* on agite */}
        <line x1="156" y1="72" x2="184" y2="72" stroke={INK} strokeWidth="2.4" />
        <Head x={187} y={72} />
        <Tag x={172} y={58} anchor="middle" fill={VIOLET}>{"on agite"}</Tag>
        {/* solution : mélange homogène */}
        <path
          d="M200 52 L200 98 a6 6 0 0 0 6 6 L254 104 a6 6 0 0 0 6 -6 L260 52 Z"
          fill={BLUE_TINT}
          stroke="none"
        />
        <path
          d="M200 38 L200 98 a6 6 0 0 0 6 6 L254 104 a6 6 0 0 0 6 -6 L260 38"
          fill="none"
          stroke={INK}
          strokeWidth="2.4"
        />
        <line x1="200" y1="52" x2="260" y2="52" stroke={BLUE} strokeWidth="2" />
        {[
          [209, 64],
          [227, 60],
          [245, 66],
          [216, 78],
          [236, 80],
          [252, 74],
          [207, 92],
          [226, 94],
          [245, 90],
        ].map(([x, y]) => (
          <circle key={`p${x}-${y}`} cx={x} cy={y} r="1.9" fill={VIOLET} />
        ))}
        <Tag x={230} y={30} anchor="middle" fill={VIOLET}>{"solution"}</Tag>
        <Tag x={230} y={122} anchor="middle">{"eau sucrée 220 g"}</Tag>
        <Tag x={276} y={62} fill={VIOLET}>{"le sucre est"}</Tag>
        <Tag x={276} y={76} fill={VIOLET}>{"dispersé en"}</Tag>
        <Tag x={276} y={90} fill={VIOLET}>{"particules"}</Tag>
        <Tag x={276} y={104} fill={VIOLET}>{"invisibles"}</Tag>
        {/* balances : la masse se conserve */}
        <Tag x={180} y={144} anchor="middle" fill={GREEN}>{"la masse se conserve"}</Tag>
        <Tag x={180} y={162} anchor="middle">{"200 + 20 = 220 g"}</Tag>
        {/* balance 1 : avant */}
        <g>
          <rect x="62" y="142" width="26" height="26" rx="3" fill={BLUE_TINT} stroke={INK} strokeWidth="1.8" />
          <rect x="98" y="152" width="16" height="16" rx="2" fill="#ffffff" stroke={INK} strokeWidth="1.8" />
          <rect x="40" y="168" width="100" height="8" rx="3" fill={GREY_TINT} stroke={INK} strokeWidth="2" />
          <rect x="52" y="176" width="76" height="34" rx="6" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
          <rect x="64" y="184" width="52" height="18" rx="4" fill={INK} />
          <text
            x="90"
            y="198"
            fontSize="12"
            fontWeight="800"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="var(--font-nunito), sans-serif"
          >
            220 g
          </text>
          <Tag x={90} y={226} anchor="middle">{"avant : eau + sucre"}</Tag>
        </g>
        {/* balance 2 : après */}
        <g>
          <rect x="254" y="138" width="30" height="30" rx="3" fill={BLUE_TINT} stroke={INK} strokeWidth="1.8" />
          {[
            [262, 148],
            [274, 154],
            [264, 160],
          ].map(([x, y]) => (
            <circle key={`q${x}-${y}`} cx={x} cy={y} r="1.8" fill={VIOLET} />
          ))}
          <rect x="220" y="168" width="100" height="8" rx="3" fill={GREY_TINT} stroke={INK} strokeWidth="2" />
          <rect x="232" y="176" width="76" height="34" rx="6" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
          <rect x="244" y="184" width="52" height="18" rx="4" fill={INK} />
          <text
            x="270"
            y="198"
            fontSize="12"
            fontWeight="800"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="var(--font-nunito), sans-serif"
          >
            220 g
          </text>
          <Tag x={270} y={226} anchor="middle">{"après : eau sucrée"}</Tag>
        </g>
        <text
          x="180"
          y="196"
          fontSize="22"
          fontWeight="800"
          fill={GREEN}
          textAnchor="middle"
          fontFamily="var(--font-nunito), sans-serif"
        >
          =
        </text>
      </svg>
    ),
  },

  "sx-serie-derivation": {
    title: "Circuit en série et circuit en dérivation",
    svg: (
      <svg viewBox="0 0 360 215" className="w-full">
        <rect x="6" y="8" width="170" height="200" rx="14" fill={PANEL} stroke={INK} strokeWidth="1.6" />
        <rect x="184" y="8" width="170" height="200" rx="14" fill={PANEL} stroke={INK} strokeWidth="1.6" />
        {/* --- série --- */}
        <Tag x={91} y={26} anchor="middle">{"en série"}</Tag>
        <Tag x={91} y={42} anchor="middle" fill={VIOLET}>{"une seule boucle"}</Tag>
        <g stroke={INK} strokeWidth="2.2" fill="none">
          <line x1="32" y1="66" x2="52" y2="66" />
          <line x1="80" y1="66" x2="102" y2="66" />
          <line x1="130" y1="66" x2="152" y2="66" />
          <line x1="152" y1="66" x2="152" y2="150" />
          <line x1="32" y1="150" x2="152" y2="150" />
          <line x1="32" y1="66" x2="32" y2="102" />
          <line x1="32" y1="114" x2="32" y2="150" />
        </g>
        <PileV x={32} y={108} />
        <Lampe cx={66} cy={66} r={14} />
        <Lampe cx={116} cy={66} r={14} />
        <Tag x={91} y={124} anchor="middle">{"les 2 lampes sont"}</Tag>
        <Tag x={91} y={138} anchor="middle">{"sur la même boucle"}</Tag>
        <Tag x={91} y={176} anchor="middle" fill={RED}>{"une lampe grillée :"}</Tag>
        <Tag x={91} y={190} anchor="middle" fill={RED}>{"tout s'éteint"}</Tag>
        <Tag x={91} y={204} anchor="middle">{"(la guirlande)"}</Tag>
        {/* --- dérivation --- */}
        <Tag x={269} y={26} anchor="middle">{"en dérivation"}</Tag>
        <Tag x={269} y={42} anchor="middle" fill={VIOLET}>{"plusieurs boucles"}</Tag>
        <g stroke={INK} strokeWidth="2.2" fill="none">
          <line x1="212" y1="66" x2="332" y2="66" />
          <line x1="212" y1="150" x2="332" y2="150" />
          <line x1="212" y1="66" x2="212" y2="102" />
          <line x1="212" y1="114" x2="212" y2="150" />
          {/* dérivation 1 */}
          <line x1="272" y1="66" x2="272" y2="94" />
          <line x1="272" y1="122" x2="272" y2="150" />
          {/* dérivation 2 */}
          <line x1="332" y1="66" x2="332" y2="94" />
          <line x1="332" y1="122" x2="332" y2="150" />
        </g>
        <PileV x={212} y={108} />
        <Lampe cx={272} cy={108} r={14} />
        <Lampe cx={332} cy={108} r={14} />
        <circle cx="272" cy="66" r="3.2" fill={INK} />
        <circle cx="272" cy="150" r="3.2" fill={INK} />
        <Tag x={243} y={112} anchor="middle" fill={VIOLET}>{"2"}</Tag>
        <Tag x={302} y={112} anchor="middle" fill={VIOLET}>{"1"}</Tag>
        <Tag x={269} y={176} anchor="middle" fill={GREEN}>{"une lampe grillée :"}</Tag>
        <Tag x={269} y={190} anchor="middle" fill={GREEN}>{"l'autre brille encore"}</Tag>
        <Tag x={269} y={204} anchor="middle">{"(la maison)"}</Tag>
      </svg>
    ),
  },

  "sx-ombre": {
    title: "Propagation rectiligne de la lumière : ombre propre et ombre portée",
    svg: (
      <svg viewBox="0 0 360 215" className="w-full">
        <Tag x={180} y={14} anchor="middle">
          {"la lumière va tout droit : l'objet opaque fait une ombre"}
        </Tag>
        {/* écran */}
        <rect x="290" y="26" width="14" height="169" fill={GREY_TINT} stroke={INK} strokeWidth="2" />
        {/* cône d'ombre */}
        <polygon points="142.9,77.9 290,39.2 290,170.8 142.9,132.1" fill={INK} opacity="0.13" />
        {/* ombre portée sur l'écran */}
        <rect x="290" y="39.2" width="14" height="131.6" fill={INK} opacity="0.82" />
        {/* rayons de lumière : toujours des droites */}
        <g stroke={ORANGE} strokeWidth="1.8">
          <line x1="52" y1="105" x2="118" y2="105" />
          <line x1="52" y1="101" x2="286" y2="39.5" />
          <line x1="52" y1="109" x2="286" y2="170.5" />
          <line x1="52" y1="96" x2="286" y2="12" />
          <line x1="52" y1="114" x2="286" y2="198" />
        </g>
        <Head x={121} y={105} fill={ORANGE} />
        <Head x={288} y={39.2} a={-15} fill={ORANGE} />
        <Head x={288} y={170.8} a={15} fill={ORANGE} />
        <Head x={288} y={11} a={-20} fill={ORANGE} />
        <Head x={288} y={199} a={20} fill={ORANGE} />
        {/* source ponctuelle */}
        <Rays cx={40} cy={105} r={11} n={10} len={6} />
        <circle cx="40" cy="105" r="11" fill={ORANGE_TINT} stroke={ORANGE} strokeWidth="2.4" />
        <Tag x={40} y={150} anchor="middle" fill={ORANGE}>{"source"}</Tag>
        <Tag x={40} y={164} anchor="middle" fill={ORANGE}>{"ponctuelle"}</Tag>
        {/* objet opaque : moitié éclairée, moitié dans l'ombre propre */}
        <circle cx="150" cy="105" r="28" fill="#ffffff" stroke={INK} strokeWidth="2.4" />
        <path d="M150 77 A28 28 0 0 1 150 133 Z" fill={INK} opacity="0.78" />
        <Tag x={196} y={52}>{"ombre propre"}</Tag>
        <line x1="194" y1="56" x2="170" y2="84" stroke={INK} strokeWidth="1.2" strokeDasharray="4 3" />
        <Tag x={150} y={172} anchor="middle">{"objet opaque"}</Tag>
        <Tag x={232} y={112} anchor="middle">{"cône d'ombre"}</Tag>
        <Tag x={308} y={98}>{"ombre"}</Tag>
        <Tag x={308} y={112}>{"portée"}</Tag>
        <Tag x={297} y={210} anchor="middle">{"écran"}</Tag>
      </svg>
    ),
  },

  "sx-seisme": {
    title: "Coupe d'un séisme : foyer, épicentre et ondes sismiques",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        <Tag x={180} y={16} anchor="middle">{"un séisme : la rupture naît au foyer, en profondeur"}</Tag>
        {/* sol */}
        <rect x="0" y="70" width="360" height="140" fill={GREY_TINT} />
        <line x1="0" y1="70" x2="360" y2="70" stroke={INK} strokeWidth="2.4" />
        <Tag x={348} y={62} anchor="end">{"surface du sol"}</Tag>
        {/* bâtiments */}
        <g fill="#ffffff" stroke={INK} strokeWidth="2">
          <rect x="118" y="48" width="26" height="22" />
          <rect x="216" y="44" width="28" height="26" />
        </g>
        <g stroke={INK} strokeWidth="1.6" strokeLinecap="round">
          <line x1="160" y1="56" x2="154" y2="50" />
          <line x1="160" y1="64" x2="152" y2="64" />
          <line x1="200" y1="56" x2="206" y2="50" />
          <line x1="200" y1="64" x2="208" y2="64" />
        </g>
        {/* ondes sismiques */}
        <g fill="none" stroke={RED} strokeWidth="1.8" strokeDasharray="6 5" opacity="0.85">
          <circle cx="180" cy="150" r="30" />
          <circle cx="180" cy="150" r="52" />
          <circle cx="180" cy="150" r="74" />
          <path d="M126.93 70 A96 96 0 1 0 233.07 70" />
        </g>
        <Tag x={14} y={104} fill={RED}>{"ondes"}</Tag>
        <Tag x={14} y={118} fill={RED}>{"sismiques"}</Tag>
        <line x1="76" y1="116" x2="106" y2="128" stroke={RED} strokeWidth="1.2" strokeDasharray="4 3" />
        {/* faille */}
        <line x1="128" y1="198" x2="232" y2="102" stroke={INK} strokeWidth="2.6" />
        <g stroke={INK} strokeWidth="1.8">
          <line x1="146" y1="186" x2="163" y2="171" />
          <line x1="214" y1="114" x2="197" y2="129" />
        </g>
        <Head x={166} y={168} a={-42} />
        <Head x={194} y={132} a={138} />
        <Tag x={236} y={100}>{"faille"}</Tag>
        {/* verticale foyer → épicentre */}
        <line x1="180" y1="72" x2="180" y2="144" stroke={INK} strokeWidth="1.4" strokeDasharray="5 4" />
        {/* épicentre */}
        <circle cx="180" cy="70" r="5.5" fill={RED} stroke={INK} strokeWidth="1.6" />
        <line x1="180" y1="40" x2="180" y2="62" stroke={RED} strokeWidth="1.8" />
        <Tag x={180} y={34} anchor="middle" fill={RED}>{"épicentre (en surface)"}</Tag>
        {/* foyer */}
        <circle cx="180" cy="150" r="6.5" fill={RED} stroke={INK} strokeWidth="1.8" />
        <Tag x={193} y={146} fill={RED}>{"foyer"}</Tag>
        <Tag x={193} y={160}>{"(en profondeur)"}</Tag>
      </svg>
    ),
  },

  "sx-echanges-gazeux": {
    title: "Les échanges gazeux respiratoires : O₂ entre, CO₂ sort",
    svg: (
      <svg viewBox="0 0 360 215" className="w-full">
        <Tag x={180} y={14} anchor="middle">{"respirer, c'est échanger deux gaz avec le milieu de vie"}</Tag>
        <rect x="6" y="24" width="170" height="184" rx="14" fill={PANEL} stroke={INK} strokeWidth="1.6" />
        <rect x="184" y="24" width="170" height="184" rx="14" fill={PANEL} stroke={INK} strokeWidth="1.6" />
        {/* --- poumons, dans l'air --- */}
        <Tag x={91} y={44} anchor="middle">{"dans l'air"}</Tag>
        <Tag x={70} y={64} anchor="middle" fill={BLUE}>{"O₂"}</Tag>
        <Tag x={112} y={64} anchor="middle" fill={RED}>{"CO₂"}</Tag>
        <line x1="70" y1="70" x2="70" y2="82" stroke={BLUE} strokeWidth="2.2" />
        <Head x={70} y={85} a={90} fill={BLUE} />
        <line x1="112" y1="82" x2="112" y2="72" stroke={RED} strokeWidth="2.2" />
        <Head x={112} y={69} a={-90} fill={RED} />
        {/* trachée + bronches */}
        <rect x="84" y="86" width="14" height="26" rx="3" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <line x1="85" y1="94" x2="97" y2="94" stroke={INK} strokeWidth="1" />
        <line x1="85" y1="102" x2="97" y2="102" stroke={INK} strokeWidth="1" />
        <line x1="91" y1="112" x2="74" y2="124" stroke={INK} strokeWidth="2" />
        <line x1="91" y1="112" x2="108" y2="124" stroke={INK} strokeWidth="2" />
        {/* poumons */}
        <ellipse cx="64" cy="140" rx="22" ry="28" transform="rotate(-8 64 140)" fill={RED_TINT} stroke={INK} strokeWidth="2.2" />
        <ellipse cx="118" cy="140" rx="22" ry="28" transform="rotate(8 118 140)" fill={RED_TINT} stroke={INK} strokeWidth="2.2" />
        <Tag x={91} y={182} anchor="middle">{"poumons"}</Tag>
        <Tag x={91} y={198} anchor="middle" fill={GREEN}>{"le dioxygène de l'air"}</Tag>
        {/* --- branchies, dans l'eau --- */}
        <Tag x={269} y={44} anchor="middle">{"dans l'eau"}</Tag>
        <rect x="192" y="54" width="154" height="112" rx="8" fill={BLUE_TINT} stroke="none" />
        {[62, 74].map((y) => (
          <path
            key={y}
            d={`M196 ${y} q9 -5 18 0 q9 5 18 0 q9 -5 18 0 q9 5 18 0 q9 -5 18 0 q9 5 18 0 q9 -5 18 0`}
            fill="none"
            stroke={BLUE}
            strokeWidth="1.4"
            opacity="0.7"
          />
        ))}
        {/* poisson, tête à gauche */}
        <path d="M318 118 L344 102 L344 134 Z" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
        <ellipse cx="272" cy="118" rx="46" ry="26" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
        <circle cx="240" cy="110" r="2.8" fill={INK} />
        <path d="M228 120 q6 3 11 1" fill="none" stroke={INK} strokeWidth="1.6" />
        {/* opercule + branchies */}
        <path d="M252 95 Q245 118 252 141" fill="none" stroke={INK} strokeWidth="2.2" />
        {[256, 261, 266].map((x) => (
          <path key={x} d={`M${x} 100 Q${x - 5} 118 ${x} 136`} fill="none" stroke={RED} strokeWidth="1.8" />
        ))}
        {/* flèches des gaz */}
        <Tag x={196} y={98} fill={BLUE}>{"O₂ dissous"}</Tag>
        <line x1="198" y1="108" x2="243" y2="108" stroke={BLUE} strokeWidth="2.2" />
        <Head x={246} y={108} fill={BLUE} />
        <line x1="248" y1="140" x2="203" y2="140" stroke={RED} strokeWidth="2.2" />
        <Head x={200} y={140} a={180} fill={RED} />
        <Tag x={198} y={158} fill={RED}>{"CO₂ rejeté"}</Tag>
        <Tag x={269} y={182} anchor="middle">{"branchies"}</Tag>
        <Tag x={269} y={198} anchor="middle" fill={GREEN}>{"le dioxygène de l'eau"}</Tag>
      </svg>
    ),
  },

  "sx-chaine-energie": {
    title: "La chaîne d'énergie d'une éolienne",
    svg: (
      <svg viewBox="0 0 360 212" className="w-full">
        <Tag x={352} y={24} anchor="end">{"chaîne d'énergie"}</Tag>
        <Tag x={352} y={38} anchor="end">{"d'une éolienne"}</Tag>
        {/* le vent */}
        <Tag x={12} y={26} fill={BLUE}>{"le vent"}</Tag>
        {[40, 62, 84].map((y) => (
          <g key={y}>
            <line x1="12" y1={y} x2="62" y2={y} stroke={BLUE} strokeWidth="2.2" />
            <Head x={65} y={y} fill={BLUE} />
          </g>
        ))}
        {/* sol */}
        <line x1="0" y1="114" x2="360" y2="114" stroke={INK} strokeWidth="2.2" />
        {/* mât + nacelle (générateur) + pales */}
        <polygon points="104,114 116,114 112.5,46 107.5,46" fill={GREY_TINT} stroke={INK} strokeWidth="2" />
        <rect x="110" y="36" width="26" height="14" rx="4" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        {[0, 120, 240].map((a) => (
          <path
            key={a}
            d="M-3.5 0 C -3 -14, -2 -28, 0 -34 C 3.5 -26, 4.5 -12, 3.5 0 Z"
            fill="#ffffff"
            stroke={INK}
            strokeWidth="1.8"
            transform={`translate(110,44) rotate(${a})`}
          />
        ))}
        <circle cx="110" cy="44" r="4.5" fill={INK} />
        {/* électricité vers la maison */}
        <path d="M137 42 C 190 34, 240 46, 279 66" fill="none" stroke={VIOLET} strokeWidth="2.4" />
        <Head x={282} y={68} a={30} fill={VIOLET} />
        <Tag x={204} y={32} anchor="middle" fill={VIOLET}>{"électricité"}</Tag>
        {/* maison */}
        <polygon points="280,80 315,52 350,80" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <rect x="288" y="80" width="54" height="34" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="302" y="88" width="26" height="20" rx="2" fill={ORANGE_TINT} stroke={INK} strokeWidth="1.6" />
        {/* les blocs de la chaîne */}
        {CHAINE_BLOCS.map((b, i) => (
          <g key={b.t1}>
            <rect x={b.x} y="134" width="80" height="46" rx="10" fill={b.fill} stroke={INK} strokeWidth="2.2" />
            <Tag x={b.x + 40} y={155} anchor="middle">{b.t1}</Tag>
            <Tag x={b.x + 40} y={170} anchor="middle">{b.t2}</Tag>
            {i < CHAINE_BLOCS.length - 1 && (
              <>
                <line x1={b.x + 81} y1="157" x2={b.x + 87} y2="157" stroke={INK} strokeWidth="2.2" />
                <Head x={b.x + 90} y={157} />
              </>
            )}
          </g>
        ))}
        {/* pertes */}
        <line x1="225" y1="180" x2="225" y2="188" stroke={RED} strokeWidth="2" />
        <Head x={225} y={191} a={90} fill={RED} />
        <Tag x={225} y={206} anchor="middle" fill={RED}>{"pertes : un peu de chaleur"}</Tag>
      </svg>
    ),
  },
};
