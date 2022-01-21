import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import GreenHomeScreen from '../../screens/green_project_screens/GreenHomeScreen';
import GreenProfileScreen from '../../screens/green_project_screens/GreenProfileScreen';
import GreenProjectScreen from '../../screens/green_project_screens/GreenProjectScreen';

const Tab = createBottomTabNavigator();

const GreenTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#a9a9a9',
      }}>
      <Tab.Screen
        name="Home"
        component={GreenHomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#009e60',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'NunitoSans-Bold',
            paddingBottom: 10,
          },
          tabBarStyle: {
            height: 65,
            paddingTop: 5,
            borderTopColor: '#000',
          },
          tabBarIcon: tabInfo => (
            <IoniconsIcons
              name="md-home"
              color={tabInfo.focused ? '#009e60' : '#8e8e93'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GreenProjectScreen"
        component={GreenProjectScreen}
        options={{
          tabBarLabel: 'Project',
          tabBarActiveTintColor: '#009e60',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'NunitoSans-Bold',
            paddingBottom: 10,
          },
          tabBarStyle: {
            height: 65,
            paddingTop: 5,
            borderTopColor: '#000',
          },
          tabBarIcon: tabInfo => (
            <OcticonsIcons
              name="project"
              color={tabInfo.focused ? '#009e60' : '#8e8e93'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={GreenProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: '#009e60',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'NunitoSans-Bold',
            paddingBottom: 10,
          },
          tabBarStyle: {
            height: 65,
            paddingTop: 5,
            borderTopColor: '#000',
          },
          tabBarIcon: tabInfo => (
            <FontAwesome5Icons
              name="user-alt"
              color={tabInfo.focused ? '#009e60' : '#8e8e93'}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default GreenTabNavigation;
