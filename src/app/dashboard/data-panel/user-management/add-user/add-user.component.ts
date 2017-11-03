import { UserType } from './../../../../_models/usertype';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: UserType;
  newUserForm: FormGroup ;
  TypeID: String;
  UserType:String = '';
  Name: String = '';
  email: String = '';
  password: String = '';
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // form validators
    this.newUserForm = this.fb.group({
      'role_type' : [null, Validators.required],
      // 'Name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  ngOnInit() {
  }

   addNewUser(post) {
     console.log(post);
      this.userService.createUser(post)
        .subscribe(
      data => {
        console.log(data);
        // alert('User successfully added !!');
        // this.newUserForm.reset();
        // this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
