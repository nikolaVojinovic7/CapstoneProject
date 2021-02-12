import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      inputView:{
        width:"80%",
        backgroundColor:"white",
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"black"
      },
      registerBtn:{
        width:"80%",
        backgroundColor:"#7C9262",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20
      },
      registerText:{
        color:"white"
      },
      headerView:{
        width:"100%",
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      header1Text:{
        textAlign: 'center',
        marginBottom:20,
        fontSize: 18,
        fontWeight: 'bold',
      },
      header2Text:{
        textAlign: 'center',
        marginBottom:20,
        fontSize: 16,
      },
      signupText:{
        color:"red"
      }
});