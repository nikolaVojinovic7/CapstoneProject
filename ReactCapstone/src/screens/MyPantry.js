import React, {useState, useEffect} from 'react';
import styles from '../styles/MyPantryStyles.js';
import SearchableDropdown from 'react-native-searchable-dropdown';
import ingredientService from '../services/IngredientService';
import pantryService from '../services/PantryService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import {LogBox} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


LogBox.ignoreAllLogs();

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
  TouchableHighlight,
} from 'react-native';

const MyPantryScreen = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState({})
  const [user, setUser] = useState({});
  const [showDairy, setShowDairy] = useState(false);
  const [showVegetables, setShowVegetables] = useState(false);
  const [showFruits, setShowFruits] = useState(false);
  const [showGrains, setShowGrains] = useState(false);
  const [showMeat, setShowMeat] = useState(false);
  const [showSeafood, setShowSeafood] = useState(false);
  const [showSpices, setShowSpices] = useState(false);
  const [showSweeteners, setShowSweeteners] = useState(false);
  const [showNuts, setShowNuts] = useState(false);
  let [ingredientData, setIngredientData] = useState({});
  let [pantry, setPantry] = useState({});
  let [dairy, setDairy] = useState([]);
  let [vegetables, setVegetables] = useState([]);
  let [fruits, setFruits] = useState([]);
  let [grains, setGrains] = useState([]);
  let [meat, setMeat] = useState([]);
  let [seafood, setSeafood] = useState([]);
  let [spices, setSpices] = useState([]);
  let [sweeteners, setSweeteners] = useState([]);
  let [nuts, setNuts] = useState([]);

  const getUser = async () => {
    try {
      const obj = await AsyncStorage.getItem('@user');
      return JSON.parse(obj);
    } catch (e) {}
  };

  const getPantry = (category) => {
    pantryService.getPantry(user.email)
      .then((response) => {
        let temp = [];
        response.data.forEach((item) => {
          if(item.category == category){
            temp.push(item);
          }
        })
        temp.sort((a, b) => (a.ingredient.name > b.ingredient.name) ? 1 : -1);
        if (category == "dairy") {
          setDairy(temp);
          if(showDairy == false){
          setShowDairy(true)
          }
          else{
            setShowDairy(false);
          }
        }
        if (category == "vegetables") {
          setVegetables(temp);
          if(showVegetables == false){
            setShowVegetables(true)
            }
            else{
              setShowVegetables(false);
            }
        }
        if (category == "fruits") {
          setFruits(temp);
          if(showFruits == false){
            setShowFruits(true)
            }
            else{
              setShowFruits(false);
            }
        }
        if (category == "grains") {
          setGrains(temp);
          if(showGrains == false){
            setShowGrains(true)
            }
            else{
              setShowGrains(false);
            }
        }
        if (category == "meat") {
          setMeat(temp);
          if(showMeat == false){
            setShowMeat(true)
            }
            else{
              setShowMeat(false);
            }
        }
        if (category == "seafood") {
          setSeafood(temp);
          if(showSeafood == false){
            setShowSeafood(true)
            }
            else{
              setShowSeafood(false);
            }
        }
        if (category == "spices") {
          setSpices(temp);
          if(showSpices == false){
            setShowSpices(true)
            }
            else{
              setShowSpices(false);
            }
        }
        if (category == "sweeteners") {
          setSweeteners(temp);
          if(showSweeteners == false){
            setShowSweeteners(true)
            }
            else{
              setShowSweeteners(false);
            }
        }
        if (category == "nuts") {
          setNuts(temp);
          if(showNuts == false){
            setShowNuts(true)
            }
            else{
              setShowNuts(false);
            }
        }
      })
  }

  useEffect(() => {
    ingredientService
      .getIngredients()
      .then((response) => setIngredientData(response.data))
      .catch(err => console.log(err.response.data));
  }, []);

  useEffect(() => {
    getUser().then((data) => setUser(data));
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
          alert("You already added this ingredient to your pantry!")
        }
        else{
          pantryService
          .updateUser(user.email, item.id)
          .then((response) => console.log(response))
          .catch(err => console.log(err.response.data));
        }
      })
  };

  const deleteItem = (id) =>{
    pantryService
    .deletePantryItem(id, user.email)
    .then((response) => console.log(response))
    .catch(err => console.log(err.response.data));
  
  }

  const Item = ({item}) => (
    <View style={styles.myButton} backgroundColor="white">
      <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.ingredient.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => {showDatePicker(); setSelectedItem(item) }}>
          <Icon name="calendar" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {deleteItem(item.id) }}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    let d = date.toISOString().replace('-', ' ').split('T')[0].replace('-', ' ');
    pantryService.updatePantryItem(user.email,selectedItem.id, d)
    .then((response) => console.log(response))
    .catch(err => console.log(err.response.data));
    hideDatePicker();
  };

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        source={require('../assets/images/background/light-wood.jpg')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <ImageBackground
              source={require('../assets/images/background/dark-wood.jpg')}
              style={styles.image}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchText}>My Pantry</Text>
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
              </View>
            </ImageBackground>
          </View>
          <ScrollView style={styles.scroll} keyboardShouldPersistTaps="always">
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={require('../assets/images/background/dark-wood.jpg')}
                style={styles.backgroundImage}>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/icons/dairy-icon.jpg')}
                />
                <Text style={styles.categoryText}>Dairy</Text>
                <TouchableOpacity style={styles.arrow}
                  onPress={() => {
                   getPantry("dairy");
                  }}>
                  <Icon name="chevron-down" size={30} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
              {showDairy ? ( <FlatList
                data={dairy}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />): null}
            </View>
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={require('../assets/images/background/dark-wood.jpg')}
                style={styles.backgroundImage}>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/icons/broccoli-icon.jpg')}
                />
                <Text style={styles.categoryText}>Vegetables</Text>
                <TouchableOpacity style={styles.arrow}
                  onPress={() => {
                    getPantry("vegetables");
                  }}>
                  <Icon name="chevron-down" size={30} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
              {showVegetables ? (<FlatList
                data={vegetables}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />) : null}
            </View>
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={require('../assets/images/background/dark-wood.jpg')}
                style={styles.backgroundImage}>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/icons/fruit-icon.jpg')}
                />
                <Text style={styles.categoryText}>Fruits</Text>
                <TouchableOpacity style={styles.arrow}
                  onPress={() => {
                    getPantry("fruits");
                  }}>
                  <Icon name="chevron-down" size={30} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
              {showFruits? (<FlatList
                data={fruits}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />) : null}
            </View>
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={require('../assets/images/background/dark-wood.jpg')}
                style={styles.backgroundImage}>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/icons/grains-icon.jpg')}
                />
                <Text style={styles.categoryText}>Grains</Text>
                <TouchableOpacity style={styles.arrow}
                  onPress={() => {
                    getPantry("grains");
                  }}>
                  <Icon name="chevron-down" size={30} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
              {showGrains? ( <FlatList
                data={grains}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />) : null}
            </View>
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={require('../assets/images/background/dark-wood.jpg')}
                style={styles.backgroundImage}>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/icons/meat-icon.jpg')}
                />
                <Text style={styles.categoryText}>Meat</Text>
                <TouchableOpacity style={styles.arrow}
                  onPress={() => {
                    getPantry("meat");
                  }}>
                  <Icon name="chevron-down" size={30} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
              {showMeat? (<FlatList
                data={meat}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />) : null}
            </View>
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={require('../assets/images/background/dark-wood.jpg')}
                style={styles.backgroundImage}>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/icons/seafood-icon.jpg')}
                />
                <Text style={styles.categoryText}>Seafood</Text>
                <TouchableOpacity style={styles.arrow}
                  onPress={() => {
                    getPantry("seafood");
                  }}>
                  <Icon name="chevron-down" size={30} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
              {showSeafood? (<FlatList
                data={seafood}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />) : null}
            </View>
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={require('../assets/images/background/dark-wood.jpg')}
                style={styles.backgroundImage}>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/icons/spices-icon.jpg')}
                />
                <Text style={styles.categoryText}>Spices</Text>
                <TouchableOpacity style={styles.arrow}
                  onPress={() => {
                    getPantry("spices");
                  }}>
                  <Icon name="chevron-down" size={30} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
              {showSpices? (<FlatList
                data={spices}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />) : null}
            </View>
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={require('../assets/images/background/dark-wood.jpg')}
                style={styles.backgroundImage}>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/icons/sweetners-icon.jpg')}
                />
                <Text style={styles.categoryText}>Sweeteners</Text>
                <TouchableOpacity style={styles.arrow}
                  onPress={() => {
                    getPantry("sweeteners");
                  }}>
                  <Icon name="chevron-down" size={30} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
              {showSweeteners? (<FlatList
                data={sweeteners}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />) : null}
            </View>
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={require('../assets/images/background/dark-wood.jpg')}
                style={styles.backgroundImage}>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/icons/dairy-icon.jpg')}
                />
                <Text style={styles.categoryText}>Nuts</Text>
                <TouchableOpacity style={styles.arrow}
                  onPress={() => {
                    getPantry("nuts");
                  }}>
                  <Icon name="chevron-down" size={30} color="white" />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
              {showNuts ? (<FlatList
                data={nuts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />) : null}
            </View>
          </ScrollView>
        </View>
        <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
      </ImageBackground>
    </View>
  );
};

export default MyPantryScreen;
