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

const JuneScreen = () => {
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
                userName="June 4"
                name="RETRO 6 - White/Red"
                postImg={require('../../assets/images/Jun2022/WhiteRed6.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="June 11"
                name="RETRO 1 - Volt/Black/Sail"
                postImg={require('../../assets/images/Jun2022/VoltBlackSail1.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="June 18"
                name="RETRO 3 - White/Iris/Cement"
                postImg={require('../../assets/images/Jun2022/WhiteIrisCement3.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="June 24"
                name="RETRO 4 - Grey/Infrared"
                postImg={require('../../assets/images/Jun2022/GreyInfrared4.webp')}
                liked={true}
              />
              <ReleaseDateCard
                userName="June 25"
                name="RETRO 4 - White/Black/Grey"
                postImg={require('../../assets/images/Jun2022/WhiteBlackGrey4.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="Date Unknown"
                name="RETRO 1 HI OG - White/Black/Grey"
                postImg={require('../../assets/images/Jun2022/retro1highwhiteblackgrey.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="Date Unknown"
                name="RETRO 5 - Reflective Silver/Green Bean"
                postImg={require('../../assets/images/Jun2022/Retro5ReflectiveSilverGreen.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="Date Unknown"
                name="RETRO 3 - Black/Fossil Stone/Sail"
                postImg={require('../../assets/images/Jun2022/BlackFossil3.jpeg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default JuneScreen;