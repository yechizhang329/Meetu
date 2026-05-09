"""
心情值班室 H5 视觉稿 v0.2 — 3 页静态 PNG (375×812)

简化版：去掉复杂旋转，确保渲染稳定。
"""
import os, random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = "/Users/shaolinzheng/.slock/agents/405c6097-cfd4-46f0-b277-b7a4e3ce9d61/Meetu/design-assets/duty-room-p0"
OUT_DIR = os.path.join(ROOT, "h5-mockup-v0.2")
os.makedirs(OUT_DIR, exist_ok=True)

# ============= TOKENS =============
W, H = 375, 812
DESK_BG = (242, 234, 216)
NOTE_WHITE = (250, 241, 220)
NOTE_YELLOW = (240, 226, 186)
NOTE_KHAKI = (232, 217, 176)
TAPE_BEIGE = (220, 205, 175, 160)
INK_DARK = (74, 55, 30)
INK_LIGHT = (130, 110, 80)
ORANGE_ACCENT = (232, 160, 79)

# ============= FONTS =============
F_HUGE = ImageFont.truetype("/System/Library/Fonts/STHeiti Medium.ttc", 56)
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
    """Subtle warm paper grain on RGB canvas."""
    rnd = random.Random(seed)
    px = img.load()
    for _ in range(800):
        x, y = rnd.randint(0, W - 1), rnd.randint(0, H - 1)
        c = px[x, y]
        d = rnd.randint(-6, 4)
        px[x, y] = (max(0, min(255, c[0] + d)),
                    max(0, min(255, c[1] + d)),
                    max(0, min(255, c[2] + d)))

def draw_note(canvas, x, y, w, h, color, tape=True, tape_pos="topleft"):
    """Draw paper sticky note — no rotation. Just rectangle with shadow + tape."""
    # shadow
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle([x + 1, y + 3, x + w + 1, y + h + 3], radius=3, fill=(74, 55, 30, 38))
    shadow = shadow.filter(ImageFilter.GaussianBlur(4))
    canvas = Image.alpha_composite(canvas, shadow)

    d = ImageDraw.Draw(canvas)
    # paper rounded rect
    d.rounded_rectangle([x, y, x + w, y + h], radius=3, fill=color)
    # subtle paper grain inside note
    rnd = random.Random(int(x * 7 + y * 13))
    for _ in range(15):
        sx = rnd.randint(x + 5, x + w - 5)
        sy = rnd.randint(y + 5, y + h - 5)
        d.point((sx, sy), fill=(180, 165, 130))

    # tape
    if tape:
        tape_w, tape_h = 56, 20
        if tape_pos == "topleft":
            tx, ty = x + 8, y - 6
        elif tape_pos == "topright":
            tx, ty = x + w - tape_w - 8, y - 6
        else:
            tx, ty = x + (w - tape_w) // 2, y - 6
        # tape rectangle with semi-opacity
        tape_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        td = ImageDraw.Draw(tape_layer)
        td.rectangle([tx, ty, tx + tape_w, ty + tape_h], fill=TAPE_BEIGE)
        # fiber lines
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
    """Pill button with shadow."""
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

