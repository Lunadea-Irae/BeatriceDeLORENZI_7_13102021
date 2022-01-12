import { Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('newPostForm') newPostForm!: ElementRef<any>;

  public isLoaded: boolean = false;
  public topics: Topic | any;
  public scrolled: boolean = false;


  public shown: boolean = false;
  public forms = [
    {
      label: "Titre",
      type: "text",
      id: "title",
      required: true
    },
    {
      label: "Image",
      type: 'file',
      id: "media",
      accept: ".jpg, .jpeg, .png, .mp4, .mov"
    },
    {
      label: "Message",
      type: 'textarea',
      id: 'description',
      required: true,
      rows : 20
    }
  ];

  public isConConfig = {
    label: 'Nouveau post',
    isBtnIcon: true,
    icon: 'check_circle'
  };

  public sendBtn = {
    label: 'Poster',
    isBtnIcon: false,
    icon: ''
  };

  public defaultConfig = {
    label: 'Créer un nouveau post',
    isBtnIcon: false,
    icon: '',
    style: { 'padding': '16px' }
  }






  private sub: Subscription = new Subscription();



  constructor(private readonly HttpService: HttpService) { }


  public displayForm(event: unknown) {
    this.shown = true;
  }

  public onTarget(event: any) {
    event.stopPropagation();
  }

  public submitNew() {

    const newPostData: FormData = new FormData();

    this.forms.forEach(field => {
      switch (field.id) {
        case 'description':
          newPostData.append('content', this.newPostForm.nativeElement.querySelector("#" + field.id).value.replace(/\n/gi, '&#x0A;'));
          break;
        case 'media':

          const file: File = this.newPostForm.nativeElement.querySelector("#" + field.id).files[0];
          newPostData.append('file', file);
          break;
        default:
          newPostData.append(field.id, this.newPostForm.nativeElement.querySelector("#" + field.id).value);
          break;
      }
    });

    this.HttpService.newPost(newPostData).subscribe(data => {
      this.getTopics();
      window.scroll(0, 0)
    });
  }

  public like(event: number){
    this.HttpService.likeOrNot(event).subscribe(data=>{
    })
  }

  ngOnInit(): void {
    this.getTopics();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  @HostListener('window:scroll')
  public onWindowScroll() {
    window.scrollY != 0 ? this.scrolled = true : this.scrolled = false;
  }

  private getTopics() {
    this.isLoaded = false;
    this.sub.add(this.HttpService.getAllPosts()
      .pipe(
        map(value => {
          console.log(value);
          this.topics = value;
          this.topics.forEach((element: any) => {
            if (element.media && element.media.slice(-3) === 'mp4') {
              element.type = 'video';
            };
            element.content = element.content.split('&#x0A;');
            element.UserMessage.User.avatar ? '' : element.UserMessage.User.avatar = environment.images+"/avatars/no-avatar.png";
            element.Likes.find((liked: any) => liked.MessageId === element.id && liked.UserId === 1) ? element.isLiked = true : '';

          });
          this.isLoaded = true;
        })
      )
      .subscribe());
  }

}


