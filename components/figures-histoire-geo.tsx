/**
 * Catalogue de figures histoire-géographie 6e : frises chronologiques et
 * cartes stylisées (schémas assumés, côtes simplifiées).
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

function Label({
  x,
  y,
  children,
  fill = INK,
  size = 13,
  halo = false,
}: {
  x: number;
  y: number;
  children: string;
  fill?: string;
  size?: number;
  halo?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight="700"
      fill={fill}
      fontFamily="var(--font-nunito), sans-serif"
      {...(halo
        ? { stroke: "#fff", strokeWidth: 3.5, paintOrder: "stroke", strokeLinejoin: "round" as const }
        : {})}
    >
      {children}
    </text>
  );
}

/** Coupure « // » sur une frise : l'échelle n'est pas régulière */
function Break({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x - 6} y={y - 10} width="12" height="20" fill="#fff" />
      <line x1={x - 5} y1={y + 9} x2={x + 1} y2={y - 9} stroke={INK} strokeWidth="2" />
      <line x1={x - 1} y1={y + 9} x2={x + 5} y2={y - 9} stroke={INK} strokeWidth="2" />
    </g>
  );
}

/** Événement sur une frise : point + trait de rappel vers l'étiquette */
function Tick({ x, y, side }: { x: number; y: number; side: "up" | "down" }) {
  return (
    <g>
      <circle cx={x} cy={y} r="3.4" fill={INK} />
      <line
        x1={x}
        y1={side === "up" ? y - 9 : y + 9}
        x2={x}
        y2={side === "up" ? y - 34 : y + 26}
        stroke={INK}
        strokeWidth="1.2"
      />
    </g>
  );
}

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  "hg-frise-prehistoire": {
    title: "La frise de la Préhistoire — les // montrent des sauts de temps (échelle non régulière)",
    svg: (
      <svg viewBox="0 0 360 175" className="w-full">
        {/* bandes des périodes */}
        <rect x="30" y="88" width="215" height="14" fill={BLUE_TINT} />
        <rect x="245" y="88" width="70" height="14" fill={GREEN_TINT} />
        <rect x="315" y="88" width="30" height="14" fill={RED_TINT} />
        {/* axe du temps */}
        <line x1="15" y1="95" x2="345" y2="95" stroke={INK} strokeWidth="2.5" />
        <path d="M345 95 l-9 -5 v10 z" fill={INK} />
        {/* coupures d'échelle */}
        <Break x={75} y={95} />
        <Break x={142} y={95} />
        <Break x={210} y={95} />
        <Break x={280} y={95} />
        {/* événements au-dessus */}
        <Tick x={40} y={95} side="up" />
        <Label x={8} y={40} size={11}>premiers humains</Label>
        <Label x={20} y={54} size={11}>≈ −3 millions</Label>
        <Tick x={175} y={95} side="up" />
        <Label x={140} y={40} size={11}>art des grottes</Label>
        <Label x={150} y={54} size={11}>≈ −36 000</Label>
        <Tick x={315} y={95} side="up" />
        <Label x={290} y={40} size={11}>écriture</Label>
        <Label x={288} y={54} size={11}>≈ −3 300</Label>
        <Label x={296} y={80} size={11} fill={RED}>l&apos;Histoire</Label>
        {/* événements en dessous */}
        <Tick x={110} y={95} side="down" />
        <Label x={68} y={134} size={11}>maîtrise du feu</Label>
        <Label x={80} y={148} size={11}>≈ −400 000</Label>
        <Tick x={245} y={95} side="down" />
        <Label x={188} y={134} size={11}>agriculture, élevage</Label>
        <Label x={215} y={148} size={11}>≈ −10 000</Label>
        {/* noms des périodes */}
        <Label x={85} y={170} size={12} fill={BLUE}>PALÉOLITHIQUE</Label>
        <Label x={238} y={170} size={12} fill={GREEN}>NÉOLITHIQUE</Label>
      </svg>
    ),
  },

  "hg-frise-antiquite": {
    title: "L'Antiquité : de l'invention de l'écriture (−3 300) à la chute de Rome (476)",
    svg: (
      <svg viewBox="0 0 360 165" className="w-full">
        <rect x="30" y="83" width="305" height="14" fill={VIOLET_TINT} />
        <line x1="15" y1="90" x2="345" y2="90" stroke={INK} strokeWidth="2.5" />
        <path d="M345 90 l-9 -5 v10 z" fill={INK} />
        <Break x={72} y={90} />
        {/* repère de l'an 1 */}
        <line x1="288" y1="72" x2="288" y2="108" stroke={RED} strokeWidth="1.5" strokeDasharray="4 3" />
        <Label x={277} y={66} size={10} fill={RED}>an 1</Label>
        {/* au-dessus */}
        <Tick x={40} y={90} side="up" />
        <Label x={12} y={35} size={11}>écriture</Label>
        <Label x={18} y={49} size={11}>−3 300</Label>
        <Tick x={132} y={90} side="up" />
        <Label x={112} y={35} size={11}>Rome</Label>
        <Label x={112} y={49} size={11}>−753</Label>
        <Tick x={228} y={90} side="up" />
        <Label x={210} y={35} size={11}>César</Label>
        <Label x={218} y={49} size={11}>−52</Label>
        <Tick x={330} y={90} side="up" />
        <Label x={268} y={35} size={11}>chute de Rome</Label>
        <Label x={278} y={49} size={11}>476 ap. J.-C.</Label>
        {/* en dessous */}
        <Tick x={105} y={90} side="down" />
        <Label x={80} y={129} size={11}>1ers J.O.</Label>
        <Label x={92} y={143} size={11}>−776</Label>
        <Tick x={185} y={90} side="down" />
        <Label x={162} y={129} size={11}>Athènes</Label>
        <Label x={148} y={143} size={11}>Ve s. av. J.-C.</Label>
        <Tick x={262} y={90} side="down" />
        <Label x={240} y={129} size={11}>Auguste</Label>
        <Label x={252} y={143} size={11}>−27</Label>
        <Label x={148} y={161} size={12} fill={VIOLET}>ANTIQUITÉ</Label>
      </svg>
    ),
  },

  "hg-croissant-fertile": {
    title: "Le Croissant fertile — un schéma très simplifié, pas une carte exacte",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* le croissant de terres fertiles */}
        <path
          d="M85 188 Q 140 130 185 75 Q 235 38 275 75 Q 310 110 322 150"
          fill="none"
          stroke={GREEN_TINT}
          strokeWidth="34"
          strokeLinecap="round"
        />
        <path
          d="M85 188 Q 140 130 185 75 Q 235 38 275 75 Q 310 110 322 150"
          fill="none"
          stroke={GREEN}
          strokeWidth="1.8"
          strokeDasharray="6 5"
        />
        <Label x={175} y={25} size={12} fill={GREEN}>le Croissant fertile</Label>
        {/* mer Méditerranée */}
        <path
          d="M15 60 Q 80 45 135 65 Q 155 95 140 125 Q 80 145 15 135 Z"
          fill={BLUE_TINT}
          stroke={BLUE}
          strokeWidth="2"
        />
        <Label x={38} y={92} size={11} fill={BLUE}>MER</Label>
        <Label x={26} y={107} size={11} fill={BLUE}>MÉDITERRANÉE</Label>
        {/* le Nil et l'Égypte */}
        <path d="M92 196 Q 98 168 104 138" fill="none" stroke={BLUE} strokeWidth="3" />
        <Label x={70} y={180} size={11} fill={BLUE}>Nil</Label>
        <Label x={112} y={194} size={11}>ÉGYPTE</Label>
        {/* Tigre, Euphrate et golfe */}
        <ellipse cx="314" cy="158" rx="26" ry="16" fill={BLUE_TINT} stroke={BLUE} strokeWidth="2" />
        <path d="M245 65 Q 262 105 294 148" fill="none" stroke={BLUE} strokeWidth="2.5" />
        <path d="M285 52 Q 300 95 315 142" fill="none" stroke={BLUE} strokeWidth="2.5" />
        <Label x={192} y={82} size={10} fill={BLUE} halo>Euphrate</Label>
        <Label x={316} y={70} size={10} fill={BLUE} halo>Tigre</Label>
        <Label x={168} y={132} size={11} halo>MÉSOPOTAMIE</Label>
        <Label x={262} y={190} size={10} fill={BLUE} halo>golfe Persique</Label>
      </svg>
    ),
  },

  "hg-monde-grec": {
    title: "Cités et colonies grecques autour de la Méditerranée (schéma)",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        <Label x={28} y={20} size={10}>« comme des grenouilles autour d&apos;une mare » (Platon)</Label>
        {/* la mer */}
        <rect x="20" y="50" width="320" height="115" rx="45" fill={BLUE_TINT} stroke={BLUE} strokeWidth="2" />
        <Label x={120} y={158} size={11} fill={BLUE}>MER MÉDITERRANÉE</Label>
        {/* la Grèce (péninsule très simplifiée) */}
        <polygon
          points="192,51 200,85 194,100 210,118 226,96 222,75 236,51"
          fill="#fff"
          stroke={INK}
          strokeWidth="2"
        />
        <Label x={196} y={44} size={11}>GRÈCE</Label>
        {/* flèches de colonisation */}
        <path d="M188 68 Q 120 46 78 52" fill="none" stroke={GREEN} strokeWidth="1.8" strokeDasharray="5 4" />
        <path d="M78 52 l11 -4 l-2 9 z" fill={GREEN} />
        <path d="M232 66 Q 262 52 284 53" fill="none" stroke={GREEN} strokeWidth="1.8" strokeDasharray="5 4" />
        <path d="M284 53 l-11 -4 l2 9 z" fill={GREEN} />
        <path d="M210 122 Q 208 142 206 152 " fill="none" stroke={GREEN} strokeWidth="1.8" strokeDasharray="5 4" />
        <path d="M206 156 l-4 -10 l9 1 z" fill={GREEN} />
        {/* cités de Grèce */}
        <circle cx="205" cy="72" r="3.5" fill={RED} />
        <Label x={162} y={70} size={10} fill={RED} halo>Delphes</Label>
        <circle cx="200" cy="92" r="3.5" fill={RED} />
        <Label x={155} y={96} size={10} fill={RED} halo>Olympie</Label>
        <circle cx="222" cy="84" r="3.5" fill={RED} />
        <Label x={229} y={80} size={10} fill={RED} halo>Athènes</Label>
        <circle cx="211" cy="106" r="3.5" fill={RED} />
        <Label x={216} y={118} size={10} fill={RED} halo>Sparte</Label>
        {/* colonies */}
        <circle cx="60" cy="52" r="3.5" fill={GREEN} />
        <Label x={30} y={42} size={10} fill={GREEN}>Marseille</Label>
        <ellipse cx="150" cy="120" rx="14" ry="10" fill="#fff" stroke={INK} strokeWidth="1.5" />
        <circle cx="150" cy="118" r="3.5" fill={GREEN} />
        <Label x={112} y={142} size={10} fill={GREEN} halo>Syracuse</Label>
        <circle cx="206" cy="160" r="3.5" fill={GREEN} />
        <Label x={182} y={180} size={10} fill={GREEN}>Cyrène</Label>
        <circle cx="297" cy="52" r="3.5" fill={GREEN} />
        <Label x={270} y={42} size={10} fill={GREEN}>Byzance</Label>
        {/* légende */}
        <circle cx="30" cy="197" r="4" fill={RED} />
        <Label x={40} y={201} size={10}>cités grecques</Label>
        <circle cx="135" cy="197" r="4" fill={GREEN} />
        <Label x={145} y={201} size={10}>colonies fondées par les Grecs</Label>
      </svg>
    ),
  },

  "hg-empire-romain": {
    title: "L'Empire romain entoure la Méditerranée, « Mare Nostrum » (schéma)",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* l'Empire, tout autour de la mer */}
        <rect x="15" y="25" width="330" height="160" rx="28" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        {/* la Méditerranée au centre */}
        <rect x="65" y="70" width="235" height="80" rx="32" fill={BLUE_TINT} stroke={BLUE} strokeWidth="2" />
        <Label x={95} y={105} size={12} fill={BLUE}>MARE NOSTRUM</Label>
        <Label x={95} y={122} size={10} fill={BLUE}>(« notre mer », la Méditerranée)</Label>
        {/* l'Italie et Rome */}
        <polygon points="230,71 235,100 243,122 252,98 248,71" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <circle cx="240" cy="92" r="4.5" fill={RED} stroke="#fff" strokeWidth="1.5" />
        <Label x={256} y={90} size={11} fill={RED} halo>Rome</Label>
        {/* quelques provinces */}
        <Label x={62} y={52} size={11}>GAULE</Label>
        <Label x={30} y={172} size={11}>HISPANIE</Label>
        <Label x={262} y={172} size={11}>ÉGYPTE</Label>
        <Label x={112} y={52} size={11}>GRÈCE</Label>
        <Label x={52} y={197} size={10}>l&apos;Empire (en rose) entoure toute la Méditerranée</Label>
      </svg>
    ),
  },

  "hg-schema-metropole": {
    title: "Centre, banlieues, périurbain : les mobilités quotidiennes dans une métropole",
    svg: (
      <svg viewBox="0 0 360 205" className="w-full">
        {/* mobilités pendulaires */}
        <Label x={105} y={22} size={10} fill={RED}>le matin : vers le centre (travail, études)</Label>
        <line x1="320" y1="32" x2="97" y2="32" stroke={RED} strokeWidth="2.5" />
        <path d="M95 32 l9 -5 v10 z" fill={RED} />
        <line x1="95" y1="54" x2="318" y2="54" stroke={BLUE} strokeWidth="2.5" />
        <path d="M320 54 l-9 -5 v10 z" fill={BLUE} />
        <Label x={118} y={70} size={10} fill={BLUE}>le soir : retour vers la périphérie</Label>
        {/* le centre : tours de bureaux */}
        <rect x="30" y="85" width="24" height="70" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <rect x="60" y="76" width="26" height="79" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <rect x="66" y="86" width="6" height="8" fill="#fff" />
        <rect x="78" y="86" width="6" height="8" fill="#fff" />
        <rect x="66" y="100" width="6" height="8" fill="#fff" />
        <rect x="78" y="100" width="6" height="8" fill="#fff" />
        <rect x="92" y="97" width="22" height="58" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        {/* les banlieues : immeubles */}
        <rect x="145" y="110" width="32" height="45" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="184" y="118" width="28" height="37" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="219" y="113" width="26" height="42" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        {/* le périurbain : maisons et champs */}
        <rect x="262" y="130" width="24" height="25" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <polygon points="258,130 274,116 290,130" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <rect x="298" y="135" width="20" height="20" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <polygon points="294,135 308,123 322,135" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <circle cx="334" cy="136" r="8" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2" />
        <line x1="334" y1="144" x2="334" y2="155" stroke={INK} strokeWidth="2" />
        {/* sol et limites de zones */}
        <line x1="15" y1="155" x2="345" y2="155" stroke={INK} strokeWidth="2.5" />
        <line x1="132" y1="80" x2="132" y2="155" stroke={INK} strokeWidth="1" strokeDasharray="4 3" />
        <line x1="253" y1="80" x2="253" y2="155" stroke={INK} strokeWidth="1" strokeDasharray="4 3" />
        {/* étiquettes des zones */}
        <Label x={45} y={174} size={11} fill={VIOLET}>CENTRE</Label>
        <Label x={18} y={190} size={10}>bureaux, commerces</Label>
        <Label x={155} y={174} size={11} fill={BLUE}>BANLIEUES</Label>
        <Label x={166} y={190} size={10}>logements</Label>
        <Label x={262} y={174} size={11} fill={GREEN}>PÉRIURBAIN</Label>
        <Label x={252} y={190} size={10}>maisons, champs</Label>
      </svg>
    ),
  },

  "hg-schema-littoral": {
    title: "Un littoral industrialo-portuaire (schéma)",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        {/* échanges maritimes */}
        <Label x={15} y={18} size={10} fill={RED}>échanges avec le monde entier</Label>
        <line x1="28" y1="30" x2="127" y2="30" stroke={RED} strokeWidth="2.5" />
        <path d="M26 30 l9 -5 v10 z" fill={RED} />
        <path d="M129 30 l-9 -5 v10 z" fill={RED} />
        {/* la mer */}
        <rect x="15" y="112" width="140" height="63" fill={BLUE_TINT} />
        <line x1="15" y1="112" x2="155" y2="112" stroke={BLUE} strokeWidth="2.5" />
        <Label x={25} y={168} size={11} fill={BLUE}>MER</Label>
        {/* navire porte-conteneurs */}
        <polygon points="38,96 122,96 112,114 48,114" fill={INK} />
        <rect x="44" y="86" width="16" height="10" fill={RED_TINT} stroke={INK} strokeWidth="1" />
        <rect x="62" y="86" width="16" height="10" fill={GREEN_TINT} stroke={INK} strokeWidth="1" />
        <rect x="80" y="86" width="16" height="10" fill={VIOLET_TINT} stroke={INK} strokeWidth="1" />
        <rect x="98" y="86" width="16" height="10" fill={BLUE_TINT} stroke={INK} strokeWidth="1" />
        <rect x="53" y="76" width="16" height="10" fill={VIOLET_TINT} stroke={INK} strokeWidth="1" />
        <rect x="71" y="76" width="16" height="10" fill={RED_TINT} stroke={INK} strokeWidth="1" />
        <rect x="89" y="76" width="16" height="10" fill={GREEN_TINT} stroke={INK} strokeWidth="1" />
        <Label x={22} y={132} size={10} halo>navire porte-conteneurs</Label>
        {/* le quai et la grue */}
        <line x1="155" y1="102" x2="345" y2="102" stroke={INK} strokeWidth="2.5" />
        <line x1="155" y1="102" x2="155" y2="175" stroke={INK} strokeWidth="2.5" />
        <line x1="185" y1="102" x2="185" y2="48" stroke={INK} strokeWidth="3" />
        <line x1="215" y1="102" x2="215" y2="48" stroke={INK} strokeWidth="3" />
        <line x1="140" y1="48" x2="250" y2="48" stroke={INK} strokeWidth="3" />
        <line x1="152" y1="48" x2="152" y2="70" stroke={INK} strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="144" y="70" width="16" height="10" fill={RED_TINT} stroke={INK} strokeWidth="1" />
        <Label x={256} y={45} size={10}>grue du port</Label>
        {/* conteneurs empilés sur le quai */}
        {[0, 1, 2].map((col) =>
          [0, 1, 2].map((row) => (
            <rect
              key={`${col}-${row}`}
              x={234 + col * 28}
              y={92 - row * 10}
              width="24"
              height="10"
              fill={[RED_TINT, BLUE_TINT, GREEN_TINT][(col + row) % 3]}
              stroke={INK}
              strokeWidth="1"
            />
          ))
        )}
        <Label x={238} y={118} size={10}>conteneurs</Label>
        {/* usines de la zone industrialo-portuaire */}
        <rect x="318" y="80" width="26" height="22" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <rect x="324" y="64" width="6" height="16" fill={VIOLET_TINT} stroke={INK} strokeWidth="1.5" />
        <Label x={312} y={118} size={10}>usines</Label>
        {/* vers l'intérieur des terres */}
        <line x1="230" y1="145" x2="333" y2="145" stroke={RED} strokeWidth="2.5" />
        <path d="M335 145 l-9 -5 v10 z" fill={RED} />
        <Label x={165} y={165} size={10} fill={RED}>camions et trains vers les villes</Label>
      </svg>
    ),
  },

  "hg-democratie-athenes": {
    title: "La démocratie à Athènes au Ve siècle av. J.-C.",
    svg: (
      <svg viewBox="0 0 360 215" className="w-full">
        {/* les citoyens */}
        <rect x="40" y="15" width="190" height="48" rx="10" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={103} y={37}>CITOYENS</Label>
        <Label x={66} y={53} size={10}>hommes adultes et libres</Label>
        {/* ceux qui n'ont pas le droit de vote */}
        <rect x="258" y="15" width="92" height="96" rx="10" fill={RED_TINT} stroke={RED} strokeWidth="2" />
        <Label x={266} y={33} size={10} fill={RED}>NE VOTENT PAS</Label>
        <Label x={272} y={52} size={10}>les femmes</Label>
        <Label x={272} y={68} size={10}>les esclaves</Label>
        <Label x={272} y={84} size={10}>les étrangers</Label>
        <Label x={274} y={100} size={10}>(métèques)</Label>
        <line x1="230" y1="39" x2="258" y2="48" stroke={INK} strokeWidth="1.5" />
        <line x1="238" y1="37" x2="250" y2="50" stroke={RED} strokeWidth="2.5" />
        <line x1="250" y1="37" x2="238" y2="50" stroke={RED} strokeWidth="2.5" />
        {/* l'assemblée */}
        <line x1="135" y1="63" x2="135" y2="84" stroke={INK} strokeWidth="2.5" />
        <path d="M135 88 l-5 -9 h10 z" fill={INK} />
        <Label x={148} y={79} size={10}>se réunissent</Label>
        <rect x="40" y="88" width="190" height="48" rx="10" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={62} y={108} size={12}>ECCLÉSIA (l&apos;assemblée)</Label>
        <Label x={60} y={126} size={10}>vote les lois et la guerre</Label>
        {/* les magistrats */}
        <line x1="135" y1="136" x2="135" y2="157" stroke={INK} strokeWidth="2.5" />
        <path d="M135 161 l-5 -9 h10 z" fill={INK} />
        <Label x={148} y={152} size={10}>élit ou tire au sort</Label>
        <rect x="40" y="161" width="190" height="48" rx="10" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={60} y={181} size={12}>MAGISTRATS, STRATÈGES</Label>
        <Label x={48} y={199} size={10}>dirigent la cité pendant un an</Label>
      </svg>
    ),
  },

  "hg-valeurs-republique": {
    title: "Les symboles de la République française",
    svg: (
      <svg viewBox="0 0 360 170" className="w-full">
        {/* le drapeau */}
        <line x1="20" y1="24" x2="20" y2="108" stroke={INK} strokeWidth="3" />
        <rect x="22" y="30" width="30" height="60" fill={BLUE} />
        <rect x="52" y="30" width="30" height="60" fill="#fff" />
        <rect x="82" y="30" width="30" height="60" fill={RED} />
        <rect x="22" y="30" width="90" height="60" fill="none" stroke={INK} strokeWidth="2.5" />
        <Label x={18} y={122} size={10}>le drapeau tricolore</Label>
        {/* la devise */}
        <rect x="140" y="30" width="62" height="26" rx="13" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Label x={150} y={47} size={11}>Liberté</Label>
        <rect x="208" y="30" width="62" height="26" rx="13" fill="#fff" stroke={INK} strokeWidth="2" />
        <Label x={218} y={47} size={11}>Égalité</Label>
        <rect x="276" y="30" width="72" height="26" rx="13" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <Label x={282} y={47} size={11}>Fraternité</Label>
        <Label x={172} y={74} size={10}>la devise de la République</Label>
        {/* l'hymne */}
        <circle cx="155" cy="130" r="5.5" fill={INK} />
        <line x1="160" y1="130" x2="160" y2="102" stroke={INK} strokeWidth="2.5" />
        <path d="M160 102 q 10 3 13 12" fill="none" stroke={INK} strokeWidth="2.5" />
        <Label x={182} y={122} size={10}>La Marseillaise</Label>
        <Label x={182} y={137} size={10}>(l&apos;hymne national)</Label>
        {/* le 14 juillet */}
        <rect x="284" y="98" width="46" height="42" rx="6" fill="#fff" stroke={INK} strokeWidth="2" />
        <rect x="284" y="98" width="46" height="13" rx="6" fill={RED_TINT} stroke={INK} strokeWidth="1.5" />
        <Label x={296} y={133}>14</Label>
        <Label x={272} y={155} size={10}>le 14 Juillet</Label>
        <Label x={264} y={168} size={10}>(fête nationale)</Label>
      </svg>
    ),
  },
};
