import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class FligthsService {
  protected URL =environment.apiUrl

  constructor(private http: HttpClient ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/flights?access_key=${environment.access_key}`).pipe(
        tap(_ => console.log('fetched fligths'))
    );
  }
}