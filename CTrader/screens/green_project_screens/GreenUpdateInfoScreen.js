import React, {useState, useEffect, useRef} from 'react';
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
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const {width} = Dimensions.get('window');

const GreenUpdateInfoScreen = ({navigation}) => {
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [address, setAddress] = useState('');

  const [secureTextEntry1, setSecureTextEntry1] = useState(true);

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const reauthenticate = currentPassword => {
    var user = auth().currentUser;
    var cred = auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  };

  // Changes user's email...
  const onChangeEmailPress = () => {
    let emailAddress = 'greenProject_' + newEmail;
    reauthenticate(currentPassword)
      .then(() => {
        var user = auth().currentUser;
        user
          .updateEmail(emailAddress)
          .then(() => {
            console.log('Email & Name successfully updated...!');
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

  const submitData = async () => {
    onChangeEmailPress();
    await firestore()
      .collection('green_projects')
      .doc(auth().currentUser.uid)
      .update({
        companyName: companyName,
        ownerName: ownerName,
        address: address,
        email: newEmail,
      })
      .then(() => {
        console.log('User Details Updated!');
        Alert.alert(
          'Task Completed,',
          'Your profile has been successfully updated...!',
        );
        setCompanyName(null);
        setOwnerName(null);
        setAddress(null);
        setNewEmail(null);
        setCurrentPassword(null);
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert(
          'Error..!',
          'Something went wrong with added profile details to firestore.',
        );
      });
  };

  const updateEmailNow = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!companyName) {
      Alert.alert('Alert,', 'You are forget to enter Company Name...!');
    } else if (!ownerName) {
      Alert.alert('Alert,', "You are forget to enter Owner's Name...!");
    } else if (!address) {
      Alert.alert('Alert,', 'You are forget to enter Address...!');
    } else if (!newEmail) {
      Alert.alert('Alert,', 'You are forget to enter your Email...!');
    } else if (!currentPassword) {
      Alert.alert('Alert,', 'You are forget to enter your Password...!');
    } else if (reg.test(newEmail) === false) {
      Alert.alert('Alert,', 'Please Enter Vaild Email Address...!');
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
      setNewEmail(null);
      setCurrentPassword(null);
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
          style={Styles.BackgroundImage1}
        />
        <View style={Styles.BackgroundColor1}>
          <View style={Styles.BackButton}>
            <TouchableOpacity onPress={() => navigation.goBack('')}>
              <IoniconsIcons name="chevron-back" color={'#fff'} size={25} />
            </TouchableOpacity>
          </View>
          <View style={Styles.ScreenTopic1}>
            <Text style={Styles.Text1}>Update Your Basic Infor</Text>
            <Text style={Styles.Text3}>
              Do you want to update your basic infor?
            </Text>
          </View>
        </View>
        <View style={Styles.Form}>
          <Text style={Styles.Text4}>
            Please enter new details on your Company.
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
                  onChangeText={userownerName => setOwnerName(userownerName)}
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
                <EntypoIcons name="email" size={20} color="#009e60" />
                <TextInput
                  style={Styles.InputField}
                  placeholderTextColor="#009e60"
                  placeholder="New Email"
                  value={newEmail}
                  onChangeText={userNewEmail => setNewEmail(userNewEmail)}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
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
          <View style={Styles.ButtonContain}>
            <TouchableOpacity onPress={updateEmailNow} style={Styles.Button}>
              <Text style={Styles.ButtonText}>Update Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenUpdateInfoScreen;
