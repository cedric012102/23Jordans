import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan20Screen = ({navigation}) => {
  const retroTwentyStockX = () => {
    Linking.openURL(
      'https://www.goat.com/sneakers/air-jordan-20-quickstrike-310455-101',
    );
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XX',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 2005 | Original Price : $175
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Michael Jordan had his grand returns; Tinker Hatfield had his when he
          retook the reins to design the commemorative Air Jordan XX that
          released in 2005. As he had previously done with the AJ XIV, Hatfield
          once again drew on MJ's love of automobiles and motorsports. The XX
          also was the last in a five-model run of Air Jordans that covered the
          laces. The shoe featured a ventilated sphere lining, an integrated
          midfoot support strap, a floating ankle leash, and an impact
          distribution plate. The midfoot strap offered lockdown while hiding
          the lacing system. Jordan introduced in the AJ XX the Independent
          Podular Suspension, a free-moving targeted cushioning technology. The
          heel bore the numbers 85 and 05, signifying the year the Air Jordan
          line was born and the year the XX released. The outsole of the XX
          included 20 herringbone pods that displayed the heritage of the Air
          Jordan franchise. An interesting highlight of the AJ XX was the
          laser-etched logo treatment on the strap, created by Mark Smith, to
          pay homage to Jordan's life. The XX released in three original
          colorways: White/Red/Black, Black/Black/Red, and White/Black/Red.
          Three regional colorways also were released: Chutney/White/Black,
          Red/White/Black, and University Blue/White/Black. A low and a 3/4 also
          were released in 2005. Ray Allen and Carmelo Anthony were among the
          pros who wore the XX in the 2004-05 season.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 20"
          onPress={retroTwentyStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan20Screen;
