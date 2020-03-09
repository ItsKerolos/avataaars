import LongHairStraight from '../assets/top/long-hair-straight.svg';

import { template, uniqueId } from './utils.js';

export const topColors = {
  auburn: '#A55728',
  black: '#2C1B18',
  blonde: '#B58143',
  blondeGolden: '#D6B370',
  brown: '#724133',
  brownDark: '#4A312C',
  pastelPink: '#F59797',
  platinum: '#ECDCBF',
  red: '#C93305',
  silverGray: '#E8E1E1'
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function top(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = LongHairStraight;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  svg = template(svg, 'color', pieceOptions.topColor || topColors.brownDark);

  return svg;
}