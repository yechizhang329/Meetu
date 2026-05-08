#!/usr/bin/env bash
# v3.4 试金石：4 calls 真实上限，单次出，无 retry。
# 失败 = surface 给 PM 审，不自动重试。
# 来源：prompt-review-v3.4.md §1 + §2 + §4.1-4.4
set -uo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../share-cards"
LOG="$SCRIPT_DIR/generation-log.md"
mkdir -p "$OUT_DIR"

# === v3.4 style header ===
HEADER='Single-frame illustration of a small on-duty mood animal in a clean campus mood-slip visual language. Visual reference: a paper-note-feel state slip with one memorable little animal acting out today'\''s mood — like a quick note a classmate would screenshot and send to a friend. The animal is a "state stand-in", not an office IP, not a brand mascot. HARD COMPOSITION: Vertical 4:5 portrait, single-frame, no drawn frame border. Candid 3/4 angle, NOT a posed model shot, NOT a turnaround sheet. Character occupies 40-50% of the panel (target ~45%); the rest is calm paper space. One desk corner / one chair edge MAY suggest "at work" minimally; do NOT draw a full office, walls, ceiling, plants, bulletin boards, or shelves. Maximum TWO gag props in the panel. No third prop. No filler clutter. The character must do a STATE ACTION (slumped, hiding, frozen-in-denial, hunched-over, pretending-it'\''s-fine), NOT a cute pose, NOT a wave, NOT a smile-to-camera mascot pose. STYLE: Clean confident black ink line, 5-7px uniform stroke. Steady, not scratchy, not over-detailed. Background: ONE flat warm beige paper color (#F2EAD8) with subtle paper grain only. NO drawn walls, NO drawn floor, NO atmospheric perspective. Character fills: ONE flat color per region (fur = one solid color, clothes = one solid color). NO internal shading, NO gradient, NO airbrush, NO highlight, NO 3D, NO drop shadow except a tiny soft pool under feet. The drawing must look quick, light, breezy — NOT polished, NOT meticulously rendered, NOT busy. TONE: dry, deadpan, low-pressure, absurd, quiet humor. The joke lives in the situation and the props, not in cuteness or detail level. ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO LOGOS in the image.'

# === v3.4 negative ===
NEG='Negative: NO sticker pack style, NO mascot pose, NO chibi, NO kawaii cute style. NO cute mascot wave, NO heart eyes, NO sparkles, NO blush dots. NO men'\''s-gaze cute (no oversized shiny eyes, no smirky pose). NO TikTok-style oily cute (no tear-corner highlight, no anime gloss). NO polished illustration, NO character sheet, NO turnaround. NO Pixar 3D, NO anime style, NO children-book-illustration polish. NO smooth gradient, NO airbrush, NO rim light, NO glow, NO atmospheric haze. NO AI-perfect symmetry. NO public-notice / public-announcement / school-bulletin visual format. NO complete office scene, NO cluttered desk, NO multiple props beyond the named gag. NO test-result aesthetic, NO personality-quiz card, NO certificate, NO diagnosis card, NO score chart, NO badge/medal. NO UI screen text, NO exclamation mark (!) inside monitors — use red round warning lamps instead. NO "REJECTED" or any English/Chinese letter shapes that look like real text. NO Chinese characters, NO English words, NO text-like marks anywhere in the image — all text will be added by frontend overlay only.'

call_once() {
  local slug="$1" out="$OUT_DIR/share-${1}-v3.4.png"; shift
  local body="$*"
  local prompt="$HEADER $body $NEG"
  local payload
  payload=$(jq -nc --arg p "$prompt" '{model:"gpt-image-2", prompt:$p, size:"1024x1280", n:1}')

  echo "[start] $slug"
  local t0=$(date +%s)
  local resp http
  resp=$(curl -sS --max-time 240 -w "\nHTTP %{http_code}" -X POST "$OPENAI_BASE_URL/images/generations" \
    -H "Authorization: Bearer $OPENAI_API_KEY" -H "Content-Type: application/json" \
    -d "$payload")
  local exit_code=$?
  local elapsed=$(( $(date +%s) - t0 ))

  if [[ $exit_code -ne 0 ]]; then
    echo "[CURL_FAIL] $slug exit=$exit_code elapsed=${elapsed}s"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | share-${slug}-v3.4 | v3.4 | gpt-image-2 (1024x1280) | CURL_FAIL exit=$exit_code | ${elapsed}s |" >> "$LOG"
    return 1
  fi

  local body_part url
  body_part=$(echo "$resp" | sed '$d')
  http=$(echo "$resp" | tail -1 | awk '{print $2}')
  url=$(echo "$body_part" | jq -r '.data[0].url // empty' 2>/dev/null || true)

  if [[ "$http" != "200" || -z "$url" ]]; then
    echo "[API_FAIL] $slug http=$http resp=$(echo "$body_part" | head -c 300)"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | share-${slug}-v3.4 | v3.4 | gpt-image-2 (1024x1280) | API_FAIL http=$http $(echo "$body_part" | head -c 200) | ${elapsed}s |" >> "$LOG"
    return 1
  fi

  curl -sS --max-time 180 -o "$out" "$url"
  if [[ ! -s "$out" ]]; then
    echo "[DOWNLOAD_FAIL] $slug url=$url"
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | share-${slug}-v3.4 | v3.4 | gpt-image-2 (1024x1280) | DOWNLOAD_FAIL url=$url | ${elapsed}s |" >> "$LOG"
    return 1
  fi

  echo "[ok] $slug -> $out (${elapsed}s)"
  echo "| $(date '+%Y-%m-%d %H:%M:%S') | share-${slug}-v3.4 | v3.4 | gpt-image-2 (1024x1280) | $url | ${elapsed}s |" >> "$LOG"
  return 0
}

# === Body — 严格按 prompt-review-v3.4.md §4.1-4.4 ===

call_once stubborn-goose-busted-not-admit \
"Subject: a chubby grey-and-white domestic goose state stand-in animal, wearing a navy security cap (#3F5C7A). Caught-in-the-act state action: one wing is raised so the wing tip lightly covers part of its own beak from the side (the goose is hushing itself, refusing to speak). The other wing is loosely holding up a red rubber stamp shape (#D7563B, no letters on it) in front of the chest, like a half-shield. Beak turned sideways; eyes glance away from the viewer; one foot a step back as if caught off guard. Only these props in frame: the navy security cap (worn), the red stamp shape (held in front wing). Nothing else: NO tape, no clipboard, no badge, no extra papers, no plant, no chair back. Lower 40% of the frame is calm empty beige paper, suitable for later text overlay."

call_once low-battery-cat-no-yingye \
"Subject: an orange tabby cat state stand-in animal, wearing a small low-battery-orange (#E68A3A) work apron. Caught-in-the-act state action: the cat has just melted forward across a desk corner, eyes half-closed, one whisker drooping; its paw has gone limp and a small flat battery-shaped sign (no number on it, just the battery icon shape) is sliding sideways out of its paw. A teal (#7AB5B5) charging cable trails behind the cat, with the plug clearly hanging in mid-air, plugged into NOTHING. Only these props in frame: the low-battery-orange apron (worn), the battery sign (sliding from paw), the teal charging cable plugged into nothing. Nothing else: no coffee cup, no keyboard, no monitor, no plant, no chair. Lower 40% of the frame is calm empty beige paper, suitable for later text overlay."

call_once ddl-hamster-final-ddl \
"Subject: a small yellow-brown hamster state stand-in animal. CRITICAL: smaller eyes than a kawaii hamster (avoid huge shiny round eyes), visible dark under-eye circles, slightly messy fur, deadpan exhausted face — NOT cute, NOT mascot, NOT children-book art. Caught-in-the-act state action: hunched over a desk, both paws clutching a paper desk calendar that has a big red rectangular block on today's date (no numbers, just a red block). On top of that red block, three blank beige sticky notes are stacked, each one half-covering the previous one — every sticky note is completely blank, the hamster keeps adding a new blank sticky note on top of the previous blank one (gag: the postponement loop is purely visual, no text). Only these props in frame: the calendar with red block + 3 stacked sticky notes; a single chewed-on pen. Nothing else: no coffee cup, no clock, no paper stack, no plant, no chair. Lower 40% of the frame is calm empty beige paper."

call_once backstage-alpaca-after-socializing \
"Subject: a tall cream-white long-neck alpaca state stand-in animal, wearing thin grey on-ear headphones (#5C6A75). Caught-in-the-act state action: standing perfectly straight behind a small desk; deadpan front-facing polite small smile, tiny eyes, neck perfectly vertical — looks composed. Behind the desk, instead of real monitors, there are THREE simple dark rectangles standing upright like abstract panels — each rectangle has ONE small RED ROUND lamp glowing on it (round red indicator light, like a physical alert lamp on a panel; absolutely NOT exclamation marks, NOT UI text, NOT software warning popup, NOT a real screen). On the desk sits a paper coffee cup, cold flat coffee surface, no steam rising. The contrast between the alpaca's polite smile and the row of three red round lamps behind IS the joke. Only these props in frame: the thin grey headphones (worn), three simple dark upright rectangles each with one red round lamp, the cold paper coffee cup. Nothing else: NO ID badge, NO lanyard, NO plant, NO chair back, NO extra papers, NO real monitor / screen frame / UI display. Lower 40% of the frame is calm empty beige paper."

echo "=== v3.4 试金石 done ==="
