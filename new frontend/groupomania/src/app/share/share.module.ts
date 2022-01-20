import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { FormComponent } from './component/form/form.component';

import {MatIconModule} from '@angular/material/icon';
import { ResumeComponent } from './component/resume/resume.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsComponent } from './component/icons/icons.component';
import { AlertComponent } from './component/alert/alert.component';
import { NotfoundComponent } from './component/notfound/notfound.component';




@NgModule({
  declarations: [
    ButtonComponent,
    FormComponent,
    ResumeComponent,
    IconsComponent,
    AlertComponent,
    NotfoundComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgxMasonryModule,
    CKEditorModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    FormComponent,
    ResumeComponent,
    AlertComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShareModule { }
