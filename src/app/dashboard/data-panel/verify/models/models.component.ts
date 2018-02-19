import { Category } from './../../../../_models/category';
import { Brand } from './../../../../_models/brand';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  brands: Brand;
  assignForm: FormGroup;
  offset = 0;
  objectForm: any;
  formIds: number;
  leftFlag: boolean = true;
  rightFlag: boolean = false;
  noData: boolean = false;
  showBrandList: boolean = true;
  center = [];
  showEditForm: boolean = false;
  mainCatId: any;
  cat: any;
  catId: any;
  catForms: any;
  mainCat: any;
  formsId: number;
  userId: number;
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.assignForm = this.fb.group({
      'brand_id': ['', Validators.required],
      'category_id': ['', Validators.required],
      'title': [''],
      'warranty_renewal_type': '',
      'dual_renewal_type': '',
      'product_type': '',
      'category_form_1_value': '',
      'category_form_2_value': '',
      'status_type': "1"
    });
  }

  ngOnInit() {
    this.userService.getUserBrandDropdownList(this.offset)
      .subscribe(brandList => {
        this.brands = brandList;
        console.log(this.brands);
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));

    this.userService.getCategoryList(1) // 1 for main category refer to api doc
      .subscribe(mainCat => {
        this.mainCat = mainCat;
        console.log(mainCat);
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }


  onSelectMainCat(catID: number) {
    this.mainCatId = catID;
    this.cat = [];
    this.userService.getSubCategoryList(catID)
      .subscribe(res => {
        this.cat = res.data.subCategories;
        // console.log(res, "category");
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }

  onSelectCat2(catID: number) {
    console.log("cat id", catID);
    this.catId = catID;
    this.userService.getBrandListByCategory(catID)
      .subscribe(res => {
        this.catForms = res.data;
        console.log('catForms', this.catForms)
        // console.log(this.detailType);
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
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
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
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
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }

  verifyBrand(item) {
    console.log(item);
    this.userService.verifyBrandModel(item, 1).subscribe(res => {
      alert("Model Verified");
      this.userService.getUserBrandDropdownList(this.offset)
        .subscribe(brandList => {
          this.brands = brandList;
          console.log(this.brands);
        });
    }, (error => {
      const err = JSON.parse(error['_body']);
      alert(err.reason);
    }))
  }


  // delete brand
  deleteBrand(brandId: number) {
    this.userService.verifyBrandModel(brandId, 2)
      .subscribe(res => {
        // console.log(res);
        alert('Model deleted successfully');
        this.userService.getUserBrandDropdownList(this.offset)
          .subscribe(brandList => {
            this.brands = brandList;
            console.log(this.brands);
          }, (error => {
            const err = JSON.parse(error['_body']);
            alert(err.reason);
          }));
      });
  }

  // edit brand
  editBrand(form) {
    this.formsId = form.category_id;
    this.formIds = form.id;
    this.userId = form.updated_by;
    console.log(form, "form data")
    this.objectForm = form;
    this.showBrandList = false;
    this.showEditForm = true;
    this.userService.getSubCategoryList(this.formsId)
      .subscribe(res => {
        this.cat = res.data;
        this.mainCatId = this.cat.category_id;
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
    this.userService.getBrandListByCategoryAndUser(this.formsId, this.userId)
      .subscribe(res => {
        this.catForms = res.data;
        console.log('catForms', this.catForms)
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }

  addModels(form) {
    form['category_id'] = this.mainCatId;
    this.userService.updateModel(form, this.formIds)
      .subscribe(res => {
        console.log(res);
        alert("Model updated successfully");
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }
  back() {
    this.showEditForm = false;
    this.showBrandList = true;
  }
}
