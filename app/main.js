import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

import Root from './config/Root';

persist(alt, storage, 'root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
