/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Pressable, ScrollView, TextInput} from 'react-native-gesture-handler';
import {gray} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faPencil} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import Button from '../re-usable-component/Button';

const Addressess = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', padding: 10, maxHeight: 50}}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon color="black" size={24} icon={faChevronLeft} />
          </Pressable>

          <Text
            style={{
              fontSize: 22,
              color: 'black',
              textAlign: 'center',
              width: '90%',
              fontWeight: '700',
            }}>
            Add Delivery Address
          </Text>
        </View>

        <View style={{padding: 10}}>
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            Mobile No.
          </Text>
          <TextInput
            style={{
              backgroundColor: gray.extraLight,
              flex: 1,
              color: 'black',
              fontSize: 16,
              fontWeight: '400',
              marginTop: 3,
            }}
            cursorColor={'black'}
            placeholder="Enter your mobile number"
            placeholderTextColor={'gray'}
            keyboardType="numeric"
          />
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            Pincode
          </Text>
          <TextInput
            style={{
              backgroundColor: gray.extraLight,
              flex: 1,
              color: 'black',
              fontSize: 16,
              fontWeight: '400',
              marginTop: 3,
            }}
            cursorColor={'black'}
            placeholder="Enter pincode"
            placeholderTextColor={'gray'}
            keyboardType="numeric"
          />
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            Address
          </Text>
          <TextInput
            style={{
              backgroundColor: gray.extraLight,
              flex: 1,
              color: 'black',
              fontSize: 16,
              fontWeight: '400',
              marginTop: 3,
            }}
            cursorColor={'black'}
            placeholder="Enter your address"
            placeholderTextColor={'gray'}
          />
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            Locality/Town/Area
          </Text>
          <TextInput
            style={{
              backgroundColor: gray.extraLight,
              flex: 1,
              color: 'black',
              fontSize: 16,
              fontWeight: '400',
              marginTop: 3,
            }}
            cursorColor={'black'}
            placeholder="Enter your locality/town/area"
            placeholderTextColor={'gray'}
          />
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            City/District
          </Text>
          <TextInput
            style={{
              backgroundColor: gray.extraLight,
              flex: 1,
              color: 'black',
              fontSize: 16,
              fontWeight: '400',
              marginTop: 3,
            }}
            cursorColor={'black'}
            placeholder="Enter your city/district"
            placeholderTextColor={'gray'}
          />
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            State
          </Text>
          <TextInput
            style={{
              backgroundColor: gray.extraLight,
              flex: 1,
              color: 'black',
              fontSize: 16,
              fontWeight: '400',
              marginTop: 3,
            }}
            cursorColor={'black'}
            placeholder="Enter your State"
            placeholderTextColor={'gray'}
          />

          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: gray.most,
                fontSize: 18,
                marginTop: 15,
                fontWeight: '600',
              }}>
              Save Address As
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
            }}>
            <View
              style={{
                backgroundColor: 'black',
                borderWidth: 1,
                borderColor: 'gray',
                paddingHorizontal: 15,
                paddingVertical: 7,
                marginTop: 10,
              }}>
              <Text style={{color: 'white'}}>Home</Text>
            </View>
            <View
              style={{
                backgroundColor: gray.extraLight,
                borderWidth: 1,
                borderColor: 'gray',
                paddingHorizontal: 15,
                paddingVertical: 7,
                marginTop: 10,
              }}>
              <Text style={{color: 'black'}}>Shop</Text>
            </View>
            <View
              style={{
                backgroundColor: gray.extraLight,
                borderWidth: 1,
                borderColor: 'gray',
                paddingHorizontal: 15,
                paddingVertical: 7,
                marginTop: 10,
              }}>
              <Text style={{color: 'black'}}>Office</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={{padding: 10}}>
        <Button title="Confirm" />
      </TouchableOpacity>
    </View>
  );
};

export default Addressess;
