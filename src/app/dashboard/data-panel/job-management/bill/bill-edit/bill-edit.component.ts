import { appConfig } from './../../../../../app.config';
import { FunctionService } from './../../../../../_services/function.service';
import { DataService } from './../../../../../_services/data.service';
import { BillComponent } from './../bill.component';
import { SearchList } from './../../../../../_models/search.interface';
import { Inclusion } from './../../../../../_models/inclusion';
import { Exclusion, ExclusionsList } from './../../../../../_models/exclusion';
import { Category } from './../../../../../_models/category';
import { Color } from './../../../../../_models/color';
import { Brand } from './../../../../../_models/brand';
import { OnlineSeller } from './../../../../../_models/onlineSeller.interface';
import { OfflineSeller } from './../../../../../_models/offlineSeller.interface';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from './../../../../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerBill } from './../../../../../_models/consumerBill.interface';
import { Component, OnInit, Inject } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { IMyDpOptions } from 'mydatepicker';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.css']
})
export class BillEditComponent implements OnInit {
  j: number = 0;
  imageLink: String = appConfig.imageUrl;
  imageArray: any[] = [];
  billImageArray: any[] = [];
  insuranceImageArray: any[] = [];
  warrantyImageArray: any[] = [];
  amcImageArray: any[] = [];
  repairImageArray: any[] = [];
  message: string;
  // Settings configuration
  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  private myDatePickerOptions1: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };
  search: any = {};
  searchList: SearchList;
  insuranceOptionExclusion: number[];
  insuranceOptionInclusion: number[];
  warrantyOptionExclusion: number[];
  warrantyOptionInclusion: number[];
  AMCOptionExclusion: number[];
  AMCOptionInclusion: number[];
  inclusionList: IMultiSelectOption[];
  exclusionList: IMultiSelectOption[];
  selectInsuranceDropdown: String = null;
  selectWarrantyDropdown: String = null;
  selectAMCDropdown: String = null;
  selectRepairDropdown: String = null;
  consumerBill: ConsumerBill;
  offlineSellerList: OfflineSeller;
  onlineSellerList: OnlineSeller;
  brandList: Brand;
  colorList: Color;
  mainCategory: Category;
  getSubCatList: Category;
  addedOnlineSeller: number = null;
  addedOfflineSeller: any[] = [];
  billId: any;
  billDetailId:number;
  productMainForm: Object;
  ProductFrom: any[] = [];
  showForm: boolean = true;
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
  insuranceData: any = {};
  warrantyData: any = {};
  amcData: any = {};
  repairData: any = {};
  nameOfImage: string;
  userID: string;
  maxLength = '12';
  PleaseSelectMainCategory: boolean = false;
  PleaseSelectCategory: boolean = false;
  // EnterName: boolean = false;
  billImage: boolean = false;
  discardImage: object;
  imageID: number;
  public offlineSellerForm: FormGroup;
  items: OfflineSeller[] = [];
  cat: Category;
  dateBind: Object = {};
  insuranceDateBindEffective: Object = {};
  insuranceDateBindExpiry: Object = {};
  warrantyDateBindEffective: Object = {};
  warrantyDateBindExpiry: Object = {};
  amcDateBindEffective: Object = {};
  amcDateBindExpiry: Object = {};
  repairDateBind: Object = {};
  count: number = 1;
  consumerBillDetail: any;
  productFormFeeder: any;
  // test:any[]=[];
  test: any[] = [];
  constructor(private _location: Location, private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private userservice: UserService, private dataservice: DataService, private functionService: FunctionService) {
    this.billDetailId = route.snapshot.params.id;
    const parsedUrl = this.router.parseUrl(this.router.url);
    this.billId = parsedUrl.root.children.primary.segments[3].path;

    console.log(parsedUrl,"p");  
    this.selectImage();
  }


  ngOnInit() {
    // get current bill details

    this.userservice.getConsumerBillDetailsByID(this.billDetailId)
      .subscribe(res => {
        console.log("bill details for edit", res);
        this.consumerBillDetail = res; // all array is here
        // console.log("date bind", this.dateBind)
        this.addedOfflineSeller = this.consumerBillDetail.BillOfflineSeller;
        this.imageArray = [];
        this.productFormFeeder = this.consumerBillDetail.ProductForm;
        this.fillProduct(0);
        //   for(let i of this.productFormFeeder[0].forms){
        //     this.test.push(i.value);
        //     // console.log("test value",this.test)
        //  }
      })
    const today = new Date();
    this.myDatePickerOptions1.disableSince = { year: today.getFullYear(), month: (today.getMonth() + 1), day: (today.getDate() + 1) }

    // get current bill details
    console.log("this.bill id",this.billId)
    this.userservice.getJobByID(this.billId)
      .subscribe(res => {
        console.log('bill details 2', res);
        this.consumerBill = res;
        this.userID = res.UserID;
      })
    // get offline seller list
    this.userservice.getOfflineSellerList()
      .subscribe(res => {
        // console.log("Offline Seller List", res);
        this.offlineSellerList = res;
      })
    // get online seller list
    this.userservice.getOnlineSellerList()
      .subscribe(res => {
        // console.log(res);
        this.onlineSellerList = res;
      })
    this.userservice.getBrandList2(null, null)
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
    // get list of category
    this.userservice.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(res => {
        // console.log(res,"category")
        this.cat = res;
        // console.log('category is ' + res);
      });
    this.offlineSellerForm = this.fb.group({
      'Name': [null, Validators.required],
      'OwnerName': '',
      'GstinNo': '',
      'PanNo': '',
      'RegNo': '',
      'ServiceProvider': '',
      'Onboarded': '',
      'HouseNo': '',
      'Block': '',
      'Street': '',
      'Sector': '',
      'City': [null, Validators.required],
      'State': [null, Validators.required],
      'PinCode': '',
      'NearBy': '',
      'Lattitude': '',
      'Longitude': '',
      Details: this.fb.array([this.createItem(),])
    });
  }
  createItem() {
    return this.fb.group({
      'CategoryID': '',
      'DetailTypeID': '',
      'DisplayName': '',
      'Details': ''
    });
  }
  addItem() {
    const control = <FormArray>this.offlineSellerForm.controls['Details'];
    control.push(this.createItem());
  }
  removeDetails(i: number) {
    const control = <FormArray>this.offlineSellerForm.controls['Details'];
    control.removeAt(i);
  }
  createOfflineSeller(data: OfflineSeller) {
    this.userservice.createOfflineSeller(data)
      .subscribe(res => {
        console.log(res);
        alert('Offline Seller added succesfully');
        this.offlineSellerForm.reset();
        // update offline seller list
        this.userservice.getOfflineSellerList()
          .subscribe(res => {
            this.offlineSellerList = res;
          })
      });
  }
  // function for avoid only space submit
  avoidSpace(e) {
    this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e)
  }
  onChange() {
    // console.log(this.optionsModel);
  }
  selectImage() {
    //  for discard image
    this.dataservice.currentMessage
      .subscribe(res => {
        console.log(res, "response through service")
        this.imageID = res.split('bills/').pop().split('/files').shift();
        if (this.imageArray.includes(this.imageID)) {
          console.log("Image already added");
        } else {
          this.imageArray.push(this.imageID);
          console.log('image array is', this.imageArray)
        }

      })
  }
  // *****************************General Form functions*********************************************
  openGeneralForm() {
    this.generalFormContent = [];
    this.sellerFormContent = [];
    this.productInfoFormContent = [];
    this.productFormContent = [];
    this.insuranceFormContent = [];
    this.warrantyFormContent = [];
    this.AMCFormContent = [];
    this.repairFormContent = [];
    this.FinalProductContent = [];
    this.showForm = false;
    this.showGeneralForm = true;
    this.imageArray = [];
  }
  generalFormData(form: NgForm) {
    // console.log(form.value);
    // console.log(this.imageArray.length,"image");
    // if (form.value.Name.length == 0) {
    //   this.EnterName = true;
    // }
    // else 
    if (this.imageArray.length == 0) {
      this.billImage = true;
    }
    else {
      const form_data = form.value;
      console.log("form data", form.value);
      form_data['DateofPurchase'] = form.value.DateofPurchase.formatted;
      console.log(form_data);
      this.billImageArray = this.imageArray;
      // this.billImageArray.splice(0, 1);
      console.log('image after push', this.billImageArray);
      this.imageArray = [];
      this.generalFormContent.push(form_data);
      this.showGeneralForm = false;
      this.showSellerForm = true;
    }
    // console.log('generel form array:', this.generalFormContent);
  }
  // function for complete job
  completeJob() {
    // this.userservice.completeJob(this.billId)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert("Job Completed");
    //     this.router.navigateByUrl('/dashboard/new');
    //     // redirect to previous page
    //   })
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
    console.log('after remove', this.imageArray);
  }
  editPreBill(data) {
    console.log(data);
  }
  // ********************************seller form functions ******************************************
  // select online seller
  addOnlineSeller(data) {
    console.log(data);
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
    console.log(this.addedOfflineSeller);
  }
  // seller form data on submit
  sellerFormData(form: NgForm) {
    // console.log(form.value);
    this.sellerFormContent = [];
    const data = { "OnlineSellerID": this.addedOnlineSeller, "SellerList": this.addedOfflineSeller };
    this.sellerFormContent.push(data);
    // console.log(this.sellerFormContent);
    this.showSellerForm = false;
    this.showProductFormList = true;
  }
  // Add new Seller function
  addNewOfflineSeller() {

  }
  // ********************************Product Info form functions ************************************
  // get list after select main category
  onSelectMainCategory(id) {
    // console.log(id,"on select main");
    const res = id.split(' ');
    console.log(res[1]);
    this.userservice.getCategoryListbyRefID(res[1])
      .subscribe(res => {
        console.log(res);
        this.cat = res;
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
    if (form.value.MasterCatID === "") {
      this.PleaseSelectMainCategory = true;
    } else if (form.value.CatID === "") {
      this.PleaseSelectCategory = true;
    } else {

      console.log(form.value);
      this.productInfoFormContent.push(form.value);
      this.showProductFormList = false;
      this.showProductForm = true;
      this.userservice.getCategoryFormByID(form.value.CatID)
        .subscribe(res => {
          console.log(res, "category form");
          this.productMainForm = res;
        })
    }
  }
  // ********************************Product form functions *****************************************

  productFormData(form: NgForm) {
    this.productFormContent = [];
    const data = form.value;
    console.log(form.value,"product form data");
    for (var val in data) {
      this.ProductFrom.push({ 'CatFormID': val, 'value': data[val] });
    }
    // console.log(this.ProductFrom);
    this.productFormContent.push(this.ProductFrom);
    console.log("Product Form Data", this.productFormContent);
    this.ProductFrom = [];
    this.showProductForm = false;
    this.showInsuranceForm = true;

  }

  // ********************************Insurance form functions ***************************************
  // select type brand or seller
  selectInsuranceType(data) {
    if (data == '1') {
      console.log(data);
      this.selectInsuranceDropdown = data;
      this.userservice.getBrandList2(null, null)
        .subscribe(res => {
          this.brandList = res;
        })
    } else {
      this.selectInsuranceDropdown = data;
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
    console.log("insurance Form data", form.value);
    this.insuranceImageArray = this.imageArray;
    // console.log(this.insuranceImageArray);
    this.imageArray = [];
    this.insuranceData = {
      "InsuranceID": form.value.InsuranceID,
      "Plan": form.value.Plan,
      "PolicyNo": form.value.PolicyNo,
      "AmountInsured": form.value.AmountInsured,
      "PremiumType": form.value.PremiumType,
      "PremiumAmount": form.value.PremiumAmount,
      "PolicyEffectiveDate": form.value.PolicyEffectiveDate.formatted,
      "PolicyExpiryDate": form.value.PolicyExpiryDate.formatted,
      "BrandID": form.value.BrandID,
      "SellerInfo": form.value.SellerInfo,
      "Inclusions": form.value.Inclusions,
      "Exclusions": form.value.Exclusions,
      "InsuranceImage": this.insuranceImageArray,
    }
    console.log(this.insuranceData);
    this.insuranceFormContent.push(this.insuranceData);
    this.insuranceOptionExclusion = [];
    this.insuranceOptionInclusion = [];
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
  // select type brand or seller
  selectWarrantyType(data) {
    console.log(data, "warranty Type")
    if (data == '1') {
      console.log(data);
      this.selectWarrantyDropdown = data;
      this.userservice.getBrandList2(null, null)
        .subscribe(res => {
          this.brandList = res;
        })
    } else {
      this.selectWarrantyDropdown = data;
      // get offline seller list
      this.userservice.getOfflineSellerList()
        .subscribe(res => {
          // console.log(res);
          this.offlineSellerList = res;
        })
    }
  }
  warrantyFormData(form: NgForm) {
    // console.log(form.value);
    this.warrantyImageArray = this.imageArray;
    this.imageArray = [];
    this.warrantyData = {
      "WarrantyID": form.value.WarrantyID,
      "WarrantyType": form.value.WarrantyType,
      "PolicyNo": form.value.PolicyNo,
      "PremiumType": form.value.PremiumType,
      "PremiumAmount": form.value.PremiumAmount,
      "PolicyEffectiveDate": form.value.PolicyEffectiveDate.formatted,
      "PolicyExpiryDate": form.value.PolicyExpiryDate.formatted,
      "BrandID": form.value.BrandID,
      "SellerInfo": form.value.SellerInfo,
      "Inclusions": form.value.Inclusions,
      "Exclusions": form.value.Exclusions,
      "WarrantyImage": this.warrantyImageArray,
    }
    this.warrantyFormContent.push(this.warrantyData);
    this.warrantyOptionExclusion = [];
    this.warrantyOptionInclusion = [];
    this.showWarrantyForm = false;
    this.showMidPanel2 = true
  }
  // skip warranty form
  skipWarranty() {
    this.showWarrantyForm = false;
    this.showAMCForm = true;
  }
  // ********************************AMC form functions *********************************************
  // select type brand or seller
  selectAMCType(data) {
    if (data == '1') {
      console.log(data);
      this.selectAMCDropdown = data;
      this.userservice.getBrandList2(null, null)
        .subscribe(res => {
          this.brandList = res;
        })
    } else {
      this.selectAMCDropdown = data;
      // get offline seller list
      this.userservice.getOfflineSellerList()
        .subscribe(res => {
          console.log(res);
          this.offlineSellerList = res;
        })
    }
  }
  amcFormData(form: NgForm) {
    // console.log(form.value);
    this.amcImageArray = this.imageArray;
    this.imageArray = [];
    this.amcData = {
      "AmcID": form.value.AmcID,
      "PolicyNo": form.value.PolicyNo,
      "PremiumType": form.value.PremiumType,
      "PremiumAmount": form.value.PremiumAmount,
      "PolicyEffectiveDate": form.value.PolicyEffectiveDate.formatted,
      "PolicyExpiryDate": form.value.PolicyExpiryDate.formatted,
      "BrandID": form.value.BrandID,
      "SellerInfo": form.value.SellerInfo,
      "Inclusions": form.value.Inclusions,
      "Exclusions": form.value.Exclusions,
      "AMCImage": this.amcImageArray,
    }
    this.AMCFormContent.push(this.amcData);
    this.AMCOptionExclusion = [];
    this.AMCOptionInclusion = [];
    this.showAMCForm = false;
    this.showMidPanel3 = true
  }
  // skip warranty form
  skipAMC() {
    this.showAMCForm = false;
    this.showRepairForm = true;
  }
  // ********************************Repair form functions ******************************************
  // select type brand or seller
  selectRepairType(data) {
    if (data == '1') {
      console.log(data);
      this.selectRepairDropdown = data;
      this.userservice.getBrandList2(null, null)
        .subscribe(res => {
          this.brandList = res;
        })
    } else {
      this.selectRepairDropdown = data;
      // get offline seller list
      this.userservice.getOfflineSellerList()
        .subscribe(res => {
          console.log(res);
          this.offlineSellerList = res;
        })
    }
  }
  repairFormData(form: NgForm) {
    // console.log(form.value);
    this.repairImageArray = this.imageArray;
    this.imageArray = [];
    this.repairData = {
      "RepairID": form.value.RepairID,
      "RepairValue": form.value.RepairValue,
      "Taxes": form.value.Taxes,
      "RepairInvoiceNumber": form.value.RepairInvoiceNumber,
      "RepairDate": form.value.RepairDate.formatted,
      "BrandID": form.value.BrandID,
      "SellerInfo": form.value.SellerInfo,
      "RepairImage": this.repairImageArray
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
  // ********************************Search Panel functions ***************************************
  openSearchPanel() {
    this.showForm = false;
    this.searchPanel = true;
  }
  serachProduct(form: NgForm) {
    console.log(form.value)
    this.search = {
      "ConsumerID": this.consumerBill.UserID,
      "Search": form.value.Search
    }
    this.userservice.serachProduct(this.search)
      .subscribe(res => {
        this.searchList = res;
        console.log(res);
        if (res.statusCode == 105) {
          alert("Data not Available")
        }
      })

  }
  addons(data) {
    console.log(data);
  }

  // ********************************Bill functions ***********************************************
  addMoreProduct() {
    // make object for product array
    this.productData = {
      "ProductID": this.productInfoFormContent[0].ProductID,
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
    this.consumerBillDetail.ProductList[0].ProductID =""; // for new product
    this.FinalProductContent.push(this.productData);
    this.consumerBillDetail.ProductList[0].ProductID = null;
    this.productInfoFormContent = [];
    this.productFormContent = [];
    this.insuranceFormContent = [];
    this.warrantyFormContent = [];
    this.AMCFormContent = [];
    this.repairFormContent = []
    this.insuranceOptionExclusion = [];
    this.insuranceOptionInclusion = [];
    this.warrantyOptionExclusion = [];
    this.warrantyOptionInclusion = [];
    this.AMCOptionExclusion = [];
    this.AMCOptionInclusion = [];
    this.endPanel = false;
    this.showProductFormList = true;

  }
  createBill() {
    // console.log('generalFormContent :', this.generalFormContent);
    // console.log(' sellerFormContent:', this.sellerFormContent);
    // console.log('productInfoFormContent :', this.productInfoFormContent);
    // console.log('productFormContent :', this.productFormContent);
    // console.log(' insuranceFormContent:', this.insuranceFormContent);
    // console.log(' warrantyFormContetn:', this.warrantyFormContent);
    // console.log('AMCFormContent :', this.AMCFormContent);
    // console.log('repairFormContent :', this.repairFormContent);
    // console.log('FinalProductContent :', this.FinalProductContent);
    this.addMoreProduct();
    this.endPanel = false;
    this.showProductFormList = false;
    // this.showGeneralForm = true;
    // make final object
    this.finalData = {
      "DetailID": this.consumerBillDetail.BillDetail[0].DetailID,
      "UserID": this.consumerBill.UserID,
      "InvoiceNo": this.generalFormContent[0].InvoiceNo,
      "Name": this.generalFormContent[0].Name,
      "EmailID": this.generalFormContent[0].EmailID,
      "PhoneNo": this.generalFormContent[0].PhoneNo,
      // "DocID": 1,
      "TotalValue": this.generalFormContent[0].TotalValue,
      "Taxes": this.generalFormContent[0].Taxes,
      "DateofPurchase": this.generalFormContent[0].DateofPurchase,
      "BillImage": this.billImageArray,
      "OnlineSellerID": this.sellerFormContent[0].OnlineSellerID,
      "SellerList": this.sellerFormContent[0].SellerList,
      "ProductList": this.FinalProductContent
    }
    this.productInfoFormContent = [];
    this.productFormContent = [];
    this.insuranceFormContent = [];
    this.warrantyFormContent = [];
    this.AMCFormContent = [];
    this.repairFormContent = []
    console.log(this.finalData);
    this.userservice.editBill(this.finalData)
      .subscribe(res => {
        console.log(res);
        this.finalData = [];
        // get current bill details
        alert("Bill Updated Successfully");
        this._location.back();
        this.userservice.getJobByID(this.billId)
          .subscribe(res => {
            console.log(res);
            this.consumerBill = res;
          })
      })
  }

  /*****************************Validation and Back Functions***************************************/
  backtoShowForm() {
    // this.showForm = true;
    this._location.back();
    // this.showGeneralForm = false;
  }
  backtoGeneralForm2() {
    this.searchPanel = false;
    this.showForm = true;
  }
  backtoShowGeneralForm() {
    this.showGeneralForm = true;
    this.showSellerForm = false;
  }
  backtoShowSellerForm() {
    this.showProductFormList = false;
    this.showSellerForm = true;
  }
  backtoShowProductFormList() {
    this.showProductForm = false;
    this.showProductFormList = true;
  }
  backtoShowProductForm() {
    // this.productFormContent = [];
    this.showInsuranceForm = false;
    this.showProductForm = true;
  }
  backtoShowInsuranceForm() {
    // this.insuranceFormContent = [];
    this.showInsuranceForm = true;
    this.showWarrantyForm = false;
    this.showMidPanel1 = false;
  }
  backtoShowWarrantyForm() {
    // this.warrantyFormContent = [];
    this.showAMCForm = false;
    this.showWarrantyForm = true;
    this.showMidPanel2 = false;
  }
  backtoShowAMCForm() {
    // this.AMCFormContent = [];
    this.showAMCForm = true;
    this.showRepairForm = false;
    this.showMidPanel3 = false;
  }
  backtoShowRepairForm() {
    // this.repairFormContent = [];
    this.showRepairForm = true;
    this.endPanel = false;
  }
  fillProduct(req) {
    this.j = req;
    this.test = [];
    for (let i of this.productFormFeeder[this.j].forms) {
      this.test.push(i.value);
      // console.log("test value",this.test)
    }
    //  bind dates
    const purchaseDate = this.consumerBillDetail.BillDetail[this.j].PurchaseDate;
    const d = new Date(purchaseDate)
    this.dateBind = { date: { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() } };
    // insurance
    const InsurancePolicyEffectiveDate = this.consumerBillDetail.InsuranceList[this.j].PolicyEffectiveDate;
    const d1 = new Date(InsurancePolicyEffectiveDate)
    this.insuranceDateBindEffective = { date: { year: d1.getFullYear(), month: d1.getMonth() + 1, day: d1.getDate() } };
    const InsurancePolicyExpiryDate = this.consumerBillDetail.InsuranceList[this.j].PolicyExpiryDate;
    const d2 = new Date(InsurancePolicyExpiryDate)
    this.insuranceDateBindExpiry = { date: { year: d2.getFullYear(), month: d2.getMonth() + 1, day: d2.getDate() } };
    // warranty
    const WarrantyPolicyEffectiveDate = this.consumerBillDetail.WarrantyList[this.j].PolicyEffectiveDate;
    const d3 = new Date(WarrantyPolicyEffectiveDate)
    this.warrantyDateBindEffective = { date: { year: d3.getFullYear(), month: d3.getMonth() + 1, day: d3.getDate() } };
    const WarrantyPolicyExpiryDate = this.consumerBillDetail.WarrantyList[this.j].PolicyExpiryDate;
    const d4 = new Date(WarrantyPolicyExpiryDate)
    this.warrantyDateBindExpiry = { date: { year: d4.getFullYear(), month: d4.getMonth() + 1, day: d4.getDate() } };
    // amc
    const AMCPolicyEffectiveDate = this.consumerBillDetail.AMCList[this.j].PolicyEffectiveDate;
    const d5 = new Date(AMCPolicyEffectiveDate)
    this.amcDateBindEffective = { date: { year: d5.getFullYear(), month: d5.getMonth() + 1, day: d5.getDate() } };
    const AMCPolicyExpiryDate = this.consumerBillDetail.AMCList[this.j].PolicyExpiryDate;
    const d6 = new Date(AMCPolicyExpiryDate)
    this.amcDateBindExpiry = { date: { year: d6.getFullYear(), month: d6.getMonth() + 1, day: d6.getDate() } };
    // repair
    const RepairPolicyEffectiveDate = this.consumerBillDetail.RepairList[this.j].RepairDate;
    const d7 = new Date(RepairPolicyEffectiveDate)
    this.repairDateBind = { date: { year: d7.getFullYear(), month: d7.getMonth() + 1, day: d7.getDate() } };
  }
}
