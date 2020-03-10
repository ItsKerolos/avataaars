import Default from '../assets/face/eyes/default.svg';

import dizzy from '../assets/face/eyes/dizzy.svg';
import wink from '../assets/face/eyes/wink.svg';

const directory = {
  dizzy,
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
  const svg = directory[pieceOptions.eyesType] || Default;

  return svg;
}