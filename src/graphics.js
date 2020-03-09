import Skull from '../assets/clothes/graphics/skull.svg';

import Bear from '../assets/clothes/graphics/bear.svg';

import { template, uniqueId } from './utils.js';

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function graphics(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = Skull;

  if (pieceOptions.clotheGraphic === 'bear')
    svg = Bear;

  svg = template(svg, 'maskID', uniqueId());

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}