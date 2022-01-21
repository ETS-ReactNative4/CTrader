import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';

const VerifyEmailScreen = ({navigation}) => {
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
          <Text style={Styles.Text1}>Email Varification</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[Styles.Text3, {paddingBottom: 20}]}>
            Enter the 4 digit varification code we just sent you on your email
            address.
          </Text>
          <View style={Styles.OTPInputArea}>
            <View style={Styles.OTPInput}>
              <TextInput
                style={Styles.OTPInputField}
                placeholderTextColor="#009e60"
                placeholder="#"
              />
            </View>
            <View style={Styles.OTPInput}>
              <TextInput
                style={Styles.OTPInputField}
                placeholderTextColor="#009e60"
                placeholder="#"
              />
            </View>
            <View style={Styles.OTPInput}>
              <TextInput
                style={Styles.OTPInputField}
                placeholderTextColor="#009e60"
                placeholder="#"
              />
            </View>
            <View style={Styles.OTPInput}>
              <TextInput
                style={Styles.OTPInputField}
                placeholderTextColor="#009e60"
                placeholder="#"
              />
            </View>
          </View>
          <View style={Styles.InputFieldContain}>
            <TouchableOpacity
              style={Styles.Button}
              onPress={() => navigation.navigate('NewPasswordScreen')}>
              <Text style={Styles.ButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.Bottom}>
            <Text style={Styles.Text3}>Don't receive OTP? </Text>
            <TouchableOpacity>
              <Text style={Styles.Text2}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default VerifyEmailScreen;
