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
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const GreenUpdateProjectInfoScreen = ({navigation}) => {
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
          <View style={Styles.InputContainer}>
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

export default GreenUpdateProjectInfoScreen;
