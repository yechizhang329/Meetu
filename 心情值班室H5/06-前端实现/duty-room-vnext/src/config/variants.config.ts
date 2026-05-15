// vNext result-page variants config — 54 条完整版 (2026-05-13 Lucy 扩量 v2).
// 源文件: Meetu/产品文档/2026-05-13-心情值班室-result-text-variants-扩量-v2.md
// 18 条 default (v2 baseline, DavidC 22:15+22:17 重写) + 36 条新增 variants.
// 每 (sceneId, roleId) 组合 3 条 variants, "换个说法" round-robin.

import type { ResultVariant, SceneId, RoleId } from '../data/types';
import { SCENES } from './scenes.config';

interface VariantSpec {
  sceneId: SceneId;
  roleId: RoleId;
  tier: 'default' | 'variant_2' | 'variant_3';
  text: string;
}

const SOT_VARIANTS: VariantSpec[] = [
  // S1 想把话轻轻带过
  { sceneId: 'S1', roleId: 'A', tier: 'default', text: '没事，刚才沙子里进眼睛了。' },
  { sceneId: 'S1', roleId: 'A', tier: 'variant_2', text: '挺好的，就是灯有点晃。' },
  { sceneId: 'S1', roleId: 'A', tier: 'variant_3', text: '没哭，是水喝多了。' },
  { sceneId: 'S1', roleId: 'B', tier: 'default', text: '对不起，您拨叫的用户今日说话额度已用完。' },
  { sceneId: 'S1', roleId: 'B', tier: 'variant_2', text: '在，但不在线。' },
  { sceneId: 'S1', roleId: 'B', tier: 'variant_3', text: '信号弱，之后回复。' },
  { sceneId: 'S1', roleId: 'D', tier: 'default', text: '先别急，我得换个脑子答。' },
  { sceneId: 'S1', roleId: 'D', tier: 'variant_2', text: '系统升级中，请稍后。' },
  { sceneId: 'S1', roleId: 'D', tier: 'variant_3', text: '这事先别急，我得换个频道。' },
  // S2 消息看见了，但现在接不住
  { sceneId: 'S2', roleId: 'B', tier: 'default', text: '消息看到了，今天回不动了。' },
  { sceneId: 'S2', roleId: 'B', tier: 'variant_2', text: '已读，不回。' },
  { sceneId: 'S2', roleId: 'B', tier: 'variant_3', text: '低能量待机，明天再说。' },
  { sceneId: 'S2', roleId: 'A', tier: 'default', text: '在打字了，真的，进度条 1%。' },
  { sceneId: 'S2', roleId: 'A', tier: 'variant_2', text: '看到了，手机有点卡。' },
  { sceneId: 'S2', roleId: 'A', tier: 'variant_3', text: '马上回，就是还没想好怎么说。' },
  { sceneId: 'S2', roleId: 'E', tier: 'default', text: '看到了，我先想想怎么说比较合适。' },
  { sceneId: 'S2', roleId: 'E', tier: 'variant_2', text: '收到，我心里有数。' },
  { sceneId: 'S2', roleId: 'E', tier: 'variant_3', text: '这事有点微妙，容我细品。' },
  // S3 任务在那，但人还没启动
  // 2026-05-15 PM 调整: S3·C default 与 master quote "文件夹已建好" 同屏重复, 把 default 与 variant_2 互换 (Lucy ack).
  { sceneId: 'S3', roleId: 'C', tier: 'default', text: '在写了，标题想好了。' },
  { sceneId: 'S3', roleId: 'C', tier: 'variant_2', text: '文件夹已建好' },
  { sceneId: 'S3', roleId: 'C', tier: 'variant_3', text: '明天一定，今天先研究一下。' },
  { sceneId: 'S3', roleId: 'D', tier: 'default', text: '后续这件事还得看这件事的后续。' },
  { sceneId: 'S3', roleId: 'D', tier: 'variant_2', text: '要是这事能解决，那应该就能解决了。' },
  { sceneId: 'S3', roleId: 'D', tier: 'variant_3', text: '我先整一下，整完再说。' },
  { sceneId: 'S3', roleId: 'E', tier: 'default', text: '挺好的，就是还没什么进展。' },
  { sceneId: 'S3', roleId: 'E', tier: 'variant_2', text: '可以，这事我先按下不表。' },
  { sceneId: 'S3', roleId: 'E', tier: 'variant_3', text: '行，我都懂，先不展开。' },
  // S4 校园日常突然离谱
  { sceneId: 'S4', roleId: 'D', tier: 'default', text: '形而上学，不行退学。' },
  { sceneId: 'S4', roleId: 'D', tier: 'variant_2', text: '这题超纲了，我先掰扯掰扯。' },
  { sceneId: 'S4', roleId: 'D', tier: 'variant_3', text: '这事得掰扯掰扯，我先整理一下逻辑。' },
  { sceneId: 'S4', roleId: 'E', tier: 'default', text: '挺好的，我学到了。' },
  { sceneId: 'S4', roleId: 'E', tier: 'variant_2', text: '挺有意思的，我先不评价了。' },
  { sceneId: 'S4', roleId: 'E', tier: 'variant_3', text: '行吧，这事先这样吧。' },
  { sceneId: 'S4', roleId: 'C', tier: 'default', text: '太离谱了，我先躺下消化消化。' },
  { sceneId: 'S4', roleId: 'C', tier: 'variant_2', text: '这事有点超出我理解范围了。' },
  { sceneId: 'S4', roleId: 'C', tier: 'variant_3', text: '别急，我先缓一下，等会再说。' },
  // S5 现在不想被拉进互动
  { sceneId: 'S5', roleId: 'B', tier: 'default', text: '已下线，勿cue' },
  { sceneId: 'S5', roleId: 'B', tier: 'variant_2', text: '状态：隐身，今天不接入。' },
  { sceneId: 'S5', roleId: 'B', tier: 'variant_3', text: '今天没电，明天再充。' },
  { sceneId: 'S5', roleId: 'A', tier: 'default', text: '我正好有点事...' },
  { sceneId: 'S5', roleId: 'A', tier: 'variant_2', text: '你们玩，不用等我。' },
  { sceneId: 'S5', roleId: 'A', tier: 'variant_3', text: '我下次一定，今天先这样。' },
  { sceneId: 'S5', roleId: 'E', tier: 'default', text: '你们聊，我先看看。' },
  { sceneId: 'S5', roleId: 'E', tier: 'variant_2', text: '听您的，下次叫我。' },
  { sceneId: 'S5', roleId: 'E', tier: 'variant_3', text: '你们玩开心，不用等我。' },
  // S6 这事离谱，但不想亲自开怼
  { sceneId: 'S6', roleId: 'E', tier: 'default', text: '啊对对对！' },
  { sceneId: 'S6', roleId: 'E', tier: 'variant_2', text: '可以，您说得都对。' },
  { sceneId: 'S6', roleId: 'E', tier: 'variant_3', text: '可以，我都懂。' },
  { sceneId: 'S6', roleId: 'C', tier: 'default', text: '没什么是睡一觉解决不了的，如果有那就睡个回笼觉。' },
  { sceneId: 'S6', roleId: 'C', tier: 'variant_2', text: '有点离谱，我先躺着想想。' },
  { sceneId: 'S6', roleId: 'C', tier: 'variant_3', text: '等我灵感来了再说。' },
  { sceneId: 'S6', roleId: 'D', tier: 'default', text: '反正情况就是这么个情况。' },
  { sceneId: 'S6', roleId: 'D', tier: 'variant_2', text: '这事得这么看，我先研究研究。' },
  { sceneId: 'S6', roleId: 'D', tier: 'variant_3', text: '但凡我有点本事，也不至于没本事。' },
];

