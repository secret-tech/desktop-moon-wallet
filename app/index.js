import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './app.global.css';

import { configureStore, history } from './store/configureStore';
import Root from './containers/root/Root';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./containers/root/Root', () => {
    render(require('./containers/root/Root').default); // eslint-disable-line global-require
  });
}
