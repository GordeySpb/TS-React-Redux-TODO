import {ITodo} from '../../types/todo';

export interface IProps extends ITodo {
  onDelete: () => void;
  onEdit: () => void;
  onToggle: () => void;
}

export interface SProps {
  completed: boolean;
}

export interface IState {
  isEditing: boolean;
}

