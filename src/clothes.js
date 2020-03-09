import ShirtCrewNeck from '../assets/clothes/shirt-crew-neck.svg';

import GraphicsShirt from '../assets/clothes/graphics-shirt.svg';
import Hoodie from '../assets/clothes/hoodie.svg';

import { template, uniqueId } from './utils.js';

import graphics from './graphics.js';

export const clotheColors = {
  black: '#262E33',
  blue: '#65C9FF',
  blue2: '#5199E4',
  blue3: '#25557C',
  gray: '#E6E6E6',
  gray2: '#929598',
  heather: '#3C4F5C',
  pastelBlue: '#B1E2FF',
  pastelGreen: '#A7FFC4',
  pastelOrange: '#FFDEB5',
  pastelRed: '#FFAFB9',
  pastelYellow: '#FFFFB1',
  pink: '#FF488E',
  red: '#FF5C5C',
  white: '#FFFFFF'
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function clothes(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = ShirtCrewNeck;

  if (pieceOptions.clothType === 'graphics')
    svg = GraphicsShirt;
  else if (pieceOptions.clothType === 'hoodie')
    svg = Hoodie;
  
  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  svg = template(svg, 'graphics', graphics(pieceOptions));

  svg = template(svg, 'color', pieceOptions.clotheColor || clotheColors.pastelRed);

  return svg;
}