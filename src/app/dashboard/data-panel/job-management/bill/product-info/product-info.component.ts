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
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getBrandList()
    .subscribe( res => {
      this.brandList = res;
      // console.log(this.brandList);
    });
    this.userservice.getColorList()
    .subscribe( res => {
      this.colorList = res;
      // console.log(this.colorList);
    });
      // get list of main category
      this.userservice.getCategoryList(1) // 1 for main category refer to api doc
      .subscribe(res => {
        this.mainCategory = res;
        console.log(this.mainCategory);
      });
  }
    // get list after select main category
    onSelect(id) {
      // console.log(id);
      // const res = id.split(' ');
      // console.log(res[1]);
      this.userservice.getCategoryListbyID(id)
      .subscribe(res => {
        this.getSubCatList = res;
        console.log(this.getSubCatList);
      });
    }
}
