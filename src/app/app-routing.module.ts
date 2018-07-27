import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { NewComponent } from './dashboard/jobs/new/new.component';
import { UnderProgressComponent } from './dashboard/jobs/under-progress/under-progress.component';
import { CompletedComponent } from './dashboard/jobs/completed/completed.component';


const appRoutes: Routes = [
    { path: '', component: SignInComponent, pathMatch: 'full' },
    { path: 'login', component: SignInComponent, pathMatch: 'full' },
    {
        path: 'dashboard', component: DashboardComponent, children: [{ path: '', redirectTo: 'new', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'new', component: NewComponent },
        { path: 'underProgress', component: UnderProgressComponent },
        { path: 'completed', component: CompletedComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
