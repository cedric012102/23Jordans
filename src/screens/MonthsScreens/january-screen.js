import React, {useState} from "react";
import {
    View,
    SafeAreaView,
    ScrollView,
  } from 'react-native';
import {Container} from '../../../styles/FeedStyles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ReleaseDateCard} from '../../components/release-date-card';

const JanuaryScreen = () => {
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
                userName="January 2"
                name="Air Jordan 1 Low “Light Iron Ore”"
                postImg={require('../../assets/images/Jan2022/jan2LightIronOre.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 7"
                name="Air Jordan 13 “Court Purple”"
                postImg={require('../../assets/images/Jan2022/jan7courtpurple13.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 10"
                name="Air Jordan 1 Mid “College Grey”"
                postImg={require('../../assets/images/Jan2022/jan10mid1collegegray.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 12"
                name="Air Jordan 1 Mid “College Grey”"
                postImg={require('../../assets/images/Jan2022/jan12lowbredtoe1.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 14"
                name="Air Jordan 4 “Red Thunder”"
                postImg={require('../../assets/images/Jan2022/jan144redthunder.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 17"
                name="Air Jordan 1 Mid"
                postImg={require('../../assets/images/Jan2022/jan17midblack1.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 19"
                name="Air Jordan 1 Low OG Golf “Triple White”"
                postImg={require('../../assets/images/Jan2022/jan19golftriplewhite1.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 19"
                name="Air Jordan 1 Low OG Golf"
                postImg={require('../../assets/images/Jan2022/jan19lowgolf1.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 19"
                name="Air Jordan 1 Low OG Golf “Shadow”"
                postImg={require('../../assets/images/Jan2022/jan19lowgolfshadow1.jpeg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default JanuaryScreen;