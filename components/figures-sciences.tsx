/**
 * Catalogue de figures — sciences 6e (SVT / physique-chimie / technologie).
 * Même style que components/figures.tsx (traits encre #2a2440, tints des domaines).
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

/** Petit rayon de soleil (étoile de traits) autour d'un centre. */
function Rays({ cx, cy, r, n = 8, len = 8, color = ORANGE }: { cx: number; cy: number; r: number; n?: number; len?: number; color?: string }) {
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

const PLANETES: { n: string; o: number; s: number; f: string; up: boolean }[] = [
  { n: "Mercure", o: 50, s: 4, f: GREY_TINT, up: true },
  { n: "Vénus", o: 80, s: 5.5, f: ORANGE_TINT, up: false },
  { n: "Terre", o: 110, s: 6, f: BLUE_TINT, up: true },
  { n: "Mars", o: 142, s: 5, f: RED_TINT, up: false },
  { n: "Jupiter", o: 176, s: 12, f: ORANGE_TINT, up: true },
  { n: "Saturne", o: 212, s: 10, f: VIOLET_TINT, up: false },
  { n: "Uranus", o: 250, s: 8, f: GREEN_TINT, up: true },
  { n: "Neptune", o: 290, s: 8, f: BLUE_TINT, up: false },
];

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  "sci-systeme-solaire": {
    title: "Le système solaire : le Soleil et les 8 planètes dans l'ordre",
    svg: (
      <svg viewBox="0 0 360 205" className="w-full">
        {/* orbites */}
        {PLANETES.map((p) => {
          const dx = Math.sqrt(p.o * p.o - 42 * 42);
          return (
            <path
              key={`o-${p.n}`}
              d={`M${(10 + dx).toFixed(1)} 63 A${p.o} ${p.o} 0 0 1 ${(10 + dx).toFixed(1)} 147`}
              fill="none"
              stroke={INK}
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.7"
            />
          );
        })}
        {/* Soleil */}
        <Rays cx={10} cy={105} r={26} n={10} len={7} />
        <circle cx={10} cy={105} r={26} fill={ORANGE_TINT} stroke={ORANGE} strokeWidth="2.5" />
        <Tag x={2} y={174} fill={ORANGE}>Soleil</Tag>
        <Tag x={180} y={20} anchor="middle">{"le Soleil est une étoile : les 8 planètes tournent autour de lui"}</Tag>
        {/* planètes */}
        {PLANETES.map((p, i) => (
          <g key={p.n}>
            {p.n === "Saturne" && (
              <ellipse
                cx={10 + p.o}
                cy={105}
                rx={p.s + 7}
                ry={3.5}
                fill="none"
                stroke={VIOLET}
                strokeWidth="1.8"
                transform={`rotate(-18 ${10 + p.o} 105)`}
              />
            )}
            <circle cx={10 + p.o} cy={105} r={p.s} fill={p.f} stroke={INK} strokeWidth="1.8" />
            <Tag x={10 + p.o} y={p.up ? 54 : 172} anchor="middle">
              {`${i + 1}. ${p.n}`}
            </Tag>
            <line
              x1={10 + p.o}
              y1={p.up ? 60 : 156}
              x2={10 + p.o}
              y2={p.up ? 105 - p.s - 3 : 105 + p.s + 3}
              stroke={INK}
              strokeWidth="1"
              opacity="0.45"
            />
          </g>
        ))}
        {/* familles */}
        <line x1="40" y1="188" x2="160" y2="188" stroke={RED} strokeWidth="2" />
        <Tag x={100} y={202} anchor="middle" fill={RED}>4 planètes rocheuses</Tag>
        <line x1="176" y1="188" x2="320" y2="188" stroke={VIOLET} strokeWidth="2" />
        <Tag x={248} y={202} anchor="middle" fill={VIOLET}>4 planètes gazeuses</Tag>
      </svg>
    ),
  },

  "sci-saisons": {
    title: "Les saisons : l'axe de la Terre est incliné",
    svg: (
      <svg viewBox="0 0 360 200" className="w-full">
        {/* orbite */}
        <ellipse cx="180" cy="100" rx="142" ry="56" fill="none" stroke={INK} strokeWidth="1.3" strokeDasharray="5 4" opacity="0.7" />
        <Tag x={180} y={20} anchor="middle">{"l'axe de la Terre est toujours incliné de 23°"}</Tag>
        {/* Soleil */}
        <Rays cx={180} cy={100} r={22} n={12} len={7} />
        <circle cx="180" cy="100" r="22" fill={ORANGE_TINT} stroke={ORANGE} strokeWidth="2.5" />
        <Tag x={180} y={104} anchor="middle" fill={ORANGE}>Soleil</Tag>
        {/* rayons vers la Terre de gauche (été nord) */}
        {[76, 100, 124].map((y) => (
          <g key={`gl-${y}`}>
            <line x1="152" y1={y} x2="80" y2={y} stroke={ORANGE} strokeWidth="1.6" />
            <Head x={76} y={y} a={180} fill={ORANGE} />
          </g>
        ))}
        {[76, 100, 124].map((y) => (
          <g key={`gr-${y}`}>
            <line x1="208" y1={y} x2="280" y2={y} stroke={ORANGE} strokeWidth="1.6" />
            <Head x={284} y={y} fill={ORANGE} />
          </g>
        ))}
        {/* Terre : été au nord (juin) */}
        <g>
          <circle cx="38" cy="100" r="26" fill={BLUE_TINT} stroke={INK} strokeWidth="2.2" />
          <line x1="24" y1="133" x2="52" y2="67" stroke={RED} strokeWidth="2.2" />
          <line x1="12" y1="106" x2="64" y2="94" stroke={INK} strokeWidth="1.4" strokeDasharray="4 3" />
          <Tag x={56} y={62} fill={RED}>N</Tag>
        </g>
        {/* Terre : hiver au nord (décembre) */}
        <g>
          <circle cx="322" cy="100" r="26" fill={BLUE_TINT} stroke={INK} strokeWidth="2.2" />
          <line x1="308" y1="133" x2="336" y2="67" stroke={RED} strokeWidth="2.2" />
          <line x1="296" y1="106" x2="348" y2="94" stroke={INK} strokeWidth="1.4" strokeDasharray="4 3" />
          <Tag x={340} y={62} fill={RED}>N</Tag>
        </g>
        {/* légendes */}
        <Tag x={4} y={166} fill={GREEN}>{"Juin : le nord est penché"}</Tag>
        <Tag x={4} y={182} fill={GREEN}>{"vers le Soleil, donc été au nord"}</Tag>
        <Tag x={356} y={166} anchor="end" fill={BLUE}>{"Décembre : le nord est penché"}</Tag>
        <Tag x={356} y={182} anchor="end" fill={BLUE}>{"loin du Soleil, donc hiver au nord"}</Tag>
      </svg>
    ),
  },

  "sci-phases-lune": {
    title: "Les phases de la Lune",
    svg: (
      <svg viewBox="0 0 360 250" className="w-full">
        {/* Soleil */}
        <Rays cx={26} cy={120} r={20} n={10} len={6} />
        <circle cx="26" cy="120" r="20" fill={ORANGE_TINT} stroke={ORANGE} strokeWidth="2.5" />
        <Tag x={26} y={86} anchor="middle" fill={ORANGE}>Soleil</Tag>
        {[90, 120, 150].map((y) => (
          <g key={y}>
            <line x1="52" y1={y} x2="96" y2={y} stroke={ORANGE} strokeWidth="1.6" />
            <Head x={100} y={y} fill={ORANGE} />
          </g>
        ))}
        {/* orbite de la Lune */}
        <circle cx="200" cy="120" r="72" fill="none" stroke={INK} strokeWidth="1.3" strokeDasharray="5 4" opacity="0.7" />
        <Head x={149} y={69} a={-45} />
        <Head x={251} y={171} a={135} />
        {/* Terre */}
        <circle cx="200" cy="120" r="25" fill={BLUE_TINT} stroke={INK} strokeWidth="2.4" />
        <Tag x={200} y={124} anchor="middle">Terre</Tag>
        {/* les 4 positions de la Lune : moitié gauche éclairée (côté Soleil) */}
        {[
          { x: 128, y: 120 },
          { x: 200, y: 48 },
          { x: 272, y: 120 },
          { x: 200, y: 192 },
        ].map((m) => (
          <g key={`${m.x}-${m.y}`}>
            <circle cx={m.x} cy={m.y} r="14" fill="#ffffff" stroke={INK} strokeWidth="2" />
            <path d={`M${m.x} ${m.y - 14} A14 14 0 0 1 ${m.x} ${m.y + 14} Z`} fill={INK} opacity="0.82" />
          </g>
        ))}
        <Tag x={200} y={22} anchor="middle">Premier quartier</Tag>
        <Tag x={110} y={178} anchor="middle">Nouvelle lune</Tag>
        <Tag x={300} y={170} anchor="middle">Pleine lune</Tag>
        <Tag x={200} y={238} anchor="middle">Dernier quartier</Tag>
        <Tag x={6} y={206} fill={VIOLET}>{"la Lune ne brille pas :"}</Tag>
        <Tag x={6} y={222} fill={VIOLET}>{"elle renvoie la lumière"}</Tag>
        <Tag x={6} y={238} fill={VIOLET}>{"du Soleil"}</Tag>
      </svg>
    ),
  },

  "sci-etats-eau": {
    title: "Les trois états de l'eau et les changements d'état",
    svg: (
      <svg viewBox="0 0 360 205" className="w-full">
        {/* boîtes */}
        <rect x="15" y="80" width="80" height="70" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2.4" />
        <rect x="140" y="80" width="80" height="70" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2.4" />
        <rect x="265" y="80" width="80" height="70" rx="8" fill={BLUE_TINT} stroke={INK} strokeWidth="2.4" />
        <Tag x={55} y={72} anchor="middle">solide (glace)</Tag>
        <Tag x={180} y={72} anchor="middle">liquide (eau)</Tag>
        <Tag x={305} y={72} anchor="middle">gaz (vapeur)</Tag>
        {/* solide : rangées bien ordonnées */}
        {[98, 117, 136].map((y) =>
          [32, 55, 78].map((x) => <circle key={`s${x}-${y}`} cx={x} cy={y} r="4.5" fill={BLUE} />)
        )}
        {/* liquide : serrées mais en désordre */}
        {[
          [156, 100],
          [175, 96],
          [196, 103],
          [163, 116],
          [184, 118],
          [203, 122],
          [155, 134],
          [176, 137],
          [198, 140],
        ].map(([x, y]) => (
          <circle key={`l${x}-${y}`} cx={x} cy={y} r="4.5" fill={BLUE} />
        ))}
        {/* gaz : peu nombreuses et éloignées */}
        {[
          [280, 96],
          [318, 104],
          [292, 126],
          [330, 138],
        ].map(([x, y]) => (
          <g key={`g${x}-${y}`}>
            <circle cx={x} cy={y} r="4.5" fill={BLUE} />
            <line x1={x + 6} y1={y - 5} x2={x + 12} y2={y - 9} stroke={BLUE} strokeWidth="1.4" />
          </g>
        ))}
        {/* fusion */}
        <path d="M95 92 Q117 30 138 92" fill="none" stroke={RED} strokeWidth="2.2" />
        <Head x={140} y={94} a={72} fill={RED} />
        <Tag x={117} y={44} anchor="middle" fill={RED}>{"fusion (à 0 °C)"}</Tag>
        {/* vaporisation */}
        <path d="M220 92 Q242 30 263 92" fill="none" stroke={RED} strokeWidth="2.2" />
        <Head x={265} y={94} a={72} fill={RED} />
        <Tag x={242} y={44} anchor="middle" fill={RED}>{"vaporisation (à 100 °C)"}</Tag>
        {/* solidification */}
        <path d="M140 138 Q117 200 97 138" fill="none" stroke={GREEN} strokeWidth="2.2" />
        <Head x={95} y={136} a={-119} fill={GREEN} />
        <Tag x={117} y={196} anchor="middle" fill={GREEN}>{"solidification (à 0 °C)"}</Tag>
        {/* liquéfaction */}
        <path d="M265 138 Q242 200 222 138" fill="none" stroke={GREEN} strokeWidth="2.2" />
        <Head x={220} y={136} a={-119} fill={GREEN} />
        <Tag x={242} y={196} anchor="middle" fill={GREEN}>{"liquéfaction (vers 100 °C)"}</Tag>
      </svg>
    ),
  },

  "sci-cycle-eau": {
    title: "Le cycle de l'eau",
    svg: (
      <svg viewBox="0 0 360 215" className="w-full">
        {/* ciel */}
        <rect x="0" y="0" width="360" height="215" rx="10" fill="#f7f9ff" />
        {/* Soleil */}
        <Rays cx={335} cy={26} r={16} n={9} len={6} />
        <circle cx="335" cy="26" r="16" fill={ORANGE_TINT} stroke={ORANGE} strokeWidth="2.4" />
        <Tag x={335} y={68} anchor="middle" fill={ORANGE}>Soleil</Tag>
        {/* nuage */}
        <g>
          <circle cx="110" cy="46" r="18" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
          <circle cx="134" cy="38" r="22" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
          <circle cx="158" cy="47" r="15" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
          <rect x="100" y="46" width="66" height="16" rx="8" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
          <line x1="103" y1="47" x2="163" y2="47" stroke="#ffffff" strokeWidth="4" />
        </g>
        <Tag x={78} y={16}>{"nuage : la vapeur se condense"}</Tag>
        {/* précipitations */}
        {[104, 118, 132, 146, 160].map((x) => (
          <line key={x} x1={x} y1="66" x2={x - 6} y2="90" stroke={BLUE} strokeWidth="2.2" strokeLinecap="round" />
        ))}
        <Tag x={92} y={104} fill={BLUE}>précipitations</Tag>
        {/* montagne + sol */}
        <polygon points="0,205 0,150 56,86 122,140 205,176 205,205" fill={GREEN_TINT} stroke={INK} strokeWidth="2.2" />
        {/* mer */}
        <rect x="205" y="174" width="150" height="31" rx="4" fill={BLUE_TINT} stroke={INK} strokeWidth="2.2" />
        {[
          [216, 186],
          [258, 192],
          [300, 186],
        ].map(([x, y]) => (
          <path key={x} d={`M${x} ${y} q7 -5 14 0 q7 5 14 0`} fill="none" stroke={BLUE} strokeWidth="1.8" />
        ))}
        <Tag x={330} y={200} anchor="end" fill={BLUE}>mer</Tag>
        {/* ruissellement */}
        <path d="M120 146 C 146 156, 168 166, 188 172" fill="none" stroke={BLUE} strokeWidth="2.4" />
        <Head x={192} y={173} a={18} fill={BLUE} />
        <Tag x={118} y={196} fill={GREEN}>ruissellement</Tag>
        {/* évaporation */}
        <path d="M252 168 C 244 132, 220 96, 200 66" fill="none" stroke={RED} strokeWidth="2.4" />
        <Head x={198} y={62} a={-124} fill={RED} />
        <path d="M310 168 C 306 126, 276 84, 244 58" fill="none" stroke={RED} strokeWidth="2.4" />
        <Head x={241} y={56} a={-141} fill={RED} />
        <Tag x={258} y={124} fill={RED}>évaporation</Tag>
        <Tag x={258} y={140} fill={RED}>{"(le Soleil chauffe)"}</Tag>
      </svg>
    ),
  },

  "sci-groupes-emboites": {
    title: "Classer le vivant en groupes emboîtés",
    svg: (
      <svg viewBox="0 0 360 226" className="w-full">
        <rect x="8" y="8" width="344" height="212" rx="18" fill={VIOLET_TINT} stroke={INK} strokeWidth="2.4" />
        <Label x={22} y={32}>Animaux</Label>
        <rect x="24" y="44" width="312" height="142" rx="14" fill={BLUE_TINT} stroke={INK} strokeWidth="2.2" />
        <Tag x={36} y={64}>{"Vertébrés — ont un squelette interne"}</Tag>
        <rect x="42" y="78" width="278" height="70" rx="12" fill={GREEN_TINT} stroke={INK} strokeWidth="2.2" />
        <Tag x={54} y={99}>{"Mammifères — poils, allaitent leurs petits"}</Tag>
        {/* exemples de mammifères */}
        {[
          { x: 54, w: 76, t: "chat" },
          { x: 140, w: 76, t: "chien" },
          { x: 226, w: 84, t: "être humain" },
        ].map((c) => (
          <g key={c.t}>
            <rect x={c.x} y="112" width={c.w} height="28" rx="9" fill="#ffffff" stroke={INK} strokeWidth="1.8" />
            <Tag x={c.x + c.w / 2} y={130} anchor="middle">{c.t}</Tag>
          </g>
        ))}
        {/* vertébrés non mammifères */}
        {[
          { x: 42, w: 128, t: "pigeon (oiseau)" },
          { x: 182, w: 128, t: "truite (poisson)" },
        ].map((c) => (
          <g key={c.t}>
            <rect x={c.x} y="158" width={c.w} height="24" rx="9" fill="#ffffff" stroke={INK} strokeWidth="1.8" />
            <Tag x={c.x + c.w / 2} y={174} anchor="middle">{c.t}</Tag>
          </g>
        ))}
        {/* animaux non vertébrés */}
        {[
          { x: 24, w: 140, t: "papillon (insecte)" },
          { x: 176, w: 160, t: "escargot (mollusque)" },
        ].map((c) => (
          <g key={c.t}>
            <rect x={c.x} y="190" width={c.w} height="24" rx="9" fill="#ffffff" stroke={INK} strokeWidth="1.8" />
            <Tag x={c.x + c.w / 2} y={206} anchor="middle">{c.t}</Tag>
          </g>
        ))}
      </svg>
    ),
  },

  "sci-cycle-vie": {
    title: "Le cycle de vie du papillon",
    svg: (
      <svg viewBox="0 0 360 248" className="w-full">
        {/* flèches du cycle (sens des aiguilles d'une montre) */}
        <path d="M214.5 52.3 A76 76 0 0 1 247.7 85.5" fill="none" stroke={VIOLET} strokeWidth="2.4" />
        <Head x={247.7} y={85.5} a={63} fill={VIOLET} />
        <path d="M247.7 154.5 A76 76 0 0 1 214.5 187.7" fill="none" stroke={VIOLET} strokeWidth="2.4" />
        <Head x={214.5} y={187.7} a={153} fill={VIOLET} />
        <path d="M145.5 187.7 A76 76 0 0 1 112.3 154.5" fill="none" stroke={VIOLET} strokeWidth="2.4" />
        <Head x={112.3} y={154.5} a={243} fill={VIOLET} />
        <path d="M112.3 85.5 A76 76 0 0 1 145.5 52.3" fill="none" stroke={VIOLET} strokeWidth="2.4" />
        <Head x={145.5} y={52.3} a={-27} fill={VIOLET} />
        <Tag x={180} y={114} anchor="middle" fill={VIOLET}>métamorphose</Tag>
        <Tag x={180} y={130} anchor="middle" fill={VIOLET}>complète</Tag>

        {/* 1. les œufs sur une feuille */}
        <circle cx="180" cy="44" r="26" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
        <ellipse cx="180" cy="54" rx="19" ry="6" fill={GREEN_TINT} stroke={INK} strokeWidth="1.8" />
        <ellipse cx="171" cy="44" rx="3.5" ry="4.5" fill={ORANGE_TINT} stroke={INK} strokeWidth="1.4" />
        <ellipse cx="180" cy="41" rx="3.5" ry="4.5" fill={ORANGE_TINT} stroke={INK} strokeWidth="1.4" />
        <ellipse cx="189" cy="44" rx="3.5" ry="4.5" fill={ORANGE_TINT} stroke={INK} strokeWidth="1.4" />
        <Tag x={180} y={14} anchor="middle">{"1. les œufs"}</Tag>

        {/* 2. la chenille */}
        <circle cx="256" cy="120" r="26" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
        {[238, 247, 256, 265, 273].map((x, i) => (
          <circle key={x} cx={x} cy={120} r={i === 4 ? 6.5 : 6} fill={GREEN_TINT} stroke={INK} strokeWidth="1.6" />
        ))}
        <circle cx="276" cy="118" r="1.6" fill={INK} />
        {[241, 250, 259, 268].map((x) => (
          <line key={`p${x}`} x1={x} y1="126" x2={x - 2} y2="131" stroke={INK} strokeWidth="1.4" />
        ))}
        <Tag x={292} y={124}>2. la chenille</Tag>

        {/* 3. la chrysalide */}
        <circle cx="180" cy="196" r="26" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
        <line x1="180" y1="174" x2="180" y2="184" stroke={INK} strokeWidth="1.8" />
        <path d="M180 182 C 191 190, 190 210, 180 216 C 170 210, 169 190, 180 182 Z" fill={ORANGE_TINT} stroke={INK} strokeWidth="1.8" />
        <line x1="172" y1="196" x2="188" y2="196" stroke={INK} strokeWidth="1.2" />
        <line x1="173" y1="204" x2="187" y2="204" stroke={INK} strokeWidth="1.2" />
        <Tag x={180} y={240} anchor="middle">3. la chrysalide</Tag>

        {/* 4. le papillon */}
        <circle cx="104" cy="120" r="26" fill="#ffffff" stroke={INK} strokeWidth="2.2" />
        <ellipse cx="92" cy="113" rx="11" ry="8" transform="rotate(-20 92 113)" fill={VIOLET_TINT} stroke={INK} strokeWidth="1.6" />
        <ellipse cx="116" cy="113" rx="11" ry="8" transform="rotate(20 116 113)" fill={VIOLET_TINT} stroke={INK} strokeWidth="1.6" />
        <ellipse cx="95" cy="128" rx="8" ry="6" transform="rotate(20 95 128)" fill={VIOLET_TINT} stroke={INK} strokeWidth="1.6" />
        <ellipse cx="113" cy="128" rx="8" ry="6" transform="rotate(-20 113 128)" fill={VIOLET_TINT} stroke={INK} strokeWidth="1.6" />
        <ellipse cx="104" cy="120" rx="2.6" ry="11" fill={INK} />
        <line x1="104" y1="110" x2="99" y2="103" stroke={INK} strokeWidth="1.4" />
        <line x1="104" y1="110" x2="109" y2="103" stroke={INK} strokeWidth="1.4" />
        <Tag x={8} y={124}>4. le papillon</Tag>
      </svg>
    ),
  },

  "sci-fleur-graine": {
    title: "De la fleur au fruit et à la graine",
    svg: (
      <svg viewBox="0 0 360 205" className="w-full">
        {/* panneaux */}
        {[6, 98, 190, 282].map((x) => (
          <rect key={x} x={x} y="44" width="72" height="106" rx="12" fill="#fbfbff" stroke={INK} strokeWidth="1.8" />
        ))}
        {/* flèches */}
        {[
          { x1: 80, x2: 94, cx: 88, t: "pollinisation" },
          { x1: 172, x2: 186, cx: 180, t: "le pistil grossit" },
          { x1: 264, x2: 278, cx: 272, t: "il contient" },
        ].map((a) => (
          <g key={a.cx}>
            <line x1={a.x1} y1="95" x2={a.x2} y2="95" stroke={INK} strokeWidth="2.2" />
            <Head x={a.x2 + 2} y={95} />
            <Tag x={a.cx} y={28} anchor="middle" fill={VIOLET}>{a.t}</Tag>
            <line x1={a.cx} y1="34" x2={a.cx} y2="86" stroke={VIOLET} strokeWidth="1.2" strokeDasharray="4 3" />
          </g>
        ))}
        {/* 1. la fleur */}
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse
            key={a}
            cx="42"
            cy="66"
            rx="8"
            ry="14"
            transform={`rotate(${a} 42 80)`}
            fill={RED_TINT}
            stroke={INK}
            strokeWidth="1.6"
          />
        ))}
        <circle cx="42" cy="80" r="7" fill={ORANGE_TINT} stroke={INK} strokeWidth="1.6" />
        <line x1="42" y1="88" x2="42" y2="142" stroke={GREEN} strokeWidth="2.2" />
        <ellipse cx="54" cy="120" rx="11" ry="5" transform="rotate(-20 54 120)" fill={GREEN_TINT} stroke={INK} strokeWidth="1.5" />
        {/* grains de pollen sur la flèche 1 */}
        {[76, 84, 90].map((x, i) => (
          <circle key={x} cx={x} cy={85 - i * 4} r="2.2" fill={ORANGE} />
        ))}
        <Tag x={42} y={168} anchor="middle">1. la fleur</Tag>
        {/* 2. la fleur fécondée : pétales qui tombent, ovaire qui gonfle */}
        <ellipse cx="134" cy="84" rx="12" ry="14" fill={GREEN_TINT} stroke={INK} strokeWidth="1.8" />
        <line x1="134" y1="98" x2="134" y2="142" stroke={GREEN} strokeWidth="2.2" />
        <ellipse cx="112" cy="112" rx="7" ry="3.5" transform="rotate(35 112 112)" fill={RED_TINT} stroke={INK} strokeWidth="1.4" />
        <ellipse cx="158" cy="122" rx="7" ry="3.5" transform="rotate(-30 158 122)" fill={RED_TINT} stroke={INK} strokeWidth="1.4" />
        <ellipse cx="120" cy="66" rx="7" ry="3.5" transform="rotate(-40 120 66)" fill={RED_TINT} stroke={INK} strokeWidth="1.4" />
        <Tag x={134} y={168} anchor="middle">2. fleur fécondée</Tag>
        {/* 3. le fruit (coupe) avec ses graines */}
        <circle cx="226" cy="100" r="26" fill={RED_TINT} stroke={INK} strokeWidth="2.2" />
        <line x1="226" y1="74" x2="226" y2="62" stroke={GREEN} strokeWidth="2.2" />
        <ellipse cx="238" cy="60" rx="9" ry="4" transform="rotate(-20 238 60)" fill={GREEN_TINT} stroke={INK} strokeWidth="1.5" />
        <ellipse cx="219" cy="102" rx="4" ry="6" transform="rotate(-14 219 102)" fill={ORANGE_TINT} stroke={INK} strokeWidth="1.5" />
        <ellipse cx="233" cy="102" rx="4" ry="6" transform="rotate(14 233 102)" fill={ORANGE_TINT} stroke={INK} strokeWidth="1.5" />
        <line x1="226" y1="126" x2="226" y2="142" stroke={GREEN} strokeWidth="2.2" />
        <Tag x={226} y={168} anchor="middle">3. le fruit</Tag>
        {/* 4. la graine puis la germination */}
        <ellipse cx="318" cy="70" rx="13" ry="10" fill={ORANGE_TINT} stroke={INK} strokeWidth="2" />
        <path d="M310 66 q6 5 14 1" fill="none" stroke={INK} strokeWidth="1.3" />
        <line x1="318" y1="84" x2="318" y2="96" stroke={GREEN} strokeWidth="1.6" strokeDasharray="4 3" />
        <Head x={318} y={99} a={90} fill={GREEN} />
        <line x1="318" y1="132" x2="318" y2="110" stroke={GREEN} strokeWidth="2.2" />
        <ellipse cx="308" cy="106" rx="8" ry="4" transform="rotate(-30 308 106)" fill={GREEN_TINT} stroke={INK} strokeWidth="1.5" />
        <ellipse cx="328" cy="106" rx="8" ry="4" transform="rotate(30 328 106)" fill={GREEN_TINT} stroke={INK} strokeWidth="1.5" />
        <line x1="300" y1="132" x2="336" y2="132" stroke={INK} strokeWidth="1.6" />
        {[-8, 0, 8].map((d) => (
          <line key={d} x1="318" y1="132" x2={318 + d} y2="142" stroke={INK} strokeWidth="1.3" />
        ))}
        <Tag x={318} y={168} anchor="middle">4. la graine</Tag>
        <Tag x={180} y={192} anchor="middle" fill={GREEN}>
          {"la graine germe et donne une nouvelle plante"}
        </Tag>
      </svg>
    ),
  },
};
