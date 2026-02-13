/* eslint-disable react-native/no-inline-styles */
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {gray, hp, wp} from '../utils';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ItemCard from './ItemCard';
import {FlatList} from 'react-native-gesture-handler';

const NewArivalItems = () => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        gap: 10 + wp(0.3),
        paddingBottom: 10 + wp(0.3),
        flexWrap: 'wrap',
      }}>
      {data?.map((item, i) => (
        <ItemCard key={i} />
      ))}
    </View>
  );
};

export default NewArivalItems;

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
