import skull from '../assets/clothes/graphics/skull.svg';

import bat from '../assets/clothes/graphics/bat.svg';
import bear from '../assets/clothes/graphics/bear.svg';

import cumbia from '../assets/clothes/graphics/cumbia.svg';
import deer from '../assets/clothes/graphics/deer.svg';
import diamond from '../assets/clothes/graphics/diamond.svg';

import hola from '../assets/clothes/graphics/hola.svg';
import pizza from '../assets/clothes/graphics/pizza.svg';
import resist from '../assets/clothes/graphics/resist.svg';

import selena from '../assets/clothes/graphics/selena.svg';
import skullOutline from '../assets/clothes/graphics/skull-outline.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  bat,
  bear,
  cumbia,
  deer,
  diamond,
  hola,
  pizza,
  resist,
  selena,
  'skull-outline': skullOutline
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function graphics(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = directory[pieceOptions.clotheGraphic] || skull;

  svg = template(svg, 'maskID', uniqueId());

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}