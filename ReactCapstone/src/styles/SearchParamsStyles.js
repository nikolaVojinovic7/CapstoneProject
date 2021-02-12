import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
      },
      container: {
        flex: 1,
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      searchContainer: {
        width: "100%",
        flex: 1,
      },
      searchHeader: {
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
      },
      searchText: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      scrollContainer: {
        flex: 3,
        marginHorizontal: 25,
      },
    
      scroll: {
        width: "100%",
        height: 200,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
      },
      inputView: {
        width: "80%",
        backgroundColor: "white",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
      },
      inputText: {
        height: 50,
        color: "black"
      },
      headerText: {
        height: 20,
        fontWeight: 'bold',
      },
      category: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        marginBottom: 15
      },
      categories: {
        flexDirection: 'row',
      },
      myButton: {
        padding: 6,
        borderRadius: 17,
        backgroundColor: "#7C9262",
        marginLeft: 5,
        marginTop: 5
      }    
});