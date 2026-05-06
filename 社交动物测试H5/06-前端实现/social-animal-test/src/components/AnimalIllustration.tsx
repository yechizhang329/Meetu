import type { AnimalType } from '../data/types';

// 16 PNGs cropped from the contact sheet at
// `Meetu/社交动物测试H5/03-视觉设计/微信图片_20260506213706_54_64.png`
// (see scripts/crop-contact-sheet.ts). Vite imports as URLs so they
// hash + cache normally.
import powerCatPng from '../assets/animals/power_cat.png';
import warmDogPng from '../assets/animals/warm_dog.png';
import calmCapybaraPng from '../assets/animals/calm_capybara.png';
import cornerMousePng from '../assets/animals/corner_mouse.png';
import vibeMonkeyPng from '../assets/animals/vibe_monkey.png';
import prepHamsterPng from '../assets/animals/prep_hamster.png';
import borderColliePng from '../assets/animals/border_collie.png';
import memeFoxPng from '../assets/animals/meme_fox.png';
import showPeacockPng from '../assets/animals/show_peacock.png';
import empathyOtterPng from '../assets/animals/empathy_otter.png';
import borderHedgehogPng from '../assets/animals/border_hedgehog.png';
import rechargePandaPng from '../assets/animals/recharge_panda.png';
import nightOwlPng from '../assets/animals/night_owl.png';
import lastminutePigeonPng from '../assets/animals/lastminute_pigeon.png';
import bulletAlpacaPng from '../assets/animals/bullet_alpaca.png';
import socialButterflyPng from '../assets/animals/social_butterfly.png';

const ASSETS: Record<AnimalType, string> = {
  power_cat: powerCatPng,
  warm_dog: warmDogPng,
  calm_capybara: calmCapybaraPng,
  corner_mouse: cornerMousePng,
  vibe_monkey: vibeMonkeyPng,
  prep_hamster: prepHamsterPng,
  border_collie: borderColliePng,
  meme_fox: memeFoxPng,
  show_peacock: showPeacockPng,
  empathy_otter: empathyOtterPng,
  border_hedgehog: borderHedgehogPng,
  recharge_panda: rechargePandaPng,
  night_owl: nightOwlPng,
  lastminute_pigeon: lastminutePigeonPng,
  bullet_alpaca: bulletAlpacaPng,
  social_butterfly: socialButterflyPng,
};

const NAME_BY_ID: Record<AnimalType, string> = {
  power_cat: '省电猫',
  warm_dog: '热心犬',
  calm_capybara: '稳定水豚',
  corner_mouse: '角落鼠',
  vibe_monkey: '整活猴',
  prep_hamster: '攻略仓鼠',
  border_collie: '控场边牧',
  meme_fox: '接梗狐',
  show_peacock: '开屏孔雀',
  empathy_otter: '共情海獭',
  border_hedgehog: '边界刺猬',
  recharge_panda: '回血熊猫',
  night_owl: '夜航猫头鹰',
  lastminute_pigeon: '临门鸽',
  bullet_alpaca: '弹幕羊驼',
  social_butterfly: '社交蝴蝶',
};

interface Props {
  type: AnimalType;
  size?: number;
  /** Background color of the surrounding container — used as fallback solid bg
   *  while PNG decodes, so there's no white flash. */
  primary?: string;
}

/**
 * AnimalIllustration
 * Renders a 4×4 contact-sheet crop. The PNG already includes its own
 * background color (sampled in `_colors.json`); the parent container should
 * use the matching `themeColor` from results.ts so there is no edge seam.
 */
export function AnimalIllustration({ type, size = 140, primary }: Props) {
  return (
    <img
      src={ASSETS[type]}
      width={size}
      height={size}
      alt={NAME_BY_ID[type]}
      loading="eager"
      decoding="async"
      style={{
        display: 'block',
        width: size,
        height: size,
        objectFit: 'cover',
        background: primary ?? 'transparent',
        borderRadius: 'inherit',
      }}
    />
  );
}
