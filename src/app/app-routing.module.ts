import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
    { path: '', component: SignInComponent, pathMatch: 'full' },
    { path: 'login', component: SignInComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
