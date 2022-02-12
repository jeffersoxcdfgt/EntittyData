import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Book } from '../../model/book';
import * as BookActions from '../actions/book.actions';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/user/model/user';
import { selectAllUsers } from 'src/app/user/store/reducers/user.reducer';
import { usersBooks } from '../../functions/functions';

export interface State extends EntityState<Book> {
  // additional entities state properties
  selectedBookId: string | null;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();
export const selectBookState = createFeatureSelector<State>('book');

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedBookId: null,
});

const bookReducer = createReducer(
  initialState,
  on(BookActions.addBook, (state, { book }) => {
    return adapter.addOne(book, state)
  }),
  on(BookActions.setBook, (state, { book }) => {
    return adapter.setOne(book, state)
  }),
  on(BookActions.upsertBook, (state, { book }) => {
    return adapter.upsertOne(book, state);
  }),
  on(BookActions.addBooks, (state, { books }) => {
    return adapter.addMany(books, state);
  }),
  on(BookActions.upsertBooks, (state, { books }) => {
    return adapter.upsertMany(books, state);
  }),
  on(BookActions.updateBook, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(BookActions.updateBooks, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(BookActions.mapBook, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(BookActions.mapBooks, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(BookActions.deleteBook, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(BookActions.deleteBooks, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(BookActions.deleteBooksByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(BookActions.loadBooks, (state, { books }) => {
    return adapter.setAll(books, state);
  }),
  on(BookActions.setBooks, (state, { books }) => {
    return adapter.setMany(books, state);
  }),
  on(BookActions.clearBooks, state => {
    return adapter.removeAll({ ...state, selectedBookId: null });
  }),
  on(BookActions.selectBooksList, state => {
    return state
  })
);

export function reducer(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}

export const getSelectedBooksId = (state: State) => state.selectedBookId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(selectBookState);

// select the array of book ids
export const selectBookIds = selectIds;

// select the dictionary of book entities
export const selectBookEntities = selectEntities;

// select the array of books
export const selectAllBooks = selectAll;


// select the total book count
export const selectBookTotal = selectTotal;


export const selectedListBooks = createSelector(
    selectAllBooks,
    (books) => books.map((book) => ({ ...book }))
);


export const selectBooksAndUsers = createSelector(
  selectAllUsers,
  selectAllBooks,
  ( allUsers: User[], allBooks: Book[]) =>  usersBooks(allUsers,allBooks));