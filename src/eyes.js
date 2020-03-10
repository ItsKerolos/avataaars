import Default from '../assets/face/eyes/default.svg';

import close from '../assets/face/eyes/close.svg';
import cry from '../assets/face/eyes/cry.svg';
import dizzy from '../assets/face/eyes/dizzy.svg';

import eyeRoll from '../assets/face/eyes/eye-roll.svg';
import happy from '../assets/face/eyes/happy.svg';
import hearts from '../assets/face/eyes/hearts.svg';

import side from '../assets/face/eyes/side.svg';
import squint from '../assets/face/eyes/squint.svg';
import surprised from '../assets/face/eyes/surprised.svg';

import winkWacky from '../assets/face/eyes/wink-wacky.svg';
import wink from '../assets/face/eyes/wink.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  close,
  cry,
  dizzy,
  'eye-roll': eyeRoll,
  happy,
  hearts,
  side,
  squint,
  surprised,
  'wink-wacky': winkWacky,
  wink
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function eyes(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = directory[pieceOptions.eyesType] || Default;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}