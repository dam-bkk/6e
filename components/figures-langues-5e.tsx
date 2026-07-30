/**
 * Catalogue de figures — français 5e et anglais 5e.
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

/** Texte centré en gros caractères (typo titre) avec tspans possibles */
function Big({
  x,
  y,
  fill = INK,
  size = 16,
  children,
}: {
  x: number;
  y: number;
  fill?: string;
  size?: number;
  children: React.ReactNode;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight="800"
      fill={fill}
      textAnchor="middle"
      fontFamily="var(--font-baloo), sans-serif"
    >
      {children}
    </text>
  );
}

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  /* ============================== FRANÇAIS 5e ============================== */

  "fr5-phrase-complexe": {
    title: "Phrase simple ou phrase complexe ? Compte les verbes conjugués",
    svg: (
      <svg viewBox="0 0 360 172" className="w-full">
        <Mid x={93} y={20} fill={BLUE}>phrase simple</Mid>
        <Mid x={267} y={20} fill={RED}>phrase complexe</Mid>
        <rect x="12" y="30" width="162" height="104" rx="14" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <rect x="186" y="30" width="162" height="104" rx="14" fill="#fff" stroke={INK} strokeWidth="2.5" />
        {/* phrase simple : 1 verbe encadré */}
        <Big x={53} y={76} size={15}>Le vent</Big>
        <rect x="86" y="58" width="66" height="26" rx="8" fill={RED_TINT} stroke={RED} strokeWidth="2" />
        <Big x={119} y={77} size={15} fill={RED}>souffle</Big>
        <Big x={160} y={77} size={15}>.</Big>
        <Mid x={93} y={110} fill={RED}>1 verbe conjugué</Mid>
        <Mid x={93} y={126} size={11}>= 1 proposition</Mid>
        {/* phrase complexe : 2 verbes encadrés */}
        <Big x={221} y={66} size={14}>Le vent</Big>
        <rect x="250" y="49" width="60" height="24" rx="8" fill={RED_TINT} stroke={RED} strokeWidth="2" />
        <Big x={280} y={66} size={14} fill={RED}>souffle</Big>
        <Big x={226} y={98} size={14}>et la pluie</Big>
        <rect x="266" y="81" width="56" height="24" rx="8" fill={RED_TINT} stroke={RED} strokeWidth="2" />
        <Big x={294} y={98} size={14} fill={RED}>tombe</Big>
        <Big x={330} y={98} size={14}>.</Big>
        <Mid x={267} y={126} fill={RED} size={12}>2 verbes = 2 propositions</Mid>
        <Mid x={180} y={158} size={11}>compte les verbes conjugués pour compter les propositions</Mid>
      </svg>
    ),
  },

  "fr5-expansions-nom": {
    title: "Le nom noyau et ses trois expansions",
    svg: (
      <svg viewBox="0 0 360 188" className="w-full">
        {/* le noyau */}
        <rect x="16" y="74" width="90" height="40" rx="12" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Big x={61} y={100} size={17} fill={BLUE}>chat</Big>
        <Mid x={61} y={132} size={11} fill={BLUE}>nom noyau</Mid>
        {/* flèches vers les trois expansions */}
        <line x1="106" y1="84" x2="202" y2="38" stroke={INK} strokeWidth="2" />
        <path d="M210 34 l-10 0 l4 9 z" fill={INK} />
        <line x1="106" y1="94" x2="202" y2="94" stroke={INK} strokeWidth="2" />
        <path d="M210 94 l-9 -5 v10 z" fill={INK} />
        <line x1="106" y1="104" x2="202" y2="150" stroke={INK} strokeWidth="2" />
        <path d="M210 154 l-10 0 l4 -9 z" fill={INK} />
        {/* expansion 1 : adjectif */}
        <rect x="212" y="22" width="134" height="30" rx="10" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Big x={279} y={43} size={15} fill={GREEN}>noir</Big>
        <Mid x={279} y={66} size={10} fill={GREEN}>adjectif épithète</Mid>
        {/* expansion 2 : complément du nom */}
        <rect x="212" y="79" width="134" height="30" rx="10" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <Big x={279} y={100} size={15} fill={RED}>du voisin</Big>
        <Mid x={279} y={123} size={10} fill={RED}>complément du nom</Mid>
        {/* expansion 3 : relative */}
        <rect x="212" y="136" width="134" height="30" rx="10" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <Big x={279} y={157} size={15} fill={VIOLET}>qui dort</Big>
        <Mid x={279} y={180} size={10} fill={VIOLET}>subordonnée relative</Mid>
        <Mid x={103} y={176} size={11}>le chat noir du voisin qui dort</Mid>
      </svg>
    ),
  },

  "fr5-passe-simple-series": {
    title: "Les quatre séries du passé simple",
    svg: (
      <svg viewBox="0 0 360 122" className="w-full">
        {[
          { x: 10, c: BLUE, tint: BLUE_TINT, serie: "série -a", inf: "chanter", stem: "il chant", end: "a" },
          { x: 96, c: GREEN, tint: GREEN_TINT, serie: "série -i", inf: "finir", stem: "il fin", end: "it" },
          { x: 182, c: RED, tint: RED_TINT, serie: "série -u", inf: "vouloir", stem: "il voul", end: "ut" },
          { x: 268, c: VIOLET, tint: VIOLET_TINT, serie: "série -in", inf: "venir", stem: "il v", end: "int" },
        ].map((s) => (
          <g key={s.serie}>
            <rect x={s.x} y="12" width="82" height="24" rx="12" fill={s.tint} stroke={INK} strokeWidth="2" />
            <Mid x={s.x + 41} y={28} fill={s.c} size={12}>{s.serie}</Mid>
            <Mid x={s.x + 41} y={58} size={12}>{s.inf}</Mid>
            <line x1={s.x + 41} y1="64" x2={s.x + 41} y2="76" stroke={INK} strokeWidth="2" />
            <path d={`M${s.x + 41} 82 l-5 -8 h10 z`} fill={INK} />
            <Big x={s.x + 41} y={108} size={16}>
              {s.stem}
              <tspan fill={s.c}>{s.end}</tspan>
            </Big>
          </g>
        ))}
      </svg>
    ),
  },

  "fr5-anteriorite": {
    title: "Le temps composé raconte ce qui s'est passé avant",
    svg: (
      <svg viewBox="0 0 360 172" className="w-full">
        <Mid x={180} y={16} size={12} fill={RED}>{"l'action du temps composé se passe avant"}</Mid>
        {/* couple 1 : plus-que-parfait / imparfait */}
        <line x1="15" y1="84" x2="336" y2="84" stroke={INK} strokeWidth="2.5" />
        <path d="M345 84 l-9 -5 v10 z" fill={INK} />
        <rect x="22" y="48" width="128" height="27" rx="13" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={86} y={66} fill={BLUE} size={12}>plus-que-parfait</Mid>
        <line x1="86" y1="75" x2="86" y2="84" stroke={INK} strokeWidth="2" />
        <rect x="225" y="48" width="100" height="27" rx="13" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={275} y={66} fill={GREEN} size={12}>imparfait</Mid>
        <line x1="275" y1="75" x2="275" y2="84" stroke={INK} strokeWidth="2" />
        <line x1="154" y1="61" x2="212" y2="61" stroke={RED} strokeWidth="2" />
        <path d="M220 61 l-9 -5 v10 z" fill={RED} />
        <Mid x={187} y={52} size={10} fill={RED}>avant</Mid>
        {/* couple 2 : passé composé / présent */}
        <line x1="15" y1="158" x2="336" y2="158" stroke={INK} strokeWidth="2.5" />
        <path d="M345 158 l-9 -5 v10 z" fill={INK} />
        <rect x="22" y="122" width="128" height="27" rx="13" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={86} y={140} fill={BLUE} size={12}>passé composé</Mid>
        <line x1="86" y1="149" x2="86" y2="158" stroke={INK} strokeWidth="2" />
        <rect x="225" y="122" width="100" height="27" rx="13" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={275} y={140} fill={GREEN} size={12}>présent</Mid>
        <line x1="275" y1="149" x2="275" y2="158" stroke={INK} strokeWidth="2" />
        <line x1="154" y1="135" x2="212" y2="135" stroke={RED} strokeWidth="2" />
        <path d="M220 135 l-9 -5 v10 z" fill={RED} />
        <Mid x={187} y={126} size={10} fill={RED}>avant</Mid>
      </svg>
    ),
  },

  "fr5-accord-participe": {
    title: "Être ou avoir : la règle d'accord du participe passé",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        <rect x="105" y="10" width="150" height="30" rx="10" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Mid x={180} y={30} fill={VIOLET}>participe passé</Mid>
        <line x1="150" y1="40" x2="90" y2="62" stroke={INK} strokeWidth="2" />
        <line x1="210" y1="40" x2="270" y2="62" stroke={INK} strokeWidth="2" />
        {/* branche être */}
        <rect x="58" y="62" width="64" height="28" rx="14" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2.5" />
        <Mid x={90} y={81} fill={GREEN}>être</Mid>
        <line x1="90" y1="90" x2="90" y2="102" stroke={GREEN} strokeWidth="2" />
        <path d="M90 108 l-5 -8 h10 z" fill={GREEN} />
        <rect x="18" y="112" width="144" height="30" rx="8" fill="#fff" stroke={GREEN} strokeWidth="2" />
        <Mid x={90} y={131} fill={GREEN} size={12}>accord avec le sujet</Mid>
        <Big x={90} y={168} size={15}>
          {"elles sont parti"}
          <tspan fill={GREEN}>es</tspan>
        </Big>
        {/* branche avoir */}
        <rect x="234" y="62" width="72" height="28" rx="14" fill={RED_TINT} stroke={RED} strokeWidth="2.5" />
        <Mid x={270} y={81} fill={RED}>avoir</Mid>
        <line x1="270" y1="90" x2="270" y2="102" stroke={RED} strokeWidth="2" />
        <path d="M270 108 l-5 -8 h10 z" fill={RED} />
        <rect x="198" y="112" width="144" height="30" rx="8" fill="#fff" stroke={RED} strokeWidth="2" />
        <Mid x={270} y={131} fill={RED} size={12}>{"pas d'accord"}</Mid>
        <Big x={270} y={168} size={15}>
          {"elles ont chant"}
          <tspan fill={RED}>é</tspan>
        </Big>
        <Mid x={270} y={190} size={10} fill={RED}>(sauf COD placé avant)</Mid>
      </svg>
    ),
  },

  "fr5-homophones-quel": {
    title: "Quel(le) ou qu'elle ? Le test de substitution",
    svg: (
      <svg viewBox="0 0 360 186" className="w-full">
        <Mid x={93} y={18} fill={BLUE}>quel / quelle</Mid>
        <Mid x={267} y={18} fill={RED}>{"qu'elle"}</Mid>
        <rect x="12" y="28" width="162" height="118" rx="14" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="186" y="28" width="162" height="118" rx="14" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        {/* quel : accompagne un nom */}
        <Big x={93} y={56} size={15} fill={BLUE}>+ nom</Big>
        <Mid x={93} y={78} size={11}>{"il s'accorde avec le nom"}</Mid>
        <Mid x={93} y={106} size={12}>Quelle heure est-il ?</Mid>
        <Mid x={93} y={128} size={11} fill={BLUE}>quelle → heure (fém.)</Mid>
        {/* qu'elle : que + elle */}
        <Big x={267} y={56} size={15} fill={RED}>= que + elle</Big>
        <Mid x={267} y={78} size={11}>{"remplace par « qu'il »"}</Mid>
        <Mid x={267} y={106} size={12}>{"Je crois qu'elle dort."}</Mid>
        <Mid x={267} y={128} size={11} fill={RED}>{"→ qu'il dort : ça marche"}</Mid>
        <Mid x={180} y={172} size={12}>{"le test : essaie de dire « qu'il »"}</Mid>
      </svg>
    ),
  },

  "fr5-degres": {
    title: "Le thermomètre des degrés de l'adjectif",
    svg: (
      <svg viewBox="0 0 360 212" className="w-full">
        {/* thermomètre */}
        <rect x="86" y="18" width="28" height="150" rx="14" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <rect x="95" y="60" width="10" height="112" rx="5" fill={RED} />
        <circle cx="100" cy="180" r="20" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <circle cx="100" cy="180" r="11" fill={RED} />
        {/* graduations + degrés */}
        {[
          { y: 38, c: VIOLET, tint: VIOLET_TINT, label: "le plus rapide" },
          { y: 78, c: RED, tint: RED_TINT, label: "plus rapide que" },
          { y: 118, c: GREEN, tint: GREEN_TINT, label: "aussi rapide que" },
          { y: 158, c: BLUE, tint: BLUE_TINT, label: "moins rapide que" },
        ].map((d) => (
          <g key={d.label}>
            <line x1="114" y1={d.y} x2="132" y2={d.y} stroke={INK} strokeWidth="2" />
            <rect x="136" y={d.y - 14} width="182" height="27" rx="13" fill={d.tint} stroke={INK} strokeWidth="2" />
            <Mid x={227} y={d.y + 4} fill={d.c} size={12}>{d.label}</Mid>
          </g>
        ))}
        <Mid x={227} y={16} size={10} fill={VIOLET}>superlatif</Mid>
        <Mid x={227} y={185} size={10} fill={BLUE}>comparatif</Mid>
        <Mid x={180} y={207} size={11}>le degré monte : moins → aussi → plus → le plus</Mid>
      </svg>
    ),
  },

  "fr5-champ-lexical": {
    title: "Un champ lexical : des mots qui parlent du même thème",
    svg: (
      <svg viewBox="0 0 360 204" className="w-full">
        {/* liens */}
        <line x1="155" y1="72" x2="82" y2="46" stroke={INK} strokeWidth="1.8" />
        <line x1="205" y1="72" x2="278" y2="46" stroke={INK} strokeWidth="1.8" />
        <line x1="145" y1="98" x2="86" y2="110" stroke={INK} strokeWidth="1.8" />
        <line x1="215" y1="98" x2="284" y2="110" stroke={INK} strokeWidth="1.8" />
        <line x1="158" y1="122" x2="108" y2="158" stroke={INK} strokeWidth="1.8" />
        <line x1="202" y1="122" x2="252" y2="158" stroke={INK} strokeWidth="1.8" />
        {/* le thème au centre */}
        <circle cx="180" cy="97" r="36" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Big x={180} y={103} size={16} fill={BLUE}>la mer</Big>
        {/* les mots du champ : noms, verbe, adjectifs */}
        <rect x="45" y="28" width="64" height="24" rx="12" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={77} y={44} fill={GREEN} size={12}>vague</Mid>
        <rect x="252" y="28" width="64" height="24" rx="12" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={284} y={44} fill={GREEN} size={12}>plage</Mid>
        <rect x="10" y="98" width="80" height="24" rx="12" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={50} y={114} fill={RED} size={12}>naviguer</Mid>
        <rect x="286" y="98" width="60" height="24" rx="12" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={316} y={114} fill={VIOLET} size={12}>salé</Mid>
        <rect x="72" y="156" width="64" height="24" rx="12" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={104} y={172} fill={VIOLET} size={12}>marin</Mid>
        <rect x="226" y="156" width="66" height="24" rx="12" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Mid x={259} y={172} fill={GREEN} size={12}>écume</Mid>
        <Mid x={180} y={198} size={11}>noms, verbes, adjectifs : un même thème, la mer</Mid>
      </svg>
    ),
  },

  /* =============================== ANGLAIS 5e ============================== */

  "en5-was-were": {
    title: "Was / were : le passé de be sur la frise du temps",
    svg: (
      <svg viewBox="0 0 360 162" className="w-full">
        {/* zone passé */}
        <rect x="15" y="32" width="190" height="58" rx="10" fill={BLUE_TINT} />
        <Mid x={105} y={24} fill={BLUE}>PAST</Mid>
        <Mid x={300} y={24} fill={GREEN}>NOW</Mid>
        {/* axe */}
        <line x1="15" y1="90" x2="336" y2="90" stroke={INK} strokeWidth="2.5" />
        <path d="M345 90 l-9 -5 v10 z" fill={INK} />
        <line x1="300" y1="80" x2="300" y2="100" stroke={GREEN} strokeWidth="2.5" />
        {/* formes */}
        <rect x="55" y="44" width="110" height="30" rx="10" fill="#fff" stroke={BLUE} strokeWidth="2.5" />
        <Big x={110} y={65} size={15} fill={BLUE}>was / were</Big>
        <rect x="250" y="44" width="100" height="30" rx="10" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2.5" />
        <Big x={300} y={65} size={14} fill={GREEN}>am / is / are</Big>
        {/* indices de temps du passé */}
        {[
          { x: 28, w: 86, label: "yesterday", tick: 71 },
          { x: 124, w: 84, label: "last week", tick: 166 },
          { x: 218, w: 104, label: "two days ago", tick: 270 },
        ].map((t) => (
          <g key={t.label}>
            <line x1={t.tick} y1="90" x2={t.tick} y2="108" stroke={INK} strokeWidth="1.8" />
            <rect x={t.x} y="108" width={t.w} height="24" rx="12" fill="#fff" stroke={INK} strokeWidth="2" />
            <Mid x={t.x + t.w / 2} y={124} size={11} fill={BLUE}>{t.label}</Mid>
          </g>
        ))}
        <Mid x={180} y={155} size={12}>un indice de passé → was / were</Mid>
      </svg>
    ),
  },

  "en5-ed-machine": {
    title: "La machine à prétérit : base verbale + -ed",
    svg: (
      <svg viewBox="0 0 360 186" className="w-full">
        {/* machine */}
        <rect x="142" y="30" width="76" height="118" rx="12" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <circle cx="152" cy="40" r="3" fill={INK} />
        <circle cx="208" cy="40" r="3" fill={INK} />
        <circle cx="152" cy="138" r="3" fill={INK} />
        <circle cx="208" cy="138" r="3" fill={INK} />
        <Big x={180} y={98} size={22} fill={VIOLET}>+ ed</Big>
        {/* entrées */}
        {[
          { y: 42, word: "play" },
          { y: 79, word: "stop" },
          { y: 116, word: "cry" },
        ].map((v) => (
          <g key={v.word}>
            <rect x="30" y={v.y} width="64" height="26" rx="13" fill="#fff" stroke={INK} strokeWidth="2" />
            <Mid x={62} y={v.y + 17} size={12}>{v.word}</Mid>
            <line x1="98" y1={v.y + 13} x2="130" y2={v.y + 13} stroke={INK} strokeWidth="2" />
            <path d={`M138 ${v.y + 13} l-9 -5 v10 z`} fill={INK} />
          </g>
        ))}
        {/* sorties */}
        {[
          { y: 55, stem: "play", end: "ed" },
          { y: 92, stem: "stop", end: "ped" },
          { y: 129, stem: "cr", end: "ied" },
        ].map((v) => (
          <g key={v.stem}>
            <line x1="222" y1={v.y} x2="246" y2={v.y} stroke={INK} strokeWidth="2" />
            <path d={`M254 ${v.y} l-9 -5 v10 z`} fill={INK} />
            <Big x={297} y={v.y + 5} size={15}>
              {v.stem}
              <tspan fill={RED}>{v.end}</tspan>
            </Big>
          </g>
        ))}
        <Mid x={180} y={174} size={11}>attention : stop double le p, cry devient cried</Mid>
      </svg>
    ),
  },

  "en5-irregular-podium": {
    title: "Le podium des verbes irréguliers les plus fréquents",
    svg: (
      <svg viewBox="0 0 360 190" className="w-full">
        {/* podium */}
        <rect x="28" y="100" width="100" height="50" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="128" y="70" width="104" height="80" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="232" y="115" width="100" height="35" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Big x={78} y={135} size={20} fill={BLUE}>2</Big>
        <Big x={180} y={120} size={24} fill={GREEN}>1</Big>
        <Big x={282} y={140} size={17} fill={VIOLET}>3</Big>
        {/* paires base → prétérit */}
        <Big x={180} y={58} size={16}>
          {"go → "}
          <tspan fill={GREEN}>went</tspan>
        </Big>
        <Big x={78} y={90} size={15}>
          {"see → "}
          <tspan fill={BLUE}>saw</tspan>
        </Big>
        <Big x={282} y={105} size={15}>
          {"have → "}
          <tspan fill={VIOLET}>had</tspan>
        </Big>
        <Mid x={180} y={175} size={11}>{"et aussi : be → was/were, do → did, say → said"}</Mid>
      </svg>
    ),
  },

  "en5-now-vs-everyday": {
    title: "Horloge ou calendrier ? Présent en -ing ou présent simple",
    svg: (
      <svg viewBox="0 0 360 188" className="w-full">
        <Mid x={90} y={20} fill={BLUE}>NOW</Mid>
        <Mid x={270} y={20} fill={GREEN}>EVERY DAY</Mid>
        {/* horloge : action en cours */}
        <circle cx="90" cy="72" r="36" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="90" y1="72" x2="90" y2="46" stroke={INK} strokeWidth="2.5" />
        <line x1="90" y1="72" x2="107" y2="80" stroke={INK} strokeWidth="2.5" />
        <circle cx="90" cy="72" r="3.2" fill={INK} />
        {/* calendrier : habitude */}
        <rect x="225" y="38" width="90" height="68" rx="6" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <rect x="225" y="38" width="90" height="16" rx="6" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <line x1="245" y1="30" x2="245" y2="44" stroke={INK} strokeWidth="2" />
        <line x1="295" y1="30" x2="295" y2="44" stroke={INK} strokeWidth="2" />
        {[66, 80, 94].map((y) =>
          [239, 255, 271, 287, 303].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill={GREEN} />)
        )}
        {/* les deux temps */}
        <rect x="35" y="124" width="110" height="28" rx="14" fill={BLUE_TINT} stroke={BLUE} strokeWidth="2" />
        <Mid x={90} y={143} fill={BLUE} size={12}>be + V-ing</Mid>
        <rect x="215" y="124" width="110" height="28" rx="14" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2" />
        <Mid x={270} y={143} fill={GREEN} size={12}>présent simple</Mid>
        <Mid x={90} y={174} size={12}>I am reading now.</Mid>
        <Mid x={270} y={174} size={12}>I read every day.</Mid>
      </svg>
    ),
  },

  "en5-will-goingto": {
    title: "Will ou be going to ? Éclair ou agenda",
    svg: (
      <svg viewBox="0 0 360 192" className="w-full">
        <rect x="14" y="30" width="160" height="130" rx="16" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="186" y="30" width="160" height="130" rx="16" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        {/* éclair : décision sur le moment */}
        <polygon points="100,40 84,64 94,64 86,86 108,58 96,58" fill={RED} stroke={INK} strokeWidth="1.5" />
        <Big x={94} y={114} size={20} fill={RED}>will</Big>
        <Mid x={94} y={134} size={11}>décision sur le moment</Mid>
        <Mid x={94} y={152} size={11} fill={RED}>{"I'll carry your bag!"}</Mid>
        {/* agenda : projet prévu */}
        <rect x="244" y="42" width="44" height="44" rx="6" fill="#fff" stroke={INK} strokeWidth="2" />
        <line x1="254" y1="36" x2="254" y2="48" stroke={INK} strokeWidth="2" />
        <line x1="278" y1="36" x2="278" y2="48" stroke={INK} strokeWidth="2" />
        <line x1="251" y1="60" x2="281" y2="60" stroke={GREEN} strokeWidth="2.5" />
        <line x1="251" y1="69" x2="281" y2="69" stroke={GREEN} strokeWidth="2.5" />
        <line x1="251" y1="78" x2="273" y2="78" stroke={GREEN} strokeWidth="2.5" />
        <Big x={266} y={114} size={17} fill={GREEN}>be going to</Big>
        <Mid x={266} y={134} size={11}>projet déjà prévu</Mid>
        <Mid x={266} y={152} size={11} fill={GREEN}>{"I'm going to visit Rome."}</Mid>
        <Mid x={180} y={182} size={11}>éclair = spontané, agenda = déjà décidé</Mid>
      </svg>
    ),
  },

  "en5-comparative-stairs": {
    title: "L'escalier du comparatif et du superlatif",
    svg: (
      <svg viewBox="0 0 360 188" className="w-full">
        {/* les trois marches */}
        <rect x="30" y="132" width="100" height="38" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="130" y="97" width="100" height="73" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <rect x="230" y="62" width="100" height="108" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <Big x={80} y={124} size={16}>big</Big>
        <Big x={180} y={89} size={16}>
          {"bigg"}
          <tspan fill={GREEN}>er</tspan>
        </Big>
        <Big x={280} y={54} size={16}>
          {"the bigg"}
          <tspan fill={VIOLET}>est</tspan>
        </Big>
        <Mid x={80} y={155} size={11} fill={BLUE}>adjectif</Mid>
        <Mid x={180} y={125} size={11} fill={GREEN}>+ than</Mid>
        <Mid x={180} y={140} size={11} fill={GREEN}>comparatif</Mid>
        <Mid x={280} y={100} size={11} fill={VIOLET}>superlatif</Mid>
        <Mid x={180} y={184} size={11}>adjectif long : more beautiful, the most beautiful</Mid>
      </svg>
    ),
  },

  "en5-directions-map": {
    title: "Go straight on, turn left : le chemin sur le plan",
    svg: (
      <svg viewBox="0 0 360 206" className="w-full">
        {/* pâtés de maisons */}
        <rect x="40" y="32" width="105" height="55" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="195" y="32" width="105" height="55" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="40" y="122" width="105" height="50" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="195" y="122" width="105" height="50" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        {/* la station (destination) */}
        <rect x="44" y="46" width="97" height="26" rx="6" fill={RED_TINT} stroke={RED} strokeWidth="2" />
        <Mid x={92} y={64} size={12} fill={RED}>STATION</Mid>
        {/* itinéraire */}
        <path d="M170 188 L170 105 L80 105" fill="none" stroke={GREEN} strokeWidth="4" strokeDasharray="8 5" />
        <path d="M64 105 l14 8 v-16 z" fill={GREEN} />
        <circle cx="170" cy="188" r="7" fill={GREEN} stroke={INK} strokeWidth="2" />
        <Mid x={252} y={192} size={11} fill={GREEN}>You are here</Mid>
        {/* consignes */}
        <rect x="200" y="140" width="96" height="21" rx="10" fill="#fff" stroke={INK} strokeWidth="1.8" />
        <Mid x={248} y={155} size={11} fill={GREEN}>go straight on</Mid>
        <rect x="196" y="96" width="70" height="21" rx="10" fill="#fff" stroke={INK} strokeWidth="1.8" />
        <Mid x={231} y={111} size={11} fill={GREEN}>turn left</Mid>
        <Mid x={180} y={203} size={11}>Go straight on, then turn left.</Mid>
      </svg>
    ),
  },

  "en5-describe-person": {
    title: "Describing people : les étiquettes du portrait",
    svg: (
      <svg viewBox="0 0 360 202" className="w-full">
        {/* cheveux bouclés */}
        <circle cx="166" cy="32" r="7" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <circle cx="180" cy="27" r="7" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <circle cx="194" cy="32" r="7" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        {/* tête */}
        <circle cx="180" cy="50" r="17" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <circle cx="174" cy="48" r="1.8" fill={INK} />
        <circle cx="186" cy="48" r="1.8" fill={INK} />
        <path d="M174 57 q6 5 12 0" fill="none" stroke={INK} strokeWidth="1.8" />
        {/* t-shirt + bras */}
        <rect x="145" y="70" width="14" height="20" rx="6" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <rect x="201" y="70" width="14" height="20" rx="6" fill={RED_TINT} stroke={INK} strokeWidth="2" />
        <rect x="157" y="68" width="46" height="52" rx="10" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        {/* jambes */}
        <rect x="164" y="120" width="13" height="48" rx="6" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="183" y="120" width="13" height="48" rx="6" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        {/* étiquettes */}
        <Mid x={68} y={32} fill={VIOLET} size={12}>curly hair</Mid>
        <line x1="104" y1="29" x2="158" y2="29" stroke={VIOLET} strokeWidth="1.8" />
        <Mid x={286} y={57} fill={BLUE} size={12}>brown eyes</Mid>
        <line x1="199" y1="49" x2="248" y2="53" stroke={BLUE} strokeWidth="1.8" />
        <Mid x={70} y={100} fill={RED} size={12}>a red T-shirt</Mid>
        <line x1="112" y1="96" x2="155" y2="92" stroke={RED} strokeWidth="1.8" />
        {/* taille */}
        <Mid x={320} y={20} fill={GREEN}>tall</Mid>
        <line x1="320" y1="34" x2="320" y2="164" stroke={GREEN} strokeWidth="2" />
        <path d="M320 26 l-5 9 h10 z" fill={GREEN} />
        <path d="M320 172 l-5 -9 h10 z" fill={GREEN} />
        {/* phrase modèle */}
        <Mid x={180} y={194} size={12}>She has got curly hair and brown eyes.</Mid>
      </svg>
    ),
  },
};
