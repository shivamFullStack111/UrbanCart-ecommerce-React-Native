/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {Pressable, ScrollView} from 'react-native-gesture-handler';
import {gray} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

const AccountDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
            Account Details
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 15,
            padding: 10,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              width: '43%',
              height: 70,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Total Spend</Text>
            <Text style={{color: gray.light, fontSize: 16}}>$392</Text>
          </View>
          <View
            style={{
              width: '43%',
              height: 70,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Total Orders</Text>
            <Text style={{color: gray.light, fontSize: 16}}>38</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 15,
            padding: 10,
            justifyContent: 'center',
            paddingTop: 0,
          }}>
          <View
            style={{
              width: '43%',
              height: 70,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Active Orders</Text>
            <Text style={{color: gray.light, fontSize: 16}}>0</Text>
          </View>
          <View
            style={{
              width: '43%',
              height: 70,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Total Refunds</Text>
            <Text style={{color: gray.light, fontSize: 16}}>3</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountDetails;
