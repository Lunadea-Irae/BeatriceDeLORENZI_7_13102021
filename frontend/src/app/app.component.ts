
import { Component, HostListener } from '@angular/core';
import { interval, startWith } from 'rxjs';
import { AppService } from './services/app.service';
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

  constructor(private readonly HttpService: HttpService, private readonly AppService : AppService) { }
  @HostListener('window:scroll', ['$event'])

  public onWindowScroll(e: any): void {
    window.pageYOffset === 0 ? this.scrolled = false : this.scrolled = true;
  }
  public logout() {
    localStorage.clear();
  }
  ngOnInit() {
    //Refresh token each 4min
    this.AppService.refreshToken()
    window.scrollY != 0 ? this.scrolled = true : this.scrolled = false;

  }
}