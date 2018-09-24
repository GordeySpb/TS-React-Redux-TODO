import { ITodos } from '../types/todos';
import { IEror } from '../types/error';

export interface IStore {
  error: IEror;
  todos: ITodos[];
}
