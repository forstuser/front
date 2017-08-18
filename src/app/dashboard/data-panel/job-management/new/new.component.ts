import { NewList } from './../../../../_models/billList.interface';
import { User } from './../../../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  userType: String;
  users: User;
  billList: NewList;
  assignForm: FormGroup;
  showDialog = false;
  item: Object = {}; // object for single user
  statusCode: Number;
  constructor(private userservice: UserService, private fb: FormBuilder) {
    // get userType from local Storage
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.userType = info.UserType;
    console.log("userType", this.userType)

    this.assignForm = this.fb.group({
      'UID': ['', Validators.required],
      'Comments': '',
      'BID': ''
    });
  }

  ngOnInit() {

    // if userType is Admin/SuperAdmin get list of new bills
    if (this.userType === '1' || this.userType === '2') {
      this.userservice.getAdminBillList(4) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is CE get list of new bills
    else if (this.userType === '3' ) {  
      this.userservice.getCEBillList(4) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is QE get list of new bills
    else if (this.userType === '4') {
      this.userservice.getQEBillList(4) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // get list of ce
    this.userservice.getUserList('3') // 3 for ce refer to api doc
      .subscribe(users => {
        this.users = users;
        console.log(users);
      });
  }
  // passs current user as argument and open the popup
  openModel(item: any) {
    console.log(item);
    this.showDialog = true; // for show dialog
    this.assignForm.setValue({
      BID: item.BID,
      UID: '',
      Comments: ''
    });
  }
  assignBill(item: any) {
    console.log(item);
    this.userservice.assignTaskCE(item)
      .subscribe(res => {
        console.log(res);
        alert('assign successfull');
        this.userservice.getAdminBillList(4) // new = 4 refer api doc
          .subscribe(bill => {
            this.billList = bill;
            console.log(this.billList);
          });
      });
  }

}
