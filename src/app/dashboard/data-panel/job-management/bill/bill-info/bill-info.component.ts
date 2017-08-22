import { UserService } from './../../../../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerBill } from './../../../../../_models/consumerBill.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-info',
  templateUrl: './bill-info.component.html',
  styleUrls: ['./bill-info.component.css']
})
export class BillInfoComponent implements OnInit {
  consumerBill: ConsumerBill;
  billId:number;
  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService) {
    this.billId = route.snapshot.params.id;
  }


  ngOnInit() {
        // get current bill details
        this.userservice.getConsumerBillByID(this.billId)
        .subscribe(res => {
          console.log(res);
          this.consumerBill = res;
        })
  }
  
}
