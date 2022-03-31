import React, {useState} from "react";
import { View, Text, ActionSheetIOS, TouchableWithoutFeedback, ScrollView, } from "react-native";
import FormButton from '../components/form-button';
import Video from 'react-native-video';
import {styles} from './styles/calendar-screen-style';

const CalendarScreen = ({navigation}) => {

    const [paused, setPaused] = useState(false);
    const onPlayPausePress = () => {
        setPaused(!paused);
      };

    const januaryReleases = () => {
        navigation.navigate('January');
      };

    const februaryReleases = () => {
        navigation.navigate('February');
      };

    const marchReleases = () => {
        navigation.navigate('March');
      };

    const aprilReleases = () => {
        navigation.navigate('April');
      };

    const mayReleases = () => {
        navigation.navigate('May');
      };

    const juneReleases = () => {
        navigation.navigate('June');
      };

    const julyReleases = () => {
        navigation.navigate('July');
      };

    const augustReleases = () => {
        navigation.navigate('August');
      };

    const septemberReleases = () => {
        navigation.navigate('September');
      };

    const octoberReleases = () => {
        navigation.navigate('October');
      };

    const novemberReleases = () => {
        navigation.navigate('November');
      };

    const decemberReleases = () => {
        navigation.navigate('December');
      };

      function monthsOnShowActionSheet({navigation}) {
        if (Platform.OS === 'ios') {
          ActionSheetIOS.showActionSheetWithOptions(
            {
              options: ['Cancel', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              cancelButtonIndex: 0,
            },
            buttonIndex => {
              if (buttonIndex === 1) {
                januaryReleases();
              } else if (buttonIndex === 2) {
                februaryReleases();
              } else if (buttonIndex === 3) {
                marchReleases();
              } else if (buttonIndex === 4) {
                aprilReleases();
              } else if (buttonIndex === 5) {
                mayReleases();
              } else if (buttonIndex === 6) {
                juneReleases();
              } else if (buttonIndex === 7) {
                julyReleases();
              } else if (buttonIndex === 8) {
                augustReleases();
              } else if (buttonIndex === 9) {
                septemberReleases();
              } else if (buttonIndex === 10) {
                octoberReleases();
              } else if (buttonIndex === 11) {
                novemberReleases();
              } else if (buttonIndex === 12) {
                decemberReleases();
              }
            },
          );
        }
      }

    return (
        <ScrollView bounces={false}>
        <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View style={styles.container}>
        <Video
            source={require('../assets/images/SneakerReleases.mp4')}
            style={styles.video}
            onError={(e: LoadError) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />
          <FormButton
          buttonTitle="See 2022 Air Jordan Releases"
          onPress={monthsOnShowActionSheet}
        />

        </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    );
};

export default CalendarScreen;
