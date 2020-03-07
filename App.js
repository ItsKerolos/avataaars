/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import React from 'react';
import { View } from 'react-native';

import Avatar from './src';

export default function App()
{
  return (
    <View style={ {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red'
    } }>

      {/* <Avatar
        accessoriesType='prescription'
        facialHairType='beard-majestic'
        facialHairColor='red'
      /> */}
      
      <Avatar
        skinColor='brown'
        eyeType='wink'
        mouthType='smile'
        topType='long-hair-frida'
      />

      {/* <Piece pieceType='skin' pieceSize='100' skinColor='brown' />

        <Piece pieceType='eyebrows' pieceSize='100' eyebrowType='default'/>

        <Piece pieceType='eyes' pieceSize='100' eyeType='wink'/>

        <Piece pieceType='nose' pieceSize='100' noseType='default'/>
        
        <Piece pieceType='mouth' pieceSize='100' mouthType='smile'/>

        <Piece pieceType='accessories' pieceSize='100' accessoriesType='prescription'/>

        <Piece pieceType='top' pieceSize='100' topType='long-hair-frida' topColor='pastel-pink'/>

        <Piece pieceType='facial-hair' pieceSize='100' facialHairType='beard-majestic' facialHairColor='red'/>

        <Piece pieceType='clothe' pieceSize='100' clotheType='hoodie' clotheColor='pastel-red'/> */}

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
