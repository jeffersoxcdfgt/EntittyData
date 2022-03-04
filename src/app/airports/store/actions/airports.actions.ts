import { createAction, props } from '@ngrx/store';
import { Airport } from '../../class/airport';

export enum AirportActionTypes {
  GET_AIRPORTS = '[All] Airports',
  GET_AIRPORTS_SUCCESS = '[ALL] Airports Success',
  GET_AIRPORTS_ERROR = '[All] Airports Error'
}

// list airports

export const airportsGetAll = createAction(AirportActionTypes.GET_AIRPORTS);
export const airportsGetAllSuccess = createAction(AirportActionTypes.GET_AIRPORTS_SUCCESS, props<{airports: Airport}>());
export const airportsGetAllError = createAction(AirportActionTypes.GET_AIRPORTS_ERROR, props<{err: Error}>());