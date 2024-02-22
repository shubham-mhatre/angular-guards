import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getprofileInfo():any{
    return {
      "name":"shubham",
      "email":"shubham@gmail.com"
    };
  }
}
