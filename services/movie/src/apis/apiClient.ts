import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const instance = axios.create();

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.commons.Authorization = `Bearer ${publicRuntimeConfig.TMDB_ACCESS_TOKEN}`;

  return config;
});

instance.interceptors.response.use((response: AxiosResponse) => {
  if (response.data != null) {
    return camelizeKeys(response.data);
  }

  return response;
});

export const apiClient = {
  get<T>(...params: Parameters<typeof axios.get>) {
    return instance.get<null, T>(...params);
  },
};
