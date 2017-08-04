import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private router: Router) { }

  login(EmailID: String, Password: String) {
      const body = { EmailID : EmailID, Password: Password };
      const data = JSON.stringify(body);
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post('http://localhost:3000/Services/Management/Login', body, options)
        .map((response: Response) => {
                // login successful if there's a jwt token in the response
          const user = response.json();
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        });
    }
  logout() {
    // remove user from local storage to log user out
    console.log('Inside logout');
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}



