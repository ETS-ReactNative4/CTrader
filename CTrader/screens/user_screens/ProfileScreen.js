import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
const ProfileScreen = ({navigation}) => {
  return (
    <View style={Styles.ProfileContainer}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <Image
        source={require('../../assets/user/user.jpg')}
        resizeMode="cover"
        style={Styles.ProfileImage}
      />
      <TouchableOpacity
        style={Styles.ProfileBackIcon1}
        onPress={() => navigation.goBack()}>
        <IoniconsIcons
          style={Styles.BackIconContainer}
          name="chevron-back"
          color={'#fff'}
          size={25}
        />
      </TouchableOpacity>
      <View style={Styles.ProfileTextContainer}>
        <Text style={Styles.ProfileText2}>John Makathi</Text>
        <Text style={Styles.ProfileText3}>jihn@gmail.com</Text>
      </View>
      <View style={Styles.ProfileButtonContain}>
        <View style={Styles.ProfileButtomTwo}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileDetailsUpdateScreen')}
            style={Styles.ProfileButton}>
            <Text style={Styles.CartText5}>Update Name & Email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdatePasswordScreen')}
            style={Styles.ProfileButton}>
            <Text style={Styles.CartText5}>Update Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfilePictureUpdateScreen')}
          style={Styles.ProjectDetailButton}>
          <Text style={Styles.CartText5}>Update Profile Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
