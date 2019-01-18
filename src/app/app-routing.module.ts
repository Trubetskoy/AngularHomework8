import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  {path:'registration', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
