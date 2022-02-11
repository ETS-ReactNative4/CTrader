import React from 'react';
import {AuthProvider} from './AuthProvider';
import GreenProjectStackNavigation from './GreenProjectStackNavigation';

const GreenProjectProvider = () => {
  return (
    <AuthProvider>
      <GreenProjectStackNavigation />
    </AuthProvider>
  );
};

export default GreenProjectProvider;
