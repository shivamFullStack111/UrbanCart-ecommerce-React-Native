/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import Home_Header from '../re-usable-component/Home_Header';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBar from '../re-usable-component/SearchBar';
import {gray, hp} from '../utils';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Home_Header />
      <SearchBar />
      <ImageBackground
        source={require('../../images/girlbgc.png')}
        style={{
          width: '100%',
          height: 150,
          justifyContent: 'flex-end',
          paddingBottom: 10,
          marginTop: 30,
        }}>
        <Text style={{...styles.heading}}>Make Your Fashion </Text>
        <Text style={styles.heading}> Look Amazing</Text>
      </ImageBackground>
    </ScrollView>
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
