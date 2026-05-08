#!/usr/bin/env bash
# task #30 心情值班室嘴替试金石 — 4 calls 单跑无 retry
# 已套 PM 6 P0 修改 (msg 111ad35d)
set -uo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../mouthpiece-test"
LOG="$SCRIPT_DIR/generation-log.md"
mkdir -p "$OUT_DIR"

# 共用 universal anchor (PM P0-1 必加)
ANCHOR='The sentence is the main subject; the animal is the mouthpiece, not a mascot, not a character showcase.'

# 共用 base style
BASE_STYLE='Vertical 4:5 portrait on warm beige paper background (#F2EAD8) with subtle paper grain. Hand-drawn black ink outline, 4-6px uniform stroke, flat solid color fills (one color per region), NO shading, NO gradient, NO 3D, NO airbrush, NO highlight, NO drop shadow except a tiny soft pool under feet. The drawing should look quick, light, breezy — NOT polished, NOT meticulously rendered, NOT busy. Tone: dry, deadpan, low-pressure, absurd, quiet humor.'

# 共用 negative
BASE_NEG='Negative: NO mascot pose, NO sticker pack, NO chibi, NO kawaii cute. NO heart eyes, NO sparkles, NO blush dots, NO men-gaze cute (no oversized shiny eyes). NO Pixar 3D, NO anime, NO children-book polish, NO airbrush, NO glow. NO speech bubble outline, NO thought bubble outline. NO public-notice / certificate / diagnosis-card / score-chart / personality-quiz aesthetic. NO product banner, NO tag pills, NO category labels. NO complete office scene, NO desk, NO chair back, NO ID badge, NO lanyard. NO TEXT, NO LETTERS, NO NUMBERS, NO Chinese characters, NO English words, NO REJECTED stamp, NO letter shapes, NO logos. NO yellow color block. NO poster template feel — the image should look like a single illustrated moment, not a marketing layout.'

call_once() {
  local slug="$1"; shift
  local body="$*"
  local prompt="$BASE_STYLE $ANCHOR $body $BASE_NEG"
  local payload
  payload=$(jq -nc --arg p "$prompt" '{model:"gpt-image-2", prompt:$p, size:"1024x1280", n:1}')
  local out="$OUT_DIR/mouthpiece-${slug}.png"

  echo "[start] $slug"
  local t0=$(date +%s)
  local resp http
  resp=$(curl -sS --max-time 240 -w "\nHTTP %{http_code}" -X POST "$OPENAI_BASE_URL/images/generations" \
    -H "Authorization: Bearer $OPENAI_API_KEY" -H "Content-Type: application/json" \
    -d "$payload")
  local exit_code=$?
  local elapsed=$(( $(date +%s) - t0 ))

  if [[ $exit_code -ne 0 ]]; then
    echo "[CURL_FAIL] $slug exit=$exit_code"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | mouthpiece-${slug} | task30 | gpt-image-2 (1024x1280) | CURL_FAIL exit=$exit_code | ${elapsed}s |" >> "$LOG"
    return 1
  fi

  local body_part http_code url
  body_part=$(echo "$resp" | sed '$d')
  http_code=$(echo "$resp" | tail -1 | awk '{print $2}')
  url=$(echo "$body_part" | jq -r '.data[0].url // empty' 2>/dev/null || true)

  if [[ "$http_code" != "200" || -z "$url" ]]; then
    echo "[API_FAIL] $slug http=$http_code resp=$(echo "$body_part" | head -c 300)"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | mouthpiece-${slug} | task30 | gpt-image-2 (1024x1280) | API_FAIL http=$http_code $(echo "$body_part" | head -c 200) | ${elapsed}s |" >> "$LOG"
    return 1
  fi

  curl -sS --max-time 180 -o "$out" "$url"
  if [[ ! -s "$out" ]]; then
    echo "[DOWNLOAD_FAIL] $slug url=$url"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | mouthpiece-${slug} | task30 | gpt-image-2 (1024x1280) | DOWNLOAD_FAIL url=$url | ${elapsed}s |" >> "$LOG"
    return 1
  fi

  echo "[ok] $slug -> $out (${elapsed}s)"
  echo "| $(date '+%Y-%m-%d %H:%M:%S') | mouthpiece-${slug} | task30 | gpt-image-2 (1024x1280) | $url | ${elapsed}s |" >> "$LOG"
  return 0
}

