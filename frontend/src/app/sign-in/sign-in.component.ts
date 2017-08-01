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
  username: String = '';
  password: String = '';


  constructor (private fb: FormBuilder) {
    // form validators
    this.rForm = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }
  ngOnInit() {
  }
  // form data after submit
 addPost(post) {
    this.username = post.username;
    this.password = post.password;
    console.log(this.username);
    console.log(this.password);
  }
}
