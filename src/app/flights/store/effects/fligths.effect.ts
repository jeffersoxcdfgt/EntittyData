import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap } from 'rxjs/operators';
import { FligthsService } from '../services/fligths.service';
import { FligthsActionTypes } from '../actions/fligths.actions';
import { Flights } from '../../class/flights';

@Injectable()
export class FligthskEffects {

  public selectFligths$ = createEffect(() => this.actions$.pipe(
    ofType(FligthsActionTypes.GET_FLIGTHS),
    mergeMap(() => this.fligthsService.findAll()
      .pipe(
        map((listfligths:Flights) => ({ type: FligthsActionTypes.GET_FLIGTHS_SUCCESS, flights: listfligths }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private fligthsService: FligthsService
  ) {}
}