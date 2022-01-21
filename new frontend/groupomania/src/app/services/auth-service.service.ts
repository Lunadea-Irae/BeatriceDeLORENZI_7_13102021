import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private token = localStorage.getItem('accessToken');





  constructor(public jwtHelper: JwtHelperService, public httpService: HttpService) { }
 



//Check if user is auth
  public isAuthenticated(): boolean {


    const refreshToken = localStorage.getItem('refreshToken');
    //if token is expired and there is a refresh token : refresh token
    if (this.token && this.jwtHelper.isTokenExpired(this.token) && refreshToken) {
      this.httpService.refreshToken({ accessToken: JSON.parse(this.token), refreshToken: JSON.parse(refreshToken) }).subscribe((data) => {
        localStorage.setItem('test', "test")
      })
    }

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
    return this.token && (this.jwtHelper.decodeToken(this.token).id === id || this.jwtHelper.decodeToken(this.token).level >= 9) ? !this.jwtHelper.isTokenExpired(this.token) : false;
  }

}

