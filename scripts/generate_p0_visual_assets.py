from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "design-assets" / "p0-launch"
FONT_CN = "/System/Library/Fonts/Hiragino Sans GB.ttc"
FONT_EN = "/System/Library/Fonts/HelveticaNeue.ttc"
MASCOT = ROOT / "设计语言参考" / "Meetu元素参考" / "0 Meetu mascot master.png"
LOGO = ROOT / "设计语言参考" / "Meetu元素参考" / "1 Meetu Logo.png"


@dataclass
class Category:
    slug: str
    name: str
    icon: str
    colors: tuple[str, str, str]
    sample_title: str
    sample_subtitle: str
    price: str


CATEGORIES: list[Category] = [
    Category("boardgame", "桌游·推理", "桌", ("#283593", "#536DFE", "#FF7422"), "今晚一起推理开脑洞", "新手友好 · 轻松破冰", "39"),
    Category("escape", "密室·剧本杀", "密", ("#4A148C", "#7C4DFF", "#FFB300"), "周末密室来点刺激", "剧情沉浸 · 搭子速配", "58"),
    Category("party", "派对·社交", "派", ("#C2185B", "#FF6F91", "#FFB300"), "周五晚上别宅了", "轻松社交 · 氛围局", "29"),
    Category("sports", "运动·户外", "动", ("#2E7D32", "#26A69A", "#42A5F5"), "羽毛球搭子速速集合", "轻运动 · 零压力认识人", "12"),
    Category("citywalk", "City Walk", "逛", ("#0277BD", "#4FC3F7", "#FF9E80"), "跟着路线一起逛一圈", "松江散步 · 拍照很出片", "9.9"),
    Category("study", "学习·搭伴", "学", ("#455A64", "#90A4AE", "#FFD166"), "图书馆一起坐会儿", "自习监督 · 安静搭伴", "0.01"),
    Category("sharing", "交流·分享", "聊", ("#EF6C00", "#FF8A65", "#FFD54F"), "周末来聊聊最近生活", "轻话题 · 好搭子更容易遇到", "0.01"),
    Category("movie", "观影·展览", "影", ("#5E35B1", "#9575CD", "#FFD54F"), "下课后一起看场展", "电影 / 展览 / 逛馆", "25"),
    Category("surprise", "惊喜·随机", "惊", ("#8E24AA", "#FF7EB3", "#64B5F6"), "随机一点更有意思", "未知搭子 · 未知玩法", "19"),
]


TOP_BANNERS = [
    {
        "slug": "brand",
        "title": "觅遇社，找到你的搭子",
        "subtitle": "大学生专属找搭子平台",
        "eyebrow": "周末别一个人玩",
        "chips": ["剧本杀", "City Walk", "运动局"],
        "palette": ("#FF7422", "#FF9B73", "#B388FF"),
    },
    {
        "slug": "trust",
        "title": "每个搭子都是真实的大学生",
        "subtitle": "在校认证 · 实名验证 · 放心出发",
        "eyebrow": "先放心，再出发",
        "chips": ["在校认证", "实名验证", "女生安心模式"],
        "palette": ("#42A5F5", "#7AD3F7", "#FFB86B"),
    },
    {
        "slug": "host",
        "title": "你来组局，觅遇社找人",
        "subtitle": "成为觅遇社主理人，把会玩变成超能力",
        "eyebrow": "主理人招募",
        "chips": ["平台帮你找人", "活动定价更清楚", "身份更带感"],
        "palette": ("#FF7422", "#FFC046", "#FF7EB3"),
    },
]


PLAZA_CARDS = [
    ("welcome", "终于不用在评论区蹲搭子了", "这里不一样，真实大学生在等你一起玩。", "去首页看看有什么好玩的"),
    ("step1", "Step 1 · 逛一逛今天有什么好玩的", "剧本杀、密室、City Walk、运动局，一眼就能看到。", "先逛，再心动"),
    ("step2", "Step 2 · 看中就搭上", "价格、时间、地点都写清楚，想去就直接搭上。", "搭上了就等你来"),
    ("step3", "Step 3 · 到了就开玩", "线下见面没那么难，大家其实也都一个人来的。", "齐了就出发"),
]

