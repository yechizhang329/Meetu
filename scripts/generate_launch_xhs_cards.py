from __future__ import annotations

import math
import os
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "design-assets" / "xhs-launch"
OUT_DIR.mkdir(parents=True, exist_ok=True)

W, H = 1242, 1660


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


FONT_HEAVY = "/System/Library/Fonts/STHeiti Medium.ttc"
FONT_SANS = "/System/Library/Fonts/STHeiti Light.ttc"
FONT_HAND = "/System/Library/Fonts/MarkerFelt.ttc"
FONT_CH = "/System/Library/Fonts/STHeiti Medium.ttc"
FONT_CH_LIGHT = "/System/Library/Fonts/STHeiti Light.ttc"


def hex_rgb(value: str):
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def add_noise(im: Image.Image, amount: int = 18) -> Image.Image:
    px = im.load()
    for _ in range(amount * 1000):
        x = random.randint(0, im.width - 1)
        y = random.randint(0, im.height - 1)
        r, g, b = px[x, y][:3]
        delta = random.randint(-14, 14)
        nr = max(0, min(255, r + delta))
        ng = max(0, min(255, g + delta))
        nb = max(0, min(255, b + delta))
        px[x, y] = (nr, ng, nb)
    return im


def dashed_line(draw: ImageDraw.ImageDraw, xy, fill, width=3, dash=18, gap=12):
    x1, y1, x2, y2 = xy
    total = math.dist((x1, y1), (x2, y2))
    dx = (x2 - x1) / total
    dy = (y2 - y1) / total
    dist = 0
    while dist < total:
        start = dist
        end = min(dist + dash, total)
        draw.line(
            (
                x1 + dx * start,
                y1 + dy * start,
                x1 + dx * end,
                y1 + dy * end,
            ),
            fill=fill,
            width=width,
        )
        dist += dash + gap


def make_base(bg="#F7F2EA"):
    im = Image.new("RGB", (W, H), hex_rgb(bg))
    draw = ImageDraw.Draw(im)
    add_noise(im, 10)
    for _ in range(18):
        x = random.randint(-120, W)
        y = random.randint(-120, H)
        size = random.randint(80, 320)
        color = random.choice(["#FFE8C9", "#F3E2D1", "#FDE2E4", "#E6F1FF"])
        draw.ellipse((x, y, x + size, y + size), fill=hex_rgb(color))
    return im


def paste_rotated(base: Image.Image, card: Image.Image, x: int, y: int, angle: float):
    rotated = card.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)
    base.paste(rotated, (x, y), rotated)


def text_box(draw, xy, text, font_obj, fill, width, line_gap=12):
    x, y = xy
    lines = []
    current = ""
    for ch in text:
        test = current + ch
        bbox = draw.textbbox((0, 0), test, font=font_obj)
        if bbox[2] - bbox[0] > width and current:
            lines.append(current)
            current = ch
        else:
            current = test
    if current:
        lines.append(current)
    yy = y
    for line in lines:
        draw.text((x, yy), line, font=font_obj, fill=fill)
        bbox = draw.textbbox((x, yy), line, font=font_obj)
        yy += (bbox[3] - bbox[1]) + line_gap
    return yy


def save(img: Image.Image, name: str):
    path = OUT_DIR / name
    img.save(path, optimize=True, quality=95)
    print(path)


