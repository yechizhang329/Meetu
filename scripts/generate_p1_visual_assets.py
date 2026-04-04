from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "design-assets" / "p1-launch"
FONT_CN = "/System/Library/Fonts/Hiragino Sans GB.ttc"
FONT_EN = "/System/Library/Fonts/HelveticaNeue.ttc"
MASCOT_WINK = ROOT / "设计语言参考" / "Meetu元素参考" / "头像" / "image1.png"
MASCOT_PEACE = ROOT / "设计语言参考" / "Meetu元素参考" / "头像" / "image2.png"
NB_ROOT = ROOT / "设计语言参考" / "Meetu元素参考" / "nanobanana图片生成v1"
P0 = ROOT / "design-assets" / "p0-launch"


def rgb(hex_value: str) -> tuple[int, int, int]:
    value = hex_value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def gradient(size: tuple[int, int], colors: list[str], horizontal: bool = False) -> Image.Image:
    w, h = size
    palette = [rgb(c) for c in colors]
    img = Image.new("RGBA", size)
    px = img.load()
    steps = len(palette) - 1
    for y in range(h):
        for x in range(w):
            ratio = x / max(w - 1, 1) if horizontal else y / max(h - 1, 1)
            idx = min(int(ratio * steps), steps - 1 if steps > 1 else 0)
            local = (ratio - idx / steps) * steps if steps else 0
            c1 = palette[idx]
            c2 = palette[min(idx + 1, len(palette) - 1)]
            px[x, y] = tuple(int(c1[i] + (c2[i] - c1[i]) * local) for i in range(3)) + (255,)
    return img


def font(size: int, english: bool = False) -> ImageFont.FreeTypeFont:
    try:
        return ImageFont.truetype(FONT_EN if english else FONT_CN, size=size)
    except OSError:
        return ImageFont.load_default()


def fit_font(draw: ImageDraw.ImageDraw, text: str, max_width: int, start: int, min_size: int = 16) -> ImageFont.FreeTypeFont:
    for size in range(start, min_size - 1, -2):
        f = font(size)
        if draw.textbbox((0, 0), text, font=f)[2] <= max_width:
            return f
    return font(min_size)


def panel(size: tuple[int, int], radius: int, fill: str, alpha: int = 255, outline: tuple[int, int, int, int] | None = None) -> Image.Image:
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle(
        (0, 0, size[0] - 1, size[1] - 1),
        radius=radius,
        fill=rgb(fill) + (alpha,),
        outline=outline,
    )
    return img


