import BeardMajestic from '../assets/top/facial-hair/beard-majestic.svg';

import { template, uniqueId } from './utils.js';

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
  let svg = '';

  if (pieceOptions.facialHairType === 'beard-majestic')
    svg = BeardMajestic;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  svg = template(svg, 'color', pieceOptions.facialHairColor || facialHairColors.brownDark);

  return svg;
}