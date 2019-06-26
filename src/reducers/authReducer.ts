import { FETCH_CURRENT_USER } from '../actions/types';

export default function (state = null, action: any) {
  if (action.type === FETCH_CURRENT_USER) {
    return action.payload || false;
  }

  return state;
}
