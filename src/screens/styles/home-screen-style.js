// import {StyleSheet} from 'react-native';

// export const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f9fafd',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   text: {
//     fontSize: 20,
//     color: '#333333',
//   },
// });

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  TextInputContainer: {
    flex: 4,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    marginLeft: 10,
    height: 40,
    backgroundColor: '#e2e2e2',
    paddingTop: 9,
  },
  searchButtonContainer: {
    flex: 1,
    marginHorizontal: 10,
    height: 40,
  },
  searchButton: {
    flex: 1,
    backgroundColor: '#900C3F',
    borderRadius: 50,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  mainContainer: {
    flex: 8,
  },
  cardHolderContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    marginTop: 15,
  },
  cardHolder: {
    flexBasis: '46%',
    height: '25%',
  },
});

