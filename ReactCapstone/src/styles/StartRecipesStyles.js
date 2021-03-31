import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
    },

    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: 400,
        height:200,
    },

    headerText: {
        height: 20,
        fontWeight: 'bold',
    },
    RectangleShapeView: {
        position: 'absolute',
        top: 159,
        width: 210,
        height: 75,
        paddingHorizontal:5,
        backgroundColor: "#7C9262",
        justifyContent: "center",
    },
    
    recipeTitleText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    infoText: {
        fontWeight: 'bold',
    },
    infoText2:{
        fontSize: 16
    },
    h2Text:{
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom:5
    },
    favBtn:{
      position: 'absolute',
      top: 20,
      left: 330,
      width: 40,
      height: 40,
    },

    infoContainer:{
      marginLeft: 30,
      marginRight: 30,
      flex: 0.5,
      marginTop: 30
    },
});
