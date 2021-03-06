import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import {
  CanEditGuard as AuthGuard
} from '../../services/can-edit.guard';
import { NotfoundComponent } from 'src/app/share/component/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: ":id", component: ProfileComponent },
  { path: ":id/edit", component: EditComponent, canActivate: [AuthGuard] },
  { path: 'page_not_found', component: NotfoundComponent },
  { path: '**', redirectTo: 'page_not_found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
