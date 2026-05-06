import type { AnimalType } from '../data/types';

/**
 * AnimalIllustration
 * P0: 4 differentiated SVGs for the hero animals (power_cat / vibe_monkey /
 * border_hedgehog / social_butterfly). The other 12 use a styled placeholder
 * that keeps the animal's themeColor + initial letter mark.
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

const RENDERERS: Partial<
  Record<AnimalType, (opts: { primary: string; accent: string }) => React.JSX.Element>
> = {
  power_cat: cat,
  vibe_monkey: monkey,
  border_hedgehog: hedgehog,
  social_butterfly: butterfly,
};
