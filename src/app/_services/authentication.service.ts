import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiLink: String = appConfig.apiUrl;
  constructor(private http: HttpClient) { }

}
