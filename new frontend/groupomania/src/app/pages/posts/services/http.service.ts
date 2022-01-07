import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = environment.apiUrl + '/topics';

  constructor(private readonly http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      authorization: '',
      refreshToken : '',
      userId : '2'
    })
  }

  getAllPosts() {
    return this.http.get(this.url);
  }
  getOnePost(id: number) {
    return this.http.get(this.url + "/" + id)
  }
  newPost(data: FormData) {
    return this.http.post(this.url + "/", data,this.httpHeader)
  }
  editPost(id: number, data: object) {
    return this.http.put<any>(this.url + "/" + id, JSON.stringify(data))
  }
  deletePost(id: number) {
    return this.http.delete(this.url + "/" + id)
  }
}