# ============= PAGE 1: HOME =============
def page_home():
    bg = Image.new("RGB", (W, H), DESK_BG)
    paper_texture(bg, seed=42)
    canvas = bg.convert("RGBA")

    # Top brand
    d = ImageDraw.Draw(canvas)
    draw_centered(canvas, "心情值班室 · 今日开门", W // 2, 32, F_TINY, fill=(130, 110, 80))

    # Main note (large, centered, slight visual offset via different tape)
    nw, nh = 290, 220
    nx, ny = (W - nw) // 2, 100
    canvas = draw_note(canvas, nx, ny, nw, nh, NOTE_WHITE, tape=True, tape_pos="topleft")

    # Heading text on note: "今天这句 / 让谁替你说？"
    draw_centered(canvas, "今天这句", W // 2, ny + 50, F_HUGE, INK_DARK)
    draw_centered(canvas, "让谁替你说？", W // 2, ny + 122, F_HUGE, INK_DARK)
    # accent underline
    d = ImageDraw.Draw(canvas)
    d.line([(W // 2 - 60, ny + 200), (W // 2 + 60, ny + 200)], fill=ORANGE_ACCENT, width=2)

    # 4 animals row, sitting at the desk corner
    role_y = ny + nh + 60
    role_size = 56
    roles = ["stubborn-goose", "low-battery-cat", "ddl-hamster", "backstage-alpaca"]
    role_gap = (W - role_size * 4) // 5
    for i, role in enumerate(roles):
        r = load_role(role, "main")
        ar = r.size[0] / r.size[1]
        if ar >= 1:
            rw, rh = role_size, int(role_size / ar)
        else:
            rw, rh = int(role_size * ar), role_size
        r_resized = r.resize((rw, rh), Image.LANCZOS)
        rx = role_gap + i * (role_size + role_gap)
        # paste with alpha mask
        canvas.paste(r_resized, (rx + (role_size - rw) // 2, role_y + (role_size - rh) // 2), r_resized)

    # caption under animals
    draw_centered(canvas, "4 位今日值班 · 在场等你", W // 2, role_y + role_size + 18, F_SMALL, INK_LIGHT)

    # Main button
    bw, bh = 240, 56
    bx, by = (W - bw) // 2, 660
    canvas = draw_button(canvas, bx, by, bw, bh, "叫一只出来替我说", F_LARGE)

    # Desk objects (max 2 per Fiona constraint #1)
    draw_paperclip(canvas, W - 40, 760)  # 1
    draw_pen_mark(canvas, 30, 765, length=36)  # 2

    # bottom hint
    draw_centered(canvas, "第一次会有人替你说", W // 2, 786, F_SMALL, (130, 110, 80))

    out = os.path.join(OUT_DIR, "page1-home-v0.2.png")
    canvas.convert("RGB").save(out, "PNG")
    return out


# ============= PAGE 2: SELECT =============
def page_select():
    bg = Image.new("RGB", (W, H), DESK_BG)
    paper_texture(bg, seed=13)
    canvas = bg.convert("RGBA")

    d = ImageDraw.Draw(canvas)
    d.text((26, 36), "← 回桌面", font=F_SMALL, fill=INK_LIGHT)
    draw_centered(canvas, "哪句话你今天不想自己说", W // 2, 38, F_HEAD, INK_DARK)

    # 8 notes, 2 cols × 4 rows
    notes = [
        ("被说中了", "我没事", NOTE_WHITE),
        ("人还在", "电先下班", NOTE_YELLOW),
        ("会做的", "不是现在", NOTE_KHAKI),
        ("表面好的", "后台别来", NOTE_WHITE),
        ("想安静", "先别问", NOTE_YELLOW),
        ("身体没签字", "嘴也没到岗", NOTE_KHAKI),
        ("消息看到了", "嘴没上班", NOTE_WHITE),
        ("我说可以", "因为不可以要解释", NOTE_YELLOW),
    ]
    nw, nh = 145, 130
    col_gap = 16
    row_gap = 22
    grid_x_start = (W - nw * 2 - col_gap) // 2
    grid_y_start = 92

    for i, (l1, l2, color) in enumerate(notes):
        col = i % 2
        row = i // 2
        x = grid_x_start + col * (nw + col_gap)
        y = grid_y_start + row * (nh + row_gap)
        tape_pos = "topleft" if i % 2 == 0 else "topright"
        canvas = draw_note(canvas, x, y, nw, nh, color, tape=(i % 3 != 0), tape_pos=tape_pos)
        # text on note
        d = ImageDraw.Draw(canvas)
        bbox1 = d.textbbox((0, 0), l1, font=F_LARGE)
        bbox2 = d.textbbox((0, 0), l2, font=F_MED)
        tx1 = x + (nw - (bbox1[2] - bbox1[0])) // 2
        tx2 = x + (nw - (bbox2[2] - bbox2[0])) // 2
        d.text((tx1, y + 24), l1, font=F_LARGE, fill=INK_DARK)
        d.text((tx2, y + 70), l2, font=F_MED, fill=INK_LIGHT)

    # Cat sitting at desk corner — only 1 desk object
    cat = load_role("low-battery-cat", "pose1")
    cw = 70
    ar = cat.size[0] / cat.size[1]
    cat_resized = cat.resize((cw, int(cw / ar)), Image.LANCZOS)
    canvas.paste(cat_resized, (W - cw - 12, H - cat_resized.size[1] - 36), cat_resized)

    # Desk object 2: pen mark
    draw_pen_mark(canvas, 26, 778, length=22)
    d = ImageDraw.Draw(canvas)
    d.text((54, 774), "选一句你想被替着说的", font=F_SMALL, fill=INK_LIGHT)

    out = os.path.join(OUT_DIR, "page2-select-v0.2.png")
    canvas.convert("RGB").save(out, "PNG")
    return out


# ============= PAGE 3: RESULT =============
def page_result():
    bg = Image.new("RGB", (W, H), DESK_BG)
    paper_texture(bg, seed=7)
    canvas = bg.convert("RGBA")

    d = ImageDraw.Draw(canvas)
    d.text((26, 36), "← 选场景", font=F_SMALL, fill=INK_LIGHT)
    draw_centered(canvas, "今天它替你说", W // 2, 38, F_HEAD, INK_DARK)

    # Big preview note (4:5 ratio occupying ~50% screen)
    nw, nh = 300, 410
    nx, ny = (W - nw) // 2, 78
    canvas = draw_note(canvas, nx, ny, nw, nh, NOTE_WHITE, tape=True, tape_pos="topright")

    # Cat embedded in note (60% of note width — leave room for big text below)
    cat = load_role("low-battery-cat", "main")
    cat_w = int(nw * 0.55)
    ar = cat.size[0] / cat.size[1]
    cat_h = int(cat_w / ar)
    cat_resized = cat.resize((cat_w, cat_h), Image.LANCZOS)
    cx = nx + (nw - cat_w) // 2
    cy = ny + 22
    canvas.paste(cat_resized, (cx, cy), cat_resized)

    # Mouthpiece text on note (lower half — clear of cat)
    text_y = ny + cat_h + 50
    draw_centered(canvas, "人在。", W // 2, text_y, F_HUGE, INK_DARK)
    draw_centered(canvas, "电不在。", W // 2, text_y + 64, F_HUGE, INK_DARK)

    # Tiny role label
    d = ImageDraw.Draw(canvas)
    d.text((nx + 14, ny + nh - 20), "— 低电量猫", font=F_SMALL, fill=INK_LIGHT)

    # Main button: 保存这张
    bw, bh = 220, 52
    bx, by = (W - bw) // 2, 528
    canvas = draw_button(canvas, bx, by, bw, bh, "保存这张", F_LARGE)

    # Sub buttons: 换一句 / 换一只
    sub_y = 600
    sub_w, sub_h = 132, 40
    sub_gap = 16
    total_w = sub_w * 2 + sub_gap
    sub_x_start = (W - total_w) // 2
    for i, label in enumerate(["换一句", "换一只"]):
        sx = sub_x_start + i * (sub_w + sub_gap)
        d = ImageDraw.Draw(canvas)
        # shadow
        sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        shd = ImageDraw.Draw(sh)
        shd.rounded_rectangle([sx, sub_y + 2, sx + sub_w, sub_y + sub_h + 2], radius=10, fill=(74, 55, 30, 30))
        sh = sh.filter(ImageFilter.GaussianBlur(3))
        canvas = Image.alpha_composite(canvas, sh)
        d = ImageDraw.Draw(canvas)
        d.rounded_rectangle([sx, sub_y, sx + sub_w, sub_y + sub_h], radius=10,
                            fill=NOTE_WHITE, outline=(180, 160, 120), width=1)
        bbox = d.textbbox((0, 0), label, font=F_MED)
        tw = bbox[2] - bbox[0]
        d.text((sx + (sub_w - tw) // 2, sub_y + 8), label, font=F_MED, fill=INK_DARK)

    # Tone chips
    chip_y = 670
    chips = ["更嘴硬", "更摆烂", "更礼貌", "更装没事"]
    chip_x = 28
    d = ImageDraw.Draw(canvas)
    for chip in chips:
        bbox = d.textbbox((0, 0), chip, font=F_SMALL)
        tw = bbox[2] - bbox[0] + 16
        d.rounded_rectangle([chip_x, chip_y, chip_x + tw, chip_y + 24],
                            radius=12, outline=(180, 160, 120), width=1)
        d.text((chip_x + 8, chip_y + 6), chip, font=F_SMALL, fill=INK_LIGHT)
        chip_x += tw + 8

    # Desk object 1: tape on right-bottom
    tape_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    td = ImageDraw.Draw(tape_layer)
    tx, ty = W - 70, H - 80
    td.rectangle([tx, ty, tx + 50, ty + 16], fill=TAPE_BEIGE)
    for fy in range(ty + 3, ty + 16, 4):
        td.line([(tx, fy), (tx + 50, fy)], fill=(200, 185, 150, 100), width=1)
    canvas = Image.alpha_composite(canvas, tape_layer)

    # Desk object 2: paperclip
    draw_paperclip(canvas, 30, H - 80)

    # Bottom signature
    draw_centered(canvas, "心情值班室", W // 2, H - 22, F_TINY, (130, 110, 80))

    out = os.path.join(OUT_DIR, "page3-result-v0.2.png")
    canvas.convert("RGB").save(out, "PNG")
    return out


if __name__ == "__main__":
    print("Generating mockups...")
    p1 = page_home()
    print(f"  page1: {p1}")
    p2 = page_select()
    print(f"  page2: {p2}")
    p3 = page_result()
    print(f"  page3: {p3}")
    print("Done.")
