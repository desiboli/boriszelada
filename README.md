# boriszelada.com

Single-page site for Boris Zelada, bröllopsfotograf. Built with Astro 7, Tailwind CSS v4
and Astro's built-in image and font pipelines. Ships as a fully static site — no server
or database required.

## Commands

| Command | Description |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server at `localhost:4321` |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the built site locally |

The agent guidelines in `AGENTS.md` prefer `pnpm astro dev --background`, which runs the
dev server detached (`astro dev stop` / `status` / `logs` to manage it).

## Before going live

Three things are placeholders and need real content:

1. **Testimonials** — `src/data/testimonials.ts`. The five quotes are invented filler with
   `PLACEHOLDER & PLACEHOLDER` bylines so they're obvious on the page. Replace with real
   quotes, or set `SHOW_TESTIMONIALS = false` to hide the whole section.
2. **Tips / guides** — `src/data/tips.ts`. Four suggested article topics with placeholder
   summaries. Give a card an `href` and it becomes clickable; set `SHOW_TIPS = false` to
   hide the section.
3. **Contact form** — `src/data/site.ts`, `formspreeId`. Create a free form at
   [formspree.io](https://formspree.io) and paste the ID from the endpoint it gives you
   (`https://formspree.io/f/XXXXXXXX`).

   Until that's set, the form still works: on submit it opens the visitor's mail client
   with every field pre-filled and addressed to `boris_zelada@live.se`. That's a weaker
   experience than a real form, so configuring Formspree is worth doing.

## Where the content lives

| What | File |
| --- | --- |
| Name, role, email, Instagram, SEO description, form ID | `src/data/site.ts` |
| Nav links (anchor targets) | `src/data/site.ts` |
| Package names, prices, what's included | `src/data/packages.ts` |
| Which photos appear in the gallery, and their alt text | `src/data/gallery.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Tips cards | `src/data/tips.ts` |

Longer prose lives directly in the section components under `src/components/`:
`Hero`, `About`, `QuoteBand`, `WhyMe`, `Contact`.

Page order is assembled in `src/pages/index.astro`.

## Photos

Source images live in `src/assets/photos/` and are referenced through Astro's `<Image>`
component, which generates responsive WebP variants at build time. The originals were
recovered from the previous Framer site and downsized to a 2400px long edge.

To add a photo:

1. Drop the file into `src/assets/photos/` (JPEG, long edge ~2400px is plenty).
2. Import it in `src/data/gallery.ts` and add an entry with descriptive Swedish `alt`
   text.

Alt text matters here — it's what screen readers and Google see, so describe what's
actually in the frame rather than writing "bröllopsfoto".

## Design system

Tokens are defined once in `src/styles/global.css` under `@theme`:

- **Colours** — `cream`, `shell`, `blush` (light bands); `plum`, `forest`, `ink` (dark
  bands); `clay`, `gold`, `sage` (accents). Use them as normal Tailwind colours, e.g.
  `bg-plum`, `text-clay`.
- **Type** — `font-display` (Fraunces), `font-body` (Afacad), `font-script` (Caveat).
  Fonts are self-hosted and subset automatically via Astro's `fonts` config in
  `astro.config.mjs`.
- **Fluid sizes** — `text-hero`, `text-display`, `text-title`, `text-lead` all scale with
  the viewport via `clamp()`, so headings need no responsive variants.
- **Helpers** — `.eyebrow` (all-caps kicker), `.script` (handwritten accent), `.reveal`
  (fades in on scroll; respects `prefers-reduced-motion`).

Sections alternate light and dark bands. If you add a section, keep that rhythm going.

## Deploying

The build output is static, so any static host works. Recommended: Cloudflare Pages,
Netlify, or Vercel.

- **Build command:** `pnpm build`
- **Output directory:** `dist`
- **Node version:** 22.12 or newer

Once the new site is live on a preview URL and you're happy with it, move the domain:

1. Add `boriszelada.com` and `www.boriszelada.com` as custom domains on the new host.
2. Update the DNS records at your registrar to point at the new host (the old records
   point at Framer).
3. Remove the custom domain from the Framer project so the two don't fight over it.

`site` in `astro.config.mjs` is set to `https://www.boriszelada.com` — it's used for
canonical URLs, OG tags and structured data, so update it if the final domain differs.
