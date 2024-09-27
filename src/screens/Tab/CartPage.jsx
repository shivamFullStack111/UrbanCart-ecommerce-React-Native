/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCheck,
  faHeart,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {gray, wp} from '../../utils'; // Assuming gray utility for color
import Button from '../../re-usable-component/Button';
import {useNavigation} from '@react-navigation/native';

const CardPage = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Cart</Text>
          <Text style={styles.subTitle}>
            2 Items Deliver to: Jalandhar, Punjab
          </Text>
        </View>
        <TouchableOpacity style={styles.changeButton}>
          <FontAwesomeIcon icon={faLocationDot} />
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ListHeaderComponent={() => (
          <View>
            <View style={styles.summaryCon}>
              <Text style={styles.subtotal}>Subtotal </Text>
              <Text style={styles.summaryPrice}>$3,484</Text>
            </View>
            <View style={styles.freeDeliveryContainer}>
              <View style={styles.iconContainer}>
                <FontAwesomeIcon color="white" icon={faCheck} />
              </View>
              <Text style={styles.freeDeliveryMessage}>
                You are eligible for free delivery
              </Text>
            </View>
          </View>
        )}
        data={data}
        renderItem={() => <Card />}
        keyExtractor={(item, index) => index.toString()}
      />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          paddingTop: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('checkout')}>
          <Button title="Proceed to Buy" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Card = () => {
  return (
    <View style={cardStyles.cardContainer}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1588175996685-a40693ee1087?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmclMjBicmFuZCUyMHdvbWVufGVufDB8fDB8fHww',
        }}
        style={cardStyles.productImage}>
        <FontAwesomeIcon
          icon={faHeart}
          size={20}
          color="red"
          style={{margin: 8}}
        />
      </ImageBackground>
      <View style={cardStyles.detailsContainer}>
        <Text style={cardStyles.productTitle}>
          Blue Hand Block Tiered Dress
        </Text>

        <View style={cardStyles.priceContainer}>
          <Text style={cardStyles.currentPrice}>$90</Text>
          <Text style={cardStyles.originalPrice}>$120</Text>
          <Text style={cardStyles.reviewText}>(2K review)</Text>
        </View>

        <Text style={cardStyles.freeDeliveryText}>FREE Delivery</Text>

        <View style={cardStyles.footerContainer}>
          <View style={cardStyles.quantityContainer}>
            <TouchableOpacity style={cardStyles.quantityButton}>
              <Text style={cardStyles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={cardStyles.quantityNumber}>3</Text>
            <TouchableOpacity style={cardStyles.quantityButton}>
              <Text style={cardStyles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={cardStyles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  subTitle: {
    color: gray.dim,
    fontWeight: '500',
    fontSize: 14,
  },
  changeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    borderColor: gray.light,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
  changeText: {
    color: 'black',
    fontWeight: '500',
  },
  summaryCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  subtotal: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  summaryPrice: {
    color: 'red',
    fontWeight: '600',
    fontSize: 20,
  },
  freeDeliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  iconContainer: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 100,
  },
  freeDeliveryMessage: {
    color: 'green',
    fontWeight: '500',
    fontSize: 18,
    paddingHorizontal: 10,
  },
});

const cardStyles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    flexDirection: 'row',
    height: 145,
    marginBottom: 10,
    marginTop: 20,
    gap: 10,
    alignSelf: 'center',
  },
  productImage: {
    width: wp(30),
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
  },
  productTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 17,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  currentPrice: {
    color: gray.most,
    fontWeight: '500',
    fontSize: 17,
    marginTop: 5,
  },
  originalPrice: {
    color: gray.most,
    fontWeight: '500',
    fontSize: 15,
    marginTop: 5,
    textDecorationLine: 'line-through',
  },
  reviewText: {
    color: gray.gray,
    fontWeight: '500',
  },
  freeDeliveryText: {
    color: '#1bd13d',
    marginTop: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: gray.light,
  },
  quantityText: {
    color: 'black',
    fontWeight: '700',
  },
  quantityNumber: {
    color: 'black',
    width: 25,
    height: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  removeButtonText: {
    color: 'red',
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
  },
});
