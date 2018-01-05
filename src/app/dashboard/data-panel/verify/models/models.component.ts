import { Category } from './../../../../_models/category';
import { Brand } from './../../../../_models/brand';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
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
    this.userService.getUserBrandDropdownList(this.offset)
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
    this.userService.getUserBrandDropdownList(this.offset)
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
    this.userService.getUserBrandDropdownList(this.offset)
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
    this.userService.verifyBrandModel(item,1).subscribe( res=> {
      alert("Model Verified");
      this.userService.getUserBrandDropdownList(this.offset)
      .subscribe(brandList => {
        this.brands = brandList;
        console.log(this.brands);
      });
    })
  }


  // delete brand
  deleteBrand(brandId: number) {
    this.userService.verifyBrandModel(brandId,2)
      .subscribe(res => {
        // console.log(res);
        alert('Model deleted successfully');
        this.userService.getUserBrandDropdownList(this.offset)
          .subscribe(brandList => {
            this.brands = brandList;
            console.log(this.brands);
          });
      });
  }

}
