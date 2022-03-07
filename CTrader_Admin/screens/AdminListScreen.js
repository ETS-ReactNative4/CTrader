import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Styles from '../components/StyleComponent';

const AdminListScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <HeaderComponent Navigation={navigation} ScreenName={'Admin List'} />
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
          </View>
        </View>
        <View style={Styles.ListCard}>
          <Text style={Styles.ListIndexText}>3</Text>
          <Image
            style={Styles.UserImg}
            source={require('../assets/user/user.jpg')}
          />
          <View style={Styles.ListTextContain}>
            <Text style={Styles.ListText1}>Thimira Madusanka</Text>
            <Text style={Styles.ListText2}>thimira@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdminListScreen;
