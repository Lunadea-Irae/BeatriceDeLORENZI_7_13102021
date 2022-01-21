import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public jwtHelper: JwtHelperService) {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    // Check whether the token is expired and return
    // true or false
return !token?  false : !this.jwtHelper.isTokenExpired(token);
  }
}
