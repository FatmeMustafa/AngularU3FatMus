import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [                      //holds an array of multiple routes
  { path: '', component: LoginComponent},     //path is what gets entered into the URL after the domain, once it is reached a certain component("page") will be loaded. In this case the empty path is our "starting page" and it shows the loginComponent
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
{ path: 'user/:id', component: SingleUserComponent},
  { path: '**', component: PageNotFoundComponent}    //if path is something random that does not exist, load PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    //register routs for application
  exports: [RouterModule]
})
export class AppRoutingModule { }