import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/users/components/login/login.component';
import { NotfoundComponent } from './share/component/notfound/notfound.component';
import {
  IsSignedInGuard as AuthGuard
} from './services/is-signed-in.guard';

const routes: Routes = [
  {
    path: 'user', loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {path:'page_not_found',component:NotfoundComponent},
  { path: '', loadChildren: () => import('./pages/posts/posts.module').then((m) => m.PostsModule),canActivate: [AuthGuard] },
  { path: '**', redirectTo:'page_not_found' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
