import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './_services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
