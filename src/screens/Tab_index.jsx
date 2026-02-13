// import {View, Text} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from './Tab/Home';
// import Wishlist from './Tab/Wishlist';
// import CartPage from './Tab/CartPage';
// import CategoryPage from './Tab/CategoryPage';
// import Profile from './Tab/Profile';

// const Tab = createBottomTabNavigator();

// const Tab_index = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           position: 'absolute', // Makes tab bar absolute
//           backgroundColor: 'white', // Set the background color
//           zIndex: 10, // Z-index to ensure it's beneath your view
//         },
//       }}>
//       <Tab.Screen name="home" component={Home} />
//       <Tab.Screen name="wishlist" component={Wishlist} />
//       <Tab.Screen name="cart" component={CartPage} />
//       <Tab.Screen name="category" component={CategoryPage} />
//       <Tab.Screen name="profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

// export default Tab_index;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouse,
  faHeart,
  faCartShopping,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Home from "./Tab/Home";
import Wishlist from "./Tab/Wishlist";
import CartPage from "./Tab/CartPage";
import CategoryPage from "./Tab/CategoryPage";
import Profile from "./Tab/Profile";
import { height } from "@fortawesome/free-solid-svg-icons/faAngleLeft";

const Tab = createBottomTabNavigator();

const Tab_index = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff",
          bottom: 10, // 👈 Ye value badhao
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
          elevation: 10,
          height: 70,
          borderTopWidth: 0,
        },

        tabBarActiveTintColor: "#ff6b00",
        tabBarInactiveTintColor: "#888",

        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "home") icon = faHouse;
          else if (route.name === "wishlist") icon = faHeart;
          else if (route.name === "cart") icon = faCartShopping;
          else if (route.name === "category") icon = faList;
          else if (route.name === "profile") icon = faUser;

          return (
            <View>
              <FontAwesomeIcon icon={icon} size={20} color={color} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="home" component={Home} options={{ title: "Home" }} />
      <Tab.Screen
        name="wishlist"
        component={Wishlist}
        options={{ title: "Wishlist" }}
      />
      <Tab.Screen
        name="cart"
        component={CartPage}
        options={{ title: "Cart" }}
      />
      <Tab.Screen
        name="category"
        component={CategoryPage}
        options={{ title: "Category" }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
};

export default Tab_index;
