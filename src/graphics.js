import Skull from '../assets/clothes/graphics/skull.svg';

import { template, uniqueId } from './utils.js';

/**
* @param { import('./index').PieceOptions } pieceOptions
* @param { string } maskID
*/
export default function graphics(pieceOptions, maskID)
{
  /**
  * @type { string }
  */
  let svg = Skull;

  svg = template(svg, 'maskID', maskID);

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}