import { ErrorAction } from '../enums/actions/Error';

export const toggleError = (payload: boolean) => ({
  payload,
  type: ErrorAction.TOGGLE_ERROR,
});
