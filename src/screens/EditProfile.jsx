/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Pressable, ScrollView, TextInput} from 'react-native-gesture-handler';
import {gray, manImage} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faPencil} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import Button from '../re-usable-component/Button';

const EditProfile = () => {
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
            Edit Profile
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            position: 'relative',
            width: 130,
            alignSelf: 'center',
          }}>
          <Image
            style={{
              height: 130,
              width: 130,
              borderRadius: 200,
              borderWidth: 1,
              borderColor: 'gray',
              marginTop: 40,
            }}
            source={{uri: manImage}}
          />
          <FontAwesomeIcon
            style={{
              position: 'absolute',
              bottom: 5,
              right: 15,
            }}
            size={24}
            icon={faPencil}
          />
        </View>
        <View style={{padding: 10}}>
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            Full Name
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
            placeholder="Enter your full name"
            placeholderTextColor={'gray'}
          />
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            Mobile Number
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
          />
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            Email
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
            placeholder="Enter your email"
            placeholderTextColor={'gray'}
          />
          <Text style={{color: gray.most, fontSize: 18, marginTop: 15}}>
            Gender
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
            placeholder="Select your gender"
            placeholderTextColor={'gray'}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={{padding: 10}}>
        <Button title="Confirm" />
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

{
  /* <Text style={{color: gray.most, fontSize: 18}}>Full Name</Text>
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
  placeholder="Enter your full name"
  placeholderTextColor={'gray'}
/> */
}
