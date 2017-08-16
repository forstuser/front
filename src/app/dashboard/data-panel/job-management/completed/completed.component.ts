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
  constructor(private userservice: UserService) {

  }

  ngOnInit() {
    this.userservice.getAdminBillList(5) // complete = 4 refer api doc
      .subscribe(bill => {
        this.billList = bill;
        console.log(this.billList);
      });
  }
}
