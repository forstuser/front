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
  editBrandForm: FormGroup;
  cat:Category;
  prev:number=0;
  next:number=10;
  leftFlag:boolean= true;
  rightFlag:boolean = false;
  noData:boolean = false;
  showBrandList:boolean = true;
  detailType:any;
  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
        // get list of category
        this.userService.getCategoryList(2) // 2 for category refer to api doc
        .subscribe(getCat => {
          this.cat = getCat;
          console.log('category is ' + getCat);
        });
     this.editBrandForm = new FormGroup({
      brand_name: new FormControl(''),
      brand_description: new FormControl(''),
      brand_id: new FormControl(''),
      details: new FormArray([])
    });
    this.userService.getBrandList()
      .subscribe( brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });
          // get list of detail type
    this.userService.getDetailList()
    .subscribe(detail_type =>{
      this.detailType = detail_type;
      console.log(this.detailType);
    })
  }
  // function for pagination
  left(){
    this.noData = false;
    this.prev = this.prev-10;
    if(this.prev ==0){
      this.leftFlag = true;
    }
    this.userService.getBrandList2(this.prev,this.next)
    .subscribe( brandList => {
      console.log(brandList.statusCode)
      if(brandList.statusCode==100){
        this.rightFlag = false;
      }
      this.brands = brandList;
      console.log(this.brands);
    });
  }
  right(){
    this.noData = false;
    this.leftFlag = false;
    this.prev = this.prev+10;
    console.log(this.prev);
    console.log(this.next);
    this.userService.getBrandList2(this.prev,this.next)
    .subscribe( brandList => {
      console.log(brandList.statusCode)
      if(brandList.statusCode==105){
        this.rightFlag = true;
        this.noData = true;
      }
      this.brands = brandList;
      console.log(this.brands);
    });
  }
  // function for add row in detials field
  createItem() {
    return this.fb.group({
      'id': [null],
      'category_id':[null],
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
  // passs current brand id as argument and open the popup
  openBrandModel(item) {
    console.log(item);
    // reset  editBrand form
    this.editBrandForm = new FormGroup({
      brand_name: new FormControl(''),
      brand_description: new FormControl(''),
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
  updateBrand( brand: any) {
    console.log(brand);
    this.userService.updateBrand(brand)
      .subscribe( res => {
        // console.log(res);
        alert('brand updated successfully');
        this.showBrandList =true;
        this.userService.getBrandList2(0,10) // list update after edit
          .subscribe(brandList => {
          this.brands = brandList;
        });
    });
  }
  // delete brand
  deleteBrand( brandId: number) {
    this.userService.deleteBrand(brandId)
      .subscribe( res => {
        // console.log(res);
        alert('brand deleted successfully');
        this.userService.getBrandList() // list update after edit
          .subscribe(brandList => {
          this.brands = brandList;
        });
    });
  }
  back(){
    this.showBrandList = true;
  }
}
