import {ITodos} from '../../types/todos'

export interface IProps {
  todos: ITodos[];
  onDelete: (id: number) => void;
  onEdit: () => void;
  onToggle: (id: number) => void;
}