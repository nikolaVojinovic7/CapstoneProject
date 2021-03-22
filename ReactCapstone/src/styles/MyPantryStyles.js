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
    position: 'relative',
    minHeight: 200,
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
    width: '80%'
  },
  scroll: {
    
    marginHorizontal: 25,
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
  Btn: {
    width: "80%",
    backgroundColor: "#7C9262",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  recipeImage: {
    height: 175,
    width: 175,
    padding: 5
  },
  category: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: "cover",
  },

  categoryContainer: {
    marginHorizontal: 15,
    marginTop: 30,
    width: 300,
    height: 40,
    marginBottom: 20,
    marginRight: 20,
  },

  categoryText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      position: "absolute",
      marginTop: 7,
      marginLeft: 120
  },
  myButton: {
    padding: 6,
    marginLeft: 20,
    marginTop: 5,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginRight: 35
  }, 
  
  arrow:{
    color: "white",
    marginTop: -30,
    marginLeft: 250

  }
  
}); 