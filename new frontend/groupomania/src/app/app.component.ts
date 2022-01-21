
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Groupomania';
  isAuth: boolean = true;
  scrolled: boolean = false;


  constructor() { }
  @HostListener('window:scroll', ['$event'])

  public onWindowScroll(e: any) {
  }
  public logout() {
    localStorage.clear();
    this.isAuth = false;
  }
  ngOnInit() {
    window.scrollY != 0 ? this.scrolled = true : this.scrolled = false;

  }
}