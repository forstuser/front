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
  data: object;
  billDetail: any;
  billDetailbyID: any;
  showForm: boolean = true;
  showGeneralForm: boolean = false;
  showSellerForm: boolean = false;
  showProductFormList: boolean = false;
  showProductForm: boolean = false;
  showInsuranceForm: boolean = false;
  showWarrantyForm: boolean = false;
  showAMCForm: boolean = false;
  showRepairForm: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService, private fb: FormBuilder) {
    this.billID = this.route.snapshot.parent.params['id'];
    this.userID = this.route.snapshot.queryParams['uid'];
    // console.log("user id is ",this.userID);
    // console.log("bill id is ",this.billID);
    this.assignForm = this.fb.group({
      'Comments': '',
    });
  }


  ngOnInit() {
    // get current bill details
    this.userservice.getConsumerBillByID(this.billID)
      .subscribe(res => {
        // console.log(res);
        this.consumerBill = res;
      })
  }
  // Get current bill detials
  getDetailofCurrentBill(res) {
    console.log(res);
    this.userservice.getConsumerBillDetailsByID(res.DetailID)
      .subscribe(res => {
        console.log(res);
        this.billDetailbyID = res;
        this.showGeneralForm = true;
        this.showForm = false;
      })
  }
  nextToSeller() {
    this.showGeneralForm = false;
    this.showSellerForm = true;
  }
  backToGeneral() {
    this.showForm = true;
    this.showGeneralForm = false;
  }
  // get seller details
  nextToProductInfo() {
    this.showSellerForm = false;
    this.showProductFormList = true;
  }
  backToGeneralInfo() {
    this.showGeneralForm = true;
    this.showSellerForm = false;
  }
  backToProductInfo() {
    this.showProductFormList = true;
    this.showProductForm = false;
  }
  nextToProductForm() {
    this.showProductForm = true;
    this.showProductFormList = false;
  }
  backToProductForm() {
    this.showProductForm = false;
    this.showProductFormList = true;
  }
  nextToInsuranceForm() {
    this.showInsuranceForm = true;
    this.showProductForm = false;
  }
  backToInsuranceForm() {
    this.showInsuranceForm = false;
    this.showProductForm = true;
  }
  nextToWarrantyForm() {
    this.showWarrantyForm = true;
    this.showInsuranceForm = false;
  }
  backToWarrantyForm() {
    this.showInsuranceForm = true;
    this.showWarrantyForm = false;
  }
  nextToAMCForm() {
    this.showAMCForm = true;
    this.showWarrantyForm = false;
  }
  backToAMCForm() {
    this.showWarrantyForm = true;
    this.showAMCForm = false;
  }
  nextToRepairForm() {
    this.showRepairForm = true;
    this.showWarrantyForm = false;
  }
  backToRepairForm() {
    this.showRepairForm = true;
    this.showAMCForm = false;
  }
  taskComplete() {
    this.userservice.taskCompleteQE(this.billID)
      .subscribe(res => {
        console.log(res);
      })
  }
  reAssign() {
    this.showDialog = true; // for show dialog
  }
  assignBill(item: any) {
    console.log(item);
    this.data = {
      'BID': this.billID,
      'UID': this.userID,
      'Comments': item.Comments
    }
    this.userservice.qeAssignCE(this.data)
      .subscribe(res => {
        console.log(res);
        alert("success");
        this.showDialog = false;
      })
  }
}
