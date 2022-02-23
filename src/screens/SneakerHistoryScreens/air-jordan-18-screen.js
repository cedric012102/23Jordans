import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan18Screen = ({navigation}) => {
  const retroEightteenStockX = () => {
    Linking.openURL('https://stockx.com/jordan-18-og-black-sport-royal');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XVIII',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tate Kuerbis | Released : 2003 | Original Price : $175
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          The Air Jordan XVIII marked another transition for Michael Jordan and
          the design team for the brand that bears his name. The shoe's release
          year, 2003, saw MJ's final NBA game, and Tate Kuerbis stepped in to
          design the 16th edition of MJ's signature shoe. The senior footwear
          designer drew inspiration from high-end automobiles: sleek racing
          lines, F1 race cars and race driving shoes. Fine Italian dress shoes
          also inspired the stitching on the AJ XVIII's outsole. It featured a
          one-piece leather upper, a carbon fiber comfort control plate
          incorporated into the midsole, a hand-stitched outsole, dual-layer
          heel and low-profile Zoom Air cushioning in the forefoot. The AJ XVII
          was released in a pull-out box with a cut-out "18" on the lid. It
          included a brush for the black suede colorway, a towel for cleaning,
          and the Air Jordan XVIII Driver's Manual booklet. The brand did a
          "Love" campaign surrounding the release of the AJ XVIII, celebrating
          MJ's career and final NBA season. Jordan released three colorways of
          the AJ XVIII in 2003. The Black/Royal was made of suede, while the
          White/Royal and White/Red were leather. Two lows were released in
          Black/Black and White/University Blue. Along with the mids and lows,
          Jordan released the Air Jordan 18.5. The primary difference in design
          was a perforated Jumpman logo on the side of the upper. In 2002-03,
          Michael Jordan wore the AJ XVIII and was selected to his 14th and
          final NBA All-Star Game. Other NBA players wearing the shoe included
          Richard Hamilton, Scottie Pippen, Ray Allen, Mike Bibby, Michael
          Finley, and Carmelo Anthony.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 18"
          onPress={retroEightteenStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan18Screen;
