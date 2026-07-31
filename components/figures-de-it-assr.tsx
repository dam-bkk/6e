/**
 * Catalogue de figures — allemand 5e, italien 5e et ASSR1.
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

/** Croissant de lune stylisé */
function Moon({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M${x} ${y} A13 13 0 1 0 ${x} ${y + 26} A17 17 0 0 1 ${x} ${y} Z`}
      fill={VIOLET_TINT}
      stroke={INK}
      strokeWidth="2.5"
    />
  );
}

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  /* ============================== ALLEMAND ============================== */

  "de-gruesse": {
    title: "Le salut change avec le moment de la journée",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        {/* course du soleil, du matin (gauche) à la nuit (droite) */}
        <path d="M40 150 Q 180 30 320 150" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="6 5" />
        <line x1="18" y1="155" x2="342" y2="155" stroke={INK} strokeWidth="2.5" />
        <Sun x={110} y={105} r={9} />
        <Sun x={208} y={92} r={11} />
        <Moon x={306} y={124} />
        <Mid x={82} y={40} fill={BLUE}>{"Guten Morgen!"}</Mid>
        <Mid x={82} y={57} size={11}>{"le matin"}</Mid>
        <Mid x={218} y={32} fill={GREEN}>{"Guten Tag!"}</Mid>
        <Mid x={218} y={49} size={11}>{"dans la journée"}</Mid>
        <Mid x={300} y={82} fill={VIOLET}>{"Guten Abend!"}</Mid>
        <Mid x={300} y={99} size={11}>{"le soir"}</Mid>
        <Mid x={180} y={180} size={11}>{"À toute heure : Hallo ! Pour partir : Tschüss !"}</Mid>
      </svg>
    ),
  },

  "de-sein-haben": {
    title: "Sein et haben : les deux verbes de base",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {/* balance : pilier + fléau */}
        <polygon points="180,70 160,190 200,190" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="70" y1="62" x2="290" y2="62" stroke={INK} strokeWidth="3" />
        <circle cx="180" cy="62" r="5" fill={INK} />
        <line x1="70" y1="62" x2="70" y2="88" stroke={INK} strokeWidth="2" />
        <line x1="290" y1="62" x2="290" y2="88" stroke={INK} strokeWidth="2" />
        {/* plateau SEIN */}
        <rect x="10" y="88" width="120" height="96" rx="10" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={70} y={110} fill={BLUE} size={15}>{"SEIN"}</Mid>
        <Mid x={70} y={130} size={11}>{"être : ich bin, du bist…"}</Mid>
        <Mid x={70} y={152} size={12}>{"Ich bin müde."}</Mid>
        <Mid x={70} y={172} size={12}>{"Er ist nett."}</Mid>
        {/* plateau HABEN */}
        <rect x="230" y="88" width="120" height="96" rx="10" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={290} y={110} fill={GREEN} size={15}>{"HABEN"}</Mid>
        <Mid x={290} y={130} size={11}>{"avoir : ich habe, du hast…"}</Mid>
        <Mid x={290} y={152} size={11}>{"Ich habe einen Hund."}</Mid>
        <Mid x={290} y={172} size={11}>{"Du hast eine Katze."}</Mid>
        <Mid x={180} y={40} size={12}>{"être / avoir"}</Mid>
        <Mid x={180} y={205} size={11} fill={RED}>{"Piège : l'âge se dit avec sein → Ich bin zwölf Jahre alt."}</Mid>
      </svg>
    ),
  },

  "de-artikel": {
    title: "Der, die, das : un article par genre",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {(
          [
            { cx: 70, art: "DER", sub: "masculin", c: BLUE, tint: BLUE_TINT, words: ["der Hund", "der Tisch", "der Vater"] },
            { cx: 180, art: "DIE", sub: "féminin", c: RED, tint: RED_TINT, words: ["die Katze", "die Schule", "die Mutter"] },
            { cx: 290, art: "DAS", sub: "neutre", c: GREEN, tint: GREEN_TINT, words: ["das Buch", "das Haus", "das Kind"] },
          ] as const
        ).map((col) => (
          <g key={col.art}>
            <rect x={col.cx - 46} y="16" width="92" height="46" rx="10" fill={col.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={col.cx} y={38} size={16} fill={col.c}>{col.art}</Mid>
            <Mid x={col.cx} y={55} size={10}>{col.sub}</Mid>
            {col.words.map((w, i) => (
              <Mid key={w} x={col.cx} y={90 + i * 24} size={12} fill={col.c}>{w}</Mid>
            ))}
          </g>
        ))}
        <line x1="30" y1="162" x2="330" y2="162" stroke={INK} strokeWidth="1.5" strokeDasharray="4 3" />
        <Mid x={180} y={184} size={11}>{"Au pluriel, un seul article pour tous : die"}</Mid>
        <Mid x={180} y={202} size={11} fill={VIOLET}>{"die Hunde, die Katzen, die Bücher"}</Mid>
      </svg>
    ),
  },

  "de-verb-2": {
    title: "La règle en or : le verbe reste en 2e position",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        {[
          { x: 59, n: "1" },
          { x: 144, n: "2" },
          { x: 229, n: "3" },
          { x: 314, n: "4" },
        ].map((p) => (
          <Mid key={p.n} x={p.x} y={28} size={13} fill={p.n === "2" ? RED : INK}>{p.n}</Mid>
        ))}
        {(
          [
            { y: 40, words: ["Ich", "spiele", "heute", "Fußball."] },
            { y: 100, words: ["Heute", "spiele", "ich", "Fußball."] },
          ] as const
        ).map((row) => (
          <g key={row.y}>
            {row.words.map((w, i) => (
              <g key={w + i}>
                <rect
                  x={20 + i * 85}
                  y={row.y}
                  width="78"
                  height="30"
                  rx="8"
                  fill={i === 1 ? RED_TINT : "#fff"}
                  stroke={i === 1 ? RED : INK}
                  strokeWidth="2.5"
                />
                <Mid x={59 + i * 85} y={row.y + 20} size={12} fill={i === 1 ? RED : INK}>{w}</Mid>
              </g>
            ))}
          </g>
        ))}
        <line x1="144" y1="70" x2="144" y2="100" stroke={RED} strokeWidth="2" strokeDasharray="4 3" />
        <Mid x={180} y={158} size={11}>{"Peu importe ce qui ouvre la phrase :"}</Mid>
        <Mid x={180} y={176} size={11} fill={RED}>{"le verbe conjugué garde toujours la 2e position."}</Mid>
      </svg>
    ),
  },

  "de-familie": {
    title: "Der Stammbaum : l'arbre de la famille",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        <line x1="158" y1="39" x2="158" y2="111" stroke={INK} strokeWidth="2" />
        <line x1="158" y1="111" x2="158" y2="183" stroke={INK} strokeWidth="2" />
        {(
          [
            { y: 24, a: "der Großvater", b: "die Großmutter", side: "die Großeltern", tint: VIOLET_TINT, c: VIOLET },
            { y: 96, a: "der Vater", b: "die Mutter", side: "die Eltern", tint: BLUE_TINT, c: BLUE },
            { y: 168, a: "der Sohn", b: "die Tochter", side: "die Kinder", tint: GREEN_TINT, c: GREEN },
          ] as const
        ).map((row) => (
          <g key={row.side}>
            <line x1="104" y1={row.y + 15} x2="212" y2={row.y + 15} stroke={INK} strokeWidth="2" />
            <rect x="56" y={row.y} width="96" height="30" rx="8" fill={row.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={104} y={row.y + 20} size={11}>{row.a}</Mid>
            <rect x="164" y={row.y} width="96" height="30" rx="8" fill={row.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={212} y={row.y + 20} size={11}>{row.b}</Mid>
            <Mid x={314} y={row.y + 20} size={11} fill={row.c}>{row.side}</Mid>
          </g>
        ))}
        <Mid x={26} y={116} size={11}>{"↑"}</Mid>
        <Mid x={26} y={188} size={11}>{"↑"}</Mid>
      </svg>
    ),
  },

  "de-stundenplan": {
    title: "Der Stundenplan : l'emploi du temps",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {(["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"] as const).map((d, i) => (
          <g key={d}>
            <rect x={48 + i * 60} y="22" width="60" height="24" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
            <Mid x={78 + i * 60} y={38} size={9}>{d}</Mid>
          </g>
        ))}
        {(
          [
            { h: "8 h", y: 46, cells: ["Mathe", "Englisch", "Deutsch", "Mathe", "Englisch"] },
            { h: "9 h", y: 80, cells: ["Deutsch", "Mathe", "Bio", "Erdkunde", "Deutsch"] },
            { h: "10 h", y: 114, cells: ["Sport", "Kunst", "Musik", "Sport", "Kunst"] },
          ] as const
        ).map((row) => (
          <g key={row.h}>
            <Mid x={26} y={row.y + 21} size={10}>{row.h}</Mid>
            {row.cells.map((cell, i) => (
              <g key={cell + i}>
                <rect
                  x={48 + i * 60}
                  y={row.y}
                  width="60"
                  height="34"
                  fill={
                    cell === "Mathe" ? BLUE_TINT
                    : cell === "Deutsch" ? RED_TINT
                    : cell === "Sport" || cell === "Bio" || cell === "Erdkunde" ? GREEN_TINT
                    : "#fff"
                  }
                  stroke={INK}
                  strokeWidth="1.6"
                />
                <Mid x={78 + i * 60} y={row.y + 21} size={9.5}>{cell}</Mid>
              </g>
            ))}
          </g>
        ))}
        <rect x="48" y="22" width="300" height="126" fill="none" stroke={INK} strokeWidth="2.5" />
        <Mid x={180} y={172} size={11}>{"Am Montag habe ich Mathe, Deutsch und Sport."}</Mid>
        <Mid x={180} y={190} size={11} fill={VIOLET}>{"= Le lundi, j'ai maths, allemand et sport."}</Mid>
      </svg>
    ),
  },

  "de-essen": {
    title: "Die drei Mahlzeiten : les trois repas",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        <Sun x={65} y={22} r={7} />
        <Sun x={180} y={20} r={9} />
        <Moon x={296} y={10} />
        {(
          [
            { x: 15, name: "das Frühstück", time: "morgens (le matin)", tint: BLUE_TINT, foods: ["das Brot", "die Milch"] },
            { x: 130, name: "das Mittagessen", time: "mittags (à midi)", tint: GREEN_TINT, foods: ["die Suppe", "der Salat"] },
            { x: 245, name: "das Abendessen", time: "abends (le soir)", tint: VIOLET_TINT, foods: ["das Brot", "der Käse"] },
          ] as const
        ).map((meal) => (
          <g key={meal.name}>
            <rect x={meal.x} y="48" width="100" height="110" rx="10" fill={meal.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={meal.x + 50} y={70} size={11}>{meal.name}</Mid>
            <Mid x={meal.x + 50} y={86} size={9}>{meal.time}</Mid>
            <line x1={meal.x + 14} y1="94" x2={meal.x + 86} y2="94" stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" />
            {meal.foods.map((f, i) => (
              <Mid key={f} x={meal.x + 50} y={114 + i * 22} size={11.5}>{f}</Mid>
            ))}
          </g>
        ))}
        <Mid x={180} y={182} size={11}>{"Ich esse gern Käse. Ich trinke gern Milch."}</Mid>
        <Mid x={180} y={200} size={11} fill={GREEN}>{"essen = manger, trinken = boire, gern = volontiers"}</Mid>
      </svg>
    ),
  },

  "de-dach": {
    title: "D-A-CH : les pays où l'on parle allemand",
    svg: (
      <svg viewBox="0 0 360 220" className="w-full">
        {/* Deutschland */}
        <polygon
          points="150,20 215,25 235,45 228,85 240,110 215,125 160,120 140,90 145,50"
          fill={BLUE_TINT}
          stroke={INK}
          strokeWidth="2.5"
        />
        <Mid x={185} y={92} size={12} fill={BLUE}>{"Deutschland"}</Mid>
        <circle cx="207" cy="52" r="3.5" fill={INK} />
        <Mid x={207} y={43} size={9}>{"Berlin"}</Mid>
        {/* Österreich */}
        <polygon
          points="215,128 250,132 315,135 322,152 292,164 235,160 210,145"
          fill={RED_TINT}
          stroke={INK}
          strokeWidth="2.5"
        />
        <Mid x={252} y={151} size={11} fill={RED}>{"Österreich"}</Mid>
        <circle cx="303" cy="146" r="3.5" fill={INK} />
        <Mid x={320} y={175} size={9}>{"Wien"}</Mid>
        <line x1="305" y1="150" x2="316" y2="166" stroke={INK} strokeWidth="1.2" />
        {/* die Schweiz */}
        <polygon
          points="132,128 205,133 200,166 145,170 122,150"
          fill={GREEN_TINT}
          stroke={INK}
          strokeWidth="2.5"
        />
        <Mid x={172} y={158} size={10.5} fill={GREEN}>{"die Schweiz"}</Mid>
        <circle cx="148" cy="145" r="3.5" fill={INK} />
        <Mid x={122} y={186} size={9}>{"Bern"}</Mid>
        <line x1="147" y1="149" x2="127" y2="177" stroke={INK} strokeWidth="1.2" />
        <Mid x={180} y={205} size={11}>{"D = Deutschland, A = Austria (Österreich), CH = die Schweiz."}</Mid>
        <Mid x={180} y={219} size={10} fill={VIOLET}>{"Capitales : Berlin, Wien et Bern."}</Mid>
      </svg>
    ),
  },

  /* =============================== ITALIEN ============================== */

  "it-saluti": {
    title: "Saluer en italien, selon le moment et la personne",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {(
          [
            { x: 20, y: 25, tint: BLUE_TINT, c: BLUE, word: "Buongiorno!", sub: "le matin et la journée" },
            { x: 195, y: 25, tint: VIOLET_TINT, c: VIOLET, word: "Buonasera!", sub: "le soir" },
            { x: 20, y: 105, tint: GREEN_TINT, c: GREEN, word: "Ciao!", sub: "entre amis, à toute heure" },
            { x: 195, y: 105, tint: RED_TINT, c: RED, word: "Arrivederci!", sub: "au revoir, plus poli" },
          ] as const
        ).map((b) => (
          <g key={b.word}>
            <rect x={b.x} y={b.y} width="145" height="46" rx="12" fill={b.tint} stroke={INK} strokeWidth="2.5" />
            <polygon
              points={`${b.x + 26},${b.y + 45} ${b.x + 44},${b.y + 45} ${b.x + 28},${b.y + 58}`}
              fill={b.tint}
              stroke={INK}
              strokeWidth="2"
            />
            <line x1={b.x + 28} y1={b.y + 44} x2={b.x + 42} y2={b.y + 44} stroke={b.tint} strokeWidth="3" />
            <Mid x={b.x + 72} y={b.y + 21} size={14} fill={b.c}>{b.word}</Mid>
            <Mid x={b.x + 72} y={b.y + 38} size={9.5}>{b.sub}</Mid>
          </g>
        ))}
        <Sun x={344} y={14} r={7} />
        <Mid x={180} y={188} size={11}>{"Ciao sert aussi pour se quitter. Avant de dormir : buonanotte !"}</Mid>
      </svg>
    ),
  },

  "it-essere-avere": {
    title: "Essere et avere : les deux verbes de base",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        {/* balance : pilier + fléau */}
        <polygon points="180,70 160,190 200,190" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="70" y1="62" x2="290" y2="62" stroke={INK} strokeWidth="3" />
        <circle cx="180" cy="62" r="5" fill={INK} />
        <line x1="70" y1="62" x2="70" y2="88" stroke={INK} strokeWidth="2" />
        <line x1="290" y1="62" x2="290" y2="88" stroke={INK} strokeWidth="2" />
        {/* plateau ESSERE */}
        <rect x="10" y="88" width="120" height="96" rx="10" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={70} y={110} fill={BLUE} size={15}>{"ESSERE"}</Mid>
        <Mid x={70} y={130} size={11}>{"être : sono, sei, è…"}</Mid>
        <Mid x={70} y={152} size={12}>{"Sono francese."}</Mid>
        <Mid x={70} y={172} size={12}>{"Sei alto."}</Mid>
        {/* plateau AVERE */}
        <rect x="230" y="88" width="120" height="96" rx="10" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={290} y={110} fill={GREEN} size={15}>{"AVERE"}</Mid>
        <Mid x={290} y={130} size={11}>{"avoir : ho, hai, ha…"}</Mid>
        <Mid x={290} y={152} size={12}>{"Ho un cane."}</Mid>
        <Mid x={290} y={172} size={12}>{"Hai fame."}</Mid>
        <Mid x={180} y={40} size={12}>{"être / avoir"}</Mid>
        <Mid x={180} y={205} size={11} fill={RED}>{"L'âge se dit avec avere : Ho dodici anni = j'ai douze ans."}</Mid>
      </svg>
    ),
  },

  "it-articoli": {
    title: "Les articles définis : tout dépend de la première lettre",
    svg: (
      <svg viewBox="0 0 360 224" className="w-full">
        <Mid x={100} y={26} size={11} fill={VIOLET}>{"singulier"}</Mid>
        <Mid x={212} y={26} size={11} fill={VIOLET}>{"pluriel"}</Mid>
        <Mid x={306} y={26} size={11} fill={VIOLET}>{"quand ?"}</Mid>
        <line x1="20" y1="34" x2="345" y2="34" stroke={INK} strokeWidth="2" />
        <line x1="258" y1="20" x2="258" y2="188" stroke={INK} strokeWidth="1.2" strokeDasharray="4 3" />
        {(
          [
            ["il libro", "i libri", "masc. + consonne", BLUE],
            ["lo zaino", "gli zaini", "masc. + z, s + consonne", BLUE],
            ["l'amico", "gli amici", "masc. + voyelle", BLUE],
            ["la casa", "le case", "fém. + consonne", RED],
            ["l'amica", "le amiche", "fém. + voyelle", RED],
          ] as const
        ).map(([sing, plur, rule, c], i) => (
          <g key={sing}>
            <Mid x={100} y={60 + i * 29} size={13} fill={c}>{sing}</Mid>
            <Mid x={158} y={60 + i * 29} size={11}>{"→"}</Mid>
            <Mid x={212} y={60 + i * 29} size={13} fill={c}>{plur}</Mid>
            <Mid x={306} y={60 + i * 29} size={9}>{rule}</Mid>
          </g>
        ))}
        <Mid x={180} y={216} size={11}>{"En bleu le masculin, en rouge le féminin."}</Mid>
      </svg>
    ),
  },

  "it-verbi": {
    title: "Les trois groupes : -are, -ere, -ire",
    svg: (
      <svg viewBox="0 0 360 215" className="w-full">
        {/* roue des trois groupes */}
        <path d="M95 110 L95 42 A68 68 0 0 1 153.9 144 Z" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M95 110 L153.9 144 A68 68 0 0 1 36.1 144 Z" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M95 110 L36.1 144 A68 68 0 0 1 95 42 Z" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={133} y={88} size={13} fill={BLUE}>{"-ARE"}</Mid>
        <Mid x={95} y={158} size={13} fill={GREEN}>{"-ERE"}</Mid>
        <Mid x={57} y={88} size={13} fill={VIOLET}>{"-IRE"}</Mid>
        <circle cx="95" cy="110" r="17" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <Mid x={95} y={115} size={12}>{"io"}</Mid>
        {/* exemples */}
        <Mid x={262} y={58} size={13} fill={BLUE}>{"parlare → parlo"}</Mid>
        <Mid x={262} y={74} size={9}>{"parler → je parle"}</Mid>
        <Mid x={262} y={104} size={13} fill={GREEN}>{"prendere → prendo"}</Mid>
        <Mid x={262} y={120} size={9}>{"prendre → je prends"}</Mid>
        <Mid x={262} y={150} size={13} fill={VIOLET}>{"dormire → dormo"}</Mid>
        <Mid x={262} y={166} size={9}>{"dormir → je dors"}</Mid>
        <Mid x={180} y={203} size={11}>{"Avec io, la terminaison est toujours -o, pour les trois groupes !"}</Mid>
      </svg>
    ),
  },

  "it-famiglia": {
    title: "L'albero della famiglia et la règle du possessif",
    svg: (
      <svg viewBox="0 0 360 252" className="w-full">
        <line x1="180" y1="35" x2="180" y2="167" stroke={INK} strokeWidth="2" />
        {(
          [
            { y: 20, a: "il nonno", b: "la nonna", side: "i nonni", tint: VIOLET_TINT, c: VIOLET },
            { y: 86, a: "il padre", b: "la madre", side: "i genitori", tint: BLUE_TINT, c: BLUE },
            { y: 152, a: "il figlio", b: "la figlia", side: "i figli", tint: GREEN_TINT, c: GREEN },
          ] as const
        ).map((row) => (
          <g key={row.side}>
            <line x1="130" y1={row.y + 15} x2="230" y2={row.y + 15} stroke={INK} strokeWidth="2" />
            <rect x="88" y={row.y} width="84" height="30" rx="8" fill={row.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={130} y={row.y + 20} size={12}>{row.a}</Mid>
            <rect x="188" y={row.y} width="84" height="30" rx="8" fill={row.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={230} y={row.y + 20} size={12}>{row.b}</Mid>
            <Mid x={316} y={row.y + 20} size={12} fill={row.c}>{row.side}</Mid>
          </g>
        ))}
        {/* la règle du possessif */}
        <Mid x={95} y={207} size={9.5} fill={GREEN}>{"famille au singulier → sans article"}</Mid>
        <rect x="20" y="214" width="150" height="30" rx="8" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={95} y={234} size={13}>{"mia madre"}</Mid>
        <Mid x={270} y={207} size={9.5} fill={BLUE}>{"autres noms → avec article"}</Mid>
        <rect x="195" y="214" width="150" height="30" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={270} y={234} size={13}>{"il mio cane"}</Mid>
      </svg>
    ),
  },

  "it-piace": {
    title: "Mi piace ou mi piacciono ? La chose aimée décide",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* ligne 1 : singulier */}
        <path d="M230 40 Q 175 8 118 38" fill="none" stroke={BLUE} strokeWidth="2" />
        <polygon points="118,38 130,31 129,42" fill={BLUE} />
        <Mid x={52} y={65} size={14}>{"Mi"}</Mid>
        <Mid x={110} y={65} size={14} fill={BLUE}>{"piace"}</Mid>
        <rect x="160" y="45" width="98" height="28" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={209} y={64} size={13}>{"la pizza"}</Mid>
        <Mid x={310} y={64} size={11} fill={BLUE}>{"singulier"}</Mid>
        {/* ligne 2 : pluriel */}
        <path d="M255 122 Q 195 90 136 120" fill="none" stroke={RED} strokeWidth="2" />
        <polygon points="136,120 148,113 147,124" fill={RED} />
        <Mid x={52} y={147} size={14}>{"Mi"}</Mid>
        <Mid x={122} y={147} size={14} fill={RED}>{"piacciono"}</Mid>
        <rect x="180" y="127" width="118" height="28" rx="8" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={239} y={146} size={13}>{"gli spaghetti"}</Mid>
        <Mid x={332} y={146} size={11} fill={RED}>{"pluriel"}</Mid>
        <Mid x={180} y={190} size={11}>{"La chose aimée est le sujet : elle choisit piace ou piacciono."}</Mid>
      </svg>
    ),
  },

  "it-cibo": {
    title: "I pasti : les repas de la journée",
    svg: (
      <svg viewBox="0 0 360 210" className="w-full">
        <Sun x={65} y={22} r={7} />
        <Sun x={180} y={20} r={9} />
        <Moon x={296} y={10} />
        {(
          [
            { x: 15, name: "la colazione", time: "le petit-déjeuner", tint: BLUE_TINT, foods: ["il latte", "i biscotti"] },
            { x: 130, name: "il pranzo", time: "le déjeuner", tint: GREEN_TINT, foods: ["la pasta", "il pane"] },
            { x: 245, name: "la cena", time: "le dîner", tint: VIOLET_TINT, foods: ["la pizza", "l'insalata"] },
          ] as const
        ).map((meal) => (
          <g key={meal.name}>
            <rect x={meal.x} y="48" width="100" height="110" rx="10" fill={meal.tint} stroke={INK} strokeWidth="2.5" />
            <Mid x={meal.x + 50} y={70} size={12}>{meal.name}</Mid>
            <Mid x={meal.x + 50} y={86} size={9}>{meal.time}</Mid>
            <line x1={meal.x + 14} y1="94" x2={meal.x + 86} y2="94" stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" />
            {meal.foods.map((f, i) => (
              <Mid key={f} x={meal.x + 50} y={114 + i * 22} size={12}>{f}</Mid>
            ))}
          </g>
        ))}
        <Mid x={180} y={182} size={11}>{"A pranzo mangio la pasta. = Au déjeuner, je mange des pâtes."}</Mid>
        <Mid x={180} y={200} size={11} fill={RED}>{"Et le dessert préféré de tous : il gelato, la glace !"}</Mid>
      </svg>
    ),
  },

  "it-italia": {
    title: "L'Italia : une botte au milieu de la mer",
    svg: (
      <svg viewBox="0 0 360 248" className="w-full">
        {/* la péninsule en forme de botte */}
        <path
          d="M140 38 Q170 18 205 26 Q232 34 228 58 L214 82 Q236 100 248 122 Q262 140 292 150 Q308 158 300 170 Q284 172 262 158 Q252 154 250 166 Q254 184 238 196 Q222 200 220 186 Q224 168 212 148 Q192 122 168 96 Q148 72 138 54 Z"
          fill={GREEN_TINT}
          stroke={INK}
          strokeWidth="2.5"
        />
        {/* la Sicilia et la Sardegna */}
        <polygon points="196,206 238,202 220,224" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={272} y={216} size={10}>{"la Sicilia"}</Mid>
        <ellipse cx="120" cy="142" rx="13" ry="24" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={120} y={183} size={10}>{"la Sardegna"}</Mid>
        {/* les villes */}
        <circle cx="180" cy="50" r="3.5" fill={INK} />
        <Mid x={146} y={54} size={10}>{"Milano"}</Mid>
        <circle cx="220" cy="52" r="3.5" fill={INK} />
        <Mid x={256} y={56} size={10}>{"Venezia"}</Mid>
        <circle cx="192" cy="115" r="6" fill={RED_TINT} stroke={RED} strokeWidth="2.5" />
        <circle cx="192" cy="115" r="2.2" fill={RED} />
        <Mid x={156} y={112} size={11} fill={RED}>{"Roma"}</Mid>
        <Mid x={152} y={124} size={8}>{"(capitale)"}</Mid>
        <circle cx="228" cy="142" r="3.5" fill={INK} />
        <Mid x={262} y={140} size={10}>{"Napoli"}</Mid>
        <Mid x={180} y={242} size={11}>{"L'Italia a la forme d'une botte ! Sa capitale : Roma."}</Mid>
      </svg>
    ),
  },

  /* ================================ ASSR1 =============================== */

  "assr-traversee": {
    title: "Traverser au passage piéton : gauche, droite, encore à gauche",
    svg: (
      <svg viewBox="0 0 360 222" className="w-full">
        <Mid x={180} y={13} size={10} fill={VIOLET}>{"le passage piéton"}</Mid>
        {/* trottoir du haut */}
        <rect x="10" y="18" width="340" height="28" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={54} y={36} size={10}>{"trottoir"}</Mid>
        {/* chaussée */}
        <rect x="10" y="46" width="340" height="106" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <line x1="10" y1="99" x2="350" y2="99" stroke={INK} strokeWidth="1.5" strokeDasharray="14 10" />
        {/* passage piéton */}
        {[52, 71, 90, 109, 128].map((y) => (
          <rect key={y} x="146" y={y} width="68" height="12" fill={BLUE_TINT} stroke={INK} strokeWidth="1.5" />
        ))}
        {/* voiture qui arrive de la gauche, dans la voie la plus proche */}
        <rect x="44" y="112" width="54" height="28" rx="7" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="102" y1="126" x2="128" y2="126" stroke={RED} strokeWidth="2.5" />
        <polygon points="136,126 125,120 125,132" fill={RED} />
        {/* trottoir du bas + piéton */}
        <rect x="10" y="152" width="340" height="30" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={54} y={171} size={10}>{"trottoir"}</Mid>
        <circle cx="180" cy="163" r="6" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="180" y1="169" x2="180" y2="180" stroke={INK} strokeWidth="2.5" />
        <Mid x={239} y={172} size={9.5} fill={VIOLET}>{"toi, avant de t'engager"}</Mid>
        <Mid x={180} y={201} size={11.5} fill={RED}>{"1 regarde à gauche ← 2 à droite → 3 encore à gauche ←"}</Mid>
        <Mid x={180} y={217} size={10}>{"puis traverse tout droit, en cherchant le regard du conducteur."}</Mid>
      </svg>
    ),
  },

  "assr-velo": {
    title: "Le vélo bien équipé (et sa cycliste aussi)",
    svg: (
      <svg viewBox="0 0 360 240" className="w-full">
        {/* roues */}
        <circle cx="95" cy="160" r="36" fill="none" stroke={INK} strokeWidth="2.5" />
        <circle cx="262" cy="160" r="36" fill="none" stroke={INK} strokeWidth="2.5" />
        {/* cadre */}
        <line x1="95" y1="160" x2="172" y2="162" stroke={INK} strokeWidth="2.5" />
        <line x1="95" y1="160" x2="150" y2="108" stroke={INK} strokeWidth="2.5" />
        <line x1="150" y1="108" x2="172" y2="162" stroke={INK} strokeWidth="2.5" />
        <line x1="150" y1="108" x2="246" y2="112" stroke={INK} strokeWidth="2.5" />
        <line x1="172" y1="162" x2="250" y2="114" stroke={INK} strokeWidth="2.5" />
        <line x1="262" y1="160" x2="250" y2="108" stroke={INK} strokeWidth="2.5" />
        {/* selle, guidon, pédalier */}
        <line x1="138" y1="104" x2="162" y2="104" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <line x1="246" y1="108" x2="260" y2="100" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <circle cx="172" cy="162" r="7" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        {/* feux : blanc à l'avant, rouge à l'arrière */}
        <circle cx="276" cy="106" r="4.5" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <circle cx="66" cy="140" r="4.5" fill={RED} stroke={INK} strokeWidth="2" />
        {/* sonnette */}
        <circle cx="242" cy="98" r="4" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        {/* catadioptres dans les roues */}
        <circle cx="95" cy="142" r="4" fill={RED_TINT} stroke={INK} strokeWidth="1.6" />
        <circle cx="262" cy="142" r="4" fill={RED_TINT} stroke={INK} strokeWidth="1.6" />
        {/* casque */}
        <path d="M28 62 A24 24 0 0 1 76 62 Z" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <path d="M36 62 q 16 14 32 0" fill="none" stroke={INK} strokeWidth="2" />
        <Mid x={52} y={84} size={9.5} fill={BLUE}>{"casque : obligatoire"}</Mid>
        <Mid x={52} y={96} size={9.5} fill={BLUE}>{"avant 12 ans"}</Mid>
        {/* étiquettes */}
        <Mid x={224} y={30} size={9.5} fill={VIOLET}>{"sonnette (s'entend à 50 m)"}</Mid>
        <line x1="234" y1="36" x2="242" y2="92" stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" />
        <Mid x={322} y={62} size={9.5} fill={GREEN}>{"feu avant"}</Mid>
        <Mid x={322} y={74} size={9.5} fill={GREEN}>{"blanc ou jaune"}</Mid>
        <line x1="308" y1="80" x2="280" y2="102" stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" />
        <Mid x={38} y={120} size={9.5} fill={RED}>{"feu arrière rouge"}</Mid>
        <line x1="46" y1="126" x2="63" y2="136" stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" />
        <Mid x={180} y={216} size={10}>{"Obligatoires aussi : 2 freins (avant + arrière) et les catadioptres :"}</Mid>
        <Mid x={180} y={232} size={10} fill={RED}>{"blanc devant, rouge derrière, orange sur les pédales et les côtés."}</Mid>
      </svg>
    ),
  },

  "assr-passager": {
    title: "Passagère : attachée en voiture, patiente près du bus",
    svg: (
      <svg viewBox="0 0 360 205" className="w-full">
        <line x1="178" y1="14" x2="178" y2="196" stroke={INK} strokeWidth="1.5" strokeDasharray="5 4" />
        {/* en voiture : le siège et la ceinture */}
        <Mid x={88} y={22} size={12} fill={BLUE}>{"en voiture"}</Mid>
        <rect x="40" y="48" width="16" height="76" rx="6" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="40" y="118" width="72" height="16" rx="6" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <circle cx="88" cy="66" r="11" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="88" y1="77" x2="88" y2="118" stroke={INK} strokeWidth="3" />
        <line x1="88" y1="118" x2="122" y2="118" stroke={INK} strokeWidth="3" />
        <line x1="122" y1="118" x2="122" y2="134" stroke={INK} strokeWidth="3" />
        {/* la ceinture, à plat sur l'épaule et les hanches */}
        <line x1="60" y1="54" x2="104" y2="120" stroke={RED} strokeWidth="4" strokeLinecap="round" />
        <Mid x={88} y={156} size={10}>{"la ceinture : à l'avant"}</Mid>
        <Mid x={88} y={169} size={10}>{"comme à l'arrière"}</Mid>
        <Mid x={88} y={190} size={9.5} fill={RED}>{"moins de 10 ans : rehausseur"}</Mid>
        {/* après le bus */}
        <Mid x={268} y={22} size={12} fill={GREEN}>{"après le bus"}</Mid>
        <rect x="204" y="44" width="118" height="56" rx="8" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        {[214, 244, 274].map((x) => (
          <rect key={x} x={x} y="52" width="22" height="16" rx="3" fill="#fff" stroke={INK} strokeWidth="1.6" />
        ))}
        <circle cx="226" cy="104" r="8" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <circle cx="300" cy="104" r="8" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <line x1="186" y1="114" x2="352" y2="114" stroke={INK} strokeWidth="2" />
        {/* traverser devant le bus : interdit */}
        <circle cx="192" cy="78" r="5" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <line x1="192" y1="83" x2="192" y2="94" stroke={INK} strokeWidth="2" />
        <line x1="184" y1="70" x2="200" y2="94" stroke={RED} strokeWidth="3.5" />
        <line x1="200" y1="70" x2="184" y2="94" stroke={RED} strokeWidth="3.5" />
        <Mid x={268} y={138} size={10}>{"ne traverse ni devant"}</Mid>
        <Mid x={268} y={151} size={10}>{"ni derrière le bus :"}</Mid>
        <Mid x={268} y={172} size={10} fill={GREEN}>{"attends qu'il reparte,"}</Mid>
        <Mid x={268} y={185} size={10} fill={GREEN}>{"puis traverse en voyant toute la route"}</Mid>
      </svg>
    ),
  },

  "assr-panneaux": {
    title: "Quatre formes de panneaux, et la distance pour s'arrêter",
    svg: (
      <svg viewBox="0 0 360 226" className="w-full">
        {/* triangle : danger */}
        <polygon points="48,26 74,72 22,72" fill="#fff" stroke={RED} strokeWidth="5" strokeLinejoin="round" />
        <line x1="48" y1="42" x2="48" y2="58" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <circle cx="48" cy="65" r="2" fill={INK} />
        <Mid x={48} y={92} size={10} fill={RED}>{"danger"}</Mid>
        {/* rond rouge : interdiction */}
        <circle cx="140" cy="50" r="25" fill="#fff" stroke={RED} strokeWidth="5" />
        <Mid x={140} y={92} size={10} fill={RED}>{"interdiction"}</Mid>
        {/* rond bleu : obligation */}
        <circle cx="232" cy="50" r="25" fill={BLUE} stroke={BLUE} strokeWidth="2" />
        <line x1="232" y1="63" x2="232" y2="45" stroke="#fff" strokeWidth="4" />
        <polygon points="232,36 224,48 240,48" fill="#fff" />
        <Mid x={232} y={92} size={10} fill={BLUE}>{"obligation"}</Mid>
        {/* carré bleu : indication */}
        <rect x="301" y="27" width="46" height="46" rx="6" fill={BLUE} />
        <Mid x={324} y={58} size={19} fill="#fff">{"P"}</Mid>
        <Mid x={324} y={92} size={10} fill={BLUE}>{"indication"}</Mid>
        <line x1="20" y1="106" x2="340" y2="106" stroke={INK} strokeWidth="1.5" strokeDasharray="4 3" />
        {/* distance d'arrêt à 50 km/h */}
        <Mid x={180} y={128} size={11}>{"S'arrêter à 50 km/h : réaction + freinage"}</Mid>
        <Mid x={42} y={154} size={10}>{"sec"}</Mid>
        <rect x="70" y="142" width="64" height="16" fill={VIOLET_TINT} stroke={INK} strokeWidth="1.6" />
        <rect x="134" y="142" width="64" height="16" fill={BLUE_TINT} stroke={INK} strokeWidth="1.6" />
        <Mid x={226} y={155} size={10}>{"≈ 28 m"}</Mid>
        <Mid x={42} y={184} size={10}>{"pluie"}</Mid>
        <rect x="70" y="172" width="64" height="16" fill={VIOLET_TINT} stroke={INK} strokeWidth="1.6" />
        <rect x="134" y="172" width="129" height="16" fill={BLUE_TINT} stroke={INK} strokeWidth="1.6" />
        <Mid x={292} y={185} size={10} fill={RED}>{"≈ 42 m"}</Mid>
        <Mid x={112} y={212} size={9.5} fill={VIOLET}>{"réaction : 1 seconde ≈ 14 m"}</Mid>
        <Mid x={266} y={212} size={9.5} fill={BLUE}>{"freinage : doublé sous la pluie"}</Mid>
      </svg>
    ),
  },
};
