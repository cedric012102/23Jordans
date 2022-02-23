import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan5Screen = ({navigation}) => {
  const retroFiveStockX = () => {
    Linking.openURL('https://stockx.com/jordan-5-og-black-metallic-1990');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan V',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1990 | Original Price : $125
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          The Air Jordan V was a statement of Michael Jordans aggressive nature
          on the court. Released in February 1990 for $125, the AJ V featured a
          sharktooth design on the lateral (outer) midsole that designer Tinker
          Hatfield drew from a World War II P-51 Mustang fighter plane. Hatfield
          also reflected the attitude of aggression both in the traction the
          shoe offered, and by molding foam into the upper. The AJ V also
          introduced the concept of iced outsoles of translucent rubber, as well
          as the inclusion of lace-lock toggles. The designer carried over the
          visible Air-Sole unit from the AJ III and AJ IV, as well as the mesh
          from the AJ IV. An embroidered Jumpman logo graced a tongue that, in
          certain colorways, also featured 3M reflectivity on the outside. Air
          Jordan was stitched inside. Another first on the AJ V was an offset
          ankle collar, designed to boost support while offering flexibility
          where a player needed it most. The overall cut of the shoe was higher
          than previous models. The Grape Purple/Emerald colorway was the first
          time those colors had appeared on a basketball shoe. And it brought
          even further attention to MJ and his sneakers at a time when his game
          already was turning heads. During that season, Jordan earned his sixth
          straight All-Star Game appearance, won his fourth straight league
          scoring title, and was named to the All-NBA First Team and
          All-Defensive First Team. He and his Bulls were not able to get past
          Detroit in the conference finals, but they were knocking on the
          proverbial door to something truly special.
        </Text>
        <FormButton buttonTitle="Buy Air Jordan 5" onPress={retroFiveStockX} />
      </View>
    </ScrollView>
  );
};

export default AirJordan5Screen;
