import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { UserActionTypes } from '../actions/user.actions';
import { User } from '../../model/user';

@Injectable()
export class UserEffects {

  public selectUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.USER_LIST_ALL),
    mergeMap(() => this.userService.findAll()
      .pipe(
        map((listusers:User[]) => ({ type: UserActionTypes.USER_LIST_ALL_SUCCESS, users: listusers }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}