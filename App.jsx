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
