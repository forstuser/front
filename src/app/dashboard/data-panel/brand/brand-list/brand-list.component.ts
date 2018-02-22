import { Category } from './../../../../_models/category';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Brand } from './../../../../_models/brand';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands: Brand;
  activeBrands: any;
  editBrandForm: FormGroup;
  cat: Category;
  // offset = 0;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  showBrandList: boolean = true;
  detailType: any;
  center = [];
  brand;
  brandNewId: number;
  brandId: number;
  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.allBrands();
    this.activeBrandList();
    // get list of category
    this.userService.getCategoryList(2) // 2 for category refer to api doc
      .subscribe(getCat => {
        this.cat = getCat;
        console.log('category is ' + getCat);
      });
    this.editBrandForm = new FormGroup({
      brand_name: new FormControl(''),
      brand_description: new FormControl(''),
      status_type: new FormControl(1),
      brand_id: new FormControl(''),
      details: new FormArray([])
    });
    // get list of detail type
    this.userService.getDetailList()
      .subscribe(detail_type => {
        this.detailType = detail_type;
        console.log(this.detailType);
      })
  }
  // get list of all brands
  allBrands() {
    this.userService.getAllBrandList()
      .subscribe(brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });
  }
  // get list of verified brands 
  activeBrandList() {
    this.userService.getBrandListByStatus(1)
      .subscribe(brandList => {
        this.activeBrands = brandList;
        console.log(this.brands);
      })
  }

  // function for pagination
  // left() {
  //   this.leftFlag = true;
  //   this.rightFlag = false;
  //   this.noData = false;
  //   if (this.offset > 1) {
  //     this.offset = this.offset - 50;
  //     this.leftFlag = false;
  //   }
  //   this.userService.getAllBrandList(this.offset)
  //     .subscribe(brandList => {
  //       console.log(brandList.statusCode)
  //       this.rightFlag = false;
  //       this.brands = brandList;
  //       console.log(this.brands);
  //     });
  // }

  // right() {
  //   this.noData = false;
  //   this.leftFlag = false;
  //   this.offset = this.offset + 50;
  //   this.userService.getAllBrandList(this.offset)
  //     .subscribe(brandList => {
  //       console.log(brandList, "brandlist")
  //       if (brandList.data.length == 0) {
  //         this.rightFlag = true;
  //         this.noData = true;
  //       }
  //       this.brands = brandList;
  //       console.log(this.brands);
  //     });
  // }
  // function for add row in detials field
  createItem() {
    return this.fb.group({
      'id': [null],
      'category_id': [null],
      'detail_type': [null],
      'value': [null]
    });
  }
  addItem() {
    const control = <FormArray>this.editBrandForm.controls['details'];
    control.push(this.createItem());
  }


  removeDetails(i: number) {
    const control = <FormArray>this.editBrandForm.controls['details'];
    control.removeAt(i);
  }


  removeItem(item, data) {
    this.center = data.brand_id;
    console.log(item, item['_value'], "catId");
    this.brand = item['_value'];

    this.userService.removeBrandDetails(this.brand, this.center)
      .subscribe(res => {
        console.log(res);
        alert('Detail deleted successfully');
      });
  }
  // passs current brand id as argument and open the popup
  openBrandModel(item) {
    console.log(item);
    // reset  editBrand form
    this.editBrandForm = new FormGroup({
      brand_name: new FormControl(''),
      brand_description: new FormControl(''),
      status_type: new FormControl(1),
      brand_id: new FormControl(''),
      details: new FormArray([])
    });
    // get information of current selected brand
    this.userService.getBrandDetailsbyID(item.brand_id)
      .subscribe(res => {
        console.log(res);
        this.showBrandList = false;
        // prop autofill data to form
        this.editBrandForm.controls['brand_id'].setValue(res.data.brand_id);
        this.editBrandForm.controls['brand_name'].setValue(res.data.brand_name);
        this.editBrandForm.controls['brand_description'].setValue(res.data.brand_description);
        this.editBrandForm.controls['status_type'].setValue(res.data.status_type != 1 ? false : res.data.status_type);
        res.data.details.forEach(
          (po) => {
            (<FormArray>this.editBrandForm.controls['details']).push(this.createDetailsFormGroup(po));
          });
      });
  }


  createDetailsFormGroup(payOffObj) {
    console.log(payOffObj);
    return new FormGroup({
      id: new FormControl(payOffObj.id),
      category_id: new FormControl(payOffObj.category_id),
      detail_type: new FormControl(payOffObj.detail_type),
      value: new FormControl(payOffObj.value)
    });
  }


  updateBrand(data: any) {
    console.log(data);
    this.center = data.details;
    data.status_type = data.status_type || 2;
    console.log(this.center, "senter details")
    this.userService.updateBrand(data, this.center)
      .subscribe((res) => {
        // console.log(res);
        alert('brand updated successfully');
        this.showBrandList = true;
        this.userService.getAllBrandList()
          .subscribe(brandList => {
            this.brands = brandList;
            console.log(this.brands);
          });
      },(error=>{
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }


  // delete brand
  deleteBrand(brandId: number) {
    this.userService.deleteBrand(brandId)
      .subscribe((res) => {
        // console.log(res);
        alert('brand deleted successfully');
        this.allBrands();
      },(error=>{
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }

  // get list of brand according to status
  onSelectStatus(req) {
    if (req == 1 || req == 2 || req == 11) {
      this.userService.getBrandListByStatus(req)
        .subscribe(brandList => {
          this.brands = brandList;
          console.log(this.brands);
        })
    } else {
      this.allBrands();
    }
  }
  // link brand
  onClickUserBrand(req) {
    this.brandId = req;
    console.log("Old Brand Id is", req)
  }
  onSelectBrand(req) {
    console.log(req);
    this.brandNewId = req;
    console.log("New Brand Id is", req)
  }
  linkBrand() {
    this.userService.verifyUserBrands(this.brandId, this.brandNewId)
      .subscribe(res => {
        alert("Brand Replaced Successfully")
        this.allBrands();
      },(error=>{
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }
  back() {
    this.showBrandList = true;
  }
}
