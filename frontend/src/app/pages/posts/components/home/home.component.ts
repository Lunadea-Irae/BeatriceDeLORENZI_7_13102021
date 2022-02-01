import { Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';
import { Alert } from 'src/app/share/interfaces/alert';
import { HttpService } from '../../services/http.service';
import { UtilsService } from '../../services/utils.service';

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

  public alert: boolean = false;
  public imageSrc: string | ArrayBuffer | null = null;

  public shown: boolean = false;

  public alertConfig: Alert | any = {
    message: 'Votre message a bien été enregistré',
    class: 'sucess'
  }

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
      accept: ".jpg, .jpeg, .png, .mp4, .mov, .webp"
    },
    {
      label: "Message",
      type: 'textarea',
      id: 'description',
      required: true,
      rows: 20
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



  constructor(private readonly HttpService: HttpService, private readonly UtilsService: UtilsService) { }

  public readURL(event: any) {
    if (event && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    } else {
      this.imageSrc = null
    }
  }

  public displayForm(event: unknown) {
    this.shown = true;
  }

  public onTarget(event: any) {
    event.stopPropagation();
  }

  public submitNew() {
    const submitNew = this.UtilsService.submitNew(this.forms, this.newPostForm.nativeElement);
    this.topics = submitNew[1];
    this.alertConfig = submitNew[0];
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 2000);
  }

  public like(event: number) {
    this.HttpService.likeOrNot(event).subscribe()
  }

  ngOnInit(): void {
    //this.getTopics();
    this.topics = this.UtilsService.getTopics();
    this.isLoaded = true;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  @HostListener('window:scroll')
  public onWindowScroll() {
    window.scrollY != 0 ? this.scrolled = true : this.scrolled = false;
  }
}


