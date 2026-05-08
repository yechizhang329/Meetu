#!/usr/bin/env bash
# Generate 4 master sheets via curl + gpt-image-2
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../master-sheets"
LOG="$SCRIPT_DIR/generation-log.md"
mkdir -p "$OUT_DIR"

STYLE_HEADER='Character master sheet, hand-drawn black ink outline (uniform 6-8px stroke), warm beige paper texture background (#F2EAD8), light paper grain visible, slightly rough, tiny soft shadow under feet only, no rendering, no gradient, no shiny highlights, no anime sparkle, no plastic 3D look, flat colors with limited palette, vintage office stationery aesthetic, tone: low-pressure, absurd, deadpan, quiet humor. Layout: character turnaround sheet with 3 views (front / 3-quarter / side), 3 expression close-ups in a row, 1 prop set callout in a corner, small color swatch row at the bottom. ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO LOGOS in the image.'

gen() {
  local slug="$1"
  local body="$2"
  local prompt="$STYLE_HEADER $body"
  local payload
  payload=$(jq -nc --arg p "$prompt" '{model:"gpt-image-2", prompt:$p, size:"1024x1024", n:1}')
  local t0=$(date +%s)
  local resp
  resp=$(curl -sS --max-time 240 -X POST "$OPENAI_BASE_URL/images/generations" \
    -H "Authorization: Bearer $OPENAI_API_KEY" -H "Content-Type: application/json" \
    -d "$payload")
  local elapsed=$(( $(date +%s) - t0 ))
  local url
  url=$(echo "$resp" | jq -r '.data[0].url // empty')
  if [[ -z "$url" ]]; then
    echo "[err] $slug: $resp"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | $slug | v1 | gpt-image-2 | ERR | $(echo "$resp" | head -c 200) |" >> "$LOG"
    return 1
  fi
  local out="$OUT_DIR/role-${slug}-master-v1.png"
  curl -sS --max-time 120 -o "$out" "$url"
  echo "[ok] $slug: ${elapsed}s -> $out"
  echo "| $(date '+%Y-%m-%d %H:%M:%S') | $slug | v1 | gpt-image-2 | $url | local role-${slug}-master-v1.png, ${elapsed}s |" >> "$LOG"
}

gen stubborn-goose "Subject: a chubby grey-and-white domestic goose office worker, short body, long straight neck, flat orange beak slightly turned away in denial, tiny round black eyes looking sideways, wearing a navy security cap (#3F5C7A) with stiff brim, small navy security shoulder cape, holding a clipboard and a red rubber stamp (#D7563B), posture: wings crossed, neck stiff, refusing to look at viewer. Expressions across the row: arms crossed denial / shrug / glance away. Prop callout: navy security cap, red blank ink stamp shape (no letters), clipboard, ID badge with blank face. Personality: the office Denial Officer, mouth-stubborn but inwardly aware."

gen low-battery-cat "Subject: a short-haired orange tabby cat office worker, round face, round ears, droopy whiskers, slumped body language, eyes half-closed, very low energy posture, wearing a small low-battery-orange (#E68A3A) work apron, holding a small flat battery-shaped sign (no number on it), a teal (#7AB5B5) charging cable trailing on the floor behind the cat. Posture: slouched on a desk corner, head propped on one paw. Expressions across the row: eyes half-closed flat / face-down on desk / slow blink. Prop callout: battery icon sign (blank, no number), coiled charging cable, small office desk lamp, paper coffee cup. Personality: the office Battery Manager, runs on 3% energy."

gen ddl-hamster "Subject: a small yellow-brown hamster office worker, short limbs, round belly, big cheek pouches, wide-open black eyes, clutching a paper calendar page with a big red rectangle (no numbers, just a red block), a paper coffee cup beside it, paper stack collapsing under elbow, small old-school analog alarm clock next to it. Posture: hunched over the desk, both paws gripping the calendar, fur slightly messy. Expressions across the row: wide-eyed staring at calendar / face-palm with both paws / forced focus chewing pen. Prop callout: red-block calendar (no numbers), alarm clock, paper coffee cup, leaning paper stack. Personality: the office Deadline Specialist, always two days late."

gen backstage-alpaca "Subject: a tall cream-white long-haired alpaca office worker, very long neck, deadpan front-facing face with tiny eyes and a flat soft mouth, expression: everything is fine, wearing thin grey on-ear headphones (#5C6A75) and a blank office ID badge on a lanyard, in front of a 3-window monitor on a desk; each monitor screen shows a small red exclamation mark icon (no letters, no UI text — just the red ! shape inside a square). Posture: standing straight, both hooves resting on the desk, neck perfectly vertical. Expressions across the row: blank smile / slow blink / one ear twitch (still smiling). Prop callout: 3-monitor setup with red ! icons, headphones, blank ID badge, paper coffee cup. Personality: the office Front-Desk Normalcy Officer, says yes yes while alerts blink in the back."
