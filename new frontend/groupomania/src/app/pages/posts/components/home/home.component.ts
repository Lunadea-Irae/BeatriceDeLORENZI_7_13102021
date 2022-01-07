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


  public shown: boolean = false;
  public forms = [
    {
      label: "Titre",
      type: "text",
      id: "title",
      required : true
    },
    {
      label: "Image",
      type: 'file',
      id: "media",
      accept:".jpg, .jpeg, .png, .mp4, .mov"
    },
    {
      label: "Message",
      type: 'textarea',
      id: 'description',
      required : true
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
    
    const newPostData : FormData = new FormData();

    this.forms.forEach(field => {
      switch (field.id){
        case 'description':
         newPostData.append('content',this.newPostForm.nativeElement.querySelector("#" + field.id).value.replace('\n','&#x0A;'));
          break;
        case 'media' :
          
          const file:File = this.newPostForm.nativeElement.querySelector("#" + field.id).files[0];
          newPostData.append('file',file);
          break;
        default :
        newPostData.append(field.id,this.newPostForm.nativeElement.querySelector("#" + field.id).value);
        break;
      }
//      field.id === 'description' ? this.newPostData[field.id] = this.newPostForm.nativeElement.querySelector("#" + field.id).value.replace('\n','&#x0A;') : this.newPostData[field.id] = this.newPostForm.nativeElement.querySelector("#" + field.id).value;
    });

    this.HttpService.newPost(newPostData).subscribe(data=>console.log(data));
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


