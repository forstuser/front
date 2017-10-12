import { UserType } from './../../../../_models/usertype';
import { User } from './../../../../_models/user';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User;
  dropdownUser: UserType;
  item: Object = { }; // object for single user
  del: any = { };
  showDialog = false;
  name: String = '';
  editUserForm: FormGroup ;
  statusCode: Number;
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.editUserForm = this.fb.group({
      'UserType' : [null, Validators.required],
      'Name' : [null, Validators.required],
      'EmailID' : [null, Validators.required],
      'Status' : [null, Validators.required],
      'ID': [null, Validators.required],
      'Password' : null
    });
   }

  ngOnInit() {
    // get list of admin
    this.userService.getUserList('2') // 2 for admin refer to api doc
    .subscribe(users => {
      this.users = users;
      console.log(users);
    });
    // get dropdown list
    this.userService.getAllUser()
    .subscribe(users => {
      this.dropdownUser = users;
      console.log(users);
    });
  }

  // passs current user as argument and open the popup
  openUserModel(item: any) {
    this.showDialog = true ; // for show dialog
    this.item = item;
    if (item.Status === 'Active') {
      this.statusCode = 1;
    } else {
      this.statusCode = 2;
    }
    // populate prefilled value in form
    this.editUserForm.setValue({
      UserType: 2,
      Name: item.Name,
      EmailID: item.EmailID,
      Status: this.statusCode,
      ID: item.ID,
      Password: ''
    });
  }

  updateUser(user: any) {
    console.log(user);
    this.userService.updateUser(user)
      .subscribe( res => {
        // console.log(res);
        alert('User updated successfully');
        this.showDialog = false ;
        this.userService.getUserList('2') // list update after edit
          .subscribe(users => {
          this.users = users;
          // console.log(users);
        });
      });

  }
  deleteUser(user: any) {
    console.log(user);
    this.del = { 'ID': user.ID };
    confirm('Confirm');
    this.userService.deleteUser(this.del)
      .subscribe(res => {
        console.log(res);
        this.userService.getUserList('2') // list update after edit
          .subscribe(users => {
          this.users = users;
            // console.log(users);
        });
    });
  }
}