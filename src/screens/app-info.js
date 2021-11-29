import React from 'react';
import {Image, Linking, View} from 'react-native';

import {
  AppDescriptionText,
  Container,
  DevNameText,
  WebSiteLinkText,
} from './styles/app-info-style';
import {styles} from './styles/index-style';

import myLogo from '../assets/images/skill.png';

const AppInfo: React.FC = () => {
  return (
    <Container>
      <View style={styles.profileIcon}>
        <Image source={myLogo} style={styles.image} />
      </View>

      <DevNameText style={{color: 'blue'}}>Cedric Smith</DevNameText>
      <AppDescriptionText style={{color: 'red'}}>
        Please cash app any donations to $cedricbpoetry so I can continue my career as a mobile developer. Thank you!
      </AppDescriptionText>
      <WebSiteLinkText
        onPress={() => Linking.openURL('https://cedricb.breecks.com')}
      >
        https://cedricb.breecks.com
      </WebSiteLinkText>
    </Container>
  );
};

export default AppInfo;
