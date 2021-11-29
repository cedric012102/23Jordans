import React, {useContext, useEffect, useState} from 'react';
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
import {styles} from './styles/home-screen-style';
import FormButton from '../components/form-button';
import {AuthContext} from '../navigation/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PostCard} from '../components/post-card';
import {Container} from '../../styles/FeedStyles';
import firestore from '@firebase/firestore';
import storage from '@react-native-firebase/storage';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ReleaseDateCard} from '../components/release-date-card';

const pineGreen = () => {
  Linking.openURL('https://stockx.com/air-jordan-3-retro-pine-green');
};

const lowPink = () => {
  Linking.openURL('https://stockx.com/air-jordan-14-retro-low-shocking-pink-w');
};

const offWhiteRed = () => {
  Linking.openURL(
    'https://stockx.com/air-jordan-2-retro-low-sp-off-white-white-red',
  );
};

const offWhiteBlue = () => {
  Linking.openURL(
    'https://stockx.com/air-jordan-2-retro-low-sp-off-white-black-blue',
  );
};

const royalty = () => {
  Linking.openURL(
    'https://www.footlocker.com/en/release-dates/jordan/T8013170.html',
  );
};

const royaltyNike = () => {
  Linking.openURL(
    'https://www.nike.com/launch/t/air-jordan-12-royalty?cp=usns_aff_nike_content_PID_4441350_rewardStyle&cid=4942550&cjevent=73e61d5b43eb11ec800f01740a1c0e0c',
  );
};

const bordeauxNike = () => {
  Linking.openURL(
    'https://www.nike.com/launch/t/air-jordan-1-bordeaux?cp=usns_aff_nike_content_PID_4441350_rewardStyle&cid=4942550&cjevent=2313218143ef11ec817801950a1c0e0d',
  );
};

const bordeauxFootlocker = () => {
  Linking.openURL(
    'https://www.footlocker.com/en/release-dates/jordan/55088611.html',
  );
};

const goreTexNike = () => {
  Linking.openURL(
    'https://www.nike.com/launch/t/air-jordan-1-element-goretex-particle-grey?cp=usns_aff_nike_content_PID_4441350_rewardStyle&cid=4942550&cjevent=cf06f67943f411ec81945e480a1c0e13',
  );
};

const retroBootsFootlocker = () => {
  Linking.openURL(
    'https://www.footlocker.com/en/release-dates/jordan/R4491025.html',
  );
};

const retroBootsNike = () => {
  Linking.openURL(
    'https://www.nike.com/launch/t/air-jordan-9-black-and-light-gum',
  );
};

const animalInstinctNike = () => {
  Linking.openURL(
    'https://www.nike.com/launch/t/womens-air-jordan-11-black-and-white?cp=usns_aff_nike_content_PID_4441350_rewardStyle&cid=4942550&cjevent=4946a19643f411ec81945e470a1c0e13',
  );
};

const camo = () => {
  Linking.openURL('https://stockx.com/air-jordan-3-retro-low-multi-camo');
};

function royaltyOnShowActionSheet() {
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Footlocker', 'SNKRS'],
        cancelButtonIndex: 0,
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          royalty();
        } else if (buttonIndex === 2) {
          royaltyNike();
        }
      },
    );
  }
}

function bordeauxOnShowActionSheet() {
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Footlocker', 'SNKRS'],
        cancelButtonIndex: 0,
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          bordeauxFootlocker();
        } else if (buttonIndex === 2) {
          bordeauxNike();
        }
      },
    );
  }
}

function bootsOnShowActionSheet() {
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Footlocker', 'SNKRS'],
        cancelButtonIndex: 0,
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          retroBootsFootlocker();
        } else if (buttonIndex === 2) {
          retroBootsNike();
        }
      },
    );
  }
}

