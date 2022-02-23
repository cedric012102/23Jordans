import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan13Screen = ({navigation}) => {
  const retroThirteenStockX = () => {
    Linking.openURL('https://stockx.com/jordan-13-og-bred-1998');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XIII',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 1997 | Original Price : $150
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Michael Jordan attacked the court - and opponents - with the
          quickness, power, and ferocity of a predatory cat. Tinker Hatfield
          tapped into this feel for the Air Jordan XIII, not even realizing at
          the time that some of MJs friends already had been calling him the
          Black Cat. Released on Nov. 1, 1997, the Air Jordan XIII was loaded
          with both performance and design elements. Perhaps the most prominent
          feature was a hologram on the upper that resembled the eye of a
          panther, while the outsole featured a paw-like design. The XIII also
          featured Zoom Air in the heel and forefoot, and a Phylon
          lightweight-foam midsole. That and podular tooling made this possibly
          the most comfortable Air Jordan in the series. A carbon fiber shank in
          the midfoot lent torsional rigidity, and an asymmetrical collar was
          designed to balance ankle support with flexibility needed for hard
          cuts. The XIII originally was released in five colorways for the mid
          and two for the low. MJ favored the white-based colorways at home and
          the black-based on the road. He wore the mid through the 1997-98
          season and into the playoffs (until he introduced the AJ XIV in the
          1998 finals against Utah, beating the Jazz for a third straight
          championship). That season, MJ was voted to his 12th All-Star Game,
          where he again earned MVP. He also won his record-setting 10th
          straight league scoring title and was named first-team All-NBA and
          first-team All-Defense. MJs sixth NBA championship would net him his
          sixth NBA Finals MVP honor as well.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 13"
          onPress={retroThirteenStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan13Screen;
