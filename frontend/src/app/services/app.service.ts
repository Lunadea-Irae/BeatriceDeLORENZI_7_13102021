import { Injectable } from '@angular/core';
import { interval, startWith } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly HttpService: HttpService) { }

  public refreshToken(){
    interval(240000)
    .pipe(startWith(0))
    .subscribe(() => {
      localStorage.length !== 0 ? this.HttpService.refreshToken().subscribe(
        (data: any) => {
          data.accessToken ? localStorage.setItem('accessToken', data.accessToken) : ''
        },
        (error: any) => console.error(error.error.error)) : '';
    })
  }
}
