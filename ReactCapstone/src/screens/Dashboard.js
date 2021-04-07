import React, { useState, useEffect } from 'react';
import styles from "../styles/DashboardStyles.js"
import recipeService from '../services/RecipeService.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const DashboardScreen = ({ navigation }) => {

  let [obj, setObj] = useState('');
  let [recipeData, setRecipeData] = useState({});
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const obj = await AsyncStorage.getItem('@user');
      return JSON.parse(obj);
    } catch (e) {}
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    getUser().then((data) => setUser(data));
    });
    return unsubscribe;
  }, [navigation]);


  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Image source={{ uri: item.imageUrl }} style={[styles.recipeImage]} />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => { navigation.navigate('StartRecipe', { item, user }); }}
      />
    );
  };

  useEffect(() => {
    recipeService.getRecipes().then((res) => {
      let allRecipes = res.data;
      setRecipeData(allRecipes);
    })
    .catch(err => Alert.alert(
      'Error',
      'No recipes found!',
      [
        {
          text: 'Ok',
        },
      ],
      { cancelable: false }
    ))
  }, []);

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
                      navigation.navigate('SearchParameters', { obj, user });
                    }}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView>
              <View style={styles.scroll}>
                <Text style={styles.headerText}>RECIPES</Text>
                { <FlatList
                  horizontal
                  data={recipeData}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                /> }
              </View>
            </ ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DashboardScreen;
