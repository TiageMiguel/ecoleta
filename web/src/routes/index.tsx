import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import CreatePoint from '../pages/createPoint';
import Home from '../pages/home';

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path='/' exact />
    <Route component={CreatePoint} path='/create-point' />
  </BrowserRouter>
);

export default Routes;
