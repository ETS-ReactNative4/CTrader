import React, {useContext, useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import GreenProjectAuthStack from './GreenProjectAuthStack';
import GeenProjectAppStack from './GeenProjectAppStack';

const Stack = createNativeStackNavigator();
const GreenProjectStackNavigation = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen">
      {user ? (
        <Stack.Screen name="UserAppStack" component={GeenProjectAppStack} />
      ) : (
        <Stack.Screen name="UserAuthStack" component={GreenProjectAuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default GreenProjectStackNavigation;
