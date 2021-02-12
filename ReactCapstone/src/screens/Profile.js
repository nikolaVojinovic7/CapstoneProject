import React, {useState, useEffect} from 'react';
import styles from "../styles/ProfileStyles.js"
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
} from 'react-native';

const ProfileScreen = ({ navigation }) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
          setFullName(global.name);
          setEmail(global.email);
        });

        return () => {
          unsubscribe;
        };
    })

    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require("../assets/images/background/light-wood.jpg")} style={styles.image}>
          <View style={styles.container}>
             <View style={styles.searchContainer}>
                 <ImageBackground source={require("../assets/images/background/dark-wood.jpg")} style={styles.image}>
                     <View style={styles.searchHeader}>
                         <Text style={styles.searchText}>Profile</Text>
                     </View>
                 </ImageBackground>
             </View>
             <View style={styles.profileContainer}>
              <View style={styles.scroll}>
                 <View style={styles.inputView}>
                   <Text>{"Full Name:                               "}
                   <Text>{fullName}</Text>
                   </Text>
                 </View>
                 <TouchableOpacity
                   style={styles.editBtn}
                   onPress={() => {
                     navigation.navigate('EditName');
                   }}>
                   <Text style={styles.logoutText}>Edit Name</Text>
                 </TouchableOpacity>
                 <View style={styles.inputView}>
                   <Text>{"Email:                  "}
                   <Text>{global.email}</Text>
                   </Text>
                 </View>
                 <TouchableOpacity
                   style={styles.editBtn}
                   onPress={() => {
                     navigation.navigate('EditEmail');
                   }}>
                   <Text style={styles.logoutText}>Edit Email</Text>
                 </TouchableOpacity>
                 <View style={styles.inputView}>
                   <Text>{"Password:                               "}
                   <Text>{global.password}</Text>
                   </Text>
                </View>
                <TouchableOpacity
                  style={styles.editBtn}
                  onPress={() => {
                    navigation.navigate('EditPassword');
                  }}>
                  <Text style={styles.logoutText}>Edit Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.logoutBtn}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text style={styles.logoutText}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
            </View>
          </View>
       </ImageBackground>
    </View>
    );
};

export default ProfileScreen;
