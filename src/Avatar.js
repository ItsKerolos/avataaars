import React from 'react';

import PropTypes from 'prop-types';

import Svg from 'react-native-svg';

import Body from './body';

import Eyebrows from './face/eyebrows';
import Eyes from './face/eyes';
import Mouth from './face/mouth';
import Nose from './face/nose';

import Top from './top';
import FacialHair from './top/facialHair';
import Accessories from './top/accessories';

import Clothe from './clothes';

class Avatar extends React.Component
{
  render()
  {
    return (
      <Svg
        width={ this.props.avatarSize || '264' }
        height={ this.props.avatarSize || '264' }
        viewBox={ this.props.viewBox || '0 0 264 280' }
      >
        <g
          id='Avataaar'
          stroke='none'
          strokeWidth='1'
          fill='none'
          fillRule='evenodd'>
          <g
            transform='translate(-825.000000, -1100.000000)'
            id='Avataaar/Circle'>
            <g transform='translate(825.000000, 1100.000000)'>
              <g id='Mask' />
              <g
                id='Avataaar'
                strokeWidth='1'
                fillRule='evenodd'
                mask='url(#mask-4)'>
                <g id='Body' transform='translate(32.000000, 36.000000)'>
                  <Body { ...this.props } maskID='mask-6'/>
                </g>
                <Clothe { ...this.props }/>
                <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
                  <Eyebrows { ...this.props }/>
                  <Eyes { ...this.props }/>
                  <Nose { ...this.props }/>
                  <Mouth { ...this.props }/>
                </g>
                <Top { ...this.props }/>
                <FacialHair { ...this.props }/>
                <Accessories { ...this.props }/>
              </g>
            </g>
          </g>
        </g>
      </Svg>
    );
  }
}

Avatar.propTypes = {
  avatarSize: PropTypes.string,
  viewBox: PropTypes.string
};

export default Avatar;
