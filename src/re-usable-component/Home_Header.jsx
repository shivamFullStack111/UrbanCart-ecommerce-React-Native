import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faBell} from '@fortawesome/free-solid-svg-icons';

const Home_Header = ({setOptionOpen}) => {
  return (
    <View style={styles.mainCon}>
      <FontAwesomeIcon size={26} icon={faBars} />
      <Text style={styles.logo}>Urban Cart</Text>
      <FontAwesomeIcon size={26} icon={faBell} />
    </View>
  );
};

export default Home_Header;

const styles = StyleSheet.create({
  mainCon: {
    height: 70,
    // borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
  },
});
