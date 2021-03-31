import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
    },
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    imageContainer: {
        width: "100%",
        flex: 2,
    },
    scrollContainer: {
        flex: 3,
        marginHorizontal:18
    },

    headerText: {
        height: 20,
        fontWeight: 'bold',
    },
    RectangleShapeView: {

        marginTop: -30,
        marginBottom: 25,
        width: 120 * 1.9,
        height: 85,
        backgroundColor: "#7C9262",
    },
    recipeTitleText: {
        textAlign: 'center',
        marginTop: 26,
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
      marginRight: 30
    },
    recipeName:{
       
    }
});
