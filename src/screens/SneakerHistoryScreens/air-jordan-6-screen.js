import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan6Screen = ({navigation}) => {
  const retroSixStockX = () => {
    Linking.openURL('https://stockx.com/jordan-6-og-infrared-black-1991');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan VI',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1991 | Original Price : $125
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          The Air Jordan VI is a fixture in basketball history. Released in
          February 1991, Michael Jordan wore it to the Chicago Bulls first
          championship just a few months later. While the sports world focused
          its attention on MJs emotional first embrace of the coveted Larry
          OBrien trophy, with his father looking on proudly, the sneaker world
          was trying to catch glimpses of what was on his feet. Most apparent on
          the AJ VI was the leather overlays, which upon careful inspection
          reveal a 2 and a 3 to honor MJs uniform number. Carrying over from the
          AJ V were the sculpted midsole, Vis-Air heel cushioning, and
          translucent (frosty) outsole. And while the original releases
          consisted of leather, the Black/Infrared colorway included rich suede.
          But largely, the AJ VI included a clean toe cap, a rubber tongue with
          finger loops, lace locks, a molded heel tab, and an inner booty sleeve
          designed for comfort. Years later, Ray Allen and Vin Baker would wear
          the White/Navy/Red colorway at the 2000 Sydney Olympic Games. But the
          shoes popularity reached well beyond the hardwood, as comedian Jerry
          Seinfeld wore it on early episodes of his eponymous sit-com, Seinfeld.
          While MJ wore the shoe, he averaged 31.5 points per game on his way to
          a fifth straight scoring title. He also earned first-team All-NBA,
          first-team All-Defense, and a seventh straight All Star appearance to
          go along with the league MVP honor. And to cap it off, MJ earned
          Finals MVP, all of which likely paled in comparison to clutching that
          trophy.
        </Text>
        <FormButton buttonTitle="Buy Air Jordan 6" onPress={retroSixStockX} />
      </View>
    </ScrollView>
  );
};

export default AirJordan6Screen;
