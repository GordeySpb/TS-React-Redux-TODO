import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

import { TodoActions } from '../../enums/actions/Todo';
import { SpinerAction } from '../../enums/actions/Spiner';
import { ErrorAction } from '../../enums/actions/Error';
import { IStore } from '../../types/store';
import { AddTodosType, AddTodoType, DeleteTodoType, ToggleTodoType, UpdateTodoType } from './types';
import { ITodos } from 'src/types/todos';

export const addTodosAction = (payload: ITodos[]) => ({ payload, type: TodoActions.ADD_TODOS });
export const addTodoAction = (payload: string) => ({ payload, type: TodoActions.ADD_TODO });
export const deleteTodoAction = (payload: number) => ({ payload, type: TodoActions.DELETE });
// tslint:disable-next-line:max-line-length
export const toggleAction = (payload: boolean | number | string) => ({ payload, type: TodoActions.TOGGLE });
export const toggleErrorAction = (payload: boolean) => (
  { payload, type: ErrorAction.TOGGLE_ERROR }
);
export const toggleSpinerAction = (payload: boolean) => (
  { payload, type: SpinerAction.TOGGLE_SPINER }
);

// tslint:disable-next-line:max-line-length
export const addTodos = (): ThunkAction<Promise<any>, IStore, {}, AddTodosType> => (dispatch: Dispatch) => {

  dispatch(toggleSpinerAction(true));
  return axios.get('/api/getTodos')
    .then(res => res.data)
    .then((todos) => {
      if (todos) {
        dispatch(addTodosAction(todos));
      }
      // tslint:disable-next-line:brace-style
      else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(toggleSpinerAction(false)))
    .catch(() => {
      dispatch(toggleErrorAction(true));
      dispatch(toggleSpinerAction(false));
    });
};

// tslint:disable-next-line:max-line-length
export const addTodo =  (payload: string): ThunkAction<Promise<any>, IStore, {}, AddTodoType> => (dispatch: Dispatch) => {
  dispatch(toggleSpinerAction(true));

  return axios.post('/api/addTodo', { payload })
    .then(res => res.data)
    .then((todo) => {
      if (todo) {
        dispatch(addTodoAction(todo));
      }else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(toggleSpinerAction(false)))
    .catch((er) => {
      dispatch(toggleErrorAction(true));
      dispatch(toggleSpinerAction(false));
      return Promise.reject(er);
    });
};

// tslint:disable-next-line:max-line-length
export const deleteTodo = (payload: number): ThunkAction<Promise<any>, IStore, {}, DeleteTodoType> => (dispatch: Dispatch) => {
  dispatch(toggleSpinerAction(true));

  return axios.delete(`api/delTodo/${payload}`)
    .then(res => res.data)
    .then((id) => {
      if (id) {
        dispatch(deleteTodoAction(id));
      } else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(toggleSpinerAction(false)))
    .catch(() => {
      dispatch(toggleErrorAction(true));
      dispatch(toggleSpinerAction(false));
    });
};

// tslint:disable-next-line:max-line-length
export const updateTodo =  (payload: boolean | number | string): ThunkAction<Promise<any>, IStore, {}, UpdateTodoType> => (dispatch: Dispatch) => {
  dispatch(toggleSpinerAction(true));
  return axios.put('api/updateTodo', { payload })
    .then(res => res.data)
    .then((todo) => {
      if (todo) {
        dispatch(toggleAction(todo));
      } else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(toggleSpinerAction(false)))
    .catch((er) => {
      dispatch(toggleErrorAction(true));
      dispatch(toggleSpinerAction(false));
      return Promise.reject(er);
    });
};

// tslint:disable-next-line:max-line-length
export const toggleTodo = (payload: number): ThunkAction<Promise<any>, IStore, {}, ToggleTodoType> => (dispatch: Dispatch) => {
  dispatch(toggleSpinerAction(true));

  return axios.patch(`api/toggleTodo/${payload}`)
    .then(res => res.data)
    .then((todo) => {
      if (todo) {
        dispatch(toggleAction(todo));
      } else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(toggleSpinerAction(false)))
    .catch(() => {
      dispatch(toggleErrorAction(true));
      dispatch(toggleSpinerAction(false));
    });
};
