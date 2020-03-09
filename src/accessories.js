import Prescription from '../assets/top/accessories/prescription.svg';

import { template, uniqueId } from './utils.js';

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function accessories(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = '';

  if (pieceOptions.accessoriesType === 'prescription')
    svg = Prescription;
  
  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());
  
  return svg;
}