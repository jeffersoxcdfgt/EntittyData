import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { Book } from '../../model/book';

export enum BookActionTypes {
  BOOK_LIST_ALL ='[Book/API] Select All list Books',
  BOOK_LIST_ALL_SUCCESS ='[Book/API] Load Books'
}

export const loadBooks = createAction('[Book/API] Load Books', props<{ books: Book[] }>());
export const setBooks = createAction('[Book/API] Set Books', props<{ books: Book[] }>());
export const addBook = createAction('[Book/API] Add Book', props<{ book: Book }>());
export const setBook = createAction('[Book/API] Set Book', props<{ book: Book }>());
export const upsertBook = createAction('[Book/API] Upsert Book', props<{ book: Book }>());
export const addBooks = createAction('[Book/API] Add Books', props<{ books: Book[] }>());
export const upsertBooks = createAction('[Book/API] Upsert Books', props<{ books: Book[] }>());
export const updateBook = createAction('[Book/API] Update Book', props<{ update: Update<Book> }>());
export const updateBooks = createAction('[Book/API] Update Books', props<{ updates: Update<Book>[] }>());
export const mapBook = createAction('[Book/API] Map Book', props<{ entityMap: EntityMapOne<Book> }>());
export const mapBooks = createAction('[Book/API] Map Books', props<{ entityMap: EntityMap<Book> }>());
export const deleteBook = createAction('[Book/API] Delete Book', props<{ id: string }>());
export const deleteBooks = createAction('[Book/API] Delete Books', props<{ ids: string[] }>());
export const deleteBooksByPredicate = createAction('[Book/API] Delete Books By Predicate', props<{ predicate: Predicate<Book> }>());
export const clearBooks = createAction('[Book/API] Clear Books');
export const selectBooksList = createAction(BookActionTypes.BOOK_LIST_ALL);