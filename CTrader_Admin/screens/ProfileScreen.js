import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Styles from '../components/StyleComponent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
const ProfileScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <HeaderComponent Navigation={navigation} ScreenName={'Profile'} />
      <View style={Styles.ProfileContain}>
        <View style={Styles.ProfileImageContain}>
          <Image
            style={Styles.ProfileImage}
            source={require('../assets/user/user.jpg')}
          />
        </View>
        <View style={Styles.ProfileBody}>
          <View style={Styles.ProfileDes}>
            <FontAwesome5 name="user" size={25} color="#5e5e5e" />
            <View style={Styles.ProfileDesRight}>
              <Text style={Styles.userNameText}>Name</Text>
              <Text style={Styles.ProfileDesText}>Thimira Madusanka</Text>
            </View>
          </View>
          <View style={Styles.ProfileDes}>
            <FontAwesome5 name="envelope" size={20} color="#5e5e5e" />
            <View style={Styles.ProfileDesRight}>
              <Text style={Styles.userNameText}>Email</Text>
              <Text style={Styles.ProfileDesText}>thimira@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={Styles.ProfileButtonContain}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateInforScreen')}
            style={[Styles.ProjectDetailButton, Styles.GreenButton]}>
            <Text style={Styles.ProjectDetailButtonText}>Update Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdatePasswordScreen')}
            style={[Styles.ProjectDetailButton, Styles.GreenButton]}>
            <Text style={Styles.ProjectDetailButtonText}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
