/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {blue, gray, hp} from '../utils';
import Button from '../re-usable-component/Button';

const Login = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.imageCon}>
        <Image
          style={styles.image}
          source={require('../../images/logingirl.png')}
        />
      </View>

      <View style={styles.formCon}>
        <Text style={styles.heading}>Sign in to your account</Text>
        <Text style={styles.text}>
          Welcome back exclusive offers are waiting
        </Text>

        <View style={styles.fieldCon}>
          <Text style={styles.text}>Email Address </Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={'gray'}
            cursorColor={'black'}
            style={styles.inputField}
          />
        </View>
        <View style={{...styles.fieldCon, marginTop: 10}}>
          <Text style={styles.text}>Password </Text>
          <TextInput
            secureTextEntry
            placeholder="Enter your password"
            placeholderTextColor={'gray'}
            cursorColor={'black'}
            style={styles.inputField}
          />
        </View>

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

        <Button marginTop={15} height={45} title="Sign in" />

        <View style={styles.toSignupCon}>
          <Text style={styles.toSignup}>Not have an account? </Text>

          <TouchableOpacity>
            <Text
              style={{
                ...styles.text,
                color: blue,
                fontWeight: '800',
                marginTop: 10,
              }}>
              Login
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
