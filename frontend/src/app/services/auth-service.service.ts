import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private token = localStorage.getItem('accessToken')?.split(' ')[1];





  constructor(public jwtHelper: JwtHelperService, public httpService: HttpService) { }
 



//Check if user is auth
  public isAuthenticated(): boolean {


    try {
      this.token && this.jwtHelper.isTokenExpired(this.token);
    } catch (error) {
      return false;
    }

    return !this.token || this.jwtHelper.decodeToken(this.token).id != localStorage.getItem('userId') ? false : !this.jwtHelper.isTokenExpired(this.token);
  }
  
 
 public canEdit(id: number): boolean {
    try {
      this.token && this.jwtHelper.isTokenExpired(this.token);
    } catch (error) {
      return false;
    }
    return this.token && (this.jwtHelper.decodeToken(this.token).id == id || this.jwtHelper.decodeToken(this.token).level >= 9) ? !this.jwtHelper.isTokenExpired(this.token) : false;
  }

}

