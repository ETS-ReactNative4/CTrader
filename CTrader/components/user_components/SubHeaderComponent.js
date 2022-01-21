import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './UserStyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
const SubHeaderComponent = ({Navigation, ScreenName}) => {
  return (
    <View style={Styles.Header}>
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <IoniconsIcons
          name="chevron-back"
          color={'#000'}
          size={25}
          style={Styles.BackIcon}
        />
      </TouchableOpacity>
      <Text style={Styles.TopicText}>{ScreenName}</Text>
      <Text />
    </View>
  );
};

export default SubHeaderComponent;
