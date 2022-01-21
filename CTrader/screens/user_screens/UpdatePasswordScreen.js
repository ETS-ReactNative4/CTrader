import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const UpdatePasswordScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/user/user.jpg')}
        resizeMode="cover"
        style={Styles.BackgroundImage}>
        <View style={Styles.BackgroundColor}>
          <TouchableOpacity
            style={Styles.ProfileBackIcon}
            onPress={() => navigation.goBack()}>
            <IoniconsIcons
              style={Styles.BackIconContainer}
              name="chevron-back"
              color={'#fff'}
              size={25}
            />
          </TouchableOpacity>
          <Text style={Styles.Text1}>Update Your Password</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.ProfileText1}>
            Set the new password for your account.
          </Text>
          <View style={Styles.InputFieldContain}>
            <View style={Styles.Input}>
              <SimpleLineIcons name="lock-open" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Curretn Password"
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
                placeholder="Re-enter Password"
              />
              <IoniconsIcons name="eye-off" size={20} color="#009e60" />
            </View>
            <TouchableOpacity style={Styles.Button} onPress={() => {}}>
              <Text style={Styles.ButtonText}>Update Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default UpdatePasswordScreen;
