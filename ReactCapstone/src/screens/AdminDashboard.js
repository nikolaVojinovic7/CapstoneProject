import React, { useState, useEffect } from 'react';
import styles from "../styles/DashboardStyles.js"
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Button,
} from 'react-native';

const AdminDashboardScreen = ({ navigation }) => {
  
let [obj, setObj] = useState('');

let GoToAdminManageUser = () =>{
    navigation.navigate('AdminManageUser')
}

let GoToAdminManageUploads = () =>{
    navigation.navigate('AdminManageUploads')
}   

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../assets/images/background/light-wood.jpg")} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <ImageBackground source={require("../assets/images/background/dark-wood.jpg")} style={styles.image}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchText}>Admin</Text>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Search"
                    placeholderTextColor="lightgrey"
                    returnKeyType="search"
                    onChangeText={(text) => { setObj(text) }}
                    onSubmitEditing={() => {
                      navigation.navigate('SearchParameters', { obj });
                    }}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView>
              <View style={styles.scroll}>
              <Button
                title="Manage Users"
                onPress = {GoToAdminManageUser} 
                color="#7C9262"                
                accessibilityLabel="Manage Users Button"
                />
            <Button               
                title="Manage Uploads"
                onPress = {GoToAdminManageUploads} 
                color="#7C9262"
                accessibilityLabel="Manage Uploads button"
                />
              </View>
            </ ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AdminDashboardScreen;