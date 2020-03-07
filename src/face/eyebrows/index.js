import React from 'react';

import PropTypes from 'prop-types';

import RaisedExcited from './RaisedExcited.js';
import Default from './Default.js';

class Eyebrows extends React.Component
{
  render()
  {
    if (this.props.eyebrowType === 'raised-excited')
      return <RaisedExcited/>;
    else
      return <Default/>;
  }
}

Eyebrows.propTypes = {
  eyebrowType: PropTypes.string
};

export default Eyebrows;
