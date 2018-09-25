import { TodoActions } from '../../enums/actions/Todo'

export type AddTodosType = {
  type: TodoActions;
};

export type AddTodoType = {
  type: TodoActions;
  payload: string;
};

export type DeleteTodoType = {
  type: TodoActions;
  payload: number;
};

export type ToggleTodoType = {
  type: TodoActions;
  payload: number;
};

export type UpdateTodoType = {
  type: TodoActions;
  payload: number | string;
};