import { Bill } from './../../../../_models/billList.interface';
import { UserService } from './../../../../_services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './../../../../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-progress',
  templateUrl: './under-progress.component.html',
  styleUrls: ['./under-progress.component.css']
})
export class UnderProgressComponent implements OnInit {
  ceUsers: User;
  qeUsers: User;
  bills: Bill;
  assignForm: FormGroup;
  assignQeForm: FormGroup;
  showDialog = false;
  showQeDialog = false;
  item: Object = { }; // object for single user
  statusCode: Number;
  constructor(private userservice: UserService, private fb: FormBuilder) {
    this.assignForm = this.fb.group({
      'UID' : ['', Validators.required],
      'Comments' : '',
      'BID': ''
    });
    this.assignQeForm = this.fb.group({
      'UID' : ['', Validators.required],
      // 'Comments' : '',
      'BID': ''
    });
  }

  ngOnInit() {
    this.userservice.getAdminBillList(8) // incomplete = 6 refer api doc
      .subscribe(bills => {
        this.bills = bills;
        console.log(this.bills);
      });
      // get list of ce
    this.userservice.getUserList('3') // 3 for ce refer to api doc
    .subscribe(users => {
      this.ceUsers = users;
      console.log(users);
    });
          // get list of qe
    this.userservice.getUserList('4') // 3 for qe refer to api doc
    .subscribe(users => {
      this.qeUsers = users;
      console.log(users);
    });
  }
      // passs current user as argument and open the popup
  openModel(item: any) {
    console.log(item);
    this.showDialog = true ; // for show dialog
    this.assignForm.setValue({
      BID: item.BID,
      UID: '',
      Comments: ''
    });
  }
    assignBillCE(item: any) {
    console.log(item);
    this.userservice.assignTaskCE(item)
      .subscribe( res => {
        console.log(res);
        alert('assign successfull');
      this.userservice.getAdminBillList(6) // incomplete = 6 refer api doc
        .subscribe(bill => {
          this.bills = bill;
          console.log(this.bills);
        });
      });
  }
    // open model for qe assign
    assignQE(item) {
        console.log(item);
        this.showQeDialog = true; // for shoe qe popup
        this.assignQeForm.setValue({
        BID: item.BID,
        UID: '',
        // Comments: ''
      });
    }
    // assign bill to QE
    assignBillQE(item: any) {
    console.log(item);
    this.userservice.assignTaskQE(item)
      .subscribe( res => {
        console.log(res);
        alert('assign successfull');
      this.userservice.getAdminBillList(6) // incomplete = 6 refer api doc
        .subscribe(bill => {
          this.bills = bill;
          console.log(this.bills);
        });
      });
  }
}
