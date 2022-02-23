import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan7Screen = ({navigation}) => {
  const retroSevenStockX = () => {
    Linking.openURL('https://stockx.com/jordan-7-og-raptors-1992');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan VII',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1992 | Original Price : $125
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Like Michael Jordan, Tinker Hatfield set out to repeat as a winner
          with a championship-caliber design on the Air Jordan VII. Released in
          1992, the AJ VII drew inspiration from West African tribal art, with
          bold lines on the midsole. It also incorporated Nikes Huarache
          technology - named for a Mexican style of sandal - as a neoprene inner
          booty to improve comfort and fit. This helped eliminate extra weight
          and made it one of the lightest basketball shoes at the time. The
          visual paid homage to west African tribal art, featuring bold lines on
          the midsole. A USA colorway released later that year commemorated the
          Dream Team, Team USA that went on to dominate international
          competition. This was white, trimmed in blue, red, and gold. The AJ
          VII bid farewell to the visible Air-Sole, the translucent outsole, and
          the prominent Nike Air logo (except on the insole). The upper carried
          over the toecap from the VI. Among other changes in the Air Jordan
          series, ads shifted from MJs collaboration with Mars Blackmon to
          Michael and Bugs Bunny. One commercial featured the duo both wearing
          the AJ VII beating another team in a game of hoops. MJ wore the
          Olympic-inspired colorway to a gold medal with the incomparable Dream
          Team at the 1992 summer games in Barcelona. That pair featured the
          number 9 on the heel, MJs jersey number on Team USA. He won his sixth
          straight scoring title while wearing the AJ VII and was again named
          first team All-NBA, first team All-Defense and an All-Star for the
          seventh consecutive time. He was voted league MVP for the second
          straight year and won his second NBA Championship ring and Finals MVP
          with Chicago.
        </Text>
        <FormButton buttonTitle="Buy Air Jordan 7" onPress={retroSevenStockX} />
      </View>
    </ScrollView>
  );
};

export default AirJordan7Screen;
