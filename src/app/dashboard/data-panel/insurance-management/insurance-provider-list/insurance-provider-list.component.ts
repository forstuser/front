import { Category } from './../../../../_models/category';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FunctionService } from './../../../../_services/function.service';


@Component({
  selector: 'app-insurance-provider-list',
  templateUrl: './insurance-provider-list.component.html',
  styleUrls: ['./insurance-provider-list.component.css']
})
export class InsuranceProviderListComponent implements OnInit {
  insuranceProviders: any;
  activeInsuranceProviders: any;
  editInsuranceForm: FormGroup;
  cat: Category;
  offset = 0;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  showInsuranceList: boolean = true;
  detailType: any;
  center = [];
  brand;
  addInsuranceForm: FormGroup;
  getCatList: any;
  categories_id: any;
  id: number;
  insuranceProviderId: number;
  insuranceProviderNewId: number;
  constructor(private userService: UserService, private fb: FormBuilder, private functionService: FunctionService) {
    this.addInsuranceForm = this.fb.group({
      'name': ['', Validators.required],
      'main_category_id': ['', Validators.required],
      'categories': '',
      'city': '',
      'state': '',
      'pincode': '',
      'address': '',
      'latitude': '',
      'longitude': '',
      'gstin': '',
      'reg_no': '',
      'pan_no': '',
      'email': '',
      'url': '',
      'contact_no': '',
      'status_type': "1",
      'type': ''
    });
  }

  ngOnInit() {
    this.insuranceProviderList();
    this.activeInsuranceProviderList();
    // get list of category
    this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(getCat => {
        this.cat = getCat;
        console.log('category is ' + getCat);
      });

    // get list of detail type
    this.userService.getDetailList()
      .subscribe(detail_type => {
        this.detailType = detail_type;
        console.log(this.detailType);
      })
  }

  // get list of all insurance provider
  insuranceProviderList() {
    this.userService.getInsuranceProviderList(this.offset)
      .subscribe(insuranceProvider => {
        this.insuranceProviders = insuranceProvider;
        console.log(this.insuranceProviders);
      });
  }
  // get list of active insurance provider
  activeInsuranceProviderList() {
    this.userService.getInsuranceProviderListByStatus(1)
      .subscribe((res) => {
        this.activeInsuranceProviders = res;
        console.log(res);
      }, (err) => {
        console.log(err);
      })
  }
  // function for pagination
  left() {
    this.leftFlag = true;
    this.rightFlag = false;
    this.noData = false;
    if (this.offset > 1) {
      this.offset = this.offset - 50;
      this.leftFlag = false;
    }
    this.userService.getInsuranceProviderList(this.offset)
      .subscribe(insuranceProvider => {
        console.log(insuranceProvider.statusCode)
        this.rightFlag = false;
        this.insuranceProviders = insuranceProvider;
        console.log(this.insuranceProviders);
      });
  }

