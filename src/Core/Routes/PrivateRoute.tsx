import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute: React.FC<any> = ({ component, isAuthenticated, ...rest }: any) => (
  <Route {...rest} render={(props: any) => (
    isAuthenticated
      ? React.createElement(component, props)
      : <Redirect to={{ pathname: '/login' }} />
  )} />
);