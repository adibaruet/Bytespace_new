# Assets to export from Figma

`public/images/` ships with generated placeholders so the page renders out of
the box. To reach full visual fidelity, export these from the Figma file and
overwrite the files at the same paths. No code changes are needed.

## Cut-out people (PNG, transparent background, 2x)

| Path | Where it appears |
|---|---|
| `public/images/people/hero.png` | Hero, student with headphones on the lime blob |
| `public/images/people/growth.png` | "Your Path to Professional Growth" |
| `public/images/people/create.png` | "Create & Manage Courses Easily" |

These three matter most: the placeholders are deliberately plain silhouettes.

## Course thumbnails (JPG, 2x, 16:10)

| Path | Course |
|---|---|
| `public/images/courses/figma.jpg` | Learn Figma from Basic |
| `public/images/courses/assets.jpg` | Build Digital Asset |
| `public/images/courses/bigdata.jpg` | the Power of Big Data |
| `public/images/courses/productivity.jpg` | Balancing Productivity and Rest |
| `public/images/courses/money.jpg` | Mastering Money Management |
| `public/images/courses/startup.jpg` | From Idea to Startup Success |

## Avatars (JPG, square, 256px+)

`a1.jpg` `a2.jpg` `a3.jpg` `a4.jpg` for the learner stacks, and
`sarah.jpg` `james.jpg` `alex.jpg` for the testimonials, all in
`public/images/avatars/`.

## Optional

The partner marks in the logo strip are drawn as inline SVG in
`src/components/sections/LogoStrip.tsx`. Swap them for the real Logoipsum marks
if you want an exact match.
