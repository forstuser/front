import { Injectable } from '@angular/core';
import { appConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _apiLink: String = appConfig.apiUrl;
  constructor(private __http: HttpClient) { }

  // *********************************** USER SERVICES ******************************************//
  getAdminJobList(status: number) {
    return this.__http.get(this._apiLink + 'api/cashback/jobs?admin_status=' + status)
  }
  getCEJobList(status) {
    return this.__http.get(this._apiLink + 'api/cashback/jobs?admin_status=' + status)
  }
  getUserList(type: number) {
    return this.__http.get(this._apiLink + 'api/users?role_type=' + type)
  }
  assignCashBackJobCE(req) {
    const __data = req;
    console.log(__data);
    return this.__http.put(this._apiLink + 'api/cashback/jobs/assign', __data)
  }
}
