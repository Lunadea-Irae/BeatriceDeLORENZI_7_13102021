
import { Component, OnDestroy, OnInit, Output, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit, OnDestroy, AfterViewInit {
  //@ViewChildren("description", { read: ElementRef }) desc!: QueryList<ElementRef>;
  // @ViewChildren("medias", { read: ElementRef }) medias!: QueryList<ElementRef>;


  @ViewChild("description", { static: false }) desc!: ElementRef;
  @ViewChild("medias", { static: false }) medias!: ElementRef;

  @Output() public topics!: Topic | any;
  @Output() public isLoaded: boolean | undefined;
  public props!: boolean;
  //public descHeight!: number;
  //public mediasHeight!: number;
  public topic: Topic | any;

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

  private sub: Subscription = new Subscription();

  constructor(private readonly router: Router, private readonly HttpService: HttpService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

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
          this.topic = value[0];
          if (this.topic.media.slice(-3) === 'mp4') {
            this.topic.type = 'video';
          };
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
            if (element.media.slice(-3) === 'mp4') {
              element.type = 'video';
            };
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