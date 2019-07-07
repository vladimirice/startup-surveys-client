import { IState } from '../../interfaces/stateInterfaces';
import { AuthType } from '../../interfaces/modelInterfaces';

export const mapToPropsWithAuth = (state: IState): { auth: AuthType } => ({
  auth: state.auth,
});
