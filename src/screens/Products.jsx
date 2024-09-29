/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
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
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Slider} from '@miblanchard/react-native-slider';

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
            <TouchableOpacity key={i}>
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

      <Footer />
    </View>
  );
};

export default Products;

const items = ['Best Offer', 'Men', 'Women', 'Kids', 'unisex'];

const Footer = () => {
  const [openBox, setopenBox] = useState('');
  const genderValue = useSharedValue(0);
  const sortValue = useSharedValue(0);
  const filtervalue = useSharedValue(0);

  const genderStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(genderValue.value, {
        duration: 300,
      }),
    };
  });

  return (
    <>
      {console.log(genderValue.value)}

      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
          // padding: 10,
          backgroundColor: 'white',
          height: 60,
          elevation: 10,
          alignItems: 'center',
        }}>
        {/* absolute box of gender */}
        <Animated.View
          style={[
            genderStyle,
            {
              width: '100%',
              backgroundColor: 'white',
              height: 0,
              position: 'absolute',
              bottom: 60,
              // left: 0,
              right: 0,
              overflow: 'hidden',
            },
          ]}>
          <Text style={{fontSize: 24, color: 'black', margin: 10}}>
            {openBox.slice(0, 1).toUpperCase() +
              openBox.slice(1, openBox.length)}
          </Text>
          {/* gender button  */}
          {openBox !== 'filter' && (
            <View
              style={{
                flexDirection: 'row',
                gap: 15,
                padding: 10,
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 45,
                  backgroundColor: 'black',
                }}>
                <Text style={{color: 'white', fontSize: 17}}>Men</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 45,
                  backgroundColor: gray.extraLight,
                }}>
                <Text style={{color: 'black', fontSize: 17}}>Women</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* filter items  */}
          {openBox === 'filter' && <FilterItems />}
        </Animated.View>

        <TouchableOpacity
          onPress={() => {
            if (genderValue.value === 0) {
              setopenBox('gender');
              genderValue.value = 130;
            } else {
              genderValue.value = 0;
            }
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            gap: 5,
          }}>
          <>
            <FontAwesomeIcon color="gray" size={22} icon={faUser} />
            <Text style={{color: 'black', fontSize: 15.5}}>GENDER</Text>
          </>
        </TouchableOpacity>
        <View style={{height: '95%', backgroundColor: gray.light, width: 2}} />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}
          onPress={() => {
            if (genderValue.value === 0) {
              setopenBox('sort');
              genderValue.value = 130;
            } else {
              genderValue.value = 0;
            }
          }}>
          <FontAwesomeIcon color="gray" size={22} icon={faUpDown} />
          <Text style={{color: 'black', fontSize: 15.5}}>SORT</Text>
        </TouchableOpacity>
        <View style={{height: '95%', backgroundColor: gray.light, width: 2}} />
        <TouchableOpacity
          onPress={() => {
            if (genderValue.value === 0) {
              setopenBox('filter');
              genderValue.value = 500;
            } else {
              genderValue.value = 0;
            }
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            gap: 5,
          }}>
          <FontAwesomeIcon color="gray" size={22} icon={faFilter} />
          <Text style={{color: 'black', fontSize: 15.5}}>FILTER</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const FilterItems = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, padding: 10}}>
      <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
        Brand
      </Text>

      <ScrollView horizontal style={{height: 0, maxHeight: 60}}>
        <View style={{flexDirection: 'row', gap: 10, marginTop: 5}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: 'black',
            }}>
            <Text style={{color: 'white', fontSize: 17}}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Luios Viton</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Nike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Puma</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Gucci</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text
        style={{
          color: 'black',
          fontSize: 18,
          fontWeight: '500',
        }}>
        Categories
      </Text>
      <ScrollView horizontal style={{maxHeight: 55}}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginTop: 5,
            maxHeight: 55,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: 'black',
            }}>
            <Text style={{color: 'white', fontSize: 17}}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Lower</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Upper</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 150,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Under Garments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Gucci</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          fontWeight: '500',
          marginTop: 8,
        }}>
        Size
      </Text>
      <ScrollView horizontal style={{maxHeight: 55}}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginTop: 5,
            maxHeight: 55,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: 'black',
            }}>
            <Text style={{color: 'white', fontSize: 17}}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Small</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>Large</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>XL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 45,
              backgroundColor: gray.extraLight,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>XXL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text
        style={{
          color: 'black',
          fontSize: 18,
          fontWeight: '500',
          marginTop: 30,
        }}>
        Price
      </Text>

      <Slider value={300} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
