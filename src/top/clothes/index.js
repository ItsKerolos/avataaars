import React from 'react';

import PropTypes from 'prop-types';

import Hoodie from './Hoodie.js';
import ShirtCrewNeck from './ShirtCrewNeck.js';

class Clothe extends React.Component
{
  render()
  {
    const colors = {
      'black': '#262E33',
      'blue': '#65C9FF',
      'blue-2': '#5199E4',
      'blue-3': '#25557C',
      'gray': '#E6E6E6',
      'gray-2': '#929598',
      'heather': '#3C4F5C',
      'pastel-blue': '#B1E2FF',
      'pastel-green': '#A7FFC4',
      'pastel-orange': '#FFDEB5',
      'pastel-red': '#FFAFB9',
      'pastel-yellow': '#FFFFB1',
      'pink': '#FF488E',
      'red': '#FF5C5C',
      'white': '#FFFFFF'
    };

    const color = colors[this.props.clotheColor || 'pastel-red'];

    if (this.props.clotheType === 'hoodie')
      return <Hoodie color={ color }/>;
    else
      return <ShirtCrewNeck color={ color }/>;
  }
}

Clothe.propTypes = {
  clotheType: PropTypes.string,
  clotheColor: PropTypes.string
};

export default Clothe;