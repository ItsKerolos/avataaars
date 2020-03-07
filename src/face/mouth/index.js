import React from 'react';

import PropTypes from 'prop-types';

import Eating from './Eating.js';
import Smile from './Smile.js';
import Default from './Default.js';

class Mouth extends React.Component
{
  render()
  {
    if (this.props.mouthType === 'eating')
      return <Eating/>;
    else if (this.props.mouthType === 'smile')
      return <Smile/>;
    else
      return <Default/>;
  }
}

Mouth.propTypes = {
  mouthType: PropTypes.string
};

export default Mouth;
