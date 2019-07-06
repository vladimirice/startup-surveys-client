import { AuthType, ISurveyModel } from './model-interfaces';

export interface IState {
  auth: AuthType;
  surveys: ISurveyModel[];
}
