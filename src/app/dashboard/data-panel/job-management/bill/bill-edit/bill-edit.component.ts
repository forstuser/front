import { DataService } from './../../../../../_services/data.service';
import { Inclusion } from './../../../../../_models/inclusion';
import { Exclusion, ExclusionsList } from './../../../../../_models/exclusion';
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
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.css']
})
export class BillEditComponent implements OnInit {
  imageArray:any[]=[];
  billImageArray: any[] = [];
  insuranceImageArray: any[] = [];
  warrantyImageArray: any[] = [];
  amcImageArray: any[] = [];
  repairImageArray: any[] = [];
  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };
  search: any = {};
  optionsModel: number[];
  inclusionList: IMultiSelectOption[];
  exclusionList: IMultiSelectOption[];
  selectDropdown: String = null;
  consumerBill: ConsumerBill;
  consumerBillDetail: any;
  offlineSellerList: OfflineSeller;
  onlineSellerList: OnlineSeller;
  brandList: Brand;
  colorList: Color;
  mainCategory: Category;
  getSubCatList: Category;
  getSubCatList2: Category;
  addedOnlineSeller: number = null;
  addedOfflineSeller: any[] = [];
  billId: number;
  productMainForm: Object;
  ProductFrom: any[] = [];
  showGeneralForm: boolean = true;
  showSellerForm: boolean = false;
  showProductFormList: boolean = false;
  showProductForm: boolean = false;
  showInsuranceForm: boolean = false;
  showMidPanel1: boolean = false;
  showWarrantyForm: boolean = false;
  showMidPanel2: boolean = false;
  showAMCForm: boolean = false;
  showMidPanel3: boolean = false;
  endPanel: boolean = false;
  searchPanel: boolean = false;
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
  finalData: any = {};
  productData: any = {};
  // Fill product info form
  ProductName:string;
  Value:string;
  Taxes:string;
  Color:number;
  Brand:number;
  MainCategory:number;
  Category:number;
  Tag:string;
  // fill product form
  Drops:number;
  //fill insurance form
  Plan:string;
  PolicyNo:string;
  AmountInsured:string;
  PremiumType:string;
  PremiumAmount:string;
  PolicyEffectiveDate:string;
  PolicyExpiryDate:string;
  SellerType:number;
  SellerInfo:number;
  BrandID:number;
  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService,private dataservice:DataService) {
    this.billId = route.snapshot.params.id;
    console.log(this.billId);
  }


  ngOnInit() {
    this.dataservice.currentMessage
    .subscribe(res => {
      // this.message = res;
      if (this.imageArray.includes(res)) {
        alert("Image already added");
      } else {
        this.imageArray.push(res);
      }
    })
    // get current bill details
    this.userservice.getConsumerBillDetailsByID(this.billId)
      .subscribe(res => {
        console.log(res);
        this.consumerBillDetail = res;
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
    this.userservice.getBrandList2(null,null)
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
  onChange() {
    console.log(this.optionsModel);
  }
  // *****************************General Form functions*********************************************
  generalFormData(form: NgForm) {
    // console.log(form.value);
        // console.log(form.value);
    this.billImageArray = this.imageArray;
    this.billImageArray.splice(0,1);
    console.log(this.billImageArray);
    this.imageArray = [];
    this.generalFormContent.push(form.value);
    this.showGeneralForm = false;
    this.showSellerForm = true;
    // console.log('generel form array:', this.generalFormContent);
  }
  editPreBill(data) {
    console.log(data);
  }
  // ********************************seller form functions ******************************************
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
  // seller form data on submit
  sellerFormData(form: NgForm) {
    // console.log(form.value);
    const data = { "OnlineSellerID": this.addedOnlineSeller, "SellerList": this.addedOfflineSeller };
    this.sellerFormContent.push(data);
    // console.log(this.sellerFormContent);
    this.showSellerForm = false;
    this.showProductFormList = true;
  }
  // ********************************Product Info form functions ************************************
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
        this.exclusionList = res.ExclusionsList;
      })
    // get inclusion list by catid
    this.userservice.getInclusionsListbyCategoryID(res[1])
      .subscribe(res => {
        console.log(res);
        this.inclusionList = res.InclusionsList;

      })
  }
  // product info data on submit
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
  fillProductInfoForm(index){
    this.ProductName = this.consumerBillDetail.ProductList[index].ProductName;
    this.Value = this.consumerBillDetail.ProductList[index].Value;
    this.Taxes = this.consumerBillDetail.ProductList[index].Taxes;
    this.Color = this.consumerBillDetail.ProductList[index].ColorID;
    this.Brand = this.consumerBillDetail.ProductList[index].BrandID;
    this.MainCategory = this.consumerBillDetail.ProductList[index].MasterCatID;
    this.userservice.getCategoryListbyRefID(this.MainCategory)
    .subscribe(res => {
      this.getSubCatList = res;
      console.log(res);
    });
    this.Category = this.consumerBillDetail.ProductList[index].CatID;
    this.Tag = this.consumerBillDetail.ProductList[index].Tag;
  }
  // ********************************Product form functions *****************************************

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
  // fill Product form
  fillProductForm(index){
    console.log(this.consumerBillDetail.ProductForm[index]);
    for(let i=0;i<this.consumerBillDetail.ProductForm.length;i++){
      this['Drops'+i] = this.consumerBillDetail.ProductForm[i].value;
    }
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
    // console.log(form.value);
    this.insuranceFormContent.push(form.value);
    this.showInsuranceForm = false;
    this.showMidPanel1 = true;
    console.log(this.insuranceFormContent);
  }
  // skip insurance form
  skipInsurance() {
    this.showInsuranceForm = false;
    this.showWarrantyForm = true;
  }
  // fill Insurance Form
  fillInsuranceForm(index){
    console.log(index);
    this.Plan = this.consumerBillDetail.InsuranceList[index].Plan;
    this.PolicyNo = this.consumerBillDetail.InsuranceList[index].PolicyNo;
    this.AmountInsured = this.consumerBillDetail.InsuranceList[index].AmountInsured;
    this.PremiumType = this.consumerBillDetail.InsuranceList[index].PremiumType;
    this.PremiumAmount = this.consumerBillDetail.InsuranceList[index].PremiumAmount;
    this.PolicyEffectiveDate = this.consumerBillDetail.InsuranceList[index].PolicyEffectiveDate;
    this.PolicyExpiryDate = this.consumerBillDetail.InsuranceList[index].PolicyExpiryDate;
    this.SellerType = this.consumerBillDetail.InsuranceList[index].SellerType;
    this.BrandID = this.consumerBillDetail.InsuranceList[index].BrandID;
    this.SellerInfo = this.consumerBillDetail.InsuranceList[index].SellerInfo;

  }
  // ********************************Warranty form functions ***************************************
  warrantyFormData(form: NgForm) {
    // console.log(form.value);
    this.warrantyFormContent.push(form.value);
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
    console.log(form.value);
    this.AMCFormContent.push(form.value);
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
    console.log(form.value);
    this.repairFormContent.push(form.value);
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
  // ********************************Search Panel functions ***************************************
  serachProduct(form: NgForm) {
    console.log(form.value)
    this.search = {
      "ConsumerID": this.consumerBill.UserID,
      "Search": form.value.Search
    }
    this.userservice.serachProduct(this.search)
      .subscribe(res => {
        console.log(res);
      })

  }

  // ********************************Bill functions ***********************************************
  addMoreProduct() {
    // make object for product array
    this.productData = {
      "ProductName": this.productInfoFormContent[0].ProductName,
      "Value": this.productInfoFormContent[0].Value,
      "Taxes": this.productInfoFormContent[0].Taxes,
      "Tag": this.productInfoFormContent[0].Tag,
      "BrandID": this.productInfoFormContent[0].BrandID,
      "ColorID": this.productInfoFormContent[0].ColorID,
      "MasterCatID": this.productInfoFormContent[0].MasterCatID,
      "CatID": this.productInfoFormContent[0].CatID,
      "ProductForm": this.productFormContent[0],
      "InsuranceList": this.insuranceFormContent,
      "WarrantyList": this.warrantyFormContent,
      "AMCList": this.AMCFormContent,
      "RepairList": this.repairFormContent
    }
    this.FinalProductContent.push(this.productData);
    this.productInfoFormContent = [];
    this.productFormContent = [];
    this.insuranceFormContent = [];
    this.warrantyFormContent = [];
    this.AMCFormContent = [];
    this.repairFormContent = []
    this.endPanel = false;
    this.showProductFormList = true;
  }
  createBill() {
    console.log('generalFormContent :', this.generalFormContent);
    console.log(' sellerFormContent:', this.sellerFormContent);
    console.log('productInfoFormContent :', this.productInfoFormContent);
    console.log('productFormContent :', this.productFormContent);
    console.log(' insuranceFormContent:', this.insuranceFormContent);
    console.log(' warrantyFormContetn:', this.warrantyFormContent);
    console.log('AMCFormContent :', this.AMCFormContent);
    console.log('repairFormContent :', this.repairFormContent);
    console.log('FinalProductContent :', this.FinalProductContent);
    this.addMoreProduct();
    this.endPanel = false;
    this.showProductFormList = false;
    // make final object
    this.finalData = {
      "BillID": this.consumerBill.BillID,
      "UserID": this.consumerBill.UserID,
      "InvoiceNo": this.generalFormContent[0].InvoiceNo,
      "Name": this.generalFormContent[0].Name,
      "EmailID": this.generalFormContent[0].EmailID,
      "PhoneNo": this.generalFormContent[0].PhoneNo,
      "DocID": 1,
      "TotalValue": this.generalFormContent[0].TotalValue,
      "Taxes": this.generalFormContent[0].Taxes,
      "DateofPurchase": this.generalFormContent[0].DateofPurchase,
      "BillImage": [1, 2], // it should be change
      "OnlineSellerID": this.sellerFormContent[0].OnlineSellerID,
      "SellerList": this.sellerFormContent[0].SellerList,
      "ProductList": this.FinalProductContent
    }
    console.log(this.finalData);
    this.userservice.createBill(this.finalData)
      .subscribe(res => {
        console.log(res);
        // get current bill details
        this.userservice.getConsumerBillByID(this.billId)
          .subscribe(res => {
            console.log(res);
            this.consumerBill = res;
          })
      })
  }
}
