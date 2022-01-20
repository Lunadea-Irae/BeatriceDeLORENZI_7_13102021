import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { map, Subscription } from 'rxjs';
import { Service } from 'src/app/enum/service';
import { Button } from 'src/app/share/interfaces/button';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public temp: any;
  public user: any;
  public services: object = Service;
  public btnSave: Button = {
    label: 'Enregistrer',
    isBtnIcon: false,
    icon: 'delete_forever'
  }

  @ViewChild('form') form!: ElementRef<any>;

  private sub: Subscription = new Subscription();


  constructor(private readonly router: Router, private readonly HttpService: HttpService, private route: ActivatedRoute) { }

  public deleteAvatar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.HttpService.deleteAvatar(id).subscribe(data => {
      console.log(data);
      this.getOneUser()
    });
  }

  public save() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.form.nativeElement[0].id === 'suppr-user' && this.form.nativeElement[0].checked) {
      this.HttpService.deleteUser(id).subscribe(data => console.log(data));
    } else {
      const newPostData: FormData = new FormData();

      for (let element of this.form.nativeElement) {
        if (element.id === 'avatar') {
          const file: File = element.files[0];
          newPostData.append('file', file);
        } else if (element.type === "checkbox") {
          newPostData.append(element.id, element.checked);
        } else {
          newPostData.append(element.id, element.value)
        };
      }
      this.HttpService.editUser(id, newPostData).subscribe(data => { console.log(data); this.getOneUser() });
    }

  }

  public switchTemp(temp: TemplateRef<any>): void {
    this.temp = temp;
  }
  public getOneUser() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub.add(this.HttpService.getToEdit(id)
      .pipe(map((value: any) => {
        this.user = value;
        this.user.avatar ? '' : this.user.avatar = environment.images + "/avatars/no-avatar.png";
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

