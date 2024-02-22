import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkIfUserLoggedIn():boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
