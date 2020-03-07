import React from 'react';

import PropTypes from 'prop-types';

class Skin extends React.Component
{
  render()
  {
    const colors = {
      tanned: '#FD9841',
      yellow: '#F8D25C',
      pale: '#FFDBB4',
      light: '#EDB98A',
      brown: '#D08B5B',
      darkBrown: '#AE5D29',
      black: '#614335'
    };

    const color = colors[this.props.skinColor || 'light'];
    
    return (
      <g
        id='Skin/👶🏽-03-Brown'
        mask={ `url(#${this.props.maskID})` }
        fill={ color }>
        <g transform='translate(0.000000, 0.000000)' id='Color'>
          <rect x='0' y='0' width='264' height='280' />
        </g>
      </g>
    );
  }
}

Skin.propTypes = {
  maskID: PropTypes.string,
  skinColor: PropTypes.string
};

export default Skin;