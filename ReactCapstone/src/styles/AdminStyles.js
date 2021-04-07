/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchContainer: {
    width: '100%',
    flex: 1,
  },
  searchHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  searchText: {
    fontFamily: 'PatrickHand-Regular',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 40,
    color: 'white',
  },
  scrollContainer: {
    flex: 3,
  },
  scroll: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  headerText: {
    height: 20,
    fontWeight: 'bold',
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
    padding: 5,
  },
  userList: {
    height: 70,
    width: 300,
    fontSize: 17,
    textAlign: 'center',
    padding: 10,
  },
  buttons: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  approveButton: {
    backgroundColor: '#7C9262',
    width: 100,
  }
});
