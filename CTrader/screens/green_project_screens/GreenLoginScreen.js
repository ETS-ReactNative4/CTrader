import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import Styles from '../../components/green_project_components/ProjectStyleComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const GreenLoginScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/background_images/ScreensBg.jpg')}
          resizeMode="cover"
          style={Styles.BackgroundImage}
        />
        <View style={Styles.BackgroundColor}>
          <View style={Styles.ScreenTopic3}>
            <Image
              style={Styles.Logo}
              source={require('../../assets/icons/logo.png')}
            />
            <Text style={Styles.Text1}>Welcome!</Text>
            <View style={Styles.Bottom}>
              <Text style={Styles.Text3}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('GreenSignUpScreen')}>
                <Text style={Styles.Text2}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.Form}>
          <Text style={Styles.Text4}>
            Please enter Email and Password to Login.
          </Text>
          <View style={Styles.InputContainer}>
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
              onPress={() => navigation.navigate('GreenWatingScreen')}
              style={Styles.Button}>
              <Text style={Styles.ButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenLoginScreen;
