import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan11Screen = ({navigation}) => {
  const retroElevenStockX = () => {
    Linking.openURL('https://stockx.com/jordan-11-og-concord-1995');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XI',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1995 | Original Price : $125
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Thanks to great performance coupled with an innovative design, the Air
          Jordan XI (particularly the Concord colorway) is one of the most-loved
          sneakers ever. Sole Collector magazine voted the XI the top shoe of
          all time. Tinker Hatfield watched video of Michael Jordan and noticed
          MJs foot would roll off the foot bed on hard cuts. So Hatfield took
          that opportunity to blend substance with style, adding patent leather
          for the first time on a basketball shoe. Patent leather was stronger,
          and it fit MJs reported desire to have a shoe that could be worn with
          a suit. The upper consisted of a polymer-coated, thin nylon ballistic
          mesh material. The collar and tongue were padded for ankle comfort.
          The translucent - frosty - outsole lay atop the shank plate for extra
          spring. The shoe also included a full-length Air-Sole unit. MJ wore
          the Black/Varsity Royal/White version in the movie Space Jam. Jordan
          also wore the same Air Jordan XI Space Jam shoe in the playoffs. Many
          Jordan brand athletes have worn the AJ XI over the years; Ray Allen
          sported a White/Green/Gold version during the Celtics 2008-09 season.
          When the AJ XI was made, MJ was quoted as saying someone would one day
          wear them with a tuxedo. Months later, Boyz II Men appeared at an
          awards show wearing tuxes and AJ XIs.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 11"
          onPress={retroElevenStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan11Screen;
