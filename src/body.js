import Default from '../assets/body/default.svg';

import { template, uniqueId } from './utils.js';

const directory = {};

export const skinColors = {
  tanned: '#FD9841',
  yellow: '#F8D25C',
  pale: '#FFDBB4',
  light: '#EDB98A',
  brown: '#D08B5B',
  darkBrown: '#AE5D29',
  black: '#614335'
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function body(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg =  directory[pieceOptions.bodyType] || Default;

  svg = template(svg, 'maskID', uniqueId());
  svg = template(svg, 'color', pieceOptions.skinColor || skinColors.light);

  return svg;
}