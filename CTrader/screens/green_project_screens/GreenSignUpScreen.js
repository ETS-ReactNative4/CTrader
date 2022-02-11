import React, {useContext, useState} from 'react';
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
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../navigation/green_project_navigations/AuthProvider';
const GreenSignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);

  const {register} = useContext(AuthContext);

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const showPassword2 = () => {
    setSecureTextEntry2(!secureTextEntry2);
  };

  const signinCheck = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email && !password) {
      Alert.alert('Please Enter your Email & Password before SignIn.');
    } else if (reg.test(email) === false) {
      Alert.alert('Please Enter Vaild Email Address..!');
    } else if (password != confirmPassword) {
      Alert.alert('Your Confirm Password is not match to the Password.');
    } else {
      register(email, password);
    }
  };

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
          <View style={Styles.InputContainer}>
            {/* <View style={Styles.Input}>
              <FontAwesome5Icons name="industry" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Company Name"
              />
            </View>
            <View style={Styles.Input}>
              <FontAwesome5Icons name="user" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Owner's Name"
              />
            </View> */}
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
            {/* <View style={Styles.Input}>
              <FontAwesome5Icons name="envelope" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Address"
              />
            </View>
            <View style={Styles.Input}>
              <FontAwesome5Icons name="industry" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Project Name"
              />
            </View>
            <View style={Styles.Input}>
              <EntypoIcons name="leaf" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Carbon Credits Amount"
              />
            </View>
            <View style={Styles.Input}>
              <FontAwesomeIcons name="dollar" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Price for Per Carbon Credit"
              />
            </View>
            <View style={Styles.Input}>
              <MaterialIcons name="description" size={20} color="#009e60" />
              <TextInput
                multiline
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Project Description"
              />
            </View> */}
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
      <View style={Styles.ButtonContain}>
        <TouchableOpacity onPress={() => signinCheck()} style={Styles.Button}>
          <Text style={Styles.ButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreenSignUpScreen;
