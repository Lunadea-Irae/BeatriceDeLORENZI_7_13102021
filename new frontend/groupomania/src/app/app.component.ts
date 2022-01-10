
import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'groupomania';
  isAuth: boolean | undefined = true;
  scrolled: boolean = false;


  constructor() { }
  @HostListener('window:scroll', ['$event'])


  ngOnInit() {
    window.scrollY != 0 ? this.scrolled = true : this.scrolled = false;
  }
  public onWindowScroll(e: any) {
  }
}