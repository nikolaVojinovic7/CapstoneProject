import React, { useState } from 'react';
import styles from "../styles/EditEmailStyles.js"
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
} from 'react-native';

const EditEmailScreen = ({ navigation }) => {

  let [email, setEmail] = useState(global.email);
  let [emailError, setEmailError] = useState('');

  let emailValidator = () => {
    if(email==""){
      setEmailError("Enter a Valid Email");
    } else if(email.indexOf('@') == -1 ){
      setEmailError("Enter a Valid Email");
    } else{
      setEmailError("");
      return true;
    }
    return false;
  };

    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require("../assets/images/background/light-wood.jpg")} style={styles.image}>
          <View style={styles.container}>
             <View style={styles.searchContainer}>
                 <ImageBackground source={require("../assets/images/background/dark-wood.jpg")} style={styles.image}>
                     <View style={styles.searchHeader}>
                         <Text style={styles.searchText}>Edit Email</Text>
                     </View>
                 </ImageBackground>
             </View>
             <View style={styles.profileContainer}>
              <View style={styles.scroll}>
                  <View>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>{emailError}</Text>
                  </View>
                  <Text>Email:</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Email"
                      onBlur={()=>emailValidator()}
                      placeholderTextColor="lightgrey"
                      onChangeText={text => setEmail(text)}
                      value={email}
                    />
                  </View>
                 <TouchableOpacity
                   style={styles.editBtn}>
                   <Text style={styles.logoutText}>SAVE</Text>
                 </TouchableOpacity>
            </View>
            </View>
          </View>
       </ImageBackground>
    </View>
    );
};

export default EditEmailScreen;
