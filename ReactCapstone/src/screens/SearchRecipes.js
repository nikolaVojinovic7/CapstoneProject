import React, { useState, useEffect } from 'react';
import styles from "../styles/SearchRecipesStyles.js";
import recipeService from "../services/RecipeService"

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';

const SearchRecipesScreen = ({ route, navigation }) => {

  let [recipeParam, setRecipeParam] = useState(route.params.recipeParam);
  let [searchParam, setSearchParam] = useState(route.params.searchParam);
  const [user, setUser] = useState(route.params.user);
  let [recipeData, setRecipeData] = useState(route.params.recipeData);
  let [searchResults, setSearchResults] = useState({});

  useEffect(() => {

    let temp = [];
    let recipesByTitle = recipeData.filter(recipe => recipe.name.toLowerCase().includes(recipeParam.toLowerCase()))
    recipesByTitle.forEach((recipe) => {
      recipe.linkedCategories.forEach((category) => {
        if (category.name == searchParam){
          temp.push(recipe);
        }
      })
    })
    setSearchResults(temp);
  }, []);
  

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Image source={{ uri: item.imageUrl }} style={[styles.recipeImage]} />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => { navigation.navigate('StartRecipe', { item, recipeParam }); }}
      />
    );
  };

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../assets/images/background/light-wood.jpg")} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <ImageBackground source={require("../assets/images/background/dark-wood.jpg")} style={styles.image}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchText}>Search Results for {recipeParam}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.scrollContainer}>
            <View style={styles.scroll}>
              <FlatList
                horizontal
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SearchRecipesScreen;
