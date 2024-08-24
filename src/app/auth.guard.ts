import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { authUserService } from './Services/AuthUsers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  AuthusersServ:authUserService = inject(authUserService);
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.AuthusersServ.auth()){
        console.log(this.AuthusersServ.auth())
        return true;
      }
      // this.router.navigate(['/Products']);
    return false;
  }
  
}
