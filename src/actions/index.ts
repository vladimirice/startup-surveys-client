import { axiosServer } from '../utils/axios';
import { FETCH_CURRENT_USER } from './types';
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

  history.push('/surveys');
  dispatchFetchCurrentUser(dispatch, response);
};

function dispatchFetchCurrentUser(dispatch: Dispatch, response: any) {
  dispatch({ type: FETCH_CURRENT_USER, payload: response.data });
}
