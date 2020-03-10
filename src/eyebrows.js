import Default from '../assets/face/eyebrows/default.svg';

import angry from '../assets/face/eyebrows/angry.svg';
import angryNatural from '../assets/face/eyebrows/angry-natural.svg';
import defaultNatural from '../assets/face/eyebrows/default-natural.svg';

import flatNatural from '../assets/face/eyebrows/flat-natural.svg';
import frownNatural from '../assets/face/eyebrows/frown-natural.svg';

import raisedExcitedNatural from '../assets/face/eyebrows/raised-excited-natural.svg';
import raisedExcited from '../assets/face/eyebrows/raised-excited.svg';
import sadConcernedNatural from '../assets/face/eyebrows/sad-concerned-natural.svg';

import sadConcerned from '../assets/face/eyebrows/sad-concerned.svg';
import unibrowNatural from '../assets/face/eyebrows/unibrow-natural.svg';

import upDownNatural from '../assets/face/eyebrows/up-down-natural.svg';
import upDown from '../assets/face/eyebrows/up-down.svg';

import { template, uniqueId } from './utils.js';

const directory = {
  angry,
  'angry-natural': angryNatural,
  'default-natural': defaultNatural,
  'flat-natural': flatNatural,
  'frown-natural': frownNatural,
  'raised-excited-natural': raisedExcitedNatural,
  'raised-excited': raisedExcited,
  'sad-concerned-natural': sadConcernedNatural,
  'sad-concerned': sadConcerned,
  'unibrow-natural': unibrowNatural,
  'upDown-natural': upDownNatural,
  'up-down': upDown
};

/**
* @param { import('./index').PieceOptions } pieceOptions
*/
export default function eyebrows(pieceOptions)
{
  /**
  * @type { string }
  */
  let svg = directory[pieceOptions.eyebrowsType] || Default;

  svg = template(svg, 'path', uniqueId());
  svg = template(svg, 'mask', uniqueId());
  svg = template(svg, 'filter', uniqueId());

  return svg;
}