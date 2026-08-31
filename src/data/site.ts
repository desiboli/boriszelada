export const site = {
  name: 'Boris Zelada',
  role: 'Bröllopsfotograf',
  title: 'Boris Zelada — Bröllopsfotograf',
  description:
    'Fånga de magiska ögonblicken på er stora dag. Professionell bröllopsfotograf med över 10 år bakom kameran som skapar tidlösa och känslofyllda bilder. Boka din kostnadsfria konsultation idag.',
  email: 'boris_zelada@live.se',
  instagramHandle: '@boriszeladafoto',
  instagramUrl: 'https://instagram.com/boriszeladafoto',
  yearsExperience: 10,

  /**
   * ⚠️ REPLACE ME — Formspree form ID for the contact form.
   *
   * Create a free form at https://formspree.io, then paste the ID from the
   * endpoint it gives you (https://formspree.io/f/XXXXXXXX) here.
   * Until this is replaced the form falls back to opening the visitor's mail
   * client instead of submitting.
   */
  formspreeId: 'REPLACE_WITH_FORMSPREE_ID',
} as const;

export const isFormConfigured = !site.formspreeId.startsWith('REPLACE_WITH');
export const formEndpoint = `https://formspree.io/f/${site.formspreeId}`;

export const nav = [
  { label: 'Om mig', href: '#om' },
  { label: 'Galleri', href: '#galleri' },
  { label: 'Paket', href: '#paket' },
  { label: 'Omdömen', href: '#omdomen' },
  { label: 'Tips', href: '#tips' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;
