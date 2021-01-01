import axios from 'axios';

export const authApi = axios.create({
  baseURL: process.env.AUTH_API_URL,
});
