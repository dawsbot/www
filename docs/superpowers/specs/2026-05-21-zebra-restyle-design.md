# Zebra Restyle — Design Spec

**Date:** 2026-05-21
**Scope:** Visual restyle of the personal site (dawsbot.com). No content rewrites, no new sections, no new dependencies.

## Goal

Redesign the site's look to echo the layout of michaelgreen06.com (two-column hero, clean card sections) but in a black & white "zebra" theme with electric-lime accent, replacing the current red "Swiss modernist" theme.

## Decisions

- **Zebra treatment:** stripes as accents (not stripe-forward, not strict B&W).
- **Accent color:** electric lime `#c4f000`, used sparingly.
- **Sections:** restyle the existing sections only — Hero, About/Expertise, Open Source Projects, Connect, Contact. No blog, no separate footer.
- **Hero:** two-column (text left, headshot right).
- **Fonts:** Archivo (heavy weights, display/headings) + Hanken Grotesk (body), replacing Bebas Neue + Barlow.

## Visual language

**Palette**
- Ink `#0e0e0e` · Paper `#ffffff` · Secondary text `#6b6b6b` · Hairline `#e6e6e6`
- Accent: electric lime `#c4f000` — primary buttons, link/nav underlines, star badges, typed-text cursor
- Hard 2px black borders on cards and inputs (keeps the existing Swiss rigor, monochrome).

**Zebra stripes** — `repeating-linear-gradient` diagonal black/white pattern, accent use only:
- ~20px striped divider band between major sections
- striped backing block behind/beside the hero headshot
- striped corner revealed on project-card hover
- striped strip above the contact section

## Layout (single page)

1. **Top nav** — white bar, black bottom hairline, `DB` monogram left, links right (Home / Developer Tips / Resume), lime underline on hover + active.
2. **Hero (two-column)** — Left: eyebrow label, large name, typed.js rotating tagline, one-line bio, lime "Let's talk" button + "View resume" text link. Right: headshot on a zebra-stripe backing block, with the 👋 emoji as a small accent.
3. **About / Areas of Expertise** — black band, white text. Two bio paragraphs, outlined expertise chips, bordered-square tech tiles (React / Node / Solidity / TypeScript).
4. **Open Source Projects** — existing card grid, numbered 01–11. Cards invert (black-on-white → white-on-black) on hover; number turns lime; striped corner appears.
5. **Connect** — three social links as a tidy row (replacing the 300px icons), preceded by a striped divider.
6. **Contact form** — restyled: hard black borders, lime submit button.

## Technical approach

The site is theme-driven (`src/components/themes.js` → `useTheme()`); a single `swiss-modernist` theme is in use.

- **`themes.js`** — rewrite the theme into a `zebra` theme; add tokens for the stripe pattern and lime accent.
- **`IndexIndex.js`** — two-column hero, stripe divider/backing elements, refined Connect row, updated card hover (`ThemeEffects` CSS).
- **`TopNav.js`** — monogram + right-aligned links + lime underline.
- **`_document.js` / `_app.js`** — swap Google Font imports to Space Grotesk + Inter.
- **`colors.js`** — update exported color constants.
- `resume`, `tips`, `bot` pages inherit theme colors; smoke-check for clashes, fix only what breaks.

No new npm dependencies.

## Out of scope

Blog section, dedicated footer, content/copy rewrites, the unused multi-theme switcher.

## Success criteria

- Home page renders the two-column hero, striped accents, and lime CTA with no console errors.
- Project cards invert on hover.
- `resume` and `tips` pages render without visual clashes.
- `npm run build` succeeds.
