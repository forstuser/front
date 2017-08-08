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
}
