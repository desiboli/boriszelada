import { SHOW_TESTIMONIALS } from './testimonials';
import { SHOW_TIPS } from './tips';

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
  /** The one label every "book me" button uses, so visitors see a single next step. */
  bookingLabel: 'Boka kostnadsfri konsultation',
} as const;

// Optional sections drop out of the menu when hidden so no link points at a
// missing anchor. Links are root-relative so they also work from subpages.
export const nav = [
  { label: 'Om mig', href: '/#om', show: true },
  { label: 'Galleri', href: '/#galleri', show: true },
  { label: 'Paket', href: '/#paket', show: true },
  { label: 'Omdömen', href: '/#omdomen', show: SHOW_TESTIMONIALS },
  { label: 'Tips', href: '/#tips', show: SHOW_TIPS },
  { label: 'Kontakt', href: '/#kontakt', show: true },
]
  .filter((item) => item.show)
  .map(({ label, href }) => ({ label, href }));
