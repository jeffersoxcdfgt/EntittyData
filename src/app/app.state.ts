import * as fromFligths from './flights/store/reducers/fligths.reducer';
import * as fromAirports from './airports/store/reducers/airports.reducer';

export interface AppState {
  fligths:fromFligths.State;
  airports:fromAirports.State;
}