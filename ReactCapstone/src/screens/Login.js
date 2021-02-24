import React, { useState, useEffect } from 'react';
import styles from "../styles/LoginStyles.js"
import userService from '../services/UserService.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';

const LoginScreen = ({ navigation }) => {

  let [email, setEmail] = useState('');
  let [emailError, setEmailError] = useState('');
  let [password, setPassword] = useState('');
  let [passwordError, setPasswordError] = useState('');

  const storeData = async (value) => {
    try {
      const obj = JSON.stringify(value)
      await AsyncStorage.setItem('@user', obj)
    } catch (e) {
    }
  }

  let onSubmit = () => {
    emailValidator();
    passwordValidator();
    if (emailValidator() && passwordValidator()) {
      verifyLogin()
    }
  }

  let verifyLogin = () => {
    userService.verifyUser(email, password).then((res) => {
      let passwordMatch = res.data;
      if (!passwordMatch) {
        setPasswordError("Incorrect Password. Please try again.")
      }
      else {
        userService.getUserByEmail(email).then((res) => {
          let user = res.data;
          storeData(user);
        }).catch(err => console.log(err))
        navigation.navigate('Dashboard');
      }
    })
    .catch(err => Alert.alert(
      'Error',
      'User not found!',
      [
        {
          text: 'Ok',
        },
      ],
      { cancelable: false }
    ))
  }

  let emailValidator = () => {
    if (email == "") {
      setEmailError("Enter a Valid Email");
    } else if (email.indexOf('@') == -1) {
      setEmailError("Enter a Valid Email");
    } else {
      setEmailError("");
      return true;
    }
    return false;
  };

  let passwordValidator = () => {
    if (password == "") {
      setPasswordError("Enter a Valid Password");
    } else {
      setPasswordError("");
      return true;
    }
    return false;
  };

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../assets/images/background/light-wood.jpg")} style={styles.image}>
        <View style={styles.container}>
          <Image
            style={{ width: 300.5, height: 222.5, marginBottom: 27 }}
            source={require("../assets/images/logo/bitstobiteslogo.png")}
          />
          <View style={styles.errorText}>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>{emailError}</Text>
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              onBlur={() => emailValidator()}
              placeholderTextColor="lightgrey"
              onChangeText={(text) => { setEmail(text) }}
            />
          </View>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>{passwordError}</Text>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              onBlur={() => passwordValidator()}
              placeholderTextColor="lightgrey"
              onChangeText={(text) => { setPassword(text) }}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}
            onPress={() => onSubmit()}>
            <Text style={styles.loginText}>
              Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot} onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.signupText1}> {"Don't have an account? "}
            <Text style={styles.signupText} onPress={() => {
              navigation.navigate('Register');
            }}>
              Sign Up</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
