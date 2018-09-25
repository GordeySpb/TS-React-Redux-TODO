export interface IProps {
  value: string;
  addTodo: (title: string) => void;
  
}

export interface IState {
  title: string;
}