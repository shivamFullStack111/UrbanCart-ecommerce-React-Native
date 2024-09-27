/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {gray, wp} from '../utils';

const MyOrders = () => {
  const navigation = useNavigation();
  const [page, setpage] = useState(1);
  const pageRef = useRef();
  useEffect(() => {
    if (pageRef.current) {
      if (page === 1) {
        pageRef.current.scrollToIndex({index: 0, animated: true});
      } else {
        pageRef.current.scrollToIndex({index: 1, animated: true});
      }
    }
  }, [page]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
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
        <View
          style={{
            width: '95%',
            justifyContent: 'space-between',
            padding: 10,
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => setpage(1)}
            style={{
              color: page === 1 ? 'white' : 'black',
              backgroundColor: page !== 2 ? 'black' : gray.extraLight,
              width: '48%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: page === 1 ? 'white' : 'black',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Ongoing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setpage(2)}
            style={{
              color: page === 2 ? 'white' : 'black',
              backgroundColor: page === 2 ? 'black' : gray.extraLight,
              width: '48%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: page === 1 ? 'black' : 'white',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        ref={pageRef}
        data={[1, 2]}
        renderItem={() => (
          <View style={{flex: 1, width: wp(100)}}>
            <Text style={{color: 'black'}}>cgvh dh</Text>
          </View>
        )}
        pagingEnabled
        horizontal
      />
    </View>
  );
};

export default MyOrders;
