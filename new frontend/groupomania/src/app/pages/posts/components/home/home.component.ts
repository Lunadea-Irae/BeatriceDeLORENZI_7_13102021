import { Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';
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


  public newPostData: any = {};
  public shown: boolean = false;
  public forms = [
    {
      label: "Titre",
      type: "text",
      id: "title",
    },
    {
      label: "Image",
      type: 'file',
      id: "media"
    },
    {
      label: "Message",
      type: 'textarea',
      id: 'description'
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
    style:{'padding':'16px'}
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
    this.forms.forEach(field => {
      field.id === 'description' ? this.newPostData[field.id] = this.newPostForm.nativeElement.querySelector("#" + field.id).value.split('\n') : this.newPostData[field.id] = this.newPostForm.nativeElement.querySelector("#" + field.id).value;
    });
    //this.newPostData;
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
          //js normal
          this.topics = value;
          this.topics.forEach((element: any) => {
            if (element.media.slice(-3) === 'mp4') {
              element.type = 'video';
            };
          });
          this.isLoaded = true;
        })
      )
      .subscribe());
  }

}


