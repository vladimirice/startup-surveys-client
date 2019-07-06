import { AuthType, ISurveyModel } from './modelInterfaces';

export interface IState {
  auth: AuthType;
  surveys: ISurveyModel[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
}
