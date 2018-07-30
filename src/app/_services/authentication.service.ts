import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { appConfig } from '../app.config';
import { NgxNotificationService } from 'ngx-notification';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiLink: String = appConfig.apiUrl;
  constructor(private http: HttpClient, private router: Router, private ngxNotificationService: NgxNotificationService) { }

  login(EmailID: String, Password: String) {
    const body = { email: EmailID, password: Password };
    const data = JSON.stringify(body);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    };
    return this.http.post(this.apiLink + 'api/login', data, httpOptions).subscribe(
      (res: HttpResponse<any>) => {
        const cookie = res.headers.get('x-csrf-token');
        sessionStorage.setItem('x-csrf-token', JSON.stringify(cookie));
        sessionStorage.setItem('jwt', JSON.stringify(cookie));
        localStorage.setItem('currentUser', JSON.stringify(res.body['data']));
        this.ngxNotificationService.sendMessage('Login Successfull', 'success', 'top-right');
        this.router.navigate(['dashboard']);
      },
      (error: any) => {
        console.log(error);
        if (error.status == 0) {
          this.ngxNotificationService.sendMessage('Internet is slow / down', 'danger', 'top-right');
        } else {
          // this.ngxNotificationService.sendMessage(error.error.reason, 'danger', 'top-right');
        }
      }
    )
  }
}
