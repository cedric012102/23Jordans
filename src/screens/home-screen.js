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

const coolGreyNike = () => {
  Linking.openURL(
    'https://www.nike.com/launch/t/air-jordan-11-cool-grey?cp=usns_aff_nike_content_PID_4441350_rewardStyle&cid=4942550&cjevent=c65ca8be516711ec81b508380a1c0e0e',
  );
};

const lowBlackToeNike = () => {
  Linking.openURL(
    'https://www.nike.com/t/air-jordan-1-low-shoes-NmRl7V/553558-612?cid=4942550&cp=usns_aff_nike_content_PID_4441350_rewardStyle&cjevent=5af86d68516811ec836807280a1c0e0b',
  );
};

const redThunder = () => {
  Linking.openURL(
    'https://stockx.com/air-jordan-4-retro-red-thunder',
  );
};

const bredPatentLeather = () => {
  Linking.openURL(
    'https://stockx.com/air-jordan-1-retro-high-og-bred-patent',
  );
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
    userName: 'December 4',
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
    id: '2',
    userName: 'December 8',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'AJ 1 Low',
    postImg: require('../assets/images/aj1lowbred.jpeg'),
    liked: true,
    link: lowBlackToeNike,
    // likes: '0',
    // comments: '0',
  },
  {
    id: '3',
    userName: 'December 11',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Retro 11 - Cool Grey',
    postImg: require('../assets/images/coolgrey11.jpeg'),
    liked: true,
    link: coolGreyNike,
    // likes: '0',
    // comments: '0',
  },
  {
    id: '4',
    userName: 'December 23',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Retro 4 - Red Thunder',
    postImg: require('../assets/images/redthunder4.jpeg'),
    liked: true,
    link: redThunder,
    // likes: '0',
    // comments: '0',
  },
  {
    id: '5',
    userName: 'December 30',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Retro 1 Patent - Blk/Red',
    postImg: require('../assets/images/bredpatent1.jpeg'),
    liked: true,
    link: bredPatentLeather,
    // likes: '0',
    // comments: '0',
  },
  {
    id: '6',
    userName: 'October 30',
    userImg: require('../assets/users/jordanlogo.webp'),
    postTime: 'Buy Other Kicks',
    post: 'Retro 3 - Pine Green',
    postImg: require('../assets/images/3pine.jpg'),
    liked: true,
    link: pineGreen,
  },
  {
    id: '7',
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
    id: '8',
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
    id: '9',
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
    id: '10',
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
    id: '11',
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
    id: '12',
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
    id: '13',
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
    id: '14',
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
              userName="December 50"
              name="Retro 1 - Gore Tex"
              postImg={require('../assets/images/GoreTex.jpeg')}
              link={goreTexNike}
              liked={true}
            />
            <ReleaseDateCard
              userName="December 8"
              name="AJ 1 Low - Wh/Black/Red"
              postImg={require('../assets/images/aj1lowbred.jpeg')}
              link={lowBlackToeNike}
              liked={true}
            />
            <ReleaseDateCard
              userName="December 11"
              name="Retro 11 - Cool Grey"
              postImg={require('../assets/images/coolgrey11.jpeg')}
              link={coolGreyNike}
              liked={true}
            />
            <ReleaseDateCard
              userName="December 23"
              name="Retro 4 - Red Thunder"
              postImg={require('../assets/images/redthunder4.jpeg')}
              link={redThunder}
              liked={true}
            />
            <ReleaseDateCard
              userName="December 30"
              name="Retro 1 Patent - Blk/Red"
              postImg={require('../assets/images/bredpatent1.jpeg')}
              link={bredPatentLeather}
              liked={true}
            />
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
              userName="November 2"
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


// import React, {useState, useCallback} from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   ScrollView,
//   RefreshControl,
//   ActivityIndicator,
//   Alert,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';

// // query helper with built in cache
// import {useQuery} from 'react-query';

// import {HomeCard} from '../components/home-card';

// // utility functions to query API
// import {generateSixRandom, searchHero} from '../config/api-key';

// import Icon from 'react-native-vector-icons/Feather';

// import {styles} from './styles/home-screen-style';

// export function HomeScreen({navigation}) {
//   const [sneakerName, setSneakerName] = useState('');
//   const [superHeroData, setSuperHeroData] = useState([]);
//   const [superHeroFetchError, setSuperHeroFetchError] = useState('');

//   const [isReFetching, setIsReFetching] = useState(false);

//   // fetch 6 random superheroes to populate the landing page
//   const {
//     status: superHeroesStatus,
//     data: superHeroesData,
//     isFetching: isFetchingSuperHeroes,
//     refetch,
//   } = useQuery('superHeroes', async () => {
//     const fetchData = await generateSixRandom();
//     return fetchData;
//   });

//   // refetch on pull down
//   const invalidateAndRefetch = () => {
//     setIsReFetching(true);
//     setSuperHeroData([]);
//     setSuperHeroFetchError('');
//     refetch().then(() => setIsReFetching(false));
//   };

//   // search one hero by name
//   async function searchByName(name) {
//     setIsReFetching(true);
//     await searchHero(name).then(fetchData => {
//       if (fetchData.response === 'success') {
//         setSuperHeroFetchError('');
//         if (fetchData.results.length > 6) {
//           let trimmedData = fetchData.results.filter(
//             (_, index) => !(index > 5),
//           );
//           createButtonAlert();
//           setSuperHeroData(trimmedData);
//           setIsReFetching(false);
//           // dismiss keyboard
//           Keyboard.dismiss();
//           return;
//         }
//         setSuperHeroData(fetchData.results);
//         setIsReFetching(false);
//         // dismiss keyboard
//         Keyboard.dismiss();
//         return;
//       }
//       setSuperHeroFetchError(fetchData.error);
//       setIsReFetching(false);
//       return;
//     });
//     setIsReFetching(false);
//     return;
//   }

//   // programmatically toggle-able alert
//   const createButtonAlert = () =>
//     Alert.alert(
//       'Warning!',
//       'The result set for this query is too large. Please enter a narrowed down search term. Showing only the first 6',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//       ],
//       {cancelable: false},
//     );

//   // programmatically navigate to profile page
//   const navigateToProfile = superHero =>
//     navigation.navigate('Profile', {
//       hero: superHero,
//     });

//   const clearSearch = useCallback(() => {
//     setSneakerName('');
//   }, []);

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//       <View style={styles.container}>
//         <View style={styles.searchContainer}>
//           <View style={styles.TextInputContainer}>
//             <TextInput
//               placeholder="Find Your Sneaker!"
//               placeholderTextColor={'#282828' ? 'grey' : '#CCC'}
//               autoCorrect={false}
//               onChangeText={text => setSneakerName(text)}
//               value={sneakerName}
//               maxLength={40}
//               textAlign="center"
//             />
//           </View>

//           <View style={styles.searchButtonContainer}>
//             {/* Button */}
//             <TouchableOpacity
//               style={styles.searchButton}
//               onPress={() => {
//                 searchByName(sneakerName);
//               }}>
//               <Icon
//                 name="search"
//                 size={24}
//                 color="#2e64e5"
//                 style={styles.searchButtonText}
//               />
//             </TouchableOpacity>
//           </View>
//           {!!sneakerName && (
//             <Icon
//               name="x"
//               color="#880018"
//               size={20}
//               onPress={clearSearch}
//               style={{paddingRight: 10}}
//             />
//           )}
//         </View>
//         {/* 2 */}
//         <View style={styles.mainContainer}>
//           <View style={styles.cardHolderContainer}>
//             <ScrollView
//               contentContainerStyle={styles.scrollView}
//               // handle page refresh (refetch on pull down)
//               refreshControl={
//                 <RefreshControl
//                   refreshing={isReFetching}
//                   onRefresh={invalidateAndRefetch}
//                 />
//               }>
//               {!isFetchingSuperHeroes ? (
//                 // there was an error fetching
//                 superHeroFetchError ? (
//                   <Text>{superHeroFetchError}</Text>
//                 ) : superHeroData.length > 0 ? (
//                   // map found superheroes
//                   superHeroData.map((aSuperHero, cardIndex) => (
//                     //  card
//                     <View style={styles.cardHolder} key={cardIndex}>
//                       <HomeCard
//                         SuperHero={aSuperHero}
//                         navigateToProfile={() => navigateToProfile(aSuperHero)}
//                       />
//                     </View>
//                   ))
//                 ) : superHeroesStatus === 'success' ? (
//                   // map random superheroes
//                   superHeroesData.map((aSuperHero, cardIndex) => (
//                     //  card
//                     <View style={styles.cardHolder} key={cardIndex}>
//                       <HomeCard
//                         SuperHero={aSuperHero}
//                         navigateToProfile={() => navigateToProfile(aSuperHero)}
//                       />
//                     </View>
//                   ))
//                 ) : (
//                   <Text>There was an error fetching. Pull down to refresh</Text>
//                 )
//               ) : (
//                 !isReFetching && (
//                   <ActivityIndicator size="large" color="#0000ff" />
//                 )
//               )}
//             </ScrollView>
//           </View>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }
