import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileScreen from '../screens/profile-screen';
import EditProfileScreen from '../screens/edit-profile-screen';
import AppInfo from '../screens/app-info';
import {MoreOptionsOverlay} from '../components/more-options-overlay';
import FeedbackPrivacyScreen from '../screens/feedback-privacy-screen';
import AccountInfoScreen from '../screens/account-info-screen';
import SendFeedbackScreen from '../screens/send-feedback-screen';

import History from '../screens/history';
import AirJordan1Screen from '../screens/SneakerHistoryScreens/air-jordan-1-screen';
import AirJordan2Screen from '../screens/SneakerHistoryScreens/air-jordan-2-screen';
import AirJordan3Screen from '../screens/SneakerHistoryScreens/air-jordan-3-screen';
import AirJordan4Screen from '../screens/SneakerHistoryScreens/air-jordan-4-screen';
import AirJordan5Screen from '../screens/SneakerHistoryScreens/air-jordan-5-screen';
import AirJordan6Screen from '../screens/SneakerHistoryScreens/air-jordan-6-screen';
import AirJordan7Screen from '../screens/SneakerHistoryScreens/air-jordan-7-screen';
import AirJordan8Screen from '../screens/SneakerHistoryScreens/air-jordan-8-screen';
import AirJordan9Screen from '../screens/SneakerHistoryScreens/air-jordan-9-screen';
import AirJordan10Screen from '../screens/SneakerHistoryScreens/air-jordan-10-screen';
import AirJordan11Screen from '../screens/SneakerHistoryScreens/air-jordan-11-screen';
import AirJordan12Screen from '../screens/SneakerHistoryScreens/air-jordan-12-screen';
import AirJordan13Screen from '../screens/SneakerHistoryScreens/air-jordan-13-screen';
import AirJordan14Screen from '../screens/SneakerHistoryScreens/air-jordan-14-screen';
import AirJordan15Screen from '../screens/SneakerHistoryScreens/air-jordan-15-screen';
import AirJordan16Screen from '../screens/SneakerHistoryScreens/air-jordan-16-screen';
import AirJordan17Screen from '../screens/SneakerHistoryScreens/air-jordan-17-screen';
import AirJordan18Screen from '../screens/SneakerHistoryScreens/air-jordan-18-screen';
import AirJordan19Screen from '../screens/SneakerHistoryScreens/air-jordan-19-screen';
import AirJordan20Screen from '../screens/SneakerHistoryScreens/air-jordan-20-screen';
import AirJordan21Screen from '../screens/SneakerHistoryScreens/air-jordan-21-screen';
import AirJordan22Screen from '../screens/SneakerHistoryScreens/air-jordan-22-screen';
import AirJordan23Screen from '../screens/SneakerHistoryScreens/air-jordan-23-screen';
import {LogoTitle} from '../components/logo-title';

import CalendarScreen from '../screens/calendar-screen';
import JanuaryScreen from '../screens/MonthsScreens/january-screen';
import FebruaryScreen from '../screens/MonthsScreens/february-screen';
import MarchScreen from '../screens/MonthsScreens/march-screen';
import AprilScreen from '../screens/MonthsScreens/april-screen';
import MayScreen from '../screens/MonthsScreens/may-screen';
import JuneScreen from '../screens/MonthsScreens/june-screen';
import JulyScreen from '../screens/MonthsScreens/july-screen';
import AugustScreen from '../screens/MonthsScreens/august-screen';
import SeptemberScreen from '../screens/MonthsScreens/september-screen';
import OctoberScreen from '../screens/MonthsScreens/october-screen';
import NovemberScreen from '../screens/MonthsScreens/november-screen';
import DecemberScreen from '../screens/MonthsScreens/december-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Feedstack = ({navigation}) => (
  <Stack.Navigator>
      <Stack.Screen
      name="Calendar"
      component={CalendarScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
      }}
    />

    <Stack.Screen
      name="January"
      component={JanuaryScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('February')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="February"
      component={FebruaryScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('March')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="March"
      component={MarchScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('April')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="April"
      component={AprilScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('May')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="May"
      component={MayScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('June')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="June"
      component={JuneScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('July')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="July"
      component={JulyScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('August')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="August"
      component={AugustScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('September')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />


    <Stack.Screen
      name="September"
      component={SeptemberScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('October')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="October"
      component={OctoberScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('November')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="November"
      component={NovemberScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
        headerRight: () => (
          <View style={{marginRight: 18, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('December')}>
            <Ionicons
                name="chevron-forward"
                size={32}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="December"
      component={DecemberScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
      }}
    />

    {/* <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    /> */}

  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const HistoryStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Air Jordan History"
      component={History}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'red',
          fontFamily: 'Georgia',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: '#9FA4A9',
        },
      }}
    />
    <Stack.Screen name="AirJordan1" component={AirJordan1Screen} />
    <Stack.Screen name="AirJordan2" component={AirJordan2Screen} />
    <Stack.Screen name="AirJordan3" component={AirJordan3Screen} />
    <Stack.Screen name="AirJordan4" component={AirJordan4Screen} />
    <Stack.Screen name="AirJordan5" component={AirJordan5Screen} />
    <Stack.Screen name="AirJordan6" component={AirJordan6Screen} />
    <Stack.Screen name="AirJordan7" component={AirJordan7Screen} />
    <Stack.Screen name="AirJordan8" component={AirJordan8Screen} />
    <Stack.Screen name="AirJordan9" component={AirJordan9Screen} />
    <Stack.Screen name="AirJordan10" component={AirJordan10Screen} />
    <Stack.Screen name="AirJordan11" component={AirJordan11Screen} />
    <Stack.Screen name="AirJordan12" component={AirJordan12Screen} />
    <Stack.Screen name="AirJordan13" component={AirJordan13Screen} />
    <Stack.Screen name="AirJordan14" component={AirJordan14Screen} />
    <Stack.Screen name="AirJordan15" component={AirJordan15Screen} />
    <Stack.Screen name="AirJordan16" component={AirJordan16Screen} />
    <Stack.Screen name="AirJordan17" component={AirJordan17Screen} />
    <Stack.Screen name="AirJordan18" component={AirJordan18Screen} />
    <Stack.Screen name="AirJordan19" component={AirJordan19Screen} />
    <Stack.Screen name="AirJordan20" component={AirJordan20Screen} />
    <Stack.Screen name="AirJordan21" component={AirJordan21Screen} />
    <Stack.Screen name="AirJordan22" component={AirJordan22Screen} />
    <Stack.Screen name="AirJordan23" component={AirJordan23Screen} />
  </Stack.Navigator>
);

const SettingsStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName={'MoreOptionsOverlay'}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="MoreOptionsOverlay" component={MoreOptionsOverlay} />
    <Stack.Screen
      name="Feedback/Privacy"
      component={FeedbackPrivacyScreen}
      options={{headerShown: true}}
    />
    <Stack.Screen
      name="Account Information"
      component={AccountInfoScreen}
      options={{headerShown: true}}
    />
    <Stack.Screen
      name="Send Feedback"
      component={SendFeedbackScreen}
      options={{headerShown: true}}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisible = route => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';
  };

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#2e64e5',
      }}
    >
      <Tab.Screen
        name="Releases"
        component={Feedstack}
        options={{
          tabBarLabel: 'Releases',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-month-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="history-edu" color={color} size={size} />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Account"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name="Info"
        component={AppInfo}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="menu" color={color} size={size} />
          ),
        }}
      /> */}

      <Tab.Screen
        name="More"
        component={SettingsStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="more-horiz" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
