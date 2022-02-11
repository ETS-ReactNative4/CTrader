import React from 'react';
import {AuthProvider} from './AuthProvider';
import UserStackNavigation from './UserStackNavigation';

const UserProvider = () => {
  return (
    <AuthProvider>
      <UserStackNavigation />
    </AuthProvider>
  );
};

export default UserProvider;
