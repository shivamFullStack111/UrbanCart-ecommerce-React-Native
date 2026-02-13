/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import {
  faCartShopping,
  faFilter,
  faHeart,
  faSearch,
  faUpDown,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {faLine} from '@fortawesome/free-brands-svg-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Slider} from '@miblanchard/react-native-slider';
import {useNavigation} from '@react-navigation/native';
import {gray, hp} from '../utils';

const items = ['Best Offer', 'Men', 'Women', 'Kids', 'Unisex'];

const Products = () => {
  const navigation = useNavigation();
  return (
    <View style={stylesProducts.container}>
      {/* Header */}
      <View style={stylesProducts.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faAngleLeft} size={28} />
        </TouchableOpacity>

        <View style={stylesProducts.searchContainer}>
          <FontAwesomeIcon size={22} color={'gray'} icon={faSearch} />
          <TextInput
            placeholder="Search Products"
            placeholderTextColor={'gray'}
            style={stylesProducts.searchInput}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('cart')}>
          <FontAwesomeIcon icon={faCartShopping} size={26} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal style={stylesProducts.categoriesScroll}>
        <View style={stylesProducts.categoriesContainer}>
          {items.map((item, i) => (
            <TouchableOpacity key={i} style={stylesProducts.categoryButton}>
              <Text style={stylesProducts.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Products List */}
      <ScrollView
        contentContainerStyle={stylesProducts.productsContainer}
        showsVerticalScrollIndicator={false}>
        {Array.from({length: 19}, (_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('productDetail')}>
            <ImageBackground
              source={require('../../images/sampleImage.png')}
              style={stylesProducts.productImage}>
              <FontAwesomeIcon
                icon={faHeart}
                size={24}
                style={stylesProducts.heartIcon}
                color={i % 2 === 0 ? gray.gray : 'red'}
              />

              <View style={stylesProducts.addToCartButton}>
                <Text style={stylesProducts.addToCartText}>Add To Cart</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
};

export default Products;

/* Styles for Products Component */
const stylesProducts = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  searchContainer: {
    width: '80%',
    height: 44,
    backgroundColor: gray.extraLight,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  searchInput: {
    fontSize: 15.5,
    color: gray.gray,
    flex: 1,
  },
  categoriesScroll: {
    height: 70,
  },
  categoriesContainer: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  categoryButton: {
    backgroundColor: gray.extraLight,
    height: 40,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  categoryText: {
    color: gray.gray,
    textAlign: 'center',
    fontSize: 14,
  },
  productsContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
    paddingBottom: 35,
  },
  productImage: {
    width: 170,
    height: 220,
    backgroundColor: gray.extraLight,
    borderRadius: 10,
    overflow: 'hidden',
  },
  heartIcon: {
    margin: 10,
  },
  addToCartButton: {
    width: '90%',
    marginBottom: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    alignSelf: 'center',
    marginTop: 'auto',
    borderRadius: 5,
  },
  addToCartText: {
    color: gray.gray,
    fontWeight: '500',
    fontSize: 15,
  },
});

/* Footer Component */
const Footer = () => {
  const [openBox, setOpenBox] = useState('');
  const [activeButton, setActiveButton] = useState('');

  const animatedStyle = useAnimatedStyle(() => {
    let height = 0;
    if (openBox === 'gender') height = 130;
    if (openBox === 'sort') height = 130;
    if (openBox === 'filter') height = 500;

    return {
      height: withTiming(height, {
        duration: 300,
      }),
    };
  });

  const handlePress = type => {
    if (openBox === type) {
      setOpenBox('');
      setActiveButton('');
    } else {
      setOpenBox(type);
      setActiveButton(type);
    }
  };

  return (
    <>
      <Animated.View style={[stylesFooter.animatedBox, animatedStyle]}>
        <Text style={stylesFooter.boxTitle}>
          {openBox.charAt(0).toUpperCase() + openBox.slice(1)}
        </Text>
        {/* Gender Buttons */}
        {openBox !== 'filter' && openBox !== 'sort' && (
          <View style={stylesFooter.genderContainer}>
            <TouchableOpacity style={stylesFooter.genderButton}>
              <Text style={stylesFooter.genderButtonText}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesFooter.genderButton}>
              <Text style={stylesFooter.genderButtonText}>Women</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Filter Items */}
        {openBox === 'filter' && <FilterItems />}
        {/* Sort Items */}
        {openBox === 'sort' && <SortItems />}
      </Animated.View>

      {openBox !== '' && (
        <Pressable
          onPress={() => {
            setOpenBox('');
            setActiveButton('');
          }}
          style={stylesFooter.overlay}
        />
      )}

      {/* Footer Buttons */}
      <View style={stylesFooter.footerContainer}>
        {/* Gender Button */}
        <TouchableOpacity
          onPress={() => handlePress('gender')}
          style={[
            stylesFooter.footerButton,
            activeButton === 'gender' && stylesFooter.activeButton,
          ]}>
          <FontAwesomeIcon color="gray" size={22} icon={faUser} />
          <Text style={stylesFooter.footerButtonText}>GENDER</Text>
        </TouchableOpacity>

        <View style={stylesFooter.separator} />

        {/* Sort Button */}
        <TouchableOpacity
          onPress={() => handlePress('sort')}
          style={[
            stylesFooter.footerButton,
            activeButton === 'sort' && stylesFooter.activeButton,
          ]}>
          <FontAwesomeIcon color="gray" size={22} icon={faUpDown} />
          <Text style={stylesFooter.footerButtonText}>SORT</Text>
        </TouchableOpacity>

        <View style={stylesFooter.separator} />

        {/* Filter Button */}
        <TouchableOpacity
          onPress={() => handlePress('filter')}
          style={[
            stylesFooter.footerButton,
            activeButton === 'filter' && stylesFooter.activeButton,
          ]}>
          <FontAwesomeIcon color="gray" size={22} icon={faFilter} />
          <Text style={stylesFooter.footerButtonText}>FILTER</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

/* Styles for Footer Component */
const stylesFooter = StyleSheet.create({
  animatedBox: {
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 60,
    right: 0,
    overflow: 'hidden',
    zIndex: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  boxTitle: {
    fontSize: 24,
    color: 'black',
    margin: 10,
    fontWeight: '600',
  },
  genderContainer: {
    flexDirection: 'row',
    gap: 15,
    padding: 10,
  },
  genderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 45,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  genderButtonText: {
    color: 'white',
    fontSize: 17,
  },
  overlay: {
    width: '100%',
    backgroundColor: '#0004',
    height: hp(100),
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  footerContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: 'white',
    height: 60,
    elevation: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  footerButtonText: {
    color: 'black',
    fontSize: 15.5,
  },
  activeButton: {
    backgroundColor: gray.extraLight,
    borderRadius: 5,
  },
  separator: {
    height: '95%',
    backgroundColor: gray.light,
    width: 2,
  },
});

/* FilterItems Component */
const FilterItems = () => {
  const [range, setRange] = useState([0, 10000]); // Initial values for the range

  return (
    <ScrollView contentContainerStyle={stylesFilterItems.container}>
      {/* Brand Section */}
      <Text style={stylesFilterItems.sectionTitle}>Brand</Text>
      <ScrollView horizontal style={stylesFilterItems.scrollSection}>
        <View style={stylesFilterItems.buttonRow}>
          <TouchableOpacity style={stylesFilterItems.activeFilterButton}>
            <Text style={stylesFilterItems.activeFilterButtonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Liuos Viton</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Nike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Puma</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Gucci</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Categories Section */}
      <Text style={stylesFilterItems.sectionTitle}>Categories</Text>
      <ScrollView horizontal style={stylesFilterItems.scrollSection}>
        <View style={stylesFilterItems.buttonRow}>
          <TouchableOpacity style={stylesFilterItems.activeFilterButton}>
            <Text style={stylesFilterItems.activeFilterButtonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Lower</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Upper</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>
              Under Garments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Gucci</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Size Section */}
      <Text style={stylesFilterItems.sectionTitle}>Size</Text>
      <ScrollView horizontal style={stylesFilterItems.scrollSection}>
        <View style={stylesFilterItems.buttonRow}>
          <TouchableOpacity style={stylesFilterItems.activeFilterButton}>
            <Text style={stylesFilterItems.activeFilterButtonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Small</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>Large</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>XL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesFilterItems.filterButton}>
            <Text style={stylesFilterItems.filterButtonText}>XXL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Price Section */}
      <Text style={stylesFilterItems.sectionTitle}>Price</Text>
      <Text style={stylesFilterItems.priceText}>
        Selected range: {range[0]} - {range[1]}
      </Text>
      <Slider
        value={range}
        onValueChange={value => setRange(value)}
        minimumValue={0}
        maximumValue={10000}
        step={1} // Optional, if you want discrete steps
        minimumTrackTintColor="#1fb28a" // Customize slider colors if needed
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#1fb28a"
        containerStyle={stylesFilterItems.sliderContainer}
      />
    </ScrollView>
  );
};

/* Styles for FilterItems Component */
const stylesFilterItems = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
  scrollSection: {
    maxHeight: 60,
    marginTop: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  activeFilterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 45,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  activeFilterButtonText: {
    color: 'white',
    fontSize: 17,
  },
  filterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 45,
    backgroundColor: gray.extraLight,
    borderRadius: 5,
  },
  filterButtonText: {
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
  },
  priceText: {
    color: 'black',
    marginTop: 5,
    fontSize: 16,
  },
  sliderContainer: {
    marginTop: 10,
  },
});

/* SortItems Component (Optional) */
// You can create a SortItems component similar to FilterItems if needed.
// For now, it's a placeholder.
const SortItems = () => {
  return (
    <View style={stylesSortItems.container}>
      <Text style={stylesSortItems.text}>Sort options will go here.</Text>
    </View>
  );
};

/* Styles for SortItems Component */
const stylesSortItems = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
