import { Reducer } from 'redux';

import { TodoActions } from '../enums/actions/Todo';
import { ITodos } from '../types/todos';

const initialState: { id: number, title: string, completed: boolean }[] = [];

export const todosReducer: Reducer<ITodos[]> = (state = initialState, { type, payload }) => {
  switch (type) {
    case TodoActions.ADD_TODOS:
      return payload;

    case TodoActions.ADD_TODO:
      return [...state, payload];

    case TodoActions.DELETE:
      return state.filter(item => item.id !== +payload.id);

    case TodoActions.TOGGLE:
      return state.map((item) => {
        if (item.id === +payload.id) {
          return { ...payload };
        }
        return item;
      });

    default:
      return state;
  }
};
