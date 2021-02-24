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

const AdminManageUploadsScreen = ({ navigation }) => {
  
let [obj, setObj] = useState('');

let Test1 = () =>{
    alert("Uploads Screen");
}
  

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../assets/images/background/light-wood.jpg")} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <ImageBackground source={require("../assets/images/background/dark-wood.jpg")} style={styles.image}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchText}>User List</Text>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Search"
                    placeholderTextColor="lightgrey"
                    returnKeyType="search"
                    onChangeText={(text) => { setObj(text) }}
                    onSubmitEditing={() => {
                        alert("Work in Progress");
                      //navigation.navigate('SearchParameters', { obj });
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
                title="Push me"
                onPress = {Test1} 
                color="#7C9262"                
                accessibilityLabel="Test"
                />
              </View>
            </ ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AdminManageUploadsScreen;