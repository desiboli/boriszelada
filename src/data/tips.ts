/* ==========================================================================
 * ⚠️  PLACEHOLDER CONTENT — REPLACE BEFORE GOING LIVE  ⚠️
 *
 * These are suggested article topics with placeholder summaries. None of them
 * link anywhere yet (`href` is null, which renders the card without a link).
 *
 * When you write a real guide, add its URL as `href` and the card becomes
 * clickable. To hide the section until then, set `SHOW_TIPS` to false.
 * ========================================================================== */

export const SHOW_TIPS = true;

export type Tip = {
  title: string;
  teaser: string;
  href: string | null;
};

export const tips: Tip[] = [
  {
    title: 'Så lägger ni tidsschemat för fotograferingen',
    teaser:
      'När på dagen bör porträtten ligga, hur lång tid tar gruppbilderna, och var brukar det bli tidsnöd? Placeholder-text.',
    href: null,
  },
  {
    title: 'Golden hour — varför 20 minuter är värt att spara',
    teaser:
      'Den sista timmen innan solnedgången ger det vackraste ljuset på hela dagen. Placeholder-text.',
    href: null,
  },
  {
    title: 'Gruppbilder utan stress',
    teaser:
      'En förberedd lista och en utsedd person som samlar folk gör hela skillnaden. Placeholder-text.',
    href: null,
  },
  {
    title: 'Regn på bröllopsdagen?',
    teaser:
      'Ingen fara — ofta blir det de mest minnesvärda bilderna. Så förbereder ni er. Placeholder-text.',
    href: null,
  },
];
