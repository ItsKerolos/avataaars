import React from 'react';

import PropTypes from 'prop-types';

class Default extends React.Component
{
  render()
  {
    return (
      <g id='Body/Default'>
        <mask id={ this.props.maskID } fill='white'>
          <path
            d='M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z'
          />
        </mask>
        <use fill='#D0C6AC'/>
        <g
          id='Skin/👶🏽-03-Brown'
          mask={ `url(#${this.props.maskID})` }
          fill={ this.props.color }>
          <g transform='translate(0.000000, 0.000000)' id='Color'>
            <rect x='0' y='0' width='264' height='280' />
          </g>
        </g>
        <path
          d='M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z'
          id='Neck-Shadow'
          fillOpacity='0.100000001'
          fill='#000000'
          mask={ `url(#${this.props.maskID})` }
        />
      </g>
    );
  }
}

Default.propTypes = {
  maskID: PropTypes.string,
  color: PropTypes.string
};

export default Default;