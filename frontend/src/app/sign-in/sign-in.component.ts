import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  constructor (private fb: FormBuilder, private authenticationService: AuthenticationService ) {
    // form validators
    this.rForm = fb.group({
      'EmailID' : [null, Validators.required],
      'Password' : [null, Validators.required]
    });
  }
  ngOnInit() {
  }
  // form data after submit
 addPost(post) {
    this.EmailID = post.EmailID;
    this.Password = post.Password;
    console.log(this.Password);
    console.log(this.EmailID);
   this.authenticationService.login(this.EmailID, this.Password).subscribe(
    (res ) => {
        console.log(res);
    }
   );
  }
}
