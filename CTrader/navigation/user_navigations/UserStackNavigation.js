import React, {useContext, useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import UserAppStack from './UserAppStack';
import UserAuthStack from './UserAuthStack';

const Stack = createNativeStackNavigator();

const UserStackNavigation = () => {
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
        <Stack.Screen name="UserAppStack" component={UserAppStack} />
      ) : (
        <Stack.Screen name="UserAuthStack" component={UserAuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default UserStackNavigation;
