import React, { useEffect } from 'react';
import HomeView from './home.view';
import { clearData } from '../../utils/helper';

export const HomeContainer = () => {
  useEffect(() => {
    clearData();
  });

  return <HomeView />;
};
