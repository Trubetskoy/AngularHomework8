import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.apiKey) {
        return true;
    } else {
        this.router.navigate(['login']);
        return false;
    }
  }
}
