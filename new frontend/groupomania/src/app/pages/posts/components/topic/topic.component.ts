
import { Component, OnDestroy, OnInit, Output, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';
import { environment } from 'src/environments/environment';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit, OnDestroy, AfterViewInit {


  @ViewChild("description", { static: false }) desc!: ElementRef;
  @ViewChild("medias", { static: false }) medias!: ElementRef;

  @Output() public topics!: Topic | any;
  @Output() public isLoaded: boolean | undefined;
  public topic: Topic | any;
  public edition: boolean = false;

  public forms = [
    {
      label: "Titre",
      type: "text",
      id: "title",
      value: '',
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
      id: 'content',
      value: '',
      required: true
    }
  ];

  public comment = {
    label: "commentThis", 
    type: "text", 
    placeholder: "Commenter ce post",
    name: "commentThis", 
    id: "commentThis"
  }

  public iconSuppr = {
    label: 'Supprimer',
    isBtnIcon: false,
    icon: 'delete_forever'
  }
  public iconEdit = {
    label: 'Editer',
    isBtnIcon: false,
    icon: 'edit'
  }
  public iconSend = {
    label: 'Envoyer',
    isBtnIcon: false,
    icon: 'reply'
  }
  public sendBtn = {
    label: 'Poster',
    isBtnIcon: false,
    icon: ''
  };

  private sub: Subscription = new Subscription();

  constructor(private readonly router: Router, private readonly HttpService: HttpService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }


  public onTarget(event: any) {
    event.stopPropagation();
  }



  public deleteTopic(id: number) {
    this.HttpService.deletePost(id).subscribe(data => {
      this.router.navigateByUrl(`/`);
      window.scroll(0, 0)
    });
  }

  public editTopic() {
  }


  public countComments() {
    return this.topic.comment.length
  }
  public goToUserPage(id: number) {
    this.router.navigateByUrl(`user/${id}`)
  }
  public getOnePost() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub.add(this.HttpService.getOnePost(id)
      .pipe(
        map((value: any) => {
          this.topic = value;
          if (this.topic.media && this.topic.media.slice(-3) === 'mp4') {
            this.topic.type = 'video';
          };
          this.forms.forEach(field => {
            switch (field.id) {
              case 'media':
                console.log(this.topic[field.id])
                break;
              case 'content':
                field.value = this.topic[field.id].replace(/&#x0A;/gi, '\n')
                break;
              default:
                field.value = this.topic[field.id];
                break;
            }

          })
          this.topic.content = this.topic.content.split('&#x0A;');

          this.isLoaded = true;

        })
      )
      .subscribe());
  }


  public getHeights() {
    setTimeout(() => {
      if (!this.desc || !this.medias || !this.medias.nativeElement.firstChild) {
        return false;
      } else {
        if (this.desc.nativeElement.offsetHeight > this.medias.nativeElement.children[0].offsetHeight) {
          return true;
        } else {
          return false;
        }
      }
    }, 30);
  }

  private getSuggests() {
    this.isLoaded = false;
    this.sub.add(this.HttpService.getAllPosts()
      .pipe(
        map(value => {
          this.topics = value;
          this.topics.forEach((element: any) => {
            if (element.media && element.media.slice(-3) === 'mp4') {
              element.type = 'video';
            };
            element.content = element.content.split('&#x0A;');
            element.UserMessage.User.avatar ? '' : element.UserMessage.User.avatar = environment.images + "/avatars/no-avatar.png";
          });
          this.isLoaded = true;
        })
      )
      .subscribe());
  }

  ngOnInit(): void {
    this.getOnePost();
    this.getSuggests();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }




}