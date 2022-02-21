import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../screens/user_screens/HomeScreen';
import GreenProjectsScreen from '../../screens/user_screens/GreenProjectsScreen';
import NotificationScreen from '../../screens/user_screens/NotificationScreen';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#a9a9a9',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
        name="GreenProjectsScreen"
        component={GreenProjectsScreen}
        options={{
          tabBarLabel: 'Green Projects',
          tabBarActiveTintColor: '#009e60',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'NunitoSans-Bold',
            paddingBottom: 10,
          },
          tabBarStyle: {
            height: 65,
            paddingTop: 5,
          },
          tabBarIcon: tabInfo => (
            <MaterialCommunityIcons
              name="factory"
              color={tabInfo.focused ? '#009e60' : '#8e8e93'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarBadge: 1,
          tabBarActiveTintColor: '#009e60',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'NunitoSans-Bold',
            paddingBottom: 10,
          },
          tabBarStyle: {
            height: 65,
            paddingTop: 5,
          },
          tabBarIcon: tabInfo => (
            <MaterialCommunityIcons
              name="bell"
              color={tabInfo.focused ? '#009e60' : '#8e8e93'}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
