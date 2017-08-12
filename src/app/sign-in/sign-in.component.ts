import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  EmailID: String = '';
  Password: String = '';
  returnUrl: String ;

  constructor (
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // form validators
    this.rForm = fb.group({
      'EmailID' : [null, Validators.required],
      'Password' : [null, Validators.required]
    });
  }
  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // here we can set our default page after login if we want  e.g category instead of returnURL
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }
  // form data after submit
 signIN(post) {
    this.EmailID = post.EmailID;
    this.Password = post.Password;
    this.authenticationService.login(this.EmailID, this.Password)
    .subscribe(
      data => {
        console.log('data is' + data);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log('error is ', error);
        alert(error.statusText);
      }
    );
  }
}
