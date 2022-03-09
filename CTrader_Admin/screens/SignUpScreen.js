import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import Styles from '../components/StyleComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const SignUpScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const submitData = async () => {
    let newEmail = 'admin_' + email;
    try {
      const userAuth = await auth().createUserWithEmailAndPassword(
        newEmail,
        password,
      );
      const userId = userAuth.user.uid;
      await firestore()
        .collection('admin')
        .doc(userId)
        .set({
          userId: userId,
          userName: userName,
          email: email,
        })
        .then(() => {
          console.log('Admin Added!');
          Alert.alert(
            'Welcome..!',
            'Your registration successfully completed.',
          );
        })
        .catch(error => {
          console.log('Error :- ', error);
          Alert.alert(
            'Database Error...!',
            'Something went wrong with adding profile details to firestore. Please try again.',
          );
        });
    } catch (error) {
      console.log('Wrong..!');
    }
  };
  useEffect(() => {
    return () => {
      setUserName(null);
      setEmail(null);
      setPassword(null);
    };
  }, []);

  const signinCheck = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email && !password) {
      Alert.alert('Please Enter your Email & Password before SignIn.');
    } else if (reg.test(email) === false) {
      Alert.alert('Please Enter Vaild Email Address..!');
    } else {
      submitData();
    }
  };

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/Background.png')}
          resizeMode="cover"
          style={Styles.AuthBackgroundImage1}
        />
        <View style={Styles.LandingBackground}>
          <Text style={Styles.AuthText}>Register</Text>
          <Text style={Styles.DescriptionText}>Create your new account</Text>
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
            onPress={() => signinCheck()}>
            <Text style={Styles.LandingButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={Styles.AuthBottomContain}>
            <Text style={Styles.DescriptionText}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={[Styles.DescriptionText, Styles.TextColor]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
