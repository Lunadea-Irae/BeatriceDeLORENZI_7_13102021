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
      refreshToken: '',
      userId: '8'
    })
  }

  getAllPosts() {
    return this.http.get(this.url, this.httpHeader);
  }


  getFilteredPosts(id: number) {
    return this.http.get(this.url + "/filter/"+id, this.httpHeader);
  }

  getOnePost(id: number) {
    return this.http.get(this.url + "/" + id, this.httpHeader)
  }
  newPost(data: FormData) {
    return this.http.post(this.url + "/", data, this.httpHeader)
  }
  editPost(id: number, data: FormData) {
    return this.http.put(this.url + "/" + id, data, this.httpHeader)
  }
  deletePost(id: number) {
    return this.http.delete(this.url + "/" + id, this.httpHeader)
  }
  newComment(id: number, data: string) {
    return this.http.post(this.url + "/comment/" + id, { comment: data }, this.httpHeader)
  }
  editComment(id: number, data: string) {
    return this.http.put(this.url + "/comment/" + id, { comment: data }, this.httpHeader)
  }
  deleteComment(id: number) {
    return this.http.delete(this.url + "/comment/" + id, this.httpHeader)
  }

  likeOrNot(id: number) {
    return this.http.post(this.url + "/like/" + id, this.httpHeader)
  }
}
