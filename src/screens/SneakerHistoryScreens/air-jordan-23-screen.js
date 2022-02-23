import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan23Screen = ({navigation}) => {
  const retroTwentyThreeStockX = () => {
    Linking.openURL('https://www.goat.com/sneakers/air-jordan-23-318376-001');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XXIII',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : 2008 | Original Price : $185
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Since Michael Jordan made 23 one of the most famous numbers in sports
          history, it made sense that the Air Jordan XX3 would be one of the
          most anticipated sneakers in footwear history. Tinker Hatfield
          returned to lead the design, and his take included new technology and
          craftsmanship to deliver a timeless addition to the Air Jordan
          lineage. The XX3 was the first basketball shoe to incorporate the Nike
          Considered construction system, which was developed to reduce waste
          and use environmentally friendly materials without affecting the
          performance of the shoe. MJ's initials are stitched on the upper of
          each colorway. The shoe features a hand-stitched upper, articulated
          chassis, full-length quilted bootie, carbon fiber shank plate, and
          reinforced quarter panels. It has the lowest-profile midsole of any of
          the Air Jordans, adding a responsive performance element. Zoom Air and
          tuned IPS pillars combined to lend cushioning. The tongue of each shoe
          features different logos: the left has a Jumpman and the right has a
          "23" logo. The outsole was modeled after MJ's thumbprint. This also
          was seen on the inside of the tongue to represent the impact and
          identity of the man himself, whose signature was included on the toe
          box. To create buzz around the XX3, 23 pairs of the Titanium model
          were released at the top 23 locations in the United States, retailing
          for $230 on Jan. 25, 2008. An All-Star colorway was released that
          February, and other colorways included the White/Red,
          Grey/White/Black/Gold, and Stealth that released shortly after. A
          series of three more versions were produced to commemorate MJ's three
          teams: Black/University Blue/White for UNC, Black/Red/White for the
          Bulls, and Black/Royal/White for the Wizards. After the general
          releases, 23 pairs of a Black/Red XX3 were released at the top 23
          locations just like the Titanium launch. Chris Paul, Ray Allen, and
          Carmelo Anthony wore the XX3 in the NBA All-Star game. The XX3 was the
          last numbered Air Jordan shoe in the series for a while, as the next
          four Air Jordans would be named for the year each was created.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 23"
          onPress={retroTwentyThreeStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan23Screen;
