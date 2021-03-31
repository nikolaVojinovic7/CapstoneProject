import React, { useState, useEffect } from 'react';
import styles from "../styles/StartRecipesStyles.js"
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
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StartRecipeScreen = ({ route, navigation }) => {

    let [recipeItem,setRecipeItem] = useState(route.params.item);

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    { <ImageBackground source={{uri: recipeItem.imageUrl}} style={styles.image}>
                    </ImageBackground> }
                </View>
                <View style={styles.RectangleShapeView}>
                { <Text style={styles.recipeTitleText}>{recipeItem.name}</Text> }
                </View>
                <TouchableOpacity style={styles.favBtn}>
                  <Icon name="heart" size={40} color="red" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.infoContainer}>
                        <Text style={styles.infoText2}>
                            Level:
                                { <Text style={styles.infoText}> {recipeItem.level}</Text> }
                        </Text>
                        <Text></Text>
                        <Text style={styles.infoText2}>
                            Prep Time:
                                { <Text style={styles.infoText}> {recipeItem.prepTime}</Text> }
                        </Text>
                        <Text style={styles.infoText2}>
                            Cook Time:
                                { <Text style={styles.infoText}> {recipeItem.cookTime}</Text> }
                        </Text>
                        <Text style={styles.infoText2}>
                            Total Time:
                                { <Text style={styles.infoText}> {recipeItem.totalTime}</Text> }
                        </Text>
                        <Text></Text>
                        <Text style={styles.infoText2}>
                            Servings:
                                { <Text style={styles.infoText}> {recipeItem.servings}</Text> }
                        </Text>
                        <Text style={styles.h2Text}>
                            Ingredients:
                        </Text>
                        <Text>
                          Ingredients
                        {/* {recipeItem.recipe_ingredients} */}
                        </Text>
                        <Text style={styles.h2Text}>
                            Directions:
                        </Text>
                        <Text>
                        { recipeItem.directions.replace(/([^:]\/)\/+/g, "$1") }
                        </Text>
                </ ScrollView>
        </View>
    );
  };

export default StartRecipeScreen;
