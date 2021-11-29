/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';
import 'firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const firebaseConfig = {
  apiKey: 'AIzaSyBpfXNaT9sVntpIWCBZ3j-SJo1dRXQ70N8',
  authDomain: 'sneaker-e7b38.firebaseapp.com',
  projectId: 'sneaker-e7b38',
  storageBucket: 'sneaker-e7b38.appspot.com',
  messagingSenderId: '873135698427',
  appId: '1:873135698427:web:7f0f754521da34d5291b5e',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
  webClientId:
    '873135698427-hnca4jog3vq4jiu5gj1qebjkbkr62238.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
