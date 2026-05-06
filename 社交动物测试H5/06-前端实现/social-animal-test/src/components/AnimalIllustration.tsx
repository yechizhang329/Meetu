import type { AnimalType } from '../data/types';

/**
 * AnimalIllustration
 * P0 shipped with 4 differentiated SVGs. P0.5 adds high-frequency / high-share
 * animals so the result cards no longer feel like temporary placeholders.
 *
 * Per PRD §13.4 and Phoebe2 spec §5 — placeholder pattern is acceptable for
 * P0. Follow-up design task will replace placeholders with full line-art set.
 */

interface Props {
  type: AnimalType;
  size?: number;
  primary: string;
  accent: string;
}

const STROKE = '#2b2b2b';

export function AnimalIllustration({ type, size = 140, primary, accent }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 150"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {RENDERERS[type]?.({ primary, accent }) ?? (
        <PlaceholderAnimal primary={primary} accent={accent} label={INITIAL[type]} />
      )}
    </svg>
  );
}

const INITIAL: Record<AnimalType, string> = {
  power_cat: '猫',
  warm_dog: '犬',
  calm_capybara: '豚',
  corner_mouse: '鼠',
  vibe_monkey: '猴',
  prep_hamster: '仓',
  border_collie: '牧',
  meme_fox: '狐',
  show_peacock: '雀',
  empathy_otter: '獭',
  border_hedgehog: '猬',
  recharge_panda: '猫',
  night_owl: '鹰',
  lastminute_pigeon: '鸽',
  bullet_alpaca: '驼',
  social_butterfly: '蝶',
};

function PlaceholderAnimal({
  primary,
  accent,
  label,
}: {
  primary: string;
  accent: string;
  label: string;
}) {
  return (
    <g>
      <rect x="14" y="20" width="152" height="110" rx="22" fill={accent} stroke={STROKE} strokeWidth="4" />
      <circle cx="90" cy="72" r="38" fill={primary} stroke={STROKE} strokeWidth="4" />
      <text
        x="90"
        y="82"
        textAnchor="middle"
        fill="#fff8ea"
        fontSize="34"
        fontWeight="900"
        fontFamily="-apple-system, PingFang SC, sans-serif"
      >
        {label}
      </text>
      <circle cx="60" cy="120" r="5" fill={STROKE} />
      <circle cx="90" cy="120" r="5" fill={STROKE} />
      <circle cx="120" cy="120" r="5" fill={STROKE} />
    </g>
  );
}

const cat = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* body */}
    <ellipse cx="90" cy="98" rx="48" ry="32" fill={primary} />
    {/* head */}
    <circle cx="90" cy="56" r="30" fill={primary} />
    {/* ears */}
    <path d="M66 36 L72 22 L82 38 Z" fill={primary} />
    <path d="M114 36 L108 22 L98 38 Z" fill={primary} />
    {/* eyes – closed sleepy */}
    <path d="M76 58 q4 -4 10 0" />
    <path d="M94 58 q4 -4 10 0" />
    {/* nose + whiskers */}
    <path d="M90 66 l-2 4 l4 0 z" fill={STROKE} />
    <path d="M72 70 L60 70" />
    <path d="M108 70 L120 70" />
    {/* battery tail */}
    <rect x="130" y="92" width="30" height="14" rx="3" fill={accent} />
    <rect x="160" y="96" width="5" height="6" fill={accent} />
    <line x1="136" y1="99" x2="154" y2="99" stroke={STROKE} strokeWidth="3" />
    {/* Zz */}
    <text x="30" y="32" fill={STROKE} fontSize="18" fontWeight="800" stroke="none">
      Zz
    </text>
  </g>
);

