import { axiosServerClient } from '../utils/axios';
import { FETCH_CURRENT_USER } from './types';
import { Dispatch } from 'redux';

export const fetchCurrentUser = () => async (dispatch : Dispatch) => {
  const response = await axiosServerClient.get('/users/current');

  dispatch({ type: FETCH_CURRENT_USER, payload: response.data });
};
