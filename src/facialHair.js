import beardLight from '../assets/top/facial-hair/beard-light.svg';
import beardMajestic from '../assets/top/facial-hair/beard-majestic.svg';
import beardMedium from '../assets/top/facial-hair/beard-medium.svg';

import moustacheFancy from '../assets/top/facial-hair/moustache-fancy.svg';
import moustacheMagnum from '../assets/top/facial-hair/moustache-magnum.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  'beard-light': beardLight,
  'beard-majestic': beardMajestic,
  'beard-medium': beardMedium,
  'moustache-fancy': moustacheFancy,
  'moustache-magnum': moustacheMagnum
};

export const facialHairColors = {
  auburn: '#A55728',
  black: '#2C1B18',
  blonde: '#B58143',
  blondeGolden: '#D6B370',
  brown: '#724133',
  brownDark: '#4A312C',
  platinum: '#ECDCBF',
  red: '#C93305'
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function facialHair(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = directory[pieceOptions.facialHairType] || '';

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  svg = template(svg, 'color', pieceOptions.facialHairColor || facialHairColors.brownDark);

  return svg;
}