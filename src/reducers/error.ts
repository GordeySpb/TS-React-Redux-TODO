import { Reducer } from 'redux';

const initialState: boolean = false;

// tslint:disable-next-line:max-line-length
export const errorReducer: Reducer<boolean> = (state: boolean = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
