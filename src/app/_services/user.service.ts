import { OfflineSeller } from './../_models/offlineSeller.interface';
import { Category } from './../_models/category';
import { appConfig } from './../app.config';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';
import { ResponseContentType } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class UserService {
        apiLink: String = appConfig.apiUrl;
        currentUser: any;
        TokenNo: String = '';
        UserType: Number;
        xcsrf:String;


        constructor(private http: Http) {

        }

        // **^ user Services ^** //
        getCSRF(){
                const csrf = Cookie.getAll();
                this.xcsrf = csrf['x-csrf-token'];
                
        }
        // get different type of user
        getAllUser() {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, UserType: this.UserType };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/UserTypeList', data, options).map((response: Response) => response.json());
        }


        // get list of admin,qe,ce and customer
        getUserList(role_type:number) { 
                this.getCSRF();
                const headers = new Headers({ 'X-CSRF-TOKEN': this.xcsrf });
                const options = new RequestOptions({ headers: headers });
                return this.http.get(this.apiLink + 'api/users?role_type='+role_type, options)
                        .map((response: Response) => response.json());
        }



        // get list of admin,qe,ce and customer
        getConsumerList(offset, limit) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, OffSet: offset, Limit: limit };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/ConsumerList', data, options)
                        .map((response: Response) => response.json());
        }
        // Create User
        createUser(user: User) {
                this.getCSRF();
                const data = JSON.stringify(user);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json','X-CSRF-TOKEN': this.xcsrf });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'api/users', data, options)
                        .map((response: Response) => response.json());
        }
        // Update User
        updateUser(user: any) {
                this.getCSRF();
                const id = user.id;
                delete user['id'];
                if(user.password==null){
                  delete user['password'];
                }
                const data = JSON.stringify(user);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json','X-CSRF-TOKEN': this.xcsrf });
                const options = new RequestOptions({ headers: headers });
                return this.http.put(this.apiLink + 'api/users/'+id, data, options)
                        .map((response: Response) => response.json());
        }
        // Delete user
        deleteUser(id) {
                this.getCSRF();
                const headers = new Headers({ 'Content-Type': 'application/json','X-CSRF-TOKEN': this.xcsrf });
                const options = new RequestOptions({ headers: headers });
                return this.http.delete(this.apiLink + 'api/users/'+id, options)
                        .map((response: Response) => response);
        }

        // **^ category Services ^** //

        // get category form
        getCategoryFormByID(ID: Number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, ID: ID };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/CategoryFormByID', data, options)
                        .map((response: Response) => response.json());
        }
        // get list of main category ,category and sub category
        getCategoryListbyID(ID: Number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, ID: ID };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/CategoryFormByID', data, options)
                        .map((response: Response) => response.json());
        }
        //  get category list after select main category
        getCategoryListbyRefID(RefID: Number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, RefID: RefID };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/CategoryList', data, options)
                        .map((response: Response) => response.json());
        }
        // get list of main category ,category and sub category
        getCategoryList(Level: Number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, Level: Level };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/CategoryLevelList', data, options)
                        .map((response: Response) => response.json());
        }
        // Create category
        createMainCategory(category: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddCategory', data, options).map((response: Response) => response.json());
        }
        // Create category
        createCategory(category: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddCategoryForm', data, options).map((response: Response) => response.json());
        }
        // Create category
        editCategoryForm(category: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/EditCategoryForm', data, options).map((response: Response) => response.json());
        }
        // Update category
        updateCategory(category: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                // console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/EditCategory', data, options).map((response: Response) => response.json());
        }
        // Delete Category
        deleteCategory(category: Category) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
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
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, ID: ID };
                const data = JSON.stringify(body);
                // console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/BrandByID', data, options)
                        .map((response: Response) => response.json());
        }
        // get brand list
        getBrandList() {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/BrandList', data, options)
                        .map((response: Response) => response.json());
        }
        // get brand list
        getBrandList2(offset, limit) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, OffSet: offset, Limit: limit };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                console.log(data);
                return this.http.post(this.apiLink + 'Services/BrandList', data, options)
                        .map((response: Response) => response.json());
        }
        // Create category
        createBrand(brand: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                brand['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(brand);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddBrand', data, options).map((response: Response) => response.json());
        }
        // Update brand
        updateBrand(brand: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                brand['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(brand);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/EditBrand', data, options).map((response: Response) => response.json());
        }
        // Delete brand
        deleteBrand(brand: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
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
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, ID: ID };
                const data = JSON.stringify(body);
                // console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/OnlineSellerByID', data, options)
                        .map((response: Response) => response.json());
        }
        // get online seller list
        getOnlineSellerList() {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/OnlineSellerList', data, options)
                        .map((response: Response) => response.json());
        }
        // Create online seller
        createOnlineSeller(OnlineSeller: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                OnlineSeller['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(OnlineSeller);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddOnlineSeller', data, options).map((response: Response) => response.json());
        }
        // Update online seller
        updateOnlineSeller(OnlineSeller: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                OnlineSeller['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(OnlineSeller);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/EditOnlineSeller', data, options).map((response: Response) => response.json());
        }
        // Delete online seller
        deleteOnlineSeller(OnlineSeller: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
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
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, ID: ID };
                // const data = JSON.stringify(body);
                const data = JSON.stringify(body);
                // console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                console.log(data);
                return this.http.post(this.apiLink + 'Services/OfflineSellerByID', data, options)
                        .map((response: Response) => response.json());
        }
        // get offline seller list
        getOfflineSellerList() {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/OfflineSellerList', data, options)
                        .map((response: Response) => response.json());
        }
        // Create offline seller
        createOfflineSeller(OfflineSeller: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                OfflineSeller['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(OfflineSeller);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddOfflineSeller', data, options).map((response: Response) => response.json());
        }
        // Update offline seller
        updateOfflineSeller(OfflineSeller: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                OfflineSeller['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(OfflineSeller);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/EditOfflineSeller', data, options).map((response: Response) => response.json());
        }
        // Delete offline seller
        deleteOfflineSeller(OfflineSeller: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                OfflineSeller['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(OfflineSeller);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/DeleteOfflineSeller', data, options).map((response: Response) => response.json());
        }
        // **^ Color Services ^** //
        // get list of main category ,category and sub category
        getColorList() {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/ColorList', data, options)
                        .map((response: Response) => response.json());
        }

        // Create category
        createColor(category: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddColor', data, options).map((response: Response) => response.json());
        }
        // Update category
        //     updateColor(category: any) {
        //         category['TokenNo'] = this.TokenNo;
        //         const data = JSON.stringify(category);
        //         // console.log(data);
        //         const headers = new Headers({ 'Content-Type': 'application/json' });
        //         const options = new RequestOptions({ headers: headers });
        //         return this.http.post(this.apiLink + 'Services/EditCategory', data, options).map((response: Response) => response.json());
        //     }
        // Delete Category
        deleteColor(category: Category) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/DeleteColor', data, options).map((response: Response) => response.json());
        }
        // **^ Inclusions Services ^** //

        // get list of inclusions
        getInclusionsList() {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/InclusionsList', data, options)
                        .map((response: Response) => response.json());
        }
        // get list of inclusions by category id
        getInclusionsListbyCategoryID(RefID: number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, RefID: RefID };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/InclusionsListByCategoryID', data, options)
                        .map((response: Response) => response.json());
        }
        // Create category
        createInclusions(category: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log('final', data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddInclusions', data, options).map((response: Response) => response.json());
        }
        // Update category
        updateInclusions(category: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/EditInclusions', data, options).map((response: Response) => response.json());
        }
        // Delete Category
        deleteInclusions(category: Category) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log('final data', data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/DeleteInclusions', data, options).map((response: Response) => response.json());
        }
        // **^ Exclusion Services ^** //

        // get list of main category ,category and sub category
        getExclusionsList() {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/ExclusionsList', data, options)
                        .map((response: Response) => response.json());
        }
        // get list of exclusions by category id
        getExclusionsListbyCategoryID(RefID: number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, RefID: RefID };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/ExclusionsListByCategoryID', data, options)
                        .map((response: Response) => response.json());
        }
        // Create category
        createExclusions(category: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log('final', data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddExclusions', data, options).map((response: Response) => response.json());
        }
        // Update category
        updateExclusions(category: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/EditExclusions', data, options).map((response: Response) => response.json());
        }
        // Delete Category
        deleteExclusions(category: Category) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                category['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(category);
                console.log('final data', data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/DeleteExclusions', data, options).map((response: Response) => response.json());
        }
        // **^ authorized service center Services ^** //
        // get details of authorized service center by id
        getAuthorizedServiceCenterByID(ID: Number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, ID: ID };
                const data = JSON.stringify(body);
                // console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/AuthorizedServiceCenterByID', data, options)
                        .map((response: Response) => response.json());
        }
        // get authorized service center list
        getAuthorizedServiceCenterList(offset, limit) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, OffSet: offset, Limit: limit };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/AuthorizedServiceCenterList', data, options)
                        .map((response: Response) => response.json());
        }
        // Create authorized service center
        createAuthorizedServiceCenter(serviceCenter: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                serviceCenter['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(serviceCenter);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddAuthorizedServiceCenter', data, options)
                        .map((response: Response) => response.json());
        }
        // Update authorized service center
        updateAuthorizedServiceCenter(OnlineSeller: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                OnlineSeller['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(OnlineSeller);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/EditAuthorizedServiceCenter', data, options)
                        .map((response: Response) => response.json());
        }
        // Delete authorized service center
        DeleteAuthorizedServiceCenter(OnlineSeller: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                OnlineSeller['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(OnlineSeller);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/DeleteAuthorizedServiceCenter', data, options)
                        .map((response: Response) => response.json());
        }
        // **^ Bill  Services ^** //
        // get list of new,under-progress and completed list
        // get admin list
        getAdminBillList(BillType: Number, offset, limit) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, Status: BillType, OffSet: offset, Limit: limit };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                console.log(data);
                return this.http.post(this.apiLink + 'Services/AdminConsumerBillsList', data, options)
                        .map((response: Response) => response.json());
        }
        // get CE list
        getCEBillList(BillType: Number, offset, limit) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, Status: BillType, OffSet: offset, Limit: limit };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                console.log(data);
                return this.http.post(this.apiLink + 'Services/CEConsumerBillsList', data, options)
                        .map((response: Response) => response.json());
        }
        // get QE list
        getQEBillList(BillType: Number, offset, limit) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, Status: BillType, OffSet: offset, Limit: limit };
                const data = JSON.stringify(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                // console.log(data);
                return this.http.post(this.apiLink + 'Services/QEConsumerBillsList', data, options)
                        .map((response: Response) => response.json());
        }
        // Assign bills to CE
        assignTaskCE(task: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                task['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(task);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/TaskAssignedCE', data, options)
                        .map((response: Response) => response.json());
        }
        // Assign bills to QE
        assignTaskQE(task: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                task['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(task);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/TaskAssignedQE', data, options)
                        .map((response: Response) => response.json());
        }
        // **^ Bill Form  Services ^** //

        getConsumerBillByID(billID: Number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, ID: billID };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/ConsumerBillByID', data, options)
                        .map((response: Response) => response.json());
        }

        createBill(bill: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                bill['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(bill);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddConsumerBill', data, options)

        }
        editBill(bill: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                bill['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(bill);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/EditConsumerBill', data, options)

        }
        // final bill complete
        completeJob(bill: number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, BID: bill }
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/TaskCompleteCE', data, options)

        }

        getConsumerBillDetailsByID(billID: Number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, ID: billID };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/ConsumerBillDetailByID', data, options)
                        .map((response: Response) => response.json());
        }

        serachProduct(search: string) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                search['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(search);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/ConsumerProductSearch', data, options)
                        .map((response: Response) => response.json());
        }
        addConsumerProduct(data: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                data['TokenNo'] = this.TokenNo;
                const body = JSON.stringify(data);
                console.log(body);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/AddConsumerProduct', body, options)
                        .map((response: Response) => response.json());
        }
        consumerBillProductByID(id: number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, ID: id };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/ConsumerBillProductByID', data, options)
                        .map((response: Response) => response.json());
        }
        // **^ QE  Services ^** //
        taskCompleteQE(billID: Number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, BID: billID };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/TaskCompleteQE', data, options)
                        .map((response: Response) => response.json());
        }
        qeAssignCE(req: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                req['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(req);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/QEAssignedCE', data, options)
                        .map((response: Response) => response.json());
        }

        discardConsumerBill(req: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                req['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(req);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/DiscardConsumerBill', data, options)
                        .map((response: Response) => response.json());
        }
        discardConsumerBillImage(req: any) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                req['TokenNo'] = this.TokenNo;
                const data = JSON.stringify(req);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/DiscardConsumerBillImage', data, options)
                        .map((response: Response) => response.json());

        }
        // get image of consumer
        getConsumerImage(imageID: number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const headers = new Headers({ 'Content-Type': 'image/jpeg', 'Authorization': this.TokenNo });
                const options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob });
                return this.http.get(this.apiLink + 'bill-copies/' + imageID + '/files', options)
                        .map(res => {
                                return res.blob();
                        })

        }
        deleteCategoryForm(formID: number) {
                // get login user credentials from localstorage
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.TokenNo = this.currentUser.token;
                this.UserType = this.currentUser.UserType;
                const body = { TokenNo: this.TokenNo, FormID: formID, DeleteAll: true };
                const data = JSON.stringify(body);
                console.log(data);
                const headers = new Headers({ 'Content-Type': 'application/json' });
                const options = new RequestOptions({ headers: headers });
                return this.http.post(this.apiLink + 'Services/DeleteCategoryForm', data, options)
                        .map((response: Response) => response.json());
        }
}
