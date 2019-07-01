import { FETCH_CURRENT_USER_SURVEYS } from '../actions/types';

export default function (state = [], action: any) {
  if (action.type === FETCH_CURRENT_USER_SURVEYS) {
    return action.payload;
  }

  return state;
};
