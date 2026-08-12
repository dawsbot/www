# dawsbot.com

Next.js (pages router) personal site. `npm run dev`, `npm run build`.

Note: `npm test` runs `next lint`, which Next 16 removed — it fails regardless
of the state of the code.

## Blog

Posts live in `src/blog/`:

- `posts.js` — the registry: slug, title, date, reading time, description
- `posts/<slug>.js` — the body, a plain React component
- `styles.js` — shared card/article CSS, in the site's black + lime style

Routes are `pages/blog/index.js` (list) and `pages/blog/[slug].js` (post, SSG).

### Writing a post

Dawson's prose is **verbatim**. Headings, the title, and structure (paragraph
breaks, lists, tables, pull quotes, links) are fair game; his sentences are
not. Never write a subtitle, meta description, or card blurb in his voice —
use one of his own sentences or leave the field out. When you hand back a
draft, say plainly which lines are yours.

### Social cards — always `npm run og`

Every post needs `public/og/<slug>.png`. Never hand-make or hand-edit one, and
never point `og:image` at a photo or a stock asset:

```sh
npm run og                          # every post (runs next build first)
npm run og -- <slug>                # one post
npm run og -- <slug> --no-build     # reuse the existing build
```

`pages/og/[slug].js` renders the card as a real page, and
`scripts/generate-og.js` screenshots it with headless Chrome at 1200x630 @2x
(committed PNG is 2400x1260). Because the card is a page fed by `posts.js`, the
title and palette can never drift from the post. Adding a post to the registry
is all it takes for the card to exist — then run the script and commit the PNG.

Set `CHROME_BIN` if Chrome is not at the default macOS path.

### Meta tags

Site-wide `og:*` / `twitter:*` defaults live in `pages/_app.js`, each with a
`next/head` `key`. A page overrides one by rendering the same key — that
*replaces* the tag instead of emitting a second one for the scraper to choose
between. Keep it that way; don't move social defaults back into `_document.js`.

### After adding a post

1. Register it in `src/blog/posts.js`
2. `npm run og`
3. Add the URL to `public/sitemap.xml` and `public/llms.txt`
4. `npm run build`
