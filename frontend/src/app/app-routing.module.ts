import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'home', component: DashboardComponent}
];

@NgModule({
imports: [ RouterModule.forRoot( appRoutes )],
exports: [ RouterModule]
})
export class AppRoutingModule  {

}
