import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {
  constructor(private cookie:CookieService,private router : Router) { }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    
    if(this.cookie.get('role') == "user" || this.cookie.get('role') == "doctor"){
      return true;
    }
    else{
      this.router.navigate(['/NotAccess']);
      return false;
    }
  }
}
