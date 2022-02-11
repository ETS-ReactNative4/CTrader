import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          let newEmail = 'greenProject_' + email;
          try {
            await auth().signInWithEmailAndPassword(newEmail, password);
          } catch (e) {
            Alert.alert('Please Enter the Registered Email & Password.');
          }
        },
        register: async (email, password) => {
          let newEmail = 'greenProject_' + email;
          try {
            await auth().createUserWithEmailAndPassword(newEmail, password);
          } catch (e) {
            Alert.alert(
              'Something went wrong, Please check enterd Email & Password.',
            );
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            Alert.alert('Something went wrong..!');
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
