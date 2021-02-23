import React, { useState, useEffect } from 'react';
import styles from "../styles/MyPantryStyles.js";
import SearchableDropdown from 'react-native-searchable-dropdown';
import ingredientService from '../services/IngredientService';
import pantryService from '../services/PantryService';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  Alert,
  FlatList,
  Picker,
  TouchableHighlight,
} from 'react-native';

const MyPantryScreen = ({ navigation }) => {

  const [user, setUser] = useState({})
  let [ingredientData, setIngredientData] = useState({});
  let [dairy, setDairy] = useState([]);
  let [vegetables, setVegetables] = useState([]);
  let [fruits, setFruits] = useState([]);
  let [grains, setGrains] = useState([]);
  let [meat, setMeat] = useState([]);
  let [seafood, setSeafood] = useState([]);
  let [spices, setSpices] = useState([]);
  let [sweeteners, setSweeteners] = useState([]);
  let [nuts, setNuts] = useState([]);

  const getData = async () => {
    try {
      const obj = await AsyncStorage.getItem('@user')
      return JSON.parse(obj);
    } catch(e) {
    }
  }

  const update_ingredients = (item) =>{
    
    if (item.category == "dairy"){
      setDairy(dairy => [...dairy, item.name]);
      console.log(dairy)
    }
    if (item.category == "vegetables"){
      setVegetables(vegetables => [...vegetables, item.name]);
      console.log(vegetables)
    }
    if (item.category == "fruits"){
      setFruits(fruits => [...fruits, item.name]);
      console.log(fruits)
    }
    if (item.category == "grains"){
      setGrains(grains => [...grains, item.name]);
      console.log(grains)
    }
    if (item.category == "meat"){
      setMeat(meat => [...meat, item.name]);
      console.log(meat)
    }
    if (item.category == "seafood"){
      setSeafood(seafood => [...seafood, item.name]);
      console.log(seafood)
    }
    if (item.category == "spices"){
      setSpices(spices => [...spices, item.name]);
      console.log(spices)
    }
    if (item.category == "sweeteners"){
      setSweeteners(sweeteners => [...sweeteners, item.name]);
      console.log(sweeteners)
    }
    if (item.category == "nuts"){
      setNuts(nuts => [...nuts, item.name]);
      console.log(nuts)
    }

    pantryService.updateUser(item, user.email)
    .then(response => console.log(response))
    .catch(err => console.log(err))

  }

  useEffect(() => {
    ingredientService.getIngredients().then(response => 
      setIngredientData(response.data))
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    getData().then((data) => setUser(data))
  }, []);

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../assets/images/background/light-wood.jpg")} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <ImageBackground source={require("../assets/images/background/dark-wood.jpg")} style={styles.image}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchText}>My Pantry</Text>
                  <SearchableDropdown
                    onItemSelect={(item) => {
                      update_ingredients(item)
                    }}
                    containerStyle={{ padding: 5, width: 300}}
                    itemStyle={{
                      padding: 10,
                      marginTop: 2,
                      backgroundColor: 'white',
                      borderColor: '#bbb',
                      borderWidth: 1,
                      borderRadius: 5,
                    }}

                    itemTextStyle={{ color: '#222' }}
                    itemsContainerStyle={{ maxHeight: 140 }}
                    items={ingredientData}
                    defaultIndex={2}
                    resetValue={false}
                    textInputProps={
                      {
                        placeholder: "search ingredient",
                        underlineColorAndroid: "transparent",
                        backgroundColor: "white",
                        style: {
                          padding: 12,
                          borderWidth: 1,
                          borderColor: '#ccc',
                          borderRadius: 5,
                        },
                        //onTextChange: text => alert(text)
                      }
                    }
                    listProps={
                      {
                        nestedScrollEnabled: true,
                      }
                    }
                  />
              </View>
            </ImageBackground>
          </View>
          <View style={styles.scrollContainer}>
            <View style={styles.scroll}>
              <Text></Text>

            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MyPantryScreen;
