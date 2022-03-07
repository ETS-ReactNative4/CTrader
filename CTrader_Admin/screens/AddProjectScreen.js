import React, {useState} from 'react';
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
import Styles from '../components/StyleComponent';
import HeaderComponent from '../components/HeaderComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const AddProjectScreen = ({navigation}) => {
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
      Alert.alert('Alert,', 'Done..!');
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
      <HeaderComponent Navigation={navigation} ScreenName={'Add New Project'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.ProfileContain1}>
          <Image
            style={Styles.ProfileImage}
            source={require('../assets/green_project.jpg')}
          />
          <Text style={Styles.DescriptionText}>Add new Green Project.</Text>
          <View style={Styles.InputFieldContain}>
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
          </View>
        </View>
      </ScrollView>
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity
          style={Styles.LandingButton}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={Styles.LandingButtonText}>Add Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddProjectScreen;
