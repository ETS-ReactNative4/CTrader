import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import AdminListScreen from './screens/AdminListScreen';
import RequestListScreen from './screens/RequestListScreen';
import ProjectsListScreen from './screens/ProjectsListScreen';
import UserListScreen from './screens/UserListScreen';
import ViewProjectDetailsScreen from './screens/ViewProjectDetailsScreen';
import ApproveProjectSreen from './screens/ApproveProjectSreen';
import ProfileScreen from './screens/ProfileScreen';
import AddProjectScreen from './screens/AddProjectScreen';
import UpdateInforScreen from './screens/UpdateInforScreen';
import UpdatePasswordScreen from './screens/UpdatePasswordScreen';

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
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AdminListScreen" component={AdminListScreen} />
        <Stack.Screen name="RequestListScreen" component={RequestListScreen} />
        <Stack.Screen
          name="ProjectsListScreen"
          component={ProjectsListScreen}
        />
        <Stack.Screen name="UserListScreen" component={UserListScreen} />
        <Stack.Screen
          name="ViewProjectDetailsScreen"
          component={ViewProjectDetailsScreen}
        />
        <Stack.Screen
          name="ApproveProjectSreen"
          component={ApproveProjectSreen}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AddProjectScreen" component={AddProjectScreen} />
        <Stack.Screen name="UpdateInforScreen" component={UpdateInforScreen} />
        <Stack.Screen
          name="UpdatePasswordScreen"
          component={UpdatePasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
