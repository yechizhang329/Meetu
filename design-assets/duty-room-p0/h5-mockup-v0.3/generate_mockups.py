"""
心情值班室 H5 视觉稿 v0.3 — 修 Fiona msg b970d776 4 点 micro fix:
1. 首屏 4 动物自然在场（趴纸边 / 露半身 / 靠角落 / 远一点），不是 IP 菜单
2. 选场景便签流（大小/倾斜/胶带差异），首屏 4-5 张，下滑可见更多
3. 结果页文字不被切（按最终 PNG 安全区完整显示）
4. 结果页按钮层级收：主"保存这张" + 主"换一句"；"换一只"/chips 下沉为弱入口
"""
import os, random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = "/Users/shaolinzheng/.slock/agents/405c6097-cfd4-46f0-b277-b7a4e3ce9d61/Meetu/design-assets/duty-room-p0"
OUT_DIR = os.path.join(ROOT, "h5-mockup-v0.3")
os.makedirs(OUT_DIR, exist_ok=True)

W, H = 375, 812
DESK_BG = (242, 234, 216)
NOTE_WHITE = (250, 241, 220)
NOTE_YELLOW = (240, 226, 186)
NOTE_KHAKI = (232, 217, 176)
NOTE_PEACH = (244, 224, 200)  # 加一种暖桃色
TAPE_BEIGE = (220, 205, 175, 160)
INK_DARK = (74, 55, 30)
INK_LIGHT = (130, 110, 80)
ORANGE_ACCENT = (232, 160, 79)

F_HUGE = ImageFont.truetype("/System/Library/Fonts/STHeiti Medium.ttc", 56)
F_BIG = ImageFont.truetype("/System/Library/Fonts/STHeiti Medium.ttc", 44)
F_LARGE = ImageFont.truetype("/System/Library/Fonts/STHeiti Medium.ttc", 28)
F_MED = ImageFont.truetype("/System/Library/Fonts/STHeiti Medium.ttc", 20)
F_HEAD = ImageFont.truetype("/System/Library/Fonts/Hiragino Sans GB.ttc", 18)
F_BODY = ImageFont.truetype("/System/Library/Fonts/Hiragino Sans GB.ttc", 14)
F_SMALL = ImageFont.truetype("/System/Library/Fonts/STHeiti Light.ttc", 12)
F_TINY = ImageFont.truetype("/System/Library/Fonts/STHeiti Light.ttc", 10)

ASSET_DIR = os.path.join(ROOT, "contact-crops-transparent")

def load_role(role, slug="main"):
    return Image.open(os.path.join(ASSET_DIR, role, f"{role}-{slug}-v1.png")).convert("RGBA")

def paper_texture(img, seed=42):
    rnd = random.Random(seed)
    px = img.load()
    for _ in range(800):
        x, y = rnd.randint(0, W - 1), rnd.randint(0, H - 1)
        c = px[x, y]
        d = rnd.randint(-6, 4)
        px[x, y] = (max(0, min(255, c[0] + d)), max(0, min(255, c[1] + d)), max(0, min(255, c[2] + d)))

def draw_note(canvas, x, y, w, h, color, tape=True, tape_pos="topleft", tape_rot=0):
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle([x + 1, y + 3, x + w + 1, y + h + 3], radius=3, fill=(74, 55, 30, 38))
    shadow = shadow.filter(ImageFilter.GaussianBlur(4))
    canvas = Image.alpha_composite(canvas, shadow)
    d = ImageDraw.Draw(canvas)
    d.rounded_rectangle([x, y, x + w, y + h], radius=3, fill=color)
    rnd = random.Random(int(x * 7 + y * 13))
    for _ in range(15):
        sx = rnd.randint(x + 5, x + w - 5)
        sy = rnd.randint(y + 5, y + h - 5)
        d.point((sx, sy), fill=(180, 165, 130))
    if tape:
        tape_w, tape_h = 56, 20
        if tape_pos == "topleft":
            tx, ty = x + 8, y - 6
        elif tape_pos == "topright":
            tx, ty = x + w - tape_w - 8, y - 6
        else:
            tx, ty = x + (w - tape_w) // 2, y - 6
        tape_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        td = ImageDraw.Draw(tape_layer)
        td.rectangle([tx, ty, tx + tape_w, ty + tape_h], fill=TAPE_BEIGE)
        for fy in range(ty + 3, ty + tape_h, 5):
            td.line([(tx, fy), (tx + tape_w, fy)], fill=(200, 185, 150, 100), width=1)
        canvas = Image.alpha_composite(canvas, tape_layer)
    return canvas

