import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      authorization: '',
      refreshToken: '',
      userId: '8'
    })
  }

  refreshToken(data : object) {
    return this.http.post(this.url+'/users/refresh',JSON.stringify(data), this.httpHeader);
  }
}
