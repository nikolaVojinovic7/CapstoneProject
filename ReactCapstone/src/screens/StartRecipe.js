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

    //let [recipeItem,setRecipeItem] = useState(route.params.item);

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {/* <ImageBackground source={{uri: recipeItem.recipe_imageUrl}} style={styles.image}>
                    </ImageBackground> */}
                </View>
                <View style={styles.RectangleShapeView}>
                {/* <Text style={styles.recipeTitleText}>{recipeItem.recipe_title}</Text> */}
                </View>
                <TouchableOpacity style={styles.favBtn}>
                  <Icon name="heart" size={40} color="red" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                        <Text style={styles.infoText2}>
                            Level:
                                {/* <Text style={styles.infoText}>{recipeItem.recipe_level}</Text> */}
                        </Text>
                        <Text style={styles.infoText2}>
                            Total:
                                {/* <Text style={styles.infoText}>{recipeItem.recipe_cookTime}</Text> */}
                        </Text>
                        <Text style={styles.h2Text}>
                            Ingredients:
                        </Text>
                        <Text>
                        {/* {recipeItem.recipe_ingredients} */}
                        </Text>
                        <Text style={styles.h2Text}>
                            Directions:
                        </Text>
                        <Text>
                        {/* {recipeItem.recipe_description} */}
                        </Text>
                </ ScrollView>
        </View>
    );
  };

export default StartRecipeScreen;
