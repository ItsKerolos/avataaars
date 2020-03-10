import Default from '../assets/face/nose/default.svg';

import { template, uniqueId } from './utils.js';

const directory = {};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function nose(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = directory[pieceOptions.noseType] || Default;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}