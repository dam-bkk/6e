/**
 * Catalogue de figures pour les leçons. Chaque figure est un SVG dessiné main,
 * style unifié : traits encre (#2a2440), remplissages tint des domaines.
 * Référencées dans les données par LessonSection.figure (clé du Record FIGURES).
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

function Label({ x, y, children, fill = INK }: { x: number; y: number; children: string; fill?: string }) {
  return (
    <text x={x} y={y} fontSize="13" fontWeight="700" fill={fill} fontFamily="var(--font-nunito), sans-serif">
      {children}
    </text>
  );
}

function Dot({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r="3.2" fill={INK} />;
}

export const FIGURES: Record<string, { title: string; svg: React.ReactNode }> = {
  "droite-graduee": {
    title: "Une droite graduée",
    svg: (
      <svg viewBox="0 0 360 90" className="w-full">
        <line x1="15" y1="55" x2="345" y2="55" stroke={INK} strokeWidth="2.5" />
        <path d="M345 55 l-9 -5 v10 z" fill={INK} />
        {[0, 1, 2, 3, 4].map((n) => (
          <g key={n}>
            <line x1={40 + n * 70} y1="47" x2={40 + n * 70} y2="63" stroke={INK} strokeWidth="2.5" />
            <Label x={36 + n * 70} y={82}>{String(n)}</Label>
          </g>
        ))}
        {/* graduations fines des dixièmes entre 1 et 2 */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
          <line key={d} x1={110 + d * 7} y1="51" x2={110 + d * 7} y2="59" stroke={INK} strokeWidth="1.2" />
        ))}
        <circle cx={110 + 3 * 7} cy="55" r="4.5" fill={RED} />
        <Label x={116} y={35} fill={RED}>1,3</Label>
        <line x1={131} y1="40" x2={131} y2="49" stroke={RED} strokeWidth="1.5" />
      </svg>
    ),
  },

  "fraction-disque": {
    title: "Trois quarts d'un disque",
    svg: (
      <svg viewBox="0 0 360 120" className="w-full">
        <g transform="translate(90,60)">
          <circle r="48" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
          <path d="M0 0 L48 0 A48 48 0 0 0 0 -48 Z" fill="#fff" stroke={INK} strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="48" stroke={INK} strokeWidth="2" />
          <line x1="0" y1="0" x2="-48" y2="0" stroke={INK} strokeWidth="2" />
        </g>
        <Label x={170} y={50}>3 parts coloriées</Label>
        <Label x={170} y={72}>sur 4 parts égales :</Label>
        <text x={290} y={68} fontSize="22" fontWeight="800" fill={RED} fontFamily="var(--font-baloo), sans-serif">3/4</text>
      </svg>
    ),
  },

  "droite-segment": {
    title: "Droite, segment, demi-droite",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        {/* droite (AB) */}
        <line x1="15" y1="30" x2="345" y2="30" stroke={BLUE} strokeWidth="2.5" />
        <Dot x={100} y={30} /><Label x={94} y={18}>A</Label>
        <Dot x={230} y={30} /><Label x={224} y={18}>B</Label>
        <Label x={270} y={22} fill={BLUE}>droite (AB)</Label>
        {/* segment [CD] */}
        <line x1="100" y1="80" x2="230" y2="80" stroke={GREEN} strokeWidth="2.5" />
        <Dot x={100} y={80} /><Label x={94} y={68}>C</Label>
        <Dot x={230} y={80} /><Label x={224} y={68}>D</Label>
        <Label x={252} y={85} fill={GREEN}>segment [CD]</Label>
        {/* demi-droite [EF) */}
        <line x1="100" y1="130" x2="345" y2="130" stroke={VIOLET} strokeWidth="2.5" />
        <Dot x={100} y={130} /><Label x={94} y={118}>E</Label>
        <Dot x={200} y={130} /><Label x={194} y={118}>F</Label>
        <Label x={230} y={122} fill={VIOLET}>demi-droite [EF)</Label>
      </svg>
    ),
  },

  perpendiculaires: {
    title: "Deux droites perpendiculaires",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        <line x1="40" y1="75" x2="320" y2="75" stroke={INK} strokeWidth="2.5" />
        <line x1="180" y1="10" x2="180" y2="140" stroke={BLUE} strokeWidth="2.5" />
        <rect x="180" y="55" width="20" height="20" fill="none" stroke={RED} strokeWidth="2" />
        <Label x={300} y={65}>(d)</Label>
        <Label x={190} y={20} fill={BLUE}>(d&apos;)</Label>
        <Label x={215} y={45} fill={RED}>angle droit</Label>
      </svg>
    ),
  },

  paralleles: {
    title: "Deux droites parallèles",
    svg: (
      <svg viewBox="0 0 360 120" className="w-full">
        <line x1="30" y1="40" x2="330" y2="40" stroke={INK} strokeWidth="2.5" />
        <line x1="30" y1="90" x2="330" y2="90" stroke={BLUE} strokeWidth="2.5" />
        <Label x={300} y={30}>(d)</Label>
        <Label x={300} y={112} fill={BLUE}>(d&apos;)</Label>
        <Label x={110} y={72} fill={GREEN}>toujours le même écart</Label>
        <line x1="80" y1="40" x2="80" y2="90" stroke={GREEN} strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="260" y1="40" x2="260" y2="90" stroke={GREEN} strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>
    ),
  },

  cercle: {
    title: "Le vocabulaire du cercle",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        <g transform="translate(120,95)">
          <circle r="75" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
          <Dot x={0} y={0} /><Label x={-24} y={-6}>O</Label>
          {/* rayon */}
          <line x1="0" y1="0" x2="53" y2="-53" stroke={RED} strokeWidth="2.5" />
          <Dot x={53} y={-53} /><Label x={60} y={-58}>A</Label>
          {/* diamètre */}
          <line x1="-75" y1="0" x2="75" y2="0" stroke={GREEN} strokeWidth="2.5" />
          <Dot x={-75} y={0} /><Label x={-95} y={5}>B</Label>
          <Dot x={75} y={0} /><Label x={83} y={5}>C</Label>
          {/* corde */}
          <line x1="-45" y1="60" x2="60" y2="45" stroke={VIOLET} strokeWidth="2.5" />
        </g>
        <Label x={235} y={45} fill={RED}>[OA] : rayon</Label>
        <Label x={235} y={75} fill={GREEN}>[BC] : diamètre</Label>
        <Label x={235} y={105} fill={VIOLET}>corde</Label>
        <Label x={235} y={135}>O : centre</Label>
      </svg>
    ),
  },

  "angle-types": {
    title: "Aigu, droit, obtus",
    svg: (
      <svg viewBox="0 0 360 130" className="w-full">
        {/* aigu */}
        <g transform="translate(30,95)">
          <line x1="0" y1="0" x2="85" y2="0" stroke={INK} strokeWidth="2.5" />
          <line x1="0" y1="0" x2="60" y2="-60" stroke={INK} strokeWidth="2.5" />
          <path d="M28 0 A28 28 0 0 0 20 -20" fill="none" stroke={GREEN} strokeWidth="2.5" />
          <Label x={10} y={25} fill={GREEN}>aigu</Label>
        </g>
        {/* droit */}
        <g transform="translate(150,95)">
          <line x1="0" y1="0" x2="85" y2="0" stroke={INK} strokeWidth="2.5" />
          <line x1="0" y1="0" x2="0" y2="-70" stroke={INK} strokeWidth="2.5" />
          <rect x="0" y="-18" width="18" height="18" fill="none" stroke={RED} strokeWidth="2" />
          <Label x={5} y={25} fill={RED}>droit</Label>
        </g>
        {/* obtus */}
        <g transform="translate(265,95)">
          <line x1="0" y1="0" x2="85" y2="0" stroke={INK} strokeWidth="2.5" />
          <line x1="0" y1="0" x2="-45" y2="-58" stroke={INK} strokeWidth="2.5" />
          <path d="M30 0 A30 30 0 0 0 -22 -28" fill="none" stroke={VIOLET} strokeWidth="2.5" />
          <Label x={10} y={25} fill={VIOLET}>obtus</Label>
        </g>
      </svg>
    ),
  },

  "triangles-types": {
    title: "Les triangles particuliers",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        {/* équilatéral */}
        <g transform="translate(20,20)">
          <polygon points="50,0 0,86 100,86" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
          <Label x={8} y={112} fill={GREEN}>équilatéral</Label>
          {/* codages : un trait sur chaque côté */}
          <line x1="21" y1="40" x2="30" y2="46" stroke={INK} strokeWidth="2" />
          <line x1="70" y1="46" x2="79" y2="40" stroke={INK} strokeWidth="2" />
          <line x1="50" y1="80" x2="50" y2="92" stroke={INK} strokeWidth="2" />
        </g>
        {/* isocèle */}
        <g transform="translate(140,20)">
          <polygon points="50,0 15,86 85,86" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
          <Label x={22} y={112} fill={BLUE}>isocèle</Label>
          <line x1="28" y1="42" x2="37" y2="47" stroke={INK} strokeWidth="2" />
          <line x1="63" y1="47" x2="72" y2="42" stroke={INK} strokeWidth="2" />
        </g>
        {/* rectangle */}
        <g transform="translate(255,20)">
          <polygon points="0,0 0,86 100,86" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
          <rect x="0" y="68" width="18" height="18" fill="none" stroke={RED} strokeWidth="2" />
          <Label x={12} y={112} fill={RED}>rectangle</Label>
        </g>
      </svg>
    ),
  },

  quadrilateres: {
    title: "Carré, rectangle, losange",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        <g transform="translate(25,25)">
          <rect width="80" height="80" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
          <rect x="0" y="66" width="14" height="14" fill="none" stroke={RED} strokeWidth="1.8" />
          <Label x={20} y={112} fill={RED}>carré</Label>
        </g>
        <g transform="translate(135,40)">
          <rect width="105" height="65" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
          <rect x="0" y="51" width="14" height="14" fill="none" stroke={BLUE} strokeWidth="1.8" />
          <Label x={22} y={97} fill={BLUE}>rectangle</Label>
        </g>
        <g transform="translate(270,15)">
          <polygon points="35,0 70,55 35,110 0,55" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
          <Label x={8} y={135} fill={GREEN}>losange</Label>
        </g>
      </svg>
    ),
  },

  "symetrie-axiale": {
    title: "Deux figures symétriques par rapport à un axe",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        <line x1="180" y1="8" x2="180" y2="142" stroke={RED} strokeWidth="2.5" strokeDasharray="7 5" />
        <Label x={188} y={20} fill={RED}>axe (d)</Label>
        <polygon points="60,45 130,60 95,115" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <polygon points="300,45 230,60 265,115" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={78} y={38}>F</Label>
        <Label x={270} y={38} fill={VIOLET}>F&apos;</Label>
        <line x1="130" y1="60" x2="230" y2="60" stroke={GREEN} strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>
    ),
  },

  mediatrice: {
    title: "La médiatrice d'un segment",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        <line x1="60" y1="90" x2="300" y2="90" stroke={INK} strokeWidth="2.5" />
        <Dot x={60} y={90} /><Label x={48} y={80}>A</Label>
        <Dot x={300} y={90} /><Label x={306} y={80}>B</Label>
        <Dot x={180} y={90} />
        <line x1="180" y1="15" x2="180" y2="140" stroke={RED} strokeWidth="2.5" />
        <rect x="180" y="72" width="16" height="16" fill="none" stroke={RED} strokeWidth="1.8" />
        <Label x={190} y={28} fill={RED}>médiatrice</Label>
        {/* codages du milieu */}
        <line x1="118" y1="84" x2="124" y2="96" stroke={GREEN} strokeWidth="2" />
        <line x1="238" y1="84" x2="244" y2="96" stroke={GREEN} strokeWidth="2" />
        <Label x={105} y={120} fill={GREEN}>AI = IB : I est le milieu</Label>
      </svg>
    ),
  },

  "aire-quadrillage": {
    title: "L'aire, c'est le nombre de carreaux",
    svg: (
      <svg viewBox="0 0 360 140" className="w-full">
        <g transform="translate(40,20)">
          {Array.from({ length: 3 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <rect key={`${r}-${c}`} x={c * 30} y={r * 30} width="30" height="30" fill={GREEN_TINT} stroke={INK} strokeWidth="1.6" />
            ))
          )}
          <rect width="150" height="90" fill="none" stroke={INK} strokeWidth="2.5" />
        </g>
        <Label x={215} y={50}>5 carreaux × 3 rangées</Label>
        <Label x={215} y={75} fill={GREEN}>Aire = 15 carreaux</Label>
        <Label x={215} y={100}>ici : 5 cm × 3 cm = 15 cm²</Label>
      </svg>
    ),
  },

  "pave-droit": {
    title: "Le pavé droit (parallélépipède rectangle)",
    svg: (
      <svg viewBox="0 0 360 160" className="w-full">
        <g transform="translate(70,35)">
          {/* face arrière décalée */}
          <rect x="45" y="-22" width="140" height="80" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
          <rect x="0" y="0" width="140" height="80" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
          <line x1="0" y1="0" x2="45" y2="-22" stroke={INK} strokeWidth="2" />
          <line x1="140" y1="0" x2="185" y2="-22" stroke={INK} strokeWidth="2" />
          <line x1="140" y1="80" x2="185" y2="58" stroke={INK} strokeWidth="2" />
          <line x1="0" y1="80" x2="45" y2="58" stroke={INK} strokeWidth="2" strokeDasharray="5 4" />
          <Label x={50} y={102} fill={BLUE}>longueur</Label>
          <Label x={-62} y={45} fill={GREEN}>hauteur</Label>
          <Label x={195} y={50} fill={VIOLET}>largeur</Label>
        </g>
        <Label x={70} y={155}>6 faces, 12 arêtes, 8 sommets</Label>
      </svg>
    ),
  },

  "diagramme-batons": {
    title: "Un diagramme en bâtons",
    svg: (
      <svg viewBox="0 0 360 160" className="w-full">
        <line x1="50" y1="130" x2="330" y2="130" stroke={INK} strokeWidth="2.5" />
        <line x1="50" y1="130" x2="50" y2="15" stroke={INK} strokeWidth="2.5" />
        {[
          { x: 80, h: 60, label: "chat", c: VIOLET },
          { x: 145, h: 95, label: "chien", c: VIOLET },
          { x: 210, h: 40, label: "poisson", c: VIOLET },
          { x: 275, h: 70, label: "oiseau", c: VIOLET },
        ].map((b) => (
          <g key={b.label}>
            <rect x={b.x} y={130 - b.h} width="34" height={b.h} fill={VIOLET_TINT} stroke={b.c} strokeWidth="2.5" />
            <Label x={b.x - 4} y={148}>{b.label}</Label>
          </g>
        ))}
        {[0, 5, 10].map((v) => (
          <g key={v}>
            <line x1="45" y1={130 - v * 9} x2="55" y2={130 - v * 9} stroke={INK} strokeWidth="2" />
            <Label x={v >= 10 ? 20 : 28} y={135 - v * 9}>{String(v)}</Label>
          </g>
        ))}
      </svg>
    ),
  },
};

export function Figure({ id }: { id: string }) {
  const fig = FIGURES[id];
  if (!fig) return null;
  return (
    <figure className="my-4 rounded-2xl border-2 border-line bg-card p-4">
      {fig.svg}
      <figcaption className="mt-2 text-center text-sm font-bold text-muted">
        {fig.title}
      </figcaption>
    </figure>
  );
}
