import React from 'react';

import { View } from 'react-native';

import PropTypes from 'prop-types';

import Prescription from './Prescription.js';

class Accessories extends React.Component
{
  render()
  {
    if (this.props.accessoriesType === 'prescription')
      return <Prescription/>;
    else
      return <g/>;
  }
}

Accessories.propTypes = {
  accessoriesType: PropTypes.string
};

export default Accessories;