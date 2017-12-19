import { Category } from './../../../../_models/category';
import { Brand } from './../../../../_models/brand';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: Brand;
  offset = 0;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  showBrandList: boolean = true;
  center = [];
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserBrandList(this.offset)
      .subscribe(brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });
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
    this.userService.getUserBrandList(this.offset)
      .subscribe(brandList => {
        console.log(brandList.statusCode)
        this.rightFlag = false;
        this.brands = brandList;
        console.log(this.brands);
      });
  }

  right() {
    this.noData = false;
    this.leftFlag = false;
    this.offset = this.offset + 50;
    this.userService.getUserBrandList(this.offset)
      .subscribe(brandList => {
        console.log(brandList, "brandlist")
        if (brandList.data.length == 0) {
          this.rightFlag = true;
          this.noData = true;
        }
        this.brands = brandList;
        console.log(this.brands);
      });
  }


  verifyBrand(item) {
    console.log(item);
    this.userService.verifyBrand(item,1).subscribe( res=> {
      alert("Brand Verified and moved to Brand List");
      this.userService.getUserBrandList(this.offset)
      .subscribe(brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });
    })
  }
  // delete brand
  deleteBrand(brandId: number) {
    this.userService.verifyBrand(brandId,2)
      .subscribe(res => {
        // console.log(res);
        alert('brand deleted successfully');
        this.userService.getAllBrandList(this.offset)
          .subscribe(brandList => {
            this.brands = brandList;
            console.log(this.brands);
          });
      });
  }

}
