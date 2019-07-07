import { History } from 'history';
import { AuthType } from './modelInterfaces';

export interface IPropsWithAuthHistory {
  auth:    AuthType;
  history: History;
}
