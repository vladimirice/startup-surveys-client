import { serverURL } from './config';
import axios from 'axios';

export const axiosServer = axios.create({
  baseURL:          serverURL,
  withCredentials:  true,
});
