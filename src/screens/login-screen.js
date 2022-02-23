import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import Auth, {firebase} from '@react-native-firebase/auth';
import FormInput from '../components/form-input';
import FormButton from '../components/form-button';
import SocialButton from '../components/social-button';
import styles from './styles/login-screen-style';
import {AuthContext} from '../navigation/AuthProvider';
import Video from 'react-native-video';

import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const {login, googleLogin, fbLogin, appleLogin, reset} = useContext(AuthContext);

  return (
    <ScrollView bounces={false}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View style={styles.container}>
          <Video
            source={require('../assets/images/Sneaker.mp4')}
            style={styles.video}
            onError={(e: LoadError) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />

          <Text style={styles.text}>23 Jordans</Text>
          <FormInput
            labelValue={email}
            onChangeText={userEmail => setEmail(userEmail)}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormInput
            labelValue={password}
            onChangeText={userPassword => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
          />

          <FormButton
            buttonTitle="Sign In"
            onPress={() => login(email, password)}
          />

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate('Forgot Password')}
          >
            <Text style={styles.navButtonText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* <SocialButton
            buttonTitle="Sign In With Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          /> */}

          <SocialButton
            buttonTitle="Sign In With Google"
            btnType="google"
            color="#468C98"
            backgroundColor="#CFFFE5"
            onPress={() => googleLogin()}
          />

          <AppleButton
            buttonStyle={AppleButton.Style.WHITE}
            buttonType={AppleButton.Type.SIGN_IN}
            style={{
              width: 160,
              height: 45,
              marginTop: 15,
            }}
            onPress={() =>
              appleLogin()
            }
          />

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.navButtonText}>
              Don't Have An Account? Create Here
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );

};

export default LoginScreen;
