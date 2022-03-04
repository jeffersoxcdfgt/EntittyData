import { createAction, props } from '@ngrx/store';
import { Flights } from '../../class/flights';

export enum FligthsActionTypes {
  GET_FLIGTHS = '[All] Fligths',
  GET_FLIGTHS_SUCCESS = '[ALL] Fligths Success',
  GET_FLIGTHS_ERROR = '[All] Fligths Error'
}

// list fligths

export const fligthsGetAll = createAction(FligthsActionTypes.GET_FLIGTHS);
export const fligthsGetAllSuccess = createAction(FligthsActionTypes.GET_FLIGTHS_SUCCESS, props<{flights: Flights}>());
export const fligthsGetAllError = createAction(FligthsActionTypes.GET_FLIGTHS_ERROR, props<{err: Error}>());