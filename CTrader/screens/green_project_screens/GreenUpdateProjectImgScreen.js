import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import Styles from '../../components/green_project_components/ProjectStyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const GreenUpdateProjectImgScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={Styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IoniconsIcons
            name="chevron-back"
            color={'#000'}
            size={25}
            style={Styles.BackIcon}
          />
        </TouchableOpacity>
        <Text style={Styles.TopicText}>Add Project Image</Text>
        <Text />
      </View>
      <View style={Styles.ProfileUpdateTextContain}>
        <Image
          source={require('../../assets/icons/image.png')}
          resizeMode="cover"
          style={Styles.UpdateImageBack}
        />
        <View style={Styles.UpdateTextContain}>
          <Text style={Styles.UpdateText1}>
            Capture or Upload your green project image to show your green
            project.
          </Text>
        </View>
        <TouchableOpacity style={Styles.Button} onPress={() => {}}>
          <Text style={Styles.ButtonText}>Upload Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreenUpdateProjectImgScreen;
