// src/utils/source.ts
// Parse traffic source from URL query. Used to conditionally tweak the intro
// page language for 公众号 / 小红书 / 朋友分享 traffic without branching the app.

export type Source = 'wechat_mp' | 'xhs' | 'friend_share' | 'default';

const ALIASES: Record<string, Source> = {
  wechat_mp: 'wechat_mp',
  weixin_mp: 'wechat_mp',
  mp: 'wechat_mp',
  公众号: 'wechat_mp',
  xhs: 'xhs',
  xiaohongshu: 'xhs',
  rednote: 'xhs',
  小红书: 'xhs',
  friend: 'friend_share',
  friend_share: 'friend_share',
  share: 'friend_share',
};

export function readSource(): Source {
  if (typeof window === 'undefined') return 'default';
  const params = new URLSearchParams(window.location.search);
  const raw = (params.get('source') || params.get('utm_source') || '').trim().toLowerCase();
  if (!raw) return 'default';
  return ALIASES[raw] ?? 'default';
}
