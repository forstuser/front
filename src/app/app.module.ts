import { DataService } from './_services/data.service';
import { BillComponent } from './dashboard/data-panel/job-management/bill/bill.component';
import {
  ServiceCenterListComponent } from './dashboard/data-panel/service-center-management/service-center-list/service-center-list.component';
import {
   AddServiceCenterComponent } from './dashboard/data-panel/service-center-management/add-service-center/add-service-center.component';
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
import { AddBrandComponent } from './dashboard/data-panel/brand/add-brand/add-brand.component';
import { BrandListComponent } from './dashboard/data-panel/brand/brand-list/brand-list.component';
import { AddOfflineSellerComponent } from './dashboard/data-panel/seller-management/add-offline-seller/add-offline-seller.component';
import { AddOnlineSellerComponent } from './dashboard/data-panel/seller-management/add-online-seller/add-online-seller.component';
import { OnlineSellerListComponent } from './dashboard/data-panel/seller-management/online-seller-list/online-seller-list.component';
import { OfflineSellerListComponent } from './dashboard/data-panel/seller-management/offline-seller-list/offline-seller-list.component';
import { ColorComponent } from './dashboard/data-panel/color/color.component';
import { ExclusionsComponent } from './dashboard/data-panel/list-management/exclusions/exclusions.component';
import { InclusionsComponent } from './dashboard/data-panel/list-management/inclusions/inclusions.component';
import { NewComponent } from './dashboard/data-panel/job-management/new/new.component';
import { CompletedComponent } from './dashboard/data-panel/job-management/completed/completed.component';
import { UnderProgressComponent } from './dashboard/data-panel/job-management/under-progress/under-progress.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { BillViewComponent } from './dashboard/data-panel/job-management/bill/bill-view/bill-view.component';
import { TestComponent } from './dashboard/data-panel/job-management/bill/test/test.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

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
    SubCategoryComponent,
    AddBrandComponent,
    BrandListComponent,
    AddOfflineSellerComponent,
    AddOnlineSellerComponent,
    OnlineSellerListComponent,
    OfflineSellerListComponent,
    ColorComponent,
    ExclusionsComponent,
    InclusionsComponent,
    AddServiceCenterComponent,
    ServiceCenterListComponent,
    NewComponent,
    CompletedComponent,
    UnderProgressComponent,
    BillComponent,
    BillViewComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    HttpModule,
    AppRoutingModule,
    SwiperModule,
    MultiselectDropdownModule
  ],
  providers: [AuthenticationService, AuthGuard, UserService,DataService], // services will come here
  bootstrap: [AppComponent]
})
export class AppModule {  }
