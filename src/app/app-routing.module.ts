import { BillsComponent } from './dashboard/data-panel/job-management/bills/bills.component';
import { DiscardedComponent } from './dashboard/data-panel/job-management/discarded/discarded.component';
import { ProductAddonsComponent } from './dashboard/data-panel/job-management/bill/product-addons/product-addons.component';
import { BillEditComponent } from './dashboard/data-panel/job-management/bill/bill-edit/bill-edit.component';
import { BillCreateComponent } from './dashboard/data-panel/job-management/bill/bill-create/bill-create.component';
import { BillViewComponent } from './dashboard/data-panel/job-management/bill/bill-view/bill-view.component';
import { BillComponent } from './dashboard/data-panel/job-management/bill/bill.component';
import { CompletedComponent } from './dashboard/data-panel/job-management/completed/completed.component';
import { UnderProgressComponent } from './dashboard/data-panel/job-management/under-progress/under-progress.component';
import { NewComponent } from './dashboard/data-panel/job-management/new/new.component';
import { ServiceCenterListComponent} from './dashboard/data-panel/service-center-management/service-center-list/service-center-list.component';
import { AddServiceCenterComponent } from './dashboard/data-panel/service-center-management/add-service-center/add-service-center.component';
import { ListManagementComponent } from './dashboard/data-panel/list-management/list-management.component';
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
import { ColorComponent } from './dashboard/data-panel/color/color.component';
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
            // { path: 'new/bills/:id', component: BillsComponent },
            { path: 'new/bill/:id', component: BillComponent, children:[
                { path:'', component:BillCreateComponent},
                { path:'view', component:BillViewComponent},
                { path:'edit/:id', component:BillEditComponent},
                { path:'addons/:uid/:bid/:pid', component:ProductAddonsComponent},
            ] },
            { path: 'underProgress', component: UnderProgressComponent },
            { path: 'completed', component: CompletedComponent },
            { path: 'discarded', component: DiscardedComponent },
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
            { path: 'addServiceCenter', component: AddServiceCenterComponent },
            { path: 'serviceCenterList', component: ServiceCenterListComponent },
            { path: 'list-details',component:ListManagementComponent}
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
