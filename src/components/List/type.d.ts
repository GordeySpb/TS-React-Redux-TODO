import {ITodos} from '../../types/todos'
import { Action } from 'redux';

export interface IProps {
  todos: ITodos[];
  onDelete: (id: number) => Action;
  onEdit: (id: number, title: string) => Action;
  onToggle: (id: number) => Action;
}