/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {gray, wp} from '../utils';

const MyOrders = () => {
  const navigation = useNavigation();
  const [page, setpage] = useState(0);
  const pageRef = useRef();

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
            onPress={() => {
              setpage(0);
              pageRef.current.scrollToIndex({index: 0, animated: true});
            }}
            style={{
              color: page === 0 ? 'white' : 'black',
              backgroundColor: page !== 1 ? 'black' : gray.extraLight,
              width: '48%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: page === 0 ? 'white' : 'black',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Ongoing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setpage(1);

              pageRef.current.scrollToIndex({index: 1, animated: true});
            }}
            style={{
              color: page === 1 ? 'white' : 'black',
              backgroundColor: page === 1 ? 'black' : gray.extraLight,
              width: '48%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: page === 0 ? 'black' : 'white',
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
        renderItem={i => (
          <View style={{flex: 1, width: wp(100)}}>
            {i.index === 0 ? <Ongoing /> : <Completed />}
          </View>
        )}
        pagingEnabled
        horizontal
        scrollEnabled={false}

        // initialScrollIndex={e => console.log(e)}
      />
    </View>
  );
};

export default MyOrders;

const Ongoing = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{minWidth: wp(100)}}
      contentContainerStyle={{flexGrow: 1}}>
      <FlatList
        style={{marginTop: 10}}
        data={data}
        renderItem={() => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 15,

                width: '95%',
                alignSelf: 'center',
              }}>
              <Image
                style={{
                  width: wp(30),
                  height: wp(38),
                  marginRight: 10,
                }}
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}></Image>
              <View style={{flex: 1, gap: 4}}>
                <Text
                  style={{color: gray.dim, fontSize: 17, fontWeight: '500'}}>
                  Red Hand Bloack Tiered Brand - Plozaa E-Sale
                </Text>
                <Text style={{color: 'black', fontSize: 18, fontWeight: '400'}}>
                  $89{' '}
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 16,
                      fontWeight: '400',
                      textDecorationLine: 'line-through',
                    }}>
                    $130{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 16,
                      fontWeight: '400',
                    }}>
                    {' '}
                    QTY: 3
                  </Text>
                </Text>
                <Text style={{color: 'green', fontWeight: '500'}}>
                  DELIVERY
                </Text>

                {/* button  */}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 7,
                    paddingHorizontal: 10,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 3,
                      borderWidth: 0.5,
                      borderColor: 'red',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        fontWeight: '500',
                        fontSize: 16,
                      }}>
                      40% OFF
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('track')}
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 3,
                      borderWidth: 0.5,
                      borderColor: 'black',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: gray.dim,
                        fontWeight: '500',
                        fontSize: 16,
                      }}>
                      Track Order
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

const Completed = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <FlatList
        style={{marginTop: 10}}
        data={data}
        renderItem={() => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 15,

                width: '95%',
                alignSelf: 'center',
              }}>
              <Image
                style={{
                  width: wp(30),
                  height: wp(38),
                  backgroundColor: 'red',
                  marginRight: 10,
                }}
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}></Image>
              <View style={{flex: 1, gap: 4}}>
                <Text
                  style={{color: gray.dim, fontSize: 17, fontWeight: '500'}}>
                  Red Hand Bloack Tiered Brand - Plozaa E-Sale
                </Text>
                <Text style={{color: 'black', fontSize: 18, fontWeight: '400'}}>
                  $89{' '}
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 16,
                      fontWeight: '400',
                      textDecorationLine: 'line-through',
                    }}>
                    $130{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 16,
                      fontWeight: '400',
                    }}>
                    {' '}
                    QTY: 3
                  </Text>
                </Text>
                <Text style={{color: 'green', fontWeight: '500'}}>
                  DELIVERY
                </Text>

                {/* button  */}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 7,
                    paddingHorizontal: 10,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 3,
                      borderWidth: 0.5,
                      borderColor: 'red',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        fontWeight: '500',
                        fontSize: 16,
                      }}>
                      40% OFF
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('writeReview')}
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 3,
                      borderWidth: 0.5,
                      borderColor: 'black',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: gray.dim,
                        fontWeight: '500',
                        fontSize: 16,
                      }}>
                      Write Review
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};
