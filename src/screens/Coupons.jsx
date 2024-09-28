/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {gray} from '../utils';

const Coupons = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* coupons */}

      <FlatList
        ListHeaderComponent={() => (
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
              My Order
            </Text>
          </View>
        )}
        data={[1, 2, 3, 4]}
        renderItem={() => {
          return (
            <View
              style={{
                width: '93%',
                alignSelf: 'center',
                backgroundColor: gray.extraLight,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 15,
                padding: 15,
                borderRadius: 10,
              }}>
              <View style={{marginRight: 15}}>
                <Text style={{color: 'black', fontSize: 18}}>20%</Text>
                <Text style={{color: gray.gray, fontSize: 17}}>Off</Text>
              </View>
              <View
                style={{
                  height: '100%',
                  borderRightWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: 'gray',
                  marginRight: 15,
                }}></View>
              <View>
                <Text style={{fontSize: 17, color: 'black'}}>Home Decor</Text>
                <Text style={{fontSize: 15, color: 'gray'}}>
                  On minimum purchase of Rs 2,999
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Coupons;
