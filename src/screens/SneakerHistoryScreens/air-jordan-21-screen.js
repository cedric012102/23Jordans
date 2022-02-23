import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan21Screen = ({navigation}) => {
  const retroTwentyOneStockX = () => {
    Linking.openURL('https://stockx.com/jordan-21-og-red-suede');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XXI',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : D'Wayne Edwards | Released : 2006 | Original Price : $175
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          D'Wayne Edwards began a two-shoe run as a lead designer on the Air
          Jordan line, taking the helm for the Air Jordan XX1. Maintaining the
          theme of sporty and/or luxurious automobiles that was popular
          throughout the Jordan line, Edwards drew his inspiration from a
          Bentley Continental GT coupe. The embodiment of premium style and
          elegance featured a seamless diamond-quilted bootie, clean upper, and
          a lower foot air grille. The double-lasted Phylon lightweight-foam
          midsole lent a low-profile feel, while a carbon fiber shank plate
          allowed for maximum midfoot and arch support. One innovative component
          of the AJ XX1 was the evolution of the Independent Podular Suspension
          technology. The wearer could choose between Zoom Air or encapsulated
          Air cushioning in the heel. Two original colorways of the Air Jordan
          XX1 released in 2006. The White/Red model consisted of full-grain
          leather, while the Red/Black was constructed of rich suede. Two low
          versions also were released in white and in black. The commercial for
          the AJ XX1 featured young athletes reenacting famous moments from
          Michael's career, including the shot on Craig Ehlo, recreations from
          the Slam Dunk contests, the "Last Shot," and the "Michael shrug." The
          tagline of the commercial was "Let your game speak."
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 21"
          onPress={retroTwentyOneStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan21Screen;
