import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ProfileScreen from '../../screens/user_screens/ProfileScreen';
import VehicleScreen from '../../screens/user_screens/VehicleScreen';
import TabNavigation from './TabNavigation';
import DrawerContentComponent from '../../components/user_components/DrawerContentComponent';
import ScanScreen from '../../screens/user_screens/ScanScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContentComponent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={TabNavigation} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="VehicleScreen" component={VehicleScreen} />
      <Drawer.Screen name="ScanScreen" component={ScanScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
