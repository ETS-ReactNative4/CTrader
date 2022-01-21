import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/user_components/UserStyleComponent';
const SignUpScreen = ({navigation}) => {
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
          <Text style={Styles.Text1}>Create Your Account</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.InputFieldContain}>
            <View style={Styles.Input}>
              <SimpleLineIcons name="user" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Full Name"
              />
            </View>
            <View style={Styles.Input}>
              <SimpleLineIcons name="envelope" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Email Address"
              />
            </View>
            <View style={Styles.Input}>
              <SimpleLineIcons name="lock-open" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Password"
              />
              <IoniconsIcons name="eye-off" size={20} color="#009e60" />
            </View>
            <TouchableOpacity
              style={Styles.Button}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={Styles.ButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.Bottom}>
            <Text style={Styles.Text3}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={Styles.Text2}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpScreen;
