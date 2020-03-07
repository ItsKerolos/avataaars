import React from 'react';

import { View } from 'react-native';

import PropTypes from 'prop-types';

import BeardMajestic from './BeardMajestic.js';

class FacialHair extends React.Component
{
  render()
  {
    const colors = {
      'auburn': '#A55728',
      'black': '#2C1B18',
      'blonde': '#B58143',
      'blonde-golden': '#D6B370',
      'brown': '#724133',
      'brown-dark': '#4A312C',
      'platinum': '#ECDCBF',
      'red': '#C93305'
    };

    if (this.props.facialHairType === 'beard-majestic')
      return <BeardMajestic color={ colors[this.props.facialHairColor] }/>;
    else
      return <g/>;
  }
}

FacialHair.propTypes = {
  facialHairType: PropTypes.string,
  facialHairColor: PropTypes.string
};

export default FacialHair;