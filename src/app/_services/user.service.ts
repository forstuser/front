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
        xcsrf: String;
        options: any;

        constructor(private http: Http) {

        }

        // *********************************** USER SERVICES ******************************************//

        // get all token
        getCSRF() {
                const csrf = Cookie.getAll();
                this.xcsrf = csrf['x-csrf-token'];
                const headers = new Headers({ 'X-CSRF-TOKEN': this.xcsrf, 'Content-Type': 'application/json' });
                this.options = new RequestOptions({ headers: headers });

        }
        // User API
        // get list of admin,qe,ce and customer
        getUserList(role_type: number) {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/users?role_type=' + role_type, this.options)
                        .map((response: Response) => response.json());
        }
        // Create User
        createUser(user: User) {
                this.getCSRF();
                const data = JSON.stringify(user);
                console.log(data);
                return this.http.post(this.apiLink + 'api/users', data, this.options)
                        .map((response: Response) => response.json());
        }
        // Delete user
        deleteUser(id) {
                this.getCSRF();
                return this.http.delete(this.apiLink + 'api/users/' + id, this.options)
                        .map((response: Response) => response);
        }
        // Update User
        updateUser(user: any) {
                this.getCSRF();
                const id = user.id;
                delete user['id'];
                if (user.password == null) {
                        delete user['password'];
                }
                const data = JSON.stringify(user);
                console.log(data);
                return this.http.put(this.apiLink + 'api/users/' + id, data, this.options)
                        .map((response: Response) => response.json());
        }
        // Category
        // get list of main category ,category and sub category

        // for main category category_level =1 , category_level = 2
        getCategoryList(Level: Number) {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/categories?category_level=' + Level, this.options)
                        .map((response: Response) => response.json());
        }
        // get category list by category id
        getSubCategoryList(catID: number) {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/categories/' + catID, this.options)
                        .map((response: Response) => response.json());
        }
        // Create Main category
        createMainCategory(category: any) {
                this.getCSRF();
                const data = JSON.stringify(category);
                console.log(data);
                return this.http.post(this.apiLink + 'api/categories', data, this.options).map((response: Response) => response.json());
        }
        // Create category
        createCategory(category: any) {
                this.getCSRF();
                const id = category.category_id;
                delete category['category_id'];
                const data = JSON.stringify(category);
                console.log(data);
                return this.http.post(this.apiLink + 'api/categories/'+id+'/forms', data, this.options).map((response: Response) => response.json());
        }
        // Update Main category
        updateCategory(category: any) {
                const id = category.category_id;
                this.getCSRF();
                delete category['category_id'];
                delete category['ref_id'];
                const data = JSON.stringify(category);
                return this.http.put(this.apiLink + 'api/categories/' + id, data, this.options).map((response: Response) => response.json());
        }
        // Delete Category
        deleteCategory(id) {
                this.getCSRF();
                return this.http.delete(this.apiLink + 'api/categories/' + id, this.options).map((response: Response) => response);
        }
        //Create colors
        createColor(category: any) {
                this.getCSRF();
                const data = JSON.stringify(category);
                console.log(data);
                return this.http.post(this.apiLink + 'api/colours', data, this.options).map((response: Response) => response.json());
        }
        //Get colors
        getColorList() {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/colours', this.options)
                        .map((response: Response) => response.json());
        }


        // Update Color
        updateColor(category: any) {
                console.log(category, "colorId")
                const id = category.colour_id;
                this.getCSRF();
                delete category['colour_id'];
                const data = JSON.stringify(category);
                console.log(data);
                        return this.http.put(this.apiLink + 'api/colours/' + id, data, this.options)
                        .map((response: Response) => response.json());
            }


        // Delete Color
        deleteColor(category: any) {
                const id = category.colour_id;
                this.getCSRF();
                return this.http.delete(this.apiLink + 'api/colours/' + id, this.options).map((response: Response) => response.json());
        }


         // Create detail
         createDetail(category: any) {
                // get login user credentials from localstorage
                this.getCSRF();                      
                const data = JSON.stringify(category);
                console.log('final', data);
                return this.http.post(this.apiLink + 'api/detailtypes', data, this.options).map((response: Response) => response.json());
        }

        //get details
        getDetailList() {
                // get login user credentials from localstorage
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/detailtypes',this.options)
                        .map((response: Response) => response.json());
        }

        // Update details
        updateDetail(category: any) {
                const id=category.id;
                console.log(category,"updetail")
                this.getCSRF();
                delete category['type']
                delete category['id']
                const data = JSON.stringify(category);
                console.log(data);
                return this.http.put(this.apiLink + 'api/detailtypes/'+id, data, this.options).map((response: Response) => response.json());
        }

        // Delete detail
        deleteDetail(category:any) {
                const id=category.id;
                this.getCSRF();                      
                return this.http.delete(this.apiLink + 'api/detailtypes/'+id,this.options).map((response: Response) => response.json());
        }

        // Online Seller
        // get online seller list
        getOnlineSellerList() {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/onlineSeller', this.options)
                        .map((response: Response) => response.json());
        }
        // Create online seller
        createOnlineSeller(OnlineSeller: any) {
                this.getCSRF();
                const data = JSON.stringify(OnlineSeller);
                console.log(data);
                return this.http.post(this.apiLink + 'api/onlineSeller', data, this.options).map((response: Response) => response.json());
        }
        // Delete online seller
        deleteOnlineSeller(sellerId: number) {
                this.getCSRF();
                return this.http.delete(this.apiLink + 'api/onlineSeller/' + sellerId, this.options).map((response: Response) => response.json());
        }
        // Update online seller
        updateOnlineSeller(OnlineSeller: any) {
                const sid = OnlineSeller.sid;
                this.getCSRF();
                delete OnlineSeller['sid'];
                const data = JSON.stringify(OnlineSeller);
                console.log(data);
                return this.http.put(this.apiLink + 'api/onlineSeller/'+sid, data, this.options).map((response: Response) => response.json());
        }
        // offline seller
        // get offline seller list
        getOfflineSellerList() {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/offlineSeller', this.options)
                        .map((response: Response) => response.json());
        }
        // Create offline seller
        createOfflineSeller(OfflineSeller: any) {
                this.getCSRF();
                const data = JSON.stringify(OfflineSeller);
                console.log(data);
                return this.http.post(this.apiLink + 'api/offlineSeller', data, this.options).map((response: Response) => response.json());
        }
        // Update offline seller
        updateOfflineSeller(OfflineSeller: any) {
                const sid = OfflineSeller.sid;
                this.getCSRF();
                delete OfflineSeller['sid'];
                const data = JSON.stringify(OfflineSeller);
                console.log(data);
                return this.http.put(this.apiLink + 'api/offlineSeller/'+sid, data, this.options).map((response: Response) => response.json());
        }
        // Delete offline seller
        deleteOfflineSeller(sellerId: number) {
                this.getCSRF();
                return this.http.delete(this.apiLink + 'api/offlineSeller/' + sellerId, this.options).map((response: Response) => response);                
        }
        // Brand
        // get brand list
        getBrandList() {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/brands', this.options)
                        .map((response: Response) => response.json());
        }
        // Create Brand
        createBrand(brand: any) {
                this.getCSRF();
                const data = JSON.stringify(brand);
                console.log(data);
                return this.http.post(this.apiLink + 'api/brands', data, this.options).map((response: Response) => response.json());
        }
        // Delete brand
        deleteBrand(brandId: any) {
                this.getCSRF();
                return this.http.delete(this.apiLink + 'api/brands/' + brandId, this.options).map((response: Response) => response);                
        }
        // get details of brand by id
        getBrandDetailsbyID(ID: Number) {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/brands/'+ID, this.options)
                        .map((response: Response) => response.json());
        }
        // ASC
        // get authorized service center list
        getAuthorizedServiceCenterList() {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/servicecenters', this.options)
                        .map((response: Response) => response.json());
        }
        // Create authorized service center
        createAuthorizedServiceCenter(asc: any) {
                this.getCSRF();
                const data = JSON.stringify(asc);
                console.log(data);
                return this.http.post(this.apiLink + 'api/servicecenters', data, this.options).map((response: Response) => response.json());
        }
        // Delete authorized service center
        DeleteAuthorizedServiceCenter(center_id: any) {
                this.getCSRF();
                return this.http.delete(this.apiLink + 'api/servicecenters/' + center_id, this.options).map((response: Response) => response); 
        }
//*******************************OLD API ***************************************************/

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
