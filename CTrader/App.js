import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingScreen from './screens/LandingScreen';
import UserStackNavigation from './navigation/user_navigations/UserStackNavigation';
import GreenProjectStackNavigation from './navigation/green_project_navigations/GreenProjectStackNavigation';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LandingScreen">
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="UserLoginScreen" component={UserStackNavigation} />
        <Stack.Screen
          name="GreenProjectLoginScreen"
          component={GreenProjectStackNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
