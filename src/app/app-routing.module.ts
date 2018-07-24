import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';


const appRoutes: Routes = [
    { path: '', component: SignInComponent, pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
