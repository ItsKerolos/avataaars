import Default from '../assets/face/eyebrows/default.svg';

import RaisedExcited from '../assets/face/eyebrows/raised-excited.svg';

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function eyebrows(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = Default;

  if (pieceOptions.eyebrowsType === 'raised-excited')
    svg = RaisedExcited;

  return svg;
}