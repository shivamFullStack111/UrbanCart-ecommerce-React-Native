/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Home_Header from '../../re-usable-component/Home_Header';
import {SearchBar} from 'react-native-screens';
import NewArivalCat from '../../re-usable-component/NewArival';
import Slide from '../../re-usable-component/Slide';
import NewArivalItems from '../../re-usable-component/NewArivalItems';
import {hp, manImage, wp} from '../../utils';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleRight,
  faArrowRightFromBracket,
  faBoxesStacked,
  faCartShopping,
  faHeart,
  faHouse,
  faMessage,
  faPersonRifle,
  faTruck,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

// Sidebar Items Data
const items = [
  {
    title: 'Home',
    icon: faHouse,
    to: 'home',
  },
  {
    title: 'Products',
    icon: faBoxesStacked,
    to: 'products',
  },
  {
    title: 'Wishlist',
    icon: faHeart,
    to: 'wishlist',
  },
  {
    title: 'My Orders',
    icon: faTruck,
    to: 'orders',
  },
  {
    title: 'My Cart',
    icon: faCartShopping,
    to: 'cart',
  },
  {
    title: 'Chat',
    icon: faMessage,
    to: 'chat',
  },
  {
    title: 'Profile',
    icon: faUser,
    to: 'profile',
  },
  {
    title: 'Log out',
    icon: faArrowRightFromBracket,
    to: 'home',
  },
];

const Home = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sharedValue = useSharedValue(0);
  const navigation = useNavigation();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: sharedValue.value}],
  }));

  const toggleSidebar = () => {
    setIsSideBarOpen(true);
    setTimeout(() => {
      sharedValue.value = withTiming(300, {duration: 300});
    }, 300);
  };

  const closeSidebar = () => {
    sharedValue.value = withTiming(0, {duration: 300});
    setTimeout(() => {
      setIsSideBarOpen(false);
    }, 350); // Slightly increased timeout to match animation duration
  };

  const renderSidebarItem = ({item}) => (
    <TouchableOpacity style={styles.sidebarItem}>
      <View style={styles.sidebarItemLeft}>
        <FontAwesomeIcon size={26} color="red" icon={item.icon} />
        <Text style={styles.sidebarItemText}>{item.title}</Text>
      </View>
      <FontAwesomeIcon size={20} icon={faAngleRight} />
    </TouchableOpacity>
  );

  const renderSidebarHeader = () => (
    <View style={styles.sidebarHeader}>
      <Image source={{uri: manImage}} style={styles.sidebarProfileImage} />
      <View>
        <Text style={styles.sidebarProfileName}>Roopa</Text>
        <Text style={styles.sidebarProfileEmail}>Roopa@gmail.com</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Home_Header toggle={toggleSidebar} setisSideBarOpen={setIsSideBarOpen} />

      {/* Sidebar Modal */}
      {isSideBarOpen && (
        <Pressable style={styles.sidebarOverlay} onPress={closeSidebar}>
          <Animated.View style={[styles.sidebarContainer, animatedStyle]}>
            <Pressable style={styles.sidebarPressable}>
              <ScrollView contentContainerStyle={styles.sidebarScrollView}>
                {renderSidebarHeader()}
                {/* <FlatList
                  data={items}
                  keyExtractor={item => item.title}
                  renderItem={renderSidebarItem}
                /> */}
                {items?.map(item => {
                  const navigatee = () => {
                    if (item.title !== 'Log out') {
                      navigation.navigate(item.to);
                    }
                  };
                  return (
                    <TouchableOpacity
                      onPress={() => navigatee()}
                      key={item.title}
                      style={styles.sidebarItem}>
                      <View style={styles.sidebarItemLeft}>
                        <FontAwesomeIcon
                          size={20}
                          color="red"
                          icon={item.icon}
                        />
                        <Text style={styles.sidebarItemText}>{item.title}</Text>
                      </View>
                      <FontAwesomeIcon size={20} icon={faAngleRight} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </Pressable>
          </Animated.View>
        </Pressable>
      )}

      {/* Main Scrollable Content */}
      <ScrollView contentContainerStyle={styles.mainScrollView}>
        <SearchBar />
        <ImageBackground
          source={require('../../../images/girlbgc.png')}
          style={styles.imageBackground}
        />
        <Text style={[styles.heading, styles.headingTop]}>
          Make Your Fashion
        </Text>
        <Text style={[styles.heading, styles.headingBottom]}>Look Amazing</Text>
        <Slide />
        <NewArivalCat />
        <NewArivalItems />
      </ScrollView>
    </View>
  );
};

export default Home;

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sidebarOverlay: {
    position: 'absolute',
    backgroundColor: '#0004',
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: 40,
  },
  sidebarContainer: {
    position: 'absolute',
    width: 300,
    backgroundColor: 'white',
    height: '100%',
    left: -300,
  },
  sidebarPressable: {
    flex: 1,
  },
  sidebarScrollView: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 80,
  },
  sidebarHeader: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 30,
    padding: 10,
  },
  sidebarProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 200,
  },
  sidebarProfileName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  sidebarProfileEmail: {
    color: 'gray',
    fontSize: 16,
  },
  sidebarItem: {
    justifyContent: 'space-between',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sidebarItemLeft: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  sidebarItemText: {
    color: 'black',
    fontSize: 16,
  },
  mainScrollView: {
    flexGrow: 1,
    paddingBottom: 120,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  imageBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    paddingBottom: 10,
    marginTop: 30,
  },
  heading: {
    textAlign: 'center',
    fontSize: hp(4),
    color: 'black',
    fontWeight: '800',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  headingTop: {
    marginTop: 20,
  },
  headingBottom: {
    marginBottom: 20,
  },
});
