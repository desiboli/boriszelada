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

Two sections are hidden until they have real content. Each one drops out of the menu
too while hidden:

1. **Testimonials** — `src/data/testimonials.ts`. The five quotes are invented filler.
   Replace them with real quotes, then set `SHOW_TESTIMONIALS = true`.
2. **Tips / guides** — `src/data/tips.ts`. Four suggested article topics with placeholder
   summaries. Give a card an `href` and it becomes clickable; set `SHOW_TIPS = true` once
   the articles exist.

## Contact form (Netlify Forms)

The contact form submits to [Netlify Forms](https://docs.netlify.com/manage/forms/setup/),
so it only works on the deployed Netlify site and its deploy previews. Submitting on
`localhost` shows a notice that nothing was sent, which is expected.

One-time setup in the Netlify dashboard:

1. **Forms → Enable form detection**, then redeploy. A form called `kontakt` should appear.
2. **Forms → Form notifications → Email notification** to `boris_zelada@live.se`.
3. Send a test from the live site. If no email arrives, check the form's **Spam** list
   in Netlify before assuming it failed.

The privacy policy at `/integritetspolicy` (`src/pages/integritetspolicy.astro`) describes
this setup: Netlify receives the form, nothing is used for marketing, enquiries without a
booking are deleted within 12 months, and the site sets no cookies. Update it if any of
that changes, e.g. if analytics are added, and bump the "Senast uppdaterad" date.

If the form is renamed, change both `name` on the `<form>` and the hidden `form-name`
field in `src/components/Contact.astro`.

## Where the content lives

| What | File |
| --- | --- |
| Name, role, email, Instagram, SEO description | `src/data/site.ts` |
| Booking button label (used on every "book" button) | `src/data/site.ts`, `bookingLabel` |
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

The site is deployed to Netlify. The build output is static, but the contact form relies
on Netlify Forms, so moving to another host means replacing the form backend too.

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
