import React, {useState, useEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DashboardScreen from '../screens/Dashboard.js';
import ProfileScreen from '../screens/Profile.js';
import MyPantryScreen from '../screens/MyPantry.js';
import FavoritesScreen from '../screens/Favorites.js';
import AdminDashboardScreen from "../screens/AdminDashboard.js";

import userService from '../services/UserService.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const AppTab = ({ navigation }) => {

  // let user = userservice.getUserByEmail() 
  // let [userData, setUserData] = useState(user)
  const [user, setUser] = useState({})


//useState(user)
//retrieve stored logged in user data
const getData = async () => {
  try {
    const obj = await AsyncStorage.getItem('@user')
    return JSON.parse(obj);
  } catch(e) {}
}

//get logged in user data
useEffect(() => {
  getData().then((data) => setUser(data))
  // console.log(data)
})  
  
  return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
  
              /* https://oblador.github.io/react-native-vector-icons/ */
              if (route.name === 'Dashboard') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
              } else if (route.name === 'MyPantry') {
                iconName = focused ? 'list' : 'list-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Admin'){
                iconName = focused ? 'ios-server' : 'ios-server-outline';
              }

  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}>  
        
        <Tab.Screen name="Dashboard"component={DashboardScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="MyPantry" component={MyPantryScreen} />
        <Tab.Screen name= "Profile" component={ProfileScreen} />
        <Tab.Screen name= "Admin" component={AdminDashboardScreen} />
      
        
      </Tab.Navigator>
    )
};

 

  export default AppTab;