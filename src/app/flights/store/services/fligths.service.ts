import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Flights } from '../../class/flights';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class FligthsService {
  protected URL =environment.apiUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(): Observable<Flights>{
    return this.http.get<Flights>(`${this.URL}/api/fligths`).pipe(
        tap(_ => console.log('fetched fligths')),
        catchError(this.traceService.handleError<Flights>('findAll'))
    );
  }
}