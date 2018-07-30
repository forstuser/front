import { Injectable } from '@angular/core';
import { appConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiLink: String = appConfig.apiUrl;
  constructor(private http: HttpClient) { }
  // *********************************** USER SERVICES ******************************************//

  getAdminJobList(BillType: Number, offSet: Number) {
    // this.getCSRF();
    return this.http.get(this.apiLink + 'api/jobs?admin_status=' + BillType + '&limit=50&offset=' + offSet)
  }
}
