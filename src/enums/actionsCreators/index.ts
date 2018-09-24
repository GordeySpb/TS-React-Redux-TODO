import axios from 'axios';
import { Dispatch } from 'redux';

import { TodoActions } from '../../enums/actions/Todo';

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

export const addTodos = () => (dispatch: Dispatch) => {
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

export const addTodo = (payload: string) => (dispatch: Dispatch) => {
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

export const deleteTodo = (payload: number) => (dispatch: Dispatch) => {
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

export const toggleTodo = (payload: number) => (dispatch: Dispatch) => {
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