const Posts = [
  {
    id: '1',
    userName: 'October 30',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Retro 3 - Pine Green',
    postImg: require('../assets/images/3pine.jpg'),
    liked: true,
    link: pineGreen,
  },
  {
    id: '2',
    userName: 'November 4',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Wmns Retro 14 Low - Pink',
    postImg: require('../assets/images/Wmns14lowPink.jpg'),
    liked: true,
    link: lowPink,
    // likes: '8',
    // comments: '0',
  },
  {
    id: '3',
    userName: 'November 12',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Off White AJ2 Low - Wh/Red',
    postImg: require('../assets/images/aj2red.jpeg'),
    liked: true,
    link: offWhiteRed,
    // likes: '1',
    // comments: '0',
  },
  {
    id: '4',
    userName: 'November 12',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Off White AJ2 Low - Wh/Blue',
    postImg: require('../assets/images/aj2blue.jpeg'),
    liked: true,
    link: offWhiteBlue,
    // likes: '22',
    // comments: '4',
  },
  {
    id: '5',
    userName: 'November 13',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Retro 12 - W/Blk/Gold',
    postImg: require('../assets/images/jordan-12-royalty.jpg'),
    liked: true,
    link: royaltyOnShowActionSheet,
    // likes: '0',
    // comments: '0',
  },
  {
    id: '6',
    userName: 'November 20',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Retro 1 - Bordeaux',
    postImg: require('../assets/images/Air-Jordan-1-Bordeaux.jpg'),
    liked: true,
    link: bordeauxOnShowActionSheet,
    // likes: '0',
    // comments: '0',
  },
  {
    id: '7',
    userName: 'November 23',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Retro 1 - Gore Tex',
    postImg: require('../assets/images/GoreTex.jpeg'),
    liked: true,
    link: goreTexNike,
    // likes: '0',
    // comments: '0',
  },
  {
    id: '8',
    userName: 'November 24',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'AJ 9 Boots',
    postImg: require('../assets/images/ajboots.jpeg'),
    liked: true,
    link: bootsOnShowActionSheet,
    // likes: '0',
    // comments: '0',
  },
  {
    id: '9',
    userName: 'November 26',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Wmns XI - Animal Instinct',
    postImg: require('../assets/images/air-jordan-11-animal-instinct.jpeg'),
    liked: true,
    link: animalInstinctNike,
    // likes: '0',
    // comments: '0',
  },
  {
    id: '10',
    userName: 'November 29',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Retro 3 - Camo',
    postImg: require('../assets/images/Air-Jordan-3-Camo.jpeg'),
    liked: true,
    link: camo,
    // likes: '0',
    // comments: '0',
  },
];

const HomeScreen = ({navigation}) => {
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
              userName="October 30"
              name="Retro 3 - Pine Green"
              postImg={require('../assets/images/3pine.jpg')}
              link={pineGreen}
              liked={true}
            />
            <ReleaseDateCard
              userName="November 4"
              name="Wmns Retro 14 Low - Pink"
              postImg={require('../assets/images/Wmns14lowPink.jpg')}
              link={lowPink}
              liked={true}
            />
            <ReleaseDateCard
              userName="November 12"
              name="Off White AJ2 Low - Wh/Red"
              postImg={require('../assets/images/aj2red.jpeg')}
              link={offWhiteRed}
              liked={true}
            />
            <ReleaseDateCard
              userName="November 12"
              name="Off White AJ2 Low - Wh/Blue"
              postImg={require('../assets/images/aj2blue.jpeg')}
              link={offWhiteBlue}
              liked={true}
            />
            <ReleaseDateCard
              userName="November 13"
              name="Retro 12 - W/Blk/Gold"
              postImg={require('../assets/images/jordan-12-royalty.jpg')}
              link={royaltyOnShowActionSheet}
              liked={true}
            />
            <ReleaseDateCard
              userName="November 20"
              name="Retro 1 - Bordeaux"
              postImg={require('../assets/images/Air-Jordan-1-Bordeaux.jpg')}
              link={bordeauxOnShowActionSheet}
              liked={true}
            />
            <ReleaseDateCard
              userName="November 23"
              name="Retro 1 - Gore Tex"
              postImg={require('../assets/images/GoreTex.jpeg')}
              link={goreTexNike}
              liked={true}
            />
            <ReleaseDateCard
              userName="November 24"
              name="AJ 9 Boots"
              postImg={require('../assets/images/ajboots.jpeg')}
              link={bootsOnShowActionSheet}
              liked={true}
            />
            <ReleaseDateCard
              userName="November 26"
              name="Wmns XI - Animal Instinct"
              postImg={require('../assets/images/air-jordan-11-animal-instinct.jpeg')}
              link={animalInstinctNike}
              liked={true}
            />
            <ReleaseDateCard
              userName="November 29"
              name="Retro 3 - Camo"
              postImg={require('../assets/images/Air-Jordan-3-Camo.jpeg')}
              link={camo}
              liked={true}
            />
          </Container>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;