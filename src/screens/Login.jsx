/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {blue, gray, hp} from '../utils';
import Button from '../re-usable-component/Button';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useIsFocused, useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const isFocus = useIsFocused();

  let bannerVal = useSharedValue(-220);
  let smallVal = useSharedValue(-40);

  const smallStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: smallVal.value}],
      opacity: smallVal.value === -40 ? 0 : 1,
    };
  });

  const bannerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: bannerVal.value}],
    };
  });

  useEffect(() => {
    bannerVal.value = withTiming(40, {duration: 1000});
    smallVal.value = withTiming(0, {duration: 500});
  }, [isFocus]);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.imageCon}>
        <Animated.View
          style={[
            {
              flex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            },
            bannerStyle,
          ]}>
          <Image
            style={{...styles.image, height: 200}}
            source={require('../../images/logingirl.png')}
          />
        </Animated.View>
      </View>

      <View style={styles.formCon}>
        <Text style={styles.heading}>Sign in to your account</Text>
        <Text style={styles.text}>
          Welcome back exclusive offers are waiting
        </Text>

        <Animated.View style={[styles.fieldCon, smallStyle]}>
          <Text style={styles.text}>Email Address </Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={'gray'}
            cursorColor={'black'}
            style={styles.inputField}
          />
        </Animated.View>
        <Animated.View
          style={[{...styles.fieldCon, marginTop: 10}, smallStyle]}>
          <Text style={styles.text}>Password </Text>
          <TextInput
            secureTextEntry
            placeholder="Enter your password"
            placeholderTextColor={'gray'}
            cursorColor={'black'}
            style={styles.inputField}
          />
        </Animated.View>

        <TouchableOpacity>
          <Text
            style={{
              ...styles.text,
              marginLeft: 'auto',
              textDecorationLine: 'underline',
            }}>
            Forgot password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('tab')}>
          <Button marginTop={15} height={45} title="Sign in" />
        </TouchableOpacity>

        <View style={styles.toSignupCon}>
          <Text style={styles.toSignup}>Not have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text
              style={{
                ...styles.text,
                color: blue,
                fontWeight: '800',
                marginTop: 10,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageCon: {
    width: '100%',
    height: 200,
    backgroundColor: gray.light,
    borderBottomRightRadius: 100,
  },
  image: {
    flex: 1,
    width: '100%',
    objectFit: 'contain',
  },
  formCon: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
  },
  heading: {
    fontSize: hp(2.5),
    color: 'black',
    fontWeight: '600',
    marginTop: hp(4),
  },
  text: {
    fontSize: hp(2),
    color: gray.dim,
    marginTop: hp(0.5),
  },
  fieldCon: {
    marginTop: hp(2),
  },
  inputField: {
    backgroundColor: gray.light,
    height: 45,
    marginTop: hp(0.5),
    borderRadius: 10,
    fontSize: hp(2),
    color: 'black',
    padding: 5,
  },
  toSignupCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toSignup: {
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: hp(2),
    color: gray.gray,
    fontWeight: '800',
  },
});
