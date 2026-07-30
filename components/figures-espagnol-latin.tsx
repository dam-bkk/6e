/**
 * Catalogue de figures — espagnol 5e et latin 5e.
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

/** Petit soleil stylisé */
function Sun({ x, y, r = 10 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line
          key={a}
          x1={x + (r + 3) * Math.cos((a * Math.PI) / 180)}
          y1={y + (r + 3) * Math.sin((a * Math.PI) / 180)}
          x2={x + (r + 8) * Math.cos((a * Math.PI) / 180)}
          y2={y + (r + 8) * Math.sin((a * Math.PI) / 180)}
          stroke={INK}
          strokeWidth="2"
        />
      ))}
      <circle cx={x} cy={y} r={r} fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
    </g>
  );
}

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  /* ============================== ESPAGNOL ============================== */

  "es-saludos": {
    title: "Le salut change avec le moment de la journée",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        {/* course du soleil, du matin (gauche) à la nuit (droite) */}
        <path d="M40 150 Q 180 30 320 150" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="6 5" />
        {/* horizon */}
        <line x1="18" y1="155" x2="342" y2="155" stroke={INK} strokeWidth="2.5" />
        <Sun x={110} y={105} r={9} />
        <Sun x={208} y={92} r={11} />
        {/* lune (croissant) */}
        <path d="M306 124 A13 13 0 1 0 306 150 A17 17 0 0 1 306 124 Z" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={82} y={40} fill={BLUE}>{"¡Buenos días!"}</Mid>
        <Mid x={82} y={57} size={11}>{"le matin"}</Mid>
        <Mid x={218} y={32} fill={GREEN}>{"¡Buenas tardes!"}</Mid>
        <Mid x={218} y={49} size={11}>{"l'après-midi"}</Mid>
        <Mid x={300} y={82} fill={VIOLET}>{"¡Buenas noches!"}</Mid>
        <Mid x={300} y={99} size={11}>{"le soir, la nuit"}</Mid>
        <Mid x={180} y={180} size={11}>{"À toute heure, on peut dire : ¡Hola!"}</Mid>
      </svg>
    ),
  },

  "es-ser-estar": {
    title: "Ser ou estar : deux verbes pour « être »",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {/* balance : pilier + fléau */}
        <polygon points="180,70 160,190 200,190" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="70" y1="62" x2="290" y2="62" stroke={INK} strokeWidth="3" />
        <circle cx="180" cy="62" r="5" fill={INK} />
        <line x1="70" y1="62" x2="70" y2="88" stroke={INK} strokeWidth="2" />
        <line x1="290" y1="62" x2="290" y2="88" stroke={INK} strokeWidth="2" />
        {/* plateau SER */}
        <rect x="10" y="88" width="120" height="96" rx="10" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={70} y={110} fill={BLUE} size={15}>{"SER"}</Mid>
        <Mid x={70} y={130} size={11}>{"identité, qualité durable"}</Mid>
        <Mid x={70} y={152} size={12}>{"Soy alto."}</Mid>
        <Mid x={70} y={172} size={12}>{"Es española."}</Mid>
        {/* plateau ESTAR */}
        <rect x="230" y="88" width="120" height="96" rx="10" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={290} y={110} fill={GREEN} size={15}>{"ESTAR"}</Mid>
        <Mid x={290} y={130} size={11}>{"état passager, lieu"}</Mid>
        <Mid x={290} y={152} size={12}>{"Estoy cansado."}</Mid>
        <Mid x={290} y={172} size={12}>{"Está en Madrid."}</Mid>
        <Mid x={180} y={40} size={12}>{"être"}</Mid>
        <Mid x={180} y={205} size={11}>{"ce que je SUIS ↔ comment / où je me TROUVE"}</Mid>
      </svg>
    ),
  },

  "es-terminaisons": {
    title: "Le présent des trois groupes : -ar, -er, -ir",
    svg: (
      <svg viewBox="0 0 360 224" className="w-full">
        <rect x="105" y="16" width="70" height="42" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={140} y={34} fill={BLUE} size={14}>{"-AR"}</Mid>
        <Mid x={140} y={51} size={11}>{"hablar"}</Mid>
        <rect x="195" y="16" width="70" height="42" rx="8" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={230} y={34} fill={GREEN} size={14}>{"-ER"}</Mid>
        <Mid x={230} y={51} size={11}>{"comer"}</Mid>
        <rect x="280" y="16" width="70" height="42" rx="8" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={315} y={34} fill={VIOLET} size={14}>{"-IR"}</Mid>
        <Mid x={315} y={51} size={11}>{"vivir"}</Mid>
        {(
          [
            ["yo", "hablo", "como", "vivo"],
            ["tú", "hablas", "comes", "vives"],
            ["él / ella", "habla", "come", "vive"],
            ["nosotros", "hablamos", "comemos", "vivimos"],
            ["vosotros", "habláis", "coméis", "vivís"],
            ["ellos", "hablan", "comen", "viven"],
          ] as const
        ).map(([p, ar, er, ir], i) => (
          <g key={p}>
            <Mid x={48} y={80 + i * 23} size={11}>{p}</Mid>
            <Mid x={140} y={80 + i * 23} size={12} fill={BLUE}>{ar}</Mid>
            <Mid x={230} y={80 + i * 23} size={12} fill={GREEN}>{er}</Mid>
            <Mid x={315} y={80 + i * 23} size={12} fill={VIOLET}>{ir}</Mid>
          </g>
        ))}
        <line x1="90" y1="64" x2="90" y2="200" stroke={INK} strokeWidth="1.5" strokeDasharray="4 3" />
        <Mid x={180} y={219} size={11}>{"Avec yo, la terminaison est -o pour les trois groupes !"}</Mid>
      </svg>
    ),
  },

  "es-familia": {
    title: "El árbol de la familia",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {/* liens verticaux entre générations */}
        <line x1="180" y1="39" x2="180" y2="111" stroke={INK} strokeWidth="2" />
        <line x1="180" y1="111" x2="180" y2="183" stroke={INK} strokeWidth="2" />
        {(
          [
            { y: 24, a: "el abuelo", b: "la abuela", side: "los abuelos", tint: VIOLET_TINT, c: VIOLET },
            { y: 96, a: "el padre", b: "la madre", side: "los padres", tint: BLUE_TINT, c: BLUE },
            { y: 168, a: "el hijo", b: "la hija", side: "los hijos", tint: GREEN_TINT, c: GREEN },
          ] as const
        ).map((row) => (
          <g key={row.side}>
            <line x1="130" y1={row.y + 15} x2="230" y2={row.y + 15} stroke={INK} strokeWidth="2" />
            <rect x="88" y={row.y} width="84" height="30" rx="8" fill={row.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={130} y={row.y + 20} size={12}>{row.a}</Mid>
            <rect x="188" y={row.y} width="84" height="30" rx="8" fill={row.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={230} y={row.y + 20} size={12}>{row.b}</Mid>
            <Mid x={318} y={row.y + 20} size={12} fill={row.c}>{row.side}</Mid>
          </g>
        ))}
        <Mid x={42} y={44} size={11}>{"↑"}</Mid>
        <Mid x={42} y={116} size={11}>{"les parents"}</Mid>
        <Mid x={42} y={188} size={11}>{"les enfants"}</Mid>
      </svg>
    ),
  },

  "es-gustar": {
    title: "Gustar : c'est la chose aimée qui commande le verbe",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* ligne 1 : singulier */}
        <path d="M245 40 Q 180 8 120 38" fill="none" stroke={BLUE} strokeWidth="2" />
        <polygon points="120,38 132,31 131,42" fill={BLUE} />
        <Mid x={52} y={65} size={14}>{"Me"}</Mid>
        <Mid x={110} y={65} size={14} fill={BLUE}>{"gusta"}</Mid>
        <rect x="160" y="45" width="105" height="28" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={212} y={64} size={13}>{"el fútbol"}</Mid>
        <Mid x={314} y={64} size={11} fill={BLUE}>{"singulier"}</Mid>
        {/* ligne 2 : pluriel */}
        <path d="M255 122 Q 185 90 122 120" fill="none" stroke={RED} strokeWidth="2" />
        <polygon points="122,120 134,113 133,124" fill={RED} />
        <Mid x={52} y={147} size={14}>{"Me"}</Mid>
        <Mid x={113} y={147} size={14} fill={RED}>{"gustan"}</Mid>
        <rect x="160" y="127" width="128" height="28" rx="8" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={224} y={146} size={13}>{"los deportes"}</Mid>
        <Mid x={326} y={146} size={11} fill={RED}>{"pluriel"}</Mid>
        <Mid x={180} y={190} size={11}>{"La chose aimée est le sujet : elle choisit gusta ou gustan."}</Mid>
      </svg>
    ),
  },

  "es-hora": {
    title: "Es la una… pero son las dos",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {(
          [
            { cx: 90, hx: 104, hy: 61, c: BLUE, tint: BLUE_TINT },
            { cx: 270, hx: 296, hy: 70, c: GREEN, tint: GREEN_TINT },
          ] as const
        ).map((cl) => (
          <g key={cl.cx}>
            <circle cx={cl.cx} cy="85" r="52" fill={cl.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={cl.cx} y={48} size={11}>{"12"}</Mid>
            <Mid x={cl.cx + 38} y={90} size={11}>{"3"}</Mid>
            <Mid x={cl.cx} y={128} size={11}>{"6"}</Mid>
            <Mid x={cl.cx - 38} y={90} size={11}>{"9"}</Mid>
            {/* aiguille des minutes sur 12 */}
            <line x1={cl.cx} y1="85" x2={cl.cx} y2="47" stroke={INK} strokeWidth="2.5" />
            {/* aiguille des heures */}
            <line x1={cl.cx} y1="85" x2={cl.hx} y2={cl.hy} stroke={cl.c} strokeWidth="4" strokeLinecap="round" />
            <circle cx={cl.cx} cy="85" r="4" fill={INK} />
          </g>
        ))}
        <Mid x={90} y={162} size={14} fill={BLUE}>{"Es la una."}</Mid>
        <Mid x={90} y={182} size={11}>{"1 h → singulier"}</Mid>
        <Mid x={270} y={162} size={14} fill={GREEN}>{"Son las dos."}</Mid>
        <Mid x={270} y={182} size={11}>{"2 h et plus → pluriel"}</Mid>
      </svg>
    ),
  },

  "es-casa": {
    title: "La casa : les pièces de la maison",
    svg: (
      <svg viewBox="0 0 360 226" className="w-full">
        {/* toit */}
        <polygon points="30,72 180,14 330,72" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        {/* quatre pièces en coupe */}
        <rect x="30" y="72" width="150" height="65" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="180" y="72" width="150" height="65" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <rect x="30" y="137" width="150" height="65" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <rect x="180" y="137" width="150" height="65" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <rect x="30" y="72" width="300" height="130" fill="none" stroke={INK} strokeWidth="2.5" />
        <Mid x={105} y={109} size={13}>{"el dormitorio"}</Mid>
        <Mid x={255} y={101} size={13}>{"el cuarto"}</Mid>
        <Mid x={255} y={118} size={13}>{"de baño"}</Mid>
        <Mid x={105} y={174} size={13}>{"el salón"}</Mid>
        <Mid x={255} y={174} size={13}>{"la cocina"}</Mid>
        <Mid x={105} y={220} size={12} fill={GREEN}>{"hay = il y a"}</Mid>
        <Mid x={255} y={220} size={12} fill={BLUE}>{"está = se trouve"}</Mid>
      </svg>
    ),
  },

  "es-mundo-hispano": {
    title: "Le monde hispanophone (carte simplifiée)",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* Mexique + Amérique centrale */}
        <polygon
          points="38,52 88,46 100,62 82,72 96,84 100,95 88,98 72,86 52,74"
          fill={RED_TINT}
          stroke={INK}
          strokeWidth="2.5"
        />
        {/* Caraïbes */}
        <ellipse cx="122" cy="70" rx="12" ry="5" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        {/* Amérique du Sud */}
        <polygon
          points="96,100 138,92 168,108 162,140 138,182 118,182 104,148 92,120"
          fill={RED_TINT}
          stroke={INK}
          strokeWidth="2.5"
        />
        {/* Brésil, lusophone, laissé en blanc */}
        <path d="M138 92 L168 108 L162 140 L140 158 L128 128 L130 102 Z" fill="#fff" stroke={INK} strokeWidth="2" />
        <Mid x={148} y={130} size={9}>{"Brasil"}</Mid>
        <Mid x={148} y={141} size={9}>{"(portugais)"}</Mid>
        {/* Espagne */}
        <polygon points="238,52 288,48 296,68 270,84 242,76" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={266} y={104} size={12} fill={RED}>{"España"}</Mid>
        <Mid x={54} y={36} size={12} fill={RED}>{"México"}</Mid>
        <Mid x={214} y={160} size={12} fill={RED}>{"América latina :"}</Mid>
        <Mid x={214} y={176} size={11}>{"Argentina, Colombia, Perú, Chile…"}</Mid>
        <Mid x={180} y={196} size={11}>{"Environ 500 millions de personnes parlent espagnol."}</Mid>
      </svg>
    ),
  },

  /* ================================ LATIN =============================== */

  "lat-langues-romanes": {
    title: "Le latin, père des langues romanes : aqua, l'eau",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {/* rayons */}
        <line x1="180" y1="105" x2="75" y2="45" stroke={INK} strokeWidth="2" />
        <line x1="180" y1="105" x2="285" y2="45" stroke={INK} strokeWidth="2" />
        <line x1="180" y1="105" x2="322" y2="120" stroke={INK} strokeWidth="2" />
        <line x1="180" y1="105" x2="278" y2="175" stroke={INK} strokeWidth="2" />
        <line x1="180" y1="105" x2="82" y2="175" stroke={INK} strokeWidth="2" />
        {/* centre */}
        <ellipse cx="180" cy="105" rx="56" ry="32" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={180} y={100} size={14} fill={VIOLET}>{"LATIN"}</Mid>
        <Mid x={180} y={118} size={12}>{"aqua"}</Mid>
        {/* langues filles */}
        <Mid x={68} y={28} size={12} fill={BLUE}>{"français"}</Mid>
        <Mid x={68} y={44} size={11}>{"eau"}</Mid>
        <Mid x={292} y={28} size={12} fill={RED}>{"espagnol"}</Mid>
        <Mid x={292} y={44} size={11}>{"agua"}</Mid>
        <Mid x={328} y={140} size={12} fill={GREEN}>{"italien"}</Mid>
        <Mid x={328} y={156} size={11}>{"acqua"}</Mid>
        <Mid x={284} y={192} size={12} fill={VIOLET}>{"portugais"}</Mid>
        <Mid x={284} y={207} size={11}>{"água"}</Mid>
        <Mid x={74} y={192} size={12} fill={INK}>{"roumain"}</Mid>
        <Mid x={74} y={207} size={11}>{"apă"}</Mid>
      </svg>
    ),
  },

  "lat-sept-collines": {
    title: "Les sept collines de Rome, au bord du Tibre",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {/* le Tibre */}
        <path d="M30 34 C 16 80 44 120 26 200" fill="none" stroke={BLUE_TINT} strokeWidth="12" />
        <path d="M30 34 C 16 80 44 120 26 200" fill="none" stroke={BLUE} strokeWidth="2" strokeDasharray="6 5" />
        <Mid x={34} y={20} size={11} fill={BLUE}>{"le Tibre"}</Mid>
        {/* rangée haute */}
        {(
          [
            { x: 92, name: "Capitole" },
            { x: 165, name: "Quirinal" },
            { x: 238, name: "Viminal" },
            { x: 311, name: "Esquilin" },
          ] as const
        ).map((h) => (
          <g key={h.name}>
            <path d={`M${h.x - 34} 105 A 34 30 0 0 1 ${h.x + 34} 105 Z`} fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
            <Mid x={h.x} y={100} size={10}>{h.name}</Mid>
          </g>
        ))}
        {/* rangée basse */}
        {(
          [
            { x: 106, name: "Aventin" },
            { x: 196, name: "Palatin" },
            { x: 286, name: "Caelius" },
          ] as const
        ).map((h) => (
          <g key={h.name}>
            <path d={`M${h.x - 34} 190 A 34 30 0 0 1 ${h.x + 34} 190 Z`} fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
            <Mid x={h.x} y={185} size={10}>{h.name}</Mid>
          </g>
        ))}
        {/* la louve sur le Palatin */}
        <g stroke={INK} strokeWidth="2" fill={VIOLET_TINT}>
          <ellipse cx="196" cy="146" rx="13" ry="6.5" />
          <circle cx="210" cy="141" r="4" />
          <line x1="188" y1="152" x2="188" y2="158" />
          <line x1="204" y1="152" x2="204" y2="158" />
          <path d="M183 144 q -7 -3 -8 -9" fill="none" />
        </g>
        <circle cx="192" cy="157" r="2" fill={INK} />
        <circle cx="199" cy="157" r="2" fill={INK} />
        <Mid x={150} y={132} size={10} fill={VIOLET}>{"la louve"}</Mid>
      </svg>
    ),
  },

  "lat-domus": {
    title: "Le plan d'une domus romaine",
    svg: (
      <svg viewBox="0 0 360 226" className="w-full">
        <rect x="30" y="30" width="300" height="170" fill="#fff" stroke={INK} strokeWidth="2.5" />
        {/* vestibulum */}
        <rect x="30" y="30" width="45" height="170" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <text
          x="52"
          y="115"
          fontSize="11"
          fontWeight="700"
          fill={INK}
          textAnchor="middle"
          fontFamily="var(--font-nunito), sans-serif"
          transform="rotate(-90 52 115)"
        >
          vestibulum
        </text>
        {/* cubicula au-dessus de l'atrium */}
        <rect x="75" y="30" width="50" height="34" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <rect x="125" y="30" width="50" height="34" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={125} y={51} size={10}>{"cubicula"}</Mid>
        {/* atrium + impluvium */}
        <rect x="75" y="64" width="100" height="136" fill="none" stroke={INK} strokeWidth="2" />
        <Mid x={125} y={185} size={12}>{"atrium"}</Mid>
        <rect x="105" y="105" width="40" height="28" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={125} y={150} size={9}>{"impluvium (eau)"}</Mid>
        {/* tablinum */}
        <rect x="175" y="30" width="50" height="170" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <text
          x="200"
          y="115"
          fontSize="11"
          fontWeight="700"
          fill={INK}
          textAnchor="middle"
          fontFamily="var(--font-nunito), sans-serif"
          transform="rotate(-90 200 115)"
        >
          tablinum
        </text>
        {/* peristylium : jardin à colonnes */}
        <rect x="225" y="30" width="105" height="170" fill="none" stroke={INK} strokeWidth="2" />
        <rect x="243" y="52" width="70" height="112" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        {[
          [243, 52], [278, 52], [313, 52],
          [243, 108], [313, 108],
          [243, 164], [278, 164], [313, 164],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#fff" stroke={INK} strokeWidth="2" />
        ))}
        <Mid x={278} y={100} size={11}>{"peristylium"}</Mid>
        <Mid x={278} y={116} size={9}>{"(jardin à colonnes)"}</Mid>
        <Mid x={278} y={188} size={9}>{"○ = colonne"}</Mid>
        {/* entrée */}
        <line x1="6" y1="115" x2="26" y2="115" stroke={INK} strokeWidth="2.5" />
        <polygon points="30,115 20,109 20,121" fill={INK} />
        <Mid x={16} y={100} size={10}>{"entrée"}</Mid>
        <Mid x={180} y={219} size={11}>{"On traverse la maison en ligne droite, de la rue au jardin."}</Mid>
      </svg>
    ),
  },

  "lat-olympe": {
    title: "Les dieux de l'Olympe : nom romain, nom grec",
    svg: (
      <svg viewBox="0 0 360 232" className="w-full">
        {/* fronton */}
        <polygon points="50,58 180,14 310,58" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={180} y={48} size={13} fill={VIOLET}>{"L'OLYMPE"}</Mid>
        {/* colonnes */}
        {[64, 296].map((x) => (
          <g key={x}>
            <rect x={x - 12} y="58" width="24" height="8" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
            <rect x={x - 8} y="66" width="16" height="140" fill="#fff" stroke={INK} strokeWidth="2" />
            <line x1={x} y1="70" x2={x} y2="202" stroke={INK} strokeWidth="1" />
          </g>
        ))}
        {/* stylobate */}
        <rect x="44" y="206" width="272" height="10" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={130} y={80} size={12} fill={RED}>{"à Rome"}</Mid>
        <Mid x={230} y={80} size={12} fill={BLUE}>{"en Grèce"}</Mid>
        {(
          [
            ["Jupiter", "Zeus"],
            ["Junon", "Héra"],
            ["Neptune", "Poséidon"],
            ["Minerve", "Athéna"],
            ["Mars", "Arès"],
            ["Vénus", "Aphrodite"],
          ] as const
        ).map(([rome, grece], i) => (
          <g key={rome}>
            <Mid x={130} y={102 + i * 20} size={12} fill={RED}>{rome}</Mid>
            <Mid x={180} y={102 + i * 20} size={11}>{"="}</Mid>
            <Mid x={230} y={102 + i * 20} size={12} fill={BLUE}>{grece}</Mid>
          </g>
        ))}
        <Mid x={180} y={230} size={11}>{"Mêmes dieux, deux noms : les Romains ont adopté les dieux grecs."}</Mid>
      </svg>
    ),
  },

  "lat-declinaison": {
    title: "Rosa ou rosam ? La terminaison montre le rôle du mot",
    svg: (
      <svg viewBox="0 0 360 208" className="w-full">
        {/* phrase 1 : rosa sujet */}
        <Mid x={72} y={30} size={11} fill={GREEN}>{"sujet : -a"}</Mid>
        <line x1="72" y1="35" x2="72" y2="45" stroke={GREEN} strokeWidth="2" />
        <rect x="38" y="45" width="68" height="28" rx="8" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={72} y={64} size={13}>{"Rosa"}</Mid>
        <Mid x={155} y={64} size={13}>{"pulchra"}</Mid>
        <Mid x={222} y={64} size={13}>{"est."}</Mid>
        <Mid x={140} y={94} size={11}>{"→ La rose est belle."}</Mid>
        {/* phrase 2 : rosam COD */}
        <Mid x={72} y={118} size={11} fill={GREEN}>{"sujet"}</Mid>
        <line x1="72" y1="123" x2="72" y2="133" stroke={GREEN} strokeWidth="2" />
        <Mid x={162} y={118} size={11} fill={RED}>{"COD : -am"}</Mid>
        <line x1="162" y1="123" x2="162" y2="133" stroke={RED} strokeWidth="2" />
        <Mid x={72} y={152} size={13}>{"Puella"}</Mid>
        <rect x="126" y="133" width="72" height="28" rx="8" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={162} y={152} size={13}>{"rosam"}</Mid>
        <Mid x={238} y={152} size={13}>{"amat."}</Mid>
        <Mid x={166} y={182} size={11}>{"→ La jeune fille aime la rose."}</Mid>
        <Mid x={180} y={203} size={11} fill={VIOLET}>{"Même mot, rôle différent → terminaison différente."}</Mid>
      </svg>
    ),
  },

  "lat-chiffres-romains": {
    title: "Les chiffres romains : sept lettres suffisent",
    svg: (
      <svg viewBox="0 0 360 196" className="w-full">
        {(
          [
            ["I", "1"],
            ["V", "5"],
            ["X", "10"],
            ["L", "50"],
            ["C", "100"],
            ["D", "500"],
            ["M", "1000"],
          ] as const
        ).map(([letter, value], i) => (
          <g key={letter}>
            <rect x={25 + i * 45} y="22" width="40" height="44" rx="8" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
            <Mid x={45 + i * 45} y={52} size={17} fill={VIOLET}>{letter}</Mid>
            <Mid x={45 + i * 45} y={86} size={11}>{value}</Mid>
          </g>
        ))}
        <Mid x={80} y={126} size={13} fill={RED}>{"IV = 4"}</Mid>
        <Mid x={80} y={143} size={10}>{"5 − 1"}</Mid>
        <Mid x={180} y={126} size={13} fill={RED}>{"IX = 9"}</Mid>
        <Mid x={180} y={143} size={10}>{"10 − 1"}</Mid>
        <Mid x={280} y={126} size={13} fill={RED}>{"XL = 40"}</Mid>
        <Mid x={280} y={143} size={10}>{"50 − 10"}</Mid>
        <Mid x={180} y={168} size={11}>{"Petit chiffre AVANT un grand → on soustrait."}</Mid>
        <Mid x={180} y={188} size={12} fill={GREEN}>{"MMXXVI = 2026"}</Mid>
      </svg>
    ),
  },
};
