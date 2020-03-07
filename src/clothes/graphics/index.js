import React from 'react';

import PropTypes from 'prop-types';

import Skull from './Skull.js';
import Bear from './Bear.js';

class Graphics extends React.Component
{
  render()
  {
    if (this.props.clotheGraphic === 'bear')
      return <Bear { ...this.props }/>;
    else
      return <Skull { ...this.props }/>;
  }
}

Graphics.propTypes = {
  maskID: PropTypes.string,
  clotheGraphic: PropTypes.string
};

export default Graphics;