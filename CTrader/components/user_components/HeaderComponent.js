import React from 'react';
import {View, TouchableOpacity, Text, StatusBar} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIconsIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './UserStyleComponent';
const HeaderComponent = ({Navigation, ScreenName}) => {
  return (
    <View style={Styles.Header}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <TouchableOpacity onPress={() => Navigation.openDrawer()}>
        <FontAwesomeIcons name="bars" size={25} color={'#000'} />
      </TouchableOpacity>
      <View style={Styles.HeaderSearch}>
        <Text style={Styles.TopicText}>{ScreenName}</Text>
      </View>
      <TouchableOpacity onPress={() => Navigation.navigate('CartScreen')}>
        <MaterialCommunityIconsIcons
          name="cart-outline"
          size={25}
          color={'#000'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
