import {ITodo} from '../../types/todo'

export interface IProps {
  todos: ITodo[];
  onDelete: () => void;
  onEdit: () => void;
  onToggle: () => void;
}