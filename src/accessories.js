import kurt from '../assets/top/accessories/kurt.svg';

import prescription from '../assets/top/accessories/prescription.svg';
import prescription2 from '../assets/top/accessories/prescription-2.svg';

import round from '../assets/top/accessories/round.svg';
import sunglasses from '../assets/top/accessories/sunglasses.svg';
import wayfarers from '../assets/top/accessories/wayfarers.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  kurt,
  prescription,
  'prescription-2': prescription2,
  round,
  sunglasses,
  wayfarers
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
  svg = template(svg, 'linearGradient', uniqueId());
  
  return svg;
}