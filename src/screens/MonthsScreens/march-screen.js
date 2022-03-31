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
                userName="March 5"
                name="RETRO 6 - White/UNC"
                postImg={require('../../assets/images/March2022/nc6.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 8"
                name="Womens RETRO 6 - White/Mint"
                postImg={require('../../assets/images/March2022/mint6.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 11"
                name="RETRO 12 - “Playoffs”"
                postImg={require('../../assets/images/March2022/retro12playoffs.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 19"
                name="RETRO 1 - “Rebellionaire”"
                postImg={require('../../assets/images/March2022/rebellionaire.png')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 19"
                name="RETRO 13 - White/Yellow"
                postImg={require('../../assets/images/March2022/13WhiteYellow.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 24"
                name="Jordan 8 Retro SE Rui Hachimura"
                postImg={require('../../assets/images/March2022/RuiHachimura8.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 25"
                name="Mens RETRO 3 Canvas - Muslin/Sail"
                postImg={require('../../assets/images/March2022/canvas3.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 31"
                name="AIR JORDAN 36 - Black/Infrared"
                postImg={require('../../assets/images/March2022/36Bred.jpg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default MarchScreen;
