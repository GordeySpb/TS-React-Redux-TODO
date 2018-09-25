import { Action } from 'redux';

export interface FromStore {
  spiner: boolean;
}

export interface DispatchStore {
  toggleSpiner: (payload: boolean) => Action;
}