/**
 * Catalogue de figures — maths 6e/5e (nombres, calculs, proportionnalité,
 * grandeurs, statistiques, probabilités).
 * Même style que components/figures.tsx : traits encre #2a2440, tints des
 * domaines, étiquettes françaises, lisible en 5 secondes.
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

/** Grand chiffre centré (style "cahier"), pour les opérations posées et tableaux */
function Num({ x, y, children, fill = INK, size = 20 }: { x: number; y: number; children: string; fill?: string; size?: number }) {
  return (
    <text x={x} y={y} fontSize={size} fontWeight="800" fill={fill} textAnchor="middle" fontFamily="var(--font-baloo), sans-serif">
      {children}
    </text>
  );
}

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  /* ============ 6e — 03 opérations : addition posée de décimaux ============ */
  "mx-addition-posee": {
    title: "Addition posée : les virgules sont alignées",
    svg: (
      <svg viewBox="0 0 360 160" className="w-full">
        {/* colonne des virgules mise en évidence */}
        <rect x="141" y="14" width="18" height="126" fill={RED_TINT} rx="6" />
        {/* retenue */}
        <Num x={122} y={30} fill={RED} size={14}>1</Num>
        {/* 4 , 7 0 */}
        <Num x={122} y={58}>4</Num>
        <Num x={150} y={58}>{","}</Num>
        <Num x={178} y={58}>7</Num>
        <Num x={206} y={58}>0</Num>
        {/* + 2 , 5 8 */}
        <Num x={90} y={92}>+</Num>
        <Num x={122} y={92}>2</Num>
        <Num x={150} y={92}>{","}</Num>
        <Num x={178} y={92}>5</Num>
        <Num x={206} y={92}>8</Num>
        <line x1="78" y1="104" x2="222" y2="104" stroke={INK} strokeWidth="2.5" />
        {/* résultat 7 , 2 8 */}
        <Num x={122} y={132} fill={BLUE}>7</Num>
        <Num x={150} y={132} fill={BLUE}>{","}</Num>
        <Num x={178} y={132} fill={BLUE}>2</Num>
        <Num x={206} y={132} fill={BLUE}>8</Num>
        {/* légendes */}
        <Label x={240} y={40} fill={RED}>virgules</Label>
        <Label x={240} y={57} fill={RED}>alignées</Label>
        <line x1="237" y1="47" x2="162" y2="47" stroke={RED} strokeWidth="1.5" strokeDasharray="4 3" />
        <Label x={240} y={95}>4,70 = 4,7</Label>
        <Label x={240} y={130} fill={BLUE}>résultat : 7,28</Label>
      </svg>
    ),
  },

  /* ============ 6e — 04 division : division euclidienne posée ============ */
  "mx-division-posee": {
    title: "La division euclidienne de 47 par 6, posée en potence",
    svg: (
      <svg viewBox="0 0 360 170" className="w-full">
        {/* potence */}
        <line x1="168" y1="22" x2="168" y2="112" stroke={INK} strokeWidth="2.5" />
        <line x1="168" y1="52" x2="248" y2="52" stroke={INK} strokeWidth="2.5" />
        {/* dividende */}
        <Num x={128} y={46} fill={BLUE} size={24}>47</Num>
        <Label x={30} y={42} fill={BLUE}>dividende</Label>
        {/* diviseur */}
        <Num x={205} y={46} fill={VIOLET} size={24}>6</Num>
        <Label x={255} y={42} fill={VIOLET}>diviseur</Label>
        {/* soustraction 47 - 42 */}
        <Num x={95} y={80} size={18}>{"−"}</Num>
        <Num x={128} y={80} size={18}>42</Num>
        <line x1="102" y1="90" x2="152" y2="90" stroke={INK} strokeWidth="2" />
        {/* reste */}
        <Num x={135} y={114} fill={RED} size={22}>5</Num>
        <Label x={30} y={110} fill={RED}>reste</Label>
        {/* quotient */}
        <Num x={205} y={84} fill={GREEN} size={24}>7</Num>
        <Label x={255} y={80} fill={GREEN}>quotient</Label>
        {/* égalité de contrôle */}
        <line x1="30" y1="130" x2="330" y2="130" stroke={INK} strokeWidth="1" strokeDasharray="3 4" />
        <Label x={48} y={155}>47 = 6 × 7 + 5, avec 5 &lt; 6</Label>
      </svg>
    ),
  },

  /* ====== 6e — 06 proportionnalité : tableau fléché et coefficient ×2,5 ====== */
  "mx-tableau-proportion": {
    title: "Un tableau de proportionnalité : on multiplie toujours par 2,5",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        {/* tableau 2 lignes × 4 colonnes */}
        <rect x="20" y="30" width="100" height="40" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="20" y="70" width="100" height="40" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        {[0, 1, 2].map((c) => (
          <g key={c}>
            <rect x={120 + c * 62} y="30" width="62" height="40" fill="#fff" stroke={INK} strokeWidth="2" />
            <rect x={120 + c * 62} y="70" width="62" height="40" fill="#fff" stroke={INK} strokeWidth="2" />
          </g>
        ))}
        <Label x={30} y={55}>Cahiers</Label>
        <Label x={30} y={95}>Prix (€)</Label>
        <Num x={151} y={58} size={18}>2</Num>
        <Num x={213} y={58} size={18}>5</Num>
        <Num x={275} y={58} size={18}>8</Num>
        <Num x={151} y={98} fill={GREEN} size={18}>5</Num>
        <Num x={213} y={98} fill={GREEN} size={16}>12,50</Num>
        <Num x={275} y={98} fill={GREEN} size={18}>20</Num>
        {/* flèche du coefficient */}
        <path d="M312 50 C 342 55, 342 85, 312 90" fill="none" stroke={RED} strokeWidth="2.5" />
        <path d="M312 90 l10 -8 l1 10 z" fill={RED} />
        <Label x={318} y={40} fill={RED}>× 2,5</Label>
        <Label x={20} y={138} fill={RED}>Le coefficient de proportionnalité est 2,5 : un cahier coûte 2,50 €.</Label>
      </svg>
    ),
  },

  /* ====== 6e — 12 grandeurs : tableau de conversion des longueurs ====== */
  "mx-conversion-longueurs": {
    title: "Le tableau de conversion : 3 km = 3 000 m",
    svg: (
      <svg viewBox="0 0 360 145" className="w-full">
        {["km", "hm", "dam", "m", "dm", "cm", "mm"].map((u, i) => (
          <g key={u}>
            <rect x={26 + i * 44} y="32" width="44" height="32" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
            <text x={48 + i * 44} y="53" fontSize="14" fontWeight="800" fill={GREEN} textAnchor="middle" fontFamily="var(--font-nunito), sans-serif">{u}</text>
            <rect x={26 + i * 44} y="64" width="44" height="36" fill="#fff" stroke={INK} strokeWidth="2" />
          </g>
        ))}
        {/* 3 000 : un chiffre par colonne, de km jusqu'à m */}
        <Num x={48} y={90} fill={BLUE}>3</Num>
        <Num x={92} y={90}>0</Num>
        <Num x={136} y={90}>0</Num>
        <Num x={180} y={90}>0</Num>
        {/* flèche ×10 entre colonnes */}
        <path d="M60 20 h60" stroke={RED} strokeWidth="2" fill="none" />
        <path d="M120 20 l-9 -5 v10 z" fill={RED} />
        <Label x={128} y={25} fill={RED}>× 10 à chaque colonne</Label>
        <Label x={26} y={128} fill={BLUE}>3 km = 3 000 m : on complète avec des zéros jusqu&apos;à la colonne m.</Label>
      </svg>
    ),
  },

  /* ====== 6e — 15 probabilités : l'échelle de 0 à 1 ====== */
  "mx-echelle-proba": {
    title: "L'échelle des probabilités, de 0 (impossible) à 1 (certain)",
    svg: (
      <svg viewBox="0 0 360 150" className="w-full">
        <line x1="40" y1="90" x2="320" y2="90" stroke={INK} strokeWidth="2.5" />
        {/* graduations */}
        <line x1="40" y1="80" x2="40" y2="100" stroke={INK} strokeWidth="2.5" />
        <line x1="180" y1="80" x2="180" y2="100" stroke={INK} strokeWidth="2.5" />
        <line x1="320" y1="80" x2="320" y2="100" stroke={INK} strokeWidth="2.5" />
        <Num x={40} y={122} fill={RED} size={18}>0</Num>
        <Num x={180} y={122} fill={VIOLET} size={18}>0,5</Num>
        <Num x={320} y={122} fill={GREEN} size={18}>1</Num>
        <Label x={12} y={142} fill={RED}>impossible</Label>
        <Label x={135} y={142} fill={VIOLET}>1 chance sur 2</Label>
        <Label x={296} y={142} fill={GREEN}>certain</Label>
        {/* pièce au milieu */}
        <circle cx="180" cy="48" r="20" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.5" />
        <text x="180" y="54" fontSize="15" fontWeight="800" fill={VIOLET} textAnchor="middle" fontFamily="var(--font-baloo), sans-serif">P</text>
        <line x1="180" y1="70" x2="180" y2="78" stroke={VIOLET} strokeWidth="2" />
        <Label x={207} y={45} fill={VIOLET}>pièce : pile ou face</Label>
        {/* extrémités */}
        <Label x={26} y={62} fill={RED}>faire 7</Label>
        <Label x={26} y={78} fill={RED}>avec un dé</Label>
        <Label x={272} y={62} fill={GREEN}>faire de 1 à 6</Label>
        <Label x={272} y={78} fill={GREEN}>avec un dé</Label>
      </svg>
    ),
  },

  /* ====== 5e — 02 priorités : la pyramide des priorités ====== */
  "mx-pyramide-priorites": {
    title: "La pyramide des priorités : ce qu'on calcule en premier",
    svg: (
      <svg viewBox="0 0 360 160" className="w-full">
        {/* étage 1 : parenthèses */}
        <rect x="90" y="14" width="110" height="36" rx="8" fill={RED_TINT} stroke={INK} strokeWidth="2.5" />
        <Num x={145} y={39} fill={RED} size={18}>( … )</Num>
        <Label x={218} y={38} fill={RED}>1. d&apos;abord</Label>
        {/* étage 2 : × et ÷ */}
        <rect x="60" y="60" width="170" height="36" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2.5" />
        <Num x={145} y={85} fill={BLUE} size={18}>× et ÷</Num>
        <Label x={248} y={84} fill={BLUE}>2. ensuite</Label>
        {/* étage 3 : + et − */}
        <rect x="30" y="106" width="230" height="36" rx="8" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <Num x={145} y={131} fill={GREEN} size={18}>+ et −</Num>
        <Label x={278} y={130} fill={GREEN}>3. enfin</Label>
        {/* flèche descendante */}
        <line x1="14" y1="20" x2="14" y2="128" stroke={INK} strokeWidth="2" />
        <path d="M14 138 l-6 -10 h12 z" fill={INK} />
      </svg>
    ),
  },

  /* ====== 5e — 04 fractions produit : 2/3 × 3/4 en aire ====== */
  "mx-fractions-aire": {
    title: "Le produit 2/3 × 3/4 vu comme une aire : 6 carreaux sur 12",
    svg: (
      <svg viewBox="0 0 360 175" className="w-full">
        <g transform="translate(30,15)">
          {/* carreaux : 3 colonnes × 4 lignes */}
          {[0, 1, 2].map((c) =>
            [0, 1, 2, 3].map((r) => (
              <rect
                key={`${c}-${r}`}
                x={c * 60}
                y={r * 30}
                width="60"
                height="30"
                fill={c < 2 && r < 3 ? VIOLET_TINT : c < 2 ? BLUE_TINT : r < 3 ? RED_TINT : "#fff"}
                stroke={INK}
                strokeWidth="1.6"
              />
            ))
          )}
          <rect width="180" height="120" fill="none" stroke={INK} strokeWidth="2.5" />
          {/* codage 2/3 en largeur */}
          <line x1="0" y1="132" x2="120" y2="132" stroke={BLUE} strokeWidth="2.5" />
          <Label x={44} y={152} fill={BLUE}>2/3</Label>
          {/* codage 3/4 en hauteur */}
          <line x1="190" y1="0" x2="190" y2="90" stroke={RED} strokeWidth="2.5" />
          <Label x={198} y={50} fill={RED}>3/4</Label>
        </g>
        <Label x={250} y={50} fill={VIOLET}>partie double :</Label>
        <Label x={250} y={68} fill={VIOLET}>6 carreaux sur 12</Label>
        <Label x={250} y={100}>2/3 × 3/4</Label>
        <Label x={250} y={118}>= 6/12 = 1/2</Label>
      </svg>
    ),
  },

  /* ====== 5e — 05 calcul littéral : la balance x + 3 = 7 ====== */
  "mx-balance-egalite": {
    title: "Une égalité, c'est une balance en équilibre : x + 3 = 7",
    svg: (
      <svg viewBox="0 0 360 175" className="w-full">
        {/* fléau et pivot */}
        <line x1="70" y1="45" x2="290" y2="45" stroke={INK} strokeWidth="3" />
        <polygon points="180,45 166,120 194,120" fill={GREEN_TINT} stroke={INK} strokeWidth="2.5" />
        <line x1="120" y1="120" x2="240" y2="120" stroke={INK} strokeWidth="2.5" />
        {/* plateau gauche */}
        <line x1="70" y1="45" x2="52" y2="82" stroke={INK} strokeWidth="2" />
        <line x1="70" y1="45" x2="88" y2="82" stroke={INK} strokeWidth="2" />
        <line x1="44" y1="82" x2="96" y2="82" stroke={INK} strokeWidth="2.5" />
        <rect x="46" y="56" width="24" height="24" rx="4" fill={VIOLET_TINT} stroke={INK} strokeWidth="2" />
        <Num x={58} y={74} fill={VIOLET} size={15}>x</Num>
        <rect x="72" y="56" width="22" height="24" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <Num x={83} y={74} fill={BLUE} size={15}>3</Num>
        {/* plateau droit */}
        <line x1="290" y1="45" x2="272" y2="82" stroke={INK} strokeWidth="2" />
        <line x1="290" y1="45" x2="308" y2="82" stroke={INK} strokeWidth="2" />
        <line x1="264" y1="82" x2="316" y2="82" stroke={INK} strokeWidth="2.5" />
        <rect x="277" y="56" width="26" height="24" rx="4" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <Num x={290} y={74} fill={GREEN} size={15}>7</Num>
        {/* étiquettes */}
        <Label x={40} y={105} fill={VIOLET}>x + 3</Label>
        <Label x={284} y={105} fill={GREEN}>7</Label>
        <Label x={110} y={26}>en équilibre : les deux côtés sont égaux</Label>
        <Label x={64} y={155}>x + 3 = 7 est vraie quand x = 4, car 4 + 3 = 7.</Label>
      </svg>
    ),
  },

  /* ====== 5e — 06 proportionnalité : coefficient et passage à l'unité ====== */
  "mx-tableau-coefficient": {
    title: "Coefficient = valeur pour une unité : ici, le prix d'un croissant",
    svg: (
      <svg viewBox="0 0 360 155" className="w-full">
        {/* tableau : colonne « 1 » mise en avant */}
        <rect x="16" y="30" width="112" height="40" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="16" y="70" width="112" height="40" fill={BLUE_TINT} stroke={INK} strokeWidth="2" />
        <rect x="128" y="30" width="58" height="40" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <rect x="128" y="70" width="58" height="40" fill={GREEN_TINT} stroke={INK} strokeWidth="2" />
        <rect x="186" y="30" width="58" height="40" fill="#fff" stroke={INK} strokeWidth="2" />
        <rect x="186" y="70" width="58" height="40" fill="#fff" stroke={INK} strokeWidth="2" />
        <rect x="244" y="30" width="58" height="40" fill="#fff" stroke={INK} strokeWidth="2" />
        <rect x="244" y="70" width="58" height="40" fill="#fff" stroke={INK} strokeWidth="2" />
        <Label x={24} y={55}>Croissants</Label>
        <Label x={24} y={95}>Prix (€)</Label>
        <Num x={157} y={58} fill={GREEN} size={18}>1</Num>
        <Num x={215} y={58} size={18}>5</Num>
        <Num x={273} y={58} size={18}>8</Num>
        <Num x={157} y={98} fill={GREEN} size={16}>1,20</Num>
        <Num x={215} y={98} size={16}>6</Num>
        <Num x={273} y={98} size={16}>9,60</Num>
        {/* flèche coefficient */}
        <path d="M312 50 C 340 55, 340 85, 312 90" fill="none" stroke={GREEN} strokeWidth="2.5" />
        <path d="M312 90 l10 -8 l1 10 z" fill={GREEN} />
        <Label x={314} y={40} fill={GREEN}>× 1,20</Label>
        <Label x={16} y={138} fill={GREEN}>Le coefficient 1,20 est le prix pour UN croissant : 8 × 1,20 = 9,60 €.</Label>
      </svg>
    ),
  },

  /* ====== 5e — 07 statistiques : bâtons et moyenne tracée ====== */
  "mx-batons-moyenne": {
    title: "Trois notes et leur moyenne : (10 + 12 + 14) ÷ 3 = 12",
    svg: (
      <svg viewBox="0 0 360 170" className="w-full">
        <line x1="50" y1="140" x2="330" y2="140" stroke={INK} strokeWidth="2.5" />
        <line x1="50" y1="140" x2="50" y2="15" stroke={INK} strokeWidth="2.5" />
        {[
          { x: 85, note: 10, label: "Léa" },
          { x: 155, note: 12, label: "Tom" },
          { x: 225, note: 14, label: "Zoé" },
        ].map((b) => (
          <g key={b.label}>
            <rect x={b.x} y={140 - b.note * 8} width="38" height={b.note * 8} fill={VIOLET_TINT} stroke={VIOLET} strokeWidth="2.5" />
            <Num x={b.x + 19} y={135 - b.note * 8} fill={VIOLET} size={15}>{String(b.note)}</Num>
            <Label x={b.x + 6} y={158}>{b.label}</Label>
          </g>
        ))}
        {/* graduations */}
        {[0, 5, 10].map((v) => (
          <g key={v}>
            <line x1="45" y1={140 - v * 8} x2="55" y2={140 - v * 8} stroke={INK} strokeWidth="2" />
            <Label x={v >= 10 ? 22 : 30} y={145 - v * 8}>{String(v)}</Label>
          </g>
        ))}
        {/* moyenne */}
        <line x1="50" y1="44" x2="290" y2="44" stroke={GREEN} strokeWidth="2.5" strokeDasharray="7 5" />
        <Label x={270} y={34} fill={GREEN}>moyenne = 12</Label>
      </svg>
    ),
  },

  /* ====== 5e — 08 probabilités : roue à secteurs équiprobables ====== */
  "mx-roue-secteurs": {
    title: "Une roue à 10 secteurs égaux : P(rouge) = 3/10",
    svg: (
      <svg viewBox="0 0 360 170" className="w-full">
        <g transform="translate(95,88)">
          {Array.from({ length: 10 }).map((_, i) => {
            const r = 64;
            const a0 = ((i * 36 - 90) * Math.PI) / 180;
            const a1 = (((i + 1) * 36 - 90) * Math.PI) / 180;
            const x0 = Math.cos(a0) * r;
            const y0 = Math.sin(a0) * r;
            const x1 = Math.cos(a1) * r;
            const y1 = Math.sin(a1) * r;
            return (
              <path
                key={i}
                d={`M0 0 L${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1} Z`}
                fill={i < 3 ? RED_TINT : BLUE_TINT}
                stroke={INK}
                strokeWidth="2"
              />
            );
          })}
          <circle r="6" fill={INK} />
          {/* flèche fixe en haut */}
          <polygon points="0,-58 -8,-78 8,-78" fill={GREEN} stroke={INK} strokeWidth="2" />
        </g>
        <Label x={200} y={45} fill={RED}>3 secteurs rouges</Label>
        <Label x={200} y={70} fill={BLUE}>7 secteurs bleus</Label>
        <Label x={200} y={102}>secteurs tous égaux :</Label>
        <Label x={200} y={120}>même chance chacun</Label>
        <Label x={200} y={150} fill={VIOLET}>P(rouge) = 3/10</Label>
      </svg>
    ),
  },
};
