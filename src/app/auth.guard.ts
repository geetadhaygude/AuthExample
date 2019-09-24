import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './service/login.service';
import { debug } from 'util';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private loginService:LoginService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem("token")!=null){
       
        let roles=next.data["roles"] as Array<string>;
        if(roles){
          var match=this.loginService.roleMatch(roles);
          if(match) return true;
          else
            this.router.navigate(['/forbidden'])
        }

        return true;
      }
        this.router.navigate(['/login']);
        return false;
  
}
}
