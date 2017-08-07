import { UserService } from './../../../../_services/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Category } from './../../../../_models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cat: Category[] = [];
  mainCat: Category[] = [];
  showDialog = false;
  editCategoryForm: FormGroup ;
  createCategoryForm: FormGroup;
  createCat: any = { };
  del: any = { };
  constructor(private userService: UserService, private fb: FormBuilder) {
    // edit main category form
    this.editCategoryForm = this.fb.group({
      'Name' : [null, Validators.required],
      'ID' : [null, Validators.required],
      'RefID': [null, Validators.required]
    });
    // create main category form
    this.createCategoryForm = this.fb.group({
      'Name': [null, Validators.required]
      // 'Level': [null, Validators.required]
    });
   }

  ngOnInit() {
  // get list of main category
    this.userService.getCategoryList(1) // 2 for category refer to api doc
    .subscribe(mainCat => {
      this.mainCat = mainCat;
      console.log(mainCat);
    });
      // get list of category
    this.userService.getCategoryList(2) // 2 for category refer to api doc
    .subscribe(getCat => {
      this.cat = getCat;
      console.log(getCat);
    });
  }
  createCategory( category: any) {
    console.log(category);
    this.createCat = { 'Level': 2 };
    confirm('Confirm');
    this.userService.deleteCategory(this.createCat)
      .subscribe(res => {
        console.log(res);
        this.userService.getCategoryList(1) // list update after delete
          .subscribe(getCat => {
          this.cat = getCat;
            // console.log(users);
        });
    });
  }
    // passs current user as argument and open the popup
  openCategoryModel(item: any) {
    this.showDialog = true ; // for show dialog
    // populate prefilled value in form
    this.editCategoryForm.setValue({
      Name: item.category,
      ID: item.ID,
      RefID: item.RefID
    });
  }
  updateCategory( category: any) {
    console.log(category);
    this.userService.updateCategory(category)
      .subscribe( res => {
        // console.log(res);
        alert('category updated successfully');
        this.showDialog = false ;
        this.userService.getCategoryList(2) // list update after edit
          .subscribe(getCat => {
          this.cat = getCat;
          // console.log(getCat);
        });
      });
  }
  deleteCategory(category: any) {
    // console.log(category);
    this.del = { 'ID': category.ID };
    confirm('Confirm');
    this.userService.deleteCategory(this.del)
      .subscribe(res => {
        console.log(res);
        this.userService.getCategoryList(2) // list update after delete
          .subscribe(getCat => {
          this.cat = getCat;
            // console.log(getCat);
        });
    });
  }

}
