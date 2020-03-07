import React from 'react';

import PropTypes from 'prop-types';

import Default from './Default.js';

class Nose extends React.Component
{
  render()
  {
    return <Default/>;
  }
}

Nose.propTypes = {
  noseType: PropTypes.string
};

export default Nose;
