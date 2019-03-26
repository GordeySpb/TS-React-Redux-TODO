import {ITodos} from '../../types/todos';
import { Action } from 'redux';

export interface IProps extends ITodos {
  key: number;
  id: number;
  title: string;
  completed: boolean;
  onDelete: (id: number) => Action;
  onEdit: (id: number, title: string) => Action;
  onToggle: (id: number) => Action;
}

export interface SProps {
  completed: boolean;
}

export interface IState {
  isEditing: boolean;
}

