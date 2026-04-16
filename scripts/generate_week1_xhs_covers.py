from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "design-assets" / "xhs-week1"
OUT_DIR.mkdir(parents=True, exist_ok=True)

W, H = 900, 1200

FONT_HEAVY = "/System/Library/Fonts/STHeiti Medium.ttc"
FONT_LIGHT = "/System/Library/Fonts/STHeiti Light.ttc"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def hex_rgb(value: str):
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def add_noise(im: Image.Image, amount: int = 8) -> Image.Image:
    px = im.load()
    for _ in range(amount * 1000):
        x = random.randint(0, im.width - 1)
        y = random.randint(0, im.height - 1)
        r, g, b = px[x, y][:3]
        delta = random.randint(-10, 10)
        px[x, y] = (
            max(0, min(255, r + delta)),
            max(0, min(255, g + delta)),
            max(0, min(255, b + delta)),
        )
    return im


def v_gradient(size, top: str, bottom: str) -> Image.Image:
    w, h = size
    t = hex_rgb(top)
    b = hex_rgb(bottom)
    im = Image.new("RGB", (w, h))
    px = im.load()
    for y in range(h):
        ratio = y / max(1, h - 1)
        row = (
            int(t[0] + (b[0] - t[0]) * ratio),
            int(t[1] + (b[1] - t[1]) * ratio),
            int(t[2] + (b[2] - t[2]) * ratio),
        )
        for x in range(w):
            px[x, y] = row
    return im


def multiline(draw, text, x, y, fnt, fill, line_gap=14):
    yy = y
    for line in text.split("\n"):
        draw.text((x, yy), line, font=fnt, fill=fill)
        bbox = draw.textbbox((x, yy), line, font=fnt)
        yy += (bbox[3] - bbox[1]) + line_gap
    return yy


def center_text(draw, text, y, fnt, fill):
    bbox = draw.textbbox((0, 0), text, font=fnt)
    x = (W - (bbox[2] - bbox[0])) // 2
    draw.text((x, y), text, font=fnt, fill=fill)


def save(im: Image.Image, name: str):
    path = OUT_DIR / name
    im.save(path, optimize=True, quality=95)
    print(path)


def d1():
    im = v_gradient((W, H), "#0F1012", "#1B1D22")
    add_noise(im, 6)
    draw = ImageDraw.Draw(im)
    draw.rectangle((0, 0, W, 26), fill="#FFFFFF")
    draw.rectangle((56, 132, 208, 146), fill="#FF5B2E")
    multiline(draw, "不是你\n社恐", 72, 220, font(FONT_HEAVY, 138), "#FFFFFF", 10)
    draw.rectangle((66, 610, 836, 618), fill="#FF5B2E")
    multiline(draw, "是大学根本\n没给你机会", 72, 662, font(FONT_LIGHT, 60), "#EDEDED", 18)
    draw.text((70, 1088), "社交洞察 01", font=font(FONT_LIGHT, 28), fill="#8C8F97")
    save(im, "d1-cover.png")


def d2():
    im = v_gradient((W, H), "#1A1C22", "#0D0E11")
    add_noise(im, 5)
    draw = ImageDraw.Draw(im)
    draw.rounded_rectangle((70, 116, 420, 408), radius=36, outline="#4F5564", width=3)
    draw.rounded_rectangle((482, 778, 348 + 482, 1070), radius=36, outline="#4F5564", width=3)
    draw.text((114, 150), "3000", font=font(FONT_HEAVY, 150), fill="#FF5B2E")
    draw.text((578, 816), "5", font=font(FONT_HEAVY, 186), fill="#FFCB3D")
    draw.text((408, 522), "vs", font=font(FONT_HEAVY, 120), fill="#FFFFFF")
    multiline(draw, "微信好友三千\n周末能约出来的\n不超过五个", 92, 940, font(FONT_LIGHT, 44), "#F0F0F0", 12)
    draw.text((72, 1086), "社交洞察 02", font=font(FONT_LIGHT, 28), fill="#8D94A1")
    save(im, "d2-cover.png")


def d3():
    im = v_gradient((W, H), "#F7EFE5", "#FFF8EE")
    add_noise(im, 6)
    draw = ImageDraw.Draw(im)
    draw.rounded_rectangle((66, 88, 240, 156), radius=18, fill="#FF8C3B")
    draw.text((101, 104), "武汉", font=font(FONT_HEAVY, 42), fill="#FFFFFF")
    multiline(draw, "大学生周末\n去处", 76, 220, font(FONT_HEAVY, 118), "#3A2414", 10)
    draw.rounded_rectangle((70, 646, 820, 840), radius=28, fill="#FFE0B7")
    multiline(draw, "8个花不了\n几块钱的", 98, 690, font(FONT_HEAVY, 82), "#A44C14", 14)
    for i, c in enumerate(["#FFB84D", "#FF8C3B", "#FFC96B", "#FF9F68", "#FFD7A6"]):
        x = 88 + i * 138
        draw.ellipse((x, 980, x + 82, 1062), fill=c)
    draw.text((70, 1110), "实用资源 03", font=font(FONT_LIGHT, 28), fill="#966C43")
    save(im, "d3-cover.png")