def card_layer(size, fill, radius=36, shadow=True):
    w, h = size
    layer = Image.new("RGBA", (w + 80, h + 80), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    if shadow:
        draw.rounded_rectangle((22, 28, w + 22, h + 28), radius=radius, fill=(0, 0, 0, 40))
        layer = layer.filter(ImageFilter.GaussianBlur(10))
        draw = ImageDraw.Draw(layer)
    draw.rounded_rectangle((14, 14, w + 14, h + 14), radius=radius, fill=fill)
    return layer


def make_cover():
    base = make_base("#F4EFE7")
    draw = ImageDraw.Draw(base)

    sticky = card_layer((920, 1140), (252, 247, 236, 255), radius=18, shadow=True)
    sdraw = ImageDraw.Draw(sticky)
    # tape
    sdraw.rounded_rectangle((170, 6, 360, 58), radius=10, fill=(255, 190, 120, 180))
    sdraw.rounded_rectangle((570, 0, 760, 52), radius=10, fill=(164, 207, 255, 150))
    # title
    f1 = font(FONT_CH, 132)
    f2 = font(FONT_CH, 120)
    sdraw.text((88, 165), "大学生", font=f1, fill="#141414")
    sdraw.text((92, 338), "才能进", font=f1, fill="#141414")
    sdraw.text((90, 586), "不信你", font=f2, fill="#FF5B2E")
    sdraw.text((92, 736), "试试", font=f2, fill="#FF5B2E")
    # underlines / doodles
    dashed_line(sdraw, (94, 872, 748, 872), fill="#141414", width=5, dash=26, gap=18)
    sdraw.arc((560, 760, 860, 1030), start=230, end=350, fill="#3E6BFF", width=8)
    sdraw.line((800, 300, 875, 255), fill="#FF5B2E", width=8)
    sdraw.line((870, 255, 905, 310), fill="#FF5B2E", width=8)
    sdraw.line((870, 255, 930, 245), fill="#FF5B2E", width=8)
    sdraw.text((88, 950), "那就来看看", font=font(FONT_HAND, 58), fill="#2C63F2")
    paste_rotated(base, sticky, 122, 210, -4.2)

    # desk scribbles
    draw.text((876, 103), "别装路人", font=font(FONT_CH, 40), fill="#FF5B2E")
    draw.text((150, 1440), "像有人把纸条拍桌上", font=font(FONT_CH_LIGHT, 32), fill="#5E5E5E")
    save(base, "launch_xhs_01_cover.png")


def make_meme():
    base = make_base("#F1ECE4")
    draw = ImageDraw.Draw(base)

    title = Image.new("RGBA", (980, 230), (0, 0, 0, 0))
    tdraw = ImageDraw.Draw(title)
    tdraw.rounded_rectangle((0, 0, 980, 218), radius=24, fill=(20, 20, 20, 255))
    tdraw.text((42, 28), "每个新产品上线都要", font=font(FONT_CH, 58), fill="white")
    tdraw.text((42, 104), "发一条帖子。", font=font(FONT_CH, 58), fill="white")
    tdraw.text((530, 160), "标准模板大概长这样", font=font(FONT_CH_LIGHT, 32), fill="#FFB84D")
    paste_rotated(base, title, 112, 70, -1.4)

    top = card_layer((975, 620), (252, 248, 240, 255), radius=28, shadow=True)
    d = ImageDraw.Draw(top)
    d.text((58, 48), "营销话术样板间", font=font(FONT_CH, 44), fill="#141414")
    items = [
        '✅ “家人们谁懂啊！！这个APP绝了”',
        '✅ “不允许还有人不知道这个神仙平台”',
        '✅ “天花板级别的大学生社交！入股不亏”',
        '✅ 封面写“测评来了｜大学生必备App合集”',
    ]
    y = 132
    for line in items:
        d.text((58, y), line, font=font(FONT_CH_LIGHT, 34), fill="#121212")
        y += 88
    d.text((85, 506), "（发完自己给自己评论“求链接”“已下”）", font=font(FONT_CH_LIGHT, 26), fill="#FF5B2E")
    paste_rotated(base, top, 96, 294, -2.4)

    bottom = card_layer((975, 575), (25, 28, 41, 255), radius=32, shadow=True)
    d = ImageDraw.Draw(bottom)
    d.text((52, 44), "吐槽区", font=font(FONT_CH, 44), fill="#FFFFFF")
    lines = [
        '🎯 “姐妹们！我发现一个宝藏平台！！”',
        '📸 九张精修图，五个感叹号，三个破折号',
        '💬 评论区清一色“怎么下载”',
    ]
    y = 132
    for line in lines:
        d.text((52, y), line, font=font(FONT_CH_LIGHT, 36), fill="#F2F2F2")
        y += 94
    d.text((70, 430), "（好整齐。比军训还齐。）", font=font(FONT_CH_LIGHT, 28), fill="#73E1FF")
    d.rounded_rectangle((52, 480, 920, 542), radius=18, fill=(255, 96, 58, 255))
    d.text((78, 494), "以上我们一条都不会写。也请不起博主。", font=font(FONT_CH, 31), fill="white")
    paste_rotated(base, bottom, 110, 975, 1.6)

    save(base, "launch_xhs_02_meme.png")


def make_info():
    base = make_base("#F5F1EA")
    draw = ImageDraw.Draw(base)

    card = card_layer((940, 1280), (250, 247, 242, 255), radius=34, shadow=True)
    d = ImageDraw.Draw(card)
    d.rounded_rectangle((58, 52, 312, 118), radius=24, fill=(255, 102, 61, 255))
    d.text((90, 66), "刚上线", font=font(FONT_CH, 34), fill="white")
    d.text((56, 156), "觅遇社", font=font(FONT_CH, 116), fill="#151515")
    d.text((62, 292), "不是来凑热闹的。", font=font(FONT_CH_LIGHT, 40), fill="#5D6BFF")

    bullets = [
        "只有在校大学生能进",
        "验学生证，每张真人审",
        "你可以发起活动 / 广场随便逛",
        "刚上线，人还不多，但进来的都是真的",
    ]
    y = 438
    for i, text in enumerate(bullets):
        d.rounded_rectangle((60, y - 8, 878, y + 104), radius=24, fill=(255, 255, 255, 255))
        d.ellipse((86, y + 26, 118, y + 58), fill=(255, 102, 61, 255))
        d.text((146, y + 12), text, font=font(FONT_CH_LIGHT, 35), fill="#131313")
        y += 144

    d.rounded_rectangle((60, 1088, 876, 1196), radius=30, outline=(20, 20, 20, 255), width=4, fill=(255, 248, 235, 255))
    d.text((88, 1113), "🔍 觅遇社", font=font(FONT_CH, 42), fill="#141414")
    d.text((62, 1240), "看懂了就去搜。别让别人先你一步。", font=font(FONT_CH_LIGHT, 30), fill="#FF5B2E")
    paste_rotated(base, card, 154, 154, -1.2)
    save(base, "launch_xhs_03_info.png")


if __name__ == "__main__":
    random.seed(42)
    make_cover()
    make_meme()
    make_info()
