import type { Tone, ToneOption } from './types';

// PRD v0.8 §7.3 — 4 套语气滤镜，作为后处理改写规则。
// Lucy 出 baseText 时不带 tone，工程在 result 阶段按用户选择的 tone 改写。

export const TONES: ToneOption[] = [
  { id: 'stubborn',       label: '别说我，我不认' },
  { id: 'lazy',           label: '算了，就这样吧' },
  { id: 'polite_dnd',     label: '客气一点，但别来烦我' },
  { id: 'pretend_normal', label: '看起来正常一点' },
];

export type ToneFilter = (text: string) => string;

const ENDPUNCTS = ['。', '！', '？', '!', '?'];

function stripTrailing(s: string): string {
  return s.replace(/[。！？!.,?]+$/, '');
}

const FILTERS: Record<Tone, ToneFilter> = {
  // 嘴硬：去掉过度解释 + 加 "罢了 / 只是 / 刚好"。
  stubborn: (text) => {
    const stripped = stripTrailing(text);
    // 只在没有 "刚好/罢了/只是" 时尾加；保持轻
    if (/(刚好|罢了|只是)/.test(stripped)) return stripped + '。';
    return stripped + '罢了。';
  },

  // 摆烂：句尾更短，加 "算了 / 就这样 / 随便吧"。
  lazy: (text) => {
    const stripped = stripTrailing(text);
    return stripped + '，算了。';
  },

  // 礼貌勿扰：更完整、更克制；去掉感叹/省略号，让语气平。
  polite_dnd: (text) => {
    const noSuffix = stripTrailing(text);
    return noSuffix + '，谢谢。';
  },

  // 假装正常：增加 "表面 / 看起来 / 其实" 反差。
  pretend_normal: (text) => {
    const stripped = stripTrailing(text);
    // 用前缀反差："表面正常，其实……"
    return `表面正常。其实${stripped}。`;
  },
};

export function applyToneFilter(text: string, tone: Tone): string {
  const filter = FILTERS[tone];
  if (!filter) return text;
  return filter(text);
}

// Suppress unused import warning when the constants are referenced elsewhere only:
void ENDPUNCTS;
