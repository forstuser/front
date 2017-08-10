import { OfflineSeller } from './../_models/offlineSeller.interface';
import { Category } from './../_models/category';
import { appConfig } from './../app.config';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {
    apiLink: String = appConfig.apiUrl;
    currentUser: any;
    TokenNo: String;
    UserType: Number;
    constructor(private http: Http) {
    // get login user credentials from localstorage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.TokenNo = this.currentUser.token;
    this.UserType = this.currentUser.UserType;
}
                                // **^ user Services ^** //

    // get different type of user
    getAllUser() {
        const body = { TokenNo : this.TokenNo, UserType: this.UserType };
        const data = JSON.stringify(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post( this.apiLink + 'Services/UserTypeList', data, options).map((response: Response) => response.json());
    }
    // get list of admin,qe,ce and customer
    getUserList(UserType: String) {
        const body = { TokenNo : this.TokenNo, UserType: UserType };
        const data = JSON.stringify(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post( this.apiLink + 'Services/ManagementUserList', data, options)
        .map((response: Response) => response.json());
    }

    // Create User
    createUser(user: User) {
        user['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(user);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post( this.apiLink + 'Services/AddManagementUser', data, options )
                .map((response: Response) => response.json());
    }
    // Update User
    updateUser(user: any) {
        user['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(user);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/EditManagementUser', data, options).map((response: Response) => response.json());
    }
    // Delete user
    deleteUser(user: User) {
        user['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(user);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/DeleteManagementUser', data, options).map((response: Response) => response.json());
    }

                                // **^ category Services ^** //

    // get list of main category ,category and sub category
    getCategoryListbyID(RefID: Number) {
        const body = { TokenNo : this.TokenNo, RefID: RefID };
        const data = JSON.stringify(body);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post( this.apiLink + 'Services/CategoryList', data, options)
        .map((response: Response) => response.json());
    }
    // get list of main category ,category and sub category
    getCategoryList(Level: Number) {
        const body = { TokenNo : this.TokenNo, Level: Level };
        const data = JSON.stringify(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post( this.apiLink + 'Services/CategoryLevelList', data, options)
        .map((response: Response) => response.json());
    }
   // Create category
    createCategory(category: any) {
        category['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(category);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/AddCategory', data, options).map((response: Response) => response.json());
    }
   // Update category
    updateCategory(category: any) {
        category['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(category);
        // console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/EditCategory', data, options).map((response: Response) => response.json());
    }
   // Delete Category
    deleteCategory(category: Category) {
        category['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(category);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/DeleteCategory', data, options).map((response: Response) => response.json());
    }

                                // **^ brand Services ^** //
   // get details of brand by id
    getBrandDetailsbyID(ID: Number) {
        const body = { TokenNo : this.TokenNo, ID: ID };
        const data = JSON.stringify(body);
        // console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post( this.apiLink + 'Services/BrandByID', data, options)
        .map((response: Response) => response.json());
    }
   // get brand list
    getBrandList() {
        const body = { TokenNo : this.TokenNo };
        const data = JSON.stringify(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post( this.apiLink + 'Services/BrandList', data, options)
        .map((response: Response) => response.json());
    }
   // Create category
    createBrand(brand: any) {
        brand['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(brand);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/AddBrand', data, options).map((response: Response) => response.json());
    }
   // Update brand
    updateBrand(brand: any) {
        brand['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(brand);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/EditBrand', data, options).map((response: Response) => response.json());
    }
   // Delete brand
    deleteBrand(brand: any) {
        brand['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(brand);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/DeleteBrand', data, options).map((response: Response) => response.json());
    }
                                // **^ online seller Services ^** //
   // get details of online seller by id
    getOnlineSellerDetailsbyID(ID: Number) {
        const body = { TokenNo : this.TokenNo, ID: ID };
        const data = JSON.stringify(body);
        // console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post( this.apiLink + 'Services/OnlineSellerByID', data, options)
        .map((response: Response) => response.json());
    }
   // get online seller list
    getOnlineSellerList() {
        const body = { TokenNo : this.TokenNo };
        const data = JSON.stringify(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post( this.apiLink + 'Services/OnlineSellerList', data, options)
        .map((response: Response) => response.json());
    }
   // Create online seller
    createOnlineSeller(OnlineSeller: any) {
        OnlineSeller['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(OnlineSeller);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/AddOnlineSeller', data, options).map((response: Response) => response.json());
    }
   // Update online seller
    updateOnlineSeller(OnlineSeller: any) {
        OnlineSeller['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(OnlineSeller);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/EditOnlineSeller', data, options).map((response: Response) => response.json());
    }
   // Delete online seller
    deleteOnlineSeller(OnlineSeller: any) {
        OnlineSeller['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(OnlineSeller);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/DeleteOnlineSeller', data, options).map((response: Response) => response.json());
    }
                                        // **^ offline seller Services ^** //

   // get details of offline seller by id
    getOfflineSellerDetailsbyID(ID: Number) {
        const body = { TokenNo : this.TokenNo, ID: ID };
        // const data = JSON.stringify(body);
        const data = JSON.stringify(body || null );
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        console.log(data);
        return this.http.post( this.apiLink + 'Services/OfflineSellerByID', data, options)
        .map((response: Response) => response.json());
    }
   // get offline seller list
    getOfflineSellerList() {
        const body = { TokenNo : this.TokenNo };
        const data = JSON.stringify(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post( this.apiLink + 'Services/OfflineSellerList', data, options)
        .map((response: Response) => response.json());
    }
   // Create offline seller
    createOfflineSeller(OfflineSeller: any) {
        OfflineSeller['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(OfflineSeller);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/AddOfflineSeller', data, options).map((response: Response) => response.json());
    }
   // Update offline seller
    updateOfflineSeller(OfflineSeller: any) {
        OfflineSeller['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(OfflineSeller);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/EditOfflineSeller', data, options).map((response: Response) => response.json());
    }
   // Delete offline seller
    deleteOfflineSeller(OfflineSeller: any) {
        OfflineSeller['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(OfflineSeller);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiLink + 'Services/DeleteOfflineSeller', data, options).map((response: Response) => response.json());
    }
}
