import {Reducer} from 'redux';

const initialState: boolean = false;

export const errorReducer: Reducer<boolean> = (state: boolean = initialState, {type, payload}) => {
    switch(type) {
        default:
            return state;
    }
}
