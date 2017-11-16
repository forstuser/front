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
        
        // Create category form
        createCategoryForm(category: any) {
                console.log(category,"bhia cat")
                this.getCSRF();
                const id = category.category_id;
                delete category['category_id'];
                const data = JSON.stringify(category);
                console.log(data);
                return this.http.post(this.apiLink + 'api/categories/', data, this.options).map((response: Response) => response.json());
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
                return this.http.get(this.apiLink + 'api/colours?status=1', this.options)
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
        
        // Update brand
        updateBrand(dataa: any,arr) {
                // console.log
                const id = dataa.brand_id;
                for (let i=0;i<arr.length;i++){
                        if(arr[i].id==""){
                                arr[i].id=undefined;
                        }       
                }
                this.getCSRF();
                delete dataa['brand_id'];
                const data = JSON.stringify(dataa);
                console.log(data);
                return this.http.put(this.apiLink + 'api/brands/'+id, data, this.options).map((response: Response) => response.json());
        }
        //remove brand details
        removeBrandDetails(asc,center){
                console.log(asc.id)
                // const center_id=center.id;
                const id=asc.id
                this.getCSRF();
                return this.http.delete(this.apiLink + 'api/brands/'+center+'/details/'+id, this.options)
                .map((response: Response) => response.json());
        }
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
        // get details of authorized service center by id
        getAuthorizedServiceCenterByID(ID: Number) {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/servicecenters/'+ID, this.options)
                        .map((response: Response) => response.json());
        }
        // Update authorized service center
        updateAuthorizedServiceCenter(asc: any,arr) {
                console.log(asc,arr,"seller online")
                const id=asc.center_id
                for (let i=0;i<arr.length;i++){
                        if(arr[i].id==""){
                                arr[i].id=undefined;
                        }       
                }
                this.getCSRF();
                delete asc['center_id']
                const data = JSON.stringify(asc);
                console.log(data);
                return this.http.put(this.apiLink + 'api/servicecenters/'+id, data, this.options)
                        .map((response: Response) => response.json());
        }
        //remove asc details
        removeAscDetails(asc,center){
                console.log(asc.id)
                const center_id=center.id;
                const id=asc.id
                this.getCSRF();
                return this.http.delete(this.apiLink + 'api/servicecenters/'+center_id+'/details/'+id, this.options)
                .map((response: Response) => response.json());
        }

                // get list of new,under-progress and completed list
        // get admin list
        getAdminJobList(BillType: Number) {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/jobs?admin_status='+BillType, this.options)
                        .map((response: Response) => response.json());
        }
        // get CE JOB list
        getCEJobList(BillType: Number) {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/jobs?ce_status='+BillType+'&isCE=true', this.options)
                        .map((response: Response) => response.json());
        }
        // get CE JOB list
        getQEJobList(BillType: Number) {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/jobs?qe_status='+BillType+'&isQE=true', this.options)
                        .map((response: Response) => response.json());
        }
        // discard job
        discardConsumerJOB(req: any) {
                this.getCSRF();
                const jobID = req['id'];
                delete req['id'];
                return this.http.put(this.apiLink + 'api/jobs/'+jobID+'/discard',req, this.options)
                        .map((response: Response) => response.json());
        }
        // Assign job to CE
        assignJobCE(task: any) {
                console.log(task,"task")
                this.getCSRF();
                const jobID = task['BID'];
                const ceID = task['UID'];
                delete task['BID'];
                delete task['UID'];
                const data = JSON.stringify(task);
                console.log(data);
                return this.http.put(this.apiLink + 'api/jobs/'+jobID+'/ce/'+ceID, data, this.options)
                        .map((response: Response) => response.json());
        }
        // Assign job to QE
        assignJobQE(task: any) {
                console.log(task,"task")
                this.getCSRF();
                const jobID = task['jobId'];
                const qeID = task['UID'];
                delete task['BID'];
                delete task['UID'];
                const data = JSON.stringify(task);
                console.log(data);
                return this.http.put(this.apiLink + 'api/jobs/'+jobID+'/qe/'+qeID, data, this.options)
                        .map((response: Response) => response.json());
        }
        getJobByID(billID: Number) {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/jobs/'+billID, this.options)
                        .map((response: Response) => response.json());
        }
        createBill(bill: any) {
                console.log(bill);
                Object.keys(bill).forEach((key) => (bill[key] == '') && delete bill[key]);
                this.getCSRF();
                const data = JSON.stringify(bill);
                console.log(data);
                return this.http.post(this.apiLink + 'api/bills', data, this.options)
                        .map((response: Response) => response.json());
        }
        verifyBill(bill_id){
                this.getCSRF();
                const data = {'status_type':5}
                return this.http.put(this.apiLink + 'api/bills/'+bill_id, data, this.options)
                .map((response: Response) => response.json());
        }
        createProduct(prod: any) {
                this.getCSRF();
                const billId = prod.billId;
                delete prod['billId'];
                Object.keys(prod).forEach((key) => (prod[key] == '') && delete prod[key]);
                const data = JSON.stringify(prod);
                console.log(data);
                return this.http.post(this.apiLink + 'api/bills/'+billId+'/products', data, this.options)
                        .map((response: Response) => response.json());
        }
        verifyProduct(bill_id,product_id){
                this.getCSRF();
                const data = {'status_type':5}
                return this.http.put(this.apiLink + 'api/bills/'+bill_id+'/products/'+product_id, data, this.options)
                .map((response: Response) => response.json());
        }
        productMetaData(billId,prodId){
                this.getCSRF();
                console.log(billId,prodId);
                return this.http.get(this.apiLink + 'api/bills/'+billId+'/products/'+prodId, this.options)
                .map((response: Response) => response.json());
        }
        createWarranty(war: any) {
                this.getCSRF();
                const product_id = war.product_id;
                delete war['product_id'];
                Object.keys(war).forEach((key) => (war[key] == '') && delete war[key]);
                const data = JSON.stringify(war);
                console.log(data);
                return this.http.post(this.apiLink + 'api/products/'+product_id+'/warranties', data, this.options)
                        .map((response: Response) => response.json());
        }
        updateWarranty(war: any) {
                this.getCSRF();
                const warId = war['warrantyId'];
                const product_id = war.product_id;
                delete war['product_id'];
                delete war['warrantyId'];
                Object.keys(war).forEach((key) => (war[key] == '') && delete war[key]);                
                const data = JSON.stringify(war);
                console.log(data);
                return this.http.put(this.apiLink + 'api/products/'+product_id+'/warranties/'+warId, data, this.options)
                        .map((response: Response) => response.json());
        }
        verifyWarranty(product_id,warId){
                this.getCSRF();
                const data = {'status_type':5}
                return this.http.put(this.apiLink + 'api/products/'+product_id+'/warranties/'+warId, data, this.options)
                .map((response: Response) => response.json());
        }
        updateInsurance(ins: any) {
                this.getCSRF();
                const insId = ins['insuranceId'];
                const product_id = ins.product_id;
                delete ins['product_id'];
                delete ins['insuranceId'];
                Object.keys(ins).forEach((key) => (ins[key] == '') && delete ins[key]);                
                const data = JSON.stringify(ins);
                console.log(data);
                return this.http.put(this.apiLink + 'api/products/'+product_id+'/insurances/'+insId, data, this.options)
                        .map((response: Response) => response.json());
        }
        verifyInsurance(product_id,insId){
                this.getCSRF();
                const data = {'status_type':5}
                return this.http.put(this.apiLink + 'api/products/'+product_id+'/insurances/'+insId, data, this.options)
                .map((response: Response) => response.json());
        }
        createInsurance(ins: any) {
                this.getCSRF();
                const product_id = ins.product_id;
                delete ins['product_id'];
                Object.keys(ins).forEach((key) => (ins[key] == '') && delete ins[key]);  
                const data = JSON.stringify(ins);
                console.log(data);
                return this.http.post(this.apiLink + 'api/products/'+product_id+'/insurances', data, this.options)
                        .map((response: Response) => response.json());
        }
        createAmc(amc: any) {
                this.getCSRF();
                const product_id = amc.product_id;
                delete amc['product_id'];
                Object.keys(amc).forEach((key) => (amc[key] == '') && delete amc[key]);  
                const data = JSON.stringify(amc);
                console.log(data);
                return this.http.post(this.apiLink + 'api/products/'+product_id+'/amcs', data, this.options)
                        .map((response: Response) => response.json());
        }
        updateAmc(amc: any) {
                this.getCSRF();
                const amcId = amc['amcId'];
                const product_id = amc.product_id;
                delete amc['product_id'];
                delete amc['amcId'];
                Object.keys(amc).forEach((key) => (amc[key] == '') && delete amc[key]);                  
                const data = JSON.stringify(amc);
                console.log(data);
                return this.http.put(this.apiLink + 'api/products/'+product_id+'/amcs/'+amcId, data, this.options)
                        .map((response: Response) => response.json());
        }
        verifyAmc(product_id,amcId){
                this.getCSRF();
                const data = {'status_type':5}
                return this.http.put(this.apiLink + 'api/products/'+product_id+'/amcs/'+amcId, data, this.options)
                .map((response: Response) => response.json());
        }
        createRepair(rep: any) {
                this.getCSRF();
                const product_id = rep.product_id;
                delete rep['product_id'];
                Object.keys(rep).forEach((key) => (rep[key] == '') && delete rep[key]);                                  
                const data = JSON.stringify(rep);
                console.log(data);
                return this.http.post(this.apiLink + 'api/products/'+product_id+'/repairs', data, this.options)
                        .map((response: Response) => response.json());
        }
        updateRepair(rep: any) {
                this.getCSRF();
                const repairId = rep['repairId'];
                const product_id = rep.product_id;
                delete rep['product_id'];
                delete rep['repairId'];
                Object.keys(rep).forEach((key) => (rep[key] == '') && delete rep[key]);                                                  
                const data = JSON.stringify(rep);
                console.log(data);
                return this.http.put(this.apiLink + 'api/products/'+product_id+'/repairs/'+repairId, data, this.options)
                        .map((response: Response) => response.json());
        }
        verifyRepair(product_id,repairId){
                this.getCSRF();
                const data = {'status_type':5}
                return this.http.put(this.apiLink + 'api/products/'+product_id+'/repairs/'+repairId, data, this.options)
                .map((response: Response) => response.json());
        }
        updateBill(bill: any) {
                this.getCSRF();
                Object.keys(bill).forEach((key) => (bill[key] == '') && delete bill[key]);      
                const billId = bill.id;
                delete bill['id'];
                const data = JSON.stringify(bill);
                console.log(data);
                return this.http.put(this.apiLink + 'api/bills/'+billId, data, this.options)
                        .map((response: Response) => response.json());
        }
        // final JOB complete
        completeJob(jobID,ceID) {
                this.getCSRF();
                const data = {};
                return this.http.put(this.apiLink + 'api/jobs/'+jobID+'/ce/'+ceID+'/complete',data, this.options)
                        .map((response: Response) => response.json());
        }
        completeJobQE(jobID,ceID) {
                this.getCSRF();
                const data = {};
                return this.http.put(this.apiLink + 'api/jobs/'+jobID+'/qe/'+ceID+'/complete',data, this.options)
                        .map((response: Response) => response.json());
        }
        //  JOB reassigned
        reassignJob(jobID,data) {
                this.getCSRF();
                return this.http.put(this.apiLink + 'api/jobs/'+jobID+'/reassign',data, this.options)
                        .map((response: Response) => response.json());
        }
        // get list of active ce
        ActiveCE() {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/users?status=1&role_type=4', this.options)
                        .map((response: Response) => response.json());
        }
        // get list of active qe
        ActiveQE() {
                this.getCSRF();
                return this.http.get(this.apiLink + 'api/users?status=1&role_type=3', this.options)
                        .map((response: Response) => response.json());
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


        // **^ Bill  Services ^** //


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

        // **^ Bill Form  Services ^** //
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
