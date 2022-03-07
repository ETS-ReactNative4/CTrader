import React, {useState} from 'react';
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
const UpdateInforScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);

  const showPassword1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const loginCheck = () => {
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
      Alert.alert('Done');
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
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={Styles.LandingButtonText}>Update Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateInforScreen;
