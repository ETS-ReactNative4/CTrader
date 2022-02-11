import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../screens/user_screens/LoginScreen';
import SignUpScreen from '../../screens/user_screens/SignUpScreen';
import ForgetPasswordScreen from '../../screens/user_screens/ForgetPasswordScreen';
import VerifyEmailScreen from '../../screens/user_screens/VerifyEmailScreen';
import NewPasswordScreen from '../../screens/user_screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const UserAuthStack = () => {
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
    </Stack.Navigator>
  );
};

export default UserAuthStack;
