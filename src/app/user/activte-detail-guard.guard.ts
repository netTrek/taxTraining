import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivteDetailGuardGuard implements CanActivate {
  constructor (private $user: UserService ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.$user.isAdmin; // later you can use an user or login service, to check if an admin ist logged in and has access to an rout
    return this.$user.isAdmin ();
  }
}
