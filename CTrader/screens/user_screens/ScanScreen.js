import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import SubHeaderComponent from '../../components/user_components/SubHeaderComponent';
const ScanScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <SubHeaderComponent
        Navigation={navigation}
        ScreenName={'Scan Your Odometer'}
      />
      <View style={Styles.ScanContain}>
        <Image
          source={require('../../assets/icons/electric-meter.png')}
          resizeMode="cover"
          style={Styles.ScanImageBack}
        />
        <View style={Styles.ScanTextContain}>
          <Text style={Styles.ScanText1}>
            Scan your vehicle's odometer to get the travel distence of the
            vehicle.
          </Text>
          <Text style={Styles.ScanText2}>000000000</Text>
        </View>
        <TouchableOpacity style={Styles.Button} onPress={() => {}}>
          <Text style={Styles.ButtonText}>Scan Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanScreen;
