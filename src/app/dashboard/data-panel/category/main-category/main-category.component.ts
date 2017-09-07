import { FunctionService } from './../../../../_services/function.service';
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
  mainCategory: Category;
  showDialog = false;
  editCategoryForm: FormGroup ;
  createCategoryForm: FormGroup;
  createCat: any = { };
  del: any = { };
  constructor(private userService: UserService, private fb: FormBuilder, private functionService:FunctionService) {
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
  // create new main category
  createCategory( category: any) {
    console.log(category);
    this.createCat = { 'Level': 1, 'RefID': null , 'Name': category.Name };
    // confirm('Confirm');
    this.userService.createMainCategory(this.createCat)
      .subscribe(res => {
        console.log(res);
        alert("Main Category Created")
        this.createCategoryForm.reset();
        this.userService.getCategoryList(1) // list update after create new category
          .subscribe(mainCategory => {
          this.mainCategory = mainCategory;
            // console.log(users);
        });
    });
  }
  // update existing main category
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
  // delete main category
  deleteCategory(category: any) {
    // console.log(category);
    this.del = { 'ID': category.ID };
    this.userService.deleteCategory(this.del)
      .subscribe(res => {
        console.log(res);
        alert('Deleted');
        this.userService.getCategoryList(1) // list update after delete
          .subscribe(mainCategory => {
          this.mainCategory = mainCategory;
            // console.log(users);
        });
    });
  }
  // function for avoid only space submit
  avoidSpace(e){
    this.functionService.NoWhitespaceValidator(this.createCategoryForm,e)
  }
}
