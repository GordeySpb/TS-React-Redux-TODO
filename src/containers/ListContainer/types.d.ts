import { Action } from 'redux';
import { ISpiner } from'../../types/spiner';
import { ITodos } from '../../types/todos';

export interface FromStore {
  todos: ITodos[];
  spiner: ISpiner;
}

export interface DispatchStore {
  onDelete: (payload: number) => Action;
  onEdit: () => Action;
  onToggle: (payload: number) => Action;
}
