import { axiosServer } from '../utils/axios';
import { FETCH_CURRENT_USER, FETCH_CURRENT_USER_SURVEYS } from './types';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { ISurveyModel, ISurveyInput } from '../interfaces/model-interfaces';
import { History } from 'history';

export const fetchCurrentUser = () => async (dispatch : Dispatch) => {
  const response: AxiosResponse = await axiosServer.get('/users/current');

  dispatchFetchCurrentUser(dispatch, response);
};

export const handleStripeToken = (token: string) => async (dispatch : Dispatch) => {
  const response: AxiosResponse = await axiosServer.post('/stripe/callback', {
    token,
  });

  dispatchFetchCurrentUser(dispatch, response);
};

export const submitSurvey = (values: ISurveyInput, history: History) => async (dispatch: Dispatch) => {
  const response: AxiosResponse = await axiosServer.post('/surveys', values);

  history.push('/');
  dispatchFetchCurrentUser(dispatch, response);
};

export const fetchCurrentUserSurveys = () => async (dispatch: Dispatch) => {
  let response: AxiosResponse;
  let payload: ISurveyModel[];

  try {
    response = await axiosServer.get('/surveys');
    payload = response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      payload = [];
    }

    throw error;
  }

  dispatch({
    type:    FETCH_CURRENT_USER_SURVEYS,
    payload,
  });
};


function dispatchFetchCurrentUser(dispatch: Dispatch, response: AxiosResponse) {
  dispatch({ type: FETCH_CURRENT_USER, payload: response.data });
}
