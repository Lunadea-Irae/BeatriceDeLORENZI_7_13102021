
import { Component, HostListener } from '@angular/core';
import { interval, startWith } from 'rxjs';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Groupomania';
  isAuth: boolean = true;
  scrolled: boolean = false;
  userId: number = Number(localStorage.getItem('userId'));

  constructor(private readonly HttpService: HttpService) { }
  @HostListener('window:scroll', ['$event'])

  public onWindowScroll(e: any) {
  }
  public logout() {
    localStorage.clear();
    this.isAuth = true;
  }
  ngOnInit() {
    //Refresh token each 4min
    interval(240000)
      .pipe(startWith(0))
      .subscribe(() => {
        localStorage.length !== 0 ? this.HttpService.refreshToken().subscribe(
          (data: any) => {
            console.log(data.accessToken);
            data.accessToken ? localStorage.setItem('accessToken', data.accessToken) : ''},
          (error: any) => console.error(error.error.error)) : '';
      })
    window.scrollY != 0 ? this.scrolled = true : this.scrolled = false;

  }
}