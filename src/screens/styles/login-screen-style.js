import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: Dimensions.get('window').height,
  },
  logo: {
    height: 150,
    width: 400,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Nosifer-Regular',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lao Sangam MN',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