const monkey = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* body */}
    <ellipse cx="90" cy="100" rx="40" ry="28" fill={primary} />
    {/* face */}
    <circle cx="90" cy="58" r="28" fill={primary} />
    <ellipse cx="90" cy="64" rx="18" ry="14" fill={accent} />
    {/* ears */}
    <circle cx="62" cy="52" r="8" fill={primary} />
    <circle cx="118" cy="52" r="8" fill={primary} />
    {/* eyes excited */}
    <path d="M78 54 l4 -4" />
    <path d="M82 54 l-4 -4" />
    <path d="M98 54 l4 -4" />
    <path d="M102 54 l-4 -4" />
    {/* smile */}
    <path d="M80 70 q10 8 20 0" />
    {/* arm raised with mic / banana */}
    <path d="M130 82 q12 -8 26 -16" />
    <path d="M152 58 q4 -6 10 -4 q6 2 4 10 q-2 6 -10 6" fill={accent} />
    {/* spark lines */}
    <path d="M160 36 l4 -8" />
    <path d="M170 50 l8 -2" />
    <path d="M156 50 l-2 -8" />
  </g>
);

const hedgehog = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* body */}
    <ellipse cx="92" cy="96" rx="52" ry="32" fill={primary} />
    {/* spikes — bunch of triangles */}
    {[40, 56, 72, 88, 104, 120, 136].map((x) => (
      <path key={x} d={`M${x} 68 L${x + 8} 52 L${x + 16} 68 Z`} fill={accent} />
    ))}
    {/* face */}
    <ellipse cx="52" cy="100" rx="20" ry="18" fill={accent} />
    <circle cx="42" cy="98" r="3" fill={STROKE} />
    <circle cx="56" cy="102" r="3" fill={STROKE} />
    <path d="M40 110 l-4 2" />
    {/* boundary sign */}
    <rect x="138" y="34" width="36" height="26" fill="#fff" />
    <text x="156" y="52" textAnchor="middle" fontSize="14" fontWeight="900" fill={STROKE} stroke="none">
      界
    </text>
    <line x1="150" y1="60" x2="150" y2="80" />
  </g>
);

const butterfly = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* wings */}
    <path d="M90 78 Q40 40 30 80 Q36 116 80 98 Z" fill={primary} />
    <path d="M90 78 Q140 40 150 80 Q144 116 100 98 Z" fill={accent} />
    <circle cx="55" cy="72" r="6" fill={accent} />
    <circle cx="125" cy="72" r="6" fill={primary} />
    <circle cx="52" cy="94" r="4" fill="#fff" />
    <circle cx="128" cy="94" r="4" fill="#fff" />
    {/* body */}
    <path d="M90 50 L90 118" strokeWidth="7" />
    {/* antennae */}
    <path d="M90 50 q-6 -10 -14 -12" />
    <path d="M90 50 q6 -10 14 -12" />
    {/* dotted path — connection */}
    <path d="M10 125 q35 -10 60 0 q25 10 60 0 q30 -10 55 0" strokeDasharray="2 6" />
  </g>
);

const warmDog = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* eager body + wagging tail */}
    <ellipse cx="90" cy="99" rx="43" ry="28" fill={primary} />
    <path d="M128 94 q20 -24 34 -6 q-16 -2 -26 18" fill={accent} />
    {/* head */}
    <circle cx="80" cy="58" r="29" fill={primary} />
    <path d="M56 46 q-14 10 -8 27 q16 0 20 -18" fill={accent} />
    <path d="M102 42 q16 6 15 24 q-15 4 -21 -12" fill={accent} />
    {/* friendly face */}
    <circle cx="70" cy="58" r="3" fill={STROKE} />
    <circle cx="90" cy="58" r="3" fill={STROKE} />
    <path d="M78 67 q8 8 18 0" />
    <path d="M80 63 l-3 4 l6 0 z" fill={STROKE} />
    {/* helping paw / invitation note */}
    <path d="M56 98 q-22 2 -32 18" />
    <rect x="16" y="112" width="34" height="22" rx="5" fill={accent} />
    <path d="M25 123 h16" strokeWidth="3" />
    <path d="M32 116 v14" strokeWidth="3" />
  </g>
);

