import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { LeftPanelComponent } from './dashboard/left-panel/left-panel.component';
import { DataPanelComponent } from './dashboard/data-panel/data-panel.component';
import { LeftPanelItemsComponent } from './dashboard/left-panel/left-panel-items/left-panel-items.component';
import { CategoryComponent } from './dashboard/data-panel/category/category.component';
import { HomeComponent } from './dashboard/data-panel/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    HeaderComponent,
    LeftPanelComponent,
    DataPanelComponent,
    LeftPanelItemsComponent,
    CategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [], // services will come here
  bootstrap: [AppComponent]
})
export class AppModule { }
