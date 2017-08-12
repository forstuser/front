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
  users: User;
  billList: Bill;
  assignForm: FormGroup;
  showDialog = false;
  item: Object = { }; // object for single user
  statusCode: Number;
  constructor(private userservice: UserService, private fb: FormBuilder) {
    this.assignForm = this.fb.group({
      'UID' : ['', Validators.required],
      'Comments' : '',
      'BID': ''
    });
  }

  ngOnInit() {
    this.userservice.getBillList(8) // incomplete = 6 refer api doc
      .subscribe(bills => {
        this.billList = bills;
        console.log(this.billList);
      });
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
    this.showDialog = true ; // for show dialog
    this.assignForm.setValue({
      BID: item.BID,
      UID: '',
      Comments: ''
    });
  }
    assignBill(item: any) {
    console.log(item);
    this.userservice.assignTask(item)
      .subscribe( res => {
        console.log(res);
        alert('assign successfull');
      this.userservice.getBillList(6) // incomplete = 6 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
      });
  }

}
