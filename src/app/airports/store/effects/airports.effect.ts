import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap } from 'rxjs/operators';
import { AirportsService } from '../services/airports.service';
import { AirportActionTypes } from '../actions/airports.actions';

@Injectable()
export class AirportsEffects {

  public selectAirports$ = createEffect(() => this.actions$.pipe(
    ofType(AirportActionTypes.GET_AIRPORTS),
    mergeMap(() => this.airportsService.findAll()
      .pipe(
        map((listairports: any) => ({ type: AirportActionTypes.GET_AIRPORTS_SUCCESS, airports: listairports[0] }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private airportsService: AirportsService
  ) {}
}