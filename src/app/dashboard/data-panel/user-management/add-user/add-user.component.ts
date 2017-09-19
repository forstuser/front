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
  Name: String = '';
  EmailID: String = '';
  Password: String = '';
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // form validators
    this.newUserForm = this.fb.group({
      'UserType' : [null, Validators.required],
      'Name' : [null, Validators.required],
      'EmailID' : [null, Validators.required],
      'Password' : [null, Validators.required]
    });
  }

  ngOnInit() {

   // console.log(this.currentUser);
    this.userService.getAllUser()
    .subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }
  onItemSelected(e: Event) {
    console.log(e);
  }
   addNewUser(post) {
    //  console.log(post);
      this.userService.createUser(post)
        .subscribe(
      data => {
        console.log(data);
        alert('User successfully added !!');
        this.newUserForm.reset();
        // this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