def add_grain(img: Image.Image, opacity: int = 12) -> None:
    overlay = Image.new("RGBA", img.size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(overlay)
    for x in range(0, img.size[0], 18):
        for y in range(0, img.size[1], 18):
            draw.ellipse((x, y, x + 2, y + 2), fill=(255, 255, 255, opacity))
    img.alpha_composite(overlay)


def rounded_fit(path: Path, size: tuple[int, int], radius: int, crop: tuple[int, int, int, int] | None = None) -> Image.Image:
    src = Image.open(path).convert("RGBA")
    if crop:
        src = src.crop(crop)
    fitted = ImageOps.fit(src, size, method=Image.Resampling.LANCZOS)
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    out = Image.new("RGBA", size, (0, 0, 0, 0))
    out.paste(fitted, (0, 0), mask)
    return out


def save(img: Image.Image, relative: str) -> None:
    path = OUT / relative
    path.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(path)


def middle_banner_scene() -> Image.Image:
    img = gradient((1500, 560), ["#7B8CFF", "#76D1FF", "#FFC06A"], horizontal=True)
    add_grain(img, 14)
    draw = ImageDraw.Draw(img)

    draw.rounded_rectangle((48, 42, 1452, 518), radius=52, fill=(255, 255, 255, 28), outline=(255, 255, 255, 80))
    draw.rounded_rectangle((76, 72, 790, 486), radius=42, fill=(255, 255, 255, 160))
    draw.text((96, 96), "课后不知道干嘛？", fill="#32407A", font=font(70))
    draw.text((96, 194), "剧本杀 / 密室 / 运动 / City Walk，总有一场值得你搭上", fill="#566388", font=font(31))

    chip_x = 96
    for text in ["放学就能出发", "轻松认识搭子", "大学生真实在玩"]:
        f = font(24)
        w = draw.textbbox((0, 0), text, font=f)[2] + 40
        chip = panel((w, 48), 24, "#FFFFFF", 58)
        img.alpha_composite(chip, (chip_x, 246))
        draw.text((chip_x + 20, 258), text, fill="#FFFFFF", font=f)
        chip_x += w + 12

    refs = [
        P0 / "covers" / "p0_cover_02_escape_1200x1600.png",
        P0 / "covers" / "p0_cover_04_sports_1200x1600.png",
        P0 / "covers" / "p0_cover_05_citywalk_1200x1600.png",
        P0 / "covers" / "p0_cover_01_boardgame_1200x1600.png",
    ]
    positions = [(860, 74), (1060, 52), (920, 250), (1150, 232)]
    sizes = [(250, 170), (250, 170), (250, 170), (250, 170)]
    angles = [-4, 3, -2, 5]
    for ref, pos, size, angle in zip(refs, positions, sizes, angles):
        card = rounded_fit(ref, size, 28)
        shadow = Image.new("RGBA", (size[0] + 30, size[1] + 30), (0, 0, 0, 0))
        sd = ImageDraw.Draw(shadow)
        sd.rounded_rectangle((18, 18, size[0] + 10, size[1] + 10), radius=30, fill=(0, 0, 0, 55))
        shadow = shadow.filter(ImageFilter.GaussianBlur(14))
        rotated_shadow = shadow.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
        rotated = card.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
        img.alpha_composite(rotated_shadow, (pos[0] - 10, pos[1] - 4))
        img.alpha_composite(rotated, pos)

    draw.rounded_rectangle((96, 438, 296, 504), radius=33, fill=(255, 255, 255, 235))
    draw.text((132, 454), "滑下去看看 →", fill="#2A1E17", font=font(30))
    return img


def middle_banner_girls() -> Image.Image:
    img = gradient((1500, 560), ["#FFD7D7", "#FFF2EA", "#C7D4FF"], horizontal=True)
    add_grain(img, 12)
    draw = ImageDraw.Draw(img)

    draw.rounded_rectangle((48, 42, 1452, 518), radius=52, fill=(255, 255, 255, 24), outline=(255, 255, 255, 88))
    draw.text((96, 88), "女生专场", fill="#4A2D33", font=font(74))
    draw.text((96, 180), "女生局 · 在校认证 · 安心搭上", fill="#5F4A55", font=font(34))

    chip_x = 96
    chip_specs = [
        ("女生专场", "#FFEBC9"),
        ("在校认证", "#FFD2C7"),
        ("安心搭上", "#CBEEDD"),
    ]
    for text, fill in chip_specs:
        f = font(26)
        w = draw.textbbox((0, 0), text, font=f)[2] + 48
        chip = panel((w, 54), 26, fill, 245, outline=(140, 100, 100, 45))
        img.alpha_composite(chip, (chip_x, 246))
        draw.text((chip_x + 24, 260), text, fill="#4C3339", font=f)
        chip_x += w + 16

    visual = rounded_fit(NB_ROOT / "banner" / "4.png", (520, 350), 40, crop=(1700, 120, 3072, 1340))
    img.alpha_composite(visual, (860, 112))
    draw.rounded_rectangle((860, 112, 908, 462), radius=28, fill=(249, 242, 238, 230))
    draw.rounded_rectangle((96, 432, 280, 498), radius=33, fill=(255, 255, 255, 235))
    draw.text((128, 449), "查看专场 →", fill="#2A1E17", font=font(28))
    return img


def countdown_poster(day: str, title: str, subtitle: str, bottom: str, palette: list[str], mascot_path: Path | None = None) -> Image.Image:
    img = gradient((1080, 1920), palette)
    add_grain(img, 12)
    draw = ImageDraw.Draw(img)

    number_font = font(360, english=True)
    draw.text((72, 90), day, fill=(255, 255, 255, 58), font=number_font)

    collage_box = (90, 560, 990, 1380)
    draw.rounded_rectangle(collage_box, radius=60, fill=(255, 255, 255, 24), outline=(255, 255, 255, 92))
    covers = [
        P0 / "covers" / "p0_cover_02_escape_1200x1600.png",
        P0 / "covers" / "p0_cover_03_party_1200x1600.png",
        P0 / "covers" / "p0_cover_05_citywalk_1200x1600.png",
    ]
    thumbs = [
        (covers[0], (140, 650), (250, 360), -6),
        (covers[1], (420, 600), (260, 380), 4),
        (covers[2], (715, 690), (220, 330), -3),
    ]
    for ref, pos, size, angle in thumbs:
        thumb = rounded_fit(ref, size, 34)
        shadow = Image.new("RGBA", (size[0] + 32, size[1] + 32), (0, 0, 0, 0))
        ImageDraw.Draw(shadow).rounded_rectangle((16, 16, size[0] + 12, size[1] + 12), radius=36, fill=(0, 0, 0, 45))
        shadow = shadow.filter(ImageFilter.GaussianBlur(18))
        shadow = shadow.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
        thumb = thumb.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
        img.alpha_composite(shadow, (pos[0] - 12, pos[1] - 8))
        img.alpha_composite(thumb, pos)

    if mascot_path:
        mascot = rounded_fit(mascot_path, (260, 260), 44)
        img.alpha_composite(mascot, (760, 1120))

    title_font = fit_font(draw, title, 860, 86, 52)
    draw.text((90, 1540), title, fill="white", font=title_font)
    draw.text((90, 1670), subtitle, fill=(248, 247, 251), font=font(34))
    bottom_panel = panel((480, 64), 32, "#FFFFFF", 228)
    img.alpha_composite(bottom_panel, (90, 1780))
    draw.text((120, 1798), bottom, fill="#2A1E17", font=font(28))
    return img


def xhs_cover(title: str, subtitle: str, tags: list[str], palette: list[str], visual_paths: list[Path], dark: bool = False) -> Image.Image:
    img = gradient((1080, 1440), palette)
    add_grain(img, 14)
    draw = ImageDraw.Draw(img)

    if dark:
        overlay = Image.new("RGBA", img.size, (10, 10, 18, 110))
        img.alpha_composite(overlay)

    positions = [(620, 120), (720, 520), (520, 760)]
    sizes = [(320, 420), (280, 360), (300, 390)]
    angles = [-8, 6, -5]
    for ref, pos, size, angle in zip(visual_paths, positions, sizes, angles):
        card = rounded_fit(ref, size, 34)
        shadow = Image.new("RGBA", (size[0] + 28, size[1] + 28), (0, 0, 0, 0))
        ImageDraw.Draw(shadow).rounded_rectangle((16, 16, size[0] + 8, size[1] + 8), radius=36, fill=(0, 0, 0, 58))
        shadow = shadow.filter(ImageFilter.GaussianBlur(18))
        shadow = shadow.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
        card = card.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
        img.alpha_composite(shadow, (pos[0] - 10, pos[1] - 6))
        img.alpha_composite(card, pos)

    title_font = fit_font(draw, title, 520, 96, 46)
    subtitle_font = fit_font(draw, subtitle, 480, 42, 24)
    title_fill = "#FFFFFF" if dark else "#2B1A14"
    subtitle_fill = "#F8EFF5" if dark else "#5D4136"

    draw.text((72, 110), title, fill=title_fill, font=title_font)
    draw.text((72, 270), subtitle, fill=subtitle_fill, font=subtitle_font)

    y = 1130
    x = 72
    for tag in tags:
        f = font(30)
        w = draw.textbbox((0, 0), tag, font=f)[2] + 42
        fill = "#FF6FA8" if dark else "#FFFFFF"
        alpha = 235 if not dark else 230
        text_fill = "#1F1320" if not dark else "#2B1326"
        chip = panel((w, 54), 27, fill, alpha)
        img.alpha_composite(chip, (x, y))
        draw.text((x + 21, y + 12), tag, fill=text_fill, font=f)
        x += w + 14
        if x > 760:
            x = 72
            y += 68
    return img


def build_preview() -> None:
    items = [
        ("中部 Banner · 场景种草", OUT / "banners" / "p1_middle_banner_scene_1500x560.png"),
        ("中部 Banner · 女生专场", OUT / "banners" / "p1_middle_banner_girls_1500x560.png"),
        ("倒计时 D-3", OUT / "countdown" / "p1_countdown_d3_1080x1920.png"),
        ("倒计时 D-2", OUT / "countdown" / "p1_countdown_d2_1080x1920.png"),
        ("倒计时 D-1", OUT / "countdown" / "p1_countdown_d1_1080x1920.png"),
        ("小红书封面 · 痛点", OUT / "xiaohongshu" / "p1_xhs_cover_pain_1080x1440.png"),
        ("小红书封面 · 价格", OUT / "xiaohongshu" / "p1_xhs_cover_price_1080x1440.png"),
        ("小红书封面 · 好奇", OUT / "xiaohongshu" / "p1_xhs_cover_curiosity_1080x1440.png"),
    ]
    cards: list[Image.Image] = []
    label_font = font(26)
    for label, path in items:
        im = Image.open(path).convert("RGB")
        im.thumbnail((520, 520))
        card = Image.new("RGB", (560, 620), "#F6F0E8")
        ImageDraw.Draw(card).text((18, 18), label, fill="#3B312C", font=label_font)
        x = (560 - im.width) // 2
        y = 70 + (520 - im.height) // 2
        card.paste(im, (x, y))
        cards.append(card)

    board = Image.new("RGB", (1160, ((len(cards) + 1) // 2) * 640 + 40), "#EEE6DD")
    for idx, card in enumerate(cards):
        x = 20 + (idx % 2) * 560
        y = 20 + (idx // 2) * 640
        board.paste(card, (x, y))
    save(board, "previews/p1_overview_board.png")


def main() -> None:
    save(middle_banner_scene(), "banners/p1_middle_banner_scene_1500x560.png")
    save(middle_banner_girls(), "banners/p1_middle_banner_girls_1500x560.png")

    save(
        countdown_poster(
            "3",
            "3天后，和搭子见面这件事会变得更简单",
            "觅遇社｜大学生专属找搭子平台 即将上线",
            "微信搜索“觅遇社”小程序",
            ["#FF7A2F", "#FFB55C", "#FF7FB3"],
            MASCOT_WINK,
        ),
        "countdown/p1_countdown_d3_1080x1920.png",
    )
    save(
        countdown_poster(
            "2",
            "还有2天，下一场好玩的正在等你",
            "在校认证 · 找搭子更安心 · 活动收费更清楚",
            "微信搜索“觅遇社”小程序",
            ["#FF97A6", "#C296FF", "#6BC8FF"],
            MASCOT_PEACE,
        ),
        "countdown/p1_countdown_d2_1080x1920.png",
    )
    save(
        countdown_poster(
            "1",
            "明天见，准备搭上",
            "首批活动即将上线",
            "微信搜索“觅遇社”小程序",
            ["#FF7422", "#FFD26A", "#FF8BB8"],
            MASCOT_PEACE,
        ),
        "countdown/p1_countdown_d1_1080x1920.png",
    )

    save(
        xhs_cover(
            "找搭子终于不用蹲评论区了",
            "大学生专属找搭子平台",
            ["#找搭子", "#大学生社交", "#线下活动"],
            ["#151321", "#2F1645", "#FF6FA8"],
            [
                P0 / "plaza" / "p0_plaza_card_01_welcome_1500x2000.png",
                P0 / "covers" / "p0_cover_02_escape_1200x1600.png",
                P0 / "covers" / "p0_cover_03_party_1200x1600.png",
            ],
            dark=True,
        ),
        "xiaohongshu/p1_xhs_cover_pain_1080x1440.png",
    )
    save(
        xhs_cover(
            "¥0.01起，也能先把人约出来",
            "自习 / 散步 / 打球，轻松先搭上",
            ["#学生党", "#低门槛", "#找搭子"],
            ["#FF7A2F", "#FFB05A", "#FF7FB3"],
            [
                P0 / "covers" / "p0_cover_06_study_1200x1600.png",
                P0 / "covers" / "p0_cover_04_sports_1200x1600.png",
                P0 / "covers" / "p0_cover_05_citywalk_1200x1600.png",
            ],
            dark=False,
        ),
        "xiaohongshu/p1_xhs_cover_price_1080x1440.png",
    )
    save(
        xhs_cover(
            "下一场会遇到什么样的搭子？",
            "周末别宅了，去搭上一场未知惊喜",
            ["#周末去处", "#搭子局", "#未知惊喜"],
            ["#2B1648", "#5E35B1", "#FF88B7"],
            [
                P0 / "covers" / "p0_cover_09_surprise_1200x1600.png",
                P0 / "covers" / "p0_cover_02_escape_1200x1600.png",
                P0 / "covers" / "p0_cover_01_boardgame_1200x1600.png",
            ],
            dark=True,
        ),
        "xiaohongshu/p1_xhs_cover_curiosity_1080x1440.png",
    )

    build_preview()


if __name__ == "__main__":
    main()
