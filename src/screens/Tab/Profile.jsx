/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faCommentsDollar,
  faCreditCard,
  faMessage,
  faStar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {gray, manImage} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Urban Cart</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('notifications')}
          style={styles.notificationContainer}>
          <FontAwesomeIcon size={26} icon={faBell} />
          <Text style={styles.notificationBadge}>1</Text>
        </TouchableOpacity>
      </View>

      {/* image with 4 box */}
      <View style={styles.imageContainer}>
        <View style={styles.profileRow}>
          <Image style={styles.profileImage} source={{uri: manImage}} />
          <Text style={styles.greetingText}>
            Hello, <Text style={styles.userName}>Shivam</Text>
          </Text>
        </View>

        {/* 4 boxes */}
        <View style={styles.boxContainer}>
          <View style={styles.boxRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('orders')}
              style={styles.box}>
              <Text style={styles.boxText}>Your Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('wishlist')}
              style={styles.box}>
              <Text style={styles.boxText}>Wishlist</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('coupons')}
              style={styles.box}>
              <Text style={styles.boxText}>Coupons</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('orders')}
              style={styles.box}>
              <Text style={styles.boxText}>Track Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Account Settings</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('editProfile')}
          style={styles.settingRow}>
          <FontAwesomeIcon size={20} icon={faUser} color="red" />
          <Text style={styles.settingText}>Edit Profile</Text>
          <Text style={styles.arrow}>></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <FontAwesomeIcon color="red" size={20} icon={faCreditCard} />
          <Text style={styles.settingText}>Saved Cards & Wallet</Text>
          <Text style={styles.arrow}>></Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => navigation.navigate('addressess')}
          style={styles.settingRow}>
          <FontAwesomeIcon color="red" size={20} icon={faMapLocationDot} />
          <Text style={styles.settingText}>Saved Addresses</Text>
          <Text style={styles.arrow}>></Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => navigation.navigate('accountDetails')}
          style={styles.settingRow}>
          <FontAwesomeIcon color="red" size={20} icon={faCommentsDollar} />
          <Text style={styles.settingText}>Account Details</Text>
          <Text style={styles.arrow}>></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.activityContainer}>
        <Text style={styles.sectionTitle}>My Activity</Text>

        <View style={styles.activityRow}>
          <FontAwesomeIcon size={20} color="red" icon={faMessage} />
          <Text style={styles.activityText}>Reviews</Text>
          <Text style={styles.arrow}>></Text>
        </View>

        <View style={styles.activityRow}>
          <FontAwesomeIcon size={20} icon={faStar} color="red" />
          <Text style={styles.activityText}>Ratings</Text>
          <Text style={styles.arrow}>></Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom: 60,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingVertical: 15,
    backgroundColor: 'white',
    elevation: 5,
  },
  headerTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: '800',
  },
  notificationContainer: {
    gap: 5,
  },
  notificationBadge: {
    height: 17,
    width: 17,
    backgroundColor: 'red',
    position: 'absolute',
    right: -5,
    borderRadius: 20,
    top: -5,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
  imageContainer: {
    padding: 10,
    marginTop: 10,
  },
  profileRow: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 200,
    borderWidth: 1,
    backgroundColor: 'black',
  },
  greetingText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  userName: {
    color: 'red',
  },
  boxContainer: {
    marginTop: 20,
    gap: 15,
  },
  boxRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 12,
    justifyContent: 'center',
  },
  box: {
    backgroundColor: gray.extraLight,
    color: 'black',
    width: 160,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  settingsContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: gray.gray,
    fontWeight: '800',
  },
  settingRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  settingText: {
    color: gray.gray,
    fontSize: 18,
    fontWeight: '400',
  },
  arrow: {
    marginLeft: 'auto',
    color: 'black',
  },
  activityContainer: {
    padding: 10,
  },
  activityRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  activityText: {
    color: gray.gray,
    fontSize: 20,
    fontWeight: '400',
  },
});

export default Profile;
