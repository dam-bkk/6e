/**
 * Catalogue de figures — maths 5e.
 * Même style que components/figures.tsx (traits encre #2a2440, tints des domaines,
 * codages géométriques scolaires : petits traits pour les longueurs égales,
 * carrés pour les angles droits).
 */

const INK = "#2a2440";
const BLUE = "#1d5fa8";
const BLUE_TINT = "#dcedff";
const RED = "#b32b44";
const RED_TINT = "#ffe3e2";
const GREEN = "#0f6b52";
const GREEN_TINT = "#d7f4e8";
const VIOLET = "#5a3ec8";

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

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  "m5-droite-relatifs": {
    title: "Nombres relatifs sur la droite graduée : −3 et 3 sont opposés",
    svg: (
      <svg viewBox="0 0 360 100" className="w-full">
        <line x1="12" y1="60" x2="348" y2="60" stroke={INK} strokeWidth="2.5" />
        <path d="M348 60 l-9 -5 v10 z" fill={INK} />
        {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((n) => (
          <g key={n}>
            <line
              x1={180 + n * 30}
              y1={n === 0 ? 49 : 53}
              x2={180 + n * 30}
              y2={n === 0 ? 71 : 67}
              stroke={INK}
              strokeWidth={n === 0 ? 3 : 2}
            />
            <Label x={180 + n * 30 - (n < 0 ? 9 : 4)} y={86}>
              {n < 0 ? `−${-n}` : String(n)}
            </Label>
          </g>
        ))}
        {/* −3 et son opposé +3 */}
        <circle cx={90} cy={60} r="4.5" fill={RED} />
        <Label x={78} y={44} fill={RED}>−3</Label>
        <line x1="90" y1="47" x2="90" y2="54" stroke={RED} strokeWidth="1.5" />
        <circle cx={270} cy={60} r="4.5" fill={GREEN} />
        <Label x={260} y={44} fill={GREEN}>+3</Label>
        <line x1="270" y1="47" x2="270" y2="54" stroke={GREEN} strokeWidth="1.5" />
        {/* même distance à zéro de part et d'autre */}
        <line x1="90" y1="28" x2="176" y2="28" stroke={VIOLET} strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="184" y1="28" x2="270" y2="28" stroke={VIOLET} strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="90" y1="24" x2="90" y2="32" stroke={VIOLET} strokeWidth="1.5" />
        <line x1="180" y1="24" x2="180" y2="32" stroke={VIOLET} strokeWidth="1.5" />
        <line x1="270" y1="24" x2="270" y2="32" stroke={VIOLET} strokeWidth="1.5" />
        <Label x={83} y={16} fill={VIOLET}>opposés : même distance à zéro</Label>
      </svg>
    ),
  },

  "m5-symetrie-centrale": {
    title: "F et F′ sont symétriques par rapport au point O",
    svg: (
      <svg viewBox="0 0 360 160" className="w-full">
        {/* segments joignant chaque point à son image, tous passent par O */}
        <line x1="70" y1="40" x2="290" y2="120" stroke={GREEN} strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="140" y1="55" x2="220" y2="105" stroke={GREEN} strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="100" y1="120" x2="260" y2="40" stroke={GREEN} strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="70,40 140,55 100,120" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <polygon points="290,120 220,105 260,40" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <Dot x={180} y={80} />
        <Label x={186} y={72} fill={RED}>O</Label>
        <Label x={52} y={32}>F</Label>
        <Label x={296} y={138} fill={RED}>F&apos;</Label>
        <Label x={44} y={62} fill={INK}>A</Label>
        <Label x={298} y={116} fill={INK}>A&apos;</Label>
        <Dot x={70} y={40} />
        <Dot x={290} y={120} />
        {/* codages : O est le milieu de [AA'] */}
        <line x1="123.3" y1="64.7" x2="126.7" y2="55.3" stroke={RED} strokeWidth="2" />
        <line x1="233.3" y1="104.7" x2="236.7" y2="95.3" stroke={RED} strokeWidth="2" />
        <Label x={100} y={155} fill={RED}>OA = OA&apos; : O est le milieu de [AA&apos;]</Label>
      </svg>
    ),
  },

  "m5-alternes-internes": {
    title: "Deux parallèles coupées par une sécante : angles alternes-internes",
    svg: (
      <svg viewBox="0 0 360 170" className="w-full">
        {/* les deux parallèles */}
        <line x1="30" y1="50" x2="330" y2="50" stroke={INK} strokeWidth="2.5" />
        <line x1="30" y1="120" x2="330" y2="120" stroke={INK} strokeWidth="2.5" />
        {/* codage du parallélisme : un chevron sur chaque droite */}
        <path d="M282 44 l10 6 l-10 6" fill="none" stroke={BLUE} strokeWidth="2" />
        <path d="M282 114 l10 6 l-10 6" fill="none" stroke={BLUE} strokeWidth="2" />
        {/* la sécante */}
        <line x1="100" y1="20" x2="230" y2="150" stroke={VIOLET} strokeWidth="2.5" />
        {/* les deux angles alternes-internes, égaux (même couleur) */}
        <path d="M130 50 L165 50 A35 35 0 0 1 154.7 74.7 Z" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2" />
        <path d="M200 120 L165 120 A35 35 0 0 0 175.3 95.3 Z" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2" />
        <Label x={302} y={40}>(d)</Label>
        <Label x={302} y={142}>(d&apos;)</Label>
        <Label x={72} y={18} fill={VIOLET}>(s)</Label>
        <Label x={30} y={166} fill={GREEN}>(d) // (d&apos;) : les alternes-internes sont égaux</Label>
      </svg>
    ),
  },

  "m5-triangle-hauteur": {
    title: "Base et hauteur d'un triangle : Aire = (b × h) ÷ 2",
    svg: (
      <svg viewBox="0 0 360 170" className="w-full">
        <polygon points="60,140 300,140 200,35" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        {/* base */}
        <line x1="60" y1="140" x2="300" y2="140" stroke={GREEN} strokeWidth="3.5" />
        {/* hauteur issue de C, perpendiculaire à la base */}
        <line x1="200" y1="35" x2="200" y2="140" stroke={RED} strokeWidth="2.5" />
        <rect x="186" y="126" width="14" height="14" fill="none" stroke={RED} strokeWidth="2" />
        <Dot x={200} y={35} />
        <Label x={42} y={148}>A</Label>
        <Label x={306} y={148}>B</Label>
        <Label x={194} y={25}>C</Label>
        <Label x={204} y={158}>H</Label>
        <Label x={120} y={162} fill={GREEN}>base b</Label>
        <Label x={208} y={92} fill={RED}>hauteur h</Label>
        <text x={16} y={52} fontSize="16" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">
          Aire = (b × h) ÷ 2
        </text>
      </svg>
    ),
  },

  "m5-aire-disque": {
    title: "L'aire du disque de rayon r",
    svg: (
      <svg viewBox="0 0 360 170" className="w-full">
        <circle cx="95" cy="85" r="65" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Dot x={95} y={85} />
        <Label x={76} y={80}>O</Label>
        <line x1="95" y1="85" x2="160" y2="85" stroke={RED} strokeWidth="2.5" />
        <Label x={124} y={78} fill={RED}>r</Label>
        <text x={190} y={75} fontSize="20" fontWeight="800" fill={GREEN} fontFamily="var(--font-baloo), sans-serif">
          Aire = π × r²
        </text>
        <Label x={190} y={102}>c&apos;est-à-dire π × r × r,</Label>
        <Label x={190} y={122}>avec π ≈ 3,14</Label>
      </svg>
    ),
  },

  "m5-parallelogramme": {
    title: "Le parallélogramme et ses codages",
    svg: (
      <svg viewBox="0 0 360 170" className="w-full">
        <polygon points="60,130 260,130 320,40 120,40" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        {/* diagonales, sécantes en leur milieu O */}
        <line x1="60" y1="130" x2="320" y2="40" stroke={GREEN} strokeWidth="1.8" strokeDasharray="5 4" />
        <line x1="260" y1="130" x2="120" y2="40" stroke={RED} strokeWidth="1.8" strokeDasharray="5 4" />
        <Dot x={190} y={85} />
        <Label x={197} y={78}>O</Label>
        {/* codages : côtés opposés de même longueur (1 trait / 2 traits) */}
        <line x1="160" y1="124" x2="160" y2="136" stroke={INK} strokeWidth="2" />
        <line x1="220" y1="34" x2="220" y2="46" stroke={INK} strokeWidth="2" />
        <line x1="82" y1="85.7" x2="92" y2="92.3" stroke={INK} strokeWidth="2" />
        <line x1="88" y1="77.7" x2="98" y2="84.3" stroke={INK} strokeWidth="2" />
        <line x1="282" y1="85.7" x2="292" y2="92.3" stroke={INK} strokeWidth="2" />
        <line x1="288" y1="77.7" x2="298" y2="84.3" stroke={INK} strokeWidth="2" />
        {/* codages : OA = OC (vert) et OB = OD (rouge) */}
        <line x1="123.4" y1="102.8" x2="126.6" y2="112.2" stroke={GREEN} strokeWidth="2" />
        <line x1="253.4" y1="57.8" x2="256.6" y2="67.2" stroke={GREEN} strokeWidth="2" />
        <line x1="222.3" y1="111.7" x2="227.7" y2="103.3" stroke={RED} strokeWidth="2" />
        <line x1="152.3" y1="66.7" x2="157.7" y2="58.3" stroke={RED} strokeWidth="2" />
        <Label x={44} y={143}>A</Label>
        <Label x={266} y={143}>B</Label>
        <Label x={326} y={36}>C</Label>
        <Label x={100} y={36}>D</Label>
        <Label x={40} y={164}>les diagonales se coupent en leur milieu O</Label>
      </svg>
    ),
  },

  "m5-inegalite-triangulaire": {
    title: "L'inégalité triangulaire : le triangle se referme… ou pas",
    svg: (
      <svg viewBox="0 0 360 175" className="w-full">
        {/* cas possible : côtés 3, 4, 5 */}
        <polygon points="20,130 140,130 96.8,72.4" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={74} y={148}>5</Label>
        <Label x={42} y={96}>4</Label>
        <Label x={126} y={96}>3</Label>
        <Label x={18} y={168} fill={GREEN}>possible : 3 + 4 &gt; 5</Label>
        {/* cas impossible : côtés 3, 4, 10 — les arcs ne se rejoignent pas */}
        <line x1="215" y1="130" x2="335" y2="130" stroke={INK} strokeWidth="2.5" />
        <Label x={266} y={148}>10</Label>
        <line x1="215" y1="130" x2="238.1" y2="102.4" stroke={INK} strokeWidth="2.5" />
        <Label x={210} y={100}>3</Label>
        <line x1="335" y1="130" x2="304.1" y2="93.2" stroke={INK} strokeWidth="2.5" />
        <Label x={314} y={92}>4</Label>
        <path d="M251 130 A36 36 0 0 0 187.4 106.9" fill="none" stroke={RED} strokeWidth="1.5" strokeDasharray="5 4" />
        <path d="M287 130 A48 48 0 0 1 358 88.4" fill="none" stroke={RED} strokeWidth="1.5" strokeDasharray="5 4" />
        <text x={264} y={92} fontSize="16" fontWeight="800" fill={RED} fontFamily="var(--font-baloo), sans-serif">?</text>
        <Label x={205} y={168} fill={RED}>impossible : 3 + 4 &lt; 10</Label>
      </svg>
    ),
  },

  "m5-prisme-cylindre": {
    title: "Prisme droit et cylindre : une base et une hauteur",
    svg: (
      <svg viewBox="0 0 360 185" className="w-full">
        {/* prisme droit à base triangulaire */}
        <polygon points="50,45 130,45 105,25" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="50" y1="45" x2="50" y2="135" stroke={INK} strokeWidth="2.5" />
        <line x1="130" y1="45" x2="130" y2="135" stroke={INK} strokeWidth="2.5" />
        <line x1="105" y1="25" x2="105" y2="115" stroke={INK} strokeWidth="1.8" strokeDasharray="5 4" />
        <line x1="50" y1="135" x2="130" y2="135" stroke={INK} strokeWidth="2.5" />
        <line x1="50" y1="135" x2="105" y2="115" stroke={INK} strokeWidth="1.8" strokeDasharray="5 4" />
        <line x1="130" y1="135" x2="105" y2="115" stroke={INK} strokeWidth="1.8" strokeDasharray="5 4" />
        <Label x={56} y={16} fill={BLUE}>base</Label>
        <line x1="28" y1="45" x2="28" y2="135" stroke={GREEN} strokeWidth="2" />
        <path d="M28 45 l-4 9 h8 z" fill={GREEN} />
        <path d="M28 135 l-4 -9 h8 z" fill={GREEN} />
        <Label x={8} y={95} fill={GREEN}>h</Label>
        <Label x={42} y={160}>prisme droit</Label>
        {/* cylindre de révolution */}
        <ellipse cx="255" cy="45" rx="45" ry="13" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="210" y1="45" x2="210" y2="140" stroke={INK} strokeWidth="2.5" />
        <line x1="300" y1="45" x2="300" y2="140" stroke={INK} strokeWidth="2.5" />
        <path d="M210 140 A45 13 0 0 0 300 140" fill="none" stroke={INK} strokeWidth="2.5" />
        <path d="M210 140 A45 13 0 0 1 300 140" fill="none" stroke={INK} strokeWidth="1.8" strokeDasharray="5 4" />
        <Label x={228} y={20} fill={RED}>base (disque)</Label>
        <line x1="322" y1="45" x2="322" y2="140" stroke={GREEN} strokeWidth="2" />
        <path d="M322 45 l-4 9 h8 z" fill={GREEN} />
        <path d="M322 140 l-4 -9 h8 z" fill={GREEN} />
        <Label x={332} y={97} fill={GREEN}>h</Label>
        <Label x={228} y={160}>cylindre</Label>
        <Label x={95} y={180} fill={GREEN}>h = hauteur, perpendiculaire aux bases</Label>
      </svg>
    ),
  },

  "m5-fractions-egales": {
    title: "Des fractions égales : 1/2 = 2/4 = 3/6",
    svg: (
      <svg viewBox="0 0 360 145" className="w-full">
        {/* un demi */}
        <circle cx="70" cy="60" r="40" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <path d="M70 20 A40 40 0 0 0 70 100 Z" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        {/* deux quarts */}
        <circle cx="180" cy="60" r="40" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <path d="M180 20 A40 40 0 0 0 180 100 Z" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <line x1="140" y1="60" x2="220" y2="60" stroke={INK} strokeWidth="2" />
        {/* trois sixièmes */}
        <circle cx="290" cy="60" r="40" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <path d="M290 20 A40 40 0 0 0 290 100 Z" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <line x1="255.4" y1="40" x2="324.6" y2="80" stroke={INK} strokeWidth="2" />
        <line x1="324.6" y1="40" x2="255.4" y2="80" stroke={INK} strokeWidth="2" />
        {/* égalités */}
        <text x={116} y={67} fontSize="20" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">=</text>
        <text x={226} y={67} fontSize="20" fontWeight="800" fill={INK} fontFamily="var(--font-baloo), sans-serif">=</text>
        <text x={56} y={130} fontSize="18" fontWeight="800" fill={RED} fontFamily="var(--font-baloo), sans-serif">1/2</text>
        <text x={166} y={130} fontSize="18" fontWeight="800" fill={RED} fontFamily="var(--font-baloo), sans-serif">2/4</text>
        <text x={276} y={130} fontSize="18" fontWeight="800" fill={RED} fontFamily="var(--font-baloo), sans-serif">3/6</text>
      </svg>
    ),
  },

  "m5-cercle-circonscrit": {
    title: "Les médiatrices sont concourantes : cercle circonscrit au triangle",
    svg: (
      <svg viewBox="0 0 360 192" className="w-full">
        <circle cx="180" cy="95" r="75" fill="none" stroke={RED} strokeWidth="2.5" />
        <polygon points="154.3,24.5 115,132.5 245,132.5" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        {/* les trois médiatrices, concourantes en O */}
        <line x1="106.5" y1="68.2" x2="222.3" y2="110.3" stroke={GREEN} strokeWidth="1.8" strokeDasharray="5 4" />
        <line x1="180" y1="50" x2="180" y2="165" stroke={GREEN} strokeWidth="1.8" strokeDasharray="5 4" />
        <line x1="145.5" y1="123.9" x2="222.7" y2="59.2" stroke={GREEN} strokeWidth="1.8" strokeDasharray="5 4" />
        <Dot x={180} y={95} />
        <Label x={188} y={90}>O</Label>
        <Label x={138} y={18}>A</Label>
        <Label x={96} y={146}>B</Label>
        <Label x={252} y={146}>C</Label>
        <Label x={14} y={52} fill={GREEN}>médiatrices</Label>
        <Label x={15} y={188}>OA = OB = OC</Label>
        <Label x={225} y={188} fill={RED}>cercle circonscrit</Label>
      </svg>
    ),
  },
};
