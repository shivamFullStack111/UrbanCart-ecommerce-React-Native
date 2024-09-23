import {View, Text} from 'react-native';
import React from 'react';
import {hp} from '../utils';

const MainHeading2 = ({heading, isItalic}) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: '800',
          color: 'black',
          fontSize: hp(3),
          fontStyle: isItalic ? 'italic' : 'normal',
        }}>
        {heading}
      </Text>
    </View>
  );
};

export default MainHeading2;
