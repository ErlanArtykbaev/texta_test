import { RecordOf } from 'immutable';

import { ResponseGenericType, THandler, TSelectorReturnType } from 'store/types';
import { EUserGroup } from 'store/users/types';

export interface ITokenState {
    refresh: string;
    access: string;
}

export interface IProfile {
  id: string;
  email: string;
  date_joined: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  group: EUserGroup;
  permissions: Array<string>;
  phone?: string;
  position?: string;
  avatar?: string;
}

export interface IAuthStore {
  token: ITokenState | null;

  signIn: ResponseGenericType<ITokenState>;
  profile: ResponseGenericType<IProfile>;

  showChangePassword: boolean;
}

export type TAuthRequest = {
    email: string;
    password: string;
}

export type TAuthStoreRecord = RecordOf<IAuthStore>;

export type TAuthHandler<T = void> = THandler<TAuthStoreRecord, T>;
export type TAuthSelectorReturnType<T> = TSelectorReturnType<T, TAuthStoreRecord>;

export interface IPermission {
  appName: string;
  modelName: string;
}

export enum EPermissionAction {
  ADD = 'add',
  VIEW = 'view',
  EDIT = 'change',
  DELETE = 'delete',
}

export interface IChangePasswordRequestPayload {
  password: string;
  password1: string;
}
