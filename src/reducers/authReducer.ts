import { FETCH_CURRENT_USER } from '../actions/types';
import { IAction } from '../interfaces/actions-interfaces';
import { AuthType } from '../interfaces/model-interfaces';

export default function (state: AuthType | null = null, action: IAction) {
  if (action.type === FETCH_CURRENT_USER) {
    return action.payload || false;
  }

  return state;
}
