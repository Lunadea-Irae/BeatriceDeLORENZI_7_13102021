import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Button} from "../../interfaces/button";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  public config: Button = {} as Button;

  @Output()
  private whenIsClicked: EventEmitter<unknown> = new EventEmitter<unknown>();

  public clicked() {
    this.whenIsClicked.emit(this.config);
  }

  constructor() { }



  ngOnInit(): void {
  }

}
