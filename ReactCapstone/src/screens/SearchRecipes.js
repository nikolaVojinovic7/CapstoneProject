import React, { useState, useEffect } from 'react';
import styles from "../styles/SearchRecipesStyles.js"
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
  let [recipeData, setRecipeData] = useState({});

  // const Item = ({ item, onPress, style }) => (
  //   <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
  //     <Image source={{ uri: item.recipe_imageUrl }} style={[styles.recipeImage]} />
  //   </TouchableOpacity>
  // );

  // const renderItem = ({ item }) => {
  //   return (
  //     <Item
  //       item={item}
  //       onPress={() => { navigation.navigate('StartRecipe', { item, recipeParam }); }}
  //     />
  //   );
  // };

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
              {/* <FlatList
                horizontal
                data={recipeData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              /> */}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SearchRecipesScreen;
