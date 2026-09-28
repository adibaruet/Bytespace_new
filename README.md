# ByteSpace

Landing page for the ByteSpace online-course platform, built from the
[ByteSpace New Figma design](https://bytespace-new-two.vercel.app/).

**Live:** _add your Vercel URL here_

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Fonts | Poppins (headings), Satoshi (body) |
| Deploy | Vercel |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## How it is put together

Every colour, font and type step from the Figma style guide lives in one place,
`src/app/globals.css`, as Tailwind v4 `@theme` tokens. No component contains a
raw hex value, so re-theming means editing one file.

```
src/
├─ app/
│  ├─ globals.css        design tokens: colour ramps, type scale, grid, utilities
│  ├─ layout.tsx         font links + document metadata
│  ├─ page.tsx           composes the nine landing sections in order
│  ├─ login/page.tsx     Sign In
│  └─ signup/page.tsx    Create an Account
├─ components/
│  ├─ ui/                primitives: Button, Chip, Container, Icon, Logo,
│  │                     SectionHeading, AvatarStack
│  ├─ cards/             CourseCard, CategoryCard, TestimonialCard, FloatingCard
│  ├─ decor/             Shapes.tsx — the 3D props rebuilt as inline SVG
│  ├─ layout/            Navbar (with mobile menu), Footer, AuthLayout
│  └─ sections/          Hero, LogoStrip, DiscoverPassion, ExplorePaths,
│                        GrowthStats, CreateManage, CreatorCTA, Testimonials
└─ data/                 content separated from presentation: courses,
                         categories, testimonials, navigation
```

Three decisions worth calling out:

**Content lives in `src/data`, not in JSX.** Sections map over typed arrays, so
adding a course or a footer link is a one-line data change and every card stays
consistent. It is also the shape the data would arrive in from a real API.

**Decorative shapes are inline SVG, not exported PNGs.** The coils, rings, cones
and cylinders in `decor/Shapes.tsx` stay crisp at any size, cost no network
requests, and can be recoloured from the palette.

**Fonts load via stylesheet links rather than `next/font`.** `next/font` fetches
font files at build time, which fails in restricted CI networks. Plain `<link>`
tags keep the build hermetic and let the browser fetch the fonts.

## Routes

| Route | Screen |
|---|---|
| `/` | Landing page |
| `/login` | Sign In |
| `/signup` | Create an Account |

Both auth screens share `AuthLayout`, which owns the blue field, the course-card
collage and the white form card. Each page supplies only its own copy and form,
so the two cannot drift apart. The nav's "Sign In" and "Join Us" links and the
creator CTA all route into them.

## Design tokens

The three ramps from the Figma style guide, each 50 → 950:

| Token | Role | Key value |
|---|---|---|
| `ink-*` | Neutral / Black | `ink-950` `#242528` |
| `brand-*` | Primary / Electric Violet | `brand-600` `#0445ff` |
| `lime-*` | Secondary / Crimson | `lime-500` `#cbfc00` |

Type scale, matching the style guide exactly: `text-h-l` 72px, `text-h-m` 44px,
`text-h-s` 36px, `text-h-xs` 20px (all 120% leading); `text-body-l/m/s/xs`
18/16/14/12px at 160%; `text-label-l/m/s/xs` at 120%.

Layout follows the 12-column grid: 1200px of content, 40px gutter, via
`<Container>`.

## Images

`public/images/` currently holds generated placeholders so the page renders
without the Figma assets. Replace any file with the matching export and nothing
else needs to change — see `ASSETS.md` for the list.

```bash
python3 scripts/gen-placeholders.py   # regenerate placeholders
```

## Responsive

Single breakpoint system from Tailwind: one column on mobile, two on `sm`,
three on `lg` for the course grid; six category cards collapse to two columns;
the nav becomes a hamburger below `md`; decorative shapes are hidden on small
screens where they would crowd the copy.
