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

class Piece extends React.Component
{
  render()
  {
    return (
      <Svg
        width={ this.props.pieceSize || '100' }
        height={ this.props.pieceSize || '100' }
        viewBox={ this.props.viewBox || '0 0 264 280' }
      >
        { (this.props.pieceType === 'top') ? <Top { ...this.props }/> : undefined }
        
        { (this.props.pieceType === 'clothe') ? <Clothe { ...this.props }/> : undefined }

        {/* { this.props.pieceType === 'graphics' && <Graphics maskID="1234"/> } */}

        { (this.props.pieceType === 'accessories') ? <Accessories { ...this.props }/> : undefined }

        { (this.props.pieceType === 'facial-hair') ? <FacialHair { ...this.props }/> : undefined }

        { (this.props.pieceType === 'mouth') ? <Mouth { ...this.props }/> : undefined }

        { (this.props.pieceType === 'nose') ? <Nose { ...this.props }/> : undefined }

        { (this.props.pieceType === 'eyes') ? <Eyes { ...this.props }/> : undefined }
        
        { (this.props.pieceType === 'eyebrows') ? <Eyebrows { ...this.props }/> : undefined }

        { (this.props.pieceType === 'skin') ? <Skin maskID='5678' { ...this.props }/> : undefined }
      </Svg>
    );
  }
}

Piece.propTypes = {
  pieceSize: PropTypes.string,
  pieceType: PropTypes.string.isRequired,
  viewBox: PropTypes.string
};

export default Piece;
