import Skull from '../assets/clothes/graphics/skull.svg';

import Bat from '../assets/clothes/graphics/bat.svg';
import Bear from '../assets/clothes/graphics/bear.svg';

import Cumbia from '../assets/clothes/graphics/cumbia.svg';
import Deer from '../assets/clothes/graphics/deer.svg';
import Diamond from '../assets/clothes/graphics/diamond.svg';

import Hola from '../assets/clothes/graphics/hola.svg';
import Pizza from '../assets/clothes/graphics/pizza.svg';
import Resist from '../assets/clothes/graphics/resist.svg';

import Selena from '../assets/clothes/graphics/selena.svg';
import SkullOutline from '../assets/clothes/graphics/skull-outline.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  'bat': Bat,
  'bear': Bear,
  'cumbia': Cumbia,
  'deer': Deer,
  'diamond': Diamond,
  'hola': Hola,
  'pizza': Pizza,
  'resist': Resist,
  'selena': Selena,
  'skull-outline': SkullOutline
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function graphics(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = directory[pieceOptions.clotheGraphic] || Skull;

  svg = template(svg, 'maskID', uniqueId());

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}