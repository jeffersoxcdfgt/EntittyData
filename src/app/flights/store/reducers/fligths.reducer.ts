import {  AppAction } from '../../../app.action';
import { createFeatureSelector , createSelector, on , createReducer } from '@ngrx/store';
import * as fligthsActions from '../actions/fligths.actions';
import { Flights } from '../../class/flights';

export interface State {
  data: Flights | null ;
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

const fligthsReducer = createReducer(
  initialState,
  // List Fligths
  on(fligthsActions.fligthsGetAll, state => ({...state,
    action: fligthsActions.FligthsActionTypes.GET_FLIGTHS,
    done: false,
    error: null
  })),
  on(fligthsActions.fligthsGetAllSuccess, (state, { flights
    }) =>
     ({
        ...state,
        data: flights === undefined ? state.data : flights ,
        done: true,
        error: null
      })),
  on(fligthsActions.fligthsGetAllError, (state, { err }) =>
    ({
      ...state,
       done: true,
       error: err
    })),

);

export function reducer(state: State | undefined, action: AppAction): any {
  return fligthsReducer(state, action);
}
export const getFligthsState = createFeatureSelector < State > ('fligths');

// Selector for list fligths

export const getAllFlights = createSelector( getFligthsState , (state: State ) => {
  return !!state && !!state.data ? state.data : null;
});


export const getFligthsError = createSelector(getFligthsState, (state: State) => {
  return !!state && !!state.action && state.action === fligthsActions.FligthsActionTypes.GET_FLIGTHS
    ? state.error
   : null;
});

