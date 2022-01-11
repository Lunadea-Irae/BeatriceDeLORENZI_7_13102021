import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment | any;
  @ViewChild('reply') reply!: ElementRef<any>;
  @ViewChild('edit') edit!: ElementRef<any>;
  @Output()
  private onDelete: EventEmitter<unknown> = new EventEmitter<unknown>();

  public showReply: boolean = false;
  public edition:boolean = false;

  public editionField ={
    label: "Editer",
    type: "textarea",
    name: "commentThis",
    id: "commentThis",
    row: 1,
    value : ""
  }

  public iconSuppr = {
    label: 'Supprimer',
    isBtnIcon: true,
    icon: 'delete_forever'
  }
  public iconEdit = {
    label: 'Editer',
    isBtnIcon: true,
    icon: 'edit'
  }
  public iconReply = {
    label: 'Répondre',
    isBtnIcon: true,
    icon: 'reply'
  }

  public forms = [
    {
      label: "Répondre",
      type: "textarea",
      id: "comment",
      row: 1
    },
  ]


  constructor(private readonly router: Router, private readonly HttpService: HttpService) { }

  public paraf() {
    return this.comment.content.split('&#x0A;')
  }

  public editComment() {
    const id: number = this.comment.id;
    console.log(this.edit.nativeElement[0].value.replace(/\n/gi, '&#x0A;'))
    this.HttpService.editComment(id, this.edit.nativeElement[0].value.replace(/\n/gi, '&#x0A;')).subscribe(data => {
      console.log(data)
    });
  }

  public deleteComment(){
    const id: number = this.comment.id;
    this.HttpService.deleteComment(id).subscribe(data => {
      this.onDelete.emit(data);
    });
  }


  public goToUserPage(id: number) {
    this.router.navigateByUrl(`user/${id}`)
  }
  ngOnInit(): void {
    this.editionField.value = this.comment.content;
    this.comment.User.avatar ? '' : this.comment.User.avatar = environment.images + "/avatars/no-avatar.png";
  }

}
