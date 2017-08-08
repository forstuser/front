import { BrandListComponent } from './dashboard/data-panel/brand/brand-list/brand-list.component';
import { AddBrandComponent } from './dashboard/data-panel/brand/add-brand/add-brand.component';
import { SubCategoryComponent } from './dashboard/data-panel/category/sub-category/sub-category.component';
import { CategoryComponent } from './dashboard/data-panel/category/category/category.component';
import { MainCategoryComponent } from './dashboard/data-panel/category/main-category/main-category.component';
import { AdminComponent } from './dashboard/data-panel/user-management/admin/admin.component';
import { AddUserComponent } from './dashboard/data-panel/user-management/add-user/add-user.component';
import { QeComponent } from './dashboard/data-panel/user-management/qe/qe.component';
import { CeComponent } from './dashboard/data-panel/user-management/ce/ce.component';
import { CustomerComponent } from './dashboard/data-panel/user-management/customer/customer.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './dashboard/data-panel/home/home.component';
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
            { path: 'home', component: HomeComponent},
            { path: 'AddUser', component: AddUserComponent},
            { path: 'admin', component: AdminComponent},
            { path: 'customer', component: CustomerComponent},
            { path: 'ce', component: CeComponent},
            { path: 'qe', component: QeComponent},
            { path: 'mainCategory', component: MainCategoryComponent},
            { path: 'category', component: CategoryComponent},
            { path: 'subCategory', component: SubCategoryComponent},
            { path: 'addBrand', component: AddBrandComponent},
            { path: 'brandList', component: BrandListComponent}
        ]
    },
    // otherwise redirect to home
    // { path: '**', redirectTo: 'login' }
];

@NgModule({
imports: [ RouterModule.forRoot( appRoutes )],
exports: [ RouterModule]
})
export class AppRoutingModule  {

}
