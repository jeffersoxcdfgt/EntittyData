import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../../model/user';


@Injectable()
export class UserService {
  protected URL ='http://localhost:4200/api/users';


  constructor(private http: HttpClient ){ }

  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(params?:any): Observable<User[]>{
      return this.http.get<User[]>(this.URL , { params: params }).pipe(
             tap(_ => console.log('fetched users'))
      )
  }

}