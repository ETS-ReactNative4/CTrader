import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Styles from '../../components/user_components/UserStyleComponent';

const ForgetPasswordScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/background_images/ScreensBg.jpg')}
        resizeMode="cover"
        style={Styles.BackgroundImage}>
        <View style={Styles.BackgroundColor}>
          <Image
            style={Styles.Logo}
            source={require('../../assets/icons/logo.png')}
          />
          <Text style={Styles.Text1}>Forget Password?</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form}>
        <Text style={[Styles.Text3, {paddingBottom: 20}]}>
          Enter the email address associated with your account.
        </Text>
        <View style={Styles.Input}>
          <SimpleLineIcons name="envelope" size={20} color="#009e60" />
          <TextInput
            style={Styles.InputField}
            placeholderTextColor="#009e60"
            placeholder="Email Address"
          />
        </View>
        <TouchableOpacity
          style={Styles.Button}
          onPress={() => navigation.navigate('VerifyEmailScreen')}>
          <Text style={Styles.ButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;
