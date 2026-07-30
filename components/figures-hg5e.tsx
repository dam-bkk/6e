/**
 * Catalogue de figures histoire-géographie 5e : frises chronologiques, cartes
 * stylisées (schémas assumés, côtes très simplifiées) et schémas.
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
  "hg5-empires-heritiers": {
    title: "Deux empires héritiers de Rome, et le partage de Verdun (843) — schéma très simplifié",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {/* Empire carolingien, à l'ouest */}
        <rect x="20" y="35" width="165" height="110" rx="18" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={22} y={26} size={11} fill={GREEN}>EMPIRE CAROLINGIEN</Label>
        <circle cx="95" cy="62" r="4.5" fill={GREEN} stroke="#fff" strokeWidth="1.5" />
        <Label x={104} y={58} size={10} halo>Aix-la-Chapelle</Label>
        {/* partage de Verdun : 3 royaumes */}
        <line x1="75" y1="42" x2="75" y2="138" stroke={RED} strokeWidth="2" strokeDasharray="5 4" />
        <line x1="130" y1="42" x2="130" y2="138" stroke={RED} strokeWidth="2" strokeDasharray="5 4" />
        <Label x={25} y={130} size={8} halo>occidentale</Label>
        <Label x={85} y={130} size={8} halo>médiane</Label>
        <Label x={137} y={130} size={8} halo>orientale</Label>
        {/* Empire byzantin, à l'est */}
        <rect x="210" y="45" width="135" height="105" rx="18" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={222} y={38} size={11} fill={VIOLET}>EMPIRE BYZANTIN</Label>
        <circle cx="255" cy="95" r="4.5" fill={VIOLET} stroke="#fff" strokeWidth="1.5" />
        <Label x={263} y={91} size={10} halo>Constantinople</Label>
        {/* la Méditerranée, entre les deux */}
        <rect x="55" y="155" width="285" height="38" rx="19" fill={BLUE_TINT} stroke={BLUE} strokeWidth="2" />
        <Label x={110} y={178} size={11} fill={BLUE}>MER MÉDITERRANÉE</Label>
        {/* légende */}
        <Label x={20} y={207} size={9} fill={RED}>843 : le partage de Verdun coupe l&apos;empire en trois « Francies »</Label>
      </svg>
    ),
  },

  "hg5-frise-islam": {
    title: "Le monde musulman du VIIe au XIIIe siècle",
    svg: (
      <svg viewBox="0 0 360 160" className="w-full">
        {/* bandes des dynasties */}
        <rect x="57" y="88" width="39" height="14" fill={GREEN_TINT} />
        <rect x="96" y="88" width="225" height="14" fill={VIOLET_TINT} />
        <Label x={205} y={99} size={9} fill={VIOLET} halo>ABBASSIDES (750-1258)</Label>
        {/* axe du temps */}
        <line x1="15" y1="95" x2="345" y2="95" stroke={INK} strokeWidth="2.5" />
        <path d="M345 95 l-9 -5 v10 z" fill={INK} />
        {/* siècles */}
        {[
          { year: "600", x: 30 },
          { year: "800", x: 119 },
          { year: "1000", x: 207 },
          { year: "1200", x: 296 },
        ].map((t) => (
          <g key={t.year}>
            <line x1={t.x} y1="90" x2={t.x} y2="100" stroke={INK} strokeWidth="1.5" />
            <Label x={t.x - 10} y={113} size={9}>{t.year}</Label>
          </g>
        ))}
        {/* au-dessus : Hégire, conquêtes, Bagdad */}
        <Tick x={40} y={95} side="up" />
        <Label x={20} y={35} size={10}>Hégire</Label>
        <Label x={28} y={49} size={10}>622</Label>
        <line x1="46" y1="75" x2="90" y2="75" stroke={GREEN} strokeWidth="2" />
        <path d="M95 75 l-9 -4 v8 z" fill={GREEN} />
        <Label x={44} y={70} size={8} fill={GREEN}>conquêtes</Label>
        <Tick x={102} y={95} side="up" />
        <Label x={62} y={35} size={10}>fondation de Bagdad</Label>
        <Label x={92} y={49} size={10}>762</Label>
        {/* en dessous : Damas, Cordoue */}
        <Tick x={57} y={95} side="down" />
        <Label x={18} y={134} size={10} fill={GREEN}>Omeyyades (661-750)</Label>
        <Label x={30} y={148} size={10}>capitale : Damas</Label>
        <Tick x={176} y={95} side="down" />
        <Label x={142} y={134} size={10}>califat de Cordoue</Label>
        <Label x={168} y={148} size={10}>929</Label>
      </svg>
    ),
  },

  "hg5-seigneurie": {
    title: "La seigneurie : château, village, réserve et tenures (schéma)",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* le sol */}
        <line x1="15" y1="140" x2="345" y2="140" stroke={INK} strokeWidth="2.5" />
        {/* la motte et sa tour */}
        <path d="M22 140 Q 60 96 98 140 Z" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <rect x="48" y="68" width="24" height="42" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <rect x="48" y="62" width="7" height="8" fill={RED_TINT} stroke={INK} strokeWidth="1.5" />
        <rect x="65" y="62" width="7" height="8" fill={RED_TINT} stroke={INK} strokeWidth="1.5" />
        {/* le village : maisons et église */}
        <rect x="115" y="118" width="20" height="22" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <polygon points="112,118 125,106 138,118" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="142" y="121" width="18" height="19" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <polygon points="139,121 151,110 163,121" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="168" y="108" width="26" height="32" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <rect x="174" y="88" width="12" height="20" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <line x1="180" y1="80" x2="180" y2="88" stroke={INK} strokeWidth="2" />
        <line x1="176" y1="83" x2="184" y2="83" stroke={INK} strokeWidth="2" />
        {/* la réserve : champ du seigneur + moulin banal */}
        <rect x="208" y="128" width="70" height="12" fill={GREEN_TINT} stroke={INK} strokeWidth="1.5" />
        <rect x="228" y="106" width="16" height="34" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <line x1="236" y1="102" x2="222" y2="88" stroke={INK} strokeWidth="2" />
        <line x1="236" y1="102" x2="250" y2="88" stroke={INK} strokeWidth="2" />
        <line x1="236" y1="102" x2="222" y2="116" stroke={INK} strokeWidth="2" />
        <line x1="236" y1="102" x2="250" y2="116" stroke={INK} strokeWidth="2" />
        {/* les tenures : parcelles des paysans */}
        <rect x="282" y="120" width="20" height="20" fill={GREEN_TINT} stroke={INK} strokeWidth="1.5" />
        <rect x="303" y="120" width="20" height="20" fill={GREEN_TINT} stroke={INK} strokeWidth="1.5" />
        <rect x="324" y="120" width="20" height="20" fill={GREEN_TINT} stroke={INK} strokeWidth="1.5" />
        {/* corvées : les paysans travaillent aussi la réserve */}
        <path d="M310 112 Q 285 92 252 100" fill="none" stroke={RED} strokeWidth="1.8" strokeDasharray="4 3" />
        <path d="M248 101 l10 -4 l-1 9 z" fill={RED} />
        <Label x={262} y={84} size={9} fill={RED}>corvées</Label>
        {/* séparations et étiquettes des zones */}
        <line x1="105" y1="60" x2="105" y2="140" stroke={INK} strokeWidth="1" strokeDasharray="4 3" />
        <line x1="202" y1="60" x2="202" y2="140" stroke={INK} strokeWidth="1" strokeDasharray="4 3" />
        <line x1="280" y1="60" x2="280" y2="140" stroke={INK} strokeWidth="1" strokeDasharray="4 3" />
        <Label x={22} y={160} size={11} fill={RED}>CHÂTEAU</Label>
        <Label x={22} y={174} size={9}>sur sa motte</Label>
        <Label x={118} y={160} size={11} fill={BLUE}>VILLAGE</Label>
        <Label x={112} y={174} size={9}>maisons, église</Label>
        <Label x={208} y={160} size={11} fill={GREEN}>RÉSERVE</Label>
        <Label x={205} y={174} size={9}>du seigneur</Label>
        <Label x={206} y={186} size={9}>+ moulin banal</Label>
        <Label x={286} y={160} size={11} fill={GREEN}>TENURES</Label>
        <Label x={284} y={174} size={9}>des paysans</Label>
      </svg>
    ),
  },

  "hg5-pyramide-feodale": {
    title: "La pyramide féodale : hommage et service contre protection et fief",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* les étages */}
        <rect x="135" y="15" width="90" height="30" rx="8" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={157} y={35} size={12} fill={VIOLET}>LE ROI</Label>
        <rect x="100" y="57" width="160" height="30" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={112} y={72} size={11}>GRANDS SEIGNEURS</Label>
        <Label x={140} y={83} size={9}>(ducs, comtes)</Label>
        <rect x="65" y="99" width="230" height="30" rx="8" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={110} y={114} size={11}>VASSAUX, CHEVALIERS</Label>
        <Label x={130} y={125} size={9}>(guerriers à cheval)</Label>
        <rect x="30" y="141" width="300" height="30" rx="8" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={150} y={156} size={11}>PAYSANS</Label>
        <Label x={83} y={167} size={9}>travaillent la terre, nourrissent tout le monde</Label>
        {/* le vassal doit… (vers le haut) */}
        <line x1="38" y1="130" x2="38" y2="58" stroke={RED} strokeWidth="2.5" />
        <path d="M38 54 l-5 9 h10 z" fill={RED} />
        <Label x={8} y={28} size={9} fill={RED}>hommage +</Label>
        <Label x={8} y={40} size={9} fill={RED}>service militaire</Label>
        {/* le seigneur donne… (vers le bas) */}
        <line x1="322" y1="58" x2="322" y2="130" stroke={GREEN} strokeWidth="2.5" />
        <path d="M322 134 l-5 -9 h10 z" fill={GREEN} />
        <Label x={272} y={28} size={9} fill={GREEN}>protection +</Label>
        <Label x={272} y={40} size={9} fill={GREEN}>fief (une terre)</Label>
        {/* rappel */}
        <Label x={38} y={190} size={9}>chaque seigneur est le vassal d&apos;un plus puissant ; le roi n&apos;est le vassal de personne</Label>
      </svg>
    ),
  },

  "hg5-grandes-decouvertes": {
    title: "Les grands voyages de découverte (schéma très simplifié)",
    svg: (
      <svg viewBox="0 0 360 205" className="w-full">
        {/* l'océan */}
        <rect x="15" y="15" width="330" height="165" rx="14" fill={BLUE_TINT} stroke={BLUE} strokeWidth="2" />
        {/* les continents (formes très simplifiées) */}
        <polygon points="35,25 90,25 95,60 70,80 45,70" fill="#fff" stroke={INK} strokeWidth="2" />
        <polygon points="60,85 90,80 85,130 70,165 55,120" fill="#fff" stroke={INK} strokeWidth="2" />
        <polygon points="150,20 195,20 200,50 170,60 150,45" fill="#fff" stroke={INK} strokeWidth="2" />
        <polygon points="155,70 210,70 205,110 185,155 165,110" fill="#fff" stroke={INK} strokeWidth="2" />
        <polygon points="215,20 340,20 340,90 300,95 290,130 275,95 240,80 220,60" fill="#fff" stroke={INK} strokeWidth="2" />
        <Label x={40} y={112} size={9} halo>AMÉRIQUE</Label>
        <Label x={156} y={34} size={9} halo>EUROPE</Label>
        <Label x={164} y={100} size={9} halo>AFRIQUE</Label>
        <Label x={300} y={45} size={9} halo>ASIE</Label>
        <Label x={280} y={122} size={9} halo>Inde</Label>
        {/* le port de départ (Espagne / Portugal) */}
        <circle cx="155" cy="57" r="4" fill={INK} />
        {/* Colomb, vers l'ouest */}
        <path d="M150 58 Q 120 62 100 72" fill="none" stroke={RED} strokeWidth="2.5" />
        <path d="M96 74 l10 -6 l1 9 z" fill={RED} />
        {/* Vasco de Gama, autour de l'Afrique */}
        <path d="M155 63 Q 140 120 170 165 Q 195 178 220 150 Q 245 122 282 128" fill="none" stroke={GREEN} strokeWidth="2.5" />
        <path d="M287 128 l-10 -5 l0 10 z" fill={GREEN} />
        {/* Magellan, le tour du monde (sort à gauche, revient par la droite) */}
        <path d="M150 64 Q 110 100 78 150 Q 55 168 17 172" fill="none" stroke={VIOLET} strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M343 110 Q 300 150 250 168 Q 190 182 158 72" fill="none" stroke={VIOLET} strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M157 67 l-6 10 l9 1 z" fill={VIOLET} />
        {/* légende */}
        <line x1="18" y1="193" x2="38" y2="193" stroke={RED} strokeWidth="2.5" />
        <Label x={42} y={197} size={9} fill={RED}>Colomb 1492</Label>
        <line x1="112" y1="193" x2="132" y2="193" stroke={GREEN} strokeWidth="2.5" />
        <Label x={136} y={197} size={9} fill={GREEN}>Vasco de Gama 1498</Label>
        <line x1="248" y1="193" x2="268" y2="193" stroke={VIOLET} strokeWidth="2.5" strokeDasharray="6 4" />
        <Label x={272} y={197} size={9} fill={VIOLET}>Magellan 1519-1522</Label>
      </svg>
    ),
  },

  "hg5-croissance-demo": {
    title: "La population mondiale : de 1 milliard vers 1800 à 8 milliards en 2022",
    svg: (
      <svg viewBox="0 0 360 195" className="w-full">
        {/* axes */}
        <line x1="50" y1="160" x2="340" y2="160" stroke={INK} strokeWidth="2.5" />
        <path d="M340 160 l-9 -5 v10 z" fill={INK} />
        <line x1="50" y1="160" x2="50" y2="25" stroke={INK} strokeWidth="2.5" />
        <path d="M50 25 l-5 9 h10 z" fill={INK} />
        <Label x={56} y={22} size={9}>milliards d&apos;habitants</Label>
        {/* graduations verticales */}
        {[
          { v: "2", y: 136 },
          { v: "4", y: 112 },
          { v: "6", y: 88 },
          { v: "8", y: 64 },
        ].map((g) => (
          <g key={g.v}>
            <line x1="45" y1={g.y} x2="55" y2={g.y} stroke={INK} strokeWidth="1.5" />
            <Label x={32} y={g.y + 4} size={9}>{g.v}</Label>
          </g>
        ))}
        {/* années */}
        {[
          { t: "1800", x: 67 },
          { t: "1900", x: 154 },
          { t: "2000", x: 240 },
        ].map((g) => (
          <g key={g.t}>
            <line x1={g.x} y1="155" x2={g.x} y2="165" stroke={INK} strokeWidth="1.5" />
            <Label x={g.x - 11} y={178} size={9}>{g.t}</Label>
          </g>
        ))}
        {/* la courbe : lente puis très rapide */}
        <path
          d="M67 148 Q 140 145 197 130 Q 228 120 240 88 Q 250 70 259 64"
          fill="none"
          stroke={RED}
          strokeWidth="3"
        />
        {/* projection */}
        <path d="M259 64 Q 300 42 328 40" fill="none" stroke={RED} strokeWidth="2" strokeDasharray="5 4" />
        <Label x={238} y={30} size={9} fill={RED}>≈ 10 Md vers 2100</Label>
        {/* jalons */}
        <circle cx="67" cy="148" r="4" fill={RED} />
        <Label x={76} y={143} size={10} halo>1 Md (1800)</Label>
        <circle cx="197" cy="130" r="4" fill={RED} />
        <Label x={140} y={120} size={10} halo>2,5 Md (1950)</Label>
        <circle cx="240" cy="88" r="4" fill={RED} />
        <Label x={172} y={87} size={10} halo>6 Md (2000)</Label>
        <circle cx="259" cy="64" r="4" fill={RED} />
        <Label x={264} y={78} size={10} fill={RED} halo>8 Md (2022)</Label>
      </svg>
    ),
  },

  "hg5-eau-repartition": {
    title: "L'eau de la Terre : presque toute salée, et l'eau douce surtout gelée",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        <Label x={20} y={26} size={10}>toute l&apos;eau de la Terre</Label>
        {/* barre 1 : salée / douce */}
        <rect x="20" y="34" width="310" height="28" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="330" y="34" width="10" height="28" fill={GREEN} stroke={INK} strokeWidth="2" />
        <Label x={100} y={53} size={11} fill={BLUE}>eau salée : 97 %</Label>
        <Label x={238} y={26} size={10} fill={GREEN}>eau douce : 3 %</Label>
        <line x1="322" y1="28" x2="333" y2="34" stroke={GREEN} strokeWidth="1.5" />
        {/* zoom sur les 3 % */}
        <line x1="330" y1="62" x2="20" y2="104" stroke={INK} strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="340" y1="62" x2="340" y2="104" stroke={INK} strokeWidth="1.2" strokeDasharray="4 3" />
        <Label x={120} y={86} size={9} fill={GREEN} halo>zoom sur les 3 % d&apos;eau douce</Label>
        {/* barre 2 : glaciers / nappes / lacs et rivières */}
        <rect x="20" y="104" width="221" height="28" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <rect x="241" y="104" width="96" height="28" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <rect x="337" y="104" width="3" height="28" fill={RED} stroke={INK} strokeWidth="1" />
        <Label x={30} y={123} size={10} fill={VIOLET}>glaciers et calottes : ≈ 2/3</Label>
        <Label x={210} y={152} size={9} fill={GREEN}>nappes souterraines : ≈ 30 %</Label>
        <line x1="285" y1="132" x2="278" y2="144" stroke={GREEN} strokeWidth="1.5" />
        <Label x={40} y={170} size={10} fill={RED}>lacs et rivières : ≈ 1 % seulement de l&apos;eau douce !</Label>
        <line x1="338" y1="132" x2="300" y2="163" stroke={RED} strokeWidth="1.5" />
      </svg>
    ),
  },

  "hg5-balance-egalite": {
    title: "Égaux devant la loi : la même balance pour tous",
    svg: (
      <svg viewBox="0 0 360 195" className="w-full">
        {/* socle et pilier */}
        <rect x="140" y="150" width="80" height="10" rx="3" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <line x1="180" y1="150" x2="180" y2="50" stroke={INK} strokeWidth="3" />
        <polygon points="180,50 172,62 188,62" fill={INK} />
        {/* fléau parfaitement horizontal = égalité */}
        <line x1="90" y1="50" x2="270" y2="50" stroke={INK} strokeWidth="3" />
        {/* plateau gauche */}
        <line x1="95" y1="50" x2="75" y2="95" stroke={INK} strokeWidth="1.8" />
        <line x1="95" y1="50" x2="115" y2="95" stroke={INK} strokeWidth="1.8" />
        <path d="M70 95 Q 95 115 120 95" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        {/* plateau droit */}
        <line x1="265" y1="50" x2="245" y2="95" stroke={INK} strokeWidth="1.8" />
        <line x1="265" y1="50" x2="285" y2="95" stroke={INK} strokeWidth="1.8" />
        <path d="M240 95 Q 265 115 290 95" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        {/* deux personnes différentes, même niveau */}
        <circle cx="95" cy="70" r="5.5" fill={VIOLET} />
        <line x1="95" y1="76" x2="95" y2="89" stroke={VIOLET} strokeWidth="2.5" />
        <line x1="88" y1="81" x2="102" y2="81" stroke={VIOLET} strokeWidth="2.5" />
        <line x1="95" y1="89" x2="90" y2="96" stroke={VIOLET} strokeWidth="2.5" />
        <line x1="95" y1="89" x2="100" y2="96" stroke={VIOLET} strokeWidth="2.5" />
        <circle cx="265" cy="70" r="5.5" fill={GREEN} />
        <line x1="265" y1="76" x2="265" y2="89" stroke={GREEN} strokeWidth="2.5" />
        <line x1="258" y1="81" x2="272" y2="81" stroke={GREEN} strokeWidth="2.5" />
        <line x1="265" y1="89" x2="260" y2="96" stroke={GREEN} strokeWidth="2.5" />
        <line x1="265" y1="89" x2="270" y2="96" stroke={GREEN} strokeWidth="2.5" />
        {/* la loi tient la balance */}
        <rect x="150" y="110" width="60" height="24" rx="6" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <Label x={161} y={127} size={12} fill={RED}>LA LOI</Label>
        <Label x={55} y={132} size={10} fill={BLUE}>mêmes droits</Label>
        <Label x={228} y={132} size={10} fill={GREEN}>mêmes devoirs</Label>
        {/* rappel */}
        <Label x={52} y={172} size={10}>des personnes différentes, la même loi pour tous</Label>
        <Label x={22} y={187} size={9} fill={RED}>traiter quelqu&apos;un moins bien à cause d&apos;une différence = discrimination, punie par la loi</Label>
      </svg>
    ),
  },
};
