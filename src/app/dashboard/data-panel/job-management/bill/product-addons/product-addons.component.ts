import { ConsumerBill } from './../../../../../_models/consumerBill.interface';
import { NgForm } from '@angular/forms';
import { OfflineSeller } from './../../../../../_models/offlineSeller.interface';
import { Brand } from './../../../../../_models/brand';
import { DataService } from './../../../../../_services/data.service';
import { UserService } from './../../../../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-product-addons',
  templateUrl: './product-addons.component.html',
  styleUrls: ['./product-addons.component.css']
})
export class ProductAddonsComponent implements OnInit {
  billId: any;
  imageArray:any[]=[];
  productID:number;
  showInsuranceForm:boolean =true;
  showMidPanel1: boolean = false;
  showWarrantyForm: boolean = false;
  showMidPanel2: boolean = false;
  showAMCForm: boolean = false;
  showMidPanel3: boolean = false;
  showRepairForm: boolean = false;
  endPanel: boolean = false;
  categoryID:number;
  inclusionList: IMultiSelectOption[];
  exclusionList: IMultiSelectOption[];
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };
  selectDropdown: String = null;
  brandList: Brand;
  consumerBill: ConsumerBill;
  offlineSellerList: OfflineSeller;
  insuranceImageArray: any[] = [];
  warrantyImageArray: any[] = [];
  amcImageArray: any[] = [];
  repairImageArray: any[] = [];
  insuranceData:any = {};
  warrantyData:any = {};
  amcData:any = {};
  repairData:any = {};
  insuranceFormContent: any[] = [];
  warrantyFormContent: any[] = [];
  AMCFormContent: any[] = [];
  repairFormContent: any[] = [];
  FinalProductContent: any[] = [];
  finalData: any = {};
  userID:number;
  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService, private dataservice: DataService) {
    this.billId = route.snapshot.params.bid;
    this.productID = route.snapshot.params.pid;
    this.userID = route.snapshot.params.uid;
    console.log(this.route,"route");

  }


  ngOnInit() {
        this.imageArray = [];
        // get current bill details
        this.userservice.getConsumerBillByID(this.billId)
        .subscribe(res => {
          console.log('bill details', res);
          this.consumerBill = res;
        })
    this.dataservice.currentMessage
    .subscribe(res => {
      // this.message = res;
      if (this.imageArray.includes(res)) {
        console.log("Image already added");
      } else {
        this.imageArray.push(res);
      }
    })
    // get details of product
    this.userservice.consumerBillProductByID(this.productID)
      .subscribe(res=>{
        console.log(res);
        this.categoryID = res.ProductList[0].CatID;
                  // get exclusion list by catid
    this.userservice.getExclusionsListbyCategoryID(res.ProductList[0].CatID)
    .subscribe(res => {
      this.exclusionList = res.ExclusionsList;
    })
  // get inclusion list by catid
  this.userservice.getInclusionsListbyCategoryID(res.ProductList[0].CatID)
    .subscribe(res => {
      console.log(res);
      this.inclusionList = res.InclusionsList;

    })
      })

  }
    // remove image from array
    removeMainImage(data) {
      console.log(data);
      for (var i = 0; i < this.imageArray.length; i++) {
        if (this.imageArray[i] == data) {
          this.imageArray.splice(i, 1);
          break;
        }
      }
      console.log(this.imageArray);
    }

  // ********************************Insurance form functions ***************************************
  // select type brand or seller
  selectType(data) {
    if (data == 'brand') {
      console.log(data);
      this.selectDropdown = data;
      this.userservice.getBrandList2(null,null)
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
  // insurance form data on submit
  insuranceFormData(form: NgForm) {
    console.log(form.value);
    this.insuranceImageArray = this.imageArray;
    // console.log(this.insuranceImageArray);
    this.imageArray = [];
    this.insuranceData = {
      "Plan":form.value.Plan,
      "PolicyNo":form.value.PolicyNo,
      "AmountInsured":form.value.AmountInsured,
      "PremiumType":form.value.PremiumType,
      "PremiumAmount":form.value.PremiumAmount,
      "PolicyEffectiveDate":form.value.PolicyEffectiveDate,
      "PolicyExpiryDate":form.value.PolicyExpiryDate,
      "BrandID":form.value.BrandID,
      "SellerInfo":form.value.SellerInfo,
      "Inclusions":form.value.Inclusions,
      "Exclusions":form.value.Exclusions,
      "InsuranceImage":this.insuranceImageArray,
    }
    this.insuranceFormContent.push(this.insuranceData);
    this.showInsuranceForm = false;
    this.showMidPanel1 = true;
    // console.log(this.insuranceFormContent);
  }
  // skip insurance form
  skipInsurance() {
    this.showInsuranceForm = false;
    this.showWarrantyForm = true;
  }
// ********************************Warranty form functions ***************************************
warrantyFormData(form: NgForm) {
  // console.log(form.value);
  this.warrantyImageArray = this.imageArray;
  this.imageArray = [];
  this.warrantyData = {
    "WarrantyType":form.value.WarrantyType,
    "PolicyNo":form.value.PolicyNo,
    "PremiumType":form.value.PremiumType,
    "PremiumAmount":form.value.PremiumAmount,
    "PolicyEffectiveDate":form.value.PolicyEffectiveDate,
    "PolicyExpiryDate":form.value.PolicyExpiryDate,
    "BrandID":form.value.BrandID,
    "SellerInfo":form.value.SellerInfo,
    "Inclusions":form.value.Inclusions,
    "Exclusions":form.value.Exclusions,
    "WarrantyImage":this.warrantyImageArray,
  }
  this.warrantyFormContent.push(this.warrantyData);
  this.showWarrantyForm = false;
  this.showMidPanel2 = true
}
// skip warranty form
skipWarranty() {
  this.showWarrantyForm = false;
  this.showAMCForm = true;
}
// ********************************AMC form functions *********************************************
amcFormData(form: NgForm) {
  // console.log(form.value);
  this.amcImageArray = this.imageArray;
  this.imageArray = [];
  this.amcData = {
    "PolicyNo":form.value.PolicyNo,
    "PremiumType":form.value.PremiumType,
    "PremiumAmount":form.value.PremiumAmount,
    "PolicyEffectiveDate":form.value.PolicyEffectiveDate,
    "PolicyExpiryDate":form.value.PolicyExpiryDate,
    "BrandID":form.value.BrandID,
    "SellerInfo":form.value.SellerInfo,
    "Inclusions":form.value.Inclusions,
    "Exclusions":form.value.Exclusions,
    "AMCImage":this.amcImageArray,
  }
  this.AMCFormContent.push(this.amcData);
  this.showAMCForm = false;
  this.showMidPanel3 = true
}
// skip warranty form
skipAMC() {
  this.showAMCForm = false;
  this.showRepairForm = true;
}
// ********************************Repair form functions ******************************************
repairFormData(form: NgForm) {
  // console.log(form.value);
  this.repairImageArray = this.imageArray;
  this.imageArray = [];
  this.repairData = {
    "RepairValue":form.value.RepairValue,
    "Taxes":form.value.Taxes,
    "RepairInvoiceNumber":form.value.RepairInvoiceNumber,
    "RepairDate":form.value.RepairDate,
    "BrandID":form.value.BrandID,
    "SellerInfo":form.value.SellerInfo,
    "RepairImage":this.repairImageArray
  }
  this.repairFormContent.push(this.repairData);
  this.showRepairForm = false;
  this.endPanel = true
}
// skip warranty form
skipRepair() {
  this.showRepairForm = false;
  this.endPanel = true;
}
// ********************************Mid Panel functions ********************************************
addMoreInsurance() {
  this.showInsuranceForm = true;
  this.showMidPanel1 = false;
}
addWarranty() {
  this.showMidPanel1 = false;
  this.showWarrantyForm = true;
}
addMoreWarranty() {
  this.showWarrantyForm = true;
  this.showMidPanel2 = false;
}
addAMC() {
  this.showMidPanel2 = false;
  this.showAMCForm = true;
}
addMoreAMC() {
  this.showAMCForm = true;
  this.showMidPanel3 = false;
}
addRepair() {
  this.showMidPanel3 = false;
  this.showRepairForm = true;
}
addMoreRepair() {
  this.showRepairForm = true;
  this.endPanel = false;
}
createBill() {
  console.log(' insuranceFormContent:', this.insuranceFormContent);
  console.log(' warrantyFormContetn:', this.warrantyFormContent);
  console.log('AMCFormContent :', this.AMCFormContent);
  console.log('repairFormContent :', this.repairFormContent);
  console.log('FinalProductContent :', this.FinalProductContent);
  this.endPanel = false;
  // this.showForm = true;
  // make final object
  this.finalData = {
    "BillID": this.billId,
    "UserID": this.userID,
    "ProductID": this.productID,
    "InsuranceList": this.insuranceFormContent,
    "WarrantyList": this.warrantyFormContent,
    "AMCList": this.AMCFormContent,
    "RepairList": this.repairFormContent
  }
  this.insuranceFormContent = [];
  this.warrantyFormContent = [];
  this.AMCFormContent = [];
  this.repairFormContent = []
  console.log(this.finalData);
  this.userservice.addConsumerProduct(this.finalData)
    .subscribe(res => {
      console.log(res);
      this.finalData = [];
      // get current bill details
      alert("Added Successfully");
      this.router.navigate(['dashboard/new/bill/', this.billId]);

    })
}
}
