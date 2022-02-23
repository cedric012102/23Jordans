import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan2Screen = ({navigation}) => {
  const retroTwoStockX = () => {
    Linking.openURL(
      'https://www.goat.com/sneakers/air-jordan-2-og-chicago-1986-4360',
    );
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan II',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Bruce Kilgore | Released : 1986 | Original Price : $100
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Nike faced a unique challenge following the unprecedented success of
          the original Air Jordan; how to follow it up. The popularity of the
          shoes namesake, Michael Jordan, already had begun outgrowing his home
          country, and Nike went to Italy to produce the Air Jordan II. While
          this nod to internationally renowned Italian style was the first - and
          to date, only - Air Jordan produced in that country, it wasnt the only
          first for the franchise. Bruce Kilgore, who also had designed the Air
          Force One, made the AJ II the first to not feature Nikes familiar
          Swoosh logo. Nike appeared across the top of the heel counter, and the
          Wings logo of the original Air Jordan was on the tongue. The AJ II
          shared a silhouette with the Nike Air Python that released in 1987,
          including a faux lizard skin upper and swooping lines that resembled
          those of a sports car (which would factor prominently into the Jordan
          line in years to come). Known among sneaker collectors as the first
          luxury basketball shoe, the AJ II paved the way for the heat that
          would accompany the Air Jordan III. In the testing phase for the AJ
          II, Jordan wore a prototype that featured the upper of the original
          Air Jordan fused with the cushioning of the AJ II. The new edition
          included a full-length Air-Sole unit meant to add extra cushioning for
          Jordans sore feet. He only got to wear the AJ II for 18 games due to a
          broken foot.
        </Text>
        <FormButton buttonTitle="Buy Air Jordan 2" onPress={retroTwoStockX} />
      </View>
    </ScrollView>
  );
};

export default AirJordan2Screen;
