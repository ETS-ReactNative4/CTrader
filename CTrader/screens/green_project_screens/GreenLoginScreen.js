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
import {AuthContext} from '../../navigation/green_project_navigations/AuthProvider';

const GreenLoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);

  const {login} = useContext(AuthContext);

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
      login(email, password);
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
            <Text style={Styles.Text1}>Welcome!</Text>
            <View style={Styles.Bottom}>
              <Text style={Styles.Text3}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('GreenSignUpScreen')}>
                <Text style={Styles.Text2}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.Form}>
          <Text style={Styles.Text4}>
            Please enter Email and Password to Login.
          </Text>
          <View style={Styles.InputContainer}>
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
            <TouchableOpacity
              onPress={() => loginCheck()}
              style={Styles.Button}>
              <Text style={Styles.ButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenLoginScreen;