  right() {
    this.noData = false;
    this.leftFlag = false;
    this.offset = this.offset + 50;
    this.userService.getInsuranceProviderList(this.offset)
      .subscribe(insuranceProvider => {
        console.log(insuranceProvider, "insuranceProviders")
        if (insuranceProvider.data.length == 0) {
          this.rightFlag = true;
          this.noData = true;
        }
        this.insuranceProviders = insuranceProvider;
      });
  }
  // passs current brand id as argument and open the popup
  openInsuranceProvider(item) {
    // console.log(item, "edit data");
    this.id = item.id
    this.showInsuranceList = false;
    this.userService.getCategoryList(1)
      .subscribe(res => {
        this.getCatList = res;
        console.log(this.getCatList, "list of category")
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
    // reset  editBrand form
    this.editInsuranceForm = new FormGroup({
      'name': new FormControl(''),
      'main_category_id': new FormControl(''),
      'categories': new FormControl(''),
      'city': new FormControl(''),
      'state': new FormControl(''),
      'pincode': new FormControl(''),
      'address': new FormControl(''),
      'latitude': new FormControl(''),
      'longitude': new FormControl(''),
      'gstin': new FormControl(''),
      'reg_no': new FormControl(''),
      'pan_no': new FormControl(''),
      'email': new FormControl(''),
      'url': new FormControl(''),
      'contact_no': new FormControl(''),
      'type': new FormControl('')
    })

    // get information of current selected brand
    this.userService.getInsuranceProviderID(item.id)
      .subscribe(res => {
        console.log(res.data, "edit form");
        this.showInsuranceList = false;
        // prop autofill data to form
        this.editInsuranceForm.controls['name'].setValue(res.data.name);
        this.editInsuranceForm.controls['main_category_id'].setValue(res.data.main_category_id);
        this.onSelect(res.data.main_category_id);
        this.editInsuranceForm.controls['city'].setValue(res.data.city);
        // this.editBrandForm.controls['status_type'].setValue(res.data.status_type === 2 ? false : res.data.status_type);
        this.editInsuranceForm.controls['state'].setValue(res.data.state);
        this.editInsuranceForm.controls['pincode'].setValue(res.data.pincode);
        this.editInsuranceForm.controls['address'].setValue(res.data.address);
        this.editInsuranceForm.controls['latitude'].setValue(res.data.latitude);
        this.editInsuranceForm.controls['longitude'].setValue(res.data.longitude);
        this.editInsuranceForm.controls['gstin'].setValue(res.data.gstin);
        this.editInsuranceForm.controls['reg_no'].setValue(res.data.reg_no);
        this.editInsuranceForm.controls['pan_no'].setValue(res.data.pan_no);
        this.editInsuranceForm.controls['email'].setValue(res.data.email);
        this.editInsuranceForm.controls['url'].setValue(res.data.url);
        this.editInsuranceForm.controls['contact_no'].setValue(res.data.contact_no);
        this.editInsuranceForm.controls['categories'].setValue(res.data.details);
        this.editInsuranceForm.controls['type'].setValue(res.data.type);

      });
  }
  onSelect(catId) {
    console.log(catId, "id");
    this.userService.getSubCategoryList(catId)
      .subscribe(res => {
        this.cat = res.data;
        console.log(this.cat, "subCategoriesss")
      })
  }

  onSelectCat(refId) {
    this.categories_id = refId;
    console.log("this.categories_id", this.categories_id)
  }

  updateBrand(data: any) {
    console.log(data);
    this.center = data.details;
    data.status_type = data.status_type || 2;
    console.log(this.center, "senter details")
    this.userService.updateBrand(data, this.center)
      .subscribe(res => {
        // console.log(res);
        alert('brand updated successfully');
        this.showInsuranceList = true;
        this.userService.getAllBrandList()
          .subscribe(insuranceProvider => {
            this.insuranceProviders = insuranceProvider;
            console.log(this.insuranceProviders);
          });
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }
  // delete insurance provider
  deleteInsuranceProvide(brandId: number) {
    console.log("deleteBrandId", brandId)
    this.userService.deleteInsuranceProvider(brandId)
      .subscribe(insuranceProvider => {
        alert("successfully deleted")
        this.userService.getCategoryList(2) // 2 for category refer to api doc
          .subscribe(getCat => {
            this.cat = getCat;
            console.log('category is ' + getCat);
          });
      }, error => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      });
  }

  createInsurance(data: any) {
    const iD = this.id
    console.log('data:', data);
    data.categories = data.categories.map((item) => {
      return {
        category_id: item
      };
    });
    console.log('data:::::', data);
    // if (this.checkCategoryValues(data.center_details)) {
    this.userService.updateInsuranceProvider(data, iD)
      .subscribe(res => {
        console.log(res);
        alert('New Insurance Provide updated succesfully');
        this.addInsuranceForm.reset();
      },
        error => {
          console.log(error);
          const err = JSON.parse(error['_body']);
          alert(err.reason);
        });
    // } else {
    // alert('Please select category first !');
  }
  // get list of insurance provider according to status
  onSelectStatus(req) {
    if (req == 1 || req == 2 || req == 11) {
      this.userService.getInsuranceProviderListByStatus(req)
        .subscribe(brandList => {
          this.insuranceProviders = brandList;
          console.log(this.insuranceProviders);
        })
    } else {
      this.insuranceProviderList();
    }
  }
  // link brand
  onClickUserInsuranceProvider(req) {
    this.insuranceProviderId = req;
  }
  onSelectInsuranceProvider(req) {
    this.insuranceProviderNewId = req;
  }
  linkBrand() {
    this.userService.verifyUserInsuranceProviders(this.insuranceProviderId, this.insuranceProviderNewId)
      .subscribe(res => {
        alert("Insurance provider Replaced Successfully")
        this.insuranceProviderList();
      })
  }
  avoidSpace(e) {
    console.log(e);
    this.functionService.NoWhitespaceValidator(this.editInsuranceForm, e)
  }
  back() {
    this.showInsuranceList = true;
  }

}
