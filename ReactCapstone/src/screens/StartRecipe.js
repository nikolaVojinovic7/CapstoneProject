import React, { useState, useEffect } from 'react';
import styles from "../styles/StartRecipesStyles.js"
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
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
    let [ingredients, setIngredients] = useState(recipeItem.recipeToIngredients);
    let details = ["PREP TIME: \n" + recipeItem.prepTime,"COOK TIME: \n"+recipeItem.cookTime,"TOTAL TIME: \n" + recipeItem.totalTime];

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
            <View style={{padding: 10}}>
        <Table borderStyle={{borderWidth: 1.5, borderColor: '#C0C0C0'}}>
          <Row data={details} style={{height: 50 }} textStyle={{textAlign: 'center'}} />
        </Table>
      </View>
                        <Text style={styles.infoText2}>
                            Level:
                                { <Text style={styles.infoText}> {recipeItem.level}</Text> }
                        </Text>
                        <Text style={styles.infoText2}>
                            Servings:
                                { <Text style={styles.infoText}> {recipeItem.servings}</Text> }
                        </Text>
                        <Text style={styles.h2Text}>
                            Ingredients:
                        </Text>
                        <Text style={{ flexDirection: "column" }}>
                        {ingredients.map(item => {
                              return (<Text>{item.weight} {item.typeMeasurement} {item.ingredient.name}{"\n"}</Text>)})}
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
