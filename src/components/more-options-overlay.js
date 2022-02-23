import ActionSheet from '@alessiocancian/react-native-actionsheet';
import React, {useRef, useContext} from 'react';
import {Linking, Platform, Text, TouchableOpacity, Alert} from 'react-native';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import {styles} from './styles/more-options-overlay-style';
import {ServiceButton} from './service-button';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';

export function MoreOptionsOverlay({componentId}) {
  const navigation = useNavigation();
  const actionSheetRef = useRef(null);
  const isActionSheetOpen = useRef(false);
  const awesomeModalRef = useRef(null);
  const {user, logout} = useContext(AuthContext);

  const logoutAlert = () =>
  Alert.alert('Logout!', 'Are You Sure You Want To Logout?', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'Logout', onPress: () => logout()},
  ]);

  return (
    <AwesomeModal
      ref={awesomeModalRef}
      // onClose={onClose}
      onPressOutside={() => console.log('outside')}
      modalBottomMargin={0}
      modalContainerStyle={styles.containerStyle}
      modalOverlayStyle={styles.ModalOverlayStyle}
      modalInnerContainerStyle={styles.modalInnerContainerStyle}
    >
      <ServiceButton
        image={require('../assets/users/jordanlogo.webp')}
        label="Feedback/Privacy"
        onPress={() => navigation.navigate('Feedback/Privacy')}
      />
      <ServiceButton
        image={require('../assets/users/jordanlogo.webp')}
        label="Account Information"
        onPress={() => navigation.navigate('Account Information')}
      />
       <ServiceButton
        image={require('../assets/users/jordanlogo.webp')}
        label="Logout"
        onPress={logoutAlert}
      />

      {/* <TouchableOpacity onPress={() => awesomeModalRef.current.close()}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity> */}

      <ActionSheet
        ref={actionSheetRef}
        title={'Please Contact Josie Emch for Further Booking'}
        options={['cancel']}
        cancelButtonIndex={1}
        onPress={onSelectOption}
      />
    </AwesomeModal>
  );

  /**
   * Dismisses the overlay when the actionsheet
   * is not visible. AKA, the user did not select
   * event sitting, which opens an actionsheet
   * with a mobile number
   */
  // function onClose() {
  //   if (!isActionSheetOpen.current) {
  //     Navigation.dismissOverlay(componentId);
  //   }
  // }

  /**
   * This closes the modal with an animation,
   * then it shows the action sheet and
   * sets isActionSheetOpen to true, so
   * we don't dismiss the modal when actionsheet
   * is open
   */
  function onPressContactJosie() {
    isActionSheetOpen.current = true;
    awesomeModalRef.current.close();
    actionSheetRef.current.show();
  }

  /**
   * This closes the ActionSheet Phonenumber
   * When you press cancel
   */
  function onSelectOption(index) {
    Navigation.dismissOverlay(componentId);
    isActionSheetOpen.current = false;

    if (index === 0) {
      if (Platform.OS === 'android') {
        Linking.openURL('https://www.footlocker.com');
      } else {
        Linking.openURL('https://www.footlocker.com');
      }
    }
  }
}
