import Default from '../assets/face/eyes/default.svg';

import Dizzy from '../assets/face/eyes/dizzy.svg';
import Wink from '../assets/face/eyes/wink.svg';

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function eyes(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = Default;

  if (pieceOptions.eyesType === 'dizzy')
    svg = Dizzy;
  else if (pieceOptions.eyesType === 'wink')
    svg = Wink;

  return svg;
}