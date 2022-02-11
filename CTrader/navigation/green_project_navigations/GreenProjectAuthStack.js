import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GreenLoginScreen from '../../screens/green_project_screens/GreenLoginScreen';
import GreenSignUpScreen from '../../screens/green_project_screens/GreenSignUpScreen';
import GreenWatingScreen from '../../screens/green_project_screens/GreenWatingScreen';

const Stack = createNativeStackNavigator();
const GreenProjectAuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={GreenLoginScreen} />
      <Stack.Screen name="GreenSignUpScreen" component={GreenSignUpScreen} />
      <Stack.Screen name="GreenWatingScreen" component={GreenWatingScreen} />
    </Stack.Navigator>
  );
};

export default GreenProjectAuthStack;
