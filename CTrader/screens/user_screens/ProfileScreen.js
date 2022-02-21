import React, {useState, useContext} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';
const ProfileScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [imagePath, setImagePath] = useState('');

  firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        setFullName(userdata.fullName);
        setImagePath(userdata.profileImage);
        setEmail(userdata.email);
      }
    });

  return (
    <View style={Styles.ProfileContainer}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      {!imagePath ? (
        <Image
          source={require('../../assets/user/userTemp.jpg')}
          resizeMode="cover"
          style={Styles.ProfileImage}
        />
      ) : (
        <Image
          source={{uri: imagePath}}
          resizeMode="cover"
          style={Styles.ProfileImage}
        />
      )}
      <View style={Styles.ProfileBackground} />
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
        <Text style={Styles.ProfileText2}>{fullName}</Text>
        <Text style={Styles.ProfileText3}>{email}</Text>
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
