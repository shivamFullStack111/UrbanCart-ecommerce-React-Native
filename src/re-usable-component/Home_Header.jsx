import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faBell} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

const Home_Header = ({setOptionOpen, toggle, setisSideBarOpen}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainCon}>
      <TouchableOpacity
        onPress={() => {
          setisSideBarOpen(true);
          toggle();
        }}>
        <FontAwesomeIcon size={26} icon={faBars} />
      </TouchableOpacity>
      <Text style={styles.logo}>Urban Cart</Text>
      <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
        <FontAwesomeIcon size={26} icon={faBell} />
      </TouchableOpacity>
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
    backgroundColor: 'white',
  },
  logo: {
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
  },
});
