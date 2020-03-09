import Default from '../assets/face/mouth/default.svg';

import Eating from '../assets/face/mouth/eating.svg';
import Smile from '../assets/face/mouth/smile.svg';

import { template, uniqueId } from './utils.js';

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function mouth(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = Default;

  if (pieceOptions.mouthType === 'eating')
    svg = Eating;
  else if (pieceOptions.mouthType === 'smile')
    svg = Smile;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}