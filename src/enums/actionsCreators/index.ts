import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

import { TodoActions } from '../../enums/actions/Todo';
import { Dispatch } from 'redux';
import { IStore } from '../../types/store';
import { AddTodosType, AddTodoType, DeleteTodoType, ToggleTodoType, UpdateTodoType } from './types';

export const addTodosAction = (payload: []) => ({ payload, type: TodoActions.ADD_TODOS });
export const addTodoAction = (payload: string) => ({ payload, type: TodoActions.ADD_TODO });
export const deleteTodoAction = (payload: number) => ({ payload, type: TodoActions.DELETE });
export const toggleAction = (payload: boolean) => ({ payload, type: TodoActions.TOGGLE });
export const toggleErrorAction = (payload: boolean) => (
  { payload, type: TodoActions.SET_ERROR_STATE }
);
export const toggleSpinerAction = (payload: boolean) => (
  { payload, type: TodoActions.SET_PRELOADER_STATE }
);

// tslint:disable-next-line:max-line-length
export const addTodos = (): ThunkAction<Promise<any>, IStore, {}, AddTodosType> => (dispatch: Dispatch) => {
  dispatch(toggleSpinerAction(true));
  return axios.get('/api/getTodos')
    .then(res => res.data)
    .then((todos) => {
      if (todos) {
        dispatch(addTodosAction(todos));
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
    .then(() => toggleSpinerAction(false))
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
export const updateTodo =  (payload: string | number): ThunkAction<Promise<any>, IStore, {}, UpdateTodoType> => (dispatch: Dispatch) => {
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