ICON_SPECS = [
    ("boardgame", "桌游·推理", "桌", "#283593", "#FF7422"),
    ("escape", "密室·剧本杀", "密", "#6A1B9A", "#FFB300"),
    ("party", "派对·社交", "派", "#D81B60", "#FF8A65"),
    ("sports", "运动·户外", "动", "#2E7D32", "#4FC3F7"),
    ("citywalk", "City Walk", "逛", "#0277BD", "#7AD3F7"),
    ("study", "学习·搭伴", "学", "#546E7A", "#FFD166"),
    ("sharing", "交流·分享", "聊", "#EF6C00", "#FFCC80"),
    ("movie", "观影·展览", "影", "#5E35B1", "#FFD54F"),
    ("surprise", "惊喜·随机", "惊", "#8E24AA", "#64B5F6"),
]


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def lerp(a: int, b: int, t: float) -> int:
    return int(a + (b - a) * t)


def gradient(size: tuple[int, int], colors: Iterable[str], horizontal: bool = False) -> Image.Image:
    colors = [hex_to_rgb(c) for c in colors]
    w, h = size
    img = Image.new("RGBA", size)
    px = img.load()
    steps = len(colors) - 1
    for y in range(h):
        for x in range(w):
            ratio = x / max(w - 1, 1) if horizontal else y / max(h - 1, 1)
            idx = min(int(ratio * steps), steps - 1 if steps > 1 else 0)
            local = (ratio - idx / steps) * steps if steps else 0
            c1 = colors[idx]
            c2 = colors[min(idx + 1, len(colors) - 1)]
            px[x, y] = tuple(lerp(c1[i], c2[i], local) for i in range(3)) + (255,)
    return img


def rounded_panel(size: tuple[int, int], radius: int, fill: str, alpha: int = 255, outline: str | None = None) -> Image.Image:
    panel = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(panel)
    color = hex_to_rgb(fill) + (alpha,)
    draw.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=color, outline=outline)
    return panel


def load_font(size: int, bold: bool = False, english: bool = False) -> ImageFont.FreeTypeFont:
    path = FONT_EN if english else FONT_CN
    try:
        return ImageFont.truetype(path, size=size)
    except OSError:
        return ImageFont.load_default()


def fit_text(draw: ImageDraw.ImageDraw, text: str, max_width: int, start_size: int, min_size: int = 20, bold: bool = False) -> ImageFont.FreeTypeFont:
    for size in range(start_size, min_size - 1, -2):
        font = load_font(size, bold=bold)
        bbox = draw.textbbox((0, 0), text, font=font)
        if bbox[2] - bbox[0] <= max_width:
            return font
    return load_font(min_size, bold=bold)


