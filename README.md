<div align="center">

# ByteSpace

**Landing page for the ByteSpace online-course platform**

Built from the [ByteSpace Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f)

[**Live Demo →**](https://bytespace-new-two.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Routes](#routes)
- [Project Structure](#project-structure)
- [Key Design Decisions](#key-design-decisions)
- [Design Tokens](#design-tokens)
- [Images and Assets](#images-and-assets)
- [Responsive Behavior](#responsive-behavior)

---

## Overview

ByteSpace is a landing page for an online-course platform, rebuilt from a Figma design. It has eight landing sections plus a footer, and two auth screens (Sign In and Create an Account).

Every colour, font and type size from the Figma style guide lives in one file, `src/app/globals.css`. No component contains a raw hex value, so re-theming the whole site means editing that one file.

---

## Tech Stack

| Area | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Fonts | Poppins (headings), Satoshi (body) |
| Deployment | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Create a production build
npm run build
```

---

## Development

Changes are made on feature branches and merged into `main` through pull requests, rather than committed to `main` directly.

---

## Routes

| Route | Screen |
|---|---|
| `/` | Landing page |
| `/login` | Sign In |
| `/signup` | Create an Account |

Both auth screens share one `AuthLayout` component. It owns the blue background, the course-card collage and the white form card. Each page only supplies its own text and form, so the two screens can't drift apart.

The navbar's **Sign In** and **Join Us** links, and the creator CTA, all lead to these pages.

---

## Project Structure

```
src/
├─ app/
│  ├─ globals.css         Design tokens: colour ramps, type scale, grid, utilities
│  ├─ layout.tsx          Font links and document metadata
│  ├─ page.tsx            Puts the landing sections together in order
│  ├─ login/page.tsx      Sign In
│  └─ signup/page.tsx     Create an Account
│
├─ components/
│  ├─ ui/                 Button, Chip, Container, Icon, Logo, SectionHeading,
│  │                      AvatarStack, TextField
│  ├─ cards/              CourseCard, CategoryCard, TestimonialCard, FloatingCard
│  ├─ decor/              Shapes.tsx (3D props rebuilt as inline SVG)
│  ├─ layout/             Navbar (with mobile menu), Footer, AuthLayout
│  └─ sections/           Hero, LogoStrip, DiscoverPassion, ExplorePaths,
│                         GrowthStats, CreateManage, CreatorCTA, Testimonials
│
└─ data/                  Content kept apart from layout: courses, categories,
                          testimonials, navigation
```

---

## Key Design Decisions

### 1. Content lives in `src/data`, not in JSX
Sections loop over typed arrays. Adding a course or a footer link is a one-line data change, and every card stays consistent. It is also the same shape the data would have if it came from a real API later.

### 2. Decorative shapes are inline SVG, not PNGs
The coils, rings, cones and cylinders in `decor/Shapes.tsx` stay sharp at any size, need no extra network requests, and can be recoloured from the palette.

### 3. Fonts load through `<link>` tags, not `next/font`
`next/font` downloads font files at build time, which fails on restricted CI networks. Plain `<link>` tags keep the build self-contained and let the browser fetch the fonts instead.

### 4. One layout component backs both auth screens
`AuthLayout` holds everything the Sign In and Create an Account screens have in common, and the card collage inside it reuses the same `CourseCard` the landing page uses. Card styling therefore lives in exactly one place.

---

## Design Tokens

### Colour ramps

Three ramps from the Figma style guide, each running 50 → 950:

| Token | Role | Key value |
|---|---|---|
| `ink-*` | Neutral / Black | `ink-950` → `#242528` |
| `brand-*` | Primary / Electric Violet | `brand-600` → `#0445ff` |
| `lime-*` | Secondary / Crimson | `lime-500` → `#cbfc00` |

### Type scale

Matches the style guide exactly.

| Group | Classes | Sizes | Line height |
|---|---|---|---|
| Headings | `text-h-l` / `h-m` / `h-s` / `h-xs` | 72 / 44 / 36 / 20 px | 120% |
| Body | `text-body-l` / `m` / `s` / `xs` | 18 / 16 / 14 / 12 px | 160% |
| Labels | `text-label-l` / `m` / `s` / `xs` | 18 / 16 / 14 / 12 px | 120% |

### Layout grid

12 columns, 1200px of content width, 40px gutter, applied through the `<Container>` component.

---

## Images and Assets

The three photographic cut-outs — the hero figure and the two feature bands — are the real Figma exports. The course thumbnails and learner avatars are generated placeholders, so the page renders without the remaining assets.

To use the real artwork, replace any file in `public/images/` with its matching export. Nothing else needs to change. The full list is in `ASSETS.md`.

To regenerate the placeholders:

```bash
python3 scripts/gen-placeholders.py
```

---

## Responsive Behavior

Tailwind's standard breakpoints are used throughout:

| Element | Mobile | Larger screens |
|---|---|---|
| Course grid | 1 column | 2 columns on `sm`, 3 on `lg` |
| Category cards (6) | 2 columns | Full grid |
| Navbar | Hamburger menu (below `md`) | Full nav links |
| Decorative shapes | Hidden, so they don't crowd the text | Shown |
