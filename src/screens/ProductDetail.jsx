import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faShoppingBag,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {gray} from '../utils';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../re-usable-component/Button';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons/faShoppingBasket';

const ProductDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          maxHeight: 60,
          paddingHorizontal: 10,
        }}>
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
          Product Details
        </Text>
      </View>

      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 250}}>
        <ImageBackground
          style={{
            width: '100%',
            height: '70%',
            backgroundColor: gray.extraLight,
            marginTop: 10,
            justifyContent: 'flex-end',
          }}
          source={require('../../images/sampleImage.png')}>
          <View style={{width: 90, alignItems: 'center'}}>
            {[1, 2, 3, 4].map((image, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  borderWidth: 1,
                  width: 65,
                  height: 85,
                  marginBottom: 10,
                  borderColor: 'red',
                }}>
                <Image
                  style={{
                    width: 63,
                    height: 85,
                    backgroundColor: 'white',
                    flex: 1,
                  }}
                  source={require('../../images/sampleImage.png')}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'red', fontSize: 18}}>Thivi Blouse</Text>
          <Text
            style={{color: 'black', fontSize: 15, textAlignVertical: 'top'}}>
            <FontAwesomeIcon icon={faStar} color="gold" /> Ratings (4.5)
          </Text>
        </View>

        <Text
          style={{
            color: 'black',
            padding: 10,
            fontSize: 20,
            fontWeight: '500',
          }}>
          Bluebell Hand Block Tired Dress
        </Text>

        <View
          style={{
            flexDirection: 'row',
            gap: 50,
            alignItems: 'center',
            padding: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontSize: 15}}>Price:</Text>
            <Text
              style={{
                color: 'red',
                fontSize: 24,
                marginTop: 3,
                fontWeight: '500',
              }}>
              $217{' '}
              <Text
                style={{
                  color: 'gray',
                  textDecorationLine: 'line-through',
                  fontSize: 15,
                }}>
                $392
              </Text>
            </Text>
          </View>
          <View>
            <Text style={{color: 'black', fontSize: 15, marginBottom: 5}}>
              Ouantity:
            </Text>
            <View style={{flexDirection: 'row', gap: 3}}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: gray.extraLight,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black', fontSize: 20}}>-</Text>
              </View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black', fontSize: 17}}>5</Text>
              </View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: gray.extraLight,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black', fontSize: 20}}>+</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{color: 'black', fontSize: 17, padding: 10}}>
          Item Size:
        </Text>
        <View style={{padding: 10, flexDirection: 'row', gap: 10}}>
          <Text
            style={{
              color: 'white',
              backgroundColor: 'black',
              paddingHorizontal: 15,
              paddingVertical: 8,
            }}>
            T
          </Text>
          {['S', 'M', 'L', 'XL', 'XXL'].map(i => (
            <Text
              style={{
                color: 'black',
                backgroundColor: gray.extraLight,
                paddingHorizontal: 15,
                paddingVertical: 8,
              }}
              key={i}>
              {i}
            </Text>
          ))}
        </View>
        <Text style={{color: 'black', fontSize: 17, padding: 10}}>
          Item Color:
        </Text>
        <View style={{padding: 10, flexDirection: 'row', gap: 10}}>
          {['red', 'pink', 'white', 'black', 'green'].map(i => (
            <View
              style={{
                backgroundColor: i,
                paddingHorizontal: 15,
                paddingVertical: 8,
                height: 40,
                width: 40,
                borderRadius: 100,
                borderWidth: 0.3,
                borderColor: 'gray',
              }}
              key={i}></View>
          ))}
        </View>

        <Text style={{color: 'black', fontSize: 17, padding: 10}}>
          Description:
        </Text>
        <Text style={{color: 'gray', fontSize: 16, padding: 10, paddingTop: 0}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto
          provident pariatur omnis magnam quisquam laborum ab incidunt impedit
          est.
        </Text>
      </ScrollView>

      <TouchableOpacity style={{margin: 10}}>
        <Button title={`Add To Cart`} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
