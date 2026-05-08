#!/usr/bin/env bash
# 心情值班室 P0 第二批资产生成（14 calls）
# 规则：合并出图 + 节约 call 数；所有出图记录到 generation-log.md
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BASE="$SCRIPT_DIR/.."
LOG="$SCRIPT_DIR/generation-log.md"
mkdir -p "$BASE/props" "$BASE/moods" "$BASE/backgrounds" "$BASE/share-cards"

STYLE_HEADER='hand-drawn black ink outline (uniform 6-8px stroke), warm beige paper texture background (#F2EAD8), light paper grain visible, slightly rough, no rendering, no gradient, no shiny highlights, no anime sparkle, no plastic 3D look, flat colors with limited palette, vintage office stationery aesthetic, tone: low-pressure, absurd, deadpan, quiet humor. ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO LOGOS in the image.'

call_image() {
  local out="$1"; local size="$2"; local body="$3"
  local prompt="$STYLE_HEADER $body"
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
    echo "| $(date '+%Y-%m-%d %H:%M:%S') | $(basename "$out" .png) | v1 | gpt-image-2 ($size) | $url | ${elapsed}s |" >> "$LOG"
    return 0
  done
  echo "[FAIL] $out after 3 attempts"
  return 1
}

# === Call 1: props 4×2 grid (8 props in 1 call) ===
call_image "$BASE/props/props-grid-v1.png" "1024x1024" \
"Set of 8 vintage office prop icons arranged in a clean 4-column 2-row grid on a warm beige paper sheet (#F2EAD8). Each prop sits centered in its cell with thin paper-grain background; black ink outline; flat colors. Top row left to right: (1) navy blue stiff security cap with brim, (2) red rubber ink stamp standing upright, (3) small flat battery sign icon, (4) coiled teal charging cable. Bottom row left to right: (5) red-block paper desk calendar (no numbers), (6) old analog round alarm clock, (7) thin grey on-ear headphones, (8) blank office ID badge on lanyard. No labels, no text under cells."

# === Call 2-5: 4 mood variant sheets (3 expressions per role) ===
call_image "$BASE/moods/mood-stubborn-goose-v1.png" "1024x1024" \
"3 expression close-ups of the same chubby grey-and-white domestic goose office worker wearing navy security cap, arranged in a horizontal row on warm beige paper. Same character across all 3 panels. Expression 1: 'wasn't me' shrug, wings out, beak turned away. Expression 2: arms (wings) firmly crossed, beak shut tight, sideways glance, full denial. Expression 3: glance away while pretending to be busy, beak in the air, eyes avoiding viewer. Same flat color palette (navy cap, orange beak, grey-white feathers, red stamp tucked in corner). No text."

call_image "$BASE/moods/mood-low-battery-cat-v1.png" "1024x1024" \
"3 expression close-ups of the same orange tabby cat office worker wearing low-battery-orange work apron, arranged in a horizontal row on warm beige paper. Same character across all 3 panels. Expression 1: half-closed eyes flat-faced, exhausted. Expression 2: completely face-down on a desk, only ears visible. Expression 3: slow blink, head propped on one paw, droopy whiskers. Same flat color palette (orange fur, orange apron, teal cable). No text."

# DDL hamster — explicitly LESS kawaii per Fiona feedback
call_image "$BASE/moods/mood-ddl-hamster-v1.png" "1024x1024" \
"3 expression close-ups of the same yellow-brown hamster office worker, arranged in a horizontal row on warm beige paper. Same character across all 3 panels. IMPORTANT: SMALLER eyes, NOT large round kawaii eyes; visible dark under-eye circles; messy fur tufts; tired and frazzled, not cute. Expression 1: small panicked eyes staring at a red-block calendar, dark eye bags. Expression 2: both paws clutching head in despair, fur sticking out wildly, papers collapsing around it. Expression 3: forced focus, biting on a pen, slumped posture, dark circles under eyes. Same flat color palette. Style: deadpan exhausted office worker, not children's mascot. No text."

