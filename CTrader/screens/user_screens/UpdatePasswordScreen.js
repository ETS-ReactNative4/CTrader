import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const UpdatePasswordScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [imagePath, setImagePath] = useState('');
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

  firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        setImagePath(userdata.profileImage);
      }
    });

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
            console.log('Password updated..!')
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

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ImageBackground
        source={
          imagePath != ''
            ? {uri: imagePath}
            : require('../../assets/user/userTemp.jpg')
        }
        resizeMode="cover"
        style={Styles.UpdateBackImage}>
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
          <Text style={Styles.Text1}>Update Your Password</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.ProfileText1}>
            Set the new password for your account.
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
            <TouchableOpacity
              style={Styles.Button}
              onPress={() => updatePasswordNow()}>
              <Text style={Styles.ButtonText}>Update Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default UpdatePasswordScreen;
