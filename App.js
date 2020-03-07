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

      <Avatar/>

    </View>
  );
}
