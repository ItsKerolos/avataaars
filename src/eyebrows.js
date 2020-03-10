import Default from '../assets/face/eyebrows/default.svg';

import raisedExcited from '../assets/face/eyebrows/raised-excited.svg';

const directory = {
  'raised-excited': raisedExcited
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function eyebrows(pieceOptions)
{
  /**
  * @type { string }
  */
  const svg = directory[pieceOptions.eyebrowsType] || Default;

  return svg;
}