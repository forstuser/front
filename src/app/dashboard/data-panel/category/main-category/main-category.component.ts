import { FunctionService } from './../../../../_services/function.service';
import { Category } from './../../../../_models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})


export class MainCategoryComponent implements OnInit {
  mainCategory: any;
  showDialog = false;
  editCategoryForm: FormGroup;
  createCategoryForm: FormGroup;
  createCat: any = {};
  del: any = {};
  cat_id: number;

  constructor(private userService: UserService, private fb: FormBuilder, private functionService: FunctionService) {
    // edit main category form
    this.editCategoryForm = this.fb.group({
      'category_name': [null, Validators.required],
      'category_id': [null],
      'ref_id': [null],
      'status_type':[null,Validators.required]
    });

    // create main category form
    this.createCategoryForm = this.fb.group({
      'category_name': [null, Validators.required]
    });
  }


  ngOnInit() {
    // get list of main category
    this.userService.getCategoryList(1) // 1 for main category refer to api doc
      .subscribe(mainCategory => {
        this.mainCategory = mainCategory;
        console.log(mainCategory);
      });
  }


  // passs current user as argument and open the popup
  openCategoryModel(item: any) {
    this.cat_id = item.category_id;
    // console.log(this.cat_id, item, "categoty_id")
    this.showDialog = true;
    // this.editCategoryForm.setValue()
    // populate prefilled value in form
    this.editCategoryForm.setValue({
      category_name: item.category_name,
      category_id: item.category_id,
      ref_id: item.ref_id,
      status_type:item.status_type
    });
  }

  // create new main category
  createCategory(category: any) {
    console.log(category);
    this.createCat = { 'category_level': 1, 'ref_id': null, 'category_name': category.category_name, 'category_forms': [] };
    this.userService.createMainCategory(this.createCat)
      .subscribe((res) => {
        console.log(res, "category")
        alert("Main Category Created")
        this.createCategoryForm.reset();
        this.userService.getCategoryList(1) // list update after create new category
          .subscribe(mainCategory => {
            this.mainCategory = mainCategory;
          });
      },
      (error) => {
        console.log(error);
        const err = JSON.parse(error['_body']);
        alert(err.reason);

      }
      );
  }


  // update existing main category
  updateCategory(category: any) {
    if(category.status_type==1){
    console.log(category, "cat");
    this.userService.updateCategory(category)
      .subscribe(res => {
        console.log(res);
        alert('category updated successfully');
        this.showDialog = false;
        this.userService.getCategoryList(1) // list update after edit
          .subscribe(mainCategory => {
            this.mainCategory = mainCategory;
            // console.log(users);
          });
      });
  }
  else{
    alert("Please Active first then update");
  }
  }

  // delete main category
  deleteCategory(category: any) {
    console.log(category);
    this.userService.deleteCategory(category.category_id)
      .subscribe((res) => {
        console.log(res);
        alert('Deleted');
        this.userService.getCategoryList(1) // list update after delete
          .subscribe(mainCategory => {
            this.mainCategory = mainCategory;
          });
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  
  // function for avoid only space submit
  avoidSpace(e) {
    this.functionService.NoWhitespaceValidator(this.createCategoryForm, e)
  }
}
