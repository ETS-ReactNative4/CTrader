import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Styles from '../components/StyleComponent';
import HeaderComponent from '../components/HeaderComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
const UpdatePasswordScreen = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);
  const [secureTextEntry3, setSecureTextEntry3] = useState(true);

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const showPassword2 = () => {
    setSecureTextEntry2(!secureTextEntry2);
  };

  const showPassword3 = () => {
    setSecureTextEntry3(!secureTextEntry3);
  };

  const reauthenticate = currentPassword => {
    var user1 = auth().currentUser;
    var cred = auth.EmailAuthProvider.credential(user1.email, currentPassword);
    return user1.reauthenticateWithCredential(cred);
  };

  const onChangePasswordPress = () => {
    reauthenticate(currentPassword)
      .then(() => {
        var user1 = auth().currentUser;
        user1
          .updatePassword(newPassword)
          .then(() => {
            console.log('Password updated..!');
            Alert.alert(
              'Updated,',
              'Your password has been updated Successfully...!',
            );
            setCurrentPassword(null);
            setNewPassword(null);
            setConfirmPassword(null);
          })
          .catch(error => {
            console.log(error.message);
          });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    return () => {
      setCurrentPassword(null);
      setNewPassword(null);
      setConfirmPassword(null);
    };
  }, []);
  const changePassword = () => {
    if (!currentPassword) {
      Alert.alert('Alert', 'Please Enter your Current Password..!');
    } else if (!newPassword) {
      Alert.alert('Alert', 'Please Enter your New Password..!');
    } else if (!confirmPassword) {
      Alert.alert('Alert', 'Please Enter your Confirm Password..!');
    } else if (newPassword != confirmPassword) {
      Alert.alert(
        'Alert',
        'Entered New Password & Confirm Pasword are not same. Please Check Again..!',
      );
    } else {
      onChangePasswordPress();
    }
  };
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <HeaderComponent Navigation={navigation} ScreenName={'Update Password'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.ProfileContain1}>
          <Image
            style={Styles.ProfileImage}
            source={require('../assets/user/user.jpg')}
          />
          <Text style={Styles.DescriptionText}>
            Add new password to your account.
          </Text>
          <View style={Styles.InputFieldContain}>
            <View style={Styles.Input}>
              <SimpleLineIcons name="lock-open" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Current Password"
                value={currentPassword}
                onChangeText={userCurrentPassword =>
                  setCurrentPassword(userCurrentPassword)
                }
                secureTextEntry={secureTextEntry1}
              />
              <TouchableOpacity onPress={() => showPassword1()}>
                {secureTextEntry1 == true ? (
                  <IoniconsIcons name="eye-off" size={20} color="#009e60" />
                ) : (
                  <IoniconsIcons name="eye" size={20} color="#009e60" />
                )}
              </TouchableOpacity>
            </View>
            <View style={Styles.Input}>
              <SimpleLineIcons name="lock-open" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="New Password"
                value={newPassword}
                onChangeText={userNewPassword =>
                  setNewPassword(userNewPassword)
                }
                secureTextEntry={secureTextEntry2}
              />
              <TouchableOpacity onPress={() => showPassword2()}>
                {secureTextEntry2 == true ? (
                  <IoniconsIcons name="eye-off" size={20} color="#009e60" />
                ) : (
                  <IoniconsIcons name="eye" size={20} color="#009e60" />
                )}
              </TouchableOpacity>
            </View>
            <View style={Styles.Input}>
              <SimpleLineIcons name="lock-open" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={userConfirmPassword =>
                  setConfirmPassword(userConfirmPassword)
                }
                secureTextEntry={secureTextEntry3}
              />
              <TouchableOpacity onPress={() => showPassword3()}>
                {secureTextEntry3 == true ? (
                  <IoniconsIcons name="eye-off" size={20} color="#009e60" />
                ) : (
                  <IoniconsIcons name="eye" size={20} color="#009e60" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={Styles.LandingButton}
            onPress={() => changePassword()}>
            <Text style={Styles.LandingButtonText}>Update Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdatePasswordScreen;
