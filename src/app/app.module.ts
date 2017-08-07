import { UserService } from './_services/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { LeftPanelItemsComponent } from './dashboard/left-panel/left-panel-items/left-panel-items.component';
import { HomeComponent } from './dashboard/data-panel/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CustomerComponent } from './dashboard/data-panel/user-management/customer/customer.component';
import { CeComponent } from './dashboard/data-panel/user-management/ce/ce.component';
import { QeComponent } from './dashboard/data-panel/user-management/qe/qe.component';
import { AddUserComponent } from './dashboard/data-panel/user-management/add-user/add-user.component';
import { AdminComponent } from './dashboard/data-panel/user-management/admin/admin.component';
import { DialogComponent } from './_directives/dialog/dialog.component';
import { CategoryComponent } from './dashboard/data-panel/category/category/category.component';
import { MainCategoryComponent } from './dashboard/data-panel/category/main-category/main-category.component';
import { SubCategoryComponent } from './dashboard/data-panel/category/sub-category/sub-category.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    HeaderComponent,
    LeftPanelComponent,
    DataPanelComponent,
    HomeComponent,
    LeftPanelItemsComponent,
    CustomerComponent,
    CeComponent,
    QeComponent,
    AddUserComponent,
    AdminComponent,
    DialogComponent,
    CategoryComponent,
    MainCategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthGuard, UserService], // services will come here
  bootstrap: [AppComponent]
})
export class AppModule {  }
