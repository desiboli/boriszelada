/**
 * Wedding packages shown on the site and in the contact form.
 * `summary` is the same content as `includes`, written as one sentence.
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
    price: '8 000 SEK',
    summary:
      'Fotografering av vigseln, porträttfotografering av brudparet, familje- och gruppbilder, 200–250 redigerade bilder, digitalt onlinegalleri och högupplösta bilder för nedladdning.',
    includes: [
      'Fotografering av vigseln',
      'Porträttfotografering av brudparet',
      'Familje- och gruppbilder',
      '200–250 redigerade bilder',
      'Digitalt onlinegalleri',
      'Högupplösta bilder för nedladdning',
    ],
  },
  {
    number: '02',
    name: 'Mellan',
    price: '14 000 SEK',
    summary:
      'Förberedelser hos brudparet, first look om önskat, vigsel och gratulationer, porträttfotografering, familje- och gruppbilder, mingel och detaljer från bröllopet, 400–500 redigerade bilder, digitalt onlinegalleri och sneak peek inom 48 timmar.',
    includes: [
      'Förberedelser hos brudparet',
      'First look (om önskat)',
      'Vigsel och gratulationer',
      'Porträttfotografering',
      'Familje- och gruppbilder',
      'Mingel och detaljer från bröllopet',
      '400–500 redigerade bilder',
      'Digitalt onlinegalleri',
      'Sneak peek inom 48 timmar',
    ],
    featured: true,
  },
  {
    number: '03',
    name: 'Stora',
    price: '19 000 SEK',
    summary:
      'Förberedelser och påklädning, first look, porträttfotografering, vigsel och gratulationer, familje- och gruppbilder, mingel och bröllopsmiddag, tal och fest, brudvals och dans, 800–900 redigerade bilder, sneak peek inom 48 timmar, prioriterad leverans och personligt onlinegalleri.',
    includes: [
      'Förberedelser och påklädning',
      'First look',
      'Porträttfotografering',
      'Vigsel och gratulationer',
      'Familje- och gruppbilder',
      'Mingel och bröllopsmiddag',
      'Tal och fest',
      'Brudvals och dans',
      '800–900 redigerade bilder',
      'Sneak peek inom 48 timmar',
      'Prioriterad leverans',
      'Personligt onlinegalleri',
    ],
  },
];
