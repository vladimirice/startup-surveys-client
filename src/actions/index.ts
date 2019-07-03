import { axiosServer } from '../utils/axios';
import { FETCH_CURRENT_USER, FETCH_CURRENT_USER_SURVEYS } from './types';
import { Dispatch } from 'redux';

export const fetchCurrentUser = () => async (dispatch : Dispatch) => {
  const response = await axiosServer.get('/users/current');

  dispatchFetchCurrentUser(dispatch, response);
};

export const handleStripeToken = (token: string) => async (dispatch : Dispatch) => {
  const response = await axiosServer.post('/stripe/callback', {
    token,
  });

  dispatchFetchCurrentUser(dispatch, response);
};

export const submitSurvey = (values: any, history: any) => async (dispatch: Dispatch) => {
  const response = await axiosServer.post('/surveys', values);

  history.push('/');
  dispatchFetchCurrentUser(dispatch, response);
};

export const fetchCurrentUserSurveys = () => async (dispatch: Dispatch) => {
  const response = await axiosServer.get('/surveys');

  dispatch({
    type:    FETCH_CURRENT_USER_SURVEYS,
    payload: response.data,
  });
};


function dispatchFetchCurrentUser(dispatch: Dispatch, response: any) {
  dispatch({ type: FETCH_CURRENT_USER, payload: response.data });
}
