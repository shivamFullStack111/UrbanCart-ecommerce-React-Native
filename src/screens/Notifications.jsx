import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {manImage} from '../utils';

const Notifications = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
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
          Notifications
        </Text>
      </View>

      <View style={{padding: 10}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={() => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  paddingVertical: 8,
                }}>
                <Image
                  style={{width: 60, height: 60, borderRadius: 100}}
                  source={{uri: manImage}}
                />
                <View>
                  <Text
                    style={{color: 'black', fontSize: 18, fontWeight: '400'}}>
                    New Arrivals Alert!
                  </Text>
                  <Text
                    style={{color: 'gray', fontSize: 15, fontWeight: '400'}}>
                    15 july 2024
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Notifications;
