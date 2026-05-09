// 心情值班室 v1.0 — ResultPage
// Result preview MUST directly embed the Canvas final PNG (Fiona 21:36 hard
// acceptance: "结果预览直接用 Canvas PNG + 保存/换一句主动作"). We do NOT
// re-render the image as DOM — we mount the MouthpieceCanvas and either
// read its toDataURL() into an <img> or show the canvas inline.

import { useMemo, useRef, useState } from 'react';
import { MouthpieceCanvas, type MouthpieceCanvasHandle } from '../components/MouthpieceCanvas';
import { ROLES } from '../data/roles';
import { LINES } from '../data/lines-v1.1';
import type { MouthpieceLine, SceneMeta } from '../data/types';
import { canExport } from '../canvas/export-guard';

interface Props {
  artBaseUrl: string;
  scene: SceneMeta;
  onBackToSelect: () => void;
  onBackToHome: () => void;
}

function linesForScene(scene: SceneMeta): MouthpieceLine[] {
  // Flagship pool: scene's primary role, tier A only (5/5 self-check)
  return LINES.filter(
    (l) => l.sceneId === scene.id && l.roleId === scene.primary && l.tier === 'A' && !l.excludedFromFlagship,
  );
}

export function ResultPage({ artBaseUrl, scene, onBackToSelect, onBackToHome }: Props) {
  const pool = useMemo(() => {
    const primary = linesForScene(scene);
    // Fallback: if no primary-role lines, allow any A-tier line in this scene
    if (primary.length > 0) return primary;
    return LINES.filter((l) => l.sceneId === scene.id && l.tier === 'A' && !l.excludedFromFlagship);
  }, [scene]);

  const [idx, setIdx] = useState(0);
  const [seed, setSeed] = useState(1);
  const [exportState, setExportState] = useState<'idle' | 'busy' | 'blocked' | 'ok'>('idle');
  const [errMsg, setErrMsg] = useState('');
  const [longPressImg, setLongPressImg] = useState<string | null>(null);
  const canvasRef = useRef<MouthpieceCanvasHandle | null>(null);

  // UA hint for iOS / WeChat webview: `<a download>` is unreliable there, so
  // we show the PNG as an <img> with a "长按保存到相册" tip instead.
  const needsLongPressFallback = useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    return /MicroMessenger|iPhone|iPad|iPod/i.test(ua);
  }, []);

  if (pool.length === 0) {
    return (
      <div className="result-page">
        <div className="result-empty">
          这个场景还在补充值班句子，试试别的。
          <button className="linklike" type="button" onClick={onBackToSelect}>
            换个场景
          </button>
        </div>
      </div>
    );
  }

  const line = pool[idx % pool.length];
  const role = ROLES[line.roleId];

  const onSwitchLine = () => {
    const next = (idx + 1) % pool.length;
    setIdx(next);
    setSeed((s) => s + 1);
    setExportState('idle');
    setErrMsg('');
  };

  const onSave = async () => {
    setExportState('busy');
    const gate = canExport(line.text);
    if (!gate.ok) {
      setExportState('blocked');
      setErrMsg(gate.reason ?? '');
      return;
    }
    try {
      const blob = await canvasRef.current!.toBlob();
      // iOS Safari + WeChat 内置浏览器：<a download> 不触发原生下载。
      // fallback：把 PNG 以 <img> 展示，提示用户长按保存到相册。
      if (needsLongPressFallback) {
        const reader = new FileReader();
        reader.onload = () => {
          setLongPressImg(reader.result as string);
          setExportState('ok');
        };
        reader.readAsDataURL(blob);
        return;
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mouthpiece-${line.lineId}.png`;
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
        <div className="result-title">{role.name}替你说</div>
        <div className="result-sub">{scene.userPick}</div>
      </div>

      <div className="result-stage">
        <div className="result-canvas-wrap">
          <MouthpieceCanvas
            ref={canvasRef}
            line={line}
            role={role}
            artBaseUrl={artBaseUrl}
            seed={seed}
          />
        </div>
      </div>

      <div className="result-actions">
        <button type="button" className="result-save" onClick={onSave} disabled={exportState === 'busy'}>
          {exportState === 'busy'
            ? '导出中…'
            : exportState === 'blocked'
              ? `保存失败: ${errMsg || '导出被拒'}`
              : exportState === 'ok'
                ? '已保存'
                : '保存这张'}
        </button>
        <button type="button" className="result-switch" onClick={onSwitchLine}>
          换一句
        </button>
      </div>

      <div className="result-footer">
        <span>{idx + 1} / {pool.length}</span>
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
            <button type="button" className="longpress-close" onClick={() => setLongPressImg(null)}>
              关闭
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
