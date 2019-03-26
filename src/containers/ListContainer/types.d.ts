import { Action } from 'redux';
import { ISpiner } from'../../types/spiner';
import { ITodos } from '../../types/todos';

export interface FromStore {
  todos: ITodos[];
  spiner: ISpiner;
}

export interface DispatchStore {
  onDelete: (id: number) => Action;
  onEdit: (id: number, title: string) => Action;
  onToggle: (payload: number) => Action;
}
