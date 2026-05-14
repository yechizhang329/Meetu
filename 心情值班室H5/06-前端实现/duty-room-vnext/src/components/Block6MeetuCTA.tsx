// Block 6: 觅遇社导流框 (PRD v2.3 §7 Block 6 + SoT v2 §10.1, Lucy 23:19 final, DavidC 拍板).
// 视觉参考: 社交动物测试结果页底部"不是广告位"板块.
// 点击复制: 微信搜一搜 chip 可点击复制"觅遇社"到剪贴板, 1.5s 反馈.

import { useState } from 'react';

const COPY_FEEDBACK_MS = 1500;

async function copyToClipboard(text: string): Promise<boolean> {
  // 优先 navigator.clipboard (现代浏览器)
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // 降级到 execCommand
    }
  }

  // 降级: document.execCommand('copy') (兼容老 iOS Safari / 微信 webview)
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}

export function Block6MeetuCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard('觅遇社');
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    }
  };

  return (
    <section
      className="vnext-block6"
      data-block="6"
      aria-label="觅遇社导流"
      style={{
        margin: '32px 0 24px',
        padding: '24px 20px 22px',
        background: '#FFF',
        border: '2px solid #222',
        borderRadius: 18,
        position: 'relative',
      }}
    >
      {/* 黄色 chip "不是广告位" */}
      <div
        style={{
          position: 'absolute',
          top: -14,
          left: 18,
          padding: '4px 14px',
          background: '#FFDC5E',
          border: '1.5px solid #222',
          borderRadius: 14,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        不是广告位
      </div>

      {/* 右侧绿色装饰方块 */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -10,
          right: 20,
          width: 22,
          height: 22,
          background: '#B7DCA6',
          border: '1.5px solid #222',
          borderRadius: 6,
          transform: 'rotate(8deg)',
        }}
      />

      <div style={{ fontSize: 17, fontWeight: 700, marginTop: 6, lineHeight: 1.4 }}>
        还想找个能接住的人？
      </div>
      <div style={{ fontSize: 13, opacity: 0.7, marginTop: 6, lineHeight: 1.6 }}>
        看看有没有和你一样心情的朋友。
      </div>

      <button
        onClick={handleCopy}
        style={{
          marginTop: 16,
          padding: '12px 14px',
          background: '#F9F7F3',
          border: '1.5px solid #222',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          width: '100%',
          cursor: 'pointer',
          transition: 'background 150ms ease-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#F0EBE5')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#F9F7F3')}
      >
        <span style={{ fontSize: 16 }}>{copied ? '✅' : '🔍'}</span>
        <span style={{ fontSize: 14, fontWeight: 600 }}>
          {copied ? '已复制 觅遇社' : '微信搜一搜：觅遇社'}
        </span>
      </button>

      <div style={{ fontSize: 11, opacity: 0.55, marginTop: 14, letterSpacing: 0.5 }}>
        Meetu · 让认识新朋友自然一点
      </div>
    </section>
  );
}
