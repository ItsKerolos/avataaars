import React from 'react';

import PropTypes from 'prop-types';

import Svg from 'react-native-svg';

import Eyebrows from './face/eyebrows';
import Eyes from './face/eyes';
import Mouth from './face/mouth';
import Nose from './face/nose';

import Top from './top';
import FacialHair from './top/facialHair';
import Accessories from './top/accessories';

import Clothe from './clothes';

import Skin from './Skin.js';

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
        <defs>
          <path
            d='M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z'
            id='path-5'
          />
        </defs>
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
                  <mask id='mask-6' fill='white'>
                    <use xlinkHref='#path-5' />
                  </mask>
                  <use fill='#D0C6AC' xlinkHref='#path-5' />
                  <Skin { ...this.props } maskID='mask-6'/>
                  <path
                    d='M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z'
                    id='Neck-Shadow'
                    fillOpacity='0.100000001'
                    fill='#000000'
                    mask='url(#mask-6)'
                  />
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
