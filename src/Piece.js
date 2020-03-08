import React from 'react';

import PropTypes from 'prop-types';

// import Svg from 'react-native-svg';

import Body from './body';

// import Eyebrows from './face/eyebrows';
// import Eyes from './face/eyes';
// import Mouth from './face/mouth';
// import Nose from './face/nose';

// import Top from './top';
// import FacialHair from './top/facialHair';
// import Accessories from './top/accessories';

// import Clothe from './clothes';

// import Graphics from './clothes/graphics';

class Piece extends React.Component
{
  render()
  {
    return (
      <svg
        width={ this.props.pieceSize || '100' }
        height={ this.props.pieceSize || '100' }
        viewBox={ this.props.viewBox || '0 0 264 280' }
      >
        { (this.props.pieceType === 'body') ? <Body { ...this.props } maskID='1234'/> : undefined }

        {/* { (this.props.pieceType === 'top') ? <Top { ...this.props }/> : undefined }
        
        { (this.props.pieceType === 'clothe') ? <Clothe { ...this.props }/> : undefined }

        { this.props.pieceType === 'graphics' && <Graphics { ...this.props } maskID='5678'/> }

        { (this.props.pieceType === 'accessories') ? <Accessories { ...this.props }/> : undefined }

        { (this.props.pieceType === 'facial-hair') ? <FacialHair { ...this.props }/> : undefined }

        { (this.props.pieceType === 'mouth') ? <Mouth { ...this.props }/> : undefined }

        { (this.props.pieceType === 'nose') ? <Nose { ...this.props }/> : undefined }

        { (this.props.pieceType === 'eyes') ? <Eyes { ...this.props }/> : undefined }
        
        { (this.props.pieceType === 'eyebrows') ? <Eyebrows { ...this.props }/> : undefined } */}
      </svg>
    );
  }
}

Piece.propTypes = {
  pieceSize: PropTypes.string,
  pieceType: PropTypes.string.isRequired,
  viewBox: PropTypes.string
};

export default Piece;
