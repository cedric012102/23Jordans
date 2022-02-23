import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan4Screen = ({navigation}) => {
  const retroFourStockX = () => {
    Linking.openURL('https://stockx.com/jordan-4-og-black-cement-1989');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan IV',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1989 | Original Price : $110
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Following the success of the Air Jordan III, designer Tinker Hatfield
          delivered one of the more comfortable Air Jordans in the series, the
          Air Jordan IV. The Jumpman logo made its second appearance on the
          tongue but with the word Flight added below it. Carrying over from the
          AJ III were the sculpted midsole and the visible Air unit and padded
          tongue and collar. The sneaker world was introduced to nubuck with the
          upper of the Air Jordan IV. The AJ IV featured mesh for the first
          time, increasing breathability. Multiple areas of the AJ IV featured
          plastic. A lean triangular plastic piece attached to the nubuck heel
          was connected to a hard plastic lace holder. The lace holder at the
          forefoot added lockdown. A plastic heel tab that read Nike Air was
          similar to that of the AJ III. Also on the upper, a plastic grid
          pattern that lay over the breathable mesh and behind the triangular
          piece. Mars Blackmon returned to the ad campaign marketing the shoe,
          continuing a relationship that has continued - to varying degrees -
          well into the 21st century. Ten years after its original release, Nike
          retrod the AJ IV in 1999; it sold out immediately. Wearing the AJ IV,
          MJ was voted to his fifth consecutive All-Star game and won the league
          scoring title for the third consecutive year. One of the most
          memorable AJ IV moments was when Michael hit the series-clinching,
          hanging jumper over Clevelands Craig Ehlo in the first round of the
          playoffs - better known as The Shot
        </Text>
        <FormButton buttonTitle="Buy Air Jordan 4" onPress={retroFourStockX} />
      </View>
    </ScrollView>
  );
};

export default AirJordan4Screen;
