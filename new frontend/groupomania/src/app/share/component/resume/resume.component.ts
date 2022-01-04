import { Router } from '@angular/router';
import { Component, ElementRef, EventEmitter, Input,  OnDestroy,  OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @ViewChildren('masonry') masonry!: QueryList<any>;
  
  @Input() public data!:any;
  @Input() public isLoaded: boolean | undefined;

  public topics: any;


  public masonryOptions: NgxMasonryOptions = {
    fitWidth: true,
    gutter: 12,
    itemSelector: ".grid-item",
    columnWidth: 300,
  };


  @Output() whenSuggestIsClicked: EventEmitter<unknown> = new EventEmitter();

  constructor(private readonly router: Router) { }

  goToTopicPage(id: number) {
    this.router.navigateByUrl(`/${id}`)
      .then(() => {
        this.whenSuggestIsClicked.emit(id);
        window.scroll(0, 0);
      });

  }

  goToUserPage(id: number) {
    this.router.navigateByUrl(`user/${id}`)
  }
  like(id: number) {
    console.log(id);
  }
  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.masonry.changes.subscribe(c => {
      c.toArray().forEach((item: ElementRef) => {
        const img = item.nativeElement.children[0].children[1];
      })
    });
  }

}