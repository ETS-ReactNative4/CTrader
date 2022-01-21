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

const ProfileDetailsUpdateScreen = ({navigation}) => {
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
          <Text style={Styles.Text1}>Update Your Name & Email</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.ProfileText1}>
            Set the new name and email for your account.
          </Text>
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
            <TouchableOpacity style={Styles.Button} onPress={() => {}}>
              <Text style={Styles.ButtonText}>Update Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileDetailsUpdateScreen;
