import { Reducer } from 'redux';
import { SpinerAction } from '../enums/actions/Spiner';

import { ISpiner } from '../types/spiner';

const initialState: ISpiner = false;

// tslint:disable-next-line:max-line-length
export const spinerReducer: Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SpinerAction.TOGGLE_SPINER:
      return payload;

    default:
      return state;
  }
};
