import React from 'react';

import PropTypes from 'prop-types';

import Default from './Default.js';

class Body extends React.Component
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
    
    return <Default { ...this.props } color={ color }/>;
  }
}

Body.propTypes = {
  bodyType: PropTypes.string,
  skinColor: PropTypes.string
};

export default Body;
