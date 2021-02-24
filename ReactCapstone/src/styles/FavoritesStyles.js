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
      searchContainer: {
        width:"100%",
        flex: 1,
      },
      searchHeader: {
        width:"100%",
        justifyContent:"center",
        alignItems: 'center',
        flex: 1,
      },
      searchText: {
        textAlign: 'center',
        marginBottom:20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      scrollContainer: {
        flex: 3,
      },
      scroll: {
        width:"100%",
        marginBottom:20,
        justifyContent:"center",
        padding:20
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
      headerText: {
        height:20,
        fontWeight: 'bold',
      },
      Btn:{
        width:"80%",
        backgroundColor:"#7C9262",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        marginTop:10
      },
      item: {
         flex: 1,
         flexDirection: 'row',
         padding: 10,
         marginVertical: 8,
       },
       recipeImage: {
         height: 175,
         width: 175,
         padding: 5
       }
});