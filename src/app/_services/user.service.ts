import { Injectable } from '@angular/core';
import { appConfig } from '../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiLink: String = appConfig.apiUrl;
  constructor(private http: HttpClient) { }
  // *********************************** USER SERVICES ******************************************//
  getAdminJobList() {
    return this.http.get(this.apiLink + 'api/cashback/jobs')
  }
}
