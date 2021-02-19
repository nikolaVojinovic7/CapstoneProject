import React, {useState, useEffect} from 'react';
import styles from "../styles/ProfileStyles.js"
import global from '../global.js'
import userService from "../services/UserService"
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const ProfileScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    useEffect(() => {
          userService.getUserByEmail(global.email).then((res) => {
              let user = res.data;
              setEmail(user.email)
              setUsername(user.username)
              setPassword(user.password)
            })
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
                   <Text>{"Username:                               "}
                   <Text>{username}</Text>
                   </Text>
                 </View>
                 <TouchableOpacity
                   style={styles.editBtn}
                   onPress={() => {
                     navigation.navigate('EditUsername');
                   }}>
                   <Text style={styles.logoutText}>Edit Username</Text>
                 </TouchableOpacity>
                 <View style={styles.inputView}>
                   <Text>{"Email:                  "}
                   <Text>{email}</Text>
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
                   <Text>**********</Text>
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
