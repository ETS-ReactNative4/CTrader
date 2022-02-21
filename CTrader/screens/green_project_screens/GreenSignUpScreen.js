import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
  Animated,
  Dimensions,
} from 'react-native';
import Styles from '../../components/green_project_components/ProjectStyleComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const {width} = Dimensions.get('window');
const GreenSignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [address, setAddress] = useState('');
  const [projectName, setProjectName] = useState('');
  const [creditsAmount, setCreditsAmount] = useState('');
  const [creditPrice, setCreditPrice] = useState('');
  const [description, setDescription] = useState('');

  const [secureTextEntry1, setSecureTextEntry1] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const showPassword2 = () => {
    setSecureTextEntry2(!secureTextEntry2);
  };

  const submitData = async () => {
    let newEmail = 'greenProject_' + email;
    await auth()
      .createUserWithEmailAndPassword(newEmail, password)
      .then(res => {
        firestore()
          .collection('green_projects')
          .doc(res.user.uid)
          .set({
            userId: res.user.uid,
            companyName: companyName,
            ownerName: ownerName,
            address: address,
            projectName: projectName,
            creditsAmount: creditsAmount,
            creditPrice: creditPrice,
            description: description,
            email: email,
            projImage: '',
            approve: 'No',
          })
          .then(() => {
            console.log('User Added!');
            Alert.alert(
              'Welcome...!,',
              'Your registration has been successfully completed.',
            );
          })
          .catch(error => {
            console.log(error.message);
            Alert.alert(
              'Error..!',
              'Something went wrong with added profile details to firestore.',
            );
          });
      });
  };

  const signinCheck = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!companyName) {
      Alert.alert('Alert,', 'You are forget to enter Company Name...!');
    } else if (!ownerName) {
      Alert.alert('Alert,', "You are forget to enter Owner's Name...!");
    } else if (!address) {
      Alert.alert('Alert,', 'You are forget to enter Address...!');
    } else if (!projectName) {
      Alert.alert('Alert,', 'You are forget to enter Project Name...!');
    } else if (!creditsAmount) {
      Alert.alert(
        'Alert,',
        'You are forget to enter your Carbon Credit Amount...!',
      );
    } else if (!creditPrice) {
      Alert.alert(
        'Alert,',
        'You are forget to enter your Price for Per Carbon Credit...!',
      );
    } else if (!description) {
      Alert.alert('Alert,', 'You are forget to enter Description...!');
    } else if (!email) {
      Alert.alert('Alert,', 'You are forget to enter your Email...!');
    } else if (!password) {
      Alert.alert('Alert,', 'You are forget to enter your Password...!');
    } else if (reg.test(email) === false) {
      Alert.alert('Alert,', 'Please Enter Vaild Email Address..!');
    } else if (password != confirmPassword) {
      Alert.alert(
        'Alert,',
        'Your Confirm Password is not match to the Password...!',
      );
    } else {
      submitData();
    }
  };

  const scrollX = useRef(new Animated.Value(0)).current;
  const [formIndex, setFormIndex] = useState(0);
  useEffect(() => {
    scrollX.addListener(({value}) => {
      const index = Math.round(value / width);
      setFormIndex(index);
    });
    return () => {
      scrollX.removeAllListeners();
      setCompanyName(null);
      setOwnerName(null);
      setAddress(null);
      setProjectName(null);
      setCreditsAmount(null);
      setCreditPrice(null);
      setDescription(null);
      setEmail(null);
      setPassword(null);
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
          <View style={Styles.ScreenTopic3}>
            <Image
              style={Styles.Logo}
              source={require('../../assets/icons/logo.png')}
            />
            <Text style={Styles.Text1}>Create Your Account</Text>
            <View style={Styles.Bottom}>
              <Text style={Styles.Text3}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={Styles.Text2}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.Form}>
          <Text style={Styles.Text4}>
            Please enter your organization and green project details.
          </Text>
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
                <FontAwesome5Icons name="industry" size={20} color="#009e60" />
                <TextInput
                  style={Styles.InputField}
                  placeholderTextColor="#009e60"
                  placeholder="Company Name"
                  value={companyName}
                  onChangeText={userCompanyName =>
                    setCompanyName(userCompanyName)
                  }
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <View style={Styles.Input}>
                <FontAwesome5Icons name="user" size={20} color="#009e60" />
                <TextInput
                  style={Styles.InputField}
                  placeholderTextColor="#009e60"
                  placeholder="Owner's Name"
                  value={ownerName}
                  onChangeText={userOwnerName => setOwnerName(userOwnerName)}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <View style={Styles.Input}>
                <FontAwesome5Icons name="envelope" size={20} color="#009e60" />
                <TextInput
                  style={Styles.InputField}
                  placeholderTextColor="#009e60"
                  placeholder="Address"
                  value={address}
                  onChangeText={userAddress => setAddress(userAddress)}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </Animated.View>
            <Animated.View style={Styles.InputContainerSignUp}>
              <View style={Styles.Input}>
                <FontAwesome5Icons name="industry" size={20} color="#009e60" />
                <TextInput
                  style={Styles.InputField}
                  placeholderTextColor="#009e60"
                  placeholder="Project Name"
                  value={projectName}
                  onChangeText={userProjectName =>
                    setProjectName(userProjectName)
                  }
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <View style={Styles.Input}>
                <EntypoIcons name="leaf" size={20} color="#009e60" />
                <TextInput
                  style={Styles.InputField}
                  placeholderTextColor="#009e60"
                  placeholder="Carbon Credits Amount"
                  value={creditsAmount}
                  onChangeText={useCreditsAmount =>
                    setCreditsAmount(useCreditsAmount)
                  }
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType={'numeric'}
                />
              </View>
              <View style={Styles.Input}>
                <FontAwesomeIcons name="dollar" size={20} color="#009e60" />
                <TextInput
                  style={Styles.InputField}
                  placeholderTextColor="#009e60"
                  placeholder="Price for Per Carbon Credit"
                  value={creditPrice}
                  onChangeText={userCreditPrice =>
                    setCreditPrice(userCreditPrice)
                  }
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType={'numeric'}
                />
              </View>
            </Animated.View>
            <Animated.View style={Styles.InputContainerSignUp}>
              <View style={Styles.InputMulti}>
                <View style={Styles.InputMultiBack}>
                  <MaterialIcons name="description" size={20} color="#009e60" />
                  <TextInput
                    multiline
                    style={Styles.InputFieldMulti}
                    placeholderTextColor="#009e60"
                    placeholder="Project Description"
                    value={description}
                    onChangeText={userDescription =>
                      setDescription(userDescription)
                    }
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>
            </Animated.View>
            <Animated.View style={Styles.InputContainerSignUp}>
              <View style={Styles.Input}>
                <EntypoIcons name="email" size={20} color="#009e60" />
                <TextInput
                  style={Styles.InputField}
                  placeholderTextColor="#009e60"
                  placeholder="Email"
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
            <View
              style={[
                Styles.ScrollDot,
                {
                  width: formIndex == 2 ? 20 : 10,
                  backgroundColor: formIndex == 2 ? '#009e60' : '#5e5e5e',
                },
              ]}
            />
            <View
              style={[
                Styles.ScrollDot,
                {
                  width: formIndex == 3 ? 20 : 10,
                  backgroundColor: formIndex == 3 ? '#009e60' : '#5e5e5e',
                },
              ]}
            />
          </View>
        </View>
      </ScrollView>
      <View style={Styles.ButtonContain}>
        <TouchableOpacity onPress={() => signinCheck()} style={Styles.Button}>
          <Text style={Styles.ButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreenSignUpScreen;
