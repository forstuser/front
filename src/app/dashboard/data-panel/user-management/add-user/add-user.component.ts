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
  name: String = '';
  email: String = '';
  password: String = '';
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // form validators
    this.newUserForm = this.fb.group({
      'role_type' : [null, Validators.required],
      'name' : [null, Validators.required],
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
        if(data.success==true){
        alert('User successfully added !!');
        this.newUserForm.reset();
        }
      },
      error => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }
    );
  }
}
