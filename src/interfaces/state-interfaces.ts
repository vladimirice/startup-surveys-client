import { AuthType, ISurvey } from './model-interfaces';

export interface IState {
  auth: AuthType;
  surveys: ISurvey[];
}
