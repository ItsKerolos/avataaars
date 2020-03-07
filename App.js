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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red'
    } }>

      <View style={ {
        overflow: 'hidden',
        backgroundColor: '#65C9FF',
        borderRadius: 264
      } }>
        <Avatar
          avatarSize='264'
          accessoriesType='prescription'
          facialHairType='beard-majestic'
          facialHairColor='red'
        />
      </View>

      <View style={ {
        overflow: 'hidden',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 264
      } }>
        <View style={ {
          position: 'absolute',
          width: 235,
          height: 235,
          bottom: -10,
          borderRadius: 235,
          backgroundColor: '#65C9FF'
        } }/>

        <View>
          <Avatar
            avatarSize='264'
            skinColor='brown'
            eyeType='wink'
            mouthType='smile'
            topType='long-hair-frida'
          />
        </View>
      </View>

      <Avatar
        avatarSize='264'
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
