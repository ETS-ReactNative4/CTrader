import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../screens/user_screens/LoginScreen';
import SignUpScreen from '../../screens/user_screens/SignUpScreen';
import ForgetPasswordScreen from '../../screens/user_screens/ForgetPasswordScreen';
import VerifyEmailScreen from '../../screens/user_screens/VerifyEmailScreen';
import NewPasswordScreen from '../../screens/user_screens/NewPasswordScreen';
import CartScreen from '../../screens/user_screens/CartScreen';
import GreenProjectDetailScreeen from '../../screens/user_screens/GreenProjectDetailScreeen';
import CheckOutScreen from '../../screens/user_screens/CheckOutScreen';
import ProfilePictureUpdateScreen from '../../screens/user_screens/ProfilePictureUpdateScreen';
import ProfileDetailsUpdateScreen from '../../screens/user_screens/ProfileDetailsUpdateScreen';
import UpdatePasswordScreen from '../../screens/user_screens/UpdatePasswordScreen';
import AddVehicleScreen from '../../screens/user_screens/AddVehicleScreen';
import UpdateVehicleScreen from '../../screens/user_screens/UpdateVehicleScreen';
import ScanScreen from '../../screens/user_screens/ScanScreen';
import ProfileScreen from '../../screens/user_screens/ProfileScreen';

import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const UserStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen
        name="GreenProjectDetailScreeen"
        component={GreenProjectDetailScreeen}
      />
      <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="ProfilePictureUpdateScreen"
        component={ProfilePictureUpdateScreen}
      />
      <Stack.Screen
        name="ProfileDetailsUpdateScreen"
        component={ProfileDetailsUpdateScreen}
      />
      <Stack.Screen
        name="UpdatePasswordScreen"
        component={UpdatePasswordScreen}
      />
      <Stack.Screen name="AddVehicleScreen" component={AddVehicleScreen} />
      <Stack.Screen
        name="UpdateVehicleScreen"
        component={UpdateVehicleScreen}
      />
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
    </Stack.Navigator>
  );
};

export default UserStackNavigation;
