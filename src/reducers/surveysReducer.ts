import { FETCH_CURRENT_USER_SURVEYS } from '../actions/types';

import { IAction } from '../interfaces/actions-interfaces';
import { ISurveyModel } from '../interfaces/model-interfaces';

export default function (state: ISurveyModel[] = [], action: IAction) {
  if (action.type === FETCH_CURRENT_USER_SURVEYS) {
    return action.payload;
  }

  return state;
};
