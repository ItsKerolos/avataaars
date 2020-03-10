import longHairStraight from '../assets/top/long-hair-straight.svg';

import eyepatch from '../assets/top/eyepatch.svg';
import hat from '../assets/top/hat.svg';
import hijab from '../assets/top/hijab.svg';

import longHairBigHair from '../assets/top/long-hair-big-hair.svg';
import longHairBob from '../assets/top/long-hair-bob.svg';
import longHairBun from '../assets/top/long-hair-bun.svg';

import longHairCurly from '../assets/top/long-hair-curly.svg';
import longHairCurvy from '../assets/top/long-hair-curvy.svg';
import longHairDreads from '../assets/top/long-hair-dreads.svg';
import longHairFrida from '../assets/top/long-hair-frida.svg';

import longHairFroBand from '../assets/top/long-hair-fro-band.svg';
import longHairFro from '../assets/top/long-hair-fro.svg';
import longHairMiaWallace from '../assets/top/long-hair-mia-wallace.svg';

import longHairNotTooLong from '../assets/top/long-hair-not-too-long.svg';
import longHairShavedSides from '../assets/top/long-hair-shaved-sides.svg';

import longHairStraight2 from '../assets/top/long-hair-straight-2.svg';
import longHairStraightStrand from '../assets/top/long-hair-straight-strand.svg';

import noHair from '../assets/top/no-hair.svg';
import turban from '../assets/top/turban.svg';

import winterHat from '../assets/top/winter-hat.svg';
import winterHat2 from '../assets/top/winter-hat-2.svg';
import winterHat3 from '../assets/top/winter-hat-3.svg';
import winterHat4 from '../assets/top/winter-hat-4.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  eyepatch,
  hat,
  hijab,

  'long-hair-big-hair': longHairBigHair,
  'long-hair-bob': longHairBob,
  'long-hair-bun': longHairBun,
  
  'long-hair-curly': longHairCurly,
  'long-hair-curvy': longHairCurvy,
  'long-hair-dreads': longHairDreads,
  'long-hair-frida': longHairFrida,
  
  'long-hair-fro-band': longHairFroBand,
  'long-hair-fro': longHairFro,
  'long-hair-mia-wallace': longHairMiaWallace,
  
  'long-hair-not-too-long': longHairNotTooLong,
  'long-hair-shaved-sides': longHairShavedSides,
  'long-hair-straight-2': longHairStraight2,
  'long-hair-straight-strand': longHairStraightStrand,

  'no-hair': noHair,
  turban,

  'winter-hat': winterHat,
  'winter-hat-2': winterHat2,
  'winter-hat-3': winterHat3,
  'winter-hat-4': winterHat4
};

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
  let svg = directory[pieceOptions.topType] || longHairStraight;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  svg = template(svg, 'color', pieceOptions.topColor || topColors.brownDark);

  return svg;
}