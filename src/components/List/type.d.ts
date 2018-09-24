import {ITodos} from '../../types/todos'

export interface IProps {
  todos: ITodos[];
  onDelete: () => void;
  onEdit: () => void;
  onToggle: () => void;
}