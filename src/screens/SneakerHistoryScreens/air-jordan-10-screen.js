import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan10Screen = ({navigation}) => {
  const retroTenStockX = () => {
    Linking.openURL('https://stockx.com/jordan-10-og-steel-1994');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan X',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1994 | Original Price : $125
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          When Michael Jordan returned to the NBA on March 19, 1995, against the
          Indiana Pacers, he wore the Chicago colorway of the Air Jordan X. The
          AJ Xs design was very simplistic. It featured clean lines, lightweight
          cushioning, and an outsole that commemorated his career to that point.
          The original steel version was designed with a stitched toe piece,
          which MJ didnt like. So all subsequent colorways of the AJ X had a
          clean toe cap. The AJ X featured a padded collar, pull tab at the
          heel, and an elastic band lacing system. Nike built the midsole of the
          AJ X of Phylon lightweight foam. It was connected to a rubber outsole
          that listed Jordans career achievements on alternating stripes. The
          other original colorways were part of the city series that featured
          five color schemes of NBA teams: Chicago, Orlando, New York,
          Sacramento, and Seattle. These have become some of the most
          sought-after Air Jordans. The Chicago, for example, has sold for
          thousands of dollars online. Nine days after Jordan told the world Im
          back, he walked into Madison Square Garden and singed the Knicks for
          55 points. MJ guided his Bulls back to the playoffs, but the Orlando
          Magic - led by Penny Hardaway and Shaquille ONeal - dismissed them in
          six games in the Eastern Conference semi-finals.
        </Text>
        <FormButton buttonTitle="Buy Air Jordan 10" onPress={retroTenStockX} />
      </View>
    </ScrollView>
  );
};

export default AirJordan10Screen;
