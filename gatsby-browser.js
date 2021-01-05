import React from 'react';
import Layout from './src/components/Layout';
import { StoreContextProvider } from './src/utils/context/storeContext';

export const wrapRootElement = ({ element }) => (
  <StoreContextProvider>{element}</StoreContextProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