const capybara = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* flat, stable lounge body */}
    <path d="M32 101 q10 -34 58 -38 q52 -4 64 30 q6 18 -14 27 H48 q-22 0 -16 -19 Z" fill={primary} />
    <path d="M42 78 q-14 4 -18 18" />
    {/* calm face */}
    <circle cx="56" cy="82" r="3" fill={STROKE} />
    <path d="M69 87 q8 5 16 0" />
    <path d="M72 75 q10 -5 20 0" />
    {/* cup and tiny steam: third-place but not cafe-ad */}
    <rect x="122" y="48" width="30" height="26" rx="6" fill={accent} />
    <path d="M152 56 q12 5 0 14" />
    <path d="M130 39 q-6 -8 2 -14" strokeWidth="3" />
    <path d="M143 39 q-6 -8 2 -14" strokeWidth="3" />
    {/* grounded line */}
    <path d="M26 126 H152" />
  </g>
);

const cornerMouse = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* visible corner: the mouse is present but not center-stage */}
    <path d="M28 28 V126 H126" strokeDasharray="8 8" />
    <ellipse cx="82" cy="96" rx="34" ry="24" fill={primary} />
    <circle cx="60" cy="74" r="22" fill={primary} />
    <circle cx="44" cy="58" r="10" fill={accent} />
    <circle cx="70" cy="56" r="9" fill={accent} />
    <circle cx="54" cy="75" r="3" fill={STROKE} />
    <path d="M64 83 q8 5 15 0" />
    {/* draft bubble / unsent reply */}
    <rect x="112" y="46" width="46" height="30" rx="9" fill={accent} />
    <circle cx="126" cy="61" r="3" fill={STROKE} />
    <circle cx="138" cy="61" r="3" fill={STROKE} />
    <circle cx="150" cy="61" r="3" fill={STROKE} />
    {/* tail curls back into the corner */}
    <path d="M112 100 q32 8 42 -12 q6 -14 -8 -18" />
  </g>
);

const prepHamster = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="88" cy="94" rx="42" ry="33" fill={primary} />
    <circle cx="70" cy="58" r="25" fill={primary} />
    <circle cx="53" cy="42" r="9" fill={accent} />
    <circle cx="88" cy="42" r="9" fill={accent} />
    <circle cx="62" cy="58" r="3" fill={STROKE} />
    <circle cx="78" cy="58" r="3" fill={STROKE} />
    <path d="M68 68 q8 5 16 0" />
    {/* checklist / SOP card */}
    <rect x="104" y="42" width="48" height="64" rx="8" fill="#fff8ea" />
    <path d="M116 58 l5 5 l10 -12" strokeWidth="4" />
    <path d="M116 76 h22" strokeWidth="4" />
    <path d="M116 91 h18" strokeWidth="4" />
    {/* tiny backpack */}
    <path d="M36 84 q-16 8 -14 28 q16 10 30 -2" fill={accent} />
  </g>
);

const memeFox = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* sharp fox head */}
    <path d="M90 32 L126 58 L114 92 H66 L54 58 Z" fill={primary} />
    <path d="M66 48 L56 24 L82 40" fill={accent} />
    <path d="M114 48 L124 24 L98 40" fill={accent} />
    <path d="M75 62 q7 -5 14 0" />
    <path d="M105 62 q-7 -5 -14 0" />
    <path d="M84 76 q8 7 18 0" />
    {/* tail becomes a question mark / punchline hook */}
    <path d="M116 92 q42 2 42 30 q0 18 -24 14 q12 -8 8 -18 q-4 -11 -24 -12" fill={accent} />
    {/* speech card: a thrown meme */}
    <rect x="18" y="92" width="52" height="34" rx="10" fill="#fff8ea" />
    <path d="M30 110 h24" strokeWidth="4" />
    <path d="M44 100 v20" strokeWidth="4" />
    <path d="M70 102 q10 -2 18 -10" />
  </g>
);

