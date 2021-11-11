import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "../pages/posts/posts.component";
import {CreateComponent} from "../pages/create/create.component";
import {EditComponent} from "../pages/edit/edit.component";
import {UsersComponent} from "../pages/users/users.component";

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'create-new-post', component: CreateComponent},
  { path: 'edit-post', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
