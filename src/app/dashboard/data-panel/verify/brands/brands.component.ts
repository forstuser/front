import { Category } from './../../../../_models/category';
import { Brand } from './../../../../_models/brand';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  mainCat:any;
  assignForm: FormGroup;
  mainCatId:any;
  cat:any;
  catId:any;
  catForms:any;
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.assignForm = this.fb.group({
      'brand_id': ['',Validators.required],
      'category_id':['',Validators.required],
      'title':['',Validators.required],
      'warranty_renewal_type':'',
      'dual_renewal_type':'',
      'product_type':'',
      'category_form_1_value':'',
      'category_form_2_value':'',
      'status_type':"1"
    });
  }

  ngOnInit() {
      this.userService.getCategoryList(1) // 1 for main category refer to api doc
        .subscribe(mainCat => {
          this.mainCat = mainCat;
          console.log(mainCat);
        },(error=>{
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
      },(error=>{
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
      console.log('catForms',this.catForms)
      // console.log(this.detailType);
    },(error=>{
      const err = JSON.parse(error['_body']);
      alert(err.reason);
    }))




    // this.userService.getSubCategoryList(catID)
    //   .subscribe(res => {
    //     this.catForms = res.data.subCategories;        
    //     // this.catForm = res.data.categoryForms;
    //     // console.log(this.catForm, "category form");
    //     // this.showProductForm = true;
    //     // this.getColorList();
    //     // this.getOfflineSellerList();
    //     // this.getBrandListByCategory(catID);
    //   });
  }

  addModels(form){
    console.log(form,"data added")
    this.userService.addModal(form)
    .subscribe(res=>{
      console.log(res,"post data");
      alert("Model Added successfully")
    },(error=>{
      const err = JSON.parse(error['_body']);
      alert(err.reason);
    }))
  }

}
