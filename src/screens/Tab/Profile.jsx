/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faCommentsDollar,
  faCreditCard,
  faMapLocationDot,
  faMessage,
  faStar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {gray, hp, wp} from '../../utils';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Urban Cart</Text>
        </View>
        <View style={styles.notificationContainer}>
          <FontAwesomeIcon size={26} icon={faBell} />
          <Text style={styles.notificationBadge}>1</Text>
        </View>
      </View>

      {/* image with 4 box */}
      <View style={styles.imageContainer}>
        <View style={styles.profileRow}>
          <Image style={styles.profileImage} source={{uri: 'cdkhhb'}} />
          <Text style={styles.greetingText}>
            Hello, <Text style={styles.userName}>Shivam</Text>
          </Text>
        </View>

        {/* 4 boxes */}
        <View style={styles.boxContainer}>
          <View style={styles.boxRow}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Your Order</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Wishlist</Text>
            </View>
          </View>
          <View style={styles.boxRow}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Coupons</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Track Order</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Account Settings</Text>

        <View style={styles.settingRow}>
          <FontAwesomeIcon size={wp(5)} icon={faUser} color="red" />
          <Text style={styles.settingText}>Edit Profile</Text>
          <Text style={styles.arrow}>></Text>
        </View>

        <View style={styles.settingRow}>
          <FontAwesomeIcon color="red" size={wp(5)} icon={faCreditCard} />
          <Text style={styles.settingText}>Saved Cards & Wallet</Text>
          <Text style={styles.arrow}>></Text>
        </View>

        <View style={styles.settingRow}>
          <FontAwesomeIcon color="red" size={wp(5)} icon={faMapLocationDot} />
          <Text style={styles.settingText}>Saved Addresses</Text>
          <Text style={styles.arrow}>></Text>
        </View>

        <View style={styles.settingRow}>
          <FontAwesomeIcon color="red" size={wp(5)} icon={faCommentsDollar} />
          <Text style={styles.settingText}>Total Spend</Text>
          <Text style={styles.arrow}>></Text>
        </View>
      </View>

      <View style={styles.activityContainer}>
        <Text style={styles.sectionTitle}>My Activity</Text>

        <View style={styles.activityRow}>
          <FontAwesomeIcon size={wp(5)} color="red" icon={faMessage} />
          <Text style={styles.activityText}>Reviews</Text>
          <Text style={styles.arrow}>></Text>
        </View>

        <View style={styles.activityRow}>
          <FontAwesomeIcon size={wp(5)} icon={faStar} color="red" />
          <Text style={styles.activityText}>Reviews</Text>
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
    fontSize: wp(6),
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
    width: wp(18),
    height: wp(18),
    borderRadius: 200,
    borderWidth: 1,
    backgroundColor: 'black',
  },
  greetingText: {
    color: 'black',
    fontSize: wp(5.5),
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
    justifyContent: 'space-between',
    gap: wp(3),
  },
  box: {
    backgroundColor: gray.light,
    color: 'black',
    width: wp(46),
    height: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'black',
    fontSize: wp(4),
    fontWeight: '600',
  },
  settingsContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: wp(5),
    color: 'black',
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
    fontSize: wp(4.5),
    fontWeight: '500',
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
    fontSize: wp(4.5),
    fontWeight: '500',
  },
});

export default Profile;
