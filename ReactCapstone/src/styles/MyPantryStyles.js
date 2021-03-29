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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchContainer: {
    width: '100%',
    flex: 1,
    position: 'relative',
    minHeight: 200,
  },

  searchHeader: {
    width: '100%',
    justifyContent: 'center',
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

  scroll: {
    marginLeft: 30,
    marginRight: 18,
  },

  headerText: {
    height: 20,
    fontWeight: 'bold',
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },

  icon: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 100,
  },
  recipeImage: {
    height: 175,
    width: 175,
    padding: 5,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },

  categoryContainer: {
    marginTop: 30,
    width: 291,
    height: 40,
    marginBottom: 20,
    marginLeft: 20,
  },

  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 7,
    marginLeft: 120,
  },
  
  myButton: {
    padding: 6,
    marginLeft: 20,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 35,
  },

  arrow: {
    color: 'white',
    marginTop: -28,
    marginLeft: 255,
  },

  vegetable: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 7,
    marginLeft: 103,
  },

  sea: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 7,
    marginLeft: 110,
  },

  sweetner: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 7,
    marginLeft: 100,
  },
}); 