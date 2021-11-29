import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PostCard from '../components/post-card';
import {Container} from '../../styles/FeedStyles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import jordans from '../assets/data/shoes';
import {HistoryCard} from '../components/history-card';

const History = ({navigation}) => {
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
            <HistoryCard
              userName="Air Jordan I"
              name="Notorious"
              postImg={require('../assets/images/AirJordan1.jpg')}
              routeName={'AirJordan1'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan II"
              name="Italion Stallion"
              postImg={require('../assets/images/AirJordan2.jpg')}
              routeName={'AirJordan2'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan III"
              name="Gotta Be the Shoes"
              postImg={require('../assets/images/AirJordan3.jpg')}
              routeName={'AirJordan3'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan IV"
              name="Taking Flight"
              postImg={require('../assets/images/AirJordan4.jpg')}
              routeName={'AirJordan4'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan V"
              name="The Fighter"
              postImg={require('../assets/images/AirJordan5.jpg')}
              routeName={'AirJordan5'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan VI"
              name="Promised Land"
              postImg={require('../assets/images/AirJordan6.jpg')}
              routeName={'AirJordan6'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan VII"
              name="Pure Gold"
              postImg={require('../assets/images/AirJordan7.jpg')}
              routeName={'AirJordan7'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan VIII"
              name="Strap In"
              postImg={require('../assets/images/AirJordan8.jpg')}
              routeName={'AirJordan8'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan IX"
              name="Perfect Harmony"
              postImg={require('../assets/images/AirJordan9.jpg')}
              routeName={'AirJordan9'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan X"
              name="The Legacy Continues"
              postImg={require('../assets/images/AirJordan10.jpg')}
              routeName={'AirJordan10'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XI"
              name="Class Act"
              postImg={require('../assets/images/AirJordan11.jpg')}
              routeName={'AirJordan11'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XII"
              name="The Dynasty Continues"
              postImg={require('../assets/images/AirJordan12.jpg')}
              routeName={'AirJordan12'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XIII"
              name="Black Cat Pounces"
              postImg={require('../assets/images/AirJordan13.jpg')}
              routeName={'AirJordan13'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XIV"
              name="Race Ready"
              postImg={require('../assets/images/AirJordan14.jpg')}
              routeName={'AirJordan14'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XV"
              name="Speed of Sound"
              postImg={require('../assets/images/AirJordan15.jpeg')}
              routeName={'AirJordan15'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XVI"
              name="Marching On"
              postImg={require('../assets/images/AirJordan16.jpeg')}
              routeName={'AirJordan16'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XVII"
              name="Jazzed Up"
              postImg={require('../assets/images/AirJordan17.jpeg')}
              routeName={'AirJordan17'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XVIII"
              name="Last Dance"
              postImg={require('../assets/images/AirJordan18.jpeg')}
              routeName={'AirJordan18'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XIX"
              name="Full Flex"
              postImg={require('../assets/images/AirJordan19.jpeg')}
              routeName={'AirJordan19'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XX"
              name="Living Greatness"
              postImg={require('../assets/images/AirJordan20.jpeg')}
              routeName={'AirJordan20'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XXI"
              name="Performance Luxury DNA"
              postImg={require('../assets/images/AirJordan21.jpeg')}
              routeName={'AirJordan21'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XXII"
              name="Hit the Afterburners"
              postImg={require('../assets/images/AirJordan22.jpeg')}
              routeName={'AirJordan22'}
              liked={true}
            />
            <HistoryCard
              userName="Air Jordan XXIII"
              name="The Number of Greatness"
              postImg={require('../assets/images/AirJordan23.jpeg')}
              routeName={'AirJordan23'}
              liked={true}
            />
          </Container>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default History;
