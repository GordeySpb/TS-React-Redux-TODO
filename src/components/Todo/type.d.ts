import {ITodos} from '../../types/todos';

export interface IProps extends ITodos {
  key: number;
  id: number;
  title: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onEdit: (title: string, id: number) => void;
  onToggle: (id: number) => void;
}

export interface SProps {
  completed: boolean;
}

export interface IState {
  isEditing: boolean;
}

