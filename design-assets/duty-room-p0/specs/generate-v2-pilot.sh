#!/usr/bin/env bash
# v2 风格调校：comic strip dry humor / one-frame gag / 工位偷拍
# 先出 2 个角色 master sheet 作为对照，验证方向
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BASE="$SCRIPT_DIR/.."
LOG="$SCRIPT_DIR/generation-log.md"
mkdir -p "$BASE/v2-pilot"

V2_STYLE='Single-frame newspaper comic strip panel, dry deadpan slacker-office one-frame gag. Style reference: simple black-line newspaper comic strip (NOT polished illustration, NOT children book art, NOT kawaii sticker, NOT AI-perfect rendering). Crude confident black ink line (uniform 5-7px), warm beige newsprint paper background (#F2EAD8) with visible paper grain, FLAT SOLID color fills with NO shading and NO gradient (one flat color per region, like screen-tone-free comic), slightly imperfect strokes, hand-drawn feel. NO airbrush, NO highlights, NO 3D, NO depth-of-field, NO drop shadows except a single small soft pool under feet. The drawing should look quick and confident, NOT meticulously rendered. Composition: 3/4 candid angle as if catching a coworker mid-act. The joke is in the situation and props, NOT in cuteness or detail level. Tone: low-pressure, dry, absurd, deadpan. ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO LOGOS in the image.'

call_image() {
  local out="$1"; local size="$2"; local body="$3"
  local prompt="$V2_STYLE $body"
  local payload
  payload=$(jq -nc --arg p "$prompt" --arg s "$size" '{model:"gpt-image-2", prompt:$p, size:$s, n:1}')
  for attempt in 1 2 3; do
    local t0=$(date +%s)
    local resp
    resp=$(curl -sS --max-time 240 -X POST "$OPENAI_BASE_URL/images/generations" \
      -H "Authorization: Bearer $OPENAI_API_KEY" -H "Content-Type: application/json" \
      -d "$payload") || { sleep 5; continue; }
    local elapsed=$(( $(date +%s) - t0 ))
    local url
    url=$(echo "$resp" | jq -r '.data[0].url // empty' 2>/dev/null || true)
    if [[ -z "$url" ]]; then
      echo "[err parse] $out attempt $attempt: $(echo "$resp" | head -c 200)"
      sleep 5; continue
    fi
    curl -sS --max-time 120 -o "$out" "$url"
    echo "[ok] $out: ${elapsed}s"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | $(basename "$out" .png) | v2 | gpt-image-2 ($size) | $url | ${elapsed}s |" >> "$LOG"
    return 0
  done
  echo "[FAIL] $out after 3 attempts"
  return 1
}

# v2 pilot 1：嘴硬鹅 — 工位偷拍 + 梗道具
call_image "$BASE/v2-pilot/v2-stubborn-goose-pilot.png" "1024x1024" \
"Subject: a chubby grey-and-white domestic goose office worker as the 'Denial Officer'. CAUGHT-IN-THE-ACT moment: the goose has just slapped a red REJECTED-style ink stamp shape onto a small paper labeled with a tiny suspicious-looking smudge (no actual letters); now stiffened mid-motion, beak frozen pointed away in classic 'wasn't me' direction, one wing still holding the stamp, the other wing trying to casually cover an existing identical red stamp on the desk. A small piece of beige tape is half-stuck across the goose's beak (a gag prop, like trying to physically tape its mouth shut to stop further denial). Wearing the navy security cap. Composition: 3/4 candid angle from above-right, as if a coworker just walked in. The desk has a stack of papers, a clipboard, and an upside-down ID badge dangling. The whole scene reads as 'one panel of a Sunday newspaper comic about a coworker who just got busted'. Shadow soft. No text."

# v2 pilot 2：低电量猫 — 工位偷拍 + 梗道具
call_image "$BASE/v2-pilot/v2-low-battery-cat-pilot.png" "1024x1024" \
"Subject: an orange tabby cat office worker as the 'Battery Manager'. CAUGHT-IN-THE-ACT moment: the cat was holding up a small flat sign shaped like a battery icon (a gag prop, like a 'CLOSED FOR THE DAY' placard but battery-shaped, no text on it) — but its paw has just gone limp, the sign is sliding sideways out of its paw, and the cat itself is melting forward onto the desk, eyes already half-closed, one whisker drooping more than the other. A teal charging cable trails behind, plugged into thin air. A paper coffee cup lies tipped over near the keyboard, a tiny puddle of coffee untouched. Wearing a low-battery-orange work apron. Composition: 3/4 candid angle, as if a coworker just walked in seconds too late to catch the sign. The whole scene reads as 'one panel of a Sunday newspaper comic about a coworker who has officially clocked out spiritually'. Shadow soft. No text."
