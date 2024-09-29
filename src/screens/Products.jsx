/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import {useNavigation} from '@react-navigation/native';
import {gray} from '../utils';
import {
  faCartShopping,
  faFilter,
  faHeart,
  faSearch,
  faUpDown,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {faLine} from '@fortawesome/free-brands-svg-icons';

const Products = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* header  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faAngleLeft} size={28} />
        </TouchableOpacity>

        <View
          style={{
            width: '80%',
            height: 44,
            backgroundColor: gray.extraLight,
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <FontAwesomeIcon size={22} color={'gray'} icon={faSearch} />
          <TextInput
            placeholder="Search Products"
            placeholderTextColor={'gray'}
            style={{fontSize: 15.5, color: gray.gray, flex: 1}}
          />
        </View>

        <FontAwesomeIcon icon={faCartShopping} size={26} />
      </View>

      <ScrollView horizontal style={{height: 70}}>
        <View style={{flexDirection: 'row', padding: 10, gap: 10}}>
          {items.map((item, i) => (
            <TouchableOpacity>
              <Text
                key={i}
                style={{
                  color: gray.gray,
                  backgroundColor: gray.extraLight,
                  height: 40,
                  width: 90,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10,
          marginTop: 20,
          paddingBottom: 35,
        }}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ].map((item, i) => {
          return (
            <ImageBackground
              source={require('../../images/sampleImage.png')}
              key={i}
              style={{
                width: 170,
                height: 220,
                backgroundColor: gray.extraLight,
              }}>
              <FontAwesomeIcon
                icon={faHeart}
                size={24}
                style={{margin: 10}}
                color={i % 2 == 0 ? gray.gray : 'red'}
              />

              <View
                style={{
                  width: '90%',
                  marginBottom: 6,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 45,
                  alignSelf: 'center',
                  marginTop: 'auto',
                }}>
                <Text
                  style={{color: gray.gray, fontWeight: '500', fontSize: 15}}>
                  Add To Cart
                </Text>
              </View>
            </ImageBackground>
          );
        })}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
          padding: 10,
          backgroundColor: 'white',
          height: 60,
          elevation: 10,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <FontAwesomeIcon color="gray" size={22} icon={faUser} />
          <Text style={{color: 'black', fontSize: 15.5}}>GENDER</Text>
        </View>
        <View style={{height: '95%', backgroundColor: gray.light, width: 2}} />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <FontAwesomeIcon color="gray" size={22} icon={faUpDown} />
          <Text style={{color: 'black', fontSize: 15.5}}>SORT</Text>
        </View>
        <View style={{height: '95%', backgroundColor: gray.light, width: 2}} />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <FontAwesomeIcon color="gray" size={22} icon={faFilter} />
          <Text style={{color: 'black', fontSize: 15.5}}>FILTER</Text>
        </View>
      </View>
    </View>
  );
};

export default Products;

const items = ['Best Offer', 'Men', 'Women', 'Kids', 'unisex'];
