import { Reducer } from 'redux';
import { ErrorAction } from '../enums/actions/Error';

import { IEror } from '../types/error';

const initialState: IEror = false;

// tslint:disable-next-line:max-line-length
export const errorReducer: Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ErrorAction.TOGGLE_ERROR:
      return payload;

    default:
      return state;
  }
};
