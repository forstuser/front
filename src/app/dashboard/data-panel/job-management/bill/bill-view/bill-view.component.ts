import { appConfig } from './../../../../../app.config';
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
  imageLink: String = appConfig.imageUrl;
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
  j:number = 0;
  // special case for product form
  productFormStore:any[] = [];
  set2:any ;
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
        console.log("bill detail by id",res);
        this.billDetailbyID = res;
        this.productFormStore = res.ProductForm;
        const set = new Set();
        for(let i of res.ProductForm){
          set.add(i.ProductID)
        }
        // console.log(set);
        set.forEach(function(value, i) {
          console.log(value);
        });

        
        this.showGeneralForm = true;
        this.showForm = false;
      })
  }
  getDetailofCurrentProduct(res){
    console.log(res);
    this.userservice.consumerBillProductByID(res.ProductID)
      .subscribe(res=>{
        console.log(res);
        this.billDetailbyID = res;
        this.showInsuranceForm = true;
        this.showForm = false;
      })
  }
  nextToSeller() {
    this.j = 0;
    this.showGeneralForm = false;
    this.showSellerForm = true;
  }
  backToGeneral() {
    this.j = 0;
    this.showForm = true;
    this.showGeneralForm = false;
    this.showRepairForm = false;
  }
  backToSellorForm(){
    this.j = 0;
    this.showSellerForm = true;
    this.showProductFormList =false;
  }
  // get seller details
  nextToProductInfo() {
    this.j = 0;
    this.showSellerForm = false;
    this.showProductFormList = true;
  }
  backToGeneralInfo() {
    this.j = 0;
    this.showGeneralForm = true;
    this.showSellerForm = false;
  }
  backToProductInfo() {
    this.j = 0;
    this.showProductFormList = true;
    this.showProductForm = false;
  }
  nextToProductForm() {
    this.j = 0;
    this.showProductForm = true;
    this.showProductFormList = false;
  }
  backToProductForm() {
    this.j = 0;
    this.showProductForm = true;
    this.showInsuranceForm = false;
  }
  nextToInsuranceForm() {
    this.j = 0;
    this.showInsuranceForm = true;
    this.showProductForm = false;
  }
  backToInsuranceForm() {
    this.j = 0;
    this.showInsuranceForm = true;
    this.showWarrantyForm = false;
  }
  nextToWarrantyForm() {
    this.j = 0;
    this.showWarrantyForm = true;
    this.showInsuranceForm = false;
  }
  backToWarrantyForm() {
    this.j = 0;
    this.showWarrantyForm = true;
    this.showAMCForm = false;
  }
  nextToAMCForm() {
    this.j = 0;
    this.showAMCForm = true;
    this.showWarrantyForm = false;
  }
  backToAMCForm() {
    this.j = 0;
    this.showWarrantyForm = true;
    this.showAMCForm = false;
  }
  nextToRepairForm() {
    this.j = 0;
    this.showRepairForm = true;
    this.showAMCForm = false;
  }
  backToRepairForm() {
    this.j = 0;
    this.showRepairForm = false;
    this.showAMCForm = true;
  }
  fillProduct(req){
    this.j = req;
  }
  taskComplete() {
    this.userservice.taskCompleteQE(this.billID)
      .subscribe(res => {
        console.log(res);
        alert("Task Completed Successfully");
        this.router.navigateByUrl('/dashboard/new');
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
        this.router.navigateByUrl('/dashboard/new');
        this.showDialog = false;
      })
  }
}
