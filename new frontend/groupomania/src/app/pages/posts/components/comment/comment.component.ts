import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment | any;

  public showReply: boolean = false;

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
      id: "comment"
    },
  ]

  constructor(private readonly router: Router) { }
  public goToUserPage(id: number) {
    this.router.navigateByUrl(`user/${id}`)
  }
  ngOnInit(): void {
  }

}
