import { Reducer } from 'redux';

import { IEror } from '../types/error';

const initialState: IEror = false;

// tslint:disable-next-line:max-line-length
export const errorReducer: Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
