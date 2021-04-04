import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DashboardScreen from '../screens/Dashboard.js';
import ProfileScreen from '../screens/Profile.js';
import MyPantryScreen from '../screens/MyPantry.js';
import FavoritesScreen from '../screens/Favorites.js';
import AdminDashboardScreen from "../screens/AdminDashboard.js";
import TestScreen from "../screens/Test.js";


const Tab = createBottomTabNavigator();

const AppTab = ({navigation}) => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

              /* https://oblador.github.io/react-native-vector-icons/ */
              if (route.name === 'Dashboard') {
                iconName = focused ? 'ios-search-circle' : 'ios-search';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
              } else if (route.name === 'MyPantry') {
                iconName = focused ? 'ios-list-circle' : 'ios-list';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Admin'){
                iconName = focused ? 'ios-server' : 'ios-server-outline';
              } else if (route.name === 'Test'){
                iconName = focused ? 'ios-server' : 'ios-server-outline';
              }


              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}>

        <Tab.Screen name="Dashboard"component={DashboardScreen}/>
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="MyPantry" component={MyPantryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Admin" component={AdminDashboardScreen} />
        <Tab.Screen name="Test" component={TestScreen} />
      </Tab.Navigator>
    );
  };

  export default AppTab;
