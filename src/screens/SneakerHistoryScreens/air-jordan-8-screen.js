import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan8Screen = ({navigation}) => {
  const retroEightStockX = () => {
    Linking.openURL('https://stockx.com/air-jordan-8-og-bugs-bunny-1993');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan VIII',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1993 | Original Price : $125
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          It was the third time hed done it, but it was still a first for
          Michael Jordan. It was 1993 when MJ won his third NBA championship.
          But it was the first three-peat of his storied career. Earlier, in
          February, MJ saw the launch of his Air Jordan VIII. This edition of
          his signature footwear, the heaviest ever in the line, featured a
          splash of color along the heel and on the midsole and outsole. The
          brand returned to its padded collar from the Huarache style of the
          VII, and the inner booty sock returned as well. Also returning was
          Bugs Bunny in the shoes marketing campaign. One aesthetic twist was
          the carpeted circular Jumpman logo on the tongue; the only such
          appearance in the Jordan line. The shoe consisted of a thermoplastic
          polyurethane (TPU) support and a polycarbonate plate, along with
          anti-inversion crossing straps to lock down the foot. Extra padding
          added protection but also added weight. Jordan originally produced
          three colorways of the AJ VIII: White/Black/Red (leather), and two
          suede versions, Black/Red and Black/Aqua. The Aqua, which MJ wore in
          the February 1993 All-Star Game, remains highly sought after, selling
          out immediately when it was reissued in 2007. The player netted
          first-team All-NBA, first-team All-Defense, and made his eighth
          consecutive All-Star Game. Wearing the AJ VIII, MJ scored 32.6 points
          per game to garner his seventh straight scoring title and was named
          NBA Finals MVP for the third straight year.
        </Text>
        <FormButton buttonTitle="Buy Air Jordan 8" onPress={retroEightStockX} />
      </View>
    </ScrollView>
  );
};

export default AirJordan8Screen;
