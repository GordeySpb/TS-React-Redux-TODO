import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { APP } from './components/App';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <APP />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
