import { User } from './../../../../_models/user';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: User[] = [];
  currentUser: any;
  newUserForm: FormGroup ;
  TypeID: number;
  EmailID: String = '';
  Password: String = '';
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // form validators
    this.newUserForm = this.fb.group({
      'TypeID' : [null, Validators.required],
      'EmailID' : [null, Validators.required],
      'Password' : [null, Validators.required]
    });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   // console.log(this.currentUser);
    this.userService.getAllUser(this.currentUser.token, this.currentUser.UserType)
    .subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }
  onItemSelected(e: Event) {
    console.log(e);
  }
   addNewUser(post) {
     console.log(post);
      this.TypeID = post.TypeID;
      this.EmailID = post.EmailID;
      this.Password = post.Password;
    // this.authenticationService.login(this.EmailID, this.Password)
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     this.router.navigate([this.returnUrl]);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }
}
