import { axiosServer } from '../utils/axios';
import { FETCH_CURRENT_USER } from './types';
import { Dispatch } from 'redux';

export const fetchCurrentUser = () => async (dispatch : Dispatch) => {
  const response = await axiosServer.get('/users/current');

  dispatch({ type: FETCH_CURRENT_USER, payload: response.data });
};

export const handleStripeToken = (token: string) => async (dispatch : Dispatch) => {
  const response = await axiosServer.post('/stripe/callback', {
    token,
  });

  dispatch({ type: FETCH_CURRENT_USER, payload: response.data });
};
