// vNext result-page variants config — final, sourced from SoT v2 §6 (2026-05-12 22:15+22:17 DavidC rewrite).
// 6 scenes × 3 roles = 18 result_text variants.
// "换个说法" 在同一 (sceneId, roleId) 内 round-robin; 每组合目前仅 1 条,
// Lucy 扩量后会有 v2/v3 variant.

import type { ResultVariant, SceneId, RoleId } from '../data/types';
import { SCENES } from './scenes.config';

interface VariantSpec {
  sceneId: SceneId;
  roleId: RoleId;
  text: string;
}

const SOT_VARIANTS: VariantSpec[] = [
  // S1 想把话轻轻带过
  { sceneId: 'S1', roleId: 'A', text: '没事，刚才沙子里进眼睛了。' },
  { sceneId: 'S1', roleId: 'B', text: '对不起，您拨叫的用户今日说话额度已用完。' },
  { sceneId: 'S1', roleId: 'D', text: '先别急，我得换个脑子答。' },
  // S2 消息看见了，但现在接不住
  { sceneId: 'S2', roleId: 'B', text: '消息看到了，今天回不动了。' },
  { sceneId: 'S2', roleId: 'A', text: '在打字了，真的，进度条 1%。' },
  { sceneId: 'S2', roleId: 'E', text: '这瓜有点烫嘴，容我细品。' },
  // S3 任务在那，但人还没启动
  { sceneId: 'S3', roleId: 'C', text: '文件夹已建好' },
  { sceneId: 'S3', roleId: 'D', text: '后续这件事还得看这件事的后续。' },
  { sceneId: 'S3', roleId: 'E', text: '事情的发展就像我的银行卡余额，一点动静都没有。' },
  // S4 校园日常突然离谱
  { sceneId: 'S4', roleId: 'D', text: '形而上学，不行退学。' },
  { sceneId: 'S4', roleId: 'E', text: '今天我眼界大开。' },
  { sceneId: 'S4', roleId: 'C', text: '太离谱了，我先躺下消化消化。' },
  // S5 现在不想被拉进互动
  { sceneId: 'S5', roleId: 'B', text: '已下线，勿cue' },
  { sceneId: 'S5', roleId: 'A', text: '我正好有点事...' },
  { sceneId: 'S5', roleId: 'E', text: '前排出售瓜子矿泉水，你们尽情输出。' },
  // S6 这事离谱，但不想亲自开怼
  { sceneId: 'S6', roleId: 'E', text: '啊对对对！' }, // DavidC 22:59 S6·E 例外注脚
  { sceneId: 'S6', roleId: 'C', text: '没什么是睡一觉解决不了的，如果有那就睡个回笼觉。' },
  { sceneId: 'S6', roleId: 'D', text: '反正情况就是这么个情况。' },
];

export const VARIANTS: readonly ResultVariant[] = SOT_VARIANTS.map((s) => ({
  sceneId: s.sceneId,
  roleId: s.roleId,
  variantId: `${s.sceneId}-${s.roleId}-v1`,
  resultText: s.text,
}));

export function defaultVariantOf(sceneId: SceneId, roleId: RoleId): ResultVariant | undefined {
  return VARIANTS.find((v) => v.sceneId === sceneId && v.roleId === roleId);
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

// Sanity check exposed for tests / qa: 18 组合都覆盖.
export const EXPECTED_COMBOS = SCENES.flatMap((s) => s.rolePool.map((r) => `${s.id}-${r}`));
