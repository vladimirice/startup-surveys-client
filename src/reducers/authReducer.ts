import { FETCH_CURRENT_USER } from '../actions/types';
import { AuthType } from '../interfaces/modelInterfaces';
import { IAction } from '../interfaces/actionsInterfaces';

export default function (state: AuthType | null = null, action: IAction): AuthType {
  if (action.type === FETCH_CURRENT_USER) {
    return action.payload || false;
  }

  return state;
}
