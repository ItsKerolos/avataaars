import Default from '../assets/body/default.svg';

import { template } from './utils.js';

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
* @param { string } maskID
*/
export default function body(pieceOptions, maskID)
{
  /**
  * @type { string }
  */
  let svg = Default;

  svg = template(svg, 'maskID', maskID);
  svg = template(svg, 'color', pieceOptions.skinColor || skinColors.light);

  return svg;
}