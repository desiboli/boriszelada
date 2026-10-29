import type { APIRoute } from 'astro';

// Every static page in this folder, minus the error page. Trailing slashes
// match the canonical URLs, since pages build to `<name>/index.html`.
const paths = Object.keys(import.meta.glob('./**/*.astro'))
  .map((file) => file.slice(1).replace(/\.astro$/, '').replace(/\/?index$/, ''))
  .filter((path) => path !== '/404' && !path.includes('['))
  .map((path) => `${path}/`)
  .sort();

export const GET: APIRoute = ({ site }) => {
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
