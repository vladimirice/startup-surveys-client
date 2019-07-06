/* eslint-disable @typescript-eslint/no-use-before-define */
import { axiosServer } from '../utils/axios';
import { FETCH_CURRENT_USER, FETCH_CURRENT_USER_SURVEYS } from './types';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { History } from 'history';
import { ISurveyInput, ISurveyModel } from '../interfaces/modelInterfaces';

export const fetchCurrentUser = (): Function => async (dispatch: Dispatch): Promise<void> => {
  const response: AxiosResponse = await axiosServer.get('/users/current');

  dispatchFetchCurrentUser(dispatch, response);
};

export const handleStripeToken = (token: string): Function => async (dispatch: Dispatch): Promise<void> => {
  const response: AxiosResponse = await axiosServer.post('/stripe/callback', {
    token,
  });

  dispatchFetchCurrentUser(dispatch, response);
};

export const submitSurvey = (values: ISurveyInput, history: History): Function =>
  async (dispatch: Dispatch): Promise<void> => {
    const response: AxiosResponse = await axiosServer.post('/surveys', values);

    history.push('/');
    dispatchFetchCurrentUser(dispatch, response);
  };

export const fetchCurrentUserSurveys = (): Function => async (dispatch: Dispatch): Promise<void> => {
  let response: AxiosResponse;
  let payload: ISurveyModel[] = [];

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


function dispatchFetchCurrentUser(dispatch: Dispatch, response: AxiosResponse): void {
  dispatch({ type: FETCH_CURRENT_USER, payload: response.data });
}
