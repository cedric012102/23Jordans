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

const FebruaryScreen = () => {
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
                userName="February 3"
                name="Air Jordan 1 Low OG CNY “Year of the Tiger”"
                postImg={require('../../assets/images/Feb2022/feb36lowcny.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 8"
                name="Air Jordan 1 Mid “Diamond”"
                postImg={require('../../assets/images/Feb2022/feb8mid1diamond.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 8"
                name="Air Jordan 1 Low “Diamond”"
                postImg={require('../../assets/images/Feb2022/feb81lowdiamond.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="February 10"
                name="Air Jordan 5 Low “Arctic Orange”"
                postImg={require('../../assets/images/Feb2022/feb105loworange.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 11"
                name="Air Jordan 6-17-23 “Motorsport”"
                postImg={require('../../assets/images/Feb2022/feb11motorsport6.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 11"
                name="Air Jordan 5 “Racer Blue”"
                postImg={require('../../assets/images/Feb2022/feb11racerblue5.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 15"
                name="Air Jordan 1 High OG “Dark Marina Blue”"
                postImg={require('../../assets/images/Feb2022/feb15marinablue1.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 16"
                name="Honor The Gift x Jordan Why Not Zer0.5"
                postImg={require('../../assets/images/Feb2022/feb16whynot.webp')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 18"
                name="Air Jordan 3 “Cardinal”"
                postImg={require('../../assets/images/Feb2022/feb18cardinal3.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 21"
                name="Air Jordan 1 Low “Spider-Man”"
                postImg={require('../../assets/images/Feb2022/feb21low1spiderman.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 23"
                name="Air Jordan 1 Mid"
                postImg={require('../../assets/images/Feb2022/feb23midclad1.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="February 24"
                name="RETRO 1 - Univ. Gold/Light Bordeaux"
                postImg={require('../../assets/images/Feb2022/brotherhood.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="February 24"
                name="RETRO 1 LOW - Chinese New Year"
                postImg={require('../../assets/images/Feb2022/chinese.jpeg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default FebruaryScreen;
