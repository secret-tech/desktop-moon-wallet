/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import AuthWrapper from './containers/app/AuthWrapper';

export default () => (
  <div>
    <Switch>
      <Route path="/" component={AuthWrapper} />
    </Switch>
  </div>
);
