import React, { useState, useEffect } from 'react';
import styles from "../styles/DashboardStyles.js"
import recipeService from '../services/RecipeService.js';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

const DashboardScreen = ({ navigation }) => {

  let [obj, setObj] = useState('');
  let [recipeData, setRecipeData] = useState({});

  let [recipeData1, setRecipeData1] = useState({});
  let [recipeData2, setRecipeData2] = useState({});
  let [recipeData3, setRecipeData3] = useState({});
  let [pantryData, setPantryData] = useState([]);

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
    recipeService.searchThreeIngredients("a@a").then((res) => {
      let allPantry = res.data;
      //setPantryData(allPantry)
      pantryData[0] = allPantry[0]
      pantryData[1] = allPantry[1]
      pantryData[2] = allPantry[2]

      console.log(allPantry)



      recipeService.searchRecipesBasedOnIngredient("a@a"+"&"+pantryData[0]).then((res) => {
        let allRecipes = res.data;
        setRecipeData1(allRecipes);
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

      recipeService.searchRecipesBasedOnIngredient("a@a"+"&"+pantryData[1]).then((res) => {
        let allRecipes = res.data;
        setRecipeData2(allRecipes);
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

      recipeService.searchRecipesBasedOnIngredient("a@a"+"&"+pantryData[2]).then((res) => {
        let allRecipes = res.data;
        setRecipeData3(allRecipes);
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
                      navigation.navigate('SearchParameters', { obj });
                    }}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.scrollContainer}>


            <TouchableOpacity onPress={() => {
              navigation.navigate('UploadRecipe', {recipeData2});
            }} style={styles.item}>
              <Image source={require("../assets/images/background/light-wood.jpg")} style={styles.recipeImage} />
            </TouchableOpacity>


            <ScrollView>
              <View style={styles.scroll}>
                <Text style={styles.headerText}>Use your {pantryData[0]}</Text>
                { <FlatList
                  horizontal
                  data={ recipeData1 }
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                /> }
              </View>
              <View style={styles.scroll}>
                <Text style={styles.headerText}>Use your {pantryData[1]}</Text>
                { <FlatList
                  horizontal
                  data={ recipeData2 }
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                /> }
              </View>
              <View style={styles.scroll}>
                <Text style={styles.headerText}>Use your {pantryData[2]}</Text>
                { <FlatList
                  horizontal
                  data={ recipeData3 }
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
