import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService,private router:Router){}
  canActivate(){
    if(this.authservice.checkIfUserLoggedIn()){
      return true;
    }
    alert("you are not logged in ! Redirecting to login page.")
    this.router.navigate(['login']);
    return false;
    
  }
  
}
