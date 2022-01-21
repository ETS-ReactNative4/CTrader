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
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const GreenSignUpScreen = ({navigation}) => {
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
            <Text style={Styles.Text1}>Create Your Account</Text>
            <View style={Styles.Bottom}>
              <Text style={Styles.Text3}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={Styles.Text2}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.Form}>
          <Text style={Styles.Text4}>
            Please enter your organization and green project details.
          </Text>
          <View style={Styles.InputContainer}>
            <View style={Styles.Input}>
              <FontAwesome5Icons name="industry" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Company Name"
              />
            </View>
            <View style={Styles.Input}>
              <FontAwesome5Icons name="user" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Owner's Name"
              />
            </View>
            <View style={Styles.Input}>
              <EntypoIcons name="email" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Email"
              />
            </View>
            <View style={Styles.Input}>
              <FontAwesome5Icons name="envelope" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Address"
              />
            </View>
            <View style={Styles.Input}>
              <FontAwesome5Icons name="industry" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Project Name"
              />
            </View>
            <View style={Styles.Input}>
              <EntypoIcons name="leaf" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Carbon Credits Amount"
              />
            </View>
            <View style={Styles.Input}>
              <FontAwesomeIcons name="dollar" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Price for Per Carbon Credit"
              />
            </View>
            <View style={Styles.Input}>
              <MaterialIcons name="description" size={20} color="#009e60" />
              <TextInput
                multiline
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Project Description"
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
            <View style={Styles.Input}>
              <SimpleLineIcons name="lock-open" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Confirm Password"
              />
              <IoniconsIcons name="eye-off" size={20} color="#009e60" />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={Styles.ButtonContain}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={Styles.Button}>
          <Text style={Styles.ButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreenSignUpScreen;
