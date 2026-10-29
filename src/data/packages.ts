/**
 * Real pricing, carried over verbatim from boriszelada.com.
 * `summary` is the original wording; `includes` is the same content split into
 * a list so it can be laid out as a card.
 */
export type Package = {
  number: string;
  name: string;
  price: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

/** Value used in the contact form's package dropdown, and by the package
 *  cards to pre-select it. */
export const packageOptionValue = (pkg: Package) => `${pkg.name} (${pkg.price})`;

export const packages: Package[] = [
  {
    number: '01',
    name: 'Lilla',
    price: '7 000 SEK',
    summary:
      'Porträtt av brudparet, vigsel, brudfölje och familj samt gratulationer/mingel i samband med vigseln.',
    includes: [
      'Porträtt av brudparet',
      'Vigsel',
      'Brudfölje och familj',
      'Gratulationer och mingel i samband med vigseln',
    ],
  },
  {
    number: '02',
    name: 'Mellan',
    price: '13 000 SEK',
    summary:
      'Porträtt av brudparet, vigsel, brudfölje och familj, gratulationer/mingel i samband med vigsel samt middag med tal.',
    includes: [
      'Porträtt av brudparet',
      'Vigsel',
      'Brudfölje och familj',
      'Gratulationer och mingel i samband med vigseln',
      'Middag med tal',
    ],
    featured: true,
  },
  {
    number: '03',
    name: 'Stora',
    price: '18 000 SEK',
    summary:
      'Porträtt av brudparet, vigsel, brudfölje och familj, gratulationer/mingel i samband med vigsel, middag med tal samt efterföljande fest, skärning av tårtan och första dansen.',
    includes: [
      'Porträtt av brudparet',
      'Vigsel',
      'Brudfölje och familj',
      'Gratulationer och mingel i samband med vigseln',
      'Middag med tal',
      'Efterföljande fest',
      'Skärning av tårtan',
      'Första dansen',
    ],
  },
];
