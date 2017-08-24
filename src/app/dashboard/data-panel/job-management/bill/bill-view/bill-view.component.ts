import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
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
  showDialog = false;
  assignForm: FormGroup;
  consumerBill: ConsumerBill;
  billID: number;
  userID: number;
  data:object;
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
  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService,private fb: FormBuilder) {
    this.billID = this.route.snapshot.parent.params['id'];
    this.userID = this.route.snapshot.queryParams['uid'];
    console.log(this.userID);
    console.log(this.billID);
    this.assignForm = this.fb.group({
      'Comments': '',
    });
  }


  ngOnInit() {
    // get current bill details
    this.userservice.getConsumerBillDetailsByID(this.billID)
      .subscribe(res => {
        // console.log(res);
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
    this.userservice.taskCompleteQE(this.billID)
      .subscribe(res=>{
        console.log(res);
      })  
  }
  reAssign(){
    this.showDialog = true; // for show dialog
  }
  assignBill(item: any) {
    console.log(item);
    this.data = {
      'BID':this.billID,
      'UID':this.userID,
      'Comments':item.Comments
    }
    this.userservice.qeAssignCE(this.data)
      .subscribe(res=>{
        console.log(res);
        alert("success");
        this.showDialog =false;
      })
  }
}
