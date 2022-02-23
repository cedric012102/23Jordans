import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan12Screen = ({navigation}) => {
  const retroTwelveStockX = () => {
    Linking.openURL('https://stockx.com/jordan-12-og-taxi-1997');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XII',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Tinker Hatfield | Released : November 1996 | Original Price
          : $135
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Tinker Hatfield drew from a very different area in designing the Air
          Jordan XII, taking inspiration from the Japanese flag. The AJ XII was
          clean and simple. The rich leather upper was stitched to resemble a
          rising sun, while faux reptile leather comprised the toe and accent
          overlays. The AJ XII featured the slogan TWO 3 down the tongue, metal
          lace loops with Jumpman logos, and a pull tab that ran up the entire
          heel that read, QUALITY INSPIRED BY THE GREATEST PLAYER EVER. This was
          the first Air Jordan to feature an ultra-responsive Zoom Air unit, as
          well as lateral and medial support panels designed to work together to
          create one of the most durable shoes in the signature series. The shoe
          also had a full-length carbon fiber shank like its predecessor.
          Originally released in five colorways, the AJ XIIs offerings included
          the Black/Red that MJ wore during Game 5 of the 1997 NBA Finals
          against the Utah Jazz, a game that came to be known as The Flu Game.
          Michael had fallen ill in the middle of the night prior to that game,
          and his appearance was questionable as he lay on a table in the locker
          room right up until game time. But he dragged himself up and onto the
          court. Not only did he play, he created a performance for the ages as
          he led all scorers with 38 points, including a big 3-pointer that put
          Chicago up for good with 25 seconds to play. The shoe he wore during
          that game is known among collectors as Flu Game XII. Other colors of
          the AJ XII saw the floor during that season as well. Jordan wore the
          Black/White shoe during 1997 playoffs. With the AJ XII on his feet, MJ
          made his 11th All-Star game, won his ninth NBA scoring title, and was
          named first-team All-NBA and first-team All-Defense. He won his fifth
          NBA title and NBA Finals MVP while wearing the XII. Beginning in 2003,
          the Air Jordan XII was re-released in several additional colors.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 12"
          onPress={retroTwelveStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan12Screen;
