import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan14Screen = ({navigation}) => {
  const retroFourteenStockX = () => {
    Linking.openURL('https://stockx.com/jordan-14-og-last-shot-1999');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XIV',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield and Mark Smith | Released : 1998 | Original
          Price : $150
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Tinker Hatfield teamed up with Mark Smith on the Air Jordan XIV.
          Introduced during the 1998 NBA Finals, it would be the last shoe
          Michael Jordan would wear as a Chicago Bull. MJ hit the famous Last
          Shot in the Black/Red colorway of the AJ XIV, sinking the Utah Jazz
          for the second straight time in the finals. Seven years later, Jordan
          brand athletes rocked the Retro XIV when it began hitting retail
          shelves. One hot OG colorway, the Indiglos, have yet to be
          re-released. Hatfield and Smith modeled the XIV after MJs love for
          exotic sports cars, inspired specifically by a Ferrari. The AJ XIV
          featured a Ferrari-like shield featuring a Jumpman logo, just one of
          seven Jumpman logos on each shoe; a total of 14 per pair. The logo is
          visible on the side heel, outsole, insole, back heel, toe, and on the
          metal lace tips. The shoes asymmetrical collar was designed to blend
          ankle support with flexibility, while Hatfield and Smith worked
          breathable mesh vents into the outsole. They also included dual Zoom
          Air units into the outsole, and the low-profile heel and forefoot gave
          the AJ XIV a sleek silhouette as well as a comfortable ride.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 14"
          onPress={retroFourteenStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan14Screen;
