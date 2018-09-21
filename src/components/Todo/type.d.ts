export interface IProps {
  key: number;
  id: number;
  title: string;
  completed: boolean;
  onDelete: () => void;
  onEdit: () => void;
  onToggle: () => void;
}

export interface IState {
  isEditing: boolean;
}

