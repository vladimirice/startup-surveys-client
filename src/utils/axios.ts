import { serverURL } from './config';
const axios = require('axios');

export const axiosServer = axios.create({
  baseURL:          serverURL,
  withCredentials:  true,
});
