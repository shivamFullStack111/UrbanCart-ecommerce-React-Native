import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faMagnifyingGlass,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import {gray, hp, wp} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Wishlist</Text>
          <Text style={styles.headerSubtitle}>2 Items Total $246</Text>
        </View>
        <FontAwesomeIcon size={24} icon={faMagnifyingGlass} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardsContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </View>
  );
};

export default Wishlist;

const Card = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('productDetail')}
      style={styles.cardContainer}>
      <ImageBackground
        style={styles.cardImage}
        source={{
          uri: 'https://images.unsplash.com/photo-1635131675778-282f258f82c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D',
        }}>
        <TouchableOpacity style={styles.cardCloseButton}>
          <View style={styles.cardCloseIcon}>
            <FontAwesomeIcon size={18} color="red" icon={faX} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.cardTitle}>CLASSIC - Men T-shirt Free Smoke</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.currentPrice}>
          $80 <Text style={styles.oldPrice}>$90</Text>
        </Text>
        <Text style={styles.reviewCount}>(2k review)</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 3,
  },
  headerTitle: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  headerSubtitle: {
    color: gray.dim,
    fontWeight: '500',
    fontSize: 14,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  cardsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: wp(3),
    paddingBottom: 10,
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: 180,
    marginBottom: 5,
  },
  cardImage: {
    width: 180,
    height: 230,
    justifyContent: 'space-between',
  },
  cardCloseButton: {
    alignItems: 'flex-end',
    padding: 8,
  },
  cardCloseIcon: {
    backgroundColor: 'white',
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 17,
    color: gray.dim,
    fontWeight: '700',
  },
  cardTitle: {
    color: gray.dim,
    fontSize: hp(2.2),
    fontWeight: '500',
    flexShrink: 30,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentPrice: {
    color: 'black',
    fontWeight: '600',
    fontSize: hp(2.3),
  },
  oldPrice: {
    fontSize: hp(2),
    color: gray.gray,
    textDecorationLine: 'line-through',
  },
  reviewCount: {
    color: gray.gray,
  },
});