def paste_mascot(base: Image.Image, size: tuple[int, int], pos: tuple[int, int], rotate: float = 0) -> None:
    mascot = Image.open(MASCOT).convert("RGBA")
    mascot.thumbnail(size, Image.Resampling.LANCZOS)
    if rotate:
        mascot = mascot.rotate(rotate, expand=True, resample=Image.Resampling.BICUBIC)
    shadow = Image.new("RGBA", mascot.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle((10, mascot.size[1] - 24, mascot.size[0] - 10, mascot.size[1] - 8), radius=20, fill=(0, 0, 0, 50))
    shadow = shadow.filter(ImageFilter.GaussianBlur(8))
    base.alpha_composite(shadow, (pos[0] + 4, pos[1] + 10))
    base.alpha_composite(mascot, pos)


def paste_logo(base: Image.Image, width: int, pos: tuple[int, int], alpha: int = 160) -> None:
    logo = Image.open(LOGO).convert("RGBA")
    ratio = width / logo.size[0]
    logo = logo.resize((width, int(logo.size[1] * ratio)), Image.Resampling.LANCZOS)
    logo.putalpha(alpha)
    base.alpha_composite(logo, pos)


def add_grain(base: Image.Image, opacity: int = 18) -> None:
    overlay = Image.new("RGBA", base.size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(overlay)
    step = 18
    for x in range(0, base.size[0], step):
        for y in range(0, base.size[1], step):
            draw.ellipse((x, y, x + 2, y + 2), fill=(255, 255, 255, opacity))
    base.alpha_composite(overlay)


def save(img: Image.Image, relative: str) -> None:
    path = OUT / relative
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path)


def banner_asset(spec: dict) -> Image.Image:
    img = gradient((1500, 680), spec["palette"])
    draw = ImageDraw.Draw(img)
    add_grain(img, 16)

    # Decor
    decor = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(decor)
    d.ellipse((1090, -90, 1500, 260), fill=(255, 255, 255, 32))
    d.ellipse((-90, 420, 340, 820), fill=(255, 255, 255, 20))
    d.rounded_rectangle((760, 90, 1330, 540), radius=60, fill=(255, 255, 255, 24), outline=(255, 255, 255, 70))
    img.alpha_composite(decor)

    paste_mascot(img, (350, 350), (995, 175))

    eyebrow_font = load_font(34)
    title_font = fit_text(draw, spec["title"], 760, 82, 52)
    subtitle_font = load_font(38)
    chip_font = load_font(28)

    draw.text((88, 90), spec["eyebrow"], fill=(255, 248, 239), font=eyebrow_font)
    draw.text((88, 150), spec["title"], fill="white", font=title_font)
    draw.text((88, 260), spec["subtitle"], fill=(255, 248, 242), font=subtitle_font)

    x = 88
    for chip in spec["chips"]:
        bbox = draw.textbbox((0, 0), chip, font=chip_font)
        w = bbox[2] - bbox[0] + 46
        chip_panel = rounded_panel((w, 52), 26, "#FFFFFF", 50)
        img.alpha_composite(chip_panel, (x, 350))
        draw.text((x + 23, 361), chip, fill=(255, 255, 255), font=chip_font)
        x += w + 14

    cta = rounded_panel((220, 72), 36, "#FFFFFF", 236)
    img.alpha_composite(cta, (88, 438))
    cta_font = load_font(30)
    draw.text((124, 456), "去看看 →", fill="#2A1E17", font=cta_font)
    paste_logo(img, 230, (1188, 590))
    return img


def cover_asset(cat: Category) -> Image.Image:
    img = gradient((1200, 1600), cat.colors)
    draw = ImageDraw.Draw(img)
    add_grain(img, 12)
    panel = rounded_panel((1100, 1500), 60, "#FFFFFF", 28, outline=(255, 255, 255, 80))
    img.alpha_composite(panel, (50, 50))

    # top tag
    tag = rounded_panel((300, 74), 36, "#FFFFFF", 70)
    img.alpha_composite(tag, (82, 76))
    draw.text((122, 95), f"{cat.icon}  {cat.name}", fill="white", font=load_font(34))

    # center visual
    circle = Image.new("RGBA", img.size, (0, 0, 0, 0))
    cdraw = ImageDraw.Draw(circle)
    cdraw.ellipse((720, 190, 1110, 580), fill=(255, 255, 255, 36))
    cdraw.ellipse((780, 250, 1050, 520), fill=(255, 255, 255, 22))
    img.alpha_composite(circle)
    paste_mascot(img, (330, 330), (778, 238))
    icon_panel = rounded_panel((138, 138), 40, "#FFFFFF", 54, outline=(255, 255, 255, 140))
    img.alpha_composite(icon_panel, (156, 240))
    icon_font = load_font(86)
    draw.text((198, 264), cat.icon, fill=(255, 255, 255), font=icon_font)

    title_font = fit_text(draw, cat.sample_title, 930, 68, 42)
    subtitle_font = load_font(34)
    draw.text((82, 760), cat.sample_title, fill="white", font=title_font)
    draw.text((82, 850), cat.sample_subtitle, fill=(255, 246, 240), font=subtitle_font)

    meta = rounded_panel((1036, 180), 40, "#1C1412", 92)
    img.alpha_composite(meta, (82, 1280))
    meta_font = load_font(32)
    price_font = load_font(58)
    draw.text((126, 1336), "人数 4人齐了", fill="white", font=meta_font)
    draw.text((126, 1390), "松江大学城 · 今晚 19:30", fill=(255, 244, 238), font=meta_font)
    draw.text((940, 1346), f"¥{cat.price}", fill="#FFD166", font=price_font)
    draw.text((946, 1412), "/ 人", fill=(255, 246, 240), font=load_font(28))
    paste_logo(img, 200, (866, 1186), alpha=135)
    return img


def plaza_card(kind: str, title: str, body: str, footer: str) -> Image.Image:
    palettes = {
        "welcome": ("#FF7422", "#FFB36A", "#FF7EB3"),
        "step1": ("#64B5F6", "#8AD4FF", "#FFB86B"),
        "step2": ("#B388FF", "#D0A6FF", "#FF8A65"),
        "step3": ("#26A69A", "#7CE0D1", "#FFB86B"),
    }
    img = gradient((1500, 2000), palettes[kind])
    draw = ImageDraw.Draw(img)
    add_grain(img, 12)

    shell = rounded_panel((1270, 1750), 76, "#FFF9F3", 245)
    img.alpha_composite(shell, (115, 120))

    title_font = fit_text(draw, title, 980, 84, 52)
    body_font = load_font(42)
    footer_font = load_font(34)
    draw.text((190, 220), title, fill="#221714", font=title_font)
    draw.text((190, 355), body, fill="#59443B", font=body_font)

    # phone mock
    phone = rounded_panel((760, 980), 56, "#FFFFFF", 255)
    img.alpha_composite(phone, (370, 560))
    pd = ImageDraw.Draw(img)
    pd.rounded_rectangle((410, 620, 1090, 1480), radius=42, outline=(225, 215, 210), width=5)
    pd.rounded_rectangle((540, 590, 960, 630), radius=20, fill=(235, 230, 225))

    if kind == "welcome":
        paste_mascot(img, (330, 330), (594, 770))
        pd.rounded_rectangle((470, 1170, 1030, 1270), radius=36, fill=hex_to_rgb("#FF7422"))
        pd.text((560, 1196), "去首页看看有什么好玩的", fill="white", font=load_font(34))
    elif kind == "step1":
        for i, label in enumerate(["剧本杀", "City Walk", "羽毛球", "观影"]):
            y = 720 + i * 175
            pd.rounded_rectangle((450, y, 1010, y + 132), radius=34, fill=(248, 246, 243))
            pd.rounded_rectangle((480, y + 24, 608, y + 108), radius=28, fill=hex_to_rgb("#FFB36A"))
            pd.text((640, y + 44), label, fill="#2C201B", font=load_font(34))
            pd.text((640, y + 82), "看一眼就知道适不适合你", fill="#8A6E63", font=load_font(24))
    elif kind == "step2":
        pd.rounded_rectangle((460, 760, 1040, 920), radius=36, fill=(248, 246, 243))
        pd.text((510, 808), "周六密室夜场", fill="#241A17", font=load_font(40))
        pd.text((510, 870), "¥58 / 人 · 4人齐了", fill="#8A6E63", font=load_font(28))
        pd.rounded_rectangle((525, 1070, 975, 1180), radius=46, fill=hex_to_rgb("#FF7422"))
        pd.text((657, 1109), "搭上", fill="white", font=load_font(42))
        for i in range(4):
            pd.ellipse((525 + i * 95, 1260, 595 + i * 95, 1330), fill=(255, 213, 102))
    else:
        paste_mascot(img, (320, 320), (595, 720))
        pd.text((515, 1120), "齐了！出发", fill="#2A201B", font=load_font(56))
        pd.text((500, 1200), "到了就开始认识新搭子", fill="#6A554B", font=load_font(32))
        for i in range(5):
            pd.ellipse((480 + i * 105, 1320, 540 + i * 105, 1380), fill=(255, 197, 111))

    footer_panel = rounded_panel((760, 86), 40, "#221714", 220)
    img.alpha_composite(footer_panel, (370, 1610))
    draw.text((440, 1633), footer, fill="white", font=footer_font)
    paste_logo(img, 220, (1078, 1824), alpha=150)
    return img


def host_identity_card() -> Image.Image:
    img = gradient((1200, 1600), ("#FF7422", "#FFB36A", "#FF7EB3"))
    draw = ImageDraw.Draw(img)
    add_grain(img, 12)
    shell = rounded_panel((1040, 1440), 72, "#FFF7F1", 246)
    img.alpha_composite(shell, (80, 80))
    draw.text((128, 130), "觅遇社主理人", fill="#241813", font=load_font(64))
    draw.text((130, 220), "你来开一场，我们帮你把人聚齐。", fill="#6B554A", font=load_font(34))

    badge = rounded_panel((300, 70), 34, "#FF7422", 255)
    img.alpha_composite(badge, (128, 290))
    draw.text((188, 309), "已认证主理人", fill="white", font=load_font(30))

    paste_mascot(img, (420, 420), (675, 250))

    card = rounded_panel((944, 560), 46, "#FFFFFF", 255, outline=(241, 226, 216))
    img.alpha_composite(card, (128, 450))
    draw.rounded_rectangle((180, 510, 404, 734), radius=40, fill=(255, 240, 230))
    draw.text((196, 580), "主理人\n头像位", fill="#8A6959", font=load_font(40))
    draw.text((448, 526), "会玩的人，自带号召力", fill="#241813", font=load_font(46))
    draw.text((448, 620), "活动类型：剧本杀 / City Walk / 运动局", fill="#6B554A", font=load_font(30))
    draw.text((448, 676), "带搭指数：★★★★★", fill="#6B554A", font=load_font(30))
    draw.text((448, 732), "最近开场：12 次", fill="#6B554A", font=load_font(30))

    for i, (label, value) in enumerate([("本月开场", "12"), ("累计搭子", "78"), ("常来学校", "4")]):
        x = 128 + i * 315
        stat = rounded_panel((284, 190), 40, "#FFF1E8", 255)
        img.alpha_composite(stat, (x, 1075))
        draw.text((x + 32, 1122), label, fill="#8A6959", font=load_font(28))
        draw.text((x + 32, 1170), value, fill="#FF7422", font=load_font(60))

    paste_logo(img, 230, (862, 1450), alpha=160)
    return img


def share_poster() -> Image.Image:
    img = gradient((1080, 1920), ("#FF7422", "#FF9B73", "#B388FF"))
    draw = ImageDraw.Draw(img)
    add_grain(img, 12)
    shell = rounded_panel((980, 1780), 66, "#FFF8F2", 248)
    img.alpha_composite(shell, (50, 70))

    head = rounded_panel((900, 780), 54, "#FFEDE3", 255)
    img.alpha_composite(head, (90, 120))
    draw.text((140, 180), "周六一起去玩点新的", fill="#2A1C17", font=load_font(54))
    draw.text((140, 265), "松江大学城 · 晚上 19:30", fill="#7B6458", font=load_font(30))
    paste_mascot(img, (350, 350), (610, 320))
    draw.text((140, 390), "活动类型：密室·剧本杀", fill="#533E36", font=load_font(36))
    draw.text((140, 452), "适合：第一次来也不尴尬", fill="#533E36", font=load_font(36))
    draw.text((140, 514), "人数状态：4人齐了", fill="#533E36", font=load_font(36))
    price = rounded_panel((230, 92), 42, "#FF7422", 255)
    img.alpha_composite(price, (140, 620))
    draw.text((195, 646), "¥58 / 人", fill="white", font=load_font(36))

    info = rounded_panel((900, 500), 46, "#FFFFFF", 255, outline=(244, 228, 217))
    img.alpha_composite(info, (90, 960))
    draw.text((135, 1020), "这场有什么好玩的？", fill="#2A1C17", font=load_font(44))
    bullets = [
        "真实大学生一起去，不用再评论区蹲人",
        "时间、地点、价格都写清楚，看中直接搭上",
        "一个人来也完全 OK，到了就有人一起玩",
    ]
    y = 1120
    for bullet in bullets:
        draw.rounded_rectangle((138, y + 16, 166, y + 44), radius=14, fill=hex_to_rgb("#FF7422"))
        draw.text((190, y), bullet, fill="#5E493F", font=load_font(30))
        y += 108

    qr = rounded_panel((280, 280), 36, "#FFF2E6", 255)
    img.alpha_composite(qr, (400, 1510))
    qd = ImageDraw.Draw(img)
    for i in range(7):
        for j in range(7):
            if (i * j) % 3 != 1:
                qd.rounded_rectangle((430 + i * 30, 1540 + j * 30, 452 + i * 30, 1562 + j * 30), radius=4, fill="#2A1C17")
    draw.text((350, 1810), "扫码搭上，一起出发", fill="#2A1C17", font=load_font(38))
    paste_logo(img, 180, (820, 1700), alpha=150)
    return img


def icon_asset(name: str, label: str, glyph: str, bg: str, accent: str) -> Image.Image:
    img = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
    grad = gradient((512, 512), (bg, accent, "#FFF5EF"))
    mask = Image.new("L", (512, 512), 0)
    ImageDraw.Draw(mask).rounded_rectangle((24, 24, 488, 488), radius=150, fill=255)
    img.paste(grad, (0, 0), mask)
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((24, 24, 488, 488), radius=150, outline=(255, 255, 255, 190), width=8)
    draw.ellipse((132, 108, 380, 356), fill=(255, 255, 255, 84))
    glyph_font = load_font(108)
    gbox = draw.textbbox((0, 0), glyph, font=glyph_font)
    gx = 256 - (gbox[2] - gbox[0]) // 2
    draw.text((gx, 150), glyph, fill="#5A3B31", font=glyph_font)
    label_font = fit_text(draw, label, 320, 44, 24)
    lbox = draw.textbbox((0, 0), label, font=label_font)
    lx = 256 - (lbox[2] - lbox[0]) // 2
    draw.text((lx, 382), label, fill="#2A1C17", font=label_font)
    return img


def ensure_clean_dir() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for rel in ["banners", "covers", "plaza", "cards", "icons"]:
        (OUT / rel).mkdir(parents=True, exist_ok=True)


def main() -> None:
    ensure_clean_dir()

    for idx, spec in enumerate(TOP_BANNERS, start=1):
        save(banner_asset(spec), f"banners/p0_banner_top_{idx:02d}_{spec['slug']}_1500x680.png")

    for idx, cat in enumerate(CATEGORIES, start=1):
        save(cover_asset(cat), f"covers/p0_cover_{idx:02d}_{cat.slug}_1200x1600.png")

    for idx, (kind, title, body, footer) in enumerate(PLAZA_CARDS, start=1):
        save(plaza_card(kind, title, body, footer), f"plaza/p0_plaza_card_{idx:02d}_{kind}_1500x2000.png")

    save(host_identity_card(), "cards/p0_host_identity_card_1200x1600.png")
    save(share_poster(), "cards/p0_share_poster_1080x1920.png")

    for name, label, glyph, bg, accent in ICON_SPECS:
        save(icon_asset(name, label, glyph, bg, accent), f"icons/p0_icon_{name}_512x512.png")


if __name__ == "__main__":
    main()