# === 1. 嘴硬鹅 ===
# PM P0-2: 警卫帽 optional
call_once stubborn-goose \
"Subject: a chubby grey-and-white domestic goose facing the viewer almost straight-on, but eyes glancing slightly to the side (the giveaway: not full eye contact). One wing pressed earnestly against its own chest (an over-sincere 'I'm telling the truth' gesture). The other wing tucked awkwardly behind its back (the giveaway: hand hidden). An optional tiny tilted navy security cap (#3F5C7A) may sit on its head — small, easy to omit if the composition flows better without. Posture reads as 'trying too hard to look honest.' The goose looks innocent in pose but body language has obvious tells. Composition: goose in lower-right ~35%. Upper-left ~50% kept visually quiet (empty paper, no decoration) for hand-written text overlay added later by frontend."

# === 2. 低电量猫 ===
# PM P0-3: NO dead/sick/injured + 围裙 optional
call_once low-battery-cat \
"Subject: an orange tabby cat lying flat on its side on the paper. Body is totally limp but ALIVE — eyes lazy not lifeless: one eye closed, the other eye half-open and unfocused, off-duty but technically conscious. Tongue tip slightly poking out (a comedic tell, not a sick / dead / injured look). Whiskers droop in different directions in a relaxed cartoon way. One paw splayed forward, the other under the body. The 'no energy' must come ENTIRELY from posture and read as 'lazy and funny', not as 'in pain' or 'unconscious' or 'sick'. An optional tiny low-battery-orange (#E68A3A) work apron may be worn — small, easy to omit if it makes the cat look too professional / costumed. Composition: cat lying horizontally across lower 40%. Upper 50% empty paper for hand-written text overlay. CRITICAL: NO dead, NO sick, NO injured, NO unconscious, NO suffering look — only 'lazy off-duty cat'. NO battery sign, NO charging cable, NO power outlet icon, NO laptop, NO phone, NO low-battery UI element."

# === 3. DDL 仓鼠 ===
# PM P0-4: one tiny blank note slip, 不要像作业纸/试卷
call_once ddl-hamster \
"Subject: a small yellow-brown hamster lying ON ITS BACK, body completely relaxed, both small paws crossed behind its head as a pillow, hind legs casually crossed, eyelids half-droopy. Smaller eyes than a kawaii hamster, flat solid fur (NOT fluffy, NOT detailed strokes, NOT children-book soft). Light dark under-eye circles. Face deadpan, NOT panicked, NOT stressed — the joke is that the hamster is in NO rush at all. Beside the hamster's feet: ONE tiny blank note slip — small, casual, like a discarded scrap of paper, NOT a worksheet, NOT a test paper, NOT a calendar; just a tiny blank slip that says 'I was supposed to write something here.' The hamster is NOT looking at it. Posture reads as 'I will get to it. just not today.' Composition: hamster + tiny slip occupy lower 40%. Upper 50% empty paper for two-tier hand-written text overlay. NO red rectangular block, NO calendar with date markings, NO clock, NO chewed pen, NO collapsing paper stack, NO desk, NO chair, NO urgency cues. NO 'worksheet' / 'exam paper' / 'task list' associations."

# === 4. 后台羊驼 ===
# PM P0-5: playful messy scribbles, not horror/panic/mental-health poster
call_once backstage-alpaca \
"Subject: a tall cream-white long-neck alpaca wearing thin grey on-ear headphones (#5C6A75). The alpaca stands rigidly upright in the front plane, body slightly stiff, neck perfectly vertical, head gently tilted forward, face deadpan polite small smile, tiny dot eyes, lips lightly closed but soft-smiling. Front pose reads as 'fine, all good, perfectly composed.' BEHIND and AROUND the alpaca's head, in the upper-right area: a PLAYFUL messy scribble field — light tangled black ink doodles, looping squiggles, casual zig-zags, a few small spirals — drawn with a sense of dry humor, NOT horror, NOT panic, NOT mental-health poster crisis, NOT existential dread. The scribbles read as 'inner head clutter visualized as a doodle', the kind a coworker would casually sketch during a meeting. Light, comedic, slightly absurd. NOT a real computer screen, NOT 3 panels with red lamps, NOT software warning icons, NOT any device. Composition: alpaca in center-lower 40% facing forward. Upper-right ~30% filled with playful scribble field. Reserve two empty text-overlay zones: directly below the alpaca's neck for one short line; within the scribble field for one short line. NO computer monitor, NO screen frame, NO red lamps inside square frames, NO software UI, NO 3-panel setup."

echo "=== task #30 mouthpiece test 4 calls done ==="
