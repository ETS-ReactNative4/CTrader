import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import Styles from '../../components/green_project_components/ProjectStyleComponent';

const GreenWatingScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={Styles.WaitContain}>
        <View style={Styles.WaitTopic}>
          <Text style={Styles.WaitText1}>Hello, Jesika...</Text>
        </View>
        <Image
          style={Styles.WaitImage}
          source={require('../../assets/icons/wait.png')}
        />
        <View style={Styles.WaitTextContain}>
          <Text style={Styles.WaitText2}>
            Your account is not Approved till now. Our team is checking your
            profile. Soon you will part of our App.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('GreenTabNavigation')}
          style={Styles.Button}>
          <Text style={Styles.ButtonText}>Continue for Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreenWatingScreen;
