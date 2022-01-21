import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Styles from '../components/user_components/UserStyleComponent';
import LinearGradient from 'react-native-linear-gradient';

const LandingScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ImageBackground
        source={require('../assets/background_images/LandingBg.jpg')}
        resizeMode="cover"
        style={Styles.LandingBackgroundImage}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['transparent', '#000']}
          style={Styles.LandingBack}>
          <Text style={Styles.LandingTopicText}>
            Trade Your Carbon Credits Easily
          </Text>
        </LinearGradient>
      </ImageBackground>
      <View style={Styles.LandingBackground}>
        <View style={Styles.LandingDescription}>
          <Text style={Styles.DescriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            facere, corrupti fugiat error deleniti quae esse doloribus assumenda
            aliquid magni aspernatur consequuntur.
          </Text>
        </View>
        <View style={Styles.LandingButtonContain}>
          <TouchableOpacity
            style={Styles.LandingButton1}
            onPress={() => navigation.navigate('UserLoginScreen')}>
            <Text style={Styles.LandingButtonText}>Login as a User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.LandingButton2}
            onPress={() => navigation.navigate('GreenProjectLoginScreen')}>
            <Text style={Styles.LandingButtonText}>
              Login as a Green Project Owner
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
