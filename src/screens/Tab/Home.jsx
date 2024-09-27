/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import React from 'react';
import Home_Header from '../../re-usable-component/Home_Header';
import {SearchBar} from 'react-native-screens';
import NewArivalCat from '../../re-usable-component/NewArival';
import Slide from '../../re-usable-component/Slide';
import NewArivalItems from '../../re-usable-component/NewArivalItems';
import {hp} from '../../utils';

const Home = () => {
  return (
    <FlatList
      data={[{key: 'dummy'}]} // dummy data for FlatList to work
      renderItem={null} // no need to render item, just using header
      ListHeaderComponent={() => (
        <View>
          <Home_Header />
          <SearchBar />
          <ImageBackground
            source={require('../../../images/girlbgc.png')}
            style={{
              width: '100%',
              height: 150,
              justifyContent: 'flex-end',
              paddingBottom: 10,
              marginTop: 30,
            }}
          />
          <Text style={{...styles.heading, marginTop: 20}}>
            Make Your Fashion
          </Text>
          <Text style={{...styles.heading, marginBottom: 20}}>
            Look Amazing
          </Text>
          <Slide />
          <NewArivalCat />
        </View>
      )}
      ListFooterComponent={() => <NewArivalItems />}
      contentContainerStyle={{flexGrow: 1}}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: hp(4),
    color: 'black',
    fontWeight: '800',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
