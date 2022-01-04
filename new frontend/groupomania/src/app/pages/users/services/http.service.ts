import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../../../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url= environment.apiUrl+'/users';
//  private url = 'http://localhost:3000/api/users';


  constructor(private readonly http: HttpClient) { }
  getAllUsers() {
    this.http.get<Users[]>(this.url)
  }
  signUp(data: object) {
    this.http.post(this.url + "users/signup", data)
  }
  logIn(data: object) {
    this.http.post(this.url + "/login", data)
  }
  editUser(id: number, data: object) {
    this.http.put(this.url + "/" + id, data)
  }
  viewProfile(id: number) {
    return this.http.get(this.url + "/" + id)
  }
  deleteUser(id: number) {
    this.http.delete(this.url + "/" + id)
  }
}
