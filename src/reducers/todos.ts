import { Reducer } from 'redux';

const initialState: { id:number, title:string, completed:boolean }[] = [];

export const todosReducer: Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: return state;
  }
};