call_image "$BASE/moods/mood-backstage-alpaca-v1.png" "1024x1024" \
"3 expression close-ups of the same cream-white long-neck alpaca office worker wearing thin grey on-ear headphones and a blank ID badge, arranged in a horizontal row on warm beige paper. Same character across all 3 panels. Expression 1: blank polite smile, small eyes, 'all good'. Expression 2: slow blink, head perfectly straight, lips slightly pressed. Expression 3: one ear twitched, deadpan smile still in place. Same flat color palette (cream fur, grey headphones, beige). No text."

# === Call 6: bg_office_shared full ensemble (远景全家福) ===
call_image "$BASE/backgrounds/bg-office-shared-v1.png" "1024x1024" \
"Wide deadpan 'duty room' office scene on warm beige paper background (#F2EAD8). Hand-drawn black ink outline, flat colors, vintage office stationery aesthetic, low-pressure absurd humor. Compose 4 animal coworkers all visible in one shared room with desks, paper stacks, a small bulletin board, a wall clock, a desk lamp, paper coffee cups, a water dispenser. Characters from left to right: (1) a chubby grey-white goose with navy security cap holding clipboard and red stamp, wings crossed; (2) an orange tabby cat in low-battery-orange apron slumped on a desk corner, charging cable trailing; (3) a small yellow-brown hamster with smaller tired eyes hunched over a red-block calendar at a paper-stacked desk, dark under-eye circles; (4) a tall cream-white long-neck alpaca with thin grey headphones standing in front of a 3-monitor desk where each monitor shows a small red round warning lamp (NOT exclamation marks, just red round indicator lights). All on the same warm-beige floor with light shadows under each. Wide aspect feel, ensemble shot, ABSOLUTELY NO TEXT."

# === Call 7-10: 4 bg_role_desk per-role workstation closeups ===
call_image "$BASE/backgrounds/bg-role-desk-stubborn-goose-v1.png" "1024x1024" \
"Close-up workstation scene on warm beige paper, same hand-drawn black ink office style. The 'Denial Office' booth: navy security desk with a clipboard stack, a red rubber stamp resting on an ink pad, a blank stamp pad next to a cap rack holding the navy security cap. A small ID badge hangs on the partition. The chubby grey-white goose stands behind the desk, wings firmly crossed, beak turned to the side in classic denial pose. Composition: character occupies upper 2/3 of frame; lower-right area kept visually quiet (low-detail beige paper) for later text overlay. No characters except the goose. NO TEXT."

call_image "$BASE/backgrounds/bg-role-desk-low-battery-cat-v1.png" "1024x1024" \
"Close-up workstation scene on warm beige paper, same hand-drawn black ink office style. The 'Battery Management' booth: a worn wooden desk with a small desk lamp dimmed low, a paper coffee cup, a coiled teal charging cable plugged into nothing in particular, a flat blank battery-shaped sign leaning against a stack of paper. The orange tabby cat in low-battery-orange apron is slumped on the desk corner, half-closed eyes, paws limp. Composition: character occupies upper 2/3; lower-right area kept visually quiet for text overlay. NO TEXT."

call_image "$BASE/backgrounds/bg-role-desk-ddl-hamster-v1.png" "1024x1024" \
"Close-up workstation scene on warm beige paper, same hand-drawn black ink office style. The 'Deadline Specialist' booth: a desk overflowing with paper stacks barely held together, a red-block paper calendar leaning against a wall, an old analog alarm clock, a paper coffee cup with steam, a chewed pen on the desk. The small yellow-brown hamster (smaller tired eyes, dark under-eye circles, NOT kawaii) is hunched over the desk clutching the calendar, fur slightly messy. Composition: character occupies upper 2/3; lower-right area kept visually quiet for text overlay. NO TEXT."

