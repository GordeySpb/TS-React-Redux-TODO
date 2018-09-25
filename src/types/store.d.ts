import { ITodos } from '../types/todos';
import { IEror } from '../types/error';
import { ISpiner } from '../types/spiner';

export interface IStore {
  error: IEror;
  todos: ITodos[];
  spiner: ISpiner;
}
