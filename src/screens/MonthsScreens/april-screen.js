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

const AprilScreen = () => {
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
                userName="April 2"
                name="RETRO 1 HI ‘85 - “Georgetown”"
                postImg={require('../../assets/images/Apr2022/Hoyas.jpg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="April 8"
                name="UNION x AIR JORDAN 2 - Grey Fog"
                postImg={require('../../assets/images/Apr2022/union2.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="April 8"
                name="UNION x AIR JORDAN 2 - Rattan"
                postImg={require('../../assets/images/Apr2022/union2rattan.webp')}
                liked={true}
              />
               <ReleaseDateCard
                userName="April 9"
                name="RETRO 5 - Jade"
                postImg={require('../../assets/images/Apr2022/5jade.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="April 16"
                name="Mens AIR JORDAN 7 SE - Shimmer/Sapphire/Pink"
                postImg={require('../../assets/images/Apr2022/sapphire7se.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="April 21"
                name="AIR JORDAN XXXVI - “Sunset”"
                postImg={require('../../assets/images/Apr2022/Apr21Sunset36.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="April 27"
                name="RETRO 5 - “Easter”"
                postImg={require('../../assets/images/Apr2022/Retro5Easter.webp')}
                liked={true}
              />
              <ReleaseDateCard
                userName="April 28"
                name="Womens XI LOW - White/Pure Violet"
                postImg={require('../../assets/images/Apr2022/11LowPureViolet.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="April 30"
                name="RETRO 13 - Navy/Black"
                postImg={require('../../assets/images/Apr2022/navy13.webp')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default AprilScreen;