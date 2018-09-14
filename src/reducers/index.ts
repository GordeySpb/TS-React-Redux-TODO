import { combineReducers, Reducer } from 'redux';

import { errorReducer as error } from './error';

import { IStore } from '../types/store';

export const rootReducer: Reducer<IStore> = combineReducers({
  error,
});
