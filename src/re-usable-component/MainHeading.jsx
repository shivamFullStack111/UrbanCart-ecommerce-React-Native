import {View, Text} from 'react-native';
import React from 'react';
import {hp} from '../utils';

const MainHeading = ({heading}) => {
  return (
    <View>
      <Text style={{fontWeight: '900', color: 'black', fontSize: hp(4.8)}}>
        {heading}
      </Text>
    </View>
  );
};

export default MainHeading;
