import prescription from '../assets/top/accessories/prescription.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  prescription
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function accessories(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = directory[pieceOptions.accessoriesType] || '';

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());
  
  return svg;
}