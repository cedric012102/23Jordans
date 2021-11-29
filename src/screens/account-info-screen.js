import React, {useEffect, useState, useContext} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';
import {styles} from './styles/account-info-screen-styles';
import {AuthContext} from '../navigation/AuthProvider';

const AccountInfo = ({navigation, route, item}) => {
  const {user, logout} = useContext(AuthContext);
  const userDisplayName = user.displayName;
  const userEmail = user.email;
  const fName = user.fname;
  const lName = user.lname;
  const [userData, setUserData] = useState(null);

  const deleteAccountAlert = () =>
    Alert.alert(
      'Delete Account',
      'Are You Sure You Want To Delete Your Account?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => deleteUser()},
      ],
    );

  function deleteUser() {
    // console.log('Current Post Id: ', user);

    Firestore()
      .collection('users')
      .doc(Auth().currentUser.uid)

      .delete()
      .then(() => {
        console.log('User deleted!');
      })
      .catch(e => {
        console.log('Error while deleting the user. ', e);
      });
    logout();
  }

  function getUser() {
    const unsubscribe = Firestore()
      .collection('users')
      .where('userId', '==', user.uid)
      .onSnapshot({
        next: collection => {
          const collectionDocuments = collection.docs.map(item => item.data());
          setUserData(collectionDocuments);
        },
      });

    return unsubscribe;
  }

  useEffect(getUser, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={styles.titleText}>NAME</Text>
      <Text style={styles.infoText}>{fName && lName}</Text>

      <Text style={styles.titleText}>USER NAME</Text>
      <Text style={styles.infoText}>{userDisplayName}</Text>

      <Text style={styles.titleText}>EMAIL ADDRESS</Text>
      <Text style={styles.infoText}>{userEmail}</Text>

      <TouchableOpacity onPress={deleteAccountAlert}>
        <Text style={styles.deleteAccountText}>Delete Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AccountInfo;
