import Default from '../assets/face/nose/default.svg';

const directory = {};


/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function nose(pieceOptions)
{
  /**
  * @type { string }
  */
  const svg = directory[pieceOptions.noseType] || Default;

  return svg;
}