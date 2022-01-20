import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/users/components/login/login.component';
import { NotfoundComponent } from './share/component/notfound/notfound.component';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule), },
  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: () => import('./pages/posts/posts.module').then((m) => m.PostsModule), },
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
