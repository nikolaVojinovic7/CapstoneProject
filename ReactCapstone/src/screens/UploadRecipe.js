import React, { useState, useEffect } from 'react';
import styles from "../styles/DashboardStyles.js"
import recipeService from '../services/RecipeService.js';
import pantryService from '../services/PantryService';
import ingredientService from '../services/IngredientService';
import SearchableDropdown from 'react-native-searchable-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  Picker,
} from 'react-native';

const TestScreen = ({ navigation }) => {

  const [user, setUser] = useState({});
  const [selectedValue, setSelectedValue] = useState("grams");
  let [amtError, setAmtError] = useState('');
  let [amt, setAmt] = useState('');

  const [exampleState, setExampleState] = useState([])
  let [ingredientData, setIngredientData] = useState({});

  const addElement = () => {
    var newArray = [...exampleState , {id : "2", text: "Object 3"}];
    setExampleState(newArray);
  }

  const getUser = async () => {
    try {
      const obj = await AsyncStorage.getItem('@user');
      return JSON.parse(obj);
    } catch (e) {}
  };

  let amtValidator = () => {
    if (time == "") {
      setAmtError("Enter a Valid Amount");
    } else {
      setAmtError("");
      return true;
    }
    return false;
  };

  useEffect(() => {
    getUser().then((data) => setUser(data));
  }, []);

  useEffect(() => {
    ingredientService
      .getIngredients()
      .then((response) => setIngredientData(response.data))
      .catch(err => console.log(err.response.data));
  }, []);


  const update_ingredients = (item) => {

          var newArray = [...exampleState , item];
          console.log("ARRRRRRRRRRRR ", newArray)
          setExampleState(newArray);

  };

  const Item = ({item}) => (
    <View style={styles.myButton} backgroundColor="white">
      <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.errorText}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>{amtError}</Text>
        </View>
        <TextInput
          style={styles.inputText}
          placeholder="Amount"
          onBlur={() => amtValidator()}
          placeholderTextColor="lightgrey"
          onChangeText={(text) => { setAmt(text) }}
        />
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Grams" value="grams" />
          <Picker.Item label="Cups" value="cups" />
        </Picker>

      </View>
    </View>
  );

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



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
        {
        // <FlatList
        //   keyExtractor = {item => item.id}
        //   data={exampleState}
        //   renderItem = {item => (<Text>{item.item.text}</Text>)} />
      }

        <FlatList
          data={exampleState}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

      <Button
        title="Add element"
        onPress={addElement} />




    </View>
  );
};

export default TestScreen;