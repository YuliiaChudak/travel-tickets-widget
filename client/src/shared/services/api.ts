import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:9001',
  // baseURL: 'https://widget-slots.herokuapp.com/',
  timeout: 10000,
});
