import * as fromUser from './user/store/reducers/user.reducer';

export interface AppState {
  user:fromUser.State;
}