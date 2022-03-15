import { createAction, props } from '@ngrx/store';
import { Login, userLoginResponse } from '../class/loging';

export enum LoginActionTypes {
  GET_LOGIN_USER = '[All] Get login user',
  GET_LOGIN_USER_SUCCESS = '[ALL] Get login user Success',
  GET_LOGIN_USER_ERROR = '[ALL] Get login user error',
}

// Get login success

export const loginUser = createAction(LoginActionTypes.GET_LOGIN_USER , props<{user: Login}>());
export const loginUserSuccess = createAction(LoginActionTypes.GET_LOGIN_USER_SUCCESS, props<{user: userLoginResponse}>());
export const loginUserError = createAction(LoginActionTypes.GET_LOGIN_USER_ERROR, props<{err: Error}>());