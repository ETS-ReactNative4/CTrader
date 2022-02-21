import React, {useContext, useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import GreenHeaderComponent from '../../components/green_project_components/GreenHeaderComponent';
import Styles from '../../components/green_project_components/ProjectStyleComponent';

import {AuthContext} from '../../navigation/green_project_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const GreenProfileScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [address, setAddress] = useState('');

  firestore()
    .collection('green_projects')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        setCompanyName(userdata.companyName);
        setOwnerName(userdata.ownerName);
        setEmail(userdata.email);
        setAddress(userdata.address);
      }
    });

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
          <Text style={Styles.ProfileCompanyName}>{companyName}</Text>
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
          <Text style={Styles.ProfileText}>{ownerName}</Text>
        </View>
        <View style={Styles.ProfileCard}>
          <View style={Styles.ProfileIconContain}>
            <Image
              style={Styles.ProfileIcon}
              source={require('../../assets/icons/email.png')}
            />
          </View>
          <Text style={Styles.ProfileText}>{email}</Text>
        </View>
        <View style={Styles.ProfileCard}>
          <View style={Styles.ProfileIconContain}>
            <Image
              style={Styles.ProfileIcon}
              source={require('../../assets/icons/address.png')}
            />
          </View>
          <Text style={Styles.ProfileText}>{address}</Text>
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
