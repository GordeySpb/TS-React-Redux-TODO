import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import { rootReducer } from '../reducers';

export const store = createStore(rootReducer, applyMiddleware(reduxLogger, reduxThunk));
