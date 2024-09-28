/* eslint-disable react/self-closing-comp */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import IntroPage from './src/screens/IntroPage';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Tab_index from './src/screens/Tab_index';
import CheckOut from './src/screens/CheckOut';
import MyOrders from './src/screens/MyOrders';
import TrackOrder from './src/screens/TrackOrder';
import WriteReview from './src/screens/WriteReview';
import EditProfile from './src/screens/EditProfile';
import Addressess from './src/screens/Addressess';
import ToralSpend from './src/screens/ToralSpend';

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="intro" component={IntroPage} />
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        <Stack.Screen name="register" component={Register}></Stack.Screen>
        <Stack.Screen name="tab" component={Tab_index}></Stack.Screen>
        <Stack.Screen name="checkout" component={CheckOut}></Stack.Screen>
        <Stack.Screen name="orders" component={MyOrders}></Stack.Screen>
        <Stack.Screen name="track" component={TrackOrder}></Stack.Screen>
        <Stack.Screen name="writeReview" component={WriteReview}></Stack.Screen>
        <Stack.Screen name="editProfile" component={EditProfile}></Stack.Screen>
        <Stack.Screen name="addressess" component={Addressess}></Stack.Screen>
        <Stack.Screen name="totalSpend" component={ToralSpend}></Stack.Screen>
      </Stack.Navigator>
      {/* {isAuthenticated && (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={Home}></Stack.Screen>
        </Stack.Navigator>
      )} */}
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
