import React, {useContext, useState, useEffect, useRef} from 'react';
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
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/green_project_navigations/AuthProvider';

const {width} = Dimensions.get('window');

const GreenUpdateProjectInfoScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [projectName, setProjectName] = useState('');
  const [creditsAmount, setCreditsAmount] = useState('');
  const [creditPrice, setCreditPrice] = useState('');
  const [description, setDescription] = useState('');

  const submitData = async () => {
    firestore()
      .collection('green_projects')
      .doc(user.uid)
      .update({
        projectName: projectName,
        creditsAmount: creditsAmount,
        creditPrice: creditPrice,
        description: description,
      })
      .then(() => {
        console.log('User Details Updated!');
        Alert.alert(
          'Task Completed,',
          'Your profile has been successfully updated...!',
        );
        setProjectName(null);
        setCreditsAmount(null);
        setCreditPrice(null);
        setDescription(null);
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert(
          'Error..!',
          'Something went wrong with added profile details to firestore.',
        );
      });
  };

  const updateCheck = () => {
    if (!projectName) {
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
      setProjectName(null);
      setCreditsAmount(null);
      setCreditPrice(null);
      setDescription(null);
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
          <View style={Styles.BackButton}>
            <TouchableOpacity onPress={() => navigation.goBack('')}>
              <IoniconsIcons name="chevron-back" color={'#fff'} size={25} />
            </TouchableOpacity>
          </View>
          <View style={Styles.ScreenTopic}>
            <Text style={Styles.Text1}>Update Your Project Infor</Text>
            <Text style={Styles.Text3}>
              Do you want to update your project infor?
            </Text>
          </View>
        </View>
        <View style={Styles.Form}>
          <Text style={Styles.Text4}>
            Please enter new details on your Green Project.
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
        </View>
      </ScrollView>
      <View style={Styles.ButtonContain}>
        <TouchableOpacity onPress={() => updateCheck()} style={Styles.Button}>
          <Text style={Styles.ButtonText}>Update Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreenUpdateProjectInfoScreen;
