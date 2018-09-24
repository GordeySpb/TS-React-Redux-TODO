import { Action } from 'redux';

export interface DispatchStore {
  addTodo: (payload: string) => Action;
}
