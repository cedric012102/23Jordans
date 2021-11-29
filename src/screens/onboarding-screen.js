import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => <Button title="Skip" color="#000000" {...props} />;

const Next = ({...props}) => <Button title="Next" color="#000000" {...props} />;

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e490',
          image: (
            <Image
              source={require('../assets/images/bred.jpg')}
              style={{
                width: 200,
                height: 200,
                marginVertical: 50,
                borderRadius: 475,
              }}
            />
          ),
          title: 'Connect With The Air Jordan Universe',
          subtitle: 'Discover the history of the most iconic sneaker ever.',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('../assets/images/hegotgame.jpg')}
              style={{
                width: 200,
                height: 200,
                marginVertical: 50,
                borderRadius: 475,
              }}
            />
          ),
          title: 'Be Ahead Of The Game',
          subtitle: 'Know when your favorite Jordans are releasing.',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('../assets/images/nike.jpg')}
              style={{
                width: 200,
                height: 200,
                marginVertical: 50,
                borderRadius: 475,
              }}
            />
          ),
          title: 'Ready, Set, Go!',
          subtitle:
            'Cop those Jordans and allevate your shoe game. Jordan release dates are updated every first of the month.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