def draw_centered(canvas, text, x, y, font, fill=INK_DARK):
    d = ImageDraw.Draw(canvas)
    bbox = d.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    d.text((x - tw // 2, y), text, font=font, fill=fill)

def draw_paperclip(canvas, x, y, color=(140, 120, 90)):
    d = ImageDraw.Draw(canvas)
    d.rounded_rectangle([x, y, x + 12, y + 24], radius=6, outline=color, width=2)
    d.rounded_rectangle([x + 3, y + 3, x + 12, y + 21], radius=4, outline=color, width=2)

def draw_pen_mark(canvas, x, y, length=24):
    d = ImageDraw.Draw(canvas)
    d.line([(x, y), (x + int(length * 0.4), y - 1)], fill=INK_DARK, width=2)
    d.line([(x + int(length * 0.4), y - 1), (x + length, y + 1)], fill=INK_DARK, width=2)

def draw_button(canvas, x, y, w, h, label, font, color=ORANGE_ACCENT, text_color=(255, 252, 240)):
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle([x, y + 3, x + w, y + h + 3], radius=h // 2, fill=(74, 55, 30, 60))
    shadow = shadow.filter(ImageFilter.GaussianBlur(5))
    canvas = Image.alpha_composite(canvas, shadow)
    d = ImageDraw.Draw(canvas)
    d.rounded_rectangle([x, y, x + w, y + h], radius=h // 2, fill=color)
    bbox = d.textbbox((0, 0), label, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    d.text((x + (w - tw) // 2, y + (h - th) // 2 - 4), label, font=font, fill=text_color)
    return canvas

def paste_role_natural(canvas, role, slug, x, y, target_h, partial=None):
    """Paste a role at (x, y) with target height. Optionally clip the bottom (partial='bottom') or right (partial='right') for natural 'half-revealed' feel."""
    r = load_role(role, slug)
    ar = r.size[0] / r.size[1]
    rw = int(target_h * ar)
    r_resized = r.resize((rw, target_h), Image.LANCZOS)

    if partial == "bottom":
        # Show only top portion (cut off bottom)
        clip_h = int(target_h * 0.55)
        cropped = r_resized.crop((0, 0, rw, clip_h))
        canvas.paste(cropped, (x, y), cropped)
    elif partial == "right":
        # Show left portion only
        clip_w = int(rw * 0.55)
        cropped = r_resized.crop((0, 0, clip_w, target_h))
        canvas.paste(cropped, (x, y), cropped)
    elif partial == "left":
        # Show right portion only (cut left)
        clip_x = int(rw * 0.45)
        cropped = r_resized.crop((clip_x, 0, rw, target_h))
        canvas.paste(cropped, (x, y), cropped)
    else:
        canvas.paste(r_resized, (x, y), r_resized)

# ============= PAGE 1: HOME (v0.3 — natural placement) =============
def page_home():
    bg = Image.new("RGB", (W, H), DESK_BG)
    paper_texture(bg, seed=42)
    canvas = bg.convert("RGBA")

    # Top brand
    draw_centered(canvas, "心情值班室 · 今日开门", W // 2, 32, F_TINY, fill=(130, 110, 80))

    # Main note (centered, with tape)
    nw, nh = 290, 200
    nx, ny = (W - nw) // 2, 96
    canvas = draw_note(canvas, nx, ny, nw, nh, NOTE_WHITE, tape=True, tape_pos="topleft")
    draw_centered(canvas, "今天这句", W // 2, ny + 38, F_HUGE, INK_DARK)
    draw_centered(canvas, "让谁替你说？", W // 2, ny + 110, F_HUGE, INK_DARK)
    d = ImageDraw.Draw(canvas)
    d.line([(W // 2 - 60, ny + 184), (W // 2 + 60, ny + 184)], fill=ORANGE_ACCENT, width=2)

    # === FIX 1: 4 animals naturally placed (not equidistant icon row) ===
    # 鹅: 趴在便签纸下角，右半身露出
    paste_role_natural(canvas, "stubborn-goose", "main", nx + nw - 32, ny + nh - 18, 80, partial="left")

    # 猫: 桌面左下，趴姿（半身露出，桌面边缘自然停留）
    paste_role_natural(canvas, "low-battery-cat", "pose1", 26, 540, 95, partial=None)

    # 仓鼠: 中下偏右，独立坐姿，比其他动物略小（远一点）
    paste_role_natural(canvas, "ddl-hamster", "main", 220, 580, 70, partial=None)

    # 羊驼: 桌面远右上角，靠角落（露半身从顶部出现 — 但首屏顶部已有便签，改为右下远）
    paste_role_natural(canvas, "backstage-alpaca", "main", W - 100, 510, 110, partial="bottom")

    # caption — 改为更自然的"已经在了"
    draw_centered(canvas, "它们今天已经在了", W // 2, 638, F_SMALL, INK_LIGHT)

    # Main button
    bw, bh = 240, 56
    bx, by = (W - bw) // 2, 670
    canvas = draw_button(canvas, bx, by, bw, bh, "叫一只出来替我说", F_LARGE)

    # Desk objects ≤2
    draw_paperclip(canvas, W - 40, 762)
    draw_pen_mark(canvas, 30, 766, length=36)

    draw_centered(canvas, "第一次会有人替你说", W // 2, 790, F_SMALL, (130, 110, 80))

    out = os.path.join(OUT_DIR, "page1-home-v0.3.png")
    canvas.convert("RGB").save(out, "PNG")
    return out


# ============= PAGE 2: SELECT (v0.3 — natural sticky note flow) =============
def page_select():
    bg = Image.new("RGB", (W, H), DESK_BG)
    paper_texture(bg, seed=13)
    canvas = bg.convert("RGBA")

    d = ImageDraw.Draw(canvas)
    d.text((26, 36), "← 回桌面", font=F_SMALL, fill=INK_LIGHT)
    draw_centered(canvas, "哪句话你今天不想自己说", W // 2, 38, F_HEAD, INK_DARK)

    # === FIX 2: Notes flow naturally (not 2x4 grid) ===
    # First-screen visible: 5 notes, varied size/position/color/tape; rest below scroll fold (we draw 2 more at bottom edge to imply scroll)
    notes_data = [
        # (line1, line2, color, x, y, w, h, tape, tape_pos)
        ("被说中了", "我没事", NOTE_WHITE, 26, 90, 175, 110, True, "topleft"),
        ("人还在", "电先下班", NOTE_YELLOW, 220, 84, 130, 105, True, "topright"),
        ("会做的", "不是现在", NOTE_KHAKI, 38, 220, 145, 110, False, "topleft"),
        ("表面好的", "后台别来", NOTE_PEACH, 198, 215, 160, 130, True, "topleft"),
        ("想安静", "先别问", NOTE_WHITE, 60, 360, 130, 100, True, "topright"),
        # Below scroll fold (visually 2 more peek)
        ("身体没签字", "嘴也没到岗", NOTE_YELLOW, 210, 360, 150, 110, False, "topleft"),
        ("消息看到了", "嘴没上班", NOTE_KHAKI, 30, 488, 155, 95, True, "topleft"),
    ]

    for i, (l1, l2, color, x, y, w, h, tape, tape_pos) in enumerate(notes_data):
        canvas = draw_note(canvas, x, y, w, h, color, tape=tape, tape_pos=tape_pos)
        d = ImageDraw.Draw(canvas)
        # Choose font size based on note width
        f1 = F_LARGE if w >= 145 else F_MED
        f2 = F_MED if w >= 145 else F_BODY
        bbox1 = d.textbbox((0, 0), l1, font=f1)
        bbox2 = d.textbbox((0, 0), l2, font=f2)
        tx1 = x + (w - (bbox1[2] - bbox1[0])) // 2
        tx2 = x + (w - (bbox2[2] - bbox2[0])) // 2
        d.text((tx1, y + 22), l1, font=f1, fill=INK_DARK)
        d.text((tx2, y + 60), l2, font=f2, fill=INK_LIGHT)

    # Scroll hint at bottom — semi-transparent fade overlay + small arrow
    fade_overlay = Image.new("RGBA", (W, 40), (0, 0, 0, 0))
    fd = ImageDraw.Draw(fade_overlay)
    for i in range(40):
        alpha = int(60 * (i / 40))
        fd.line([(0, i), (W, i)], fill=(242, 234, 216, alpha))
    canvas.paste(fade_overlay, (0, 600), fade_overlay)

    # Bottom: scroll cue + footer
    d = ImageDraw.Draw(canvas)
    draw_centered(canvas, "↓ 还有 3 张", W // 2, 650, F_SMALL, INK_LIGHT)

    # Desk objects ≤2 (per Fiona) — keep cat at corner + pen mark
    cat = load_role("low-battery-cat", "pose1")
    cw = 60
    ar = cat.size[0] / cat.size[1]
    cat_resized = cat.resize((cw, int(cw / ar)), Image.LANCZOS)
    canvas.paste(cat_resized, (W - cw - 16, H - cat_resized.size[1] - 36), cat_resized)

    draw_pen_mark(canvas, 26, 778, length=22)
    d = ImageDraw.Draw(canvas)
    d.text((54, 774), "选一句你想被替着说的", font=F_SMALL, fill=INK_LIGHT)

    out = os.path.join(OUT_DIR, "page2-select-v0.3.png")
    canvas.convert("RGB").save(out, "PNG")
    return out


# ============= PAGE 3: RESULT (v0.3 — fix text clipping + button hierarchy) =============
def page_result():
    bg = Image.new("RGB", (W, H), DESK_BG)
    paper_texture(bg, seed=7)
    canvas = bg.convert("RGBA")

    d = ImageDraw.Draw(canvas)
    d.text((26, 36), "← 选场景", font=F_SMALL, fill=INK_LIGHT)
    draw_centered(canvas, "今天它替你说", W // 2, 38, F_HEAD, INK_DARK)

    # === FIX 3: Big preview note with proper safe area — text MUST fit ===
    # Constraint: cat takes top 40%, text takes middle 35%, role label bottom 5%, padding around all
    nw, nh = 310, 420
    nx, ny = (W - nw) // 2, 76
    canvas = draw_note(canvas, nx, ny, nw, nh, NOTE_WHITE, tape=True, tape_pos="topright")

    # Cat: 50% of note width, in top half (safe from text)
    cat = load_role("low-battery-cat", "main")
    cat_w = int(nw * 0.50)  # 155px
    ar = cat.size[0] / cat.size[1]
    cat_h = int(cat_w / ar)
    cat_resized = cat.resize((cat_w, cat_h), Image.LANCZOS)
    cx = nx + (nw - cat_w) // 2
    cy = ny + 24
    canvas.paste(cat_resized, (cx, cy), cat_resized)

    # Text: positioned BELOW cat with comfortable margin, must end ABOVE bottom edge
    # Note y: 76, height 420 → bottom edge at 496
    # Text starts at ny + cat_h + 50 = 76 + ~190 + 50 = ~316 (assuming 155×155 cat after resize ~155×155)
    text_y = ny + cat_h + 38
    line_h = 60
    draw_centered(canvas, "人在。", W // 2, text_y, F_HUGE, INK_DARK)
    draw_centered(canvas, "电不在。", W // 2, text_y + line_h, F_HUGE, INK_DARK)

    # Role label at bottom of note (with safe margin)
    role_label_y = ny + nh - 22
    d = ImageDraw.Draw(canvas)
    d.text((nx + 14, role_label_y), "— 低电量猫", font=F_SMALL, fill=INK_LIGHT)

    # === FIX 4: Button hierarchy — 保存这张 + 换一句 are PRIMARY; 换一只 + chips de-emphasized ===
    # Two primary buttons side by side
    btn_y = 524
    primary_w, primary_h = 156, 48
    primary_gap = 10
    total_primary_w = primary_w * 2 + primary_gap
    primary_x_start = (W - total_primary_w) // 2

    # 保存这张 (orange)
    canvas = draw_button(canvas, primary_x_start, btn_y, primary_w, primary_h, "保存这张", F_MED, color=ORANGE_ACCENT)
    # 换一句 (orange but slightly lighter / pill outline) — same level as 保存
    sx = primary_x_start + primary_w + primary_gap
    canvas = draw_button(canvas, sx, btn_y, primary_w, primary_h, "换一句", F_MED, color=(244, 195, 130), text_color=INK_DARK)

    # Secondary actions row — 换一只 as text link + tone chips fold
    sub_y = 600
    d = ImageDraw.Draw(canvas)
    # 换一只 — text link only
    label = "换一只 ›"
    bbox = d.textbbox((0, 0), label, font=F_BODY)
    d.text((W // 2 - (bbox[2] - bbox[0]) // 2, sub_y), label, font=F_BODY, fill=INK_LIGHT)

    # Tone chips folded into a single "更多语气" entry
    fold_y = sub_y + 32
    fold_label = "更多语气：嘴硬 · 摆烂 · 礼貌 · 装没事"
    bbox = d.textbbox((0, 0), fold_label, font=F_SMALL)
    d.text((W // 2 - (bbox[2] - bbox[0]) // 2, fold_y), fold_label, font=F_SMALL, fill=(140, 120, 90))

    # Desk objects ≤2
    # tape + paperclip
    tape_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    td = ImageDraw.Draw(tape_layer)
    tx, ty = W - 70, H - 70
    td.rectangle([tx, ty, tx + 50, ty + 16], fill=TAPE_BEIGE)
    for fy in range(ty + 3, ty + 16, 4):
        td.line([(tx, fy), (tx + 50, fy)], fill=(200, 185, 150, 100), width=1)
    canvas = Image.alpha_composite(canvas, tape_layer)
    draw_paperclip(canvas, 30, H - 70)

    draw_centered(canvas, "心情值班室", W // 2, H - 22, F_TINY, (130, 110, 80))

    out = os.path.join(OUT_DIR, "page3-result-v0.3.png")
    canvas.convert("RGB").save(out, "PNG")
    return out


if __name__ == "__main__":
    print("Generating v0.3 mockups...")
    p1 = page_home()
    print(f"  page1: {p1}")
    p2 = page_select()
    print(f"  page2: {p2}")
    p3 = page_result()
    print(f"  page3: {p3}")
    print("Done.")
