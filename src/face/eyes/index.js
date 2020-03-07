import React from 'react';

import PropTypes from 'prop-types';

import Dizzy from './Dizzy.js';
import Wink from './Wink.js';
import Default from './Default.js';

class Eyes extends React.Component
{
  render()
  {
    if (this.props.eyeType === 'dizzy')
      return <Dizzy/>;
    else if (this.props.eyeType === 'wink')
      return <Wink/>;
    else
      return <Default/>;
  }
}

Eyes.propTypes = {
  eyeType: PropTypes.string
};

export default Eyes;
