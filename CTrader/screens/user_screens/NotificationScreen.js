import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import HeaderComponent from '../../components/user_components/HeaderComponent';
import Styles from '../../components/user_components/UserStyleComponent';
const NotificationScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <HeaderComponent Navigation={navigation} ScreenName={'Notifications'} />
      <ScrollView>
        <View style={Styles.NotificationBody}>
          <View style={Styles.NotificationCard}>
            <Text style={Styles.NotificationText1}>
              Please add your vehicle details to calculate GHG emissions on your
              vehicle.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddVehicleScreen')}
              style={Styles.NotifiButton}>
              <Text style={Styles.NotifiButtonText}>Add Vehicle Details</Text>
            </TouchableOpacity>
            <Text style={Styles.NotificationText2}>Jan 01, 2022, 18:55</Text>
          </View>
          <View style={Styles.NotificationCard}>
            <Text style={Styles.NotificationText1}>
              Please scan your vehicle's odometer to identify the driving
              distance to calculate GHG emissions on your vehicle.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ScanScreen')}
              style={Styles.NotifiButton}>
              <Text style={Styles.NotifiButtonText}>Scan Your Odometer</Text>
            </TouchableOpacity>
            <Text style={Styles.NotificationText2}>Jan 01, 2022, 19:00</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
