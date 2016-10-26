import 'todomvc-app-css/index.css';
import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();
const rootEl = document.getElementById('root');

try {
  render(<Root store={store} />, rootEl);
} catch (e) {
  console.error(e.stack);
}

if (process.env.NODE_ENV === 'hot' && module.hot) {
  module.hot.accept('./containers/Root', () => {
    try {
      const NextRoot = require('./containers/Root').default;
      render(<NextRoot store={store} />, rootEl);
    } catch (e) {
      console.error(e.stack);
    }
  })
}
