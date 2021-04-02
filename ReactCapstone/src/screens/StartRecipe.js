import React, {useState, useEffect} from 'react';
import styles from '../styles/StartRecipesStyles.js';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
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
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StartRecipeScreen = ({route, navigation}) => {
  let [recipeItem, setRecipeItem] = useState(route.params.item);
  let [ingredients, setIngredients] = useState(recipeItem.recipeToIngredients);
  let [displayIngredients, setDisplayIngredients] = useState(recipeItem.recipeToIngredients);
  let [input, setInput] = useState(0)
  let details = [
    'PREP TIME: \n' + recipeItem.prepTime,
    'COOK TIME: \n' + recipeItem.cookTime,
    'TOTAL TIME: \n' + recipeItem.totalTime,
  ];

  const calculateWeight = () => {

   let serv = parseFloat(recipeItem.servings);
   let multiplyBy = parseFloat(input);
   const copy = ingredients.map(item => ({...item}))
   copy.forEach(element => {
     element.weight = (element.weight/serv) * multiplyBy;
   });
   setDisplayIngredients(copy);
  };


  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {
            <ImageBackground
              source={{uri: recipeItem.imageUrl}}
              style={styles.image}></ImageBackground>
          }
        </View>
        <View style={styles.RectangleShapeView}>
          {<Text style={styles.recipeTitleText}>{recipeItem.name}</Text>}
        </View>
        <TouchableOpacity style={styles.favBtn}>
          <Icon name="heart" size={40} color="red" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.infoContainer}>
        <View style={{padding: 10, paddingBottom: 3}}>
          <Table borderStyle={{borderWidth: 1.5, borderColor: '#C0C0C0'}}>
            <Row
              data={details}
              style={{height: 50}}
              textStyle={{textAlign: 'center'}}
            />
          </Table>
        </View>
        <View style={styles.lvlServings}>
          <Text style={styles.h2Text}>
            Level:
            {<Text style={styles.infoText}> {recipeItem.level}</Text>}
          </Text>
          <View style={styles.servings}>
            <Text style={styles.h2Text}>Servings:</Text>
            <TextInput
              style={styles.inputText}
              maxLength={2}
              keyboardType='numeric'
              numeric
              placeholder={recipeItem.servings.toString()}
              placeholderTextColor="black"
              onChangeText = {(num) => {setInput(num)}}
              onSubmitEditing={() => {calculateWeight()}}
            />
          </View>
        </View>
        <Text style={styles.h2Text}>Ingredients:</Text>
        <Text style={{flexDirection: 'column'}}>
          {displayIngredients.map((item) => {
            return (
              <Text key={item.id} style={styles.infoText}>
                {item.weight} {item.typeMeasurement} {item.ingredient.name}
                {'\n'}
              </Text>
            );
          })}
        </Text>
        <Text style={styles.h2Text}>Directions:</Text>
        <Text style={styles.infoText}>
          {recipeItem.directions.replace(/([^:]\/)\/+/g, '$1')}
        </Text>
      </ScrollView>
    </View>
  );
};

export default StartRecipeScreen;
