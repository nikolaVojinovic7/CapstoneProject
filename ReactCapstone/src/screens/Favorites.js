import React, { useState, useEffect } from 'react';
import styles from "../styles/FavoritesStyles.js";
import favoriteService from '../services/FavoriteService.js';
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
  ImageBackground,
  FlatList,
  Alert,
} from 'react-native';

const FavoritesScreen = ({ route, navigation }) => {

  let [recipeData, setRecipeData] = useState([]);

  const Item = ({ item, onPress }) => (
      <TouchableOpacity onPress={ onPress } style={styles.item}>
        <Image source={{ uri: item.imageUrl }} style={styles.recipeImage} />
      </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => { navigation.navigate('StartRecipe', { item }); }}
        />
      );
    };

  useEffect(() => {
    favoriteService.getFavorites("a@a").then((res) => {
      let allRecipes = res.data;
      setRecipeData(allRecipes);
    })
    .catch(err => Alert.alert(
      'Error',
      'No recipes found!' + err,
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
                  <Text style={styles.searchText}>Favorites</Text>
                  <View style={styles.inputView} >
                      <TextInput
                        style={styles.inputText}
                        placeholder="Search"
                        placeholderTextColor="lightgrey"
                      />
                  </View>
              </View>
          </ImageBackground>
          </View>
          <View style={styles.scrollContainer}>
            <View style={styles.scroll}>
              { <FlatList
                data={recipeData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              /> }
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FavoritesScreen;
