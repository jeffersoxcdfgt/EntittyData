import {  AppAction } from '../../../app.action';
import { createFeatureSelector , createSelector, on , createReducer  } from '@ngrx/store';
import { Login , userLoginResponse } from '../class/loging';
import * as loginActions from '../actions/login.actions';

export interface State {
  datauser: Login | null;
  responseuser: userLoginResponse | null;
  action: string | null;
  done: boolean;
  error?: Error | null;
}

const initialState: State  = {
datauser: null,
  responseuser: null,
  action: null,
  done: false,
  error: null,
};

const loginReducer = createReducer(
  initialState,
  // Login user
  on(loginActions.loginUser, (state, { user }) => ({
    ...state,
    datauser: user,
    action: loginActions.LoginActionTypes.GET_LOGIN_USER,
    done: false,
    error:
    null
  })),
  on(loginActions.loginUserSuccess, (state, { user }) => ({
    ...state,
      responseuser: user,
      done: true,
    })),
  on(loginActions.loginUserError, (state, { err }) => ({
    ...state,
    done: true,
    selected: null,
    error: err
  })),
);

export function reducer(state: State | undefined, action: AppAction): any{
  return loginReducer(state, action);
}
export const getLoginState = createFeatureSelector < State > ('login');

// Selector logging user
export const isLoginUser = createSelector( getLoginState , ( state: State ) => {
  return !!state && !!state.responseuser ? state.responseuser : null;
});

export const isLoginUserError = createSelector( getLoginState , (state: State) => {
      return  !!state && !!state.action && state.action === loginActions.LoginActionTypes.GET_LOGIN_USER
       ? state.error
       : null;
});