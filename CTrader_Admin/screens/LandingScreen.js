import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Styles from '../components/StyleComponent';
const LandingScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <ImageBackground
        source={require('../assets/Background.png')}
        resizeMode="cover"
        style={Styles.LandingBackgroundImage}
      />
      <View style={Styles.LandingBackground}>
        <Text style={Styles.LandingTopicText}>Monitor Carbon Trading</Text>
        <Text style={Styles.DescriptionText}>
          Approve new green project and Add new green Projects.
        </Text>
        <TouchableOpacity
          style={Styles.LandingButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={Styles.LandingButtonText}>Start Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={[Styles.DescriptionText, Styles.TextColor]}>
            Don't you have account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;
