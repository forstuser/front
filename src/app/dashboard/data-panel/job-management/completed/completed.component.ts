import { Bill } from './../../../../_models/billList.interface';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  billList: Bill;
  userType: String;
  constructor(private userservice: UserService) {
    // get userType from local Storage
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.userType = info.UserType;
    console.log("userType", this.userType)
  }

  ngOnInit() {
    // if userType is Admin/SuperAdmin get list of new bills
    if (this.userType === '1' || this.userType === '2') {
      this.userservice.getAdminBillList(5) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is CE get list of new bills
    else if (this.userType === '3' ) {  
      this.userservice.getCEBillList(5) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
    // if userType is QE get list of new bills
    else if (this.userType === '4') {
      this.userservice.getQEBillList(5) // new = 4 refer api doc
        .subscribe(bill => {
          this.billList = bill;
          console.log(this.billList);
        });
    }
  }
}
