import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Styles from './UserStyleComponent';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const DrawerContentComponent = props => {
  return (
    <View style={Styles.Container}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          style={Styles.CrossIcon}>
          <EntypoIcons
            name="cross"
            size={25}
            color={'rgb(0,158,96)'}
            style={Styles.CrossIconContain}
          />
        </TouchableOpacity>
        <View style={Styles.DrawerHeader}>
          <Image
            style={Styles.DrawerImg}
            source={require('../../assets/user/user.jpg')}
          />
          <View style={Styles.DrawerTextContain}>
            <Text style={Styles.DrawerText3}>John Makathi</Text>
            <Text style={Styles.DrawerText1}>john@gmail.com</Text>
          </View>
        </View>
        <View style={Styles.DrawerTitle}>
          <Text style={Styles.DrawerText2}>Menu</Text>
        </View>
        <DrawerItem
          icon={() => <Ionicons name="md-home" color={'#5e5e5e'} size={25} />}
          label={() => (
            <View style={Styles.DrawerLabel}>
              <Text style={Styles.DrawerText}>Home</Text>
              <Ionicons name="chevron-forward" color={'#5e5e5e'} size={25} />
            </View>
          )}
          onPress={() => {
            props.navigation.navigate('HomeScreen');
          }}
        />
        <DrawerItem
          icon={() => (
            <FontistoIcons name="person" color={'#5e5e5e'} size={25} />
          )}
          label={() => (
            <View style={Styles.DrawerLabel}>
              <Text style={Styles.DrawerText}>Profile</Text>
              <Ionicons name="chevron-forward" color={'#5e5e5e'} size={25} />
            </View>
          )}
          onPress={() => {
            props.navigation.navigate('ProfileScreen');
          }}
        />
        <DrawerItem
          icon={() => <Ionicons name="md-car" color={'#5e5e5e'} size={25} />}
          label={() => (
            <View style={Styles.DrawerLabel}>
              <Text style={Styles.DrawerText}>Vehicle</Text>
              <Ionicons name="chevron-forward" color={'#5e5e5e'} size={25} />
            </View>
          )}
          onPress={() => {
            props.navigation.navigate('VehicleScreen');
          }}
        />
        <DrawerItem
          icon={() => (
            <Ionicons name="md-scan-sharp" color={'#5e5e5e'} size={25} />
          )}
          label={() => (
            <View style={Styles.DrawerLabel}>
              <Text style={Styles.DrawerText}>Scan Now</Text>
              <Ionicons name="chevron-forward" color={'#5e5e5e'} size={25} />
            </View>
          )}
          onPress={() => {
            props.navigation.navigate('ScanScreen');
          }}
        />
      </DrawerContentScrollView>
      <View style={Styles.DrawerFooter}>
        <DrawerItem
          icon={() => (
            <MaterialIcons name="logout" color={'#5e5e5e'} size={25} />
          )}
          label="Sign Out"
          labelStyle={Styles.DrawerText}
          onPress={() => {
            props.navigation.navigate('LoginScreen');
          }}
        />
      </View>
    </View>
  );
};

export default DrawerContentComponent;
