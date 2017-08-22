import { NgForm } from '@angular/forms';
import { DataService } from './../../../../../_services/data.service';
import { Category } from './../../../../../_models/category';
import { Color } from './../../../../../_models/color';
import { Brand } from './../../../../../_models/brand.interface';
import { UserService } from './../../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  brandList: Brand;
  colorList: Color;
  mainCategory: Category;
  getSubCatList: Category;
  productFormID: Number = null;
  saved:boolean = true;
  constructor(private userservice: UserService, private dataservice: DataService) { }

  ngOnInit() {
    this.userservice.getBrandList()
      .subscribe(res => {
        this.brandList = res;
        // console.log(this.brandList);
      });
    this.userservice.getColorList()
      .subscribe(res => {
        this.colorList = res;
        // console.log(this.colorList);
      });
    // get list of main category
    this.userservice.getCategoryList(1) // 1 for main category refer to api doc
      .subscribe(res => {
        this.mainCategory = res;
        // console.log(this.mainCategory);
      });
  }
  // get list after select main category
  onSelectMainCategory(id) {
    // console.log(id);
    const res = id.split(' ');
    // console.log(res[1]);
    this.userservice.getCategoryListbyRefID(res[1])
      .subscribe(res => {
        this.getSubCatList = res;
        // console.log(this.getSubCatList);
        // this.productFormID = res.ID;
        // console.log(this.productFormID);
      });
  }
  // get list after select category
  onSelectCategory(id) {
    // console.log(id);
    const res = id.split(' ');
    // console.log(res[1]);
    this.productFormID = res[1];
  }
  productInfoFormData(form:NgForm){
    console.log(form.value);
    this.dataservice.getData(form.value);
    this.saved = false;
  }
}
