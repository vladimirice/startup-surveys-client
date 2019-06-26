import Config from './config';
const axios = require('axios');

export const axiosServerClient = axios.create({
  baseURL: Config.getBackendUrl(),
  withCredentials: true,
});
