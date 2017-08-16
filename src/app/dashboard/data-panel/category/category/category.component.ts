import { UserService } from './../../../../_services/user.service';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Category } from './../../../../_models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cat: Category;
  mainCat: Category;
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
      'Name': [null, Validators.required],
      'RefID': [null, Validators.required],
      FormList: this.fb.array([ this.createItem(), ])
    });
   }
   // for push new list
    createItem() {
      return this.fb.group({
        'DetailTypeID': '',
        'DisplayName': '',
        'Details': ''
      });
    }
  addItem() {
    const control = <FormArray>this.createCategoryForm.controls['FormList'];
    control.push(this.createItem());
  }
  removeDetails(i: number) {
    const control = <FormArray>this.createCategoryForm.controls['FormList'];
    control.removeAt(i);
  }
  showFormType(data) {
    console.log(data);
    const control = <FormArray>this.createCategoryForm.controls['FormList'];
    control.push(this.createItem());
  }
  ngOnInit() {
  // get list of main category
    this.userService.getCategoryList(1) // 1 for category refer to api doc
    .subscribe(mainCat => {
      this.mainCat = mainCat;
      console.log('mainCat' + mainCat);
    });
      // get list of category
    this.userService.getCategoryList(2) // 2 for category refer to api doc
    .subscribe(getCat => {
      this.cat = getCat;
      console.log('getCat' + getCat);
    });
  }
  createCategory( category: any) {
    console.log(category);
    this.createCat = { 'Level': 2 , 'RefID': category.RefID, 'Name': category.Name};
    this.userService.createCategory(this.createCat)
      .subscribe(res => {
        console.log(res);
        this.userService.getCategoryList(2) // list update after createcat
          .subscribe(getCat => {
          this.cat = getCat;
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
