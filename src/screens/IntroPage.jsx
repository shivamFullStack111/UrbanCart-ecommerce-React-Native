import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import MainHeading from '../re-usable-component/MainHeading';
import MainHeading2 from '../re-usable-component/MainHeading2';
import {hp} from '../utils';
import {useNavigation} from '@react-navigation/native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

const IntroPage = () => {
  const navigation = useNavigation();
  return (
    <AppIntroSlider
      showNextButton={false}
      onDone={() => navigation.navigate('login')}
      renderDoneButton={() => (
        <Text
          style={{
            color: 'black',
            margin: 10,
            paddingHorizontal: 10,
            fontWeight: '700',
            fontSize: 18,
          }}>
          Done
        </Text>
      )}
      renderItem={_renderItem}
      data={slides}
    />
  );
};

const _renderItem = ({item}) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={{width: '80%', alignSelf: 'center', marginTop: 20}}>
        {item.title && <MainHeading heading={item.title} />}

        <View style={{flexDirection: 'row'}}>
          {item?.text && (
            <Text style={{color: 'gray', fontSize: hp(2.6), fontWeight: '600'}}>
              {item.text}{' '}
            </Text>
          )}
          {item?.styleText && (
            <Text
              style={{
                backgroundColor: 'black',
                color: 'white',
                fontSize: hp(2.6),
                fontWeight: '600',
                paddingHorizontal: 10,
                fontStyle: 'italic',
              }}>
              India
            </Text>
          )}
        </View>
        {item?.title2 && <MainHeading2 heading={item.title2} isItalic={true} />}
        {item?.text2 && (
          <Text style={{color: 'gray', fontSize: hp(2.6), fontWeight: '600'}}>
            {item?.text2}{' '}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

const slides = [
  {
    key: 1,
    title: 'Welcome!',
    text: 'To digital',
    styleText: 'India',
    title2: 'hurry',
    text2: 'Buy anything from home',
    image: require('../../images/girl.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Why are you waiting?',
    text: 'Grab the deals now  🏷️',
    text2: 'Deals upto 90% off ',
    image: require('../../images/man.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Secure & Fast delivery',
    text: 'We promise safe and fast delivery at home 📍',
    image: require('../../images/delivery.png'),
    backgroundColor: '#22bcb5',
  },
];

export default IntroPage;
