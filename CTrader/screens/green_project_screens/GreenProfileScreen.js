import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import GreenHeaderComponent from '../../components/green_project_components/GreenHeaderComponent';
import Styles from '../../components/green_project_components/ProjectStyleComponent';

const GreenProfileScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <GreenHeaderComponent Navigation={navigation} />
      <View style={Styles.ProfileContain}>
        <View style={Styles.ProfileImageContain}>
          <Text style={Styles.ProfileCompanyName}>
            Jesika & Sisters Sri Lanka Pvt (Ltd).
          </Text>
          <Image
            style={Styles.ProfileImage}
            source={require('../../assets/icons/company-owner.png')}
          />
        </View>
        <View style={Styles.ProfileCard}>
          <View style={Styles.ProfileIconContain}>
            <Image
              style={Styles.ProfileIcon}
              source={require('../../assets/icons/businessman.png')}
            />
          </View>
          <Text style={Styles.ProfileText}>Jesika Mathive</Text>
        </View>
        <View style={Styles.ProfileCard}>
          <View style={Styles.ProfileIconContain}>
            <Image
              style={Styles.ProfileIcon}
              source={require('../../assets/icons/email.png')}
            />
          </View>
          <Text style={Styles.ProfileText}>jesika@gmail.com</Text>
        </View>
        <View style={Styles.ProfileCard}>
          <View style={Styles.ProfileIconContain}>
            <Image
              style={Styles.ProfileIcon}
              source={require('../../assets/icons/address.png')}
            />
          </View>
          <Text style={Styles.ProfileText}>
            No 155, Gregory Road, Colombo 11.
          </Text>
        </View>
        <View style={Styles.ProfileButtonContain}>
          <TouchableOpacity
            style={Styles.ProfileButton}
            onPress={() => navigation.navigate('GreenUpdateInfoScreen')}>
            <Text style={Styles.ProfileButtonText}>Update Infor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.ProfileButton}
            onPress={() => navigation.navigate('GreenUpdatePasswordScreen')}>
            <Text style={Styles.ProfileButtonText}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GreenProfileScreen;
