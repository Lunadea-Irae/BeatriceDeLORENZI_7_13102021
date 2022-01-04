import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';

import { PostsRoutingModule } from './posts-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TopicComponent } from './components/topic/topic.component';
import { CommentComponent } from './components/comment/comment.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomeComponent,
    TopicComponent,
    CommentComponent,

  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatIconModule,
    ShareModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostsModule { }
