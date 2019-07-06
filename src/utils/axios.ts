import axios from 'axios';
import { serverURL } from './config';

export const axiosServer = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});
