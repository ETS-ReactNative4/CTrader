import React, {useContext, useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import firestore from '@react-native-firebase/firestore';

import GreenProjectAuthStack from './GreenProjectAuthStack';
import GeenProjectAppStack from './GeenProjectAppStack';
import GreenWatingScreen from '../../screens/green_project_screens/GreenWatingScreen';

const Stack = createNativeStackNavigator();
const GreenProjectStackNavigation = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [approvement, setApprovement] = useState('No');

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

  if (user != null) {
    firestore()
      .collection('green_projects')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          var userdata = documentSnapshot.data();
          setApprovement(userdata.approve);
        }
      });
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen">
      {!user ? (
        <Stack.Screen name="UserAuthStack" component={GreenProjectAuthStack} />
      ) : approvement == 'Yes' ? (
        <Stack.Screen name="UserAppStack" component={GeenProjectAppStack} />
      ) : (
        <Stack.Screen name="GreenWatingScreen" component={GreenWatingScreen} />
      )}
    </Stack.Navigator>
  );
};

export default GreenProjectStackNavigation;
