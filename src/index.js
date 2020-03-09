import Piece from '../assets/piece.svg';

import { template } from './utils.js';

import eyebrows from './eyebrows.js';
import eyes from './eyes.js';
import nose from './nose.js';
import mouth from './mouth.js';

import facialHair from './facialHair.js';
import accessories from './accessories.js';

import graphics from './graphics.js';
import clothes from './clothes.js';

import top from './top.js';
import body from './body.js';

/**
* @typedef { 'body' | 'top' | 'clothe' | 'graphics' |
* 'accessories' | 'facial-hair' | 'mouth' | 'nose' |
* 'eyes' | 'eyebrows' } PieceType
*/

/**
* @typedef { Object } PieceOptions
* @property { 'default' } [eyebrowsType]
* @property { 'default' } [eyesType]
* @property { 'default' } [noseType]
* @property { 'default' } [mouthType]

* @property { 'default' | 'beard-majestic' } [facialHairType]
* @property { string } [facialHairColor]

* @property { 'default' | 'prescription' } [accessoriesType]

* @property { 'default' } [clothType]
* @property { 'default' } [clotheGraphic]
* @property { string } [clotheColor]

* @property { 'default' } [topType]
* @property { string } [topColor]

* @property { 'default' } [bodyType]
* @property { string } [skinColor]
*/

/**
* @typedef { Object } Options
* @property { string } [size]
* @property { string } [viewBox]
*/

/**
* @param { PieceType } pieceType
* @param { PieceOptions } pieceOptions
* @param { Options } options
*/
export function piece(pieceType, pieceOptions, options)
{
  if (!pieceType)
    throw new Error('Piece Type Cannot Be Undefined');

  pieceOptions = pieceOptions || {};
  options = options || {};

  /**
  * @type { string }
  */
  let svg = Piece;

  svg = template(svg, 'pieceSize', options.size || '128');
  svg = template(svg, 'viewBox', options.viewBox || '0 0 264 280');

  if (pieceType === 'eyebrows')
    svg = template(svg, 'children', eyebrows(pieceOptions));

  else if (pieceType === 'eyes')
    svg = template(svg, 'children', eyes(pieceOptions));

  else if (pieceType === 'nose')
    svg = template(svg, 'children', nose(pieceOptions));
    
  else if (pieceType === 'mouth')
    svg = template(svg, 'children', mouth(pieceOptions));

  else if (pieceType === 'facial-hair')
    svg = template(svg, 'children', facialHair(pieceOptions));

  else if (pieceType === 'accessories')
    svg = template(svg, 'children', accessories(pieceOptions));

  else if (pieceType === 'graphics')
    svg = template(svg, 'children', graphics(pieceOptions, '5678'));
      
  else if (pieceType === 'clothe')
    svg = template(svg, 'children', clothes(pieceOptions));

  else if (pieceType === 'top')
    svg = template(svg, 'children', top(pieceOptions));

  else if (pieceType === 'body')
    svg = template(svg, 'children', body(pieceOptions, '1234'));
    
  else
    throw new Error('Piece Type Is Invalid');

  return svg;
}