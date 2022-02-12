import * as fromUser from './user/store/reducers/user.reducer';
import * as fromBook from './book/store/reducers/book.reducer';

export interface AppState {
  user:fromUser.State;
  book:fromBook.State
}