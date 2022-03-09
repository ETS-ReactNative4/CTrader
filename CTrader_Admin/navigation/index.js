import React from 'react';
import {AuthProvider} from './AuthProvider';
import StackNavigation from './StackNavigation';

const Provider = () => {
  return (
    <AuthProvider>
      <StackNavigation />
    </AuthProvider>
  );
};

export default Provider;
