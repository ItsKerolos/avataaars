import React from 'react';

import PropTypes from 'prop-types';

import { uniqueId } from '..';

import Graphics from './graphics';

class GraphicShirt extends React.Component
{
  mask1 = uniqueId('react-mask-');
  path1 = uniqueId('react-path-');

  render()
  {
    const {
      mask1,
      path1
    } = this;
    
    return (
      <g
        id='Clothing/Graphic-Shirt'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z'
            id={ path1 }
          />
        </defs>
        <mask id={ mask1 } fill='white'>
          <use xlinkHref={ '#' + path1 } />
        </mask>
        <use
          id='Clothes'
          fill='#E6E6E6'
          fillRule='evenodd'
          xlinkHref={ '#' + path1 }
        />
        <g
          id='Color/Palette/Gray-01'
          mask={ `url(#${mask1})` }
          fillRule='evenodd'
          fill={ this.props.color }>
          <rect id='🖍Color' x='0' y='0' width='264' height='110' />
        </g>
        <Graphics { ...this.props } maskID={ mask1 } />
      </g>
    );
  }
}

GraphicShirt.propTypes = {
  color: PropTypes.string,
  clotheGraphic: PropTypes.string
};

export default GraphicShirt;