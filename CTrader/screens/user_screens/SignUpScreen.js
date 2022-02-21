import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  Alert,
  Animated,
  Dimensions,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../../components/user_components/UserStyleComponent';
import ModalDropdown from 'react-native-modal-dropdown';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const {width} = Dimensions.get('window');

const SignUpScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [secureTextEntry1, setSecureTextEntry1] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);

  const [formIndex, setFormIndex] = useState(0);

  let vehicleTypes = ['Motor Bike', 'Car', 'Van', 'Lorry', 'Bus', 'Threwheel'];
  let fuelTypes = ['Petrol', 'Diesel'];

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const showPassword2 = () => {
    setSecureTextEntry2(!secureTextEntry2);
  };

  const submitData = async () => {
    let newEmail = 'user_' + email;
    try {
      const userAuth = await auth().createUserWithEmailAndPassword(
        newEmail,
        password,
      );
      const userId = userAuth.user.uid;
      await firestore()
        .collection('users')
        .doc(userId)
        .set({
          userId: userId,
          fullName: fullName,
          vehicleType: vehicleTypes[vehicleType],
          fuelType: fuelTypes[fuelType],
          email: email,
          profileImage: '',
          odometerValue: '',
        })
        .then(() => {
          console.log('User Added!');
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

  const scrollX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      setFormIndex(index);
    });
    return () => {
      scrollX.removeAllListeners();
      setFullName(null);
      setVehicleType(null);
      setFuelType(null);
      setEmail(null);
      setPassword(null);
      setConfirmPassword(null);
    };
  }, []);
  const signinCheck = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!fullName) {
      Alert.alert('Alert,', 'Please Enter Your Full Name...!');
    } else if (vehicleTypes[vehicleType] == undefined) {
      Alert.alert('Alert,', 'Please Select Your Vehicle Type...!');
    } else if (fuelTypes[fuelType] == undefined) {
      Alert.alert('Alert,', 'Please Select Your Vehicle Fuel Type...!');
    } else if (!email && !password) {
      Alert.alert('Please Enter your Email & Password before SignIn.');
    } else if (reg.test(email) === false) {
      Alert.alert('Alert,', 'Please Enter Vaild Email Address..!');
    } else if (password != confirmPassword) {
      Alert.alert(
        'Alert,',
        'Your Confirm Password is not match to the Password.',
      );
    } else {
      submitData();
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
        source={require('../../assets/background_images/ScreensBg.jpg')}
        resizeMode="cover"
        style={Styles.BackgroundImage1}>
        <View style={Styles.BackgroundColor1}>
          <Image
            style={Styles.Logo}
            source={require('../../assets/icons/logo.png')}
          />
          <Text style={Styles.Text4}>Create Your Account</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animated.ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollX},
                  },
                },
              ],
              {useNativeDriver: true},
            )}>
            <Animated.View style={Styles.InputContainerSignUp}>
              <View style={Styles.Input}>
                <SimpleLineIcons name="user" size={20} color="#009e60" />
                <TextInput
                  style={Styles.InputField}
                  placeholderTextColor="#009e60"
                  placeholder="Full Name"
                  value={fullName}
                  onChangeText={userName => setFullName(userName)}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <View style={Styles.DropInput}>
                <IoniconsIcons name="car" size={20} color="#009e60" />
                <ModalDropdown
                  options={vehicleTypes}
                  style={Styles.DropDownMenu}
                  showsVerticalScrollIndicator={false}
                  dropdownStyle={Styles.DropDownOption}
                  dropdownTextStyle={Styles.DropDownOptionText}
                  onSelect={userVehicle => setVehicleType(userVehicle)}>
                  <Text style={Styles.DropDownText}>
                    {vehicleTypes[vehicleType] == undefined
                      ? 'Select Your Vehicle Type'
                      : vehicleTypes[vehicleType]}
                  </Text>
                </ModalDropdown>
              </View>
              <View style={Styles.DropInput}>
                <MaterialCommunityIcons name="fuel" size={20} color="#009e60" />
                <ModalDropdown
                  options={fuelTypes}
                  style={Styles.DropDownMenu}
                  showsVerticalScrollIndicator={false}
                  dropdownStyle={Styles.DropDownOption}
                  dropdownTextStyle={Styles.DropDownOptionText}
                  onSelect={usefuel => setFuelType(usefuel)}>
                  <Text style={Styles.DropDownText}>
                    {fuelTypes[fuelType] == undefined
                      ? 'Select Your Vehicle Fuel Type'
                      : fuelTypes[fuelType]}
                  </Text>
                </ModalDropdown>
              </View>
            </Animated.View>
            <Animated.View style={Styles.InputContainerSignUp}>
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
            </Animated.View>
          </Animated.ScrollView>
          <View style={Styles.ScrollDotsContain}>
            <View
              style={[
                Styles.ScrollDot,
                {
                  width: formIndex == 0 ? 20 : 10,
                  backgroundColor: formIndex == 0 ? '#009e60' : '#5e5e5e',
                },
              ]}
            />
            <View
              style={[
                Styles.ScrollDot,
                {
                  width: formIndex == 1 ? 20 : 10,
                  backgroundColor: formIndex == 1 ? '#009e60' : '#5e5e5e',
                },
              ]}
            />
          </View>
          <TouchableOpacity style={Styles.Button} onPress={() => signinCheck()}>
            <Text style={Styles.ButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={Styles.Bottom}>
            <Text style={Styles.Text3}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={Styles.Text2}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpScreen;
