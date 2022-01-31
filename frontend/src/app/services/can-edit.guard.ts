import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate {
  constructor(public auth: AuthServiceService, public router: Router) { }
canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  
  if (!this.auth.canEdit(route.params['id'])) {
    this.router.navigate(['/']);
    return false;
  }
  return true;
}
}