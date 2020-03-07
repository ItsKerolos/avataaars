import React from 'react';

import PropTypes from 'prop-types';

import LongHairFro from './LongHairFro.js';
import LongHairFrida from './LongHairFrida.js';
import LongHairStraight from './LongHairStraight.js';

class Top extends React.Component
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
      'pastel-pink': '#F59797',
      'platinum': '#ECDCBF',
      'red': '#C93305',
      'silver-gray': '#E8E1E1'
    };

    const color = colors[this.props.topColor || 'brown-dark'];

    if (this.props.topType === 'long-hair-fro')
      return <LongHairFro color={ color }/>;
    else if (this.props.topType === 'long-hair-frida')
      return <LongHairFrida color={ colors[this.props.topColor] }/>;
    else
      return <LongHairStraight color={ colors[this.props.topColor] }/>;
  }
}

Top.propTypes = {
  topType: PropTypes.string,
  topColor: PropTypes.string
};

export default Top;