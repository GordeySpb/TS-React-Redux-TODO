import {ITodos} from '../../types/todos';

export interface IProps extends ITodos {
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

