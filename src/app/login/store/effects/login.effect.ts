import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { LoginActionTypes } from '../actions/login.actions';
import { Login, userLoginResponse } from '../class/loging';

@Injectable()
export class LoginEffects {

  public logIn$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActionTypes.GET_LOGIN_USER),
    mergeMap((user: Login) => this.loginService.logIn(user)
      .pipe(
        map((loginuser: userLoginResponse) => ({
            type: LoginActionTypes.GET_LOGIN_USER_SUCCESS,
            user: loginuser
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}
}