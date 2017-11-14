import { FunctionService } from './../../../../../_services/function.service';
import { appConfig } from './../../../../../app.config';
import { UserService } from './../../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {
  public offlineSellerForm: FormGroup;
  ceId:number;
  jobId: number;
  userId: number;
  billId: number;
  productId:number;
  mainCatId: number;
  catId: number;
  imageArray: any[] = [];
  selectedImageArray: any[] = [];
  selectedWarrantyImageArray: any[] = [];
  selectedInsuranceImageArray: any[] = [];
  selectedAmcImageArray: any[] = [];
  selectedRepairImageArray: any[] = [];  
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
  showWarrantyForm: boolean = false;
  showInsuranceForm: boolean = false;
  showAmcForm: boolean = false;
  showRepairForm: boolean = false;
  reassignDialog:boolean = false;
  constructor(private route: ActivatedRoute,private router: Router, private userService: UserService, private fb: FormBuilder, private functionService: FunctionService) {
    this.jobId = route.snapshot.params.id;
    const info = JSON.parse(localStorage.getItem('currentUser'))
    this.ceId = info.id;
  }

  ngOnInit() {
    this.getDetailsOfJob();
  }
  ngAfterViewInit() {
    $("#image").imgViewer2();
  }
  ngOnDestroy() {
    $("#image").remove();
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
    $("#image").remove();
    if (this.imageIndex > 0) {
      this.imageIndex = this.imageIndex - 1;
      $("#image").imgViewer2();
    }
  }
  // next image
  nextImage() {
    $("#image").remove();
    if (this.imageIndex < this.imageArray.length - 1) {
      this.imageIndex = this.imageIndex + 1;
      $("#image").imgViewer2();
    }
  }
  //**********************************Bill General Info**********************************//

  // update bill
  verifyBillGeneral(form: NgForm) {
    console.log(this.billId);
    // this.billGeneralInfoEditFormObject = form.value;
    // this.billGeneralInfoEditFormObject['id'] = this.billId;
    // console.log(this.billGeneralInfoEditFormObject);
    // this.userService.updateBill(this.billGeneralInfoEditFormObject)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert("Bill Updated Successfully")
    //     // this.backTojobDetailsShow();
    //     this.getDetailsOfJob();
    //   },
    //   (error) => {
    //     console.log(error);
    //   })
  }
  showbillGeneralInfoForm() {
    this.billGeneralInfoEdit = true;
    this.askMainCategory = false;
    this.showProductForm = false;
    this.showSellerForm = false;
  }
  // complete job
  completeJob(){
    this.userService.completeJob(this.jobId,this.ceId)
    .subscribe(res => {
      console.log(res);
      alert("JOB Completed Successfully");
      this.router.navigateByUrl('/dashboard/new');
    },
    (error) => {
      console.log(error);
    })
  }
  // reassignjob
  reassignJobPopUp(){
    this.reassignDialog = true;
  }
  reassignJob(form: NgForm){
    console.log(form.value)
    const data = form.value;
    this.userService.reassignJob(this.jobId,data)
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
      'seller_id': form.value.seller_id,
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
      },
      (error) => {
        console.log(error);
      });
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
        console.log(this.catForm, "category form");
        this.showProductForm = true;
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
  warrantyFormData(form: NgForm){
    console.log(form.value);
    this.warrantyObject = {
      'document_date':form.value.document_date,
      'document_number':form.value.document_number,
      'effective_date':form.value.effective_date,
      'expiry_date':form.value.expiry_date,
      'online_seller_id':form.value.online_seller_id,
      'renewal_cost':form.value.renewal_cost,
      'renewal_taxes':form.value.renewal_taxes,
      'renewal_type':form.value.renewal_type,
      'seller_id':form.value.seller_id,
      'user_id': this.userId,
      'job_id': this.jobId,
      'product_id':this.productId,
      'copies': this.selectedWarrantyImageArray
    }
    console.log(this.warrantyObject);
    this.userService.createWarranty(this.warrantyObject)
      .subscribe(res => {
        console.log(res)
        alert("Warranty Added");
      },
      (error) => {
        console.log(error);
      });
  }
  editWarrantyForm(war){
    console.log(war);
  }
    //********************************* Insurance Functions***********************************//
    insuranceFormData(form: NgForm){
      // console.log(form.value);
      this.insuranceObject = {
        'document_date':form.value.document_date,
        'document_number':form.value.document_number,
        'effective_date':form.value.effective_date,
        'expiry_date':form.value.expiry_date,
        'online_seller_id':form.value.online_seller_id,
        'renewal_cost':form.value.renewal_cost,
        'renewal_taxes':form.value.renewal_taxes,
        'renewal_type':form.value.renewal_type,
        'seller_id':form.value.seller_id,
        'user_id': this.userId,
        'job_id': this.jobId,
        'product_id':this.productId,
        'copies': this.selectedInsuranceImageArray
      }
      console.log(this.insuranceObject);
      this.userService.createInsurance(this.insuranceObject)
        .subscribe(res => {
          console.log(res)
          alert("Insurance Added");
        },
        (error) => {
          console.log(error);
        });
    }
    editInsuranceForm(war){
      console.log(war);
    }
    //********************************* AMC Functions***********************************//
    amcFormData(form: NgForm){
      // console.log(form.value);
      this.amcObject = {
        'document_date':form.value.document_date,
        'document_number':form.value.document_number,
        'effective_date':form.value.effective_date,
        'expiry_date':form.value.expiry_date,
        'online_seller_id':form.value.online_seller_id,
        'renewal_cost':form.value.renewal_cost,
        'renewal_taxes':form.value.renewal_taxes,
        'renewal_type':form.value.renewal_type,
        'seller_id':form.value.seller_id,
        'user_id': this.userId,
        'job_id': this.jobId,
        'product_id':this.productId,
        'copies': this.selectedAmcImageArray
      }
      console.log(this.amcObject);
      this.userService.createAmc(this.amcObject)
        .subscribe(res => {
          console.log(res)
          alert("AMC Added");
        },
        (error) => {
          console.log(error);
        });
    }
    editAmcForm(war){
      console.log(war);
    }
    //********************************* Repair Functions***********************************//
    repairFormData(form: NgForm){
      // console.log(form.value);
      this.repairObject = {
        'document_date':form.value.document_date,
        'document_number':form.value.document_number,
        'online_seller_id':form.value.online_seller_id,
        'repair_cost':form.value.repair_cost,
        'repair_taxes':form.value.repair_taxes,
        'seller_id':form.value.seller_id,
        'user_id': this.userId,
        'job_id': this.jobId,
        'product_id':this.productId,
        'copies': this.selectedRepairImageArray
      }
      console.log(this.repairObject);
      this.userService.createRepair(this.repairObject)
        .subscribe(res => {
          console.log(res)
          alert("Repair Added");
        },
        (error) => {
          console.log(error);
        });
    }
    editRepairForm(rep){
      console.log(rep);
    }
  //********************************* Addons Functions***********************************//
  addAddons(prod) {
    console.log(prod,"pro");
    this.productId = prod.id;
    this.addons = true;
    this.cockpit = false;
    this.showSellerForm = false;
    this.showProductForm = false;
    this.askMainCategory = false;
    this.billGeneralInfoEdit = false;
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
    if (this.selectedImageArray.includes(this.imageArray[this.imageIndex])) {
      console.log("Image Already Added")
    } else {
      this.selectedImageArray.push(this.imageArray[this.imageIndex]);
      this.selectedWarrantyImageArray.push(this.imageArray[this.imageIndex]);
      this.selectedInsuranceImageArray.push(this.imageArray[this.imageIndex]);
      this.selectedAmcImageArray.push(this.imageArray[this.imageIndex]);
      this.selectedRepairImageArray.push(this.imageArray[this.imageIndex]);
    }
  }
  // remove image
  removeImage(i) {
    this.selectedImageArray.splice(i, 1);
    this.selectedWarrantyImageArray.splice(i, 1);
    this.selectedInsuranceImageArray.splice(i, 1);
    this.selectedAmcImageArray.splice(i, 1);
    this.selectedRepairImageArray.splice(i, 1);    
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
    this.billGeneralInfoEdit = false;
    this.showSellerForm = true;
    this.askMainCategory = false;
    this.showProductForm = false;
    this.offlineSellerFB();
  }
  backToCockpit() {
    this.addons = false;
    this.cockpit = true;
    this.showWarrantyForm = false;
    this.showInsuranceForm = false;
    this.showAmcForm  =false;
    this.showRepairForm = false;
  }
  showAddWarrantyForm() {
    this.getOfflineSellerList();
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
    this.showInsuranceForm = false;
  }
  showAddRepairForm() {
    this.getOfflineSellerList();
    this.showWarrantyForm = false;
    this.showAmcForm = false;
    this.showInsuranceForm = false
    this.showRepairForm = true;
  }
  // function for avoid only space submit
  avoidSpace(e) {
    this.functionService.NoWhitespaceValidator(this.offlineSellerForm, e)
  }
}
