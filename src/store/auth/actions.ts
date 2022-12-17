import { AxiosError } from 'axios';

import { IAdminEditRequestPayload } from 'store/users/types';

import createAction from 'utils/createAction';

import {
  ITokenState,
  TAuthRequest,
  IProfile,
  IChangePasswordRequestPayload,
} from './types';

const STATE_KEY = '@auth';

export const SET_TOKEN = `${STATE_KEY}_SET_TOKEN`;

export const RESET_AUTH_INFO = `${STATE_KEY}_RESET_AUTH_INFO`;

export const SIGN_IN_REQUEST = `${STATE_KEY}_SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${STATE_KEY}_SIGN_IN_SUCCESS`;
export const SIGN_IN_FAILURE = `${STATE_KEY}_SIGN_IN_FAILURE`;

export const LOGOUT = `${STATE_KEY}_LOGOUT`;

export const GET_PROFILE_INFO_REQUEST = `${STATE_KEY}_GET_PROFILE_INFO_REQUEST`;
export const GET_PROFILE_INFO_SUCCESS = `${STATE_KEY}_GET_PROFILE_INFO_SUCCESS`;
export const GET_PROFILE_INFO_FAILURE = `${STATE_KEY}_GET_PROFILE_INFO_FAILURE`;

export const UPDATE_PROFILE_INFO_REQUEST = `${STATE_KEY}_UPDATE_PROFILE_INFO_REQUEST`;

export const CHANGE_PASSWORD_REQUEST = `${STATE_KEY}_CHANGE_PASSWORD`;
export const SET_SHOW_CHANGE_PASSWORD = `${STATE_KEY}_SET_SHOW_CHANGE_PASSWORD`;

export const setToken = createAction<ITokenState>(SET_TOKEN);

export const signInRequest = createAction<TAuthRequest>(SIGN_IN_REQUEST);
export const signInSuccess = createAction<ITokenState>(SIGN_IN_SUCCESS);
export const signInFailure = createAction<AxiosError>(SIGN_IN_FAILURE);

export const logout = createAction(LOGOUT);

export const getProfileInfoRequest = createAction(GET_PROFILE_INFO_REQUEST);
export const getProfileInfoSuccess = createAction<IProfile>(GET_PROFILE_INFO_SUCCESS);
export const getProfileInfoFailure = createAction<AxiosError>(GET_PROFILE_INFO_FAILURE);

export const updateProfileInfoRequest = createAction<IAdminEditRequestPayload>(UPDATE_PROFILE_INFO_REQUEST);

export const changePasswordRequest = createAction<IChangePasswordRequestPayload>(CHANGE_PASSWORD_REQUEST);
export const setShowChangePassword = createAction<boolean>(SET_SHOW_CHANGE_PASSWORD);

