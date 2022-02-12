import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../../model/book';


@Injectable()
export class BookService {
  protected URL ='http://localhost:4200/api/books';


  constructor(private http: HttpClient ){ }

  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(params?:any): Observable<Book[]>{
      return this.http.get<Book[]>(this.URL , { params: params }).pipe(
             tap(_ => console.log('fetched books'))
      )
  }
}