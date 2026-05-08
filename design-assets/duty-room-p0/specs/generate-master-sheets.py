#!/usr/bin/env python3
"""Generate 4 master sheets for 心情值班室 P0 via gpt-image-2 relay."""
import json
import os
import sys
import time
import urllib.request
import urllib.parse
import ssl
import certifi
try:
    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except Exception:
    SSL_CTX = ssl.create_default_context()
    SSL_CTX.check_hostname = False
    SSL_CTX.verify_mode = ssl.CERT_NONE

API_KEY = os.environ["OPENAI_API_KEY"]
BASE_URL = os.environ.get("OPENAI_BASE_URL", "https://www.micuapi.ai/v1").rstrip("/")
OUT_DIR = os.path.dirname(os.path.abspath(__file__)) + "/../master-sheets"
os.makedirs(OUT_DIR, exist_ok=True)

STYLE_HEADER = (
    "Character master sheet, hand-drawn black ink outline (uniform 6-8px stroke), "
    "warm beige paper texture background (#F2EAD8), light paper grain visible, "
    "slightly rough, tiny soft shadow under feet only, no rendering, no gradient, "
    "no shiny highlights, no anime sparkle, no plastic 3D look, "
    "flat colors with limited palette, vintage office stationery aesthetic, "
    "tone: low-pressure, absurd, deadpan, quiet humor. "
    "Layout: character turnaround sheet with 3 views (front / 3-quarter / side), "
    "3 expression close-ups in a row, 1 prop set callout in a corner, "
    "small color swatch row at the bottom. "
    "ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO LOGOS in the image."
)

ROLES = {
    "stubborn-goose": (
        "Subject: a chubby grey-and-white domestic goose office worker, short body, long straight neck, "
        "flat orange beak slightly turned away in denial, tiny round black eyes looking sideways, "
        "wearing a navy security cap (#3F5C7A) with stiff brim, "
        "small navy security shoulder cape, holding a clipboard and a red rubber stamp (#D7563B), "
        "posture: arms (wings) crossed, neck stiff, refusing to look at viewer. "
        "Expressions across the row: arms crossed denial / shrug 'wasn't me' / glance away pretending to be busy. "
        "Prop callout: navy security cap, red blank ink stamp shape (no letters), clipboard, ID badge with blank face. "
        "Personality: the office Denial Officer, refuses to admit anything, mouth-stubborn but inwardly aware."
    ),
    "low-battery-cat": (
        "Subject: a short-haired orange tabby cat office worker, round face, round ears, droopy whiskers, "
        "slumped body language, eyes half-closed, very low energy posture, "
        "wearing a small low-battery-orange (#E68A3A) work apron / vest, "
        "holding a small flat battery-shaped sign in one paw (no number on it — battery icon only), "
        "a teal (#7AB5B5) charging cable trailing on the floor behind the cat. "
        "Posture: slouched on a desk corner, head propped on one paw. "
        "Expressions across the row: eyes half-closed flat / face-down on desk / slow blink. "
        "Prop callout: battery icon sign (blank, no number), coiled charging cable, small office desk lamp, paper coffee cup. "
        "Personality: the office Battery Manager, runs on 3% energy, refuses to socialize."
    ),
    "ddl-hamster": (
        "Subject: a small yellow-brown hamster office worker, short limbs, round belly, big cheek pouches, "
        "wide-open black eyes (panicked-but-functional), "
        "clutching a paper calendar page with a big red rectangle (no numbers, just a red block), "
        "a paper coffee cup beside it, paper stack collapsing under elbow, "
        "small old-school analog alarm clock next to it. "
        "Posture: hunched over the desk, both paws gripping the calendar, fur slightly messy. "
        "Expressions across the row: wide-eyed staring at calendar / face-palm with both paws / forced focus chewing pen. "
        "Prop callout: red-block calendar (no numbers), alarm clock, paper coffee cup, leaning paper stack. "
        "Personality: the office Deadline Specialist, always two days late and one coffee deep."
    ),
    "backstage-alpaca": (
        "Subject: a tall cream-white long-haired alpaca office worker, very long neck, "
        "deadpan front-facing face with tiny eyes and a flat soft mouth, expression: 'everything is fine', "
        "wearing thin grey on-ear headphones (#5C6A75) and a blank office ID badge on a lanyard, "
        "in front of a 3-window monitor on a desk; each monitor screen shows a small red exclamation mark icon "
        "(no letters, no UI text — just the red ! shape inside a square). "
        "Posture: standing straight, both hooves resting on the desk, neck perfectly vertical. "
        "Expressions across the row: blank smile 'all good' / slow blink / one ear twitch (still smiling). "
        "Prop callout: 3-monitor setup with red ! icons, headphones, blank ID badge, paper coffee cup. "
        "Personality: the office Front-Desk Normalcy Officer, says 'yes yes' while alerts blink in the back."
    ),
}


def gen(slug, body):
    prompt = STYLE_HEADER + " " + body
    payload = json.dumps({
        "model": "gpt-image-2",
        "prompt": prompt,
        "size": "1024x1024",
        "n": 1,
    }).encode("utf-8")
    req = urllib.request.Request(
        f"{BASE_URL}/images/generations",
        data=payload,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    t0 = time.time()
    with urllib.request.urlopen(req, timeout=240, context=SSL_CTX) as r:
        data = json.loads(r.read())
    elapsed = time.time() - t0
    url = data["data"][0]["url"]
    out_path = os.path.join(OUT_DIR, f"role-{slug}-master-v1.png")
    with urllib.request.urlopen(url, timeout=120, context=SSL_CTX) as r, open(out_path, "wb") as f:
        f.write(r.read())
    print(f"[ok] {slug}: {elapsed:.1f}s -> {out_path}")
    return out_path, url, elapsed


if __name__ == "__main__":
    only = sys.argv[1] if len(sys.argv) > 1 else None
    log_path = os.path.join(OUT_DIR, "../specs/generation-log.md")
    with open(log_path, "a") as log:
        for slug, body in ROLES.items():
            if only and only != slug:
                continue
            try:
                path, url, elapsed = gen(slug, body)
                log.write(f"| {time.strftime('%Y-%m-%d %H:%M:%S')} | {slug} | v1 | gpt-image-2 | {url} | local {os.path.basename(path)}, {elapsed:.0f}s |\n")
                log.flush()
            except Exception as e:
                print(f"[err] {slug}: {e}", file=sys.stderr)
                log.write(f"| {time.strftime('%Y-%m-%d %H:%M:%S')} | {slug} | v1 | gpt-image-2 | ERR | {e} |\n")
                log.flush()
