import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Styles from '../components/StyleComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const RequestListScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <HeaderComponent Navigation={navigation} ScreenName={'Request List'} />
      <View style={Styles.ListCardContain}>
        <View style={Styles.ListCardTop}>
          <View style={Styles.ListCardBottom}>
            <Text style={Styles.ListIndexText}>1</Text>
            <Image
              style={Styles.UserImg}
              source={require('../assets/user/user.jpg')}
            />
            <View style={Styles.ListTextContain}>
              <Text style={Styles.ListText1}>Burgos Wind Project</Text>
              <Text style={Styles.ListText2}>Burgos (PVT) .Ltd</Text>
              <Text style={Styles.ListText2}>Colombo</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ApproveProjectSreen')}
            style={Styles.ListCardView}>
            <Text style={Styles.ListText4}>View Now</Text>
            <MaterialIcons name="navigate-next" size={26} color="#009e60" />
          </TouchableOpacity>
        </View>
        <View style={Styles.ListCardTop}>
          <View style={Styles.ListCardBottom}>
            <Text style={Styles.ListIndexText}>2</Text>
            <Image
              style={Styles.UserImg}
              source={require('../assets/user/user.jpg')}
            />
            <View style={Styles.ListTextContain}>
              <Text style={Styles.ListText1}>Burgos Wind Project</Text>
              <Text style={Styles.ListText2}>Burgos (PVT) .Ltd</Text>
              <Text style={Styles.ListText2}>Colombo</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ApproveProjectSreen')}
            style={Styles.ListCardView}>
            <Text style={Styles.ListText4}>View Now</Text>
            <MaterialIcons name="navigate-next" size={26} color="#009e60" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RequestListScreen;
