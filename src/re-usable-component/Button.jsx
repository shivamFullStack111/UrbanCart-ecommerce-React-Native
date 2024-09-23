/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp} from '../utils';

const Button = ({height = 45, title = 'Submit', marginTop = 0}) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop,
      }}>
      <Text style={{color: 'white', fontSize: hp(2.2), fontWeight: '700'}}>
        Button
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
