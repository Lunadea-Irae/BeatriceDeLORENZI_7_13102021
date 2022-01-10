import { Component, EventEmitter, OnDestroy, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Users } from 'src/app/interfaces/users';
import { Topic } from 'src/app/interfaces/topic';
import { Service } from 'src/app/enum/service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChildren('masonry') masonry!: QueryList<any>;
  
  public services: any = Service;

  public isLoaded: boolean | undefined;

  public masonryOptions: NgxMasonryOptions = {
    fitWidth: true,
    gutter: 12,
    itemSelector: ".grid-item",
    columnWidth: 200,
  };

  public btnEdit = {
    label: 'Editer mon profil',
    isBtnIcon: false,
    icon: 'delete_forever'
  }

  private sub: Subscription = new Subscription();

  @Output() whenSuggestIsClicked: EventEmitter<unknown> = new EventEmitter();
  @Output() public posts: Topic | any;
  user: Users | any;
  

  constructor(private readonly router: Router, private readonly HttpService: HttpService, private route: ActivatedRoute) { }

  public edit(id: number) {
    this.router.navigateByUrl(`user/${id}/edit`)
  }

  goToTopicPage(id: number) {
    this.router.navigateByUrl(`/${id}`)
      .then(() => {
        this.whenSuggestIsClicked.emit(id);
        window.scroll(0, 0);
      });

  }

  
  like(id: number) {
  }
  public getOneUser() {
    this.isLoaded = false;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub.add(this.HttpService.viewProfile(id)
      .pipe(map((value: object) => {
        this.user = value;
        
        this.user.service ? this.user.service = this.services[this.user.service] :'';
        this.user.brief ? this.user.brief = this.user.brief.split('&#x0A;'):'';
        let messages: object[] = [];
        this.user.UserMessages.forEach((element: any) => {
          element.Message.content = element.Message.content.split('&#x0A;');
          messages.push(element.Message);
        });
        this.posts = messages;
        this.user.stats = { following: 0, followed: 0 };
        this.isLoaded = true;
      }
      )
      )
      .subscribe());
  }

  ngOnInit(): void {
    this.getOneUser();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
