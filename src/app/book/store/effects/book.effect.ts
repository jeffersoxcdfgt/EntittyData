import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { BookService } from '../services/book.service';
import { BookActionTypes } from '../actions/book.actions';
import { Book } from '../../model/book';

@Injectable()
export class BookEffects {

  public selectBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BookActionTypes.BOOK_LIST_ALL),
    mergeMap(() => this.bookService.findAll()
      .pipe(
        map((listbooks:Book[]) => ({ type: BookActionTypes.BOOK_LIST_ALL_SUCCESS, books: listbooks }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}
}