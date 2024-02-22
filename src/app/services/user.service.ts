import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private baseuri="https://jsonplaceholder.typicode.com/";

  getUsers() : Observable<any[]>{
    return this.http.get<any>(this.baseuri+'users').pipe(
      catchError(error => {
        return throwError(error);
      })
      );
  }
}
