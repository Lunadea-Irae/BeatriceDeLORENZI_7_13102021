import { Injectable } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public topics: any[] = [];
  private sub: Subscription = new Subscription();
  public shown: boolean = false;
  public alert: boolean = false;

  constructor(private readonly HttpService: HttpService) { }



  public submitNew(forms: any, newPostForm: any) {

    const newPostData: FormData = new FormData();

    forms.forEach((field: any) => {
      switch (field.id) {

        case 'description':
          newPostData.append('content', newPostForm.querySelector("#" + field.id).value.replace(/\n/gi, '&#x0A;'));
          break;

        case 'media':
          const file: File = newPostForm.querySelector("#" + field.id).files[0];
          newPostData.append('file', file);
          break;

        default:
          newPostData.append(field.id, newPostForm.querySelector("#" + field.id).value);
          break;
      }
    });
    let alertConfig: object = {};
    this.HttpService.newPost(newPostData).subscribe((data: any) => {
      if (data.error) {
        alertConfig = {
          message: "Nous n'avons pas pu enregistrer votre message pour les raisons suivantes : " + data.error.message,
          class: 'failure'
        }
      } else {
        alertConfig = {
          message: "Votre message a bien été enregistré",
          class: 'success'
        }
      }
      window.scroll(0, 0);
    });
    return [alertConfig,this.getTopics()];
  }

  public like(event: number) {
    this.HttpService.likeOrNot(event).subscribe()
  }

  public getTopics() {
    this.topics = [];
    this.sub.add(this.HttpService.getAllPosts()
      .pipe(
        map((value: any) => {
          let topics = value.reverse();
          topics.forEach((element: any) => {
            if (element.media && element.media.slice(-3) === 'mp4') {
              element.type = 'video';
            };
            element.content = element.content.split('&#x0A;');
            element.UserMessage.User.avatar ? '' : element.UserMessage.User.avatar = environment.images + "/avatars/no-avatar.png";

            element.Likes.find((liked: any) => { (liked.MessageId === element.id && liked.UserId == localStorage.getItem('userId')) ? element.isLiked = true : '' });
            this.topics.push(element);
          });
        }))
      .subscribe());
    return this.topics;
  }
}
