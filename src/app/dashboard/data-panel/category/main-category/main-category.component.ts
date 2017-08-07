import { Category } from './../../../../_models/category';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {
  mainCategory: Category[] = [];
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
    this.userService.getCategoryList(1) // 1 for main category refer to api doc
    .subscribe(mainCategory => {
      this.mainCategory = mainCategory;
      console.log(mainCategory);
    });
  }
  createCategory( category: any) {
    console.log(category);
    this.createCat = { 'Level': 1 };
    confirm('Confirm');
    this.userService.deleteCategory(this.createCat)
      .subscribe(res => {
        console.log(res);
        this.userService.getCategoryList(1) // list update after delete
          .subscribe(mainCategory => {
          this.mainCategory = mainCategory;
            // console.log(users);
        });
    });
  }
    // passs current user as argument and open the popup
  openCategoryModel(item: any) {
    this.showDialog = true ; // for show dialog
    // populate prefilled value in form
    this.editCategoryForm.setValue({
      Name: item.Name,
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
        this.userService.getCategoryList(1) // list update after edit
          .subscribe(mainCategory => {
          this.mainCategory = mainCategory;
          // console.log(users);
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
        this.userService.getCategoryList(1) // list update after delete
          .subscribe(mainCategory => {
          this.mainCategory = mainCategory;
            // console.log(users);
        });
    });
  }

}
