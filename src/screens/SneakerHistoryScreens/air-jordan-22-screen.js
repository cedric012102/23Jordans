import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan22Screen = ({navigation}) => {
  const retroTwentyTwoStockX = () => {
    Linking.openURL('https://stockx.com/jordan-22-og-white-varisty-red');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XXII',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : D'Wayne Edwards | Released : 2007 | Original Price : $165
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          D'Wayne Edwards returned for his second turn as the lead designer for
          a Jordan signature model. For the Air Jordan XX2, he drew his
          inspiration from the F-22 Raptor fighter jet, an apt embodiment of the
          lethal speed and agility of the game's greatest player. The sharp
          lines of the XX2's upper were patterned after the sharp
          maneuverability of the F-22, and the shoe's efficient sculpted design
          and a stable extended heel counter made it lightweight and supportive,
          similar to the jet. The shoe featured a triangular quilted pattern on
          the collar and a seamless bootie that maximized comfort and
          breathability. It featured zigzag stitching inspired by the jet. The
          first titanium-coated shank plate was built into the XX2, as were
          titanium lace loops/lace locks. An invisible Independent Podular
          Suspension system, updated from the previous Air Jordan cushioning
          system, offered responsive double-stacked Zoom Air low-profile
          cushioning or shock-absorbing encapsulated Air. A fresh chevron
          pattern was introduced to the outsole to improve traction. The XX2 was
          released during the 2007 All-Star weekend on MJ's 44th birthday, Feb.
          17. Fifteen original colorways of the XX2 included a special edition
          made out of basketball leather. Other colorways represented Atlanta,
          Dallas, Denver, Detroit, and Seattle. Joe Johnson, Josh Howard,
          Carmelo Anthony, Richard Hamilton, and Ray Allen all wore the XX2
          during the 2007-08 season. At the 2007 All-Star game in Las Vegas,
          Hamilton and Allen each wore an XX2 Player Exclusive.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 22"
          onPress={retroTwentyTwoStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan22Screen;
