import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import Styles from '../../components/green_project_components/ProjectStyleComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
const GreenUpdatePasswordScreen = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
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
    var user = auth().currentUser;
    var cred = auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  };

  const onChangePasswordPress = () => {
    reauthenticate(currentPassword)
      .then(() => {
        var user = auth().currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            console.log('User Password Updated!');
            Alert.alert(
              'Task Completed,',
              'Your password has been successfully updated...!',
            );
            setCurrentPassword(null);
            setNewPassword(null);
            setConfirmPassword(null);
          })
          .catch(error => {
            console.log(error.message);
            Alert.alert(
              'Error..!',
              'Something went wrong with change password.',
            );
          });
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert('Error..!', 'Something went wrong with change password.');
      });
  };

  const updatePasswordNow = () => {
    if (!currentPassword) {
      Alert.alert('Alert,', 'You are forget to enter Current Password...!');
    } else if (!newPassword) {
      Alert.alert('Alert,', 'You are forget to enter New Password...!');
    } else if (!confirmPassword) {
      Alert.alert('Alert,', 'You are forget to enter Confirm Password...!');
    } else if (newPassword != confirmPassword) {
      Alert.alert(
        'Alert,',
        'Your Confirm Password is not match to the New Password...!',
      );
    } else {
      onChangePasswordPress();
    }
  };

  useEffect(() => {
    return () => {
      setCurrentPassword(null);
      setNewPassword(null);
      setConfirmPassword(null);
    };
  }, []);

  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/background_images/ScreensBg.jpg')}
          resizeMode="cover"
          style={Styles.BackgroundImage}
        />
        <View style={Styles.BackgroundColor}>
          <View style={Styles.BackButton}>
            <TouchableOpacity onPress={() => navigation.goBack('')}>
              <IoniconsIcons name="chevron-back" color={'#fff'} size={25} />
            </TouchableOpacity>
          </View>
          <View style={Styles.ScreenTopic}>
            <Text style={Styles.Text1}>Update Your Password</Text>
            <Text style={Styles.Text3}>
              Do you want to update your password?
            </Text>
          </View>
        </View>
        <View style={Styles.Form}>
          <Text style={Styles.Text4}>Please enter New Password.</Text>
          <View style={Styles.InputContainer}>
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
            <TouchableOpacity onPress={updatePasswordNow} style={Styles.Button}>
              <Text style={Styles.ButtonText}>Update Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenUpdatePasswordScreen;
