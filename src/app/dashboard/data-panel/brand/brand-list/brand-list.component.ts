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
  offset = 1;
  leftFlag:boolean= true;
  rightFlag:boolean = false;
  noData:boolean = false;
  showBrandList:boolean = true;
  detailType:any;
  center=[];
  brand;
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
    this.userService.getAllBrandList(this.offset)
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
    if(this.offset>1){
      this.offset = this.offset-10;          
    }
    this.userService.getAllBrandList(this.offset)
    .subscribe( brandList => {
      console.log(brandList.statusCode)
      if(brandList.data.length==100){
        this.rightFlag = false;
      }
      this.rightFlag = true;
      this.brands = brandList;
      console.log(this.brands);
    });
  }

  right(){
    this.noData = false;
    this.leftFlag = false;
    this.offset = this.offset+10;
    this.userService.getAllBrandList(this.offset)
    .subscribe( brandList => {
      console.log(brandList,"brandlist")
      if(brandList.data.length==0){
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


  removeItem(item,data){
    console.log(data,"bhai data")
    console.log(item,data,"brandsssss")
    this.center=data.brand_id;
    console.log(item,item['_value'],"catId");
    this.brand=item['_value'];

    this.userService.removeBrandDetails(this.brand,this.center)
    .subscribe( res => {
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


  updateBrand( data: any) {
    console.log(data);
    this.center=data.details;
    console.log(this.center,"senter details")
    this.userService.updateBrand(data,this.center)
      .subscribe( res => {
        // console.log(res);
        alert('brand updated successfully');
        this.showBrandList =true;
        this.userService.getBrandList()
        .subscribe( brandList => {
          this.brands = brandList;
          console.log(this.brands);
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
