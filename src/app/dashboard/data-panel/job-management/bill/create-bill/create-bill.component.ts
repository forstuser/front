import { WarrantyList } from './../../../../../_models/finalBill.interface';
import { OfflineSeller } from './../../../../../_models/offlineSeller.interface';
import { FunctionService } from './../../../../../_services/function.service';
import { appConfig } from './../../../../../app.config';
import { UserService } from './../../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

declare var webGlObject: any;
@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  public offlineSellerForm: FormGroup;
  public assignForm: FormGroup;
  public editOfflineSellerForm: FormGroup;
  sellerIdforSellerInfo: number;
  sellerInfoObject: any;
  puc_id: number;
  product_ids: number;
  ceId: number;
  jobId: number;
  userId: number;
  billId: number;
  productId: number;
  sellerId: number;
  mainCatId: number;
  subCatId: number;
  catId: number;
  brandId: number;
  warrantyId: number;
  insuranceId: number;
  amcId: number;
  repairId: number;
  imageArray: any[] = [];
  selectedImageArray: any[] = [];
  selectedWarrantyImageArray: any[] = [];
  selectedPucImageArray: any[] = [];
  selectedEditPucImageArray: any[] = [];
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
  customProductList: any;
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
  pucEditFormObject: any;
  pucFormObjectForBind: any;
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
  pucObject: any;
  productMetaDataForBind: any;
  catForms: any;
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
  showModelForm: boolean = false;
  showWarrantyForm: boolean = false;
  showWarrantyEditForm: boolean = false;
  showInsuranceForm: boolean = false;
  showInsuranceEditForm: boolean = false;
  showAmcForm: boolean = false;
  showAmcEditForm = false;
  showRepairForm: boolean = false;
  showPucForm: boolean = false;
  showPucEditForm: boolean = false;
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
  showProductList: boolean = false;
  myExtObject: any;
  warrProvider: any;
  insurancProvider: any;
  modelList: any;
  type: number;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private fb: FormBuilder, private functionService: FunctionService) {
    this.jobId = route.snapshot.params.id;
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.ceId = info.id;
  }

  ngOnInit() {
    this.getDetailsOfJob();
    webGlObject.init();
    this.warrantyProvider();
    this.insuranceProvider();
    this.editOfflineSellerFB();
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

  warrantyProvider() {
    this.type = 2
    this.userService.warrantyProvider(this.type)
      .subscribe(res => {
        this.warrProvider = res.data;
        console.log(this.warrProvider, "Warranty Provider List")
      })
  }

  insuranceProvider() {
    this.type = 1
    this.userService.warrantyProvider(this.type)
      .subscribe(res => {
        console.log(res, "insurance provider")
        this.insurancProvider = res.data;
        // console.log(this.insurancProvider, "Insurance Provider List")
      })
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
    console.log(form);
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
    this.showProductList = false;
  }
  showbillProductInfoEditForm() {
    this.addons = false;
    this.productFormEdit = true;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm = false;
    this.showRepairForm = false;
    this.onSelectCat2(this.catId);
    this.getModelList();
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
    console.log(req);
    if (req.status_type == 11) {
      this.deleteJob = false;
      this.userService.unLinkProduct(req.id)
        .subscribe(res => {
          console.log(res);
          alert("Product Un-linked");
          this.getDetailsOfJob();
          // this.openProductList();
        }, err => {
          console.log(err);
        })
    }
    else {
      this.deleteJob = true;
      this.requestId = req.id
      this.billId = req.bill_id;
      console.log(this.billId, "bill id")
    }
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
        // this.openProductList();
      }, err => {
        console.log(err);
      })
  }
  // create product 
  productFormData(form: NgForm) {
    if (form.valid) {
      // console.log(form.value);
      this.productObject = {
        'category_id': this.catId,
        'main_category_id': this.mainCatId,
        'sub_category_id': form.value.sub_category_id,
        'product_name': form.value.product_name,
        'model': form.value.model,
        'purchase_cost': form.value.purchase_cost,
        'document_date': form.value.document_date,
        'copies': this.selectedImageArray || [],
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
      delete filterData['sub_category_id'];
      delete filterData['product_name'];
      delete filterData['model']
      delete filterData['purchase_cost'];
      delete filterData['taxes'];
      delete filterData['brand_id'];
      delete filterData['colour_id'];
      delete filterData['seller_id'];
      delete filterData['document_date'];
      this.productFromMetaData = [];
      for (var val in filterData) {
        this.productFromMetaData.push({ 'category_form_id': +val, 'form_value': filterData[val] });
      }
      this.productObject['metaData'] = this.productFromMetaData;
      // console.log(this.productFromMetaData);
      console.log('product data', this.productObject);
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
    } else {
      alert('Please fill mendatory fields');
    }
  }
  // edit product form
  productEditFormData(form: NgForm) {
    // console.log(form.value);
    if (form.valid) {
      this.productEditObject = {
        'category_id': form.value.category_id,
        'main_category_id': form.value.main_category_id,
        'sub_category_id': form.value.sub_category_id,
        'document_date': form.value.document_date,
        'product_name': form.value.product_name,
        'model': form.value.model,
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
      delete editFilterData['model'];
      delete editFilterData['purchase_cost'];
      delete editFilterData['taxes'];
      delete editFilterData['brand_id'];
      delete editFilterData['colour_id'];
      delete editFilterData['seller_id'];
      delete editFilterData['main_category_id'];
      delete editFilterData['category_id'];
      delete editFilterData['sub_category_id'];
      delete editFilterData['document_date'];
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
    } else {
      alert('Please fill mendatory fields');
    }
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
        this.catForms = res.data.subCategories;
        console.log(this.catForm, "category form");
        this.showProductForm = true;
        this.getBrandListByCategory(catID);
        this.getColorList();
      });
  }
  onSelectBrand(brandID: number) {
    console.log("brand selected")
    this.brandId = brandID;
    this.getModelList();
  }
  // after select category show  category form
  onSelectCat2(catID: number) {
    // console.log("cat id", catID);
    this.catId = catID;
    this.userService.getSubCategoryList(catID)
      .subscribe(res => {
        this.catForms = res.data.subCategories;
        this.catForm = res.data.categoryForms;
        console.log(this.catForm, "category form");
        // this.showProductForm = true;
        this.getColorList();
        this.getOfflineSellerList();
        this.getBrandListByCategory(catID);
      });
  }
  // brand list
  getBrandListByUser() {
    this.userService.getBrandListByUser(this.userId)
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
        console.log("offline", this.offlineSeller)
      });
  }
  // get offline seller by search
  public typed(value: any): void {
    // console.log('New search input: ', value);
    this.userService.getOfflineSellerListByQuery(value, this.userId)
      .subscribe(res => {
        // console.log(res);
        this.offlineSellerArray = [];
        for (var i = 0; i < res.data.length; i++) {
          var pushValue = res.data[i].seller_name;
          var pushId = res.data[i].sid;
          let userText = '';
          if (res.data[i].status_type == 11) {
            // alert(pushValue);
            userText = ' [User Created]';
          }
          // console.log(pushId);
          var push = '[' + pushId + '] ' + pushValue + userText;
          this.offlineSellerArray.push(push);
        }
        console.log(this.offlineSellerArray);
      });
  }
  getModelList() {
    this.userService.getModelListByCategoryAndBrand(this.catId, this.brandId, this.userId)
      .subscribe(res => {
        console.log(res, "model list");
        this.modelList = res;
      })
  }
  // add new model
  addModels(form){
    this.userService.addModal(form)
    .subscribe(res=>{
      console.log(res,"post data");
      alert("Model Added successfully")
      this.assignForm.reset();
    })
  }
  public selected(value: any): void {
    console.log('Selected value is: ', value);
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
  // get product list of status 11 
  getCustomProductList() {
    this.userService.getCustomProductList(this.userId)
      .subscribe((res) => {
        this.customProductList = res;
        console.log("custom", res);
      }, (err) => {
        console.log(err);
      })
  }
  onSelectProductList(id) {
    console.log(this.jobId);
    console.log(this.billId);
    console.log(id);
    this.productId = id;
  }
  bindProductWithBill() {
    this.userService.linkProduct(this.jobId, this.billId, this.productId)
      .subscribe((res) => {
        console.log(res);
        alert("Product Linked with bill")
        this.getDetailsOfJob();
        this.showProductList = false;
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
      'provider_id': form.value.provider_id,
      'warranty_type': form.value.warranty_type,
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
        this.fillProductForm(this.productId);
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
    this.sellerIdforSellerInfo = war.seller_id;
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
        this.fillProductForm(this.productId);
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
      'provider_id': form.value.provider_id,
      'warranty_type': form.value.warranty_type,
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
        this.fillProductForm(this.productId);
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
      'provider_id': form.value.provider_id,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'amount_insured': form.value.amount_insured,
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
        this.fillProductForm(this.productId);
      },
        (error) => {
          console.log(error);
          const err = JSON.parse(error['_body']);
          alert(err.reason);
        });
  }
  editInsuranceForm(ins) {
    console.log(ins, "insurance form data")
    this.getOfflineSellerList();
    this.insuranceId = ins.id;
    this.sellerIdforSellerInfo = ins.seller_id;
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
        this.fillProductForm(this.productId);
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
      'provider_id': form.value.provider_id,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'amount_insured': form.value.amount_insured,
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
        this.fillProductForm(this.productId);
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
      'provider_id': form.value.provider_id,

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
        this.fillProductForm(this.productId);
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
    this.sellerIdforSellerInfo = amc.seller_id;
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
        this.fillProductForm(this.productId);
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
        this.fillProductForm(this.productId);
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
      'warranty_upto': form.value.warranty_upto,
      'repair_for': form.value.repair_for,
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
        this.fillProductForm(this.productId);
      },
        (error) => {
          console.log(error);
          const err = JSON.parse(error['_body']);
          alert(err.reason);
        });
  }
  editRepairForm(rep) {
    console.log(rep)
    this.getOfflineSellerList();
    this.repairId = rep.id;
    this.sellerIdforSellerInfo = rep.seller_id;
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
        this.fillProductForm(this.productId);
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
      'warranty_upto': form.value.warranty_upto,
      'repair_for': form.value.repair_for,
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
        this.fillProductForm(this.productId);
        this.addons = true;
        this.showRepairEditForm = false;
      },
        (error) => {
          console.log(error);
          const err = JSON.parse(error['_body']);
          alert(err.reason);
        });
  }
  // ********************************PUC functions***************************************//

  pucFormData(form: NgForm) {
    console.log(form.value);
    this.pucObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'effective_date': form.value.effective_date,
      'expiry_date': form.value.expiry_date,
      'created_at': form.value.created_at,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'renewal_type': form.value.renewal_type,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'product_id': this.productId,
      'copies': this.selectedPucImageArray
    }
    console.log(this.pucObject);
    this.userService.createPuc(this.pucObject)
      .subscribe(res => {
        console.log(res)
        alert("PUC Added");
        this.showPucForm = false;
        this.getDetailsOfJob();
        this.fillProductForm(this.productId);
      },
        (error) => {
          console.log(error);
          const err = JSON.parse(error['_body']);
          alert(err.reason);
        });
  }

  editPucForm(rep) {
    this.puc_id = rep.id;
    this.product_ids = rep.product_id;
    console.log(rep, "puc")
    this.getOfflineSellerList();
    this.repairId = rep.id;
    this.sellerIdforSellerInfo = rep.seller_id;
    this.selectedPucImageArray = rep.copies;
    this.pucFormObjectForBind = rep;
    this.addons = false;
    this.showPucEditForm = true;
    this.showRepairForm = false;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm = false;
    this.showRepairForm = false;
  }

  deletePuc(req) {
    this.delRep = req.id;

  }

  deletePucs() {
    this.userService.deletePucs(this.productId, this.delRep)
      .subscribe(res => {
        console.log(res);
        alert("Repair Deleted");
        this.getDetailsOfJob();
        this.fillProductForm(this.productId);
      }, err => {
        console.log(err);
      })
  }
  //*********************************PUC EDIT ********************************************//
  pucEditFormData(form: NgForm) {
    console.log(form.value);
    this.pucEditFormObject = {
      'document_date': form.value.document_date,
      'document_number': form.value.document_number,
      'effective_date': form.value.effective_date,
      'expiry_date': form.value.expiry_date,
      // 'online_seller_id': form.value.online_seller_id,
      // 'provider_id':form.value.provider_id,     
      // 'warranty_type':form.value.warranty_type,
      'renewal_cost': form.value.renewal_cost,
      'renewal_taxes': form.value.renewal_taxes,
      'renewal_type': form.value.renewal_type,
      'seller_id': form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      // 'warrantyId': this.warrantyId,
      // 'product_id': this.productId,
      'copies': this.selectedEditPucImageArray
    }
    this.userService.updatePuc(this.pucEditFormObject, this.puc_id, this.product_ids)
      .subscribe(res => {
        console.log(res)
        alert("Puc Updated");
        this.getDetailsOfJob();
        this.fillProductForm(this.productId);
        this.addons = true;
        this.showPucEditForm = false;
      },
        (error) => {
          console.log(error);
          const err = JSON.parse(error['_body']);
          alert(err.reason);
        });
  }
  //********************************* Addons Functions***********************************//
  addAddons(prod) {
    this.getBrandListByUser();
    this.getColorList();
    this.getOfflineSellerList();
    this.mainCategoryList();
    this.onSelectMainCat(prod.main_category_id);
    this.onSelectCat2(prod.category_id);
    console.log(prod, "pro");
    this.productId = prod.id;
    this.brandId = prod.brand_id;
    this.selectedImageArray = prod.copies;
    this.fillProductForm(this.productId);
    this.productFormObjectForBind = prod;
    this.sellerIdforSellerInfo = prod.seller_id;
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
    this.showProductList = false;
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
  // create model form using form builder
  modelFB() {
    this.assignForm = this.fb.group({
      'brand_id': ['',Validators.required],
      'category_id':['',Validators.required],
      'title':['',Validators.required],
      'warranty_renewal_type':'',
      'dual_renewal_type':'',
      'product_type':'',
      'category_form_1_value':'',
      'category_form_2_value':'',
      'status_type':"1"
    });
  }
  // initialize edit seller form 
  editOfflineSellerFB() {
    this.editOfflineSellerForm = new FormGroup({
      sid: new FormControl(''),
      seller_name: new FormControl(''),
      owner_name: new FormControl(''),
      gstin: new FormControl(''),
      pan_no: new FormControl(''),
      reg_no: new FormControl(''),
      is_service: new FormControl(''),
      is_onboarded: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      url: new FormControl(''),
      email: new FormControl(''),
      contact_no: new FormControl(''),
      status_type: new FormControl('')
    });
  }
  // populate edit offfline form
  fillEditOfflineSellerForm() {
    this.editOfflineSellerForm.setValue({
      sid: this.sellerInfoObject.sid,
      owner_name: this.sellerInfoObject.owner_name,
      seller_name: this.sellerInfoObject.seller_name,
      gstin: this.sellerInfoObject.gstin,
      pan_no: this.sellerInfoObject.pan_no,
      reg_no: this.sellerInfoObject.reg_no,
      is_service: this.sellerInfoObject.is_service,
      is_onboarded: this.sellerInfoObject.is_onboarded,
      address: this.sellerInfoObject.address,
      city: this.sellerInfoObject.city,
      state: this.sellerInfoObject.state,
      pincode: this.sellerInfoObject.pincode,
      latitude: this.sellerInfoObject.latitude,
      longitude: this.sellerInfoObject.longitude,
      url: this.sellerInfoObject.url,
      email: this.sellerInfoObject.email,
      contact_no: this.sellerInfoObject.contact_no,
      status_type: this.sellerInfoObject.status_type,
    })
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
  // this function changes the id after select dropdown
  changeSellerId(req) {
    console.log(req);
    this.sellerIdforSellerInfo = req;
  }
  sellerEdit() {
    console.log(this.sellerIdforSellerInfo);
    this.userService.getOfflineSellerDetailsbyID(this.sellerIdforSellerInfo)
      .subscribe(res => {
        this.sellerInfoObject = res.data;
        console.log(this.sellerInfoObject,"seller info for edit");
        this.fillEditOfflineSellerForm();
        console.log(res);
      })
  }
  updateOfflineSeller(req) {
    this.userService.updateOfflineSeller(req)
      .subscribe(res => {
        // console.log(res);
        alert('Offline Seller updated successfully');
      },(error)=>{
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }
  // ******************************** Small Functions ***********************************//
  //select image 
  selectImage() {
    console.log(this.imageArray[this.imageIndex]);
    this.selectedImageArray = this.selectedImageArray || [];
    if (this.selectedImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 1")
    } else {
      this.selectedImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedWarrantyImageArray = this.selectedWarrantyImageArray || [];
    if (this.selectedWarrantyImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 2")
    } else {
      this.selectedWarrantyImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedEditWarrantyImageArray = this.selectedEditWarrantyImageArray || [];
    if (this.selectedEditWarrantyImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 4")
    } else {
      this.selectedEditWarrantyImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedInsuranceImageArray = this.selectedInsuranceImageArray || [];
    if (this.selectedInsuranceImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 5")
    } else {
      this.selectedInsuranceImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedEditInsuranceImageArray = this.selectedEditInsuranceImageArray || [];
    if (this.selectedEditInsuranceImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 6")
    } else {
      this.selectedEditInsuranceImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedAmcImageArray = this.selectedAmcImageArray || [];
    if (this.selectedAmcImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 7")
    } else {
      this.selectedAmcImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedEditAmcImageArray = this.selectedEditAmcImageArray || [];
    if (this.selectedEditAmcImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 8")
    } else {
      this.selectedEditAmcImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedRepairImageArray = this.selectedRepairImageArray || [];
    if (this.selectedRepairImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 9")
    } else {
      this.selectedRepairImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedEditRepairImageArray = this.selectedEditRepairImageArray || [];
    if (this.selectedEditRepairImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 10")
    }
    else {
      this.selectedEditRepairImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedPucImageArray = this.selectedPucImageArray || [];
    if (this.selectedPucImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added 3")
    } else {
      this.selectedPucImageArray.push(this.imageArray[this.imageIndex]);
    }

    this.selectedEditPucImageArray = this.selectedEditPucImageArray || [];
    if(this.selectedEditPucImageArray.includes(this.imageArray[this.imageIndex])){
      console.log('Image already added hai kitni bar karoge');
    } else {
      this.selectedEditPucImageArray.push(this.imageArray[this.imageIndex]);
    }
  }
  // remove image
  removeImage(i, $event) {
    console.log(i);
    console.log('Inside Remove image', $event);
    this.selectedImageArray.splice(i, 1);
    this.selectedWarrantyImageArray.splice(i, 1);
    this.selectedEditWarrantyImageArray.splice(i, 1);
    this.selectedPucImageArray.splice(i, 1);
    // this.selectedEditWarrantyImageArray.splice(i, 1);
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
    this.showProductList = false;
  }
  // show add product form
  showAddProductForm() {
    this.billGeneralInfoEdit = false;
    this.showProductList = false;
    this.askMainCategory = true;
    this.showSellerForm = false;
    this.showModelForm = false;
    this.mainCategoryList(); // call function for get main category
    this.getOfflineSellerList();
    this.onlineSellerList();
  }
  // show select product
  showSelectProductForm() {
    this.billGeneralInfoEdit = false;
    this.askMainCategory = false;
    this.showSellerForm = false
    this.showModelForm = false;
    this.showProductList = true;
    this.getCustomProductList();
  }
  // show add offline seller form
  showAddSellerForm() {
    this.billGeneralInfoEdit = false;
    this.showSellerForm = true;
    this.askMainCategory = false;
    this.showProductForm = false;
    this.showProductList = false;
    this.showModelForm = false;
    this.offlineSellerFB();
  }
  showAddModelForm() {
    this.billGeneralInfoEdit = false;
    this.showSellerForm = false;
    this.askMainCategory = false;
    this.showProductForm = false;
    this.showProductList = false;
    this.showModelForm = true;
    this.mainCategoryList();
    this.modelFB();
  }
  backToCockpit() {
    this.cockpit = true;
    // this.cockpit2 = true;
    if (this.addons) {
      this.backTojobDetailsShow();
    }
    this.addons = false;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm = false;
    this.showPucForm = false;
    this.showRepairForm = false;
  }
  showAddWarrantyForm() {
    this.getOfflineSellerList();
    this.onlineSellerList();
    this.showWarrantyForm = true;
    this.showAmcForm = false;
    this.showInsuranceForm = false
    this.showRepairForm = false;
    this.showPucForm = false;
    // this.addons = false;
  }
  showAddInsuranceForm() {
    this.getOfflineSellerList();
    this.onlineSellerList();
    this.showWarrantyForm = false;
    this.showAmcForm = false;
    this.showInsuranceForm = true;
    this.showRepairForm = false;
    this.showPucForm = false;
  }
  showAddAmcForm() {
    this.getOfflineSellerList();
    this.onlineSellerList();
    this.showWarrantyForm = false;
    this.showAmcForm = true;
    this.showInsuranceForm = false
    this.showRepairForm = false;
    this.showPucForm = false;
  }
  showAddRepairForm() {
    this.getOfflineSellerList();
    this.onlineSellerList();
    this.showWarrantyForm = false;
    this.showAmcForm = false;
    this.showInsuranceForm = false
    this.showRepairForm = true;
    this.showPucForm = false;
  }
  showAddPucForm() {
    this.showWarrantyForm = false;
    this.showAmcForm = false;
    this.showInsuranceForm = false
    this.showRepairForm = false;
    this.showPucForm = true;
  }

  backtoAddons() {
    this.addons = true;
    this.showWarrantyEditForm = false;
    this.showInsuranceEditForm = false;
    this.showAmcEditForm = false;
    this.showRepairEditForm = false;
    this.productFormEdit = false;
    this.showPucEditForm = false;
  }
  // function for avoid only space submit
  avoidSpace(e) {
    this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e)
  }
}
