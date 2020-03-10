import Piece from '../assets/piece.svg';
import Avatar from '../assets/avatar.svg';

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
* @typedef { Object } Options
* @property { string } [size]
* @property { string } [viewBox]
*/

/**
* @typedef { Object } PieceOptions
* @property { 'default' | 'raised-excited' } [eyebrowsType]
* @property { 'default' | 'dizzy' | 'wink' } [eyesType]
* @property { 'default' } [noseType]
* @property { 'default' | 'eating' | 'smile' } [mouthType]

* @property { 'default' | 'beard-majestic' } [facialHairType]
* @property { string } [facialHairColor]

* @property { 'default' | 'prescription' } [accessoriesType]

* @property { 'default' | 'graphics' | 'hoodie' | 'blazer-shirt' | 'blazer-sweater' | 'collar-sweater' | 'overall' | 'shirt-scoop-neck' | 'shirt-v-neck' } [clothType]
* @property { 'default' | 'bat' | 'bear' | 'cumbia' | 'deer' | 'diamond' | 'hola' | 'pizza' | 'resist' | 'selena' | 'skull-outline' } [clotheGraphic]
* @property { string } [clotheColor]

* @property { 'default' | 'long-hair-fro' | 'long-hair-frida' | 'hijab' } [topType]
* @property { string } [topColor]

* @property { 'default' } [bodyType]
* @property { string } [skinColor]
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

  svg = template(svg, 'size', options.size || '128');
  svg = template(svg, 'viewBox', options.viewBox || '0 0 264 280');

  if (pieceType === 'eyebrows')
    svg = template(svg, 'piece', eyebrows(pieceOptions));

  else if (pieceType === 'eyes')
    svg = template(svg, 'piece', eyes(pieceOptions));

  else if (pieceType === 'nose')
    svg = template(svg, 'piece', nose(pieceOptions));
    
  else if (pieceType === 'mouth')
    svg = template(svg, 'piece', mouth(pieceOptions));

  else if (pieceType === 'facial-hair')
    svg = template(svg, 'piece', facialHair(pieceOptions));

  else if (pieceType === 'accessories')
    svg = template(svg, 'piece', accessories(pieceOptions));

  else if (pieceType === 'graphics')
    svg = template(svg, 'piece', graphics(pieceOptions));
      
  else if (pieceType === 'clothe')
    svg = template(svg, 'piece', clothes(pieceOptions));

  else if (pieceType === 'top')
    svg = template(svg, 'piece', top(pieceOptions));

  else if (pieceType === 'body')
    svg = template(svg, 'piece', body(pieceOptions));
    
  else
    throw new Error('Piece Type Is Invalid');

  return svg;
}

/**
* @param { PieceOptions } avatarOptions
* @param { Options } options
*/
export default function avatar(avatarOptions, options)
{
  avatarOptions = avatarOptions || {};
  options = options || {};

  /**
  * @type { string }
  */
  let svg = Avatar;

  svg = template(svg, 'size', options.size || '264');
  svg = template(svg, 'viewBox', options.viewBox || '0 0 264 280');

  svg = template(svg, 'body', body(avatarOptions));

  svg = template(svg, 'clothe', clothes(avatarOptions));

  svg = template(svg, 'eyebrows', eyebrows(avatarOptions));
  svg = template(svg, 'eyes', eyes(avatarOptions));
  svg = template(svg, 'nose', nose(avatarOptions));
  svg = template(svg, 'mouth', mouth(avatarOptions));

  svg = template(svg, 'top', top(avatarOptions));
  svg = template(svg, 'facial-hair', facialHair(avatarOptions));
  svg = template(svg, 'accessories', accessories(avatarOptions));

  return svg;
}