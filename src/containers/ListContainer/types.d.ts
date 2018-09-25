import { Action } from 'redux';

export interface FromStore {
  todos: [];
  spiner: boolean;
}

export interface DispatchStore {
  onDelete: (payload: number) => Action;
  onEdit: (payload: {title: string, id: number}) => Action;
  onToggle: (payload: number) => Action;
}
