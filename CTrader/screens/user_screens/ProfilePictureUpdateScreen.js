import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import SubHeaderComponent from '../../components/user_components/SubHeaderComponent';

const ProfilePictureUpdateScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <SubHeaderComponent
        Navigation={navigation}
        ScreenName={'Update Profile Picture'}
      />
      <View style={Styles.ProfileUpdateTextContain}>
        <Image
          source={require('../../assets/icons/image.png')}
          resizeMode="cover"
          style={Styles.ScanImageBack}
        />
        <View style={Styles.ScanTextContain}>
          <Text style={Styles.ScanText1}>
            Capture or Upload your image to update your profile picture.
          </Text>
        </View>
        <TouchableOpacity style={Styles.Button} onPress={() => {}}>
          <Text style={Styles.ButtonText}>Upload Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePictureUpdateScreen;
