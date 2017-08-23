import { Inclusion } from './../../../../../_models/inclusion';
import { Exclusion } from './../../../../../_models/exclusion';
import { Category } from './../../../../../_models/category';
import { Color } from './../../../../../_models/color';
import { Brand } from './../../../../../_models/brand';
import { OnlineSeller } from './../../../../../_models/onlineSeller.interface';
import { OfflineSeller } from './../../../../../_models/offlineSeller.interface';
import { NgForm } from '@angular/forms';
import { UserService } from './../../../../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerBill } from './../../../../../_models/consumerBill.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  selectDropdown: String = null;
  consumerBill: ConsumerBill;
  offlineSellerList: OfflineSeller;
  onlineSellerList: OnlineSeller;
  brandList: Brand;
  colorList: Color;
  mainCategory: Category;
  getSubCatList: Category;
  addedOnlineSeller: number = null;
  addedOfflineSeller: any[] = [];
  billId: number;
  productMainForm: Object;
  ProductFrom: any[] = [];
  exclusionList: Exclusion;
  inclusionList: Inclusion;
  showForm: boolean = true;
  showGeneralForm: boolean = false;
  showSellerForm: boolean = false;
  showProductFormList: boolean = false;
  showProductForm: boolean = false;
  showInsuranceForm: boolean = false;
  showWarrantyForm: boolean = false;
  showAMCForm: boolean = false;
  showRepairForm: boolean = false;
  generalFormContent: any[] = [];
  sellerFormContent: any[] = [];
  productInfoFormContent: any[] = [];
  productFormContent: any[] = [];
  insuranceFormContent: any[] = [];
  warrantyFormContent: any[] = [];
  AMCFormContent: any[] = [];
  repairFormContent: any[] = [];
  FinalProductContent: any[] = [];
  productFormID: number = null;
  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService) {
    this.billId = route.snapshot.params.id;
  }


  ngOnInit() {
    // get current bill details
    this.userservice.getConsumerBillByID(this.billId)
      .subscribe(res => {
        // console.log(res);
        this.consumerBill = res;
      })
    // get offline seller list
    this.userservice.getOfflineSellerList()
      .subscribe(res => {
        // console.log(res);
        this.offlineSellerList = res;
      })
    // get online seller list
    this.userservice.getOnlineSellerList()
      .subscribe(res => {
        // console.log(res);
        this.onlineSellerList = res;
      })
    this.userservice.getBrandList()
      .subscribe(res => {
        this.brandList = res;
        // console.log(this.brandList);
      });
    this.userservice.getColorList()
      .subscribe(res => {
        this.colorList = res;
        // console.log(this.colorList);
      });
    // get list of main category
    this.userservice.getCategoryList(1) // 1 for main category refer to api doc
      .subscribe(res => {
        this.mainCategory = res;
        // console.log(this.mainCategory);
      });
  }
  // *****************************form submit functions*****************************************
  openGeneralForm() {
    this.showForm = false;
    this.showGeneralForm = true;
  }
  generalFormData(form: NgForm) {
    // console.log(form.value);
    this.generalFormContent.push(form.value);
    this.showGeneralForm = false;
    this.showSellerForm = true;
    // console.log('generel form array:', this.generalFormContent);
  }
  sellerFormData(form: NgForm) {
    // console.log(form.value);
    const data = { "OnlineSellerID": this.addedOnlineSeller, "SellerList": this.addedOfflineSeller };
    this.sellerFormContent.push(data);
    // console.log(this.sellerFormContent);
    this.showSellerForm = false;
    this.showProductFormList = true;
  }
  productInfoFormData(form: NgForm) {
    console.log(form.value);
    this.productInfoFormContent.push(form.value);
    this.showProductFormList = false;
    this.showProductForm = true;
    this.userservice.getCategoryFormByID(form.value.CatID)
      .subscribe(res => {
        // console.log(res);
        this.productMainForm = res;
      })
  }
  productFormData(form: NgForm) {
    const data = form.value;
    // console.log(form.value);
    for (var val in data) {
      this.ProductFrom.push({ 'CatFormID': val, 'value': data[val] });
    }
    // console.log(this.ProductFrom);
    this.productFormContent.push(this.ProductFrom);
    this.ProductFrom = [];
    this.showProductForm = false;
    this.showInsuranceForm = true;

  }
  insuranceFormData(form: NgForm) {
    console.log(form.value);
  }

  // ********************************seller form functions ***************************************
  // select online seller
  addOnlineSeller(data: number) {
    // this.sellerData.splice(0, this.sellerData.length)
    this.addedOnlineSeller = data;
    // console.log(this.addedOnlineSeller);
  }
  // add offline seller to table
  addOfflineSellerToList(data: number) {
    console.log(data);
    if (data != undefined) {
      if (this.addedOfflineSeller.includes(data)) {
        alert("seller already added");
      } else {
        this.addedOfflineSeller.push(data);
      }
      // console.log(this.addedOfflineSeller);
    } else {
      alert("Please Select a seller");
    }
  }
  deleteSellerFromList(id) {
    var index = this.addedOfflineSeller.indexOf(id);
    this.addedOfflineSeller.splice(index, 1);
  }
  // ********************************Product Info form functions ***************************************
  // get list after select main category
  onSelectMainCategory(id) {
    // console.log(id);
    const res = id.split(' ');
    // console.log(res[1]);
    this.userservice.getCategoryListbyRefID(res[1])
      .subscribe(res => {
        this.getSubCatList = res;
      });
  }
  // get list after select category
  onSelectCategory(id) {
    const res = id.split(' ');
    // get exclusion list by catid
    this.userservice.getExclusionsListbyCategoryID(res[1])
      .subscribe(res => {
        // console.log(res);
        this.exclusionList = res;
      })
    // get inclusion list by catid
    this.userservice.getInclusionsListbyCategoryID(res[1])
      .subscribe(res => {
        // console.log(res);
        this.inclusionList = res;
      })
  }
  // ********************************Insurance form functions ***************************************
  // select type brand or seller
  selectType(data) {
    if (data == 'brand') {
      console.log(data);
      this.selectDropdown = data;
      this.userservice.getBrandList()
        .subscribe(res => {
          this.brandList = res;
        })
    } else {
      this.selectDropdown = data;
      // get offline seller list
      this.userservice.getOfflineSellerList()
        .subscribe(res => {
          console.log(res);
          this.offlineSellerList = res;
        })
    }
  }
}