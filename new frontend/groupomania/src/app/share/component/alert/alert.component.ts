import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../../interfaces/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  public config: Alert = {} as Alert;

  constructor() { }

  ngOnInit(): void {
  }

}
