import { Component, Input, OnInit } from '@angular/core';
import { Form } from '../../interfaces/form';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public config!: Form;


  constructor() { }


  ngOnInit(): void {
  }
}
