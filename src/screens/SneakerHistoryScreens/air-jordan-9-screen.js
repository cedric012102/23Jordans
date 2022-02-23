import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan9Screen = ({navigation}) => {
  const retroNineStockX = () => {
    Linking.openURL('https://stockx.com/air-jordan-9-og-chicago-1993');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan IX',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : November 1993 | Original Price
          : $125
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          After leading Chicago to a third straight championship in 1993, the
          maestro walked off the stage. Michael Jordan shocked the basketball
          world by retiring that October. He signed with the Class AA
          minor-league Birmingham Barons the following February, and as he
          worked his way through the bus leagues, Nike prepared the Air Jordan
          IX to hit the hardwood without him. Penny Hardaway, Kendall Gill, B.J.
          Armstrong, and Mitch Richmond each wore an exclusive version of the
          shoe during the 1993-94 season. And, a decade later, a high school
          senior named LeBron James wore the White/Green/Gold colorway to
          commemorate his school, St. Vincent-St. Mary in Akron, Ohio. The AJ IX
          became the first Air Jordan that the man himself would never wear in
          competition. Though, ironically, its the AJ IX thats depicted on the
          statue of MJ outside the United Center in Chicago. Nike built the AJ
          IXs upper with leather, nubuck, and mesh. The nubuck area wrapped
          around the toe and included reflective sparkles in three of the four
          original colorways. The inner booty sockliner carried over from the
          previous two Air Jordans. A one-pull lacing system debuted with the AJ
          IX. A polyurethane midsole sat atop the rubber outsole in a tooth-like
          design. The back of the shoe featured a molded plastic globe graphic
          with a Jumpman logo. The sole of the shoes featured words in different
          languages, symbolizing MJs popularity expanding globally. He retired
          from baseball on March 10, 1995, and returned to the hardwood on March
          19. He wore number 45 for the remainder of that season - his 23 had
          been retired, though he defiantly put it back on for game 2 of that
          year’s Eastern Conference semifinals - and wore the next shoe in his
          signature line, the Air Jordan X.
        </Text>
        <FormButton buttonTitle="Buy Air Jordan 9" onPress={retroNineStockX} />
      </View>
    </ScrollView>
  );
};

export default AirJordan9Screen;
