import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './StyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
const HeaderComponent = ({Navigation, ScreenName}) => {
  return (
    <View style={Styles.Header}>
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <IoniconsIcons name="chevron-back" color={'#fff'} size={30} />
      </TouchableOpacity>
      <Text style={Styles.TopicText}>{ScreenName}</Text>
      <Text />
    </View>
  );
};

export default HeaderComponent;
