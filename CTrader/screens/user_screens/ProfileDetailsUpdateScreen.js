import React, {useContext, useEffect, useState} from 'react';
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

const ProfileDetailsUpdateScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [imagePath, setImagePath] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);

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

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const reauthenticate = currentPassword => {
    var user1 = auth().currentUser;
    var cred = auth.EmailAuthProvider.credential(user1.email, currentPassword);
    return user1.reauthenticateWithCredential(cred);
  };

  const onChangeEmailPress = () => {
    let emailAddress = 'user_' + email;
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
      .collection('users')
      .doc(auth().currentUser.uid)
      .update({
        fullName: fullName,
        email: email,
      })
      .then(() => {
        console.log('User Details Updated!');
        Alert.alert(
          'Task Completed,',
          'Your profile has been successfully updated...!',
        );
        setEmail(null);
        setFullName(null);
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
  const updateInfor = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!fullName) {
      Alert.alert('Alert,', 'Please Enter your Full Name...!');
    } else if (!password) {
      Alert.alert('Alert,', 'Please Enter your Password...!');
    } else if (!email) {
      Alert.alert('Alert,', 'Please Enter your Email...!');
    } else if (reg.test(email) === false) {
      Alert.alert('Alert,', 'Please Enter Vaild Email Address..!');
    } else {
      submitData();
    }
  };

  useEffect(() => {
    return () => {
      setEmail(null);
      setFullName(null);
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
          <Text style={Styles.Text1}>Update Your Name & Email</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.ProfileText1}>
            Set the new name and email for your account.
          </Text>
          <View style={Styles.InputFieldContain}>
            <View style={Styles.Input}>
              <SimpleLineIcons name="user" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Full Name"
                value={fullName}
                onChangeText={userFullName => setFullName(userFullName)}
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
            <View style={Styles.Input}>
              <SimpleLineIcons name="envelope" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Email Address"
                value={email}
                onChangeText={userEmail => setEmail(userEmail)}
              />
            </View>
            <TouchableOpacity
              style={Styles.Button}
              onPress={() => updateInfor()}>
              <Text style={Styles.ButtonText}>Update Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileDetailsUpdateScreen;
