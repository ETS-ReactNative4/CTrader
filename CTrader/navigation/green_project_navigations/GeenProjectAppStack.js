import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GreenTabNavigation from './GreenTabNavigation';
import GreenUpdatePasswordScreen from '../../screens/green_project_screens/GreenUpdatePasswordScreen';
import GreenUpdateInfoScreen from '../../screens/green_project_screens/GreenUpdateInfoScreen';
import GreenUpdateProjectImgScreen from '../../screens/green_project_screens/GreenUpdateProjectImgScreen';
import GreenUpdateProjectInfoScreen from '../../screens/green_project_screens/GreenUpdateProjectInfoScreen';

const Stack = createNativeStackNavigator();
const GeenProjectAppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
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

export default GeenProjectAppStack;
