// Source-attribution helper — same shape as social-animal-test/src/utils/source.ts
// Used to swap intro page top-tag based on traffic origin.
// PRD v0.8 §15.2 — "?source=xhs" / "?source=wechat_mp" / "?source=friend_share".

export type Source = 'wechat_mp' | 'xhs' | 'friend_share' | 'default';

const ALIASES: Record<string, Source> = {
  wechat_mp: 'wechat_mp',
  weixin_mp: 'wechat_mp',
  mp: 'wechat_mp',
  xhs: 'xhs',
  xiaohongshu: 'xhs',
  rednote: 'xhs',
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