const empathyOtter = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M48 104 q8 -44 48 -50 q36 -4 50 28 q10 26 -16 42 q-26 16 -64 2 q-20 -8 -18 -22 Z" fill={primary} />
    <circle cx="84" cy="54" r="26" fill={primary} />
    <circle cx="68" cy="42" r="8" fill={accent} />
    <circle cx="100" cy="42" r="8" fill={accent} />
    <circle cx="76" cy="55" r="3" fill={STROKE} />
    <circle cx="94" cy="55" r="3" fill={STROKE} />
    <path d="M82 66 q8 6 16 0" />
    {/* tissue / rescue step */}
    <rect x="106" y="82" width="44" height="26" rx="6" fill={accent} />
    <path d="M118 82 q8 -18 20 0" fill="#fff8ea" />
    <path d="M102 90 q-14 4 -22 16" />
    {/* gentle water line */}
    <path d="M22 130 q18 -8 36 0 q18 8 36 0 q18 -8 36 0 q18 8 32 0" strokeDasharray="3 8" />
  </g>
);

const rechargePanda = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="90" cy="58" r="32" fill="#fff8ea" />
    <circle cx="65" cy="34" r="12" fill={STROKE} />
    <circle cx="115" cy="34" r="12" fill={STROKE} />
    <ellipse cx="78" cy="58" rx="9" ry="12" fill={STROKE} />
    <ellipse cx="102" cy="58" rx="9" ry="12" fill={STROKE} />
    <circle cx="78" cy="57" r="2" fill="#fff8ea" />
    <circle cx="102" cy="57" r="2" fill="#fff8ea" />
    <path d="M86 72 q8 5 16 0" />
    <ellipse cx="90" cy="105" rx="44" ry="30" fill={primary} />
    <rect x="122" y="80" width="34" height="18" rx="4" fill={accent} />
    <rect x="156" y="85" width="5" height="8" fill={accent} />
    <path d="M132 89 h14" strokeWidth="4" />
    <path d="M40 106 q22 20 50 20 q28 0 50 -20" strokeDasharray="7 7" />
  </g>
);


const showPeacock = ({ primary, accent }: { primary: string; accent: string }) => (
  <g fill="none" stroke={STROKE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* compact fan: expressive without turning into a luxury badge */}
    <path d="M90 82 q-48 -8 -58 -44 q30 8 48 32" fill={accent} />
    <path d="M90 82 q0 -48 0 -62 q20 26 10 62" fill={primary} />
    <path d="M90 82 q48 -8 58 -44 q-30 8 -48 32" fill={accent} />
    {[52, 74, 90, 106, 128].map((x) => (
      <circle key={x} cx={x} cy={48 + Math.abs(90 - x) / 5} r="5" fill="#fff8ea" />
    ))}
    {/* body in front of fan */}
    <ellipse cx="90" cy="102" rx="25" ry="34" fill={primary} />
    <circle cx="90" cy="62" r="19" fill={primary} />
    <path d="M80 58 q5 -4 10 0" />
    <path d="M96 58 q5 -4 10 0" />
    <path d="M88 70 q8 6 16 0" />
    <path d="M88 42 q-8 -13 -16 -16" />
    <path d="M92 42 q8 -13 16 -16" />
    <circle cx="72" cy="26" r="4" fill={accent} />
    <circle cx="108" cy="26" r="4" fill={accent} />
    {/* little spotlight line */}
    <path d="M32 126 H148" strokeDasharray="5 8" />
  </g>
);

const RENDERERS: Partial<
  Record<AnimalType, (opts: { primary: string; accent: string }) => React.JSX.Element>
> = {
  power_cat: cat,
  warm_dog: warmDog,
  calm_capybara: capybara,
  corner_mouse: cornerMouse,
  vibe_monkey: monkey,
  prep_hamster: prepHamster,
  meme_fox: memeFox,
  show_peacock: showPeacock,
  empathy_otter: empathyOtter,
  border_hedgehog: hedgehog,
  recharge_panda: rechargePanda,
  social_butterfly: butterfly,
};
