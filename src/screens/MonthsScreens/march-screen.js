import React, {useState} from "react";
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    Alert,
    ScrollView,
    TouchableOpacity,
    Linking,
    ActionSheetIOS,
    Platform,
  } from 'react-native';
import {Container} from '../../../styles/FeedStyles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ReleaseDateCard} from '../../components/release-date-card';

const MarchScreen = () => {
    const [loading, setLoading] = useState(true);

    if (loading) {
      setLoading(false);
    }
  
    return (
      <SafeAreaView style={{flex: 1}}>
        {loading ? (
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{alignItems: 'center'}}
          >
            <SkeletonPlaceholder>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 60, height: 60, borderRadius: 50}} />
                <View style={{marginLeft: 20}}>
                  <View style={{width: 120, height: 20, borderRadius: 4}} />
                  <View
                    style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                  />
                </View>
              </View>
              <View style={{marginTop: 10, marginBottom: 30}}>
                <View style={{width: 300, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
                />
                <View
                  style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
                />
              </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 60, height: 60, borderRadius: 50}} />
                <View style={{marginLeft: 20}}>
                  <View style={{width: 120, height: 20, borderRadius: 4}} />
                  <View
                    style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                  />
                </View>
              </View>
              <View style={{marginTop: 10, marginBottom: 30}}>
                <View style={{width: 300, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
                />
                <View
                  style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
                />
              </View>
            </SkeletonPlaceholder>
          </ScrollView>
        ) : (
          <ScrollView>
            <Container>
              <ReleaseDateCard
                userName="March 1"
                name="RETRO 12 - “Playoffs”"
                postImg={require('../../assets/images/retro12playoffs.webp')}
                liked={true}
              />
              <ReleaseDateCard
                userName="March 5"
                name="RETRO 6 - White/UNC"
                postImg={require('../../assets/images/nc6.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 8"
                name="Womens RETRO 6 - White/Mint"
                postImg={require('../../assets/images/mint6.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 12"
                name="RETRO 1 - “Rebellionaire”"
                postImg={require('../../assets/images/rebellionaire.png')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 19"
                name="RETRO 4 - “Zen Master”"
                postImg={require('../../assets/images/zenmaster4.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 24"
                name="RETRO 8 - Rui Hachimura"
                postImg={require('../../assets/images/RuiHachimura8.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 25"
                name="RETRO 5 - Jade"
                postImg={require('../../assets/images/jade5.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 26"
                name="Mens RETRO 3 Canvas - Muslin/Sail"
                postImg={require('../../assets/images/canvas3.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 30"
                name="RETRO 7 SE - Shimmer/Sapphire"
                postImg={require('../../assets/images/sapphire7se.jpeg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default MarchScreen;
