import { appConfig } from './../../../../../app.config';
import { UserService } from './../../../../../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm,Validators,FormBuilder,FormGroup} from '@angular/forms';


declare var $: any
@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  public offlineSellerForm: FormGroup;
  jobId: number;
  userId: number;
  billId: number;
  imageArray: any[] = [];
  imageArrayLength: number;
  images: string[] = [];
  imageUrl: String = appConfig.apiUrl;
  imageIndex: number = 0;
  jobDetails: any;
  onlineSeller: any;
  mainCat: any;
  cat: any;
  catForm:any;
  brands:any;
  colours:any;
  billGeneralInfoFormObject: any;
  billGeneralInfoEditFormObject: any;
  billGeneralInfoFormObjectForBind: any;
  //******************Hide and Show Variables  ****************************//
  jobDetailsShow: boolean = true;
  billGeneralInfo: boolean = false;
  billGeneralInfoEdit: boolean = false;
  cockpit: boolean = false;
  askMainCategory: boolean = false;
  showProductForm: boolean = false;
  showSellerForm: boolean = false;
  constructor(private route: ActivatedRoute, private userService: UserService, private fb: FormBuilder) {
    this.jobId = route.snapshot.params.id;
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
      })
  }
  showbillGeneralInfoEditForm() {
    this.billGeneralInfoEdit = true;
    this.askMainCategory = false;
    this.showProductForm = false;
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
    this.userService.getSubCategoryList(catID)
      .subscribe(res => {
        this.cat = res.data.subCategories;
        // console.log(res, "category");
      });
  }
  // after select category show  category form
  onSelectCat(catID: number) {
    this.userService.getSubCategoryList(catID)
      .subscribe(res => {
        this.catForm = res.data.categoryForms;
        console.log(this.catForm, "category form");
        this.showProductForm = true;
        this.getBrandList();
        this.getColorList();
      });
  }
  // brand list
  getBrandList(){
    this.userService.getBrandList()
    .subscribe( brandList => {
      this.brands = brandList;
      // console.log(this.brands,"brands");
    });
  }
  // color list
  getColorList(){
    this.userService.getColorList()
    .subscribe(color => {
      this.colours = color;
      console.log(this.colours),"colors";
    });
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
  offlineSellerFB(){
    this.offlineSellerForm = this.fb.group({
      'seller_name' : [null, Validators.required],
      'owner_name': '',
      'gstin': [null, Validators.required],
      'pan_no':  '',
      'reg_no': '',
      'is_service':'',
      'is_onboarded':'',
      'address': '',
      'city': [null, Validators.required],
      'state': [null, Validators.required],
      'pincode': [null, Validators.required],
      'latitude': '',
      'longitude': '',
      'url':'',
      'email':'',
      'contact_no':''
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
  // open bill general form
  openBillForm() {
    this.jobDetailsShow = false;
    this.billGeneralInfo = true;
    this.onlineSellerList(); //call seller list at time of bill info
  }
  // back To jobDetails Show 
  backTojobDetailsShow() {
    this.jobDetailsShow = true;
    this.billGeneralInfo = false;
    this.billGeneralInfoEdit = false;
    this.cockpit = false;
  }
  // show add product form
  showAddProductForm() {
    this.billGeneralInfoEdit = false;
    this.askMainCategory = true;
    this.mainCategoryList(); // call function for get main category
  }
  // show add offline seller form
  showAddSellerForm(){
    this.billGeneralInfoEdit = false;
    this.showSellerForm = true;
    this.askMainCategory =false;
    this.showProductForm = false;
    this.offlineSellerFB();
  }
}
