import { FETCH_CURRENT_USER_SURVEYS } from '../actions/types';
import { ISurveyModel } from '../interfaces/modelInterfaces';
import { IAction } from '../interfaces/actionsInterfaces';

export default function (state: ISurveyModel[] = [], action: IAction): ISurveyModel[] {
  if (action.type === FETCH_CURRENT_USER_SURVEYS) {
    return action.payload;
  }

  return state;
};
