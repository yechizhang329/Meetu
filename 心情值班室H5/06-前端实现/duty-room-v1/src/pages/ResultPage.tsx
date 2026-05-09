// 心情值班室 v1.0 — ResultPage (PRD v1.1)
// PRD v1.1 (Fiona 23:39): scene × character matrix, 32 combos accessible.
//
// Architecture: ResultPage displays Phoebe's pre-rendered receipt PNG for the
// selected scene × character combo. 4-animal tab switcher at the top lets
// the user swap characters within the same scene without leaving the page.
//
// Asset slot strategy (Phoebe 00:00 update): the receipt PNG is the slot —
// when Image2 (refined) ships, drop-in replace the receipts/ folder and no
// code changes are needed.

import { useMemo, useState } from 'react';
import { ROLES, ROLE_IDS } from '../data/roles';
import type { RoleId, SceneMeta } from '../data/types';
import {
  getReceiptImagePath,
  getReceiptDownloadName,
  getSceneData,
  getCharacterData,
} from '../data/slip-data-adapter';

interface Props {
  artBaseUrl: string;
  scene: SceneMeta;
  onBackToSelect: () => void;
  onBackToHome: () => void;
}

export function ResultPage({ artBaseUrl, scene, onBackToSelect, onBackToHome }: Props) {
  // Active character (4-animal switcher per PRD v1.1)
  const [activeRoleId, setActiveRoleId] = useState<RoleId>(scene.primary);
  const [exportState, setExportState] = useState<'idle' | 'busy' | 'blocked' | 'ok'>('idle');
  const [errMsg, setErrMsg] = useState('');
  const [longPressImg, setLongPressImg] = useState<string | null>(null);

  // UA hint for iOS / WeChat webview: <a download> is unreliable there
  const needsLongPressFallback = useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    return /MicroMessenger|iPhone|iPad|iPod/i.test(ua);
  }, []);

  // Scene data from Phoebe's canonical batch-data.json
  const sceneData = useMemo(() => getSceneData(scene.id), [scene.id]);
  const charData = useMemo(() => getCharacterData(activeRoleId), [activeRoleId]);

  // Pre-rendered receipt PNG path for current combo
  const receiptSrc = useMemo(
    () => getReceiptImagePath(artBaseUrl, scene.id, activeRoleId),
    [artBaseUrl, scene.id, activeRoleId],
  );

  const handleRoleChange = (roleId: RoleId) => {
    setActiveRoleId(roleId);
    setExportState('idle');
    setErrMsg('');
  };

  const onSave = async () => {
    setExportState('busy');
    try {
      // Fetch the pre-rendered PNG as blob
      const res = await fetch(receiptSrc);
      if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
      const blob = await res.blob();

      const downloadName = getReceiptDownloadName(scene.id, activeRoleId);

      if (needsLongPressFallback) {
        // iOS/WeChat: show <img> with long-press save tip
        const reader = new FileReader();
        reader.onload = () => {
          setLongPressImg(reader.result as string);
          setExportState('ok');
        };
        reader.readAsDataURL(blob);
        return;
      }

      // Desktop: native download
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = downloadName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setExportState('ok');
    } catch (e) {
      setExportState('blocked');
      setErrMsg(String(e));
    }
  };

  return (
    <div className="result-page">
      <div className="result-top">
        <button type="button" className="scene-back" onClick={onBackToSelect}>
          ← 换个场景
        </button>
        <div className="result-title">{ROLES[activeRoleId].name}替你说</div>
        <div className="result-sub">
          {sceneData.title} · {scene.userPick}
        </div>
      </div>

      <RoleTabs
        activeRoleId={activeRoleId}
        onRoleChange={handleRoleChange}
        artBaseUrl={artBaseUrl}
      />

      <div className="result-stage">
        <div className="result-canvas-wrap">
          <img
            src={receiptSrc}
            alt={`${ROLES[activeRoleId].name} · ${sceneData.title}`}
            className="result-receipt"
            data-scene={scene.id}
            data-role={activeRoleId}
            data-accent={charData.accent}
          />
        </div>
      </div>

      <div className="result-actions">
        <button
          type="button"
          className="result-save"
          onClick={onSave}
          disabled={exportState === 'busy'}
        >
          {exportState === 'busy'
            ? '导出中…'
            : exportState === 'blocked'
              ? `保存失败: ${errMsg || '导出被拒'}`
              : exportState === 'ok'
                ? '已保存'
                : '保存这张'}
        </button>
      </div>

      <div className="result-footer">
        <button type="button" className="linklike" onClick={onBackToHome}>
          回值班室首页
        </button>
      </div>

      {longPressImg ? (
        <div
          className="longpress-overlay"
          onClick={() => setLongPressImg(null)}
          role="button"
          tabIndex={-1}
        >
          <div className="longpress-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="longpress-tip">长按下面图片 → 保存到相册</div>
            <img src={longPressImg} alt="保存嘴替图" />
            <button
              type="button"
              className="longpress-close"
              onClick={() => setLongPressImg(null)}
            >
              关闭
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// ─── 4-animal tab switcher (PRD v1.1 §结果页) ───────────────────────────────
interface RoleTabsProps {
  activeRoleId: RoleId;
  onRoleChange: (id: RoleId) => void;
  artBaseUrl: string;
}

function RoleTabs({ activeRoleId, onRoleChange, artBaseUrl }: RoleTabsProps) {
  return (
    <div className="role-tabs" role="tablist" aria-label="切换动物代班">
      {ROLE_IDS.map((roleId) => {
        const role = ROLES[roleId];
        const isActive = roleId === activeRoleId;
        return (
          <button
            key={roleId}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={isActive ? 'role-tab role-tab-active' : 'role-tab'}
            onClick={() => onRoleChange(roleId)}
          >
            {role.artPath ? (
              <img src={`${artBaseUrl}${role.artPath}`} alt={role.name} />
            ) : (
              <span className="role-tab-fallback">{role.name[0]}</span>
            )}
            <span className="role-tab-name">{role.name}</span>
          </button>
        );
      })}
    </div>
  );
}
