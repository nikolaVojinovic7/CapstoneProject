import React, { useState, useEffect } from 'react';
import styles from "../styles/DashboardStyles.js"
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';

const DashboardScreen = ({ navigation }) => {
  
  let [obj, setObj] = useState('');

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../assets/images/background/light-wood.jpg")} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <ImageBackground source={require("../assets/images/background/dark-wood.jpg")} style={styles.image}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchText}>Discover</Text>
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

              </View>
            </ ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DashboardScreen;
