import React, {useState, useEffect} from 'react';
import styles from '../styles/StartRecipesStyles.js';
import IdleTimerManager from 'react-native-idle-timer';
import {
  Table,
  Row,
} from 'react-native-table-component';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

const StartRecipeScreen = ({route, navigation}) => {
  let [recipeItem, setRecipeItem] = useState(route.params.item);
  let [ingredients, setIngredients] = useState(recipeItem.recipeToIngredients);
  let [displayIngredients, setDisplayIngredients] = useState(recipeItem.recipeToIngredients);
  let [input, setInput] = useState(0);
  let [lock, setLock] = useState(false);
  let [iconName, setIconName] = useState("lock-open-sharp")
  let [lockColour, setLockColour] = useState("black");
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

  const setScreenLock = () => {
    IdleTimerManager.setIdleTimerDisabled(true);
  }

  const disableScreenLock = () => {
    IdleTimerManager.setIdleTimerDisabled(false);
  }

  const lockScreen = () => {
    if (lock == false) {
      setScreenLock;
      setLock(true);
      setIconName("lock-closed-sharp");
      setLockColour("red");
    }
    else {
      disableScreenLock;
      setLock(false);
      setIconName("lock-open-sharp");
      setLockColour("black");
    }

  }

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
      <View style={styles.lockBtn}>
      <TouchableOpacity style={styles.lock} onPress={() => lockScreen()}>
          <Ionicon name={iconName} size={35} color={lockColour}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clock}>
          <Ionicon name="alarm-sharp" size={35} color="black" />
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
