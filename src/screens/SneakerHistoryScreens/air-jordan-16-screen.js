import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan16Screen = ({navigation}) => {
  const retroSixteenStockX = () => {
    Linking.openURL(
      'https://www.goat.com/sneakers/air-jordan-16-3-4-hi-men-136059-061',
    );
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XVI',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Wilson Smith III | Released : 2001 | Original Price : $160
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Much like the man himself, the Air Jordan line went through a
          transition with the AJ XVI. Michael Jordan transitioned into his role
          as a part owner and the president of basketball operations with the
          Washington Wizards, and Wilson Smith III moved into the role of lead
          designer for the Air Jordan XVI. Smith drew inspiration from marching
          boots, high-performance automobiles, and architecture. He designed the
          upper of the AJ XVI with lightweight mesh and included a full-length
          inner booty for sock-like comfort. The shoe was styled with the
          boardroom in mind. It had a patent leather toe rand - taken from the
          AJ XI - and the full-grain leather and breathable mesh upper was
          covered by a unique removable shroud that allowed the AJ XVI to
          transition from the hardwood to the halls of power. The shroud was the
          first such lace cover on an Air Jordan since the AJ VIII and began a
          run of five Air Jordans that would cover the laces. The XVI included a
          magnetic fastening cover for added lockdown. The square toe box was
          very roomy compared to previous Air Jordans, and the shoe returned to
          the visible Air-Sole cushioning and the frosty (translucent) outsole
          that was featured on Air Jordans V, VI and XI. The AJ XVI introduced a
          blow-molded heel and forefoot Zoom Air to the line as the Air Jordan
          progressed toward performance basketball. Four colorways of the AJ XVI
          were released in 2001. The Black/Red and White/Navy versions featured
          patent leather toes and the wheat model had a rich suede upper. The
          Cherrywood color consisted of full-grain leather. Two low versions
          were released as well: White/Red and Black/Black. Considered to be one
          of the most stylish off-court Air Jordans, Michael wore the XVI with a
          suit in ads for his brand back in 2001.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 16"
          onPress={retroSixteenStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan16Screen;
