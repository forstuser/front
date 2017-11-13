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
  users: any;
  dropdownUser: UserType;
  item: Object = { }; // object for single user
  del: any = { };
  showDialog = false;
  name: String = '';
  editUserForm: FormGroup ;
  statusCode: Number;
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.editUserForm = this.fb.group({
      'role_type': [null, Validators.required],
      'name': null,
      'email': [null, Validators.required],
      'user_status_type': [null, Validators.required],
      'id': [null, Validators.required],
      'password': null
    });
   }

  ngOnInit() {
    // get list of ce
    this.userService.getUserList(4) // 4 for ce refer to api doc
    .subscribe(users => {
      this.users = users;
      console.log(users);
    },
    (error => {
      console.log(error);
    })
    );
  }

  // passs current user as argument and open the popup
  openUserModel(item: any) {
    console.log(item);
    this.showDialog = true; // for show dialog
    this.item = item;
    if (item.user_status_type === 'Active') {
      this.statusCode = 1;
    } else {
      this.statusCode = 2;
    }
    // populate prefilled value in form
    this.editUserForm.setValue({
      role_type: 4,
      name: item.full_name,
      email: item.email,
      user_status_type: item.user_status_type,
      id: item.id,
      password:null
    });
  }
  


  updateUser(user: any) {
    console.log(user);
    this.userService.updateUser(user)
      .subscribe(res => {
        // console.log(res);
        alert('User updated successfully');
        this.showDialog = false;
        this.userService.getUserList(4) // list update after edit
          .subscribe(users => {
            this.users = users;
            // console.log(users);
          });
      }),
      (error => {
        console.log(error);
        alert("Some Error occured !!")
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

