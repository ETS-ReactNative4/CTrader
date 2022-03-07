import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  TextInput,
  Alert,
} from 'react-native';
import Styles from '../components/StyleComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
const SignUpScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const loginCheck = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email && !password) {
      Alert.alert('Please Enter your Email & Password before SignIn.');
    } else if (reg.test(email) === false) {
      Alert.alert('Please Enter Vaild Email Address..!');
    } else {
      Alert.alert('Done');
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
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={Styles.LandingButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={Styles.AuthBottomContain}>
          <Text style={Styles.DescriptionText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[Styles.DescriptionText, Styles.TextColor]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
