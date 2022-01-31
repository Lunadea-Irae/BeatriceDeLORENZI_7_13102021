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
    headers: new HttpHeaders(localStorage)
  }
  refreshToken() {
    return this.http.get(this.url+'/users/refresh',this.httpHeader);
  }
}
