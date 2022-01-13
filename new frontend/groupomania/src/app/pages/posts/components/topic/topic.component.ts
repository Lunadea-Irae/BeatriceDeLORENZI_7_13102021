
import { Component, OnDestroy, OnInit, Output, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';
import { Alert } from 'src/app/share/interfaces/alert';
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

  @ViewChild("postComment", { static: false }) postComment!: ElementRef;
  @ViewChild("editPostForm") editPostForm!: ElementRef;

  @Output() public topics!: Topic | any;
  @Output() public isLoaded: boolean | undefined;
  public isLiked: boolean = false;
  public topic: Topic[] | any;
  public edition: boolean = false;
  public alert: boolean = false;
  public alertConfig: Alert = {
    message: "",
    class: ''
  }

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
      required: true,
      rows: 20
    }
  ];

  public comment = {
    label: "Commenter ce poste",
    type: "textarea",
    name: "commentThis",
    id: "commentThis",
    row: 1
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

  public like() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.HttpService.likeOrNot(id).subscribe((data: any) => {
      this.isLiked = data.like;
      data.like ? this.topic.Likes.push("Liked") : this.topic.Likes.splice(0, 1);
    })
  }
  public likeAPost(event: number) {
    this.HttpService.likeOrNot(event).subscribe(data => {
    })
  }

  public deleteTopic() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.HttpService.deletePost(id).subscribe((data: any) => {
      if (data.error) {
        this.alertConfig = {
          message: "Nous n'avons pas pu supprimer votre message pour les raisons suivantes : " + data.error.message,
          class: 'failure'
        }
      } else {
        this.alertConfig = {
          message: "Votre message a bien été supprimé",
          class: 'success'
        }
      }
      this.router.navigateByUrl(`/`);
      window.scroll(0, 0);
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 2000);
    });
  }

  public editTopic() {

    const editPostData: FormData = new FormData();

    const id = Number(this.route.snapshot.paramMap.get('id'));
    for (let field of this.editPostForm.nativeElement) {
      if (field.value !== '') {
        field.id === 'media' ? editPostData.append('file', field.files[0]) : editPostData.append(field.id, field.value.replace(/\n/gi, '&#x0A;'));
      }
    }

    this.HttpService.editPost(id, editPostData).subscribe((data: any) => {
      if (data.error) {
        this.alertConfig = {
          message: "Nous n'avons pas pu enregistrer votre message pour les raisons suivantes : " + data.error.message,
          class: 'failure'
        }
      } else {
        this.alertConfig = {
          message: "Votre message a bien été enregistré",
          class: 'success'
        }
      }
      this.getOnePost();
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 2000);

    })
  }

  public sendComment() {
    event?.preventDefault();
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.HttpService.newComment(id, this.postComment.nativeElement[0].value.replace(/\n/gi, '&#x0A;')).subscribe((data: any) => {
      console.log(data.error);
      if (data.error) {
        this.alertConfig = {
          message: "Nous n'avons pas pu enregistrer votre commentaire pour les raisons suivantes : " + data.error.message,
          class: 'failure'
        }
      } else {
        this.alertConfig = {
          message: "Votre commentaire a bien été enregistré",
          class: 'success'
        }
      }
      this.getOnePost();
      console.log("post getted")
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 100);

      console.log("fin")
    });

  }

  public deletedComment(event: any) {
    console.log(event)
    if (event.error) {
      this.alertConfig = {
        message: "Nous n'avons pas pu supprimer votre commentaire pour les raisons suivantes : " + event.error.message,
        class: 'failure'
      }
    } else {
      this.alertConfig = {
        message: "Votre commentaire a bien été supprimé",
        class: 'success'
      }
    }
    this.getOnePost();
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 100);

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
          this.topic.Likes.find((liked: any) => liked.MessageId === id && liked.UserId === 1) ? this.isLiked = true : '';
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
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.sub.add(this.HttpService.getFilteredPosts(id)
      .pipe(
        map((value: any) => {
          if (value) {
            this.topics = value.reverse();
            this.topics.forEach((element: any) => {
              if (element.media && element.media.slice(-3) === 'mp4') {
                element.type = 'video';
              };
              element.content = element.content.split('&#x0A;');
              element.UserMessage.User.avatar ? '' : element.UserMessage.User.avatar = environment.images + "/avatars/no-avatar.png";

              element.Likes.find((liked: any) => liked.MessageId === element.id && liked.UserId === 1) ? element.isLiked = true : '';
            });
          } else {
            this.sub.add(this.HttpService.getAllPosts()
              .pipe(
                map((value: any) => {
                  this.topics = value.reverse();
                  this.topics.forEach((element: any) => {
                    if (element.media && element.media.slice(-3) === 'mp4') {
                      element.type = 'video';
                    };
                    element.content = element.content.split('&#x0A;');
                    element.UserMessage.User.avatar ? '' : element.UserMessage.User.avatar = environment.images + "/avatars/no-avatar.png";
                    element.Likes.find((liked: any) => liked.MessageId === element.id && liked.UserId === 1) ? element.isLiked = true : '';
                  });
                  this.isLoaded = true;
                })
              )
              .subscribe());
          }
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