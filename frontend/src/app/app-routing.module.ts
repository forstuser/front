import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './dashboard/data-panel/home/home.component';
import { CategoryComponent } from './dashboard/data-panel/category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

// routers
const appRoutes: Routes = [
    { path: 'login', component: SignInComponent, pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children:
        [   { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: 'category', component: CategoryComponent},
            { path: 'home', component: HomeComponent}
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

@NgModule({
imports: [ RouterModule.forRoot( appRoutes )],
exports: [ RouterModule]
})
export class AppRoutingModule  {

}
