import * as fromUser from './user/store/reducers/user.reducer';
import * as fromBook from './book/store/reducers/book.reducer';
import * as fromFligths from './flights/store/reducers/fligths.reducer';

export interface AppState {
  user:fromUser.State;
  book:fromBook.State;
  fligths:fromFligths.State
}