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
    headers: new HttpHeaders(localStorage)
  }
  
  getAllUsers() {
    return this.http.get<Users[]>(this.url,this.httpHeader)
  }
  signUp(data: object) {
    return this.http.post(this.url + "/signup", data,this.httpHeader)
  }
  logIn(data: object) {
    return this.http.post(this.url + "/login", data,this.httpHeader)
  }
  editUser(id: number, data: FormData) {
    return this.http.put(this.url + "/edit/" + id, data,this.httpHeader)
  }
  viewProfile(id: number) {
    return this.http.get(this.url + "/" + id,this.httpHeader)
  }
  getToEdit(id: number) {
    return this.http.get(this.url + "/edit/" + id,this.httpHeader)
  }
  deleteUser(id: number) {
    return this.http.delete(this.url + "/" + id,this.httpHeader)
  }
  deleteDataUser(id: number) {
    return this.http.delete(this.url + "/data/" + id,this.httpHeader)
  }
  deleteAvatar(id:number){
    return this.http.delete(this.url+"/avatar/"+id,this.httpHeader)
  }
  likeOrNot(id : number){
    return this.http.post(this.url.replace('/users','/topics') + "/like/" + id, this.httpHeader)
  }
}
