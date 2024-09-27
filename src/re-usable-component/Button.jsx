/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {hp} from '../utils';

const Button = ({height = 45, title = 'Submit', marginTop = 0}) => {
  return (
    <View
      style={{
        width: '100%',
        height,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop,
      }}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
        {title}
      </Text>
    </View>
  );
};

export default Button;
