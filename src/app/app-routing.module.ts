import { TestComponent } from './dashboard/data-panel/job-management/bill/test/test.component';
import { ReviewComponent } from './dashboard/data-panel/job-management/bill/review/review.component';
import { BillViewComponent } from './dashboard/data-panel/job-management/bill/bill-view/bill-view.component';
import { RepairFormComponent } from './dashboard/data-panel/job-management/bill/repair-form/repair-form.component';
import { AmcFormComponent } from './dashboard/data-panel/job-management/bill/amc-form/amc-form.component';
import { InsuranceFormComponent } from './dashboard/data-panel/job-management/bill/insurance-form/insurance-form.component';
import { WarrantyFormComponent } from './dashboard/data-panel/job-management/bill/warranty-form/warranty-form.component';
import { ProductFormComponent } from './dashboard/data-panel/job-management/bill/product-form/product-form.component';
import { ProductInfoComponent } from './dashboard/data-panel/job-management/bill/product-info/product-info.component';
import { SellerInfoComponent } from './dashboard/data-panel/job-management/bill/seller-info/seller-info.component';
import { GeneralInfoComponent } from './dashboard/data-panel/job-management/bill/general-info/general-info.component';
import { BillInfoComponent } from './dashboard/data-panel/job-management/bill/bill-info/bill-info.component';
import { BillComponent } from './dashboard/data-panel/job-management/bill/bill.component';
import { CompletedComponent } from './dashboard/data-panel/job-management/completed/completed.component';
import { UnderProgressComponent } from './dashboard/data-panel/job-management/under-progress/under-progress.component';
import { NewComponent } from './dashboard/data-panel/job-management/new/new.component';
import {
    ServiceCenterListComponent
} from './dashboard/data-panel/service-center-management/service-center-list/service-center-list.component';
import {
    AddServiceCenterComponent
} from './dashboard/data-panel/service-center-management/add-service-center/add-service-center.component';
import { InclusionsComponent } from './dashboard/data-panel/list-management/inclusions/inclusions.component';
import { ExclusionsComponent } from './dashboard/data-panel/list-management/exclusions/exclusions.component';
import { ColorComponent } from './dashboard/data-panel/color/color.component';
import { OnlineSellerListComponent } from './dashboard/data-panel/seller-management/online-seller-list/online-seller-list.component';
import { AddOnlineSellerComponent } from './dashboard/data-panel/seller-management/add-online-seller/add-online-seller.component';
import { OfflineSellerListComponent } from './dashboard/data-panel/seller-management/offline-seller-list/offline-seller-list.component';
import { AddOfflineSellerComponent } from './dashboard/data-panel/seller-management/add-offline-seller/add-offline-seller.component';
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
    { path: '', component: SignInComponent, pathMatch: 'full' },
    { path: 'login', component: SignInComponent, pathMatch: 'full' },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children:
            [{ path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
            { path: 'home', component: HomeComponent },
            { path: 'new', component: NewComponent },
            { path: 'new/bill/:id', component: BillComponent, children:[
                { path:'', component:TestComponent},
                { path:'bv', component:BillViewComponent},
                { path:'g', component:GeneralInfoComponent},
                { path:'g/s', component:SellerInfoComponent},
                { path:'g/s/p', component:ProductInfoComponent},
                { path:'g/s/p/pf', component:ProductFormComponent},
                { path:'g/s/p/pf/review', component:ReviewComponent},
                { path:'g/s/p/pf/i', component:InsuranceFormComponent},
                { path:'g/s/p/pf/w', component:WarrantyFormComponent},
                { path:'g/s/p/pf/a', component:AmcFormComponent},
                { path:'g/s/p/pf/a', component:RepairFormComponent}
            ] },
            { path: 'underProgress', component: UnderProgressComponent },
            { path: 'completed', component: CompletedComponent },
            { path: 'AddUser', component: AddUserComponent },
            { path: 'admin', component: AdminComponent },
            { path: 'customer', component: CustomerComponent },
            { path: 'ce', component: CeComponent },
            { path: 'qe', component: QeComponent },
            { path: 'mainCategory', component: MainCategoryComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'subCategory', component: SubCategoryComponent },
            { path: 'addBrand', component: AddBrandComponent },
            { path: 'brandList', component: BrandListComponent },
            { path: 'addOffline', component: AddOfflineSellerComponent },
            { path: 'offlineList', component: OfflineSellerListComponent },
            { path: 'addOnline', component: AddOnlineSellerComponent },
            { path: 'onlineList', component: OnlineSellerListComponent },
            { path: 'color', component: ColorComponent },
            { path: 'exclusions', component: ExclusionsComponent },
            { path: 'inclusions', component: InclusionsComponent },
            { path: 'addServiceCenter', component: AddServiceCenterComponent },
            { path: 'serviceCenterList', component: ServiceCenterListComponent }
            ]
    }
    // otherwise redirect to home
    // { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
