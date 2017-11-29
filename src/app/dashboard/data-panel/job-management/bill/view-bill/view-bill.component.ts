import { FunctionService } from './../../../../../_services/function.service';
import { appConfig } from './../../../../../app.config';
import { UserService } from './../../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {
  public offlineSellerForm: FormGroup;
  userType: number;
  ceId: number;
  jobId: number;
  userId: number;
  billId: number;
  productId: number;
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
  onlineSeller: any;
  offlineSeller: any;
  mainCat: any;
  cat: any;
  catForm: any;
  brands: any;
  colours: any;
  billGeneralInfoFormObject: any;
  billGeneralInfoEditFormObject: any;
  billGeneralInfoFormObjectForBind: any;
  productFromMetaData: any[] = [];
  productObject: any;
  warrantyObject: any;
  insuranceObject: any;
  amcObject: any;
  repairObject: any;
  //******************Hide and Show Variables  ****************************//
  jobDetailsShow: boolean = true;
  billGeneralInfo: boolean = false;
  billGeneralInfoEdit: boolean = false;
  cockpit: boolean = false;
  addons: boolean = false;
  askMainCategory: boolean = false;
  showProductForm: boolean = false;
  showSellerForm: boolean = false;
  reassignDialog: boolean = false;
  showWarrantyEditForm: boolean = false;
  showInsuranceEditForm: boolean = false;
  showAmcEditForm = false;
  showRepairEditForm: boolean = false;
  productFormObjectForBind: any;
  warrantyFormObjectForBind: any;
  insuranceEditFormObject: any;
  insuranceFormObjectForBind: any;
  amcFormObjectForBind: any;
  repairFormObjectForBind: any;
  productMetaDataForBind: any;
  completeJobDialog: boolean = false;
  constructor(private _location: Location, private route: ActivatedRoute, private router: Router, private userService: UserService, private fb: FormBuilder, private functionService: FunctionService) {
    this.jobId = route.snapshot.params.id;
    const info = JSON.parse(localStorage.getItem('currentUser'));
    this.userType = info.role_type;
    this.ceId = info.id;
  }

  ngOnInit() {
    this.getDetailsOfJob();
  }
  ngAfterViewInit() {
    // $("#image").imgViewer2();
  }
  ngOnDestroy() {
    // $("#image").remove();
    // this.imageExist = false;
    console.log("destroy")
  }
  // get details of current job
  getDetailsOfJob() {
    this.userService.getJobByID(this.jobId)
      .subscribe(res => {
        this.jobDetails = res.data;
        console.log('job details', this.jobDetails);
        this.userId = res.data.user_id;
        this.imageArray = res.data.copies;
        // console.log(this.imageArray,"image ka array");
        this.imageArrayLength = this.imageArray.length;
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
    // $("#image").remove();
    if (this.imageIndex > 0) {
      this.imageIndex = this.imageIndex - 1;
      // $("#image").imgViewer2();
    }
  }
  // next image
  nextImage() {
    // $("#image").remove();
    if (this.imageIndex < this.imageArray.length - 1) {
      this.imageIndex = this.imageIndex + 1;
      // $("#image").imgViewer2();
    }
  }
  //**********************************Bill General Info**********************************//

  // update bill
  verifyBillGeneral(form: NgForm) {
    console.log(this.billId);
    this.userService.verifyBill(this.billId)
      .subscribe(res => {
        alert("verified")
        console.log(res);
        this.getDetailsOfJob();
        this.billGeneralInfoEdit = false;
      }, err => {
        console.log(err);
      })

  }
  showbillGeneralInfoForm() {
    this.billGeneralInfoEdit = true;
    this.askMainCategory = false;
    this.showProductForm = false;
    this.showSellerForm = false;
  }
  // complete job
  completeJob() {
    this.userService.completeJobQE(this.jobId, this.ceId)
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
  // reassignjob
  reassignJobPopUp() {
    this.reassignDialog = true;
  }
  reassignJob(form: NgForm) {
    console.log(form.value)
    const data = form.value;
    this.userService.reassignJob(this.jobId, data)
      .subscribe(res => {
        console.log(res);
        alert("JOB Reassigned Successfully");
        this.router.navigateByUrl('/dashboard/new');
      },
      (error) => {
        console.log(error);
      })
  }

  //********************************* Product Functions***********************************//
  makeProduct(bill) {
    this.billId = bill.id;
    this.onlineSellerList();
    this.billGeneralInfoFormObjectForBind = bill;
    console.log(bill, "bill wala ");
    this.cockpit = true;
    this.jobDetailsShow = false;
  }
  showProductInfo() {
    this.askMainCategory = true;
    this.showProductForm = true;
    this.addons = false
  }
  addonProductInfo(pid) {
    // console.log(pid);
    this.userService.getProductDetailById(pid)
      .subscribe(res => {
        console.log(res);
        this.askMainCategory = true;
        this.showProductForm = true;
        this.showWarrantyEditForm = false;
        this.showInsuranceEditForm = false;
        this.showAmcEditForm = false;
        this.showRepairEditForm = false;
        this.getBrandList();
        this.getColorList();
        this.getOfflineSellerList();
        this.mainCategoryList();
        this.onSelectMainCat(res.data.main_category_id);
        this.onSelectCat(res.data.category_id);
        this.fillProductForm(pid);
        this.selectedImageArray = res.data.copies;
        this.productFormObjectForBind = res.data;
      },
      (err) => {
        console.log(err);
      })
  }
  // verify Product
  verifyProductFormData() {
    this.userService.verifyProduct(this.billId, this.productId)
      .subscribe(res => {
        alert(" Product verified")
        this.showProductForm = false;
        this.askMainCategory = false;
        this.cockpit = true;
        console.log(res);
        this.getDetailsOfJob();
      }, err => {
        console.log(err);
      })
  }
  // get list of main category
  mainCategoryList() {
    this.userService.getCategoryList(1) // 1 for main category refer to api doc
      .subscribe(mainCat => {
        this.mainCat = mainCat;
        // console.log(mainCat);
      });
  }
  // after select main category show list of category
  onSelectMainCat(catID: number) {
    this.mainCatId = catID;
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
        // console.log(this.catForm, "category form");
        // this.showProductForm = true;
        this.getBrandList();
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
        // console.log(this.offlineSeller,"offline seller");
      });
  }
  //********************************* Warranty Functions***********************************//
  editWarrantyForm(war) {
    console.log(war);
    this.warrantyId = war.id;
    this.getOfflineSellerList();
    this.showWarrantyEditForm = true;
    this.addons = false;
    this.jobDetailsShow = false;
    this.selectedEditWarrantyImageArray = war.copies;
    this.warrantyFormObjectForBind = war;
    this.productId = war.product_id;
  }
  verifyWarranty(form: NgForm) {
    this.userService.verifyWarranty(this.productId, this.warrantyId)
      .subscribe(res => {
        alert("verified")
        console.log(res);
        this.getDetailsOfJob();
        this.showWarrantyEditForm = false;
        this.addons = true;
        if (this.jobDetails.bills.length == 0 && this.jobDetails.products.length == 0) {
          this.addons = false;
          this.jobDetailsShow = true;
        }
      }, err => {
        console.log(err);
      })
  }
  //********************************* Insurance Functions***********************************//
  editInsuranceForm(ins) {
    console.log(ins);
    this.insuranceId = ins.id;
    this.getOfflineSellerList();
    this.showInsuranceEditForm = true;
    this.addons = false;
    this.jobDetailsShow = false;
    this.selectedEditInsuranceImageArray = ins.copies;
    this.insuranceFormObjectForBind = ins;
    this.productId = ins.product_id;
  }
  verifyInsurance(form: NgForm) {
    this.userService.verifyInsurance(this.productId, this.insuranceId)
      .subscribe(res => {
        alert("verified")
        console.log(res);
        this.getDetailsOfJob();
        this.showInsuranceEditForm = false;
        this.addons = true;
        if (this.jobDetails.bills.length == 0 && this.jobDetails.products.length == 0) {
          this.addons = false;
          this.jobDetailsShow = true;
        }
      }, err => {
        console.log(err);
      })
  }
  //********************************* AMC Functions***********************************//
  editAmcForm(amc) {
    console.log(amc);
    this.amcId = amc.id;
    this.getOfflineSellerList();
    this.showAmcEditForm = true;
    this.addons = false;
    this.jobDetailsShow = false;
    this.selectedEditAmcImageArray = amc.copies;
    this.amcFormObjectForBind = amc;
    this.productId = amc.product_id;
  }
  verifyAmc(form: NgForm) {
    this.userService.verifyAmc(this.productId, this.amcId)
      .subscribe(res => {
        alert("verified")
        console.log(res);
        this.getDetailsOfJob();
        this.showAmcEditForm = false;
        this.addons = true;
        if (this.jobDetails.bills.length == 0 && this.jobDetails.products.length == 0) {
          this.addons = false;
          this.jobDetailsShow = true;
        }
      }, err => {
        console.log(err);
      })
  }
  //********************************* Repair Functions***********************************//
  editRepairForm(rep) {
    console.log(rep);
    this.repairId = rep.id;
    this.getOfflineSellerList();
    this.showRepairEditForm = true;
    this.addons = false;
    this.jobDetailsShow = false;
    this.selectedEditRepairImageArray = rep.copies;
    this.repairFormObjectForBind = rep;
    this.productId = rep.product_id;
  }
  verifyRepair(form: NgForm) {
    this.userService.verifyRepair(this.productId, this.repairId)
      .subscribe(res => {
        alert("verified")
        console.log(res);
        this.getDetailsOfJob();
        this.showRepairEditForm = false;
        this.addons = true;
        if (this.jobDetails.bills.length == 0 && this.jobDetails.products.length == 0) {
          this.addons = false;
          this.jobDetailsShow = true;
        }
      }, err => {
        console.log(err);
      })
  }
  //********************************* Addons Functions***********************************//
  addAddons(prod) {
    this.getBrandList();
    this.getColorList();
    this.getOfflineSellerList();
    this.mainCategoryList();
    this.onSelectMainCat(prod.main_category_id);
    this.onSelectCat(prod.category_id);
    this.selectedImageArray = prod.copies;
    console.log(prod, "pro");
    this.productFormObjectForBind = prod;
    this.productId = prod.id;
    this.fillProductForm(this.productId);
    this.addons = true;
    this.cockpit = false;
    this.showSellerForm = false;
    this.showProductForm = false;
    this.askMainCategory = false;
    this.billGeneralInfoEdit = false;
  }
  fillProductForm(prodID) {
    this.userService.productMetaData(this.billId, prodID)
      .subscribe(res => {
        this.productMetaDataForBind = res.data.metaData;
        console.log(this.productMetaDataForBind, "productMetaDataForBind");
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
      'gstin': [null, Validators.required],
      'pan_no': '',
      'reg_no': '',
      'is_service': '',
      'is_onboarded': '',
      'address': '',
      'city': [null, Validators.required],
      'state': [null, Validators.required],
      'pincode': [null, Validators.required],
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
    console.log("can't add image by qe")
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
  }
  // show add product form
  showAddProductForm() {
    this.billGeneralInfoEdit = false;
    this.askMainCategory = true;
    this.showSellerForm = false
    this.mainCategoryList(); // call function for get main category
  }
  // show add offline seller form
  showAddSellerForm() {
    alert("Ruk Jao Bhai Bna rahe")
    this.billGeneralInfoEdit = false;
    this.showSellerForm = false;
    this.askMainCategory = false;
    this.showProductForm = false;
    this.offlineSellerFB();
  }

  backToCockpit() {
    this.addons = false;
    this.cockpit = true;
  }
  backtoAddons() {
    this.addons = true;
    if (this.jobDetails.bills.length == 0 && this.jobDetails.products.length == 0) {
      this.addons = false;
      this.jobDetailsShow = true;
    }
    this.showWarrantyEditForm = false;
    this.showInsuranceEditForm = false;
    this.showAmcEditForm = false;
    this.showRepairEditForm = false;
    this.askMainCategory = false;
    this.showProductForm = false;
  }
  // function for avoid only space submit
  avoidSpace(e) {
    this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e)
  }
  backClicked() {
    this._location.back();
  }
}
