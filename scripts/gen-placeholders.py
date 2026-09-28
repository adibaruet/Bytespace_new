"""
Generates neutral placeholder art so the page renders before the real Figma
exports are dropped in. Overwrite any file in public/images/ with the matching
export from Figma and nothing else needs to change.

Run:  python3 scripts/gen-placeholders.py
"""
from PIL import Image, ImageDraw
import math, os, random

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "images")

BRAND = (4, 69, 255)
LIME = (203, 252, 0)
INK = (36, 37, 40)
PAIRS = [
    ((231, 246, 255), (176, 221, 255)),
    ((253, 255, 227), (228, 255, 83)),
    ((245, 245, 246), (206, 208, 211)),
    ((211, 238, 255), (129, 197, 255)),
    ((241, 255, 147), (140, 180, 0)),
    ((229, 230, 232), (170, 174, 181)),
]


def gradient(size, top, bottom, diagonal=True):
    w, h = size
    img = Image.new("RGB", size, top)
    d = ImageDraw.Draw(img)
    steps = h if not diagonal else w + h
    for i in range(steps):
        t = i / max(steps - 1, 1)
        c = tuple(round(top[j] + (bottom[j] - top[j]) * t) for j in range(3))
        if diagonal:
            d.line([(i, 0), (0, i)], fill=c, width=2)
        else:
            d.line([(0, i), (w, i)], fill=c)
    return img


def course(path, seed, pair):
    random.seed(seed)
    img = gradient((1600, 1000), pair[0], pair[1])
    d = ImageDraw.Draw(img, "RGBA")
    for _ in range(7):
        r = random.randint(90, 300)
        x = random.randint(-100, 1600)
        y = random.randint(-100, 1000)
        col = random.choice([BRAND, LIME, INK])
        d.ellipse([x, y, x + r, y + r], fill=col + (random.randint(18, 46),))
    for _ in range(3):
        x = random.randint(0, 1400)
        y = random.randint(0, 800)
        d.rounded_rectangle(
            [x, y, x + random.randint(160, 420), y + random.randint(60, 180)],
            radius=40,
            fill=(255, 255, 255, 40),
        )
    img.save(path, quality=88)


AVATAR_BGS = [
    (4, 69, 255), (140, 180, 0), (39, 114, 255), (106, 137, 3),
    (10, 54, 164), (86, 107, 8), (1, 59, 226),
]


def avatar(path, seed):
    """Strong, distinguishable stand-ins so the stacks read clearly on white."""
    bg = AVATAR_BGS[seed % len(AVATAR_BGS)]
    img = Image.new("RGB", (256, 256), bg)
    d = ImageDraw.Draw(img)
    skin = (244, 222, 203)
    d.ellipse([18, 165, 238, 395], fill=(255, 255, 255))
    d.ellipse([74, 48, 182, 156], fill=skin)
    d.ellipse([74, 40, 182, 96], fill=(58, 59, 63))
    img.save(path, quality=90)


def person(path, seed):
    """Transparent cut-out stand-in for the three photographed people."""
    random.seed(seed)
    img = Image.new("RGBA", (900, 1200), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    body = (140, 174, 205, 255)
    head = (176, 202, 226, 255)
    d.rounded_rectangle([250, 520, 650, 1200], radius=150, fill=body)
    d.ellipse([330, 230, 570, 470], fill=head)
    d.rounded_rectangle([170, 640, 300, 1080], radius=70, fill=body)
    d.rounded_rectangle([600, 640, 730, 1080], radius=70, fill=body)
    img.save(path)


os.makedirs(os.path.join(ROOT, "courses"), exist_ok=True)
os.makedirs(os.path.join(ROOT, "avatars"), exist_ok=True)
os.makedirs(os.path.join(ROOT, "people"), exist_ok=True)

for i, name in enumerate(
    ["figma", "assets", "bigdata", "productivity", "money", "startup"]
):
    course(os.path.join(ROOT, "courses", name + ".jpg"), i * 7 + 1, PAIRS[i])

for i, name in enumerate(["a1", "a2", "a3", "a4", "sarah", "james", "alex"]):
    avatar(os.path.join(ROOT, "avatars", name + ".jpg"), i)

for i, name in enumerate(["hero", "growth", "create"]):
    person(os.path.join(ROOT, "people", name + ".png"), i * 17 + 3)

print("placeholders written")
