import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/user_components/UserStyleComponent';

const NewPasswordScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/background_images/ScreensBg.jpg')}
        resizeMode="cover"
        style={Styles.BackgroundImage}>
        <View style={Styles.BackgroundColor}>
          <Image
            style={Styles.Logo}
            source={require('../../assets/icons/logo.png')}
          />
          <Text style={Styles.Text1}>Reset Password</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[Styles.Text3, {paddingBottom: 20}]}>
            Set the new password for your account so you can login and access
            all the festures.
          </Text>
          <View style={Styles.InputFieldContain}>
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
                placeholder="Re-enter Password"
              />
              <IoniconsIcons name="eye-off" size={20} color="#009e60" />
            </View>
            <TouchableOpacity
              style={Styles.Button}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={Styles.ButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewPasswordScreen;
