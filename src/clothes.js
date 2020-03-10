import ShirtCrewNeck from '../assets/clothes/shirt-crew-neck.svg';
import ShirtScoopNeck from '../assets/clothes/shirt-scoop-neck.svg';
import ShirtVNeck from '../assets/clothes/shirt-v-neck.svg';

import GraphicsShirt from '../assets/clothes/graphics-shirt.svg';
import Hoodie from '../assets/clothes/hoodie.svg';

import BlazerShirt from '../assets/clothes/blazer-shirt.svg';
import BlazerSweater from '../assets/clothes/blazer-sweater.svg';
import CollarSweater from '../assets/clothes/collar-sweater.svg';

import Overall from '../assets/clothes/overall.svg';

import { template, uniqueId } from './utils.js';

import graphics from './graphics.js';

const directory = {
  'graphics': GraphicsShirt,
  'hoodie': Hoodie,
  'blazer-shirt': BlazerShirt,
  'blazer-sweater': BlazerSweater,
  'collar-sweater': CollarSweater,
  'overall': Overall,
  'shirt-scoop-neck': ShirtScoopNeck,
  'shirt-v-neck': ShirtVNeck
};

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
  let svg = directory[pieceOptions.clothType] || ShirtCrewNeck;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  svg = template(svg, 'graphics', graphics(pieceOptions));

  svg = template(svg, 'color', pieceOptions.clotheColor || clotheColors.pastelRed);

  return svg;
}