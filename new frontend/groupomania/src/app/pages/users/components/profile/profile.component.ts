import { Component, EventEmitter, OnDestroy, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Users } from 'src/app/interfaces/users';
import { Topic } from 'src/app/interfaces/topic';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChildren('masonry') masonry!: QueryList<any>;
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

  public edit(id:number){
    console.log(id);
    this.router.navigateByUrl(`user/${id}/edit`)
  }

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
  }
  public getOneUser() {
    this.isLoaded = false;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub.add(this.HttpService.viewProfile(id)
      .pipe(map((value: any) => {
        this.user = value[0];
        this.posts = this.user.stats.posts;
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
