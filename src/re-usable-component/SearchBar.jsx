/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text} from 'react-native';
import React from 'react';
import {gray} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';

const SearchBar = () => {
  return (
    <View
      style={{
        width: '92%',
        alignSelf: 'center',
        height: 50,
        backgroundColor: gray.light,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <FontAwesomeIcon color={gray.gray} size={22} icon={faMagnifyingGlass} />
      <TextInput
        style={{
          flex: 1,
          color: 'black',
          fontSize: 16,
          fontWeight: '500',
        }}
      />
      <FontAwesomeIcon color={gray.gray} size={22} icon={faList} />
    </View>
  );
};

export default SearchBar;
