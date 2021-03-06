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
    // const csrf = Cookie.getAll();
    this.xcsrf = JSON.parse(sessionStorage.getItem('x-csrf-token'));
    const headers = new Headers({ 'X-CSRF-TOKEN': this.xcsrf, 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });

  }
  getGraphData(start_date, end_date, catId) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/dashboard?category_id=' + catId + '&start_date=' + start_date + '&end_date=' + end_date, this.options)
      .map((response: Response) => response.json());
  }
  getDashboardData(dataType, start_date, end_date, catId, offset) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/dashboard/' + dataType + '?category_id=' + catId + '&start_date=' + start_date + '&end_date=' + end_date + '&limit=250&offset=' + offset, this.options)
      .map((response: Response) => response.json());
  }
  // User API
  // get list of admin,qe,ce and customer
  getUserList(role_type: number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/users?role_type=' + role_type, this.options)
      .map((response: Response) => response.json());
  }

  // get notification detail
  getUserListNotification(role_type: number, offSet: number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/users?role_type=' + role_type + '&limit=100&offset=' + offSet, this.options)
      .map((response: Response) => response.json());
  }
  //get user between two dates
  getUserListbyDate(categoryID, brandID, start_date, end_date) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/users?role_type=5&category_id=' + categoryID + '&brand_id=' + brandID + '&start_date=' + start_date + '&end_date=' + end_date, this.options)
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
  // send notification
  sendNotification(user: User) {
    this.getCSRF();
    const data = JSON.stringify(user);
    console.log(data);
    return this.http.post(this.apiLink + 'api/notify/users', data, this.options)
      .map((response: Response) => response.json());
  }
  // search mobile notfication
  searchMobile(user, role_type) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/users?role_type=' + role_type + '&mobile_no=' + user + '&limit=50', this.options)
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
    return this.http.get(this.apiLink + 'api/categories/' + catID + '?status=1', this.options)
      .map((response: Response) => response.json());
  }
  // add subcategory list
  addSubCategory(data) {
    // console.log(data,"bhai form submit")
    this.getCSRF();
    const datas = JSON.stringify(data);
    console.log(data);
    return this.http.post(this.apiLink + 'api/categories/', datas, this.options)
      .map((response: Response) => response.json());
  }
  //add models
  addModal(data) {
    this.getCSRF();
    const datas = JSON.stringify(data);
    console.log(data);
    return this.http.post(this.apiLink + 'api/brand/dropdowns', datas, this.options)
      .map((response: Response) => response.json());
  }
  // filter model list
  filterModelList(category_id, brand_id, status_type) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brand/dropdowns?category_id=' + category_id + '&brand_id=' + brand_id + '&status_type=' + status_type, this.options)
      .map((response: Response) => response.json());
  }
  // model list for link
  linkModelList(old_id, new_id) {
    this.getCSRF();
    return this.http.put(this.apiLink + 'api/brand/dropdowns/' + old_id + '/replace/' + new_id, {}, this.options)
      .map((response: Response) => response.json());
  }

  updateModel(data, id) {
    console.log(data, "post data model")
    this.getCSRF();
    const datas = JSON.stringify(data);
    console.log(datas);
    return this.http.put(this.apiLink + 'api/brand/dropdowns/' + id, datas, this.options)
      .map((response: Response) => response.json());
  }

  // Create Main category
  createMainCategory(category: any) {
    this.getCSRF();
    const data = JSON.stringify(category);
    console.log(data);
    return this.http.post(this.apiLink + 'api/categories', data, this.options).map((response: Response) => response.json());
  }

  //service schedule get
  serviceSchedule() {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/serviceSchedules', this.options)
      .map((response: Response) => response.json());
  }
  // edit schedule
  editServiceSchedule(schedule, id) {
    this.getCSRF();
    // const data = JSON.stringify(schedule);
    // console.log(data);
    return this.http.get(this.apiLink + 'api/serviceSchedules/' + id, this.options)
      .map((response: Response) => response.json());
  }

  // update schedule
  updateServiceSchedule(schedule, id) {
    this.getCSRF();
    const data = JSON.stringify(schedule);
    console.log(data);
    return this.http.put(this.apiLink + 'api/serviceSchedules/' + id, data, this.options)
      .map((response: Response) => response.json());
  }
  // post service schedule
  addServiceSchedule(schedule) {
    this.getCSRF();
    const data = JSON.stringify(schedule);
    console.log(data);
    return this.http.post(this.apiLink + 'api/serviceSchedules', data, this.options)
      .map((response: Response) => response.json());
  }
  //delete schedule
  deleteSchedule(id) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/serviceSchedules/' + id, this.options).map((response: Response) => response);
  }
  // Create category form
  createCategoryForm(category: any) {
    console.log(category, "categoriesssss")
    const forms = category.category_forms;
    console.log(forms, "formsss")
    this.getCSRF();
    const id = category.category_id;
    delete category['category_id'];
    category.category_forms = forms.map((item) => {
      item.main_category_id = category.ref_id;
      return item;
    }).filter((item) => item.form_type);
    const data = JSON.stringify(category);
    console.log(data);
    return this.http.post(this.apiLink + 'api/categories', data, this.options).map((response: Response) => response.json());
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
  // get category details by id
  categoryDetailsById(id) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/categories/' + id, this.options).map((response: Response) => response.json());
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
    return this.http.get(this.apiLink + 'api/detailtypes', this.options)
      .map((response: Response) => response.json());
  }

  // Update details
  updateDetail(category: any) {
    const id = category.id;
    console.log(category, "updetail")
    this.getCSRF();
    delete category['type']
    delete category['id']
    const data = JSON.stringify(category);
    console.log(data);
    return this.http.put(this.apiLink + 'api/detailtypes/' + id, data, this.options).map((response: Response) => response.json());
  }

  // Delete detail
  deleteDetail(category: any) {
    const id = category.id;
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/detailtypes/' + id, this.options).map((response: Response) => response.json());
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
    return this.http.put(this.apiLink + 'api/onlineSeller/' + sid, data, this.options).map((response: Response) => response.json());
  }
  // offline seller
  // get offline seller list
  getOfflineSellerList() {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/offlineSeller', this.options)
      .map((response: Response) => response.json());
  }
  // get offline seller by status
  getOfflineSellerListByStatus(status) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/offlineSeller?status_type=' + status, this.options)
      .map((response: Response) => response.json());
  }
  // get offline seller list by query
  getOfflineSellerListByQuery(query: string, userid) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/offlineSeller?seller_name=' + query + '&user_id=' + userid, this.options)
      .map((response: Response) => response.json());
  }
  getModelListByCategoryAndBrand(category_id: number, brand_id: number, user_id: number) {
    console.log("category_id", category_id);
    console.log("brand_id", brand_id);
    console.log("user_id", user_id);
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brand/dropdowns?brand_id=' + brand_id + '&category_id=' + category_id + '&user_id=' + user_id, this.options)
      .map((response: Response) => response.json());
  }
  // get details of offline seller by id
  getOfflineSellerDetailsbyID(ID: Number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/offlineSeller/' + ID, this.options)
      .map((response: Response) => response.json());
  }

  // Create offline seller
  createOfflineSeller(OfflineSeller: any) {
    Object.keys(OfflineSeller).forEach((key) => (OfflineSeller[key] == '' || OfflineSeller[key] == null) && delete OfflineSeller[key]);
    this.getCSRF();
    const data = JSON.stringify(OfflineSeller);
    console.log(data);
    return this.http.post(this.apiLink + 'api/offlineSeller', data, this.options).map((response: Response) => response.json());
  }
  // Update offline seller
  updateOfflineSeller(OfflineSeller: any) {
    console.log(OfflineSeller);
    Object.keys(OfflineSeller).forEach((key) => (OfflineSeller[key] == '' || OfflineSeller[key] == null) && delete OfflineSeller[key]);
    const sid = OfflineSeller.sid;
    this.getCSRF();
    delete OfflineSeller['sid'];
    const data = JSON.stringify(OfflineSeller);
    console.log(data);
    return this.http.put(this.apiLink + 'api/offlineSeller/' + sid, data, this.options).map((response: Response) => response.json());
  }
  // Delete offline seller
  deleteOfflineSeller(sellerId: number) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/offlineSeller/' + sellerId, this.options).map((response: Response) => response);
  }
  // verify user created offline seller
  verifyUserOfflineSeller(oldId, newId) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/offlineSeller/' + oldId + '/replace/' + newId, this.options).map((response: Response) => response);
  }
  // Insurance Provider
  getInsuranceProviderList(off) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/insurance/brands?limit=50&offset=' + off, this.options)
      .map((response: Response) => response.json());
  }
  getInsuranceProviderListByStatus(status) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/insurance/brands?status_type=' + status, this.options)
      .map((response: Response) => response.json());
  }

  // link user created insurance provider to verified insurance providers
  verifyUserInsuranceProviders(oldId, newId) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/insurance/brands/' + oldId + '/replace/' + newId, this.options).map((response: Response) => response);
  }
  // Brand
  // get All brand list
  getAllBrandList() {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brands', this.options)
      .map((response: Response) => response.json());
  }
  // get User Created brand list
  getUserBrandList(off) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brands?status=11&limit=50&offset=' + off, this.options)
      .map((response: Response) => response.json());
  }
  getBrandListByStatus(status) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brands?status_type=' + status, this.options)
      .map((response: Response) => response.json());
  }
  // get User Created brand list
  getUserBrandDropdownList(off) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brand/dropdowns?limit=50&offset=' + off, this.options)
      .map((response: Response) => response.json());
  }
  // get active brand list
  getBrandList() {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brands?status=1', this.options)
      .map((response: Response) => response.json());
  }
  // get brand list by user
  getBrandListByUser(user_id) {
    console.log("brand list by user")
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brands?status=1&user_id=' + user_id, this.options)
      .map((response: Response) => response.json());
  }
  getBrandListByCategory(catID) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brands?category_id=' + catID + '&status=1', this.options)
      .map((response: Response) => response.json());
  }
  getBrandListByCategoryAndUser(catID, userId) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brands?category_id=' + catID + '&user_id=' + userId, this.options)
      .map((response: Response) => response.json());
  }
  // Create Brand
  createBrand(brand: any) {
    this.getCSRF();
    const data = JSON.stringify(brand);
    console.log(data);
    return this.http.post(this.apiLink + 'api/brands', data, this.options).map((response: Response) => response.json());
  }
  //verify brand
  verifyBrand(brandId, statusId) {
    const data = { 'status_type': statusId }
    this.getCSRF();
    return this.http.put(this.apiLink + 'api/brands/' + brandId, data, this.options).map((response: Response) => response.json());
  }
  //verify brand model
  verifyBrandModel(dropdownId, statusId) {
    const data = { 'status_type': statusId }
    this.getCSRF();
    return this.http.put(this.apiLink + 'api/brand/dropdowns/' + dropdownId, data, this.options).map((response: Response) => response.json());
  }
  // Delete brand
  deleteBrand(brandId: any) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/brands/' + brandId, this.options).map((response: Response) => response);
  }
  // get details of brand by id
  getBrandDetailsbyID(ID: Number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/brands/' + ID, this.options)
      .map((response: Response) => response.json());
  }

  // Update brand
  updateBrand(dataa: any, arr) {
    // console.log
    const id = dataa.brand_id;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == "") {
        arr[i].id = undefined;
      }
    }
    this.getCSRF();
    delete dataa['brand_id'];
    const data = JSON.stringify(dataa);
    console.log(data);
    return this.http.put(this.apiLink + 'api/brands/' + id, data, this.options).map((response: Response) => response.json());
  }
  //remove brand details
  removeBrandDetails(asc, center) {
    console.log(asc.id)
    // const center_id=center.id;
    const id = asc.id
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/brands/' + center + '/details/' + id, this.options)
      .map((response: Response) => response.json());
  }
  // link user created brand to verified brands
  verifyUserBrands(oldId, newId) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/brands/' + oldId + '/replace/' + newId, this.options).map((response: Response) => response);
  }
  // get authorized service center list
  getAuthorizedServiceCenterList(off) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/servicecenters?limit=100&offset=' + off, this.options)
      .map((response: Response) => response.json());
  }
  //search by center name
  getCategoryListSearch(offset, event) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/servicecenters?limit=100&offset=' + offset + '&center_name=' + event, this.options)
      .map((response: Response) => response.json());
  }
  // Create authorized service center
  createAuthorizedServiceCenter(asc: any) {
    this.getCSRF();
    const data = JSON.stringify(asc);
    console.log(data);
    return this.http.post(this.apiLink + 'api/servicecenters', data, this.options).map((response: Response) => response.json());
  }
  // Create insurance provider center
  createInsuranceProvider(insurance: any) {
    this.getCSRF();
    Object.keys(insurance).forEach((key) => (insurance[key] == '' || insurance[key] == null) && delete insurance[key]);
    const data = JSON.stringify(insurance);
    console.log(data);
    return this.http.post(this.apiLink + 'api/insurance/brands', data, this.options).map((response: Response) => response.json());
  }
  //delete insurance provider
  deleteInsuranceProvider(id) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/insurance/brands/' + id, this.options)
      .map((response: Response) => response);
  }
  //edit insurance provider
  getInsuranceProviderID(ID: Number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/insurance/brands/' + ID, this.options)
      .map((response: Response) => response.json());
  }
  // Warranty Provider
  warrantyProvider(type: Number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/insurance/brands?type=' + type, this.options)
      .map((response: Response) => response.json());
  }
  //update Insurance provider
  updateInsuranceProvider(insurance: any, ID) {
    this.getCSRF();
    Object.keys(insurance).forEach((key) => (insurance[key] == '' || insurance[key] == null) && delete insurance[key]);
    const data = JSON.stringify(insurance);
    console.log(data);
    return this.http.put(this.apiLink + 'api/insurance/brands/' + ID, data, this.options).map((response: Response) => response.json());
  }


  // Delete authorized service center
  DeleteAuthorizedServiceCenter(center_id: any) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/servicecenters/' + center_id, this.options).map((response: Response) => response);
  }
  // get details of authorized service center by id
  getAuthorizedServiceCenterByID(ID: Number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/servicecenters/' + ID, this.options)
      .map((response: Response) => response.json());
  }
  // Update authorized service center
  updateAuthorizedServiceCenter(asc: any, arr) {
    console.log(asc, arr, "seller online")
    const id = asc.center_id
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == "") {
        arr[i].id = undefined;
      }
    }
    Object.keys(asc).forEach((key) => (asc[key] == '' || asc[key] == null) && !(asc[key] instanceof Array) && delete asc[key]);
    this.getCSRF();
    delete asc['center_id']
    const data = JSON.stringify(asc);
    console.log(data);
    return this.http.put(this.apiLink + 'api/servicecenters/' + id, data, this.options)
      .map((response: Response) => response.json());
  }
  //remove asc details
  removeAscDetails(asc, center) {
    console.log(asc.id)
    const center_id = center.id;
    const id = asc.id
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/servicecenters/' + center_id + '/details/' + id, this.options)
      .map((response: Response) => response.json());
  }

  // get list of new,under-progress and completed list
  // get admin list
  getAdminJobList(BillType: Number, off: Number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/jobs?admin_status=' + BillType + '&limit=20&offset=' + off, this.options)
      .map((response: Response) => response.json());
  }
  getFilteredJobList(BillType: Number, filter) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/jobs?admin_status=' + BillType + filter, this.options)
      .map((response: Response) => response.json());
  }
  getDayLeftJobList(BillType: Number, day) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/jobs?admin_status=' + BillType + '&job_day=' + day, this.options)
      .map((response: Response) => response.json());
  }

  // getFilteredQEJobList(BillType: Number, id) {
  //         this.getCSRF();
  //         return this.http.get(this.apiLink + 'api/jobs?admin_status=' + BillType + '&assigned_to_qe=' + id, this.options)
  //                 .map((response: Response) => response.json());
  // }
  // get CE JOB list
  getCEJobList(BillType: Number, id, off) {
    console.log(BillType, id, "bill type")
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/jobs?ce_status=' + BillType + '&assigned_to_ce=' + id + '&limit=20&offset=' + off, this.options)
      .map((response: Response) => response.json());
  }
  // get CE JOB list
  getQEJobList(BillType: Number, id, off) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/jobs?qe_status=' + BillType + '&assigned_to_qe=' + id + '&limit=20&offset=' + off, this.options)
      .map((response: Response) => response.json());
  }
  // discard job
  discardConsumerJOB(req: any) {
    this.getCSRF();
    const jobID = req['id'];
    delete req['id'];
    return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/discard', req, this.options)
      .map((response: Response) => response.json());
  }
  // Assign job to CE
  assignJobCE(task: any) {
    console.log(task, "task")
    this.getCSRF();
    // const id=task['id']
    const jobID = task['jobId'];
    const ceID = task['UID'];
    delete task['BID'];
    delete task['UID'];
    const data = JSON.stringify(task);
    console.log(data);
    return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/ce/' + ceID, data, this.options)
      .map((response: Response) => response.json());
  }
  // Assign job to QE
  assignJobQE(task: any) {
    console.log(task, "task")
    this.getCSRF();
    const jobID = task['jobId'];
    const qeID = task['UID'];
    delete task['BID'];
    delete task['UID'];
    const data = JSON.stringify(task);
    console.log(data);
    return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/qe/' + qeID, data, this.options)
      .map((response: Response) => response.json());
  }
  completeJobByAdmin(jobId: number, comment: string) {
    this.getCSRF();
    const data = { 'comments': comment };
    return this.http.put(this.apiLink + 'api/jobs/' + jobId + '/complete', data, this.options)
      .map((response: Response) => response.json());
  }
  getJobByID(billID: Number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/jobs/' + billID, this.options)
      .map((response: Response) => response.json());
  }
  getBillByID(billID: Number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/bills/' + billID, this.options)
      .map((response: Response) => response.json());
  }
  getNotifications(jobId: Number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/jobs/' + jobId + '/notifications', this.options)
      .map((response: Response) => response.json());
  }
  createBill(bill: any) {
    console.log(bill);
    Object.keys(bill).forEach((key) => (bill[key] == '' || bill[key] == null) && delete bill[key]);
    this.getCSRF();
    const data = JSON.stringify(bill);
    console.log(data);
    return this.http.post(this.apiLink + 'api/bills', data, this.options)
      .map((response: Response) => response.json());
  }
  verifyBill(bill_id) {
    this.getCSRF();
    const data = { 'status_type': 5 }
    return this.http.put(this.apiLink + 'api/bills/' + bill_id, data, this.options)
      .map((response: Response) => response.json());
  }
  deleteBill(billId) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/bills/' + billId, this.options)
      .map((response: Response) => response);
  }
  getProductList(userId: number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/products?user_id=' + userId, this.options)
      .map((response: Response) => response.json());
  }
  getCustomProductList(userId: number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/products?user_id=' + userId + '&status_type=11', this.options)
      .map((response: Response) => response.json());
  }
  getProductDetailById(pid: number) {
    this.getCSRF();
    return this.http.get(this.apiLink + 'api/products/' + pid, this.options)
      .map((response: Response) => response.json());
  }
  createProduct(prod: any) {
    this.getCSRF();
    const billId = prod.billId;
    delete prod['billId'];
    Object.keys(prod).forEach((key) => (prod[key] == '' || prod[key] == null) && !(prod[key] instanceof Array) && delete prod[key]);
    const data = JSON.stringify(prod);
    console.log(data);
    return this.http.post(this.apiLink + 'api/bills/' + billId + '/products', data, this.options)
      .map((response: Response) => response.json());
  }
  updateProduct(prod: any) {
    console.log("prod", prod);
    this.getCSRF();
    const billId = prod.billId;
    const prodId = prod.productId;
    delete prod['billId'];
    delete prod['productId'];
    // Object.keys(prod).forEach((key) => (prod[key] == '' || prod[key] == null) && delete prod[key]);
    prod['copies'] = prod['copies'] || [];
    const data = JSON.stringify(prod);
    console.log(data);
    return this.http.put(this.apiLink + 'api/bills/' + billId + '/products/' + prodId, data, this.options)
      .map((response: Response) => response.json());
  }
  linkProduct(jobId, billId, prodId) {
    this.getCSRF();
    return this.http.put(this.apiLink + 'api/bills/' + null + '/products/' + prodId, { 'bill_id': billId, 'job_id': jobId }, this.options)
      .map((response: Response) => response.json());
  }
  unLinkProduct(prodId) {
    this.getCSRF();
    return this.http.put(this.apiLink + 'api/products/' + prodId + '/unlink', {}, this.options)
      .map((response: Response) => response.json());
  }
  deleteProduct(billId, id) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/bills/' + billId + '/products/' + id, this.options)
      .map((response: Response) => response);
  }
  verifyProduct(bill_id, product_id) {
    this.getCSRF();
    const data = { 'status_type': 5 }
    return this.http.put(this.apiLink + 'api/bills/' + bill_id + '/products/' + product_id, data, this.options)
      .map((response: Response) => response.json());
  }
  /* UnverifyProduct
   *  @author: Shubham Nigam
   *  lastWorkedOn: 12/12/2017     
   */
  unverifyProduct(product_id) {
    this.getCSRF();
    const data = { 'status_type': 11 }
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/unverify', data, this.options)
      .map((response: Response) => response.json());
  }
  productMetaData(billId, prodId) {
    this.getCSRF();
    // console.log(billId,prodId);
    return this.http.get(this.apiLink + 'api/bills/' + billId + '/products/' + prodId, this.options)
      .map((response: Response) => response.json());
  }
  createWarranty(war: any) {
    this.getCSRF();
    const product_id = war.product_id;
    delete war['product_id'];
    // Object.keys(war).forEach((key) => (war[key] == '' || war[key] == null) && delete war[key]);
    const data = JSON.stringify(war);
    console.log(data);
    return this.http.post(this.apiLink + 'api/products/' + product_id + '/warranties', data, this.options)
      .map((response: Response) => response.json());
  }
  updateWarranty(war: any) {
    console.log(war, "war");
    this.getCSRF();
    const warId = war['warrantyId'];
    const product_id = war.product_id;
    delete war['product_id'];
    delete war['warrantyId'];
    // Object.keys(war).forEach((key) => (war[key] == '' || war[key] == null) && delete war[key]);
    war['copies'] = war['copies'] || [];
    const data = JSON.stringify(war);
    console.log(data);
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/warranties/' + warId, data, this.options)
      .map((response: Response) => response.json());
  }
  deleteWarranty(product_id, id) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/products/' + product_id + '/warranties/' + id, this.options)
      .map((response: Response) => response);
  }
  verifyWarranty(product_id, warId) {
    this.getCSRF();
    const data = { 'status_type': 5 }
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/warranties/' + warId, data, this.options)
      .map((response: Response) => response.json());
  }
  updateInsurance(ins: any) {
    this.getCSRF();
    const insId = ins['insuranceId'];
    const product_id = ins.product_id;
    delete ins['product_id'];
    delete ins['insuranceId'];
    // Object.keys(ins).forEach((key) => (ins[key] == '' || ins[key] == null) && delete ins[key]);
    ins['copies'] = ins['copies'] || [];
    const data = JSON.stringify(ins);
    console.log(data);
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/insurances/' + insId, data, this.options)
      .map((response: Response) => response.json());
  }
  deleteInsurance(product_id, id) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/products/' + product_id + '/insurances/' + id, this.options)
      .map((response: Response) => response);
  }
  verifyInsurance(product_id, insId) {
    this.getCSRF();
    const data = { 'status_type': 5 }
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/insurances/' + insId, data, this.options)
      .map((response: Response) => response.json());
  }
  createInsurance(ins: any) {
    this.getCSRF();
    const product_id = ins.product_id;
    delete ins['product_id'];
    Object.keys(ins).forEach((key) => (ins[key] == '' || ins[key] == null) && delete ins[key]);
    const data = JSON.stringify(ins);
    console.log(data);
    return this.http.post(this.apiLink + 'api/products/' + product_id + '/insurances', data, this.options)
      .map((response: Response) => response.json());
  }
  createAmc(amc: any) {
    this.getCSRF();
    const product_id = amc.product_id;
    delete amc['product_id'];
    Object.keys(amc).forEach((key) => (amc[key] == '' || amc[key] == null) && delete amc[key]);
    const data = JSON.stringify(amc);
    console.log(data);
    return this.http.post(this.apiLink + 'api/products/' + product_id + '/amcs', data, this.options)
      .map((response: Response) => response.json());
  }
  updateAmc(amc: any) {
    this.getCSRF();
    const amcId = amc['amcId'];
    const product_id = amc.product_id;
    delete amc['product_id'];
    delete amc['amcId'];
    // Object.keys(amc).forEach((key) => (amc[key] == '' || amc[key] == null) && delete amc[key]);
    amc['copies'] = amc['copies'] || [];
    const data = JSON.stringify(amc);
    console.log(data);
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/amcs/' + amcId, data, this.options)
      .map((response: Response) => response.json());
  }
  deleteAmc(product_id, id) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/products/' + product_id + '/amcs/' + id, this.options)
      .map((response: Response) => response);
  }
  verifyAmc(product_id, amcId) {
    this.getCSRF();
    const data = { 'status_type': 5 }
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/amcs/' + amcId, data, this.options)
      .map((response: Response) => response.json());
  }
  createPuc(rep: any) {
    this.getCSRF();
    const product_id = rep.product_id;
    delete rep['product_id'];
    Object.keys(rep).forEach((key) => (rep[key] == '' || rep[key] == null) && delete rep[key]);
    const data = JSON.stringify(rep);
    console.log(data);
    return this.http.post(this.apiLink + 'api/products/' + product_id + '/pucs', data, this.options)
      .map((response: Response) => response.json());
  }
  updatePuc(puc: any, id, product_id) {
    console.log(puc, "post puc data")
    this.getCSRF();
    // const pucId = puc['id'];
    // const product_id = puc.product_id;
    // console.log(pucId,product_id,"id & puc_id")
    delete puc['product_id'];
    delete puc['id'];
    // Object.keys(puc).forEach((key) => (puc[key] == '' || puc[key] == null) && delete puc[key]);
    puc['copies'] = puc['copies'] || [];
    const data = JSON.stringify(puc);
    console.log(data);
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/pucs/' + id, data, this.options)
      .map((response: Response) => response.json());
  }
  deletePucs(product_id, id) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/products/' + product_id + '/amcs/' + id, this.options)
      .map((response: Response) => response);
  }
  createRepair(rep: any) {
    this.getCSRF();
    const product_id = rep.product_id;
    delete rep['product_id'];
    Object.keys(rep).forEach((key) => (rep[key] == '' || rep[key] == null) && delete rep[key]);
    const data = JSON.stringify(rep);
    console.log(data);
    return this.http.post(this.apiLink + 'api/products/' + product_id + '/repairs', data, this.options)
      .map((response: Response) => response.json());
  }
  updateRepair(rep: any) {
    this.getCSRF();
    const repairId = rep['repairId'];
    const product_id = rep.product_id;
    delete rep['product_id'];
    delete rep['repairId'];
    // Object.keys(rep).forEach((key) => (rep[key] == '' || rep[key] == null) && delete rep[key]);
    rep['copies'] = rep['copies'] || [];
    const data = JSON.stringify(rep);
    console.log(data);
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/repairs/' + repairId, data, this.options)
      .map((response: Response) => response.json());
  }
  deleteRepair(product_id, id) {
    this.getCSRF();
    return this.http.delete(this.apiLink + 'api/products/' + product_id + '/repairs/' + id, this.options)
      .map((response: Response) => response);
  }
  verifyRepair(product_id, repairId) {
    this.getCSRF();
    const data = { 'status_type': 5 }
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/repairs/' + repairId, data, this.options)
      .map((response: Response) => response.json());
  }
  verifyPuc(product_id, repairId) {
    this.getCSRF();
    const data = { 'status_type': 5 }
    return this.http.put(this.apiLink + 'api/products/' + product_id + '/pucs/' + repairId, data, this.options)
      .map((response: Response) => response.json());
  }
  updateBill(bill: any) {
    this.getCSRF();
    // Object.keys(bill).forEach((key) => (bill[key] == '' || bill[key] == null) && delete bill[key]);
    const billId = bill.id;
    delete bill['id'];
    const data = JSON.stringify(bill);
    console.log(data);
    return this.http.put(this.apiLink + 'api/bills/' + billId, data, this.options)
      .map((response: Response) => response.json());
  }
  // final JOB complete
  completeJob(jobID, ceID) {
    this.getCSRF();
    const data = {};
    return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/ce/' + ceID + '/complete', data, this.options)
      .map((response: Response) => response.json());
  }
  completeJobQE(jobID, ceID) {
    this.getCSRF();
    const data = {};
    return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/qe/' + ceID + '/complete', data, this.options)
      .map((response: Response) => response.json());
  }
  //  JOB reassigned
  reassignJob(jobID, data) {
    this.getCSRF();
    return this.http.put(this.apiLink + 'api/jobs/' + jobID + '/reassign', data, this.options)
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
  //discard bill image
  discardConsumerBillImage(req: any) {
    console.log(req)
    this.getCSRF();
    const jobId = req.BID
    const fileId = req.ImageID
    delete req['BID']
    delete req['ImageID']
    const data = JSON.stringify(req);
    console.log(data);
    return this.http.put(this.apiLink + 'api/jobs/' + jobId + '/files/' + fileId, data, this.options)
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
