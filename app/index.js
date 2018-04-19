import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import '@blueprintjs/core/lib/css/blueprint.css';
import './assets/css/main.css';

import configureStore, { history } from './redux/configureStore';
import Main from './containers/app/Main';

console.log(process.env);

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./containers/app/Main', () => {
    render(require('./containers/app/Main').default); // eslint-disable-line global-require
  });
}
