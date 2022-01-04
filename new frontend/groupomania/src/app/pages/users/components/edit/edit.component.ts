import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { map, Subscription } from 'rxjs';
import { Service } from 'src/app/enum/service';
import { Button } from 'src/app/share/interfaces/button';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public temp: any;
  public user: any;
  public services: object = Service;
  public btnSave:Button = {
    label: 'Enregistrer',
    isBtnIcon: false,
    icon: 'delete_forever'
  }

  private sub: Subscription = new Subscription();


  constructor(private readonly router: Router, private readonly HttpService: HttpService, private route: ActivatedRoute) { }
public save(){

}

  public switchTemp(temp: TemplateRef<any>): void {
    this.temp = temp;
  }
  public getOneUser() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub.add(this.HttpService.viewProfile(id)
      .pipe(map((value: any) => {
        this.user = value[0];
      }
      )
      )
      .subscribe());
  }

  ngOnInit(): void {
    this.getOneUser();
    console.log(Service);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

