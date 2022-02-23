import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan19Screen = ({navigation}) => {
  const retroNineteenStockX = () => {
    Linking.openURL('https://stockx.com/jordan-19-og-bred-2004');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XIX',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tate Kuerbis, Wilson Smith III, Jason Mayden, Josh Heard,
          Suzette Henri | Released : 2004 | Original Price : $165
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Senior Designer Tate Kuerbis returned to lead a team of Jason Mayden,
          Wilson Smith III, Josh Heard, and Suzette Henri in designing the Air
          Jordan XIX. The team drew from the deadly black mamba to reflect MJ's
          aggressive on-court persona. The AJ XIX featured lightweight,
          supportive Tech Flex material on the upper to create the lightest,
          most breathable Air Jordan to date. Tech Flex made the AJ XIX flexible
          while retaining support and comfort. It featured a carbon fiber shank
          plate for torsional rigidity, a Phylon lightweight-foam midsole,
          patent leather toe box, a Velcro heel strap, and plastic lace-locks. A
          double-stacked heel and full-length Zoom Air ensured responsive,
          low-profile cushioning. The AJ XIX's unique box opened from the
          middle, and each shoe came in a netted bag. Five colors of the
          original AJ XIX included the Black/Red, White/White/Grey, White/Black,
          White/Red, and White/Navy. Four AJ XIX SE colorways were released, as
          were four low-top models. Carmelo Anthony, Gary Payton, Jason Kidd,
          Michael Finley, Mike Bibby, Ray Allen, and Richard Hamilton were among
          the players who wore the Air Jordan XIX.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 19"
          onPress={retroNineteenStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan19Screen;
