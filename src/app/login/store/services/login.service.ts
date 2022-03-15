import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login, userLoginResponse } from '../class/loging';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class LoginService {
  protected URL =environment.loginUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public logIn(data: Login): Observable<userLoginResponse>{
    return this.http.post<Login>(`${this.URL}/login`, data.user).pipe(
        tap(_ => console.log('LOGIN')),
        catchError(this.traceService.handleError<userLoginResponse>('logIn'))
    );
  }
}