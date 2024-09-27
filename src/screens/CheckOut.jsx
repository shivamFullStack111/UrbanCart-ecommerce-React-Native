import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {gray, hp, wp} from '../utils';
import Button from '../re-usable-component/Button';

const CheckOut = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            // justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            paddingVertical: 15,
          }}>
          <FontAwesomeIcon color="black" size={24} icon={faChevronLeft} />
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              textAlign: 'center',
              width: '90%',
              fontWeight: '700',
            }}>
            Checkout
          </Text>
        </View>

        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <FontAwesomeIcon size={28} icon={faLocationDot} />
          <View>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Delivery address
            </Text>
            <Text style={{color: 'gray', fontWeight: '500'}}>
              123 Main Street,Anytown
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'gray',
            width: '95%',
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <FontAwesomeIcon size={28} icon={faLocationDot} />
          <View>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Payment
            </Text>
            <Text style={{color: 'gray', fontWeight: '500'}}>
              XXXX XXXX XXXX 3454
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'gray',
            width: '95%',
            alignSelf: 'center',
          }}></View>

        <View style={{padding: 10}}>
          <Text
            style={{
              padding: 10,
              color: 'black',
              fontWeight: '600',
              fontSize: 24,
            }}>
            Additional Notes:
          </Text>

          <View
            style={{
              width: '95%',
              backgroundColor: gray.light,
              height: 150,
              alignSelf: 'center',
            }}>
            <TextInput
              style={{padding: 10, fontSize: 17}}
              placeholder="Write Here"
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: hp(50),
          backgroundColor: 'white',
          elevation: 5,
          borderTopWidth: 1,
          borderColor: gray.light,
          maxHeight: 250,
        }}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'gray', fontWeight: '500', fontSize: 18}}>
              DEFENDER T-Shirt
            </Text>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
              2 x $39
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'gray', fontWeight: '500', fontSize: 18}}>
              Mens Hat
            </Text>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
              1 x $10
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'gray', fontWeight: '500', fontSize: 18}}>
              NYLON Shirt
            </Text>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
              2 x $167
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'gray', fontWeight: '500', fontSize: 18}}>
              Discount
            </Text>
            <Text style={{color: 'green', fontWeight: '500', fontSize: 18}}>
              -$20
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={{padding: 10}}>
          <Button title="Submit Order" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOut;
