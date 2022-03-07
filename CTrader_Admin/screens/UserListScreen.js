import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Styles from '../components/StyleComponent';
const UserListScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <HeaderComponent Navigation={navigation} ScreenName={'User List'} />
      <View style={Styles.ListCardContain}>
        <View style={Styles.ListCard}>
          <Text style={Styles.ListIndexText}>1</Text>
          <Image
            style={Styles.UserImg}
            source={require('../assets/user/user.jpg')}
          />
          <View style={Styles.ListTextContain}>
            <Text style={Styles.ListText1}>Thimira Madusanka</Text>
            <Text style={Styles.ListText2}>thimira@gmail.com</Text>
            <View style={Styles.ListTextDes}>
              <Text style={Styles.ListText3}>Vehicle Type:</Text>
              <Text style={Styles.ListText2}>Car</Text>
            </View>
            <View style={Styles.ListTextDes}>
              <Text style={Styles.ListText3}>Fuel Type:</Text>
              <Text style={Styles.ListText2}>Petrol</Text>
            </View>
          </View>
        </View>
        <View style={Styles.ListCard}>
          <Text style={Styles.ListIndexText}>2</Text>
          <Image
            style={Styles.UserImg}
            source={require('../assets/user/user.jpg')}
          />
          <View style={Styles.ListTextContain}>
            <Text style={Styles.ListText1}>Thimira Madusanka</Text>
            <Text style={Styles.ListText2}>thimira@gmail.com</Text>
            <View style={Styles.ListTextDes}>
              <Text style={Styles.ListText3}>Vehicle Type:</Text>
              <Text style={Styles.ListText2}>Car</Text>
            </View>
            <View style={Styles.ListTextDes}>
              <Text style={Styles.ListText3}>Fuel Type:</Text>
              <Text style={Styles.ListText2}>Petrol</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserListScreen;
