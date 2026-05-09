// Build-time guard: fail vite build if any internal/placeholder strings leaked into the bundle.
//
// Source: PRD v1.0 §6.3 + §8.4 + tech-selection-v1.md §5.1
// Hard rule: 导出图不能有 placeholder / 内部 ID / 技术 tag。
//
// 防线 1/3：build-time 阻断（防线 2/3 = export-time canExport，防线 3/3 = render-time visibleTags）

import type { Plugin } from 'vite';

interface ScanFinding {
  file: string;
  match: string;
  line?: number;
}

const BAD_PATTERNS: { name: string; pattern: RegExp }[] = [
  { name: 'PLACEHOLDER literal', pattern: /__PLACEHOLDER_/g },
  { name: 'tag placeholder', pattern: /__tag_[a-z_0-9]+__/g },
  { name: 'lorem fallback', pattern: /lorem ipsum/gi },
  { name: 'TODO_LINE', pattern: /TODO_LINE\b/g },
];

export default function prdGuardPlugin(): Plugin {
  return {
    name: 'duty-room-prd-guard',
    apply: 'build',
    generateBundle(_options, bundle) {
      const findings: ScanFinding[] = [];

      for (const [fileName, asset] of Object.entries(bundle)) {
        // Only scan JS/CSS text assets
        if (!/\.(js|mjs|css)$/.test(fileName)) continue;
        const source =
          'code' in asset
            ? (asset as { code: string }).code
            : 'source' in asset
            ? String((asset as { source: string | Uint8Array }).source)
            : '';
        if (!source) continue;

        for (const { name, pattern } of BAD_PATTERNS) {
          let m: RegExpExecArray | null;
          // Reset stateful global regex
          pattern.lastIndex = 0;
          while ((m = pattern.exec(source)) !== null) {
            findings.push({
              file: fileName,
              match: `${name}: "${m[0]}"`,
            });
          }
        }
      }

      if (findings.length > 0) {
        const lines = findings
          .slice(0, 30)
          .map((f) => `  ✗ ${f.file} — ${f.match}`)
          .join('\n');
        const more =
          findings.length > 30 ? `\n  …and ${findings.length - 30} more` : '';
        this.error(
          `\n[prd-guard] BUILD BLOCKED — placeholder / internal-ID strings leaked into bundle:\n${lines}${more}\n\nFix the source data files before building. See tech-selection-v1.md §5.\n`,
        );
      }
    },
  };
}
