import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewList } from './../../../../_models/billList.interface';
import { User } from './../../../../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discarded',
  templateUrl: './discarded.component.html',
  styleUrls: ['./discarded.component.css']
})
export class DiscardedComponent implements OnInit {
  userType: Number;
  users: User;
  billList: NewList;
  assignForm: FormGroup;
  showDialog = false;
  item: Object = {}; // object for single user
  statusCode: Number;
  offset:number = 0;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  userId:any;
  constructor(private userservice: UserService, private fb: FormBuilder) {
    // get userType from local Storage
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.userType = info.role_type;
    this.userId=info.id;
    // console.log("userType", this.userType)

    this.assignForm = this.fb.group({
      'UID': ['', Validators.required],
      'Comments': '',
      'BID': ''
    });
  }

  ngOnInit() {

    // if userType is Admin/SuperAdmin get list of new bills
    if (this.userType === 1 || this.userType === 2) {
      this.userservice.getAdminJobList(9,this.offset) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is CE get list of new bills
    else if (this.userType === 3) {
      this.userservice.getCEJobList(9,this.userId,this.offset) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is QE get list of new bills
    else if (this.userType === 4) {
      this.userservice.getQEJobList(9, this.userId,this.offset) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // get list of ce
    this.userservice.getUserList(4) // 4 for ce refer to api doc
      .subscribe(users => {
        this.users = users;
        console.log(users);
      });
  }
  // function for pagination
  left() {
    this.leftFlag = true;
    this.rightFlag = false;
    this.noData = false;
    if (this.offset > 1) {
      this.offset = this.offset - 20;
      this.leftFlag = false;
    }
    if (this.userType === 1 || this.userType === 2) {
      this.userservice.getAdminJobList(9, this.offset)
        .subscribe(bills => {
          console.log(bills)
          this.billList = bills;
          console.log(this.billList);
        });
    }
    else if (this.userType === 3) {
      this.userservice.getCEJobList(9, this.userId, this.offset) // 4 for qe refer to api doc
        .subscribe(bills => {
          this.billList = bills;
          console.log(bills);
        });
    }
  }

  right() {
    this.noData = false;
    this.leftFlag = false;
    this.offset = this.offset + 20;
    if (this.userType === 1 || this.userType === 2) {
      this.userservice.getAdminJobList(9, this.offset)
        .subscribe(bills => {
          console.log(bills)
          if (bills.data.length == 0) {
            this.rightFlag = true;
            this.noData = true;
          }
          this.billList = bills;
          console.log(this.billList);
        });
    }
    else if (this.userType === 3) {
      this.userservice.getCEJobList(9, this.userId, this.offset) // 4 for qe refer to api doc
      .subscribe(bills => {
        console.log(bills)
        if (bills.data.length == 0) {
          this.rightFlag = true;
          this.noData = true;
        }
        this.billList = bills;
        console.log(this.billList);
      });
    }
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
    this.userservice.assignJobCE(item)
      .subscribe(res => {
        console.log(res);
        alert('assign successfull');
        this.showDialog = false;
        this.userservice.getAdminJobList(10,this.offset) // new = 4 refer api doc
          .subscribe(bill => {
            this.billList = bill;
            console.log(this.billList);
          });
      });
  }

}
