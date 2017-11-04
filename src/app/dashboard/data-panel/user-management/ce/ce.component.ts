import { UserType } from './../../../../_models/usertype';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from './../../../../_models/user';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ce',
  templateUrl: './ce.component.html',
  styleUrls: ['./ce.component.css']
})
export class CeComponent implements OnInit {
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
    // get list of ce
    this.userService.getUserList(4) // 3 for ce refer to api doc
    .subscribe(users => {
      this.users = users;
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
      UserType: 3,
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
        this.userService.getUserList(4) // list update after edit
          .subscribe(users => {
          this.users = users;
          // console.log(users);
        });
      });

  }


  
  deleteUser(user: any) {
    console.log(user);
    this.userService.deleteUser(user.id)
      .subscribe(res => {
        console.log(res);
        if (res.status == 204) {
          alert("Deleted Successfully")
          this.userService.getUserList(4) // list update after edit
            .subscribe(users => {
              this.users = users;
            });
        }
      }),
      (error => {
        console.log(error);
      });
  }
}

