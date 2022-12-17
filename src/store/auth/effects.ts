import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';
import Router from 'next/router';

import request from 'api/index';
import { ApiUrls } from 'api/apiUrls';

import { EStorageKeys } from 'configuration/types/storageKeys';
import { HOME_PAGE } from 'configuration/urls';

import { FORM_CHANGE_PASSWORD_NAME } from 'components/ChangePassword/form/config';

import { FORM_NAME } from 'containers/SignIn/constants';

import { IPayloadAction } from 'store/types';
import {
  IChangePasswordRequestPayload,
  ITokenState,
  TAuthRequest
} from 'store/auth/types';
import { setFormError } from 'store/forms/actions';
import { openError, openSuccess } from 'store/snackbars/actions';

import { setCookie, setStorage } from 'utils/storageHelpers';
import errorMessage from 'utils/errorMessage';

import {
  GET_PROFILE_INFO_REQUEST,
  getProfileInfoFailure,
  getProfileInfoSuccess,
  setToken,
  SIGN_IN_REQUEST,
  signInSuccess,
  signInFailure, CHANGE_PASSWORD_REQUEST, setShowChangePassword,
} from './actions';
import { IProfile } from './types';


function* signIn(action: IPayloadAction<TAuthRequest>) {
  try {
    const response: AxiosResponse<ITokenState> = yield call(request.post, ApiUrls.signIng, action.payload);

    yield call(setCookie, EStorageKeys.COOKIE_TOKEN, response.data.refresh);
    yield call(setStorage, EStorageKeys.TOKEN, response.data);
    yield put(setToken(response.data));
    yield put(signInSuccess(response.data));
    yield call(Router.push, HOME_PAGE);
    yield put(setFormError({ form: FORM_NAME, error: {} }));
  } catch (error) {
    const { response } = error as AxiosError;
    if (response && Object.keys(response.data).length) {
      yield put(setFormError({ form: FORM_NAME, error: response.data }));
    }
    yield put(signInFailure(error as AxiosError));
  }
}

function* getUserInfo(): Generator {
  try {
    const response = yield call(request.get, ApiUrls.me);
    const { data } = response as AxiosResponse<IProfile>;
    yield put(getProfileInfoSuccess(data));

  } catch (error) {
    yield put(getProfileInfoFailure(error as AxiosError));
  }
}

function* changePassword(action: IPayloadAction<IChangePasswordRequestPayload>): Generator {
  const { ...instance } = action.payload;
  try {
    yield call(request.put, ApiUrls.changePassword, instance);

    yield put(openSuccess('Парль был изменен!'));

    yield put(setShowChangePassword(false));

  } catch (error) {
    const { response } = error as AxiosError;
    if (response && Object.keys(response.data).length) {
      yield put(setFormError({ form: FORM_CHANGE_PASSWORD_NAME, error: response.data }));
    }
    const { message } = errorMessage(error);
    yield put(openError(message));
  }
}

function* Saga(): Generator {
  yield all([
    takeLatest(SIGN_IN_REQUEST, signIn),
    takeLatest(GET_PROFILE_INFO_REQUEST, getUserInfo),
    takeLatest(CHANGE_PASSWORD_REQUEST, changePassword),
  ]);
}

export default Saga;
