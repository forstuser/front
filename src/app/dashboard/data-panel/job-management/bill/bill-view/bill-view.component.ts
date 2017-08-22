import { UserService } from './../../../../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerBill } from './../../../../../_models/consumerBill.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.css']
})
export class BillViewComponent implements OnInit {
  consumerBill: ConsumerBill;
  billId: number;
  billDetail: any;
  productList: any;
  productForm: any;
  insuranceList: any;
  insuranceImage: any;
  insuranceInclusions: any;
  insuranceExclusions: any;
  warrantyList: any;
  warrantyImage: any;
  warrantyExclusions: any;
  warrantyInclusions: any;
  aMCList: any;
  aMCImage: any;
  aMCExclusion: any;
  aMCInclusions: any;
  repairList: any;
  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService) {
    this.billId = this.route.snapshot.parent.params['id'];
    console.log(this.billId);
  }


  ngOnInit() {
    // get current bill details
    this.userservice.getConsumerBillDetailsByID(this.billId)
      .subscribe(res => {
        console.log(res);
        this.consumerBill = res;
        this.billDetail = res.BillDetail;
        this.productList = res.ProductList;
        this.productForm = res.ProductForm;
        this.insuranceList = res.InsuranceList
        this.insuranceImage = res.InsuranceImage;
        this.insuranceInclusions = res.InsuranceInclusions;
        this.insuranceExclusions = res.InsuranceExclusions;
        this.warrantyList = res.WarrantyList;
        this.warrantyImage = res.WarrantyImage;
        this.warrantyExclusions = res.WarrantyExclusions;
        this.warrantyInclusions = res.WarrantyInclusions;
        this.aMCList = res.AMCList;
        this.aMCImage = res.AMCImage;
        this.aMCExclusion = res.AMCExclusion;
        this.aMCInclusions = res.AMCInclusions;
        this.repairList = res.RepairList;
      })
  }
  taskComplete(){
    this.userservice.taskCompleteQE(this.billId)
      .subscribe(res=>{
        console.log(res);
      })
      
  }
}
