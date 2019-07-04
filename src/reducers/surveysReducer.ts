import { FETCH_CURRENT_USER_SURVEYS } from '../actions/types';

import _ from 'lodash';

export default function (state = [], action: any) {
  if (action.type === FETCH_CURRENT_USER_SURVEYS) {

    if (_.isEqual(action.payload, state)) {
      return state;
    }

    return action.payload;
  }

  return state;
};
