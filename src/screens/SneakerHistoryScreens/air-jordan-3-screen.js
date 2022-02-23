import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan3Screen = ({navigation}) => {
  const retroThreeStockX = () => {
    Linking.openURL('https://stockx.com/air-jordan-3-retro-katrina');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan III',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1988 | Original Price : $100
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          If the basketball world was still getting to know Michael Jordan, the
          ad campaign surrounding the Air Jordan III introduced one prominent
          playground baller who knew MJ, and MJs increasingly prominent shoes,
          all too well. Released in 1988, the rollout of the AJ III included TV
          spots featuring actor/director Spike Lee as Mars Blackmon, from his
          1986 film Shes Gotta Have It sparking a series of catch phrases heard
          round the sneaker world. Architect-turned-designer Tinker Hatfield
          took the lead on this, the first of more than two dozen Air Jordans he
          would go on to design. Hatfield sparked some style trends on the AJ
          III that have continued well into the 21st century. Most notably, he
          introduced elephant print overlays on the upper that have resurfaced
          periodically - in reissues of the AJ III as well as other Jordan
          models - ever since. Prior to the AJ III, basketball shoes were mostly
          just basketball shoes. Hatfield knew Jordan was into luxury and rolled
          that into the designs for Jordans signature shoes. While the Air
          Jordan II featured luxurious elements reflected in its Italian
          construction, Hatfield took this concept to a new level, even
          involving Jordan in the search for the right leathers to use on the
          shoe. Another first on the Air Jordan III; it was the first Jordan
          signature sneaker to feature the now-famous Jumpman logo. The
          now-ubiquitous image is a silhouette of Jordan dunking on a 1985 Nike
          poster. Finally, the shoe was the first Air Jordan to feature a
          visible Air-Sole unit under the heel. It retained Nikes Air embroidery
          on the heel, encapsulated Air in the forefoot, and a polyurethane
          midsole for cushioning. Jordan averaged 35 points per game while
          wearing the AJ III to a fourth straight All-Star Game. There, among
          the games elite, MJ earned MVP and a second straight Slam Dunk title,
          this time by flying in from the free-throw line. The AJ III was first
          retrod in 1994.
        </Text>
        <FormButton buttonTitle="Buy Air Jordan 3" onPress={retroThreeStockX} />
      </View>
    </ScrollView>
  );
};

export default AirJordan3Screen;
