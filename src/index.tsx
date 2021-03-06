import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';
import { store } from './store';
import { addTodos } from './enums/actionsCreators';

store.dispatch<any>(addTodos());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
