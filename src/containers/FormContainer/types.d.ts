import { Action } from 'redux';

export interface DispatchStore {
  value: string;
  addTodo: (payload: string) => Action;
}
