import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import AppLayout from './components/AppLayout';

import Home from './routes/HomePage';

export const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  }
];

export default () => (
  <Switch>
    <LastLocationProvider>
      <AppLayout>
        { routes.map((route, i) => (
          <Route { ...route } key={ `r-${i}` } />
        )) }
      </AppLayout>
    </LastLocationProvider>
  </Switch>
);
