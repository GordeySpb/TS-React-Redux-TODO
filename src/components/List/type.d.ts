// import {ITodos} from '../../types/todos'

export interface IProps {
  todos: [];
  onDelete: (id: number) => void;
  onEdit: (title: string, id: number ) => void;
  onToggle: (id: number) => void;
}