call_image "$BASE/backgrounds/bg-role-desk-backstage-alpaca-v1.png" "1024x1024" \
"Close-up workstation scene on warm beige paper, same hand-drawn black ink office style. The 'Front-Desk Normalcy' booth: a clean desk with a 3-monitor setup; each monitor screen shows a small red round warning lamp icon (NOT exclamation marks — round red indicator lights, like physical alert lamps), a coffee cup, a blank ID badge on a lanyard hanging on the chair. The cream-white long-neck alpaca stands tall behind the desk wearing thin grey on-ear headphones, blank polite smile. Composition: character occupies upper 2/3; lower-right area kept visually quiet for text overlay. NO TEXT."

# === Call 11-14: 4 share cards (角色 × 主场景) — 4:5 portrait ===
# share_stubborn_goose_busted_not_admit
call_image "$BASE/share-cards/share-stubborn-goose-busted-not-admit-v1.png" "1024x1280" \
"Vertical 4:5 portrait composition on warm beige paper background (#F2EAD8). Hand-drawn black ink outline, flat colors, vintage office stationery aesthetic. Top of frame: a thin yellow-mustard banner strip across the top with a tiny security cap icon centered (no text). Main scene: the chubby grey-white domestic goose office worker wearing navy security cap, wings firmly crossed, beak turned sideways in stubborn denial; standing behind a small navy 'Denial Office' booth desk; a clipboard, a red rubber stamp on ink pad, a paper coffee cup. Soft shadow under feet only. Bottom 1/4 of the canvas kept visually quiet (low-detail beige paper) for later text overlay — DO NOT draw any text box, just leave it visually calm. Tiny watermark area at very bottom is also kept calm. NO TEXT, NO LETTERS, NO NUMBERS anywhere."

call_image "$BASE/share-cards/share-low-battery-cat-no-yingye-v1.png" "1024x1280" \
"Vertical 4:5 portrait composition on warm beige paper background (#F2EAD8). Hand-drawn black ink outline, flat colors, vintage office stationery aesthetic. Top of frame: a thin yellow-mustard banner strip across the top with a tiny battery icon centered (no text). Main scene: the orange tabby cat in low-battery-orange work apron slumped on a desk corner, half-closed eyes, head propped on one paw, droopy whiskers; a coiled teal charging cable trailing on the floor; a small dimmed desk lamp; a paper coffee cup. Soft shadow only. Bottom 1/4 of canvas kept visually quiet for later text overlay. NO TEXT."

call_image "$BASE/share-cards/share-ddl-hamster-final-ddl-v1.png" "1024x1280" \
"Vertical 4:5 portrait composition on warm beige paper background (#F2EAD8). Hand-drawn black ink outline, flat colors, vintage office stationery aesthetic. Top of frame: a thin yellow-mustard banner strip across the top with a tiny calendar icon centered (no text). Main scene: the yellow-brown hamster (SMALLER tired eyes, visible dark under-eye circles, messy fur, NOT kawaii) hunched over a desk clutching a red-block paper calendar; collapsing paper stacks around it, an old analog alarm clock, a steaming coffee cup, a chewed pen. Soft shadow only. Bottom 1/4 of canvas kept visually quiet for later text overlay. NO TEXT, NO NUMBERS."

call_image "$BASE/share-cards/share-backstage-alpaca-after-socializing-v1.png" "1024x1280" \
"Vertical 4:5 portrait composition on warm beige paper background (#F2EAD8). Hand-drawn black ink outline, flat colors, vintage office stationery aesthetic. Top of frame: a thin yellow-mustard banner strip across the top with a tiny headphones icon centered (no text). Main scene: the cream-white long-neck alpaca standing tall, wearing thin grey on-ear headphones and a blank ID badge on a lanyard, blank polite deadpan smile; in front of a 3-monitor desk where each monitor shows a small red round warning lamp icon (NOT exclamation marks — round red indicator lights). Coffee cup on desk. Soft shadow only. Bottom 1/4 of canvas kept visually quiet for later text overlay. NO TEXT, NO LETTERS."
