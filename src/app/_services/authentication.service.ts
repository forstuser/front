import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { appConfig } from './../app.config';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Injectable()
export class AuthenticationService {
  apiLink: String = appConfig.apiUrl;
  returnUrl: String ;
  user:any;
  email:any;
  role_type:number;

  constructor(private http: Http, private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();
    // this.logout();
    Cookie.deleteAll();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    
  }

  login(EmailID: String, Password: String) {
    // console.log('inside post')
    const body = { email: EmailID, password: Password };
    const data = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers});
    return this.http.post(this.apiLink + 'api/login', body, options).map(response => {
      const cookie = response.headers.get('x-csrf-token');
      Cookie.set('x-csrf-token',cookie);
      Cookie.set('jwt',cookie);
      return response.json();
    }).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      this.router.navigate(['dashboard']);
    }, (error: any) => {
      console.log(error);
      if(error.status ==0){
        alert('Internet is slow/down');
      } else{
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }
    });
  }

  logout() {
    // localstorage
    this.user=JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user)
    this.email=this.user.email;
    console.log(this.email,"email")
    this.role_type=this.user.role_type;
    console.log(this.role_type);


    // Cookie.deleteAll();
    const body = {
      "email":this.email,
      "role_type":this.role_type
    };
    const csrf = Cookie.getAll();
    const cook = csrf['x-csrf-token'];
    console.log(cook);
    const headers = new Headers({ 'Content-Type': 'application/json','X-CSRF-TOKEN': cook });
    const options = new RequestOptions({ headers: headers});
    console.log(options);
    return this.http.post(this.apiLink + 'api/logout',body,options).subscribe(response => {
      console.log(response);
      Cookie.deleteAll();
      this.router.navigateByUrl('/login')
    }),
    error=>{
      console.log("logout failed")
      alert("error")
    }
  }
}



