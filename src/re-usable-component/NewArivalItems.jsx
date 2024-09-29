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
        paddingHorizontal: wp(3),
        flexDirection: 'row',
        gap: wp(3),
        paddingBottom: 10,
        flexWrap: 'wrap',
      }}>
      <FlatList
        keyExtractor={item => item}
        data={data}
        renderItem={ItemCard}
        numColumns={2}
        initialNumToRender={6}
        maxToRenderPerBatch={4}
        windowSize={2}
        removeClippedSubviews={true}
        columnWrapperStyle={{marginBottom: 10}}
      />
    </View>
  );
};

export default NewArivalItems;

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
