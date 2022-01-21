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
const GreenUpdatePasswordScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ScrollView>
        <Image
          source={require('../../assets/background_images/ScreensBg.jpg')}
          resizeMode="cover"
          style={Styles.BackgroundImage}
        />
        <View style={Styles.BackgroundColor}>
          <View style={Styles.BackButton}>
            <TouchableOpacity onPress={() => navigation.goBack('')}>
              <IoniconsIcons name="chevron-back" color={'#fff'} size={25} />
            </TouchableOpacity>
          </View>
          <View style={Styles.ScreenTopic}>
            <Text style={Styles.Text1}>Update Your Password</Text>
            <Text style={Styles.Text3}>
              Do you want to update your password?
            </Text>
          </View>
        </View>
        <View style={Styles.Form}>
          <Text style={Styles.Text4}>Please enter New Password.</Text>
          <View style={Styles.InputContainer}>
            <View style={Styles.Input}>
              <SimpleLineIcons name="lock-open" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Current Password"
              />
              <IoniconsIcons name="eye-off" size={20} color="#009e60" />
            </View>
            <View style={Styles.Input}>
              <SimpleLineIcons name="lock-open" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="New Password"
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
            <TouchableOpacity onPress={() => {}} style={Styles.Button}>
              <Text style={Styles.ButtonText}>Update Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenUpdatePasswordScreen;
