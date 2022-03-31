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

const MayScreen = () => {
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
                userName="May 9"
                name="RETRO 9 - Chile Red"
                postImg={require('../../assets/images/May2022/ChileRed9.webp')}
                liked={true}
              />
            <ReleaseDateCard
                userName="May 11"
                name="RETRO 6 - White/Navy"
                postImg={require('../../assets/images/May2022/MidnightNavy6.jpeg')}
                liked={true}
              />
            <ReleaseDateCard
                userName="May 14"
                name="RETRO 11 LOW - “72-10”"
                postImg={require('../../assets/images/May2022/7210Low.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="May 15"
                name="Womens RETRO 3 - Neapolitan"
                postImg={require('../../assets/images/May2022/May15Neapolitan3.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="May 20"
                name="CLOT x AJ 5 LOW"
                postImg={require('../../assets/images/May2022/clot5.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="May 25"
                name="RETRO 1 HI OG - White/Red"
                postImg={require('../../assets/images/May2022/May25Retro1WhiteRed.jpg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default MayScreen;