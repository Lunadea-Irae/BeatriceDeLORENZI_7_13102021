import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url= environment.apiUrl+'/topics';

  constructor(private readonly http: HttpClient) { }

  getAllPosts() {
    return this.http.get(this.url);
  }
  getOnePost(id: number) {
    return this.http.get(this.url + "/" + id)
  }
  newPost(data: object) {
    return this.http.post(this.url, data)
  }
  editPost(id: number, data: object) {
    return this.http.put<any>(this.url + "/" + id, data)
  }
  deletePost(id: number) {
    return this.http.delete(this.url + "/" + id)
  }
}
