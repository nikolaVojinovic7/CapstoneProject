import React, { useState, useEffect } from 'react';
import styles from "../styles/UploadStyles.js"
import uploadService from '../services/UploadService.js';
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
} from 'react-native';

const UploadRecipeScreen = ({ navigation }) => {

  let [name, setName] = useState('');
  let [nameError, setNameError] = useState('');
  let [prep, setPrep] = useState('');
  let [prepError, setPrepError] = useState('');
  let [cook, setCook] = useState('');
  let [cookError, setCookError] = useState('');
  let [time, setTime] = useState('');
  let [timeError, setTimeError] = useState('');
  let [direction, setDirection] = useState('');
  let [directionError, setDirectionError] = useState('');
  let [servingError, setServingError] = useState('');
  let [serving, setServing] = useState('');
  let [levelError, setLevelError] = useState('');
  let [level, setLevel] = useState('');
  let [imageError, setImageError] = useState('');
  let [image, setImage] = useState('');



  let nameValidator = () => {
    if (name == "") {
      setNameError("Enter a Valid Name");
    } else {
      setNameError("");
      return true;
    }
    return false;
  };

  let prepValidator = () => {
    if (prep == "") {
      setPrepError("Enter a Valid Prep Time");
    } else {
      setPrepError("");
      return true;
    }
    return false;
  };

  let cookValidator = () => {
    if (cook == "") {
      setCookError("Enter a Valid Cook Time");
    } else {
      setCookError("");
      return true;
    }
    return false;
  };

  let timeValidator = () => {
    if (time == "") {
      setTimeError("Enter a Valid Total Time");
    } else {
      setTimeError("");
      return true;
    }
    return false;
  };

  let directionValidator = () => {
    if (direction == "") {
      setDirectionError("Enter Valid Directions");
    } else {
      setDirectionError("");
      return true;
    }
    return false;
  };

  let servingValidator = () => {
    if (serving == "") {
      setServingError("Enter a Valid Serving");
    } else {
      setServingError("");
      return true;
    }
    return false;
  };

  let levelValidator = () => {
    if (level == "") {
      setLevelError("Enter a Valid Level");
    } else {
      setLevelError("");
      return true;
    }
    return false;
  };

  let imageValidator = () => {
    if (image == "") {
      setImageError("Enter a Valid Image");
    } else {
      setImageError("");
      return true;
    }
    return false;
  };

  let onSubmit = () => {
    nameValidator();
    prepValidator();
    cookValidator();
    timeValidator();
    directionValidator();
    servingValidator();
    levelValidator();
    imageValidator();
    if (nameValidator() && prepValidator() && cookValidator() && timeValidator() && directionValidator() && servingValidator() && levelValidator() && imageValidator()) {
      uploadRecipe()
    }
  }

  let uploadRecipe = () => {
    const params = JSON.stringify({
      "name": name,
      "prepTime": prep,
      "cookTime": cook,
      "directions": direction,
      "totalTime": time,
      "servings": serving,
      "level": level,
      "imageUrl": image,
    });

    console.log("PARAMS                    ", params);

    uploadService.createRecipes(params).then((res) => {
      // let passwordMatch = res.data;
      // if (!passwordMatch) {
      //   setPasswordError("Incorrect Password. Please try again.")
      // }
      // else {
      //   userService.getUserByEmail(email).then((res) => {
      //     let user = res.data;
      //     storeData(user);
      //   }).catch(err => console.log(err.response.data))
      //   navigation.navigate('Dashboard');
      // }
      console.log(res);
    })
    .catch(err => Alert.alert(
      'Error',
      'Cant Upload Recipe! '+err,
      [
        {
          text: 'Ok',
        },
      ],
      { cancelable: false },
      console.log(err)
    ))
  }


  var initialElements = [
  { id : "0", text : "Object 1"},
  { id : "1", text : "Object 2"},
]

const [exampleState, setExampleState] = useState(initialElements)

const addElement = () => {
  var newArray = [...initialElements , {id : "2", text: "Object 3"}];
  setExampleState(newArray);
}

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../assets/images/background/light-wood.jpg")} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <ImageBackground source={require("../assets/images/background/dark-wood.jpg")} style={styles.image}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchText}>Upload Recipe</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView>
              <View style={styles.scroll}>

                <View style={styles.errorText}>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>{nameError}</Text>
                </View>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Name"
                    onBlur={() => nameValidator()}
                    placeholderTextColor="lightgrey"
                    onChangeText={(text) => { setName(text) }}
                  />
                </View>

                <View style={styles.errorText}>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>{prepError}</Text>
                </View>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Prep Time"
                    onBlur={() => prepValidator()}
                    placeholderTextColor="lightgrey"
                    onChangeText={(text) => { setPrep(text) }}
                  />
                </View>

                <View style={styles.errorText}>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>{cookError}</Text>
                </View>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Cook Time"
                    onBlur={() => cookValidator()}
                    placeholderTextColor="lightgrey"
                    onChangeText={(text) => { setCook(text) }}
                  />
                </View>

                <View style={styles.errorText}>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>{timeError}</Text>
                </View>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Total Time"
                    onBlur={() => timeValidator()}
                    placeholderTextColor="lightgrey"
                    onChangeText={(text) => { setTime(text) }}
                  />
                </View>

                <View style={styles.errorText}>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>{directionError}</Text>
                </View>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Directions"
                    onBlur={() => directionValidator()}
                    placeholderTextColor="lightgrey"
                    onChangeText={(text) => { setDirection(text) }}
                  />
                </View>

                <View style={styles.errorText}>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>{servingError}</Text>
                </View>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Servings"
                    onBlur={() => servingValidator()}
                    placeholderTextColor="lightgrey"
                    onChangeText={(text) => { setServing(text) }}
                  />
                </View>

                <View style={styles.errorText}>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>{levelError}</Text>
                </View>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Level"
                    onBlur={() => levelValidator()}
                    placeholderTextColor="lightgrey"
                    onChangeText={(text) => { setLevel(text) }}
                  />
                </View>

                <View style={styles.errorText}>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>{imageError}</Text>
                </View>
                <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Image Url"
                    onBlur={() => imageValidator()}
                    placeholderTextColor="lightgrey"
                    onChangeText={(text) => { setImage(text) }}
                  />
                </View>

                <View style={styles.errorText}>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>{imageError}</Text>
                </View>
                <View style={styles.inputView} >
                  <FlatList
                    keyExtractor = {item => item.id}
                    data={exampleState}
                    renderItem = {item => (<Text>{item.item.text}</Text>)} />

                </View>
                <View style={styles.inputView} >
                <Button
                  title="Add element"
                  onPress={addElement} />
                </View>

                <TouchableOpacity style={styles.loginBtn}
                  onPress={() => onSubmit()}>
                  <Text style={styles.loginText}>
                    Submit</Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default UploadRecipeScreen;
