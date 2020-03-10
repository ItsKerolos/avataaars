import Default from '../assets/face/mouth/default.svg';

import concerned from '../assets/face/mouth/concerned.svg';
import disbelief from '../assets/face/mouth/disbelief.svg';
import eating from '../assets/face/mouth/eating.svg';

import grimace from '../assets/face/mouth/grimace.svg';
import sad from '../assets/face/mouth/sad.svg';
import screamOpen from '../assets/face/mouth/scream-open.svg';

import serious from '../assets/face/mouth/serious.svg';
import smile from '../assets/face/mouth/smile.svg';
import tongue from '../assets/face/mouth/tongue.svg';

import twinkle from '../assets/face/mouth/twinkle.svg';
import vomit from '../assets/face/mouth/vomit.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  concerned,
  disbelief,
  eating,
  grimace,
  sad,
  'scream-open': screamOpen,
  serious,
  smile,
  tongue,
  twinkle,
  vomit
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function mouth(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = directory[pieceOptions.mouthType] || Default;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}