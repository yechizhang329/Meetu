#!/usr/bin/env bash
# task #31 批 1 — 4 角色 contact sheet 6 子（3×2）
# 来源：PRD v1.0 §5.5 + Fiona msg 973a33b5（6 子修订 + 道具不独立 + 4 微修）
# 严格 4 calls，单跑无 retry
set -uo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../contact-sheets"
LOG="$SCRIPT_DIR/generation-log.md"
mkdir -p "$OUT_DIR"

ANCHOR='The sentence is the main subject in the final usage; the animal is the mouthpiece, not a mascot, not a character showcase.'

BASE_STYLE='Single 1024x1024 character contact sheet on warm beige paper background (#F2EAD8) with subtle paper grain. 3-column 2-row grid layout, 6 sub-cells total, each sub-cell ~340x512 pixels. Cells separated by extremely thin 1px black ink hairline (suggesting cell boundaries, not dominating). Hand-drawn black ink outline 4-6px uniform stroke, flat solid color fills (one color per region), NO shading, NO gradient, NO 3D, NO airbrush, NO drop shadow except a tiny soft pool under feet of each animal. The drawing must look quick, light, breezy — NOT polished, NOT meticulously rendered. Tone: dry, deadpan, low-pressure, absurd, quiet humor.'

BASE_NEG='Negative: NO mascot pose, NO sticker pack, NO chibi, NO kawaii cute. NO heart eyes, NO sparkles, NO blush dots, NO men-gaze cute (no oversized shiny eyes). NO Pixar 3D, NO anime, NO children-book polish, NO airbrush, NO glow. NO speech bubble outline, NO thought bubble outline. NO public-notice / certificate / diagnosis-card / score-chart / personality-quiz aesthetic. NO product banner, NO tag pills, NO category labels. NO complete office scene, NO desk full of items, NO chair back, NO ID badge, NO lanyard. NO TEXT, NO LETTERS, NO NUMBERS, NO Chinese characters, NO English words, NO REJECTED stamp, NO letter shapes, NO logos. NO yellow color block. NO poster template, NO grid alignment marks beyond the thin cell hairline. NO dead, NO sick, NO injured look on any animal.'

call_once() {
  local slug="$1"; shift
  local body="$*"
  local prompt="$BASE_STYLE $ANCHOR $body $BASE_NEG"
  local payload
  payload=$(jq -nc --arg p "$prompt" '{model:"gpt-image-2", prompt:$p, size:"1024x1024", n:1}')
  local out="$OUT_DIR/contact-${slug}-v1.png"

  echo "[start] $slug"
  local t0=$(date +%s)
  local resp
  resp=$(curl -sS --max-time 240 -w "\nHTTP %{http_code}" -X POST "$OPENAI_BASE_URL/images/generations" \
    -H "Authorization: Bearer $OPENAI_API_KEY" -H "Content-Type: application/json" \
    -d "$payload")
  local exit_code=$?
  local elapsed=$(( $(date +%s) - t0 ))

  if [[ $exit_code -ne 0 ]]; then
    echo "[CURL_FAIL] $slug exit=$exit_code"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | contact-${slug}-v1 | task31-batch1 | gpt-image-2 (1024x1024 contact 3x2) | CURL_FAIL exit=$exit_code | ${elapsed}s |" >> "$LOG"
    return 1
  fi

  local body_part http_code url
  body_part=$(echo "$resp" | sed '$d')
  http_code=$(echo "$resp" | tail -1 | awk '{print $2}')
  url=$(echo "$body_part" | jq -r '.data[0].url // empty' 2>/dev/null || true)

  if [[ "$http_code" != "200" || -z "$url" ]]; then
    echo "[API_FAIL] $slug http=$http_code resp=$(echo "$body_part" | head -c 300)"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | contact-${slug}-v1 | task31-batch1 | gpt-image-2 | API_FAIL http=$http_code | ${elapsed}s |" >> "$LOG"
    return 1
  fi

  curl -sS --max-time 180 -o "$out" "$url"
  if [[ ! -s "$out" ]]; then
    echo "[DOWNLOAD_FAIL] $slug url=$url"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | contact-${slug}-v1 | task31-batch1 | gpt-image-2 | DOWNLOAD_FAIL url=$url | ${elapsed}s |" >> "$LOG"
    return 1
  fi

  echo "[ok] $slug -> $out (${elapsed}s)"
  echo "| $(date '+%Y-%m-%d %H:%M:%S') | contact-${slug}-v1 | task31-batch1 | gpt-image-2 (1024x1024 contact 3x2) | $url | ${elapsed}s |" >> "$LOG"
  return 0
}

# === 1. 嘴硬鹅 — 6 子（PM Fiona: 弱化帽子岗位）
# 主嘴替姿态 + 3 场景姿态 + 2 表情/半身变化
call_once stubborn-goose \
"6-cell character contact sheet of one chubby grey-and-white domestic goose, all sub-cells of the same goose rendered consistently. The goose may wear a SMALL tilted casual fabric cap (very low-key, NOT a uniform security cap, NOT a stiff brim, totally optional and unobtrusive — if the composition is stronger without a cap, do not draw one). NO security uniform, NO shoulder cape, NO badge, NO armband, NO clipboard, NO stamp, NO ID. The goose's character lives in the body language: too sincere, eyes glancing away, hand tucked behind back. Sub-cells (left-to-right top-row, then bottom-row): (1) MAIN: facing viewer slightly off-axis, one wing pressed earnestly against own chest, other wing tucked behind back, eyes glancing sideways — overly sincere body language; (2) 3/4 turn slightly hunched, shoulders shrunk in tighter, looking very visibly nervous; (3) profile-side, beak partly open mid-sentence, looking off-frame as if denying out loud; (4) almost full back-turn, only half profile visible, body language reads as physically retreating; (5) close-up half-bust: innocent blink expression, pretending nothing happened; (6) close-up half-bust: corner-of-beak slightly downturned, expression of being seen-through and not handling it well."

# === 2. 低电量猫 — 6 子（PM Fiona: 保持 task#30 风格）
call_once low-battery-cat \
"6-cell character contact sheet of one orange tabby cat, all sub-cells consistent. The cat may wear a small low-battery-orange (#E68A3A) work apron or none — pick whichever feels more lived-in, NOT costumed. The cat is alive but completely off-duty: eyes lazy not lifeless, sometimes one open one closed, tongue tip can poke out comedically. NO battery sign, NO charging cable, NO outlet icon, NO laptop, NO low-battery UI element of any kind. Sub-cells: (1) MAIN: lying flat on side (task #30 reference pose), one eye half-open lazy not unfocused, tongue tip slightly out, totally limp; (2) face-down on a desk corner suggested by a thin line, ears flat, body sunken; (3) half-sitting upright but eyes squinting nearly closed, one paw drooping; (4) curled into a ball with back to the viewer, only ear-tips and tail visible, tail tip slightly twitching; (5) close-up half-bust: one eye open lazy, one eye closed, full-body droop; (6) close-up half-bust: both eyes fully closed, mouth a tiny soft line, fully gone."

# === 3. DDL 仓鼠 — 6 子（PM Fiona: 强化仓鼠辨识 + 不要日历/秒表）
call_once ddl-hamster \
"6-cell character contact sheet of one yellow-brown hamster, all sub-cells consistent. CRITICAL HAMSTER RECOGNIZABILITY: visibly puffy cheek pouches (chubby cheeks always slightly bulging), short stocky limbs, round belly, very short or stub tail (NOT a long mouse tail), small rounded ears low on the head — clearly a hamster, NOT a generic small animal. Smaller eyes than a kawaii hamster, light dark under-eye circles, flat solid fur (NOT fluffy strokes, NOT children-book art). Deadpan exhausted face, NOT panicked, NOT stressed — the joke is the hamster has zero urgency. NO calendar, NO red rectangular block, NO clock, NO stopwatch, NO chewed pen, NO paper stack, NO desk, NO chair — keep the visual completely free of any DDL/urgency education-poster props. Sub-cells: (1) MAIN: lying on back, both small paws crossed behind head as a pillow, hind legs casually crossed, eyelids half-droopy, one tiny blank scrap of paper near a foot but the hamster does NOT look at it; (2) lying belly-down on the paper, side of face down, eyes squeezed half shut, tail flicking lazily; (3) seated upright but slumped forward, both paws limp in lap, gazing nowhere; (4) curled in a tight ball, only the bulging cheek pouches visible from the back, denying everything; (5) close-up half-bust: heavy under-eye circles, mouth small flat deadpan; (6) close-up half-bust: cheek pouches slightly more puffed (an excuse-mode look), faint half-smile that says 'I'll get to it eventually'."

# === 4. 后台羊驼 — 6 子（PM Fiona: 乱涂减 25-35% + 礼貌撑住 + 无 UI）
call_once backstage-alpaca \
"6-cell character contact sheet of one tall cream-white long-neck alpaca, all sub-cells consistent. The alpaca wears thin grey on-ear headphones (#5C6A75). The body is rigidly upright in front, neck perfectly vertical, face deadpan polite small smile, tiny dot eyes. The pose reads as 'trying very hard to look composed.' Behind the alpaca's head and shoulder area there is a SMALL playful messy scribble field (light tangled doodle squiggles, a few zig-zags, casual loops) — keep the scribble area small, occupying NO MORE than 15-20% of each sub-cell, definitely NOT exploding around the head. The scribbles must read playful and dry-humor, NOT panic, NOT horror, NOT mental-health crisis. NO computer screen, NO monitor frame, NO 3-panel setup, NO red lamps in squares, NO software UI, NO window frame, NO digital icon. Sub-cells: (1) MAIN: facing forward, polite small smile, headphones on, slight light scribbles offset upper-right (small); (2) 3/4 turn, still smiling but micro-stiffer, slightly more scribbles upper-right (still small); (3) facing forward but corner of mouth dropped 0.3 degree, lips compressed slightly: 'politely holding it in' moment, scribbles same small density; (4) eyes briefly closed (one short exhale moment), tiny scribble cluster pulled slightly closer to head; (5) close-up half-bust: clean polite smile (default expression); (6) close-up half-bust: micro-tightened jaw, smile still in place but lips clearly pressed harder — 'politely holding it together'."

echo "=== task #31 batch 1 contact sheets done ==="