export const VARIANTS: readonly ResultVariant[] = SOT_VARIANTS.map((s) => ({
  sceneId: s.sceneId,
  roleId: s.roleId,
  variantId: `${s.sceneId}-${s.roleId}-${s.tier}`,
  resultText: s.text,
}));

export function defaultVariantOf(sceneId: SceneId, roleId: RoleId): ResultVariant | undefined {
  return VARIANTS.find((v) => v.sceneId === sceneId && v.roleId === roleId && v.variantId.endsWith('-default'));
}

export function nextVariantOf(sceneId: SceneId, roleId: RoleId, currentVariantId: string): ResultVariant | undefined {
  const pool = VARIANTS.filter((v) => v.sceneId === sceneId && v.roleId === roleId);
  if (pool.length === 0) return undefined;
  // 每组合目前仅 1 条, round-robin 退化为返回同一条 (UI 应显示 "暂无更多变体" 提示).
  // Lucy 扩量后 round-robin 自动起作用.
  const idx = pool.findIndex((v) => v.variantId === currentVariantId);
  return pool[(idx + 1) % pool.length] ?? pool[0];
}

/** 该 scene+role 组合下可用的 variant 总数 (UI 用于决定是否显示 "换个说法" CTA). */
export function variantCountOf(sceneId: SceneId, roleId: RoleId): number {
  return VARIANTS.filter((v) => v.sceneId === sceneId && v.roleId === roleId).length;
}

/** 当前 variant 在 (sceneId, roleId) pool 中的 0-based 索引. -1 表示未找到. */
export function variantIndexOf(sceneId: SceneId, roleId: RoleId, variantId: string): number {
  const pool = VARIANTS.filter((v) => v.sceneId === sceneId && v.roleId === roleId);
  return pool.findIndex((v) => v.variantId === variantId);
}

// Sanity check exposed for tests / qa: 18 组合都覆盖.
export const EXPECTED_COMBOS = SCENES.flatMap((s) => s.rolePool.map((r) => `${s.id}-${r}`));
