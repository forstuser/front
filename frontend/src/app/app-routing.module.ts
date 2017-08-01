import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'home', component: AppComponent}
];

@NgModule({
imports: [ RouterModule.forRoot( appRoutes )],
exports: [ RouterModule]
})
export class AppRoutingModule  {

}
