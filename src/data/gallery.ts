import brudSkogsljus from '../assets/photos/brud-skogsljus.jpg';
import brudSlojan from '../assets/photos/brud-slojan.jpg';
import brudfoljeTarnor from '../assets/photos/brudfolje-tarnor.jpg';
import brudparBron from '../assets/photos/brudpar-bron.jpg';
import brudparGraset from '../assets/photos/brudpar-graset.jpg';
import brudparKyssen from '../assets/photos/brudpar-kyssen.jpg';
import brudparOmfamning from '../assets/photos/brudpar-omfamning.jpg';
import brudparPannor from '../assets/photos/brudpar-pannor.jpg';
import brudparSkogen from '../assets/photos/brudpar-skogen.jpg';
import brudparTerrassen from '../assets/photos/brudpar-terrassen.jpg';
import brudparVidVattnet from '../assets/photos/brudpar-vid-vattnet.jpg';
import firstLook from '../assets/photos/first-look.jpg';
import mingelVigsel from '../assets/photos/mingel-vigsel.jpg';
import parKyrkljus from '../assets/photos/par-kyrkljus.jpg';
import ringarBukett from '../assets/photos/ringar-bukett.jpg';
import skrattIBilen from '../assets/photos/skratt-i-bilen.jpg';

export type GalleryPhoto = {
  src: ImageMetadata;
  alt: string;
};

/**
 * Ordered for rhythm rather than chronology: wide establishing shots are
 * spaced out between tall portraits so the masonry columns stay balanced.
 */
export const gallery: GalleryPhoto[] = [
  {
    src: firstLook,
    alt: 'Brudgum i mörk uniform tittar ner medan bruden närmar sig bakom honom under en first look i en trädgård.',
  },
  {
    src: brudSlojan,
    alt: 'Närbild på bruden som ler mot kameran genom sin slöja.',
  },
  {
    src: brudparPannor,
    alt: 'Brudpar står med pannorna mot varandra och blundar, med en rosa brudbukett mellan sig.',
  },
  {
    src: skrattIBilen,
    alt: 'Bruden och två anhöriga skrattar tillsammans i baksätet på bröllopsbilen.',
  },
  {
    src: brudparKyssen,
    alt: 'Brudpar kysser varandra på en gräsmatta medan slöjan fångar kvällsljuset.',
  },
  {
    src: brudparBron,
    alt: 'Brudpar står tillsammans på en vit träbro i ett sommargrönt landskap.',
  },
  {
    src: brudSkogsljus,
    alt: 'Bruden i spetsklänning går genom dansande skogsljus med sin bukett.',
  },
  {
    src: ringarBukett,
    alt: 'Brudparets händer med vigselringarna vilande på en bukett med hortensia och rosor.',
  },
  {
    src: brudfoljeTarnor,
    alt: 'Bruden skrattar tillsammans med sina tärnor i ljusblå klänningar vid vattnet.',
  },
  {
    src: brudparSkogen,
    alt: 'Brudgummen kysser brudens tinning i ett solbelyst skogsbryn.',
  },
  {
    src: brudparOmfamning,
    alt: 'Brudpar i omfamning mot en solvarm kalkvägg med en stor eukalyptusbukett.',
  },
  {
    src: mingelVigsel,
    alt: 'Gratulationer och mingel direkt efter vigseln, bruden ler mot sin man.',
  },
  {
    src: brudparTerrassen,
    alt: 'Brudpar på en stenterrass omgiven av blommande buskar.',
  },
  {
    src: parKyrkljus,
    alt: 'Par i varmt inströmmande kyrkljus, hans hand vilar på hennes mage.',
  },
  {
    src: brudparVidVattnet,
    alt: 'Bruden lyfter sin bukett bakom brudgummens rygg framför glittrande vatten.',
  },
  {
    src: brudparGraset,
    alt: 'Brudgummen kysser brudens hjässa medan de håller om varandra på en gräsmatta.',
  },
];
