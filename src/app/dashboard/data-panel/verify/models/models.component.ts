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
  dropdownModels: any;
  assignForm: FormGroup;
  offset = 0;
  objectForm: any;
  modelId: number;
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
  categoryName: any;
  brandList: any;
  category_id: any = '';
  brand_id: any = '';
  status_id: any = '';
  activeModels: any;
  old_id: number;
  new_id: number;
  imageUrl: string = '../../../assets/images/loader.gif';
  request: boolean = false;
  loader: boolean = false;
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
    this.getUserBrandDropdownList();

    this.userService.getCategoryList(1) // 1 for main category refer to api doc
      .subscribe(mainCat => {
        this.mainCat = mainCat;
        console.log(mainCat);
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }

  getUserBrandDropdownList() {
    this.userService.getUserBrandDropdownList(this.offset)
      .subscribe(brandList => {
        this.dropdownModels = brandList;
        console.log(this.dropdownModels);
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }

  onSelectCat2(catID: number) {
    this.category_id = catID;
    this.userService.getBrandListByCategory(catID)
      .subscribe(res => {
        this.brandList = res.data;
        console.log('Brand List', this.catForms)
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
        this.dropdownModels = brandList;
        console.log(this.dropdownModels);
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
        this.dropdownModels = brandList;
        console.log(this.dropdownModels);
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }));
  }

  verifyBrand(item) {
    console.log(item);
    this.request = true;
    this.userService.verifyBrandModel(item, 1).subscribe(res => {
      alert("Model Verified");
      this.request = false;
      this.userService.getUserBrandDropdownList(this.offset)
        .subscribe(brandList => {
          this.dropdownModels = brandList;
          console.log(this.dropdownModels);
        });
    }, (error => {
      this.request = false;
      const err = JSON.parse(error['_body']);
      alert(err.reason);
    }))
  }


  // delete brand
  deleteBrand(brandId: number) {
    this.request = true;
    this.userService.verifyBrandModel(brandId, 2)
      .subscribe(res => {
        // console.log(res);
        alert('Model deleted successfully');
        this.request = false;
        this.userService.getUserBrandDropdownList(this.offset)
          .subscribe(brandList => {
            this.dropdownModels = brandList;
            console.log(this.dropdownModels);
          }, (error => {
            this.request = false;
            const err = JSON.parse(error['_body']);
            alert(err.reason);
          }));
      });
  }

  // edit brand
  editBrand(form) {
    console.log(form, "edit model data");
    this.showEditForm = true;
    this.showBrandList = false;
    this.modelId = form.id;
    this.categoryDetailsById(form.category_id);
    this.onSelectCat2(form.category_id);
    this.assignForm.setValue({
      brand_id: form.brand_id,
      category_id: form.category_id,
      title: form.title,
      warranty_renewal_type: form.warranty_renewal_type,
      dual_renewal_type: form.dual_renewal_type,
      product_type: form.product_type,
      category_form_1_value: form.category_form_1_value,
      category_form_2_value: form.category_form_2_value,
      status_type: 1
    });
  }

  // get category name by category id 
  categoryDetailsById(id) {
    this.userService.categoryDetailsById(id)
      .subscribe(res => {
        console.log(res);
        this.categoryName = res;
      }, error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })
  }
  updateModels(form) {
    console.log(form);
    form['category_id'] = this.mainCatId;
    this.userService.updateModel(form, this.modelId)
      .subscribe(res => {
        console.log(res);
        alert("Model updated successfully");
        this.showEditForm = false;
        this.showBrandList = true;
        this.getUserBrandDropdownList();

      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }
  back() {
    this.showEditForm = false;
    this.showBrandList = true;
  }
  //filter functions

  onSelectMainCategory(req) {
    this.userService.getSubCategoryList(req)
      .subscribe(res => {
        this.cat = res.data.subCategories;
        console.log(res, "category");
      });
  }
  onSelectCategory(req) {
    console.log(req);
    this.category_id = req;
  }
  onSelectBrand(req) {
    console.log(req);
    this.brand_id = req;
  }
  onSelectStatus(req) {
    console.log(req);
    this.status_id = req;
  }
  onClickUserModel(old_id, cat, bra) {
    this.old_id = old_id;
    console.log(cat, bra);
    this.userService.filterModelList(cat, bra, 1)
      .subscribe(res => {
        console.log(res);
        this.activeModels = res;
      }, (error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      }))
  }
  onSelectModel(req) {
    this.new_id = req;
  }
  linkModel() {
    this.userService.linkModelList(this.old_id, this.new_id)
      .subscribe(res => {
        console.log(res);
        alert("Model successfully link");
        this.getUserBrandDropdownList();
      }, error => {
        const err = JSON.parse(error['_body']);
        alert(err.reason);
      })
  }
  filter() {
    this.loader = true;
    if (this.category_id || this.brand_id || this.status_id) {
      this.userService.filterModelList(this.category_id, this.brand_id, this.status_id)
        .subscribe(res => {
          console.log(res);
          this.dropdownModels = res;
          this.loader = false;
        }, (error => {
          this.loader = false;
          const err = JSON.parse(error['_body']);
          alert(err.reason);
        }))
    } else {
      alert("Please select category,brand or status type.")
      this.loader = false;
    }
  }
}
