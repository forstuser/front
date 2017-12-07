import { OfflineSeller } from './../../../../../_models/offlineSeller.interface';
import { FunctionService } from './../../../../../_services/function.service';
import { appConfig } from './../../../../../app.config';
import { UserService } from './../../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

declare var webGlObject: any;
@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  public offlineSellerForm: FormGroup;
  ceId: number;
  jobId: number;
  userId: number;
  billId: number;
  productId: number;
  sellerId: number;
  mainCatId: number;
  catId: number;
  warrantyId: number;
  insuranceId: number;
  amcId: number;
  repairId: number;
  imageArray: any[] = [];
  selectedImageArray: any[] = [];
  selectedWarrantyImageArray: any[] = [];
  selectedEditWarrantyImageArray: any[] = [];
  selectedInsuranceImageArray: any[] = [];
  selectedEditInsuranceImageArray: any[] = [];
  selectedAmcImageArray: any[] = [];
  selectedEditAmcImageArray: any[] = [];
  selectedRepairImageArray: any[] = [];
  selectedEditRepairImageArray: any[] = [];
  imageArrayLength: number;
  images: string[] = [];
  imageUrl: String = appConfig.apiUrl;
  imageIndex: number = 0;
  jobDetails: any;
  productList: any;
  onlineSeller: any;
  offlineSeller: any;
  offlineSellerArray: any[] = [];
  mainCat: any;
  cat: any;
  catForm: any;
  brands: any;
  colours: any;
  sellerObject: any;
  billGeneralInfoFormObject: any;
  billGeneralInfoEditFormObject: any;
  billGeneralInfoFormObjectForBind: any;
  warrantyEditFormObject: any;
  warrantyFormObjectForBind: any;
  insuranceEditFormObject: any;
  insuranceFormObjectForBind: any;
  amcEditFormObject: any;
  amcFormObjectForBind: any;
  repairEditFormObject: any;
  repairFormObjectForBind: any;
  productFormObjectForBind: any;
  productFromMetaData: any[] = [];
  productEditFromMetaData: any[] = [];
  productObject: any;
  productData: any;
  productEditObject: any;
  warrantyObject: any;
  insuranceObject: any;
  amcObject: any;
  repairObject: any;
  productMetaDataForBind: any;
  //******************Hide and Show Variables  ****************************//
  jobDetailsShow: boolean = true;
  billGeneralInfo: boolean = false;
  billGeneralInfoEdit: boolean = false;
  cockpit: boolean = false;
  cockpit2: boolean = false;
  addons: boolean = false;
  askMainCategory: boolean = false;
  showProductForm: boolean = false;
  showSellerForm: boolean = false;
  showWarrantyForm: boolean = false;
  showWarrantyEditForm: boolean = false;
  showInsuranceForm: boolean = false;
  showInsuranceEditForm: boolean = false;
  showAmcForm: boolean = false;
  showAmcEditForm = false;
  showRepairForm: boolean = false;
  showRepairEditForm: boolean = false;
  productFormEdit: boolean = false;
  imagerotation: number = 0;
  requestId: any;
  deleWarr: any;
  delInsuranc: any;
  delAmc: any;
  delRep: any;
  deleteRepairs: boolean = false;
  deleteAmcs: boolean = false;
  deleteInsurances: boolean = false;
  deleteWarrantyy: boolean = false;
  deleteJob: boolean = false;
  completeJobDialog: boolean = false;
  showSellerInfo: boolean = false;
  caseButton: boolean = false;
  myExtObject: any;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private fb: FormBuilder, private functionService: FunctionService) {
    this.jobId = route.snapshot.params.id;
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.ceId = info.id;
  }

  ngOnInit() {
    this.getDetailsOfJob();
    webGlObject.init();
  }
  // get details of current job
  getDetailsOfJob() {
    this.userService.getJobByID(this.jobId)
      .subscribe(res => {
        this.jobDetails = res.data;
        console.log('job details', this.jobDetails);
        this.userId = res.data.user_id;
        this.imageArray = res.data.copies;
        console.log(this.imageArray, "image array")
        // console.log(this.imageArray,"image ka array");
        this.imageArrayLength = this.imageArray.length;
        // console.log(this.imageArrayLength, "image length")
        if (this.imageArray.length == 0) {
          alert("There is no image in this bill please contact Admin")
        }
        for (let i of this.imageArray) {
          this.images.push(this.imageUrl + 'api/' + i.copyUrl)
        }
      },
      (error) => {
        console.log(error);
      }
      )
  }
  // prev image
  prevImage() {
    if (this.imageIndex > 0) {
      this.imageIndex = this.imageIndex - 1;
    }
  }
  // next image
  nextImage() {

    if (this.imageIndex < this.imageArrayLength - 1) {
      this.imageIndex = this.imageIndex + 1;
    }
  }

  rotate() {
    this.imagerotation = this.imagerotation + 90;
  }
  //**********************************Bill General Info**********************************//

  // create new bill
  billGeneralInfoFormData(form: NgForm) {
    this.billGeneralInfoFormObject = form.value;
    this.billGeneralInfoFormObject['job_id'] = this.jobId;
    this.billGeneralInfoFormObject['user_id'] = this.userId;
    console.log(this.billGeneralInfoFormObject);
    this.userService.createBill(this.billGeneralInfoFormObject)
      .subscribe(res => {
        console.log(res);
        alert("Bill Created Successfully")
        this.backTojobDetailsShow();
        this.getDetailsOfJob();
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })

  }
  // update bill
  billGeneralInfoEditFormData(form: NgForm) {
    this.billGeneralInfoEditFormObject = form.value;
    this.billGeneralInfoEditFormObject['id'] = this.billId;
    console.log(this.billGeneralInfoEditFormObject);
    this.userService.updateBill(this.billGeneralInfoEditFormObject)
      .subscribe(res => {
        console.log(res);
        alert("Bill Updated Successfully")
        // this.backTojobDetailsShow();
        this.getDetailsOfJob();
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })
  }
  // delete bill
  deleteBill(req) {
    console.log(req);
    this.userService.deleteBill(req)
      .subscribe(res => {
        console.log(res);
        alert("Bill Deleted");
        this.getDetailsOfJob();
      }, err => {
        console.log(err);
      })
  }
  showbillGeneralInfoEditForm() {
    this.billGeneralInfoEdit = true;
    this.askMainCategory = false;
    this.showProductForm = false;
    this.showSellerForm = false;
  }
  showbillProductInfoEditForm() {
    this.addons = false;
    this.productFormEdit = true;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm = false;
    this.showRepairForm = false;
  }
  // complete job
  completeJob() {
    this.userService.completeJob(this.jobId, this.ceId)
      .subscribe(res => {
        console.log(res);
        alert("JOB Completed Successfully");
        this.router.navigateByUrl('/dashboard/new');
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })
  }

  //********************************* Product Functions***********************************//
  deleteCall(req) {
    this.requestId = req.id
    this.billId = req.bill_id;
    console.log(this.billId, "bill id")
  }
  makeProduct(bill) {
    this.billId = bill.id;
    this.onlineSellerList();
    this.billGeneralInfoFormObjectForBind = bill;
    console.log(bill, "bill wala ");
    this.cockpit = true;
    this.cockpit2 = false;
    this.jobDetailsShow = false;
  }
  deleteProduct() {
    this.userService.deleteProduct(this.billId, this.requestId)
      .subscribe(res => {
        console.log(res);
        alert("Product Deleted");
        this.getDetailsOfJob();
        this.openProductList();
      }, err => {
        console.log(err);
      })
  }
  // create product 
  productFormData(form: NgForm) {
    // console.log(form.value);
    this.productObject = {
      'category_id': this.catId,
      'main_category_id': this.mainCatId,
      'product_name': form.value.product_name,
      'purchase_cost': form.value.purchase_cost,
      'copies': this.selectedImageArray,
      'taxes': form.value.taxes,
      'brand_id': form.value.brand_id,
      'colour_id': form.value.colour_id,
      'seller_id': this.sellerId,
      'user_id': this.userId,
      'job_id': this.jobId,
      'billId': this.billId
    }
    // console.log(this.productObject);
    const filterData = form.value;
    delete filterData['product_name'];
    delete filterData['purchase_cost'];
    delete filterData['taxes'];
    delete filterData['brand_id'];
    delete filterData['colour_id'];
    delete filterData['seller_id'];
    this.productFromMetaData = [];
    for (var val in filterData) {
      this.productFromMetaData.push({ 'category_form_id': val, 'form_value': filterData[val] });
    }
    this.productObject['metaData'] = this.productFromMetaData;
    // console.log(this.productFromMetaData);
    console.log(this.productObject);
    this.userService.createProduct(this.productObject)
      .subscribe(res => {
        console.log(res)
        alert("Product Added");
        this.askMainCategory = false;
        this.showProductForm = false;
        this.getDetailsOfJob();
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  // edit product form
  productEditFormData(form: NgForm) {
    // console.log(form.value);
    this.productEditObject = {
      'category_id': form.value.category_id,
      'main_category_id': form.value.main_category_id,
      'product_name': form.value.product_name,
      'purchase_cost': form.value.purchase_cost,
      'copies': this.selectedImageArray,
      'taxes': form.value.taxes,
      'brand_id': form.value.brand_id,
      'colour_id': form.value.colour_id,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'billId': this.billId,
      'productId': this.productId
    }
    console.log(this.productEditObject);
    const editFilterData = form.value;
    console.log("Edit Filter Data", editFilterData);
    delete editFilterData['product_name'];
    delete editFilterData['purchase_cost'];
    delete editFilterData['taxes'];
    delete editFilterData['brand_id'];
    delete editFilterData['colour_id'];
    delete editFilterData['seller_id'];
    delete editFilterData['main_category_id'];
    delete editFilterData['category_id'];
    this.productEditFromMetaData = [];
    for (var val in editFilterData) {
      if (val.includes('flag')) {
        this.productEditFromMetaData.push({ 'category_form_id': val.split('-')[1], 'form_value': editFilterData[val] });
      }
      else {
        this.productEditFromMetaData.push({ 'id': val, 'form_value': editFilterData[val] });
      }
    }
    this.productEditObject['metaData'] = this.productEditFromMetaData;
    console.log(this.productEditObject);
    this.userService.updateProduct(this.productEditObject)
      .subscribe(res => {
        console.log(res)
        alert("Product Updated");
        this.getDetailsOfJob();
        this.cockpit = true;
        this.productFormEdit = false;
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }

  // get list of main category
  mainCategoryList() {
    this.cat = [];
    this.userService.getCategoryList(1) // 1 for main category refer to api doc
      .subscribe(mainCat => {
        this.mainCat = mainCat;
        // console.log(mainCat);
      });
  }
  // after select main category show list of category
  onSelectMainCat(catID: number) {
    this.mainCatId = catID;
    this.cat = [];
    this.userService.getSubCategoryList(catID)
      .subscribe(res => {
        this.cat = res.data.subCategories;
        // console.log(res, "category");
      });
  }
  // after select category show  category form
  onSelectCat(catID: number) {
    this.catId = catID;
    this.userService.getSubCategoryList(catID)
      .subscribe(res => {
        this.catForm = res.data.categoryForms;
        console.log(this.catForm, "category form");
        this.showProductForm = true;
        this.getBrandListByCategory(catID);
        this.getColorList();
      });
  }
  // after select category show  category form
  onSelectCat2(catID: number) {
    // console.log("cat id", catID);
    this.catId = catID;
    this.userService.getSubCategoryList(catID)
      .subscribe(res => {
        this.catForm = res.data.categoryForms;
        console.log(this.catForm, "category form");
        // this.showProductForm = true;
        this.getColorList();
        this.getOfflineSellerList();
      });
  }
  // brand list
  getBrandList() {
    this.userService.getBrandList()
      .subscribe(brandList => {
        this.brands = brandList;
        // console.log(this.brands,"brands");
      });
  }
  // brand list by category
  getBrandListByCategory(catID) {
    this.userService.getBrandListByCategory(catID)
      .subscribe(brandList => {
        this.brands = brandList;
        console.log(this.brands, "brands");
      });
  }
  // color list
  getColorList() {
    this.userService.getColorList()
      .subscribe(color => {
        this.colours = color;
        // console.log(this.colours),"colors";
      });
  }
  // offline seller list
  getOfflineSellerList() {
    this.userService.getOfflineSellerList()
      .subscribe(offlineSellerList => {
        this.offlineSeller = offlineSellerList;
      });
  }
  // get offline seller by search
  public typed(value: any): void {
    // console.log('New search input: ', value);
    this.userService.getOfflineSellerListByQuery(value)
      .subscribe(res => {
        // console.log(res);
        this.offlineSellerArray = [];
        for (var i = 0; i < res.data.length; i++) {
          var pushValue = res.data[i].seller_name;
          var pushId = res.data[i].sid;
          // console.log(pushId);
          var push = '[' + pushId + '] ' + pushValue;
          this.offlineSellerArray.push(push);
        }
        console.log(this.offlineSellerArray);
      });
  }
  public selected(value: any): void {
    console.log('Selected value is: ', value);
    // if(value.includes('[')){
    //   const val = value.text.split('[').pop().split(']').shift();
    //   console.log(val);
    //   this.sellerId = val;
    // }
    // this.sellerId = 
  }
  public focused(value: any): void {
    console.log('focus value is:', value);
    if (value.includes('[')) {
      const val = value.split('[').pop().split(']').shift();
      console.log(val);
      this.sellerId = val;
      this.sellerInfo();
    }
  }
  sellerInfo() {
    this.showSellerInfo = !this.showSellerInfo;
    this.userService.getOfflineSellerDetailsbyID(this.sellerId)
      .subscribe((res) => {
        console.log(res);
        this.sellerObject = res;
      })
  }
  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  // open product list
  openProductList() {
    this.caseButton = false;
    this.userService.getProductList(this.userId)
      .subscribe((res) => {
        console.log(res);
        this.jobDetailsShow = false;
        this.cockpit2 = true;
        this.productList = res;
      }, (err) => {
        console.log(err);
      })
  }
  //********************************* Warranty Functions***********************************//
  warrantyFormData(form: NgForm) {
    console.log(form.value);
    this.warrantyObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'effective_date': form.value.effective_date,
      'expiry_date': form.value.expiry_date,
      'online_seller_id': form.value.online_seller_id,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'renewal_type': form.value.renewal_type,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'product_id': this.productId,
      'copies': this.selectedWarrantyImageArray
    }
    console.log(this.warrantyObject);
    this.userService.createWarranty(this.warrantyObject)
      .subscribe(res => {
        console.log(res)
        alert("Warranty Added");
        this.getDetailsOfJob();
        this.showWarrantyForm = false;
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  editWarrantyForm(war) {
    this.getOfflineSellerList();
    this.warrantyId = war.id;
    this.selectedEditWarrantyImageArray = war.copies;
    this.warrantyFormObjectForBind = war;
    console.log(war);
    this.addons = false;
    this.showWarrantyEditForm = true;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm = false;
    this.showRepairForm = false;
  }

  deleteWarr(req) {
    this.deleWarr = req.id;
  }
  deleteWarranty() {
    this.userService.deleteWarranty(this.productId, this.deleWarr)
      .subscribe(res => {
        console.log(res);
        alert("Warranty Deleted");
        this.getDetailsOfJob();
      }, err => {
        console.log(err);
      })
  }
  warrantyEditFormData(form: NgForm) {
    console.log(form.value);
    this.warrantyEditFormObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'effective_date': form.value.effective_date,
      'expiry_date': form.value.expiry_date,
      'online_seller_id': form.value.online_seller_id,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'renewal_type': form.value.renewal_type,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'warrantyId': this.warrantyId,
      'product_id': this.productId,
      'copies': this.selectedEditWarrantyImageArray
    }
    this.userService.updateWarranty(this.warrantyEditFormObject)
      .subscribe(res => {
        console.log(res)
        alert("Warranty Updated");
        this.getDetailsOfJob();
        this.addons = true;
        this.showWarrantyEditForm = false;
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  //********************************* Insurance Functions***********************************//
  insuranceFormData(form: NgForm) {
    // console.log(form.value);
    this.insuranceObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'effective_date': form.value.effective_date,
      'expiry_date': form.value.expiry_date,
      'online_seller_id': form.value.online_seller_id,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'renewal_type': form.value.renewal_type,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'product_id': this.productId,
      'copies': this.selectedInsuranceImageArray
    }
    console.log(this.insuranceObject);
    this.userService.createInsurance(this.insuranceObject)
      .subscribe(res => {
        console.log(res)
        alert("Insurance Added");
        this.showInsuranceForm = false;
        this.getDetailsOfJob();
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  editInsuranceForm(ins) {
    this.getOfflineSellerList();
    this.insuranceId = ins.id;
    this.selectedEditInsuranceImageArray = ins.copies;
    this.insuranceFormObjectForBind = ins;
    this.addons = false;
    this.showInsuranceEditForm = true;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm = false;
    this.showRepairForm = false;
  }
  deleteInsure(req) {
    this.delInsuranc = req.id;
  }
  deleteInsurance() {
    this.userService.deleteInsurance(this.productId, this.delInsuranc)
      .subscribe(res => {
        console.log(res);
        alert("Insurance Deleted");
        this.getDetailsOfJob();
      }, err => {
        console.log(err);
      })
  }
  insuranceEditFormData(form: NgForm) {
    console.log(form.value);
    this.insuranceEditFormObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'effective_date': form.value.effective_date,
      'expiry_date': form.value.expiry_date,
      'online_seller_id': form.value.online_seller_id,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'renewal_type': form.value.renewal_type,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'product_id': this.productId,
      'insuranceId': this.insuranceId,
      'copies': this.selectedEditInsuranceImageArray
    }
    this.userService.updateInsurance(this.insuranceEditFormObject)
      .subscribe(res => {
        console.log(res)
        alert("Insurance Updated");
        this.getDetailsOfJob();
        this.addons = true;
        this.showInsuranceEditForm = false;
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  //********************************* AMC Functions***********************************//
  amcFormData(form: NgForm) {
    // console.log(form.value);
    this.amcObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'effective_date': form.value.effective_date,
      'expiry_date': form.value.expiry_date,
      'online_seller_id': form.value.online_seller_id,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'renewal_type': form.value.renewal_type,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'product_id': this.productId,
      'copies': this.selectedAmcImageArray
    }
    console.log(this.amcObject);
    this.userService.createAmc(this.amcObject)
      .subscribe(res => {
        console.log(res)
        alert("AMC Added");
        this.showAmcForm = false;
        this.getDetailsOfJob();
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  editAmcForm(amc) {
    this.getOfflineSellerList();
    this.amcId = amc.id;
    this.selectedEditAmcImageArray = amc.copies;
    this.amcFormObjectForBind = amc;
    this.addons = false;
    this.showAmcEditForm = true;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm = false;
    this.showRepairForm = false;
  }
  deleteAMC(req) {
    this.delAmc = req.id;

  }
  deleteAmc() {
    this.userService.deleteAmc(this.productId, this.delAmc)
      .subscribe(res => {
        console.log(res);
        alert("AMC Deleted");
        this.getDetailsOfJob();
      }, err => {
        console.log(err);
      })
  }
  amcEditFormData(form: NgForm) {
    console.log(form.value);
    this.amcEditFormObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'effective_date': form.value.effective_date,
      'expiry_date': form.value.expiry_date,
      'online_seller_id': form.value.online_seller_id,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'renewal_type': form.value.renewal_type,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'product_id': this.productId,
      'amcId': this.amcId,
      'copies': this.selectedEditAmcImageArray
    }
    this.userService.updateAmc(this.amcEditFormObject)
      .subscribe(res => {
        console.log(res)
        alert("AMC Updated");
        this.getDetailsOfJob();
        this.addons = true;
        this.showAmcEditForm = false;
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  //********************************* Repair Functions***********************************//
  repairFormData(form: NgForm) {
    // console.log(form.value);
    this.repairObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'online_seller_id': form.value.online_seller_id,
      'repair_cost': form.value.repair_cost,
      'repair_taxes': form.value.repair_taxes,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'product_id': this.productId,
      'copies': this.selectedRepairImageArray
    }
    console.log(this.repairObject);
    this.userService.createRepair(this.repairObject)
      .subscribe(res => {
        console.log(res)
        alert("Repair Added");
        this.showRepairForm = false;
        this.getDetailsOfJob();
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  editRepairForm(rep) {
    this.getOfflineSellerList();
    this.repairId = rep.id;
    this.selectedEditRepairImageArray = rep.copies;
    this.repairFormObjectForBind = rep;
    this.addons = false;
    this.showRepairEditForm = true;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm = false;
    this.showRepairForm = false;
  }

  deleteRep(req) {
    this.delRep = req.id;

  }
  deleteRepair() {
    this.userService.deleteRepair(this.productId, this.delRep)
      .subscribe(res => {
        console.log(res);
        alert("Repair Deleted");
        this.getDetailsOfJob();
      }, err => {
        console.log(err);
      })
  }
  repairEditFormData(form: NgForm) {
    this.repairEditFormObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'online_seller_id': form.value.online_seller_id,
      'repair_cost': form.value.repair_cost,
      'repair_taxes': form.value.repair_taxes,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'product_id': this.productId,
      'repairId': this.repairId,
      'copies': this.selectedEditRepairImageArray
    }
    this.userService.updateRepair(this.repairEditFormObject)
      .subscribe(res => {
        console.log(res)
        alert("Repair Updated");
        this.getDetailsOfJob();
        this.addons = true;
        this.showRepairEditForm = false;
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  //********************************* Addons Functions***********************************//
  addAddons(prod) {
    this.getBrandList();
    this.getColorList();
    this.getOfflineSellerList();
    this.mainCategoryList();
    this.onSelectMainCat(prod.main_category_id);
    this.onSelectCat2(prod.category_id);
    // console.log(prod, "pro");
    this.productId = prod.id;
    this.selectedImageArray = prod.copies;
    this.fillProductForm(this.productId);
    this.productFormObjectForBind = prod;
    this.addons = true;
    this.cockpit = false;
    this.cockpit2 = false;
    this.showSellerForm = false;
    this.showProductForm = false;
    this.askMainCategory = false;
    this.billGeneralInfoEdit = false;
    this.showWarrantyForm = false;
    this.showAmcForm = false;
    this.showInsuranceForm = false;
    this.showRepairForm = false;
    this.jobDetailsShow = false;
  }
  fillProductForm(prodID) {
    this.userService.productMetaData(this.billId, prodID)
      .subscribe(res => {
        console.log(res, "actual product")
        this.productData = res.data;
        this.productMetaDataForBind = res.data.metaData;
        console.log("meta data", this.productMetaDataForBind);
      }, err => {
        console.log(err);
      })
  }
  //********************************* Seller Functions***********************************//

  // get online seller list
  onlineSellerList() {
    this.userService.getOnlineSellerList()
      .subscribe(onlineSellerList => {
        this.onlineSeller = onlineSellerList;
        // console.log(this.onlineSeller);
      });
  }
  // create offline seller using form builder
  offlineSellerFB() {
    this.offlineSellerForm = this.fb.group({
      'seller_name': [null, Validators.required],
      'owner_name': '',
      'gstin': '',
      'pan_no': '',
      'reg_no': '',
      'is_service': '',
      'is_onboarded': '',
      'address': '',
      'city': '',
      'state': '',
      'pincode': '',
      'latitude': '',
      'longitude': '',
      'url': '',
      'email': '',
      'contact_no': ''
    });
  }
  createOfflineSeller(data) {
    console.log(data);
    this.userService.createOfflineSeller(data)
      .subscribe(res => {
        console.log(res);
        alert('Offline Seller added succesfully');
        this.offlineSellerForm.reset();
      });
  }
  // ******************************** Small Functions ***********************************//
  //select image 
  selectImage() {
    if (this.selectedImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 1")
    } else {
      this.selectedImageArray.push(this.imageArray[this.imageIndex]);
    }
    if (this.selectedWarrantyImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 2")
    } else {
      this.selectedWarrantyImageArray.push(this.imageArray[this.imageIndex]);
    }
    if (this.selectedEditWarrantyImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 3")
    } else {
      this.selectedEditWarrantyImageArray.push(this.imageArray[this.imageIndex]);
    }
    if (this.selectedInsuranceImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 4")
    } else {
      this.selectedInsuranceImageArray.push(this.imageArray[this.imageIndex]);
    }
    if (this.selectedEditInsuranceImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 5")
    } else {
      this.selectedEditInsuranceImageArray.push(this.imageArray[this.imageIndex]);
    }
    if (this.selectedAmcImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 6")
    } else {
      this.selectedAmcImageArray.push(this.imageArray[this.imageIndex]);
    }
    if (this.selectedEditAmcImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 7")
    } else {
      this.selectedEditAmcImageArray.push(this.imageArray[this.imageIndex]);
    }
    if (this.selectedRepairImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 8")
    } else {
      this.selectedRepairImageArray.push(this.imageArray[this.imageIndex]);
    }
    if (this.selectedEditRepairImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 9")
    }
    else {
      this.selectedEditRepairImageArray.push(this.imageArray[this.imageIndex]);
    }
  }
  // remove image
  removeImage(i) {
    this.selectedImageArray.splice(i, 1);
    this.selectedWarrantyImageArray.splice(i, 1);
    this.selectedEditWarrantyImageArray.splice(i, 1);
    this.selectedInsuranceImageArray.splice(i, 1);
    this.selectedEditInsuranceImageArray.splice(i, 1);
    this.selectedAmcImageArray.splice(i, 1);
    this.selectedEditAmcImageArray.splice(i, 1);
    this.selectedRepairImageArray.splice(i, 1);
    this.selectedEditRepairImageArray.splice(i, 1);
  }
  // open bill general form
  openBillForm() {
    this.jobDetailsShow = false;
    this.billGeneralInfo = true;
    this.onlineSellerList(); //call seller list at time of bill info
  }
  // back To jobDetails Show 
  backTojobDetailsShow() {
    this.showSellerForm = false;
    this.showProductForm = false;
    this.askMainCategory = false;
    this.jobDetailsShow = true;
    this.billGeneralInfo = false;
    this.billGeneralInfoEdit = false;
    this.cockpit = false;
    this.cockpit2 = false;
  }
  // show add product form
  showAddProductForm() {
    this.billGeneralInfoEdit = false;

    this.askMainCategory = true;
    this.showSellerForm = false
    this.mainCategoryList(); // call function for get main category
    this.getOfflineSellerList();
  }
  // show add offline seller form
  showAddSellerForm() {
    this.billGeneralInfoEdit = false;
    this.showSellerForm = true;
    this.askMainCategory = false;
    this.showProductForm = false;
    this.offlineSellerFB();
  }
  backToCockpit() {
    this.addons = false;
    this.cockpit = true;
    // this.cockpit2 = true;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm = false;
    this.showRepairForm = false;
  }
  showAddWarrantyForm() {
    this.getOfflineSellerList();
    this.onlineSellerList();
    this.showWarrantyForm = true;
    this.showAmcForm = false;
    this.showInsuranceForm = false
    this.showRepairForm = false;
    // this.addons = false;
  }
  showAddInsuranceForm() {
    this.getOfflineSellerList();
    this.showWarrantyForm = false;
    this.showAmcForm = false;
    this.showInsuranceForm = true;
    this.showRepairForm = false;
  }
  showAddAmcForm() {
    this.getOfflineSellerList();
    this.showWarrantyForm = false;
    this.showAmcForm = true;
    this.showInsuranceForm = false
    this.showRepairForm = false;
  }
  showAddRepairForm() {
    this.getOfflineSellerList();
    this.showWarrantyForm = false;
    this.showAmcForm = false;
    this.showInsuranceForm = false
    this.showRepairForm = true;
  }
  backtoAddons() {
    this.addons = true;
    this.showWarrantyEditForm = false;
    this.showInsuranceEditForm = false;
    this.showAmcEditForm = false;
    this.showRepairEditForm = false;
    this.productFormEdit = false;
  }
  // function for avoid only space submit
  avoidSpace(e) {
    this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e)
  }
}
