import React from 'react';

// import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import Piece from './Piece.js';

// import getTheme from '../colors.js';

// const colors = getTheme();

let id = 0;

export function uniqueId(prefix)
{
  return `${prefix}${id++}`;
}

class Avatar extends React.Component
{
  render()
  {
    return (
      <View>
        {/* <Piece pieceType='skin' pieceSize='100' skinColor='brown' />

        <Piece pieceType='eyebrows' pieceSize='100' eyebrowType='default'/>

        <Piece pieceType='eyes' pieceSize='100' eyeType='wink'/>

        <Piece pieceType='nose' pieceSize='100' noseType='default'/>
        
        <Piece pieceType='mouth' pieceSize='100' mouthType='smile'/>

        <Piece pieceType='accessories' pieceSize='100' accessoriesType='prescription'/>

        <Piece pieceType='top' pieceSize='100' topType='long-hair-fro' topColor='pastel-pink'/>

        <Piece pieceType='facial-hair' pieceSize='100' facialHairType='beard-majestic' facialHairColor='red'/>

        <Piece pieceType='clothe' pieceSize='100' clotheType='hoodie' clotheColor='pastel-blue'/> */}

        {/* TODO <Piece pieceType='graphics' pieceSize='100' graphicType='Skull' /> */}

        {/* ----- */}

        {/* <Piece pieceType='skin' pieceSize='100' />

        <Piece pieceType='eyebrows' pieceSize='100'/>

        <Piece pieceType='eyes' pieceSize='100'/>

        <Piece pieceType='nose' pieceSize='100'/>
        
        <Piece pieceType='mouth' pieceSize='100'/>

        <Piece pieceType='accessories' pieceSize='100'/>

        <Piece pieceType='top' pieceSize='100'/>

        <Piece pieceType='facial-hair' pieceSize='100'/>

        <Piece pieceType='clothe' pieceSize='100'/> */}
      </View>
    );
  }
}

// Avatar.propTypes = {};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.whiteBackground
//   }
// });

export default Avatar;
