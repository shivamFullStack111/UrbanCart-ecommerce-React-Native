/* eslint-disable react-native/no-inline-styles */
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {gray, hp, wp} from '../utils';

const ItemCard = () => {
  return (
    <View
      style={{
        width: 180,
        marginBottom: 10,
      }}>
      <ImageBackground
        style={{
          width: 180,
          height: 250,
          justifyContent: 'space-between',
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1635131675778-282f258f82c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D',
        }}>
        <TouchableOpacity>
          <FontAwesomeIcon
            color="white"
            size={25}
            style={{margin: 10}}
            icon={faHeart}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 40,
            backgroundColor: 'white',
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 17,
              color: gray.dim,
              fontWeight: '700',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text
        style={{
          color: gray.dim,
          fontSize: hp(2.2),
          fontWeight: '500',
          flexShrink: 30,
        }}>
        CLASSIC - Men T-shirt Free Smoke
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontWeight: '600', fontSize: hp(2.3)}}>
          $80{' '}
          <Text
            style={{
              fontSize: hp(2),
              color: gray.gray,
              textDecorationLine: 'line-through',
            }}>
            $90
          </Text>
        </Text>
        <Text style={{color: gray.gray}}>(2k review)</Text>
      </View>
    </View>
  );
};

export default ItemCard;
