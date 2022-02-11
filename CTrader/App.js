import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingScreen from './screens/LandingScreen';
import UserProvider from './navigation/user_navigations';
import GreenProjectProvider from './navigation/green_project_navigations';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

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
        <Stack.Screen name="UserLoginScreen" component={UserProvider} />
        <Stack.Screen
          name="GreenProjectLoginScreen"
          component={GreenProjectProvider}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
