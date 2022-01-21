import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import Styles from '../../components/green_project_components/ProjectStyleComponent';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const GreenUpdateInfoScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ScrollView>
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
          <View style={Styles.InputContainer}>
            <View style={Styles.Input}>
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
            </View>
            <View style={Styles.Input}>
              <EntypoIcons name="email" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Email"
              />
            </View>
            <View style={Styles.Input}>
              <FontAwesome5Icons name="envelope" size={20} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Address"
              />
            </View>
            <TouchableOpacity onPress={() => {}} style={Styles.Button}>
              <Text style={Styles.ButtonText}>Update Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenUpdateInfoScreen;
