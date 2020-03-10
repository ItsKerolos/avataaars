import Default from '../assets/face/eyebrows/default.svg';

import raisedExcited from '../assets/face/eyebrows/raised-excited.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  'raised-excited': raisedExcited
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function eyebrows(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = directory[pieceOptions.eyebrowsType] || Default;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}