import {Action} from 'redux';

export interface FromStore {
    error: boolean;
}

export interface DispatchStore {
    toggleError: (payload: boolean) => Action;
}
