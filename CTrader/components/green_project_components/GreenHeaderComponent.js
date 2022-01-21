import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './ProjectStyleComponent';

const GreenHeaderComponent = ({Navigation}) => {
  return (
    <View style={Styles.HeaderContain}>
      <Image
        style={Styles.HeaderIcon}
        source={require('../../assets/icons/logo2.png')}
      />
      <TouchableOpacity onPress={() => Navigation.navigate('LoginScreen')}>
        <MaterialCommunityIcons name="logout" size={25} color={'#009e60'} />
      </TouchableOpacity>
    </View>
  );
};

export default GreenHeaderComponent;
