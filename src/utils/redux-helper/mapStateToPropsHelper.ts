import { IState } from '../../interfaces/stateInterfaces';
import { AuthType } from '../../interfaces/modelInterfaces';

export const authPropFromState = (state: IState): { auth: AuthType } => {
  return {
    auth: state.auth,
  }
};
