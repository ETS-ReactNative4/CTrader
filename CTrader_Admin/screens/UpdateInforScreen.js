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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const UpdateInforScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const reauthenticate = currentPassword => {
    var user1 = auth().currentUser;
    var cred = auth.EmailAuthProvider.credential(user1.email, currentPassword);
    return user1.reauthenticateWithCredential(cred);
  };

  const onChangeEmailPress = () => {
    let emailAddress = 'admin_' + email;
    reauthenticate(password)
      .then(() => {
        var user1 = auth().currentUser;
        user1
          .updateEmail(emailAddress)
          .then(() => {
            console.log('Email & Name successfully updated...!');
          })
          .catch(error => {
            console.log(error.message);
            Alert.alert(
              'Error..!',
              'Something went wrong with added profile details to firestore.',
            );
          });
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert(
          'Error..!',
          'Something went wrong with added profile details to firestore.',
        );
      });
  };

  const submitData = async () => {
    onChangeEmailPress();
    await firestore()
      .collection('admin')
      .doc(auth().currentUser.uid)
      .update({
        userName: userName,
        email: email,
      })
      .then(() => {
        console.log('User Details Updated!');
        Alert.alert(
          'Task Completed,',
          'Your profile has been successfully updated...!',
        );
        setEmail(null);
        setUserName(null);
        setPassword(null);
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert(
          'Error..!',
          'Something went wrong with added profile details to firestore.',
        );
      });
  };

  const updateProfile = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!userName) {
      Alert.alert('Please Enter your Username..!');
    } else if (!email) {
      Alert.alert('Please Enter your Email Address..!');
    } else if (!password) {
      Alert.alert('Please Enter your Password..!');
    } else if (reg.test(email) === false) {
      Alert.alert('Please Enter Vaild Email Address..!');
    } else {
      submitData();
    }
  };

  useEffect(() => {
    return () => {
      setEmail(null);
      setUserName(null);
      setPassword(null);
    };
  }, []);

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <HeaderComponent Navigation={navigation} ScreenName={'Update Info'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.ProfileContain1}>
          <Image
            style={Styles.ProfileImage}
            source={require('../assets/user/user.jpg')}
          />
          <Text style={Styles.DescriptionText}>Add your new account info</Text>
          <View style={Styles.InputFieldContain}>
            <View style={Styles.Input}>
              <SimpleLineIcons name="user" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="User Name"
                value={userName}
                onChangeText={name => setUserName(name)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={Styles.Input}>
              <SimpleLineIcons name="envelope" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Email Address"
                value={email}
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={Styles.Input}>
              <SimpleLineIcons name="lock-open" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Password"
                value={password}
                onChangeText={userPassword => setPassword(userPassword)}
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
          </View>
          <TouchableOpacity
            style={Styles.LandingButton}
            onPress={() => updateProfile()}>
            <Text style={Styles.LandingButtonText}>Update Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateInforScreen;
