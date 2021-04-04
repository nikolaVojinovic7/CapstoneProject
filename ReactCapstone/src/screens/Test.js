import React, { useState, useEffect } from 'react';
import styles from "../styles/DashboardStyles.js"
import recipeService from '../services/RecipeService.js';
import pantryService from '../services/PantryService';
import ingredientService from '../services/IngredientService';
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
  Button,
  SearchableDropdown,
} from 'react-native';

const TestScreen = ({ navigation }) => {

  let [data, setData] = useState([1, 2, 3, 4, 5]);
  var initialElements = [
    { id : "0", text : "Object 1"},
    { id : "1", text : "Object 2"},
  ]

  const [exampleState, setExampleState] = useState(initialElements)
  let [ingredientData, setIngredientData] = useState({});

  const addElement = () => {
    var newArray = [...initialElements , {id : "2", text: "Object 3"}];
    setExampleState(newArray);
  }

  useEffect(() => {
    ingredientService
      .getIngredients()
      .then((response) => setIngredientData(response.data))
      .catch(err => console.log(err.response.data));
  }, []);


  const update_ingredients = (item) => {

    pantryService.getPantry(user.email)
      .then((response) => {
        let exists = false;
        response.data.forEach((pantryIngredient) => {
          if(pantryIngredient.ingredient.name == item.name){
            exists = true;
          }
        })
        if(exists){
          Alert.alert("", "You already added this ingredient to your pantry!",
          [
            {
              text: 'Ok',
            },
          ],
          { cancelable: false })
        }
        else{
          pantryService
          .updateUser(user.email, item.id)
          .then(response => Alert.alert(
            '',
            'This ingredient has been successfully added to your pantry.',
            [
              {
                text: 'Ok',
              },
            ],
            { cancelable: false },
            console.log(response.data)
          ))
          .catch(err => console.log(err.response.data));
        }
      })
  };



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 1, alignSelf: 'stretch' }} />
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <Text>AAAA</Text>
      </View>
      <View style={{ flex: 1, alignSelf: 'stretch' }} >
        <Text>BBBB</Text>
      </View>
      <View style={{ flex: 1, alignSelf: 'stretch' }} >
        <Text>CCCC</Text>
      </View>
      <View style={{ flex: 1, alignSelf: 'stretch' }} >
        <Text>DDDD</Text>
      </View>
      <View style={{ flex: 1, alignSelf: 'stretch' }} >
        <Text>DDDD</Text>
      </View>



      <SearchableDropdown
        onItemSelect={(item) => {
          update_ingredients(item);
        }}
        containerStyle={{padding: 5, width: 300}}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: 'white',
          borderColor: '#bbb',
          borderWidth: 1,
          borderRadius: 5,
        }}
        itemTextStyle={{color: '#222'}}
        itemsContainerStyle={{maxHeight: 140}}
        items={ingredientData}
        defaultIndex={2}
        resetValue={false}
        textInputProps={{
          placeholder: 'search ingredient',
          underlineColorAndroid: 'transparent',
          backgroundColor: 'white',
          style: {
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
          },
          //onTextChange: text => alert(text)
        }}
        listProps={{
          nestedScrollEnabled: true,
        }}
      />

        <FlatList
          keyExtractor = {item => item.id}
          data={exampleState}
          renderItem = {item => (<Text>{item.item.text}</Text>)} />


      <Button
        title="Add element"
        onPress={addElement} />




    </View>
  );
};

export default TestScreen;
