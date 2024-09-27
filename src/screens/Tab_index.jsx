import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Tab/Home';
import Wishlist from './Tab/Wishlist';
import CartPage from './Tab/CartPage';
import CategoryPage from './Tab/CategoryPage';
import Profile from './Tab/Profile';

const Tab = createBottomTabNavigator();

const Tab_index = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="wishlist" component={Wishlist} />
      <Tab.Screen name="cart" component={CartPage} />
      <Tab.Screen name="category" component={CategoryPage} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tab_index;