def d4():
    im = v_gradient((W, H), "#24354A", "#101821")
    add_noise(im, 5)
    draw = ImageDraw.Draw(im)
    draw.rectangle((68, 136, 88, 1044), fill="#5CC1FF")
    multiline(draw, "认识的人\n越多\n越孤独", 118, 168, font(FONT_HEAVY, 118), "#F5F7FA", 10)
    draw.rounded_rectangle((116, 812, 680, 922), radius=24, fill="#162432")
    multiline(draw, "大学社交的\n一个发现", 150, 835, font(FONT_LIGHT, 56), "#BFE3FF", 12)
    draw.text((118, 1090), "社交洞察 04", font=font(FONT_LIGHT, 28), fill="#A0B2C2")
    save(im, "d4-cover.png")


def d5():
    im = v_gradient((W, H), "#FFEBA8", "#FFD46B")
    add_noise(im, 6)
    draw = ImageDraw.Draw(im)
    draw.ellipse((678, 170, 844, 336), fill="#E67A2B")
    draw.arc((706, 196, 816, 306), 30, 210, fill="#6D2E12", width=8)
    draw.arc((706, 196, 816, 306), 215, 390, fill="#6D2E12", width=8)
    draw.line((761, 194, 761, 308), fill="#6D2E12", width=8)
    draw.line((706, 251, 816, 251), fill="#6D2E12", width=8)
    multiline(draw, "上周组了\n个局", 78, 210, font(FONT_HEAVY, 126), "#231815", 12)
    draw.rounded_rectangle((78, 706, 814, 880), radius=28, fill="#FFF3C4")
    multiline(draw, "结果来了个\n体育生", 108, 736, font(FONT_HEAVY, 84), "#9E3D15", 10)
    draw.text((82, 1098), "故事型 05", font=font(FONT_LIGHT, 28), fill="#895D19")
    save(im, "d5-cover.png")


def d6():
    im = Image.new("RGB", (W, H), "#F4F4F4")
    draw = ImageDraw.Draw(im)
    draw.polygon([(0, 0), (W, 0), (0, H)], fill="#E14747")
    draw.polygon([(W, 0), (W, H), (0, H)], fill="#3BA56A")
    add_noise(im, 4)
    draw = ImageDraw.Draw(im)
    draw.rounded_rectangle((88, 170, 812, 480), radius=32, fill="#111111")
    multiline(draw, "室友≠朋友", 128, 258, font(FONT_HEAVY, 112), "#FFFFFF", 8)
    draw.rounded_rectangle((198, 700, 702, 818), radius=26, fill="#FFFFFF")
    center_text(draw, "你同意吗？", 724, font(FONT_HEAVY, 54), "#1B1B1B")
    draw.text((94, 1100), "争议投票 06", font=font(FONT_LIGHT, 28), fill="#FFFFFF")
    save(im, "d6-cover.png")


def d7():
    im = v_gradient((W, H), "#DFF8ED", "#C8F2E4")
    add_noise(im, 6)
    draw = ImageDraw.Draw(im)
    shadow = Image.new("RGBA", (580, 280), (0, 0, 0, 0))
    s = ImageDraw.Draw(shadow)
    s.rounded_rectangle((24, 28, 556, 252), radius=34, fill=(0, 0, 0, 36))
    shadow = shadow.filter(ImageFilter.GaussianBlur(12))
    im.paste(shadow, (150, 166), shadow)
    draw.rounded_rectangle((172, 184, 692, 392), radius=34, fill="#FFFFFF")
    draw.text((242, 212), "¥30", font=font(FONT_HEAVY, 132), fill="#1A8D67")
    draw.text((570, 308), "以下", font=font(FONT_HEAVY, 58), fill="#1A8D67")
    multiline(draw, "大学生社交\n方式清单", 118, 590, font(FONT_HEAVY, 94), "#113C34", 12)
    draw.text((118, 1094), "实用资源 07", font=font(FONT_LIGHT, 28), fill="#487C6E")
    save(im, "d7-cover.png")


if __name__ == "__main__":
    random.seed(16)
    d1()
    d2()
    d3()
    d4()
    d5()
    d6()
    d7()
