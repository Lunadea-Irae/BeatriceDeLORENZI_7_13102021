import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../../../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url= environment.apiUrl+'/users';


  constructor(private readonly http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      authorization: '',
      refreshToken : '',
      userId : '2'
    })
  }
  
  getAllUsers() {
    return this.http.get<Users[]>(this.url)
  }
  signUp(data: object) {
    return this.http.post(this.url + "users/signup", data)
  }
  logIn(data: object) {
    return this.http.post(this.url + "/login", data)
  }
  editUser(id: number, data: FormData) {
    return this.http.put(this.url + "/edit/" + id, data,this.httpHeader)
  }
  viewProfile(id: number) {
    return this.http.get(this.url + "/" + id)
  }
  getToEdit(id: number) {
    return this.http.get(this.url + "/edit/" + id)
  }
  deleteUser(id: number) {
    return this.http.delete(this.url + "/" + id)
  }
  deleteDataUser(id: number) {
    return this.http.delete(this.url + "/data/" + id)
  }
  likeOrNot(id : number){
    return this.http.post(this.url.replace('/users','/topics') + "/like/" + id, this.httpHeader)
  }
}
