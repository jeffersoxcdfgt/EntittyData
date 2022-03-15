import {  AppAction } from '../../../app.action';
import { createFeatureSelector , createSelector, on , createReducer } from '@ngrx/store';
import * as airportsActions from '../actions/airports.actions';
import { Airport } from '../../class/airport';

export interface State {
  data: Airport | null ;
  action: string | null ;
  done: boolean;
  error?: Error | null;
}

const initialState: State  = {
  data: null,
  action: null,
  done: false,
  error: null
};

const airportsReducer = createReducer(
  initialState,
  // List Airports
  on(airportsActions.airportsGetAll, state => (
    {
      ...state,
    action: airportsActions.AirportActionTypes.GET_AIRPORTS,
    done: false,
    error: null
    }
  )),
  on(airportsActions.airportsGetAllSuccess, (state, { airports
    }) =>
     ({
        ...state,
        data: airports ,
        done: true,
        error: null
      })),
  on(airportsActions.airportsGetAllError, (state, { err }) =>
    ({
      ...state,
       done: true,
       error: err
    })),

);

export function reducer(state: State | undefined, action: AppAction): any {
  return airportsReducer(state, action);
}
export const getAirportsState = createFeatureSelector < State > ('airports');

// Selector for list airports

export const getAllAirports = createSelector( getAirportsState , (state: State ) => {
  return !!state && !!state.data ? state.data : null;
});


export const getAirportsError = createSelector(getAirportsState, (state: State) => {
  return !!state && !!state.action && state.action === airportsActions.AirportActionTypes.GET_AIRPORTS
    ? state.error
   : null;
});

