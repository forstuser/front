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
      Name: new FormControl(''),
      Description: new FormControl(''),
      ID: new FormControl(''),
      Details: new FormArray([])
    });
    this.userService.getBrandList()
      .subscribe( brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });
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
      'DetailID': [null],
      'CategoryID':[null],
      'DetailTypeID': [null],
      'DisplayName': [null],
      'Details': [null]
    });
  }
  addItem() {
    const control = <FormArray>this.editBrandForm.controls['Details'];
    control.push(this.createItem());
  }
  removeDetails(i: number) {
    const control = <FormArray>this.editBrandForm.controls['Details'];
    control.removeAt(i);
  }
  // passs current brand id as argument and open the popup
  openBrandModel(item) {
    // console.log(item);
    // reset  editBrand form
    this.editBrandForm = new FormGroup({
      Name: new FormControl(''),
      Description: new FormControl(''),
      ID: new FormControl(''),
      Details: new FormArray([])
    });
    // get information of current selected brand
    this.userService.getBrandDetailsbyID(item.ID)
      .subscribe(res => {
      console.log(res);
      this.showBrandList = false;
      // prop autofill data to form
      this.editBrandForm.controls['ID'].setValue(res.ID);
      this.editBrandForm.controls['Name'].setValue(res.Name);
      this.editBrandForm.controls['Description'].setValue(res.Description);
      res.Details.forEach(
      (po) => {
        (<FormArray>this.editBrandForm.controls['Details']).push(this.createDetailsFormGroup(po));
      });
    });
  }
 createDetailsFormGroup(payOffObj) {
    return new FormGroup({
      DetailID: new FormControl(payOffObj.DetailID),
      CategoryID: new FormControl(payOffObj.CategoryID),
      DetailTypeID: new FormControl(payOffObj.DetailTypeID),
      DisplayName: new FormControl(payOffObj.DisplayName),
      Details: new FormControl(payOffObj.Details)
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
