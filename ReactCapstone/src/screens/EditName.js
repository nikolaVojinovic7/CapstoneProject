import React, { useState } from 'react';
import styles from "../styles/EditNameStyles.js"
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

const EditNameScreen = ({ navigation }) => {

    let [fullName, setFullName] = useState(global.name);
    let [fullNameError, setFullNameError] = useState('');


    let fullNameValidator = () => {
      if(fullName==""){
        setFullNameError("Enter a Valid Full Name");
      } else{
        setFullNameError("");
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
                         <Text style={styles.searchText}>Edit Name</Text>
                     </View>
                 </ImageBackground>
             </View>
             <View style={styles.profileContainer}>
              <View style={styles.scroll}>
                  <View>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>{fullNameError}</Text>
                  </View>
                  <Text>Full Name:</Text>

                 <View style={styles.inputView}>

                   <TextInput
                     style={styles.inputText}
                     placeholder="Full Name"
                     onBlur={()=>fullNameValidator()}
                     placeholderTextColor="lightgrey"
                     onChangeText={text => setFullName(text)}
                     value={fullName}
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

export default EditNameScreen;
