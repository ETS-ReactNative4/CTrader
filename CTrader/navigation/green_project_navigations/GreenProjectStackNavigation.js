import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GreenLoginScreen from '../../screens/green_project_screens/GreenLoginScreen';
import GreenSignUpScreen from '../../screens/green_project_screens/GreenSignUpScreen';
import GreenTabNavigation from './GreenTabNavigation';
import GreenUpdatePasswordScreen from '../../screens/green_project_screens/GreenUpdatePasswordScreen';
import GreenUpdateInfoScreen from '../../screens/green_project_screens/GreenUpdateInfoScreen';
import GreenUpdateProjectImgScreen from '../../screens/green_project_screens/GreenUpdateProjectImgScreen';
import GreenUpdateProjectInfoScreen from '../../screens/green_project_screens/GreenUpdateProjectInfoScreen';
import GreenWatingScreen from '../../screens/green_project_screens/GreenWatingScreen';

const Stack = createNativeStackNavigator();
const GreenProjectStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={GreenLoginScreen} />
      <Stack.Screen name="GreenSignUpScreen" component={GreenSignUpScreen} />
      <Stack.Screen name="GreenWatingScreen" component={GreenWatingScreen} />
      <Stack.Screen name="GreenTabNavigation" component={GreenTabNavigation} />
      <Stack.Screen
        name="GreenUpdatePasswordScreen"
        component={GreenUpdatePasswordScreen}
      />
      <Stack.Screen
        name="GreenUpdateInfoScreen"
        component={GreenUpdateInfoScreen}
      />
      <Stack.Screen
        name="GreenUpdateProjectImgScreen"
        component={GreenUpdateProjectImgScreen}
      />
      <Stack.Screen
        name="GreenUpdateProjectInfoScreen"
        component={GreenUpdateProjectInfoScreen}
      />
    </Stack.Navigator>
  );
};

export default GreenProjectStackNavigation;
