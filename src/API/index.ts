import Axios, { AxiosError, AxiosResponse } from 'axios';
import Router from 'next/router';

import { ApiUrls } from 'api/apiUrls';

import { EStorageKeys } from 'configuration/types/storageKeys';
import { SIGN_IN } from 'configuration/urls';

import { ITokenState } from 'store/auth/types';

import { getStorageData, removeStorageItem, setStorage, removeCookie } from 'utils/storageHelpers';

import { IRefreshTokenResponse } from './types';

const mainURL = process.env.API_BASE_URL;
export const baseURL = `${mainURL}api/v1`;

const instance = Axios.create({ baseURL });

let requestCount = 0;

instance.interceptors.request.use(
  config => {
    const token = getStorageData<ITokenState>(EStorageKeys.TOKEN);

    if (token && token.access && config.headers) {
      config.headers.Authorization = `Bearer ${token.access}`;
      config.headers['Accept-Language'] = 'ru-RU';
    }

    return config;
  },
  error => Promise.reject(error)
);

const clearStorage = () => {
  removeStorageItem(EStorageKeys.TOKEN);
  removeCookie(EStorageKeys.COOKIE_TOKEN);
  Router.push(SIGN_IN).catch();
};

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const token = getStorageData<ITokenState>(EStorageKeys.TOKEN);

    if (error.response.status === 401 && token && requestCount < 3) {
      requestCount++;
      originalRequest._retry = true;

      try {
        const { data } = await refreshAccessToken();

        setStorage(EStorageKeys.TOKEN, {
          refresh: token.refresh,
          access: data.access,
        });

        instance.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
      } catch (e) {
        const { response: refreshResponse } = e as AxiosError;
        if (refreshResponse?.status === 401) {
          clearStorage();
          throw error;
        }
      }

      return instance(originalRequest);
    }

    if (error.response.status === 500) {
      return Promise.reject({ message: 'Проблемы с сервером!' });
    }

    requestCount = 0;
    throw error;
  }
);

export const refreshAccessToken = async (): Promise<AxiosResponse<IRefreshTokenResponse>> => {
  const token = getStorageData<ITokenState>(EStorageKeys.TOKEN);
  if (!token) {
    throw { response: { status: 401 } } as AxiosError;
  }
  return executeRefresh(token.refresh);
};

export const executeRefresh = async (token: string): Promise<AxiosResponse<IRefreshTokenResponse>> =>
  Axios.post(`${baseURL}${ApiUrls.refreshToken}`, { refresh: token });

export default instance;
