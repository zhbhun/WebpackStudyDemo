import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import TodoApp from './TodoApp';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <AppContainer>
        <Provider store={store}>
          <div>
            <TodoApp />
            <DevTools />
          </div>
        </Provider>
      </AppContainer>
    );
  }
}
