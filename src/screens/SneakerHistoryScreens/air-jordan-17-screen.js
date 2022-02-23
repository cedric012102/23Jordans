import React, {useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../styles/air-jordan-screen-style';
import FormButton from '../../components/form-button';

const AirJordan17Screen = ({navigation}) => {
  const retroSeventeenStockX = () => {
    Linking.openURL('https://stockx.com/jordan-17-og-wizards-home');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Air Jordan XVII',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          Designer : Wilson Smith III | Released : 2002 | Original Price : $200
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textBody}>
          When Michael Jordan resigned as the Washington Wizards' president of
          basketball operations and returned to the court, he did so in the Air
          Jordan XVII. Wilson Smith III made a return as well, as the designer
          of the AJ XVII. Smith had a couple of inspirations for this shoe.
          About the time sketching for the AJ XVII started, the Jordan brand
          signed jazz musician Michael Phillips. Smith elicited the smooth lines
          and flow of a jazz solo as his theme for the AJ XVII. He also
          incorporated the fine details of the luxurious Aston Martin
          automobile, and the outsole design is said to resemble the fairways,
          sand traps, and greens of a golf course - testament to one of MJ's
          favorite pastimes. The XVII featured a thermoplastic polyurethane
          (TPU) heel stabilizer, heel and forefoot Tuned Air (pods that adjust
          the amount of air they contain, a first for the Jordan line), a
          dynamic-fit sleeve, hidden quick-lace system, lace locks, a
          full-length composite shank plate, and variable-width lacing for a
          more snug fit. Among Smith's innovations was the inclusion of a
          removable midfoot cover, which allowed the wearer to choose whether
          the laces would be visible. This was a visual carryover from the AJ
          XVI. A CD-ROM and metal briefcase also were included, contributing to
          making the AJ XVII the priciest Air Jordan ever produced at the time,
          with a suggested retail price of $200. It was the first and only Air
          Jordan to break the $200 barrier for all versions until the XX8 in
          2013. One slick innovation lay in the eyelets. If laced properly, the
          wearer could spell out "XVII" with the laces along the medial (inner)
          and lateral (outer) sides of the shoes. The AJ XVII had multiple
          versions. Three colorways were released for mids: White/Blue,
          Black/Black, and White/Red. Another AJ XVII featured metallic copper
          and faux alligator leather on the heel. Three lows were released,
          including a White/Lightning All-Star version. Capping the AJ XVII run
          were three colorways of super low mule slip-ons. In Jordan's first
          year back on the court with the Wizards, he averaged nearly 23 points
          per game. In January 2002, he scored his 30,000th point - fittingly
          against the Chicago Bulls - while wearing the AJ XVII. At his 13th
          All-Star Game, he wore the Air Jordan XVII Low in White/Lightning.
          During the 2001-02 season, Ray Allen, Kobe Bryant, Mike Bibby, Michael
          Finley, and Eddie Jones were among the players who wore the AJ XVII.
        </Text>
        <FormButton
          buttonTitle="Buy Air Jordan 17"
          onPress={retroSeventeenStockX}
        />
      </View>
    </ScrollView>
  );
};

export default AirJordan17Screen;
