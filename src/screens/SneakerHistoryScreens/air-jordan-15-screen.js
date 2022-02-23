import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan15Screen = ({navigation}) => {
  const retroFifteenStockX = () => {
    Linking.openURL('https://stockx.com/jordan-15-og-black-varsity-red');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XV',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1999 | Original Price : $150
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Michael Jordan announced his retirement on Jan. 13, 1999, prior to the
          beginning of the lockout-shortened season. So designer Tinker Hatfield
          was once again challenged to design a shoe that MJ would never wear on
          the court. Hatfield again tapped an aspect of MJ's playing style, this
          time drawing inspiration from the X-15 fighter plane, which set speed
          and altitude records through the 1960s. Like its inspiration, the AJ
          XV had an aggressive, sharp-edged silhouette. The upper was built with
          a woven Kevlar material, it had a fully molded Pebax reinforced heel
          counter, and it incorporated a large mesh tongue that stuck out
          (mimicking MJ himself). The heel counter featured numbers significant
          to MJ's career: 23.6.15 represented his jersey number, the number of
          titles he won, and the shoe model. The heel counter extended to the
          outsole and read 2.17, Jordan's birthday. The XV featured a hidden
          speed-lacing system, a seamless dynamic-fit sleeve, rubber herringbone
          traction pods, an injected thermoplastic polyurethane (TPU) external
          heel counter and a breathable leather pattern. The XV also featured a
          full Zoom Air for low-profile cushioning. The original was released in
          four colorways in 1999-2000. The XV was also released in
          player-exclusive colors including White/Green, White/Carolina Blue,
          White/Red and White/Purple. Several Team Jordan athletes sported the
          Air Jordan XV: Mike Bibby, Michael Finley, Ray Allen, Derek Anderson,
          and Reggie Miller.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 15"
          onPress={retroFifteenStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan15Screen;